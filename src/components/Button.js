const Button = ({infoText, handleClick}) => {
    return ( 
        <button className="buttonGlobal" onClick={handleClick}>
                {infoText}
        </button>
     );
}
 
export default Button;