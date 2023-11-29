import express from 'express';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';

import models from '../../models/index.js';
import interceptors from '../interceptors.js';
import helpers from '../helpers.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const record = await models.Rescue.create(_.pick(req.body, [
            'Name', 'Address', 'Website', 'Email', 'Phone', 'Services', 'Fee', 'Logo', 'Animals'
        ]));
        res.status(StatusCodes.CREATED).json(record.toJSON());
    } catch (err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
});

router.get('/', async (req, res) => {
    const records = await models.Rescue.findAll();
    res.json(records.map((record) => record.toJSON()))
});

router.get('/:id', async (req, res) => {
    try {
        const record = await models.Rescue.findByPk(req.params.id);
        res.json(record.toJSON());
    } catch (err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const record = await models.Rescue.findByPk(req.params.id);
        await record.update(_.pick(req.body, [
            'Name', 'Address', 'Website', 'Email', 'Phone', 'Services', 'Fee', 'Logo', 'Animals'
        ]));
        res.json(record.toJSON());
    } catch (err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const record = await models.Rescue.findByPk(req.params.id);
        await record.destroy();
        res.status(StatusCodes.OK).end();
    } catch (err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
});

export default router;