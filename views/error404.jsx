const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src='/images/kangaroo.jpg' alt='kangaroo'></img>
                    <div>
                    Photo by <a href="https://unsplash.com/@unarchive?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeremy Bezanger</a> on <a href="https://unsplash.com/s/photos/funny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404