import assert from 'assert';
import _ from 'lodash';
import path from 'path';
import { v4 as uuid } from 'uuid';

import helper from '../helper.js';
import models from '../../models/index.js';

describe('models.Rescue', () => {
    beforeEach(async () => {
        await helper.loadFixtures([]);
    });

    it('creates a new Rescue record', async () => {
        assert.deepStrictEqual(await models.Rescue.count(),0);
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
        assert.deepStrictEqual(await models.Rescue.count(), 1);
        assert.notDeepStrictEqual(record.id, null);
        assert.deepStrictEqual(record.Name, 'Test Rescue');
    });
});