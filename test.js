import test from 'ava';
import request from 'supertest';
import app from './server';

test('root redirect', async t => {
	t.plan(2);

	const res = await request(app)
		.get('/');

	t.is(res.status, 301);
	t.is(res.header['location'], 'https://mcansh.blog/');
});

test('plain post', async t => {
	t.plan(2);

	const res = await request(app)
		.get('/sinatra-project');

	t.is(res.status, 301);
	t.is(res.header['location'], 'https://mcansh.blog/sinatra-project');
});

test('post with query string', async t => {
	t.plan(2);

	const res = await request(app)
		.get('/those-were-the-days?autoplay=true');

	t.is(res.status, 301);
	t.is(res.header['location'], 'https://mcansh.blog/sinatra-project?autoplay=true');
});
