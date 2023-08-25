import '../styles/education-data.css'
import PropTypes from 'prop-types'

export function EducationData({ info }) {
    const { schoolName, degree, location, startDate, endDate } = info
    return (
        <div className="education-data">
            <div className="education-data-group">
                <p className="dates">
                    {startDate}
                    {startDate && endDate && <span> – </span>}
                    {endDate}
                </p>
                <p>{location}</p>
            </div>

            <div className="education-data-group">
                <p className="education-data-schoolName">{schoolName}</p>
                <p className="education-data-degree">{degree}</p>
            </div>
        </div>
    )
}

EducationData.propTypes = {
    info: PropTypes.object
}
