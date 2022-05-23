const convidados = require('../data/convidados.json')

const controller = {}

controller.index = (req, res) => res.render('convidados', {
  title: 'Lista de Convidados',
  convidados
})

controller.vip = (req, res) => res.render('convidados', {
  title: 'Lista de Convidados VIP',
  convidados: convidados.filter(convidado => convidado.vip)
})

module.exports = controller