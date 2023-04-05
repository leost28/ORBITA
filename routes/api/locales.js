const bcrypt = require('bcryptjs');
const { createEvent, createRelationship } = require('../../models/evento.model');

const router = require('express').Router();
const { getLocal, createLocal } = require('../../models/local.model');
const { createTokenLocal } = require('../../utils');
const { checkTokenLocal } = require('../middlewares');


router.post('/login', async (req, res) => {
    let local;
    try {
        local = await getLocal(req.body);
    } catch (err) {
        res.json({ error: err.message });
    }

    if (!local) {
        return res.json({ Error: 'Usuario o password incorrectos' });
    }

    res.json({ token: createTokenLocal(local), local_name: local.nombre_local, local_desc: local.descripcion, direccion: local.direccion_local });
});

router.post('/registro', async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password);
        const result = await createLocal(req.body);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.post('/perfilLocal', checkTokenLocal, async (req, res) => {
    try {
        const result = await createEvent(req.body);
        console.log(result.insertId);
        const result2 = await createRelationship(result.insertId, req.local.id);
        res.json(result2);
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;