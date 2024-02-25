const router = require('express').Router();
const {
    getAllDirectors,
    getDirectorById,
    selectDirectors,
    sortDirectors,
    createDirector,
    updateDirector,
    deleteDirector
} = require('../controller/directorController');

router.get('/', getAllDirectors);

router.get('/', selectDirectors);

router.get('/', sortDirectors);

router.get('/:id', getDirectorById);

router.post('/', createDirector);

router.put('/:id', updateDirector);

router.delete('/:id', deleteDirector);

module.exports = router;