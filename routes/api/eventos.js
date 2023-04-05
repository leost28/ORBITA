const { getEventsById, addEventUser, getEventsByLocal } = require('../../models/evento.model');
const { checkToken, checkTokenLocal } = require('../middlewares');

const router = require('express').Router();

router.get('/', checkTokenLocal, async (req, res) => {
    try {
        const event = await getEventsByLocal(req.local.id);
        res.json(event);
    }
    catch (err) {
        res.json({ err: err.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const event = await getEventsById(req.params.id);
        res.json(event);
    }
    catch (err) {
        res.json({ err: err.message });
    }
})

router.post('/', checkToken, async (req, res) => {
    try {
        const event = await addEventUser(req.body.id, req.user.id);
        res.json(event);
    }
    catch (err) {
        res.json({ err: err.message });
    }
})

module.exports = router;