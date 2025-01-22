const request = require('supertest')
const app = require('../api/app')
const DB = require('../api/db.config')

describe('MAIN ROUTER', () => {

    afterAll( async () => {
        await DB.sequelize.close()
    })

    describe('TRY GET', () => {
        it('Should return 200', async () => {
            const response = await request(app).get('/')
            expect(response.status).toBe(200)
        })

        it('Should return 501', async () => {
            const response = await request(app).get('/youarenotaclown')
            expect(response.status).toBe(501)
        })
    })

    describe('TRY PUT', () => {
        it('Should return 501 on giberrish', async () => {
            const response = await request(app).put('/youaretheentirecircus')
            expect(response.status).toBe(501)
        })

        it('Should return 501 on /', async () => {
            const response = await request(app).put('/')
            expect(response.status).toBe(501)
        })
    })
})