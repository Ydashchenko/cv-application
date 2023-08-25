
import '../styles/create-form.css'
import PropTypes from 'prop-types'

export function CreateForm({ onClick, buttonText }) {
  return (
    <button className="create-form" onClick={onClick}>
      <h4 className="button-content">
        {`Add ` + buttonText}
      </h4>
    </button>
  );
}

CreateForm.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func
}