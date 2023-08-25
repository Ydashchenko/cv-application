import '../styles/form-buttons.css'
import PropTypes from 'prop-types'

export function FormButtons({ cancel, save, remove }) {
  return (
    <div className="buttons">
      <button className="delete" onClick={remove} type="button">
        Delete
      </button>
      <div className="main-buttons">
        <button className="cancel" onClick={cancel} type="button">
          Cancel
        </button>
        <button className="save" onClick={save} type="submit">
          Save
        </button>
      </div>
    </div>
  );
}

FormButtons.propTypes = {
  cancel: PropTypes.func,
  save: PropTypes.func,
  remove: PropTypes.func
}
