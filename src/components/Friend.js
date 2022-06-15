import * as PropTypes from 'prop-types'
import React from 'react'

function Friend(props) {
    return (
        <div>{props.firstName} is my friend</div>
    )
}

Friend.propTypes = {
    firstName: PropTypes.string.isRequired
}

Friend.defaultProps = {
    firstName: 'Bloke'
}

export default Friend