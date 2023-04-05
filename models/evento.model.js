const { executeQuery } = require('../utils');

const createEvent = ({ nombre_evento, descripcion, localizacion, fecha_evento, categoria }) => {
    return executeQuery('insert into eventos ( nombre_evento, descripcion, localizacion, fecha_evento, categoria) values (?,?,?,?,?)', [nombre_evento, descripcion, localizacion, fecha_evento, categoria]);
};

const createRelationship = (id_evento, id_local) => {
    return executeQuery('insert into event_local ( id_event, id_local) values (?,?)', [id_evento, id_local]);
};

const getAllEvents = () => {
    return executeQuery('select * from eventos');
}

const getEventsById = (id) => {
    return executeQuery('select * from eventos where id = ?', [id]);
}

const getEventsByLocal = (id) => {
    return executeQuery('select eventos.*, locales.id as local from event_local join eventos on event_local.id_event = eventos.id join locales on  event_local.id_local = locales.id where locales.id = ?', [id]);
}

const addEventUser = (idevent, iduser) => {
    return executeQuery('insert into user_event (id_evento, id_usuario) values (?,?)', [idevent, iduser]);
}

module.exports = { createEvent, getAllEvents, getEventsById, addEventUser, getEventsByLocal, createRelationship };
