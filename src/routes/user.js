const router = require('express').Router();
const _ = require('lodash');

const listUser = [];


router.route('/').get((req, res) => {
    res.status(200).json({
        ok: true,
        res: listUser,
    });
});

router.route('/').post((req, res) => {
    const body = req.body;
    listUser.push({
        id: listUser.length + 1,
        name: body.name,
        vaccine: false
    });
    res.status(201).json({
        ok: true,
        msg: 'Usuario creado',
    });
    console.log(listUser);
});

router.route('/:id').put((req, res) => {
    
    const body = req.body;
    const finded = _.find(listUser, {'id': Number(req.params.id)});
    finded.name = body.name;
    finded.vaccine = (body.vaccine === 'true');
    res.status(200).json({
        ok: true,
        msg: 'Actualizado' 
      });

});

module.exports = router;