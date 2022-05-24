const fs = require('fs')
const path = require('path')
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

controller.add = (req, res) => res.render('adicionar-convidado', {
  title: 'Adicionar Convidado'
})

controller.create = (req, res) => {

  const convidadoNovo = {
    id: convidados[convidados.length - 1].id + 1,
    ...req.body
  }

  console.log({convidadoNovo})

  const convidadosAtualizados = [...convidados, convidadoNovo]

  fs.writeFileSync(
    path.join(__dirname, '../data/convidados.json'),
    JSON.stringify(convidadosAtualizados),
    'utf-8'
  )

  res.render('sucesso', {
    title: `Convidado(s) ${convidadoNovo.nome} adicionado(s) com sucesso!`
  })
}

module.exports = controller