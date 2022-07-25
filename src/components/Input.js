const Input = ({ type, id }) => {
	return (
		<div className="form-data">
			<label htmlFor={id}>{id}</label>
			<input type={type} id={id} />
		</div>
	);
};

Input.defaultProps = {
	type: "text",
};

export default Input;
