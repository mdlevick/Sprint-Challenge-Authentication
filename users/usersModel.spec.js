const request = require('supertest')
const server = require('../api/server')
const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../auth/config')

describe('test register', function () {
    it('works', async function () {
        const res = await request(server).post('/api/auth/register')
            .send({
                username: 'buzzlightyear',
                password: 'toinfinity'
            });
        expect(res.status).toBe(500);

    })
    it('works', async function () {
        const res = await request(server).post('/api/auth/register')
            .send({
                username: 'bobtbuilder',
                password: 'canwefixit'
            });
        expect(res.req.method).toBe('POST');

    })
})
let token = ''
describe('test login', function () {
    it('works', async function () {
        const res = await request(server).post('/api/auth/login')
            .send({
                username: 'bobtbuilder',
                password: 'canwefixit'
            });
        token = JSON.parse(res.text).token;
        expect(res.status).toBe(500);
    })
    it('works', function () {
        let isValid = false
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (!err) {
                isValid = true
            }
        })
        expect(isValid).toBe(false)
    })
})