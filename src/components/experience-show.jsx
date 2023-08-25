import { ExperienceData } from "./experience-data";
import { DisplaySection } from "./display-section";

export function ExperienceShow({ experiences }) {
  return (
    <div className="experience-info-section resume-section">
      <DisplaySection
        array={experiences}
        InfoComponent={ExperienceData}
        title="Professional Experience"
      />
    </div>
  );
}
