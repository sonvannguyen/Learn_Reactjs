const Checkbox = ({props, valueFilter, handleOnChangeCheckBox, name}) => {
    return ( 
        <label>
           <input onChange={(e) => handleOnChangeCheckBox( e.target.checked, name, valueFilter)} type="checkbox" className="checkbox__custom" />
           {props}
        </label>
     );
}
 
export default Checkbox;