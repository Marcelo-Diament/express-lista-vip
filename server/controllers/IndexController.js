const controller = {}

controller.index = (req, res) => res.render('index', { title: 'Festa do Caique' })

module.exports = controller