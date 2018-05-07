/* eslint-env jest */
import request from 'supertest';
import app from './server';

describe('redirects', () => {
  it('root redirect', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(301);
    expect(res.header.location).toBe('https://mcansh.blog/');
  });

  it('plain redirect', async () => {
    const res = await request(app).get('/sinatra-project');

    expect(res.status).toBe(301);
    expect(res.header.location).toBe('https://mcansh.blog/sinatra-project');
  });

  it('redirect with query string', async () => {
    const res = await request(app).get('/sinatra-project?autoplay=true');

    expect(res.status).toBe(301);
    expect(res.header.location).toBe(
      'https://mcansh.blog/sinatra-project?autoplay=true'
    );
  });
});
