import '../styles/expand-section.css'
import PropTypes from 'prop-types'
import arrowImg from '../assets/arrow.png'

export function ExpandSection({ isOpen, setOpen, sectionName, iconName }) {
  return (
    <button
      className="expand-section"
      onClick={() => setOpen(isOpen ? "" : sectionName)}
    >
      <h2 className="expand-section-header">
        <i className={`${iconName}`} />
        {sectionName}
      </h2>
      <img src={arrowImg} className={`fa-solid fa-chevron-up chevron ${isOpen ? "open" : ""}`} />
    </button>
  );
}

ExpandSection.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
  sectionName: PropTypes.string,
  iconName: PropTypes.string
}