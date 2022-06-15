import './StarRating.css'
import { string } from "prop-types"

function StarRating(props) {
    const percentage = Math.min(props.StarRating / 10 * 100, 100)
    return (
        <div>
            <p className='title'>{props.title}</p>
            <p className='releaseDate'>{props.releaseDate}</p>
            <span className="StarRating">
                <span className="front" style={{ width: `${percentage}%` }}>"★★★★★"</span>
                <span className="back">"☆☆☆☆☆"</span>
            </span>
        </div>
    )
}
StarRating.propTypes = {
    firstName: string,
    lastName: string
}
export default StarRating














// import * as PropTypes from 'prop-types'
// import React from 'react'

// function Star(props) {
//     return <p> {props.rating === 1 ? '★☆☆☆☆' :
//         props.rating === 2 ? '★★☆☆☆' :
//             props.rating === 3 ? '★★★☆☆' :
//                 props.rating === 4 ? '★★★★☆' :
//                     props.rating >= 5 ? '★★★★★' : ''} </p>
// }

// Star.prototype = {
//     rating: PropTypes.number,
// }

// export default Star