import { DisplayForms } from "./display-forms";
import { ExpandSection } from "./expand-section";
import { CreateForm } from "./create-form";
import { EducationForm } from "./education-form";
import PropTypes from 'prop-types'

import '../styles/section.css'

export function EducationInput({
  educations,
  isOpen,
  onChange,
  createForm,
  setOpen,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
}) {
  return (
    <div className="add-education-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Education"
        iconName="fa-solid fa-graduation-cap"
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={educations}
          FormComponent={EducationForm}
          onChange={onChange}
          onCancel={onCancel}
          onHide={onHide}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          titleKey="schoolName"
          arrayName="educations"
        />

        <CreateForm onClick={createForm} buttonText="Education" />
      </div>
    </div>
  );
}


EducationInput.propTypes = {
  isOpen: PropTypes.bool,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  toggleCollapsed: PropTypes.func,
  onHide: PropTypes.func,
  onRemove: PropTypes.func,
  educations: PropTypes.array,
  createForm: PropTypes.func,
  setOpen: PropTypes.func
}
