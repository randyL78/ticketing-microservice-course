import request from "supertest"
import { app } from '../../app'

beforeEach(async () => {
  await request(app)
  .post('/api/users/signup')
  .send({
    email: 'test@test.com',
    password: 'password'
  })
  .expect(201)
})

it('fails when a email does not exist is supplied', async () => {
  await request(app)
  .post('/api/users/signin')
  .send({
    email: 'test2@test.com',
    password: 'password'
  })
  .expect(400)
})

it('fails when an incorrect password is supplied', async () => {
  await request(app)
  .post('/api/users/signin')
  .send({
    email: 'test2@test.com',
    password: 'pasword'
  })
  .expect(400)
})

it('sets a cookie after successful signin', async () => {
  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(200)

    expect(response.get('Set-Cookie')).toBeDefined()
})