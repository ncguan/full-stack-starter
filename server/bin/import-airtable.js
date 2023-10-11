#!/usr/bin/env node

import fetch from 'node-fetch';
import models from '../models/index.js';

const token = 'patTCpkEfmeKpfapg.c4f05db316ffb810afa03cfba835c4c3256ebadc61c9b15316b83e396ee450f1';
const url = 'https://api.airtable.com/v0/app0igU6SyNXNYHh6/rescues';
fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
})
    .then((response) => response.json())
    .then(async (data) => {
        // console.log(data);
        for (const record of data.records) {
            // console.log(record);
            await models.Rescue.create({
                Name: record.fields.Name,
                Address: record.fields.Address,
                Website: record.fields.Website,
                Email: record.fields.Email,
                Phone: record.fields.Phone,
                Services: record.fields.Services,
                Fee: record.fields.Fee,
                Logo: "logo url",
                Animals: record.fields.Animals
            });
        }
    });