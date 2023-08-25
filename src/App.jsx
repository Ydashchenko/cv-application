import "./styles/App.css";
import { GeneralInfoInput } from "./components/general-info";
import { EducationInput } from "./components/education-input";
import { ExperienceInput } from "./components/experience-input";
import { CV } from "./components/cv";
import { mockData } from "./components/mock-data";

import uniqid from "uniqid";
import { useState } from "react";


function App() {
  const [generalInfo, setGeneralInfo] = useState(mockData.generalInfo);
  const [sections, setSections] = useState(mockData.sections);
  const [sectionOpen, setSectionOpen] = useState(null);
  // Store prevState to revert changes when user clicks "cancel"
  const [prevState, setPrevState] = useState(null);

  function handleGeneralInfoChange(e) {
    const { key } = e.target.dataset;
    setGeneralInfo({ ...generalInfo, [key]: e.target.value });
  }

  function handleSectionChange(e) {
    const { key } = e.target.dataset;
    const inputValue = e.target.value;
    const form = e.target.closest(".section-form");
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((obj) => {
        if (obj.id === id) obj[key] = inputValue;
        return obj;
      }),
    });
  }

  function createForm(arrayName, object) {
    setPrevState(null);
    // Clone array to not push object to original
    const section = structuredClone(sections[arrayName]);
    section.push(object);
    setSections({ ...sections, [arrayName]: section });
  }

  const createEducationForm = () =>
    createForm("educations", {
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    });

  const createExperienceForm = () =>
    createForm("experiences", {
      companyName: "",
      positionTitle: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    });

  const setOpen = (sectionName) => setSectionOpen(sectionName);
  function removeForm(e) {
    const form = e.target.closest(".section-form");
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    const { id } = form;

    setSections({
      ...sections,
      [arrayName]: section.filter((item) => item.id !== id),
    });
  }

  function cancelForm(e) {
    // if no prevState found remove form
    if (prevState == null) {
      removeForm(e);
      return;
    }

    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          // Revert back to previous state
          form = prevState;
          form.isCollapsed = true;
        }

        return form;
      }),
    });
  }

  function toggleValue(e, key) {
    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          setPrevState(Object.assign({}, form));
          form[key] = !form[key];
        }

        return form;
      }),
    });
  }

  const toggleCollapsed = (e) => toggleValue(e, "isCollapsed");
  const toggleHidden = (e) => toggleValue(e, "isHidden");

  return (
    <div className="app">
      <div className="edit-side">
        <div className="form-container">
            <>
              <GeneralInfoInput
                onChange={handleGeneralInfoChange}
                fullName={generalInfo.fullName}
                eMail={generalInfo.eMail}
                phoneNumber={generalInfo.phoneNumber}
                address={generalInfo.address}
              />
              <EducationInput
                educations={sections.educations}
                isOpen={sectionOpen === "Education"}
                onChange={handleSectionChange}
                createForm={createEducationForm}
                setOpen={setOpen}
                onCancel={cancelForm}
                toggleCollapsed={toggleCollapsed}
                onHide={toggleHidden}
                onRemove={removeForm}
              />
              <ExperienceInput
                experiences={sections.experiences}
                isOpen={sectionOpen === "Experience"}
                onChange={handleSectionChange}
                createForm={createExperienceForm}
                setOpen={setOpen}
                onCancel={cancelForm}
                toggleCollapsed={toggleCollapsed}
                onHide={toggleHidden}
                onRemove={removeForm}
              />
            </>
        </div>
      </div>

      <CV
        generalInfo={generalInfo}
        sections={sections}
      />
    </div>
  );
}

export default App;