const FormCheckbox = ({ label, name, defaultValue, size }) => {
	return (
		<div className='form-control flex flex-row lg:flex-col justify-between lg:justify-center  items-center'>
			<label htmlFor={name} className='label cursor-pointer'>
				<span className='label-text capitalize'>{label}</span>
			</label>
			<input type="checkbox" name={name} defaultChecked={defaultValue} className={`checkbox checkbox-primary ${size}`} />
		</div>
	)
}

export default FormCheckbox
