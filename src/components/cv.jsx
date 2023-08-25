import { GeneralInfoShow } from "./general-info-show";
import { EducationShow } from "./education-show";
import { ExperienceShow } from "./experience-show";
import PropTypes from 'prop-types'

import '../styles/cv.css'

export function CV({ generalInfo, sections }) {
    return (
        <div className="cv-container">
            <div className='resume'>
                <GeneralInfoShow
                    fullName={generalInfo.fullName}
                    eMail={generalInfo.eMail}
                    phoneNumber={generalInfo.phoneNumber}
                    address={generalInfo.address}
                />
                <div>
                    <EducationShow educations={sections.educations} />
                    <ExperienceShow experiences={sections.experiences} />
                </div>
             </div>
        </div>
    )
}

CV.propTypes = {
    generalInfo: PropTypes.object,
    sections: PropTypes.object
}