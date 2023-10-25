import assert from 'assert';
import _ from 'lodash';
import path from 'path';
import { v4 as uuid } from 'uuid';

import helper from '../helper.js';
import models from '../../models/index.js';

describe('models.Rescue', () => {
    beforeEach(async () => {
        await helper.loadFixtures(['rescues']);
    });

    it('creates a new Rescue record', async () => {
        assert.deepStrictEqual(await models.Rescue.count(), 3);
        const record = await models.Rescue.create({
            Name: 'Test Rescue',
            Address: '123 Street, City, CA 12345',
            Website: 'https://www.website.com',
            Email: 'rescue@email.com',
            Phone: '(123)456-7890',
            Services: 'service1, service 2, service3',
            Fee: 'Animal1: $100, Animal2: $100',
            Logo: 'https://image.com',
            Animals: 'animal1, animal2'
        });
        assert.deepStrictEqual(await models.Rescue.count(), 4);
        assert.notDeepStrictEqual(record.id, null);
        assert.deepStrictEqual(record.Name, 'Test Rescue');
    });

    it('finds a Rescue record by its id', async () => {
        const record = await models.Rescue.findByPk(1001);
        assert.notDeepStrictEqual(record, null);
        assert.deepStrictEqual(record.Name, 'Fixture Rescue 1001');
    });

    it('finds multiple Rescue records', async () => {
        const records = await models.Rescue.findAll({
            order: [['Name','ASC']]
        });
        assert.deepStrictEqual(records.length, 3);
        assert.deepStrictEqual(records[0].Name, 'Fixture Rescue 1000');
    });

    it('deletes a Rescue record', async () => {
        assert.deepStrictEqual(await models.Rescue.count(), 3);
        const record = await models.Rescue.findByPk(1001);
        await record.destroy();
        assert.deepStrictEqual(await models.Rescue.count(), 2);
    })
});