const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml.jpg',
        source: "https://unsplash.com/@jaywennington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        sourceName: 'Jay Wennington',
        source2: "https://unsplash.com/s/photos/thai-restaraunt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        source2Site: 'Unsplash'  
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'images/cat-cafe.jpg',
        source: "https://unsplash.com/@rebaspike?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        sourceName: 'Reba Spike',
        source2: "https://unsplash.com/s/photos/cat-cafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        source2Site: 'Unsplash'
  
      }]
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router