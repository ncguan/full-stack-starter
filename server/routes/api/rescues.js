import express from 'express';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';

import models from '../../models/index.js';
import interceptors from '../interceptors.js';
import helpers from '../helpers.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const records = await models.Rescue.findAll();
    res.json(records.map((record) => record.toJSON()))
})

router.get('/:id', async (req, res) => {
    try {
        const record = await models.Rescue.findByPk(req.params.id);
        res.json(record.toJSON());
    } catch (err) {
        console.log(err);
    }
})

export default router;