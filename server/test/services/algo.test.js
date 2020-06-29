const app = require('../../src/app');

describe('\'algo\' service', () => {
  it('registered the service', () => {
    const service = app.service('algo');
    expect(service).toBeTruthy();
  });
});
