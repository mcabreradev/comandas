const app = require('../../src/app');

describe('\'otro\' service', () => {
  it('registered the service', () => {
    const service = app.service('otro');
    expect(service).toBeTruthy();
  });
});
