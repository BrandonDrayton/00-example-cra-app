import * as PropTypes from 'prop-types'
import './Card.css'

function Card(props) {
    return (
        <div className="card" >
            <div className="card-body">
                <h4 className="card-title h5 h4-sm">{props.name}</h4>
                <p className="card-text">{props.title}</p>
                <p className="circle">{props.firstName[0]} {props.lastName[0]}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}



export default Card