import { EducationData } from "./education-data";
import { DisplaySection } from "./display-section";

export function EducationShow({ educations }) {
  return (
    <div className="education-info-section resume-section">
      <DisplaySection
        array={educations}
        InfoComponent={EducationData}
        title="Education"
      />
    </div>
  );
}
