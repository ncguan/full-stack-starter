import assert from 'assert';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';
import session from 'supertest-session';

import helper from '../../helper.js';
import app from '../../../app.js';

describe('/api/rescues', () => {
  let testSession;

  beforeEach(async () => {
    await helper.loadFixtures(['rescues']);
    testSession = session(app);
  });

  it('fetch all rescues from the Rescues table', async () => {
    const response = await testSession.get('/api/rescues').expect(StatusCodes.OK);
    assert.deepStrictEqual(response.body?.length, 3);
  });

  it('fetch one rescue record from the Rescue table', async () => {
    const response = await testSession.get('/api/rescues/1001').expect(StatusCodes.OK);
    assert.deepStrictEqual(response.body?.Name, 'Fixture Rescue 1001');
  })
})