const db = require('../models')

async function seed() {
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })
    let comment = await db.Comment.create({
        author: "Famished Fran",
        rant: false,
        stars: 5.0,
        content: "Wow, simply amazing! Highly reccomend!"
    })
    place.comments.push(comment.id)
    let commentTwo = await db.Comment.create({
        author: "Gluttonous Greg",
        rant: true,
        stars: 1.0,
        content: "Trash. Straight trash."
    })
    place.comments.push(commentTwo.id)
    await place.save()
    process.exit()
}

seed()