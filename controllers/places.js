const router = require('express').Router()
const places = require('../models/places')
const db = require('../models')

// index
router.get('/', (req, res) => {
    db.Place.find()
      .then((places) => res.render('places/index', { places }))
      .catch(e => {
        console.log(e)
        res.render('error404')
      })
})

// new
router.get('/new', (req, res) => {
  res.render('places/new')
})

// create
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => res.redirect('/places'))
    .catch(e => {
      console.log(e)
      res.render('error404')
    })
})

// show
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      res.render('places/show', { place })
    })
    .catch(e => {
      console.log(e)
      res.render('error404')
    })
})

// edit
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      res.render('places/edit', { place })
    })
    .catch(e => {
      console.log(e)
      res.render('error404')
    })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedPlace => {
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(e => {
      res.render('error404')
    })
})

// delete
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(deletedPlace => {
      res.status(303).redirect('/places')
    })
})

// comment
router.post('/:id/comment', (req, res) => {
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
    .then(place => {
      db.Comment.create(req.body)
        .then(comment => {
          place.comment.push(comment.id)
          place.save()
            .then(() => {
              res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(e => {
          console.log(e)
          res.render('error404')
        })
    })
    .catch(e => {
      // console.log(e)
      res.render('error404')
    })
  // res.send('GET /comment stub')
  console.log(req.body)
})

module.exports = router