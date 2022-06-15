import * as PropTypes from 'prop-types'


function Item(props) {
    return (
        <div>{props.name} {props.isPacked && "✔️"}</div>
    )
}

Item.propTypes = {
    isPacked: PropTypes.bool,
    name: PropTypes.string
}

Item.defaultProps = {
    isPacked: false,
}
export default Item