const InputField = ({ label, type, value, onChange }) => (
    <div className="form-group">
        <label className="form-label">
            {label}
        </label>
        <input
            type={type}
            placeholder="500"
            className={`form-input`}
            value={value}
            onChange={onChange}
            required
        />
    </div>
);

const SelectField = ({ label, options, onChange }) => (

    <div className="form-group">
        <label className="form-label">
            {label}
        </label>

        <select onChange={onChange} className='form-input' >
            {
                options.map((item, index) => (
                    <option className="option" key={index}>{item}</option>
                ))
            }
        </select>
    </div>
);

const DatePicker = ({ label, type, value, onChange }) => (
    <div className="form-group">
        <label className="form-label">
            {label}
        </label>
        <input
            type={type}
            className={`form-input`}
            value={value}
            onChange={onChange}
        />
    </div>
);

const AddTransactionButton = ({ onSubmit, isFormValid }) => (
    <button
        type="submit"
        className={`form-button ${isFormValid ? 'disabled' : ''}`}
        onClick={onSubmit}
        disabled={isFormValid}
    >
        Add Transaction
    </button>
);

export { InputField, SelectField, DatePicker, AddTransactionButton };
