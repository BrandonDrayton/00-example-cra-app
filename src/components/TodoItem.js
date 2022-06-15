import * as PropTypes from 'prop-types'

function TodoItem(props) {
    return (
        <div> {props.age > 5 ? (
            <p>{props.task} "age:"{props.age}</p>
        )
            :
            <p>{props.task}</p>
        }
        </div>
    )
}

TodoItem.propTypes = {
    task: PropTypes.string,
    age: PropTypes.number
}

TodoItem.defaultProps = {
    isPacked: false,
}



export default TodoItem