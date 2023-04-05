const { executeQuery, executeQueryOne } = require('../utils');

const createUser = ({ nombre, primer_apellido, segundo_apellido, email, fecha_nacimiento, nombre_usuario, password }) => {
    return executeQuery('insert into usuarios (nombre, primer_apellido,segundo_apellido,email, fecha_nacimiento, nombre_usuario, password) values (?,?,?,?,?,?,?)', [nombre, primer_apellido, segundo_apellido, email, fecha_nacimiento, nombre_usuario, password]);
}

const getUser = ({ email, password }) => {
    return executeQueryOne('select * from usuarios where email = ? and password = ?', [email, password]);
}

const getUserById = (id) => {
    return executeQueryOne('select * from usuarios where id = ?', [id]);
}

const getUserEvent = (id) => {
    return executeQuery('select usuarios.*, eventos.* from user_event join usuarios on user_event.id_usuario = usuarios.id join eventos on user_event.id_evento = eventos.id where usuarios.id = ?', [id]);
}

module.exports = { createUser, getUser, getUserEvent, getUserById }