const router = require('express').Router()
const places = require('../models/places')
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
      .then((places) => res.render('places/index', { places }))
      .catch(e => {
        console.log(e)
        res.render('error404')
      })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => res.redirect('/places'))
    .catch(e => {
      console.log(e)
      res.render('error404')
    })
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  } else {
    res.render('places/show', {place: places[id], id})
  }
})

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  } else {
    res.render('places/edit', {place: places[id], id})
  }
})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]) {
    res.render('error404')
  } else {
    places[id] = req.body
    res.redirect(`/places/${id}`)
  }
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]) {
    res.render('error404')
  } else {
    if (!req.body.pic) {
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.splice(id, 1)
    res.redirect('/places')
  }
})

module.exports = router