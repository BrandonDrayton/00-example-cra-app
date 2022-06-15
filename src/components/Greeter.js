import './Greeter.css'


function Greeter(props) {
    const r = Math.random() * 100
    const g = Math.random() * 100
    const b = Math.random() * 100
    return (
        <h2
            className="Greeter"
            style={{ backgroundColor: props.bg || `rgb(${r} ${g} ${b}` }}
        > Hello {props.name ? ' ' + props.name : ''}!</h2 >
    )
}

export default Greeter