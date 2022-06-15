import { string } from "prop-types"

function Name(props) {
    return (
        <div>{props.firstName[0]}. {props.lastName}</div>
    )
}

Name.propTypes = {
    firstName: string,
    lastName: string
}

export default Name