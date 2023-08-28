import '../styles/collapsed-form.css'
import PropTypes from 'prop-types'
import hiddenImg from '../assets/hidden.png'
import notHiddenImg from '../assets/notHidden.png'

export function CollapsedForm(props) {
  const { onClick, hideForm, title, arrayName } = props;
  const { isHidden, id } = props.form;
  return (
    <button
      className="collapsed-form section-form"
      id={id}
      onClick={onClick}
      data-array-name={arrayName}
    >
      <p className="collapsed-form-title">{title}</p>
      <img
        src={isHidden ? hiddenImg : notHiddenImg}
        className={`fa-regular ${isHidden ? "fa-eye-slash" : "fa-eye"} eye`}
        onClick={(e) => {
          e.stopPropagation();
          hideForm(e);
        }}
      />
    </button>
  );
}

CollapsedForm.propTypes = {
  props: PropTypes.object,
  onClick: PropTypes.func,
  hideForm: PropTypes.func,
  title: PropTypes.string,
  arrayName: PropTypes.string,
  form: PropTypes.object
}