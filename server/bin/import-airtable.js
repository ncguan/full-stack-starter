#!/usr/bin/env node

import fetch from 'node-fetch';

import path from 'path';
import { unlink, writeFile } from 'fs/promises';

import models from '../models/index.js';

import s3 from '../lib/s3.js';

const token = 'patTCpkEfmeKpfapg.c4f05db316ffb810afa03cfba835c4c3256ebadc61c9b15316b83e396ee450f1';
const url = 'https://api.airtable.com/v0/app0igU6SyNXNYHh6/rescues';
fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
})
    .then((response) => response.json())
    .then(async (data) => {
        for (const record of data.records) {
            let Logo;
            if (record.fields.Logo.length > 0) {
                const attachment = record.fields.Logo[0];
                const { filename, url } = attachment;
                const filePath = path.resolve(filename);
                try {
                    const response = await fetch(url);
                    const arrayBuffer = await response.arrayBuffer();
                    await writeFile(filePath, Buffer.from(arrayBuffer));
                    const key = path.join('uploads', filename);
                    await s3.putObject(key, filePath);
                    Logo = filename;
                } catch (err) {
                    console.log(err);
                } finally {
                    await unlink(filePath);
                }
            }

            await models.Rescue.create({
                Name: record.fields.Name,
                Address: record.fields.Address,
                Website: record.fields.Website,
                Email: record.fields.Email,
                Phone: record.fields.Phone,
                Services: record.fields.Services,
                Fee: record.fields.Fee,
                Logo,
                Animals: record.fields.Animals
            });
        }
    });