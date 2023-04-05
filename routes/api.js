const router = require('express').Router();

const apiUsuariosRouter = require('./api/usuarios');
const apiLocalRouter = require('./api/locales');
const apiEventoRouter = require('./api/eventos');

const { checkToken } = require('./middlewares');

router.use('/usuarios', apiUsuariosRouter);
router.use('/locales', apiLocalRouter);
router.use('/eventos', apiEventoRouter);


module.exports = router;