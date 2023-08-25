import '../styles/input-group.css'
import PropTypes from 'prop-types'

export function InputGroup({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,
  optional,
  recommended,
  "data-key": dataKey,
}) {
  return (
    <div className="input-group">
      <label htmlFor={id}>
        <span className="label-text">{labelText}</span>
        {optional && <span className="optional-text">optional</span>}
        {recommended && <span className="recommended-text">recommended</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        />
      )}
    </div>
  );
}

InputGroup.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  optional: PropTypes.bool,
  recommended: PropTypes.bool,
  "data-key": PropTypes.string
}
