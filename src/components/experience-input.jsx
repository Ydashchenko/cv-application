import { ExpandSection } from "./expand-section";
import { CreateForm } from "./create-form";
import { DisplayForms } from "./display-forms";
import { ExperienceForm } from "./experience-form";
import PropTypes from 'prop-types'

import '../styles/section.css'

export function ExperienceInput({
  isOpen,
  createForm,
  setOpen,
  experiences,
  onChange,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
}) {
  return (
    <div className="add-experience-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Experience"
        iconName="fa-solid fa-briefcase"
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={experiences}
          onChange={onChange}
          onCancel={onCancel}
          toggleCollapsed={toggleCollapsed}
          onHide={onHide}
          onRemove={onRemove}
          FormComponent={ExperienceForm}
          titleKey="companyName"
          arrayName="experiences"
        />

        <CreateForm onClick={createForm} buttonText="Experience" />
      </div>
    </div>
  );
}

ExperienceInput.propTypes = {
  isOpen: PropTypes.bool,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  toggleCollapsed: PropTypes.func,
  onHide: PropTypes.func,
  onRemove: PropTypes.func,
  experiences: PropTypes.array,
  createForm: PropTypes.func,
  setOpen: PropTypes.func
}
