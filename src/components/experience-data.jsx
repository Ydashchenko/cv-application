import '../styles/experience-data.css'
import PropTypes from 'prop-types'


export function ExperienceData({ info }) {
  return (
    <div className="experience-info">
      <div className="experience-info-group">
        <p className="dates">
          {info.startDate}
          {info.startDate && info.endDate && <span> – </span>}
          {info.endDate}
        </p>
        <p>{info.location}</p>
      </div>

      <div className="experience-info-group">
        <p className="experience-info-companyName">{info.companyName}</p>
        <p className="experience-info-positionTitle">{info.positionTitle}</p>
        <p className="experience-info-description">{info.description}</p>
      </div>
    </div>
  );
}

ExperienceData.propTypes = {
  info: PropTypes.object
}