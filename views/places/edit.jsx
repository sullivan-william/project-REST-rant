const React = require('react')
const Def = require('../default')

function edit (data) {
    return (
        <Def>
            <p>Edit {data.place.name}</p>
        </Def>
    )
}

module.exports = edit