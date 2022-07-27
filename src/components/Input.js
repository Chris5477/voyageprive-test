const Input = ({ type, id, label, name, value, handleChange }) => {

	return (
		<div className="form-data">
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} name={name} value={value} onChange={handleChange} />
		</div>
	);
};

Input.defaultProps = {
	type: "text",
};

export default Input;
