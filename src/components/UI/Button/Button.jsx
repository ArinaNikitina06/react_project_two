const Button = ({children, use, disabled, handler}) => {
    return <button className={`btn btn_${use}`} onClick={handler} disabled={disabled}>{children}</button>;
}

export default Button