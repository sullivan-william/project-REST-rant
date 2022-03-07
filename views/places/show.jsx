const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className='inactive'>No Comments Yet!</h3>
  )
  let rating = (
    <h3 className='inactive'>
      Not Yet Rated
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className='border'>
          <h2 className='rant'>{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3><strong>- {c.author}</strong></h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
    let sumRating = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = sumRating / data.place.comments.length
    rating = (
      <h3>
        {Math.round(averageRating)} stars
      </h3>
    )
  }
    return (
        <Def>
          <main className='show-container'>
            <h1>{ data.place.name }</h1>
            <img className='show-image' src={data.place.pic} alt={data.place.name}></img>
            <h3>Located in {data.place.city}, {data.place.state}</h3>
            <div className='show-text'>
              <h2>Rating</h2>
              {rating}
              <h2>Description</h2>
              <h3>{data.place.showEstablished()}</h3>
              <h4>Serving {data.place.cuisines}</h4>
            </div>
            <br></br>
            <h2>Comments</h2>
            {comments}
            <br></br>
            <h2>Add your own rating?</h2>
            <form method='POST' action={`/places/${data.place.id}/comment`}>
              <div className='form-group'>
                <label htmlFor='content'>Content</label>
                <textarea className='form-control' id='content' name='content'></textarea>
              </div>
              <div className='form-group'>
                <label htmlFor='author'>Author</label>
                <input className='form-control' id='author' name='author'></input>
              </div>
              <div className='form-group'>
                <label htmlFor='stars'>Rating</label>
                <input type='number' max='5' min='0' id='stars' name='stars'></input>
              </div>
              <div className='form-group'>
                <label htmlFor='rant'>Rant?</label>
                <input type='checkbox' id='rant' name='rant'></input>
              </div>
              <button type='submit' className='btn btn-primary'>Comment</button>
            </form>
          </main>
          <br></br>
          <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>Edit</a>
          <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
            <button type='submit' className='btn btn-danger'>Delete</button>
          </form>
        </Def>
    )
}

module.exports = show