function Button({btnText, style, onClick}){

    
    return(
        <>
        <button style={style} onClick={onClick}>
            {btnText}
        </button>
        </>
    )
}
export default Button