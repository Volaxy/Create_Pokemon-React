import "./Input.css";

const Input = (props) => {
    return (
        <div className={`input ${props.classes ? props.classes : ""}`}>
            <label
                className="input__label"
                htmlFor={props.label.toLowerCase()}
            >
                {props.label}:
            </label>

            <input
                className="inner-input"
                type="text" id={props.label.toLowerCase()}
                style={{backgroundColor: props.backgroundColor, boxShadow: `0px 0px 5px ${props.boxShadowColor}`}}
            />
        </div>
    )
};

export default Input;
