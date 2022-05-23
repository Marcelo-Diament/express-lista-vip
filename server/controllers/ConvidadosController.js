const convidados = require('../data/convidados.json')

const controller = {}

controller.index = (req, res) => res.render('convidados', { title: 'Lista de Convidados', convidados })

module.exports = controller