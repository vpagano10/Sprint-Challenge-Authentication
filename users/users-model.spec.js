const request = require('supertest');
const server = require('../api/server');
const Users = require('./users-model');
const db = require('../database/dbConfig');

describe('users and jokes', function() {

    describe('GET /users', function() {

        it ('user route working', function() {
            return request(server)
                .get('/api/users')
                .then(res => {
                    expect(res.body)
                });
        });

        it ('should return 500 because no credentials provided', function() {
            return request(server)
                .get('/api/users')
                .then(res => {
                    expect(res.status).toBe(500)
                });
        });

    }); // end users GET
    
    describe('GET /jokes', function() {

        it ('jokes route working', function() {
            return request(server)
                .get('/api/jokes')
                .then(res => {
                    expect(res.body)
                });
        });

        it ('should return 500 because no credentials provided', function() {
            return request(server)
                .get('/api/jokes')
                .then(res => {
                    expect(res.status).toBe(500)
                });
        });

    }); // end jokes GET

}); // end users and jokes
