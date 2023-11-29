import assert from 'assert';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';
import session from 'supertest-session';

import helper from '../../helper.js';
import app from '../../../app.js';
import models from '../../../models/index.js'

describe('/api/rescues', () => {
  let testSession;

  beforeEach(async () => {
    await helper.loadFixtures(['rescues']);
    testSession = session(app);
  });

  it('creates a new Rescue', async () => {
    const response = await testSession.post('/api/rescues')
    .send({Name: 'Created Name', Address: 'Created Address', Website: 'Created Website', Email: 'Created Email', Phone: 'Created Phone', Services: 'Ceated Services', Fee:'Created Fee', Logo: 'Created Logo', Animals: 'Created Animals'})
    .expect(StatusCodes.CREATED);

    const record = await models.Rescue.findByPk(response.body.id);
    assert.deepStrictEqual(record.Name, 'Created Name');
    assert.deepStrictEqual(record.Logo, 'Created Logo')
  });

  it('fetch all rescues from the Rescues table', async () => {
    const response = await testSession.get('/api/rescues').expect(StatusCodes.OK);
    assert.deepStrictEqual(response.body?.length, 3);
  });

  it('fetch one rescue record from the Rescue table', async () => {
    const response = await testSession.get('/api/rescues/1001').expect(StatusCodes.OK);
    assert.deepStrictEqual(response.body?.Name, 'Fixture Rescue 1001');
  });

  it('updates an existing Rescue', async () => {
    await testSession.patch('/api/rescues/1001')
    .send({Name: 'Updated Name'})
    .expect(StatusCodes.OK)
  });

  it('deletes an existing Rescue', async () => {
    await testSession.delete('/api/rescues/1001').expect (StatusCodes.OK);

    const record = await models.Rescue.findByPk(1001);
    assert.deepStrictEqual(record, null);
  })
})