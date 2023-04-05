const jwt = require('jsonwebtoken');

const executeQuery = (query, data = []) => {
    return new Promise((resolve, reject) => {
        db.query(query, data, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    });
}

const executeQueryOne = (query, data = []) => {
    return new Promise((resolve, reject) => {
        db.query(query, data, (err, result) => {
            if (err) return reject(err);
            if (result.length === 0) return resolve(null);
            resolve(result[0]);
        })
    });
}

const createToken = (usuario) => {
    const obj = {
        usuarioId: usuario.id
    }
    return jwt.sign(obj, process.env.SECRET_KEY);
}

const createTokenLocal = (local) => {
    const obj = {
        localId: local.id
    }
    return jwt.sign(obj, process.env.SECRET_KEY);
}

module.exports = { executeQuery, executeQueryOne, createToken, createTokenLocal }