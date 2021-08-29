import "../../assets/styles/button.css"

const Button = (props) =>{
    return (
        <button className="btn trans" data-background-color={props.background_color} data-color={props.color}>
            {props.children}
        </button>
    )
}

export default Button;