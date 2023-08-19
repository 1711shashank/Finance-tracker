const AmountField = ({ label, name, type, value, onChange }) => (
    <div className="form-group">
        <label htmlFor={name} className="form-label">
            {label}
        </label>
        <input
            type={type}
            name={name}
            placeholder="500"
            className={`form-input`}
            value={value}
            onChange={onChange}
            required
        />
    </div>
);

const TransactionTypeField = ({ label, name, value, onChange }) => (
    <div className="form-group">
        <label htmlFor={name} className="form-label">
            {label}
        </label>
        <select value={value} onChange={onChange} className='form-input' required >
            <option value={'Credit'}>Credit</option>
            <option value={'Debit'}>Debit</option>
        </select>
    </div>
);

const DatePicker = ({ label, name, type, value, onChange }) => (
    <div className="form-group">
        <label htmlFor={name} className="form-label">
            {label}
        </label>
        <input
            type={type}
            name={name}
            className={`form-input`}
            value={value}
            onChange={onChange}
        />
    </div>
);


const AddTransactionButton = ({ onSubmit }) => (
    <button type="submit" className={`form-button`} onClick={onSubmit}>
        Add Transaction
    </button>
);


export { AmountField, TransactionTypeField, DatePicker, AddTransactionButton };
