const bcrypt = require('bcryptjs');
const { getAllEvents } = require('../../models/evento.model');
const { checkToken } = require('../middlewares');
const router = require('express').Router();
const { createUser, getUser, getUserEvent } = require('../../models/usuario.model');
const { createToken } = require('../../utils');

router.get('/perfil', async (req, res) => {
    try {
        const event = await getAllEvents();
        res.json(event);
    }
    catch (err) {
        res.json({ err: err.message });
    }
})

router.get('/events', checkToken, async (req, res) => {
    try {
        const event = await getUserEvent(req.user.id);
        res.json(event);
    }
    catch (err) {
        res.json({ err: err.message });
    }
})

router.post('/login', async (req, res) => {
    let usuario;
    try {
        usuario = await getUser(req.body);
    } catch (err) {
        res.json({ error: err.message });
    }

    if (!usuario) {
        return res.json({ Error: 'Email o password incorrectos' });
    }
    res.json({ token: createToken(usuario), username: usuario.nombre_usuario, nombre: usuario.nombre, apellidoUno: usuario.primer_apellido, apellidoDos: usuario.segundo_apellido, id: usuario.id });
});

router.post('/registro', async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password);

        const result = await createUser(req.body);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;