import "./button.scss"

const Button = ({children, use, disabled, handler, isRound=false}) => {
    return <button className={`btn btn_${use} ${isRound ? 'btn_round' : ''}`}  onClick={handler} disabled={disabled} >{children}</button>;
}

export default Button