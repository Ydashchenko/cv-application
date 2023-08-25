import '../styles/general-info-show.css'
import PropTypes from 'prop-types'

export function GeneralInfoShow({ fullName, eMail, phoneNumber, address }) {
  return (
    <div className="general-info-show">
      <h1 className="resume-name">{fullName}</h1>
      <div className="contact-info">
        {eMail && (
          <div>
            <img  src='../public/gmail.png' className="fa-solid fa-envelope" />
            <span>{eMail}</span>
          </div>
        )}

        {phoneNumber && (
          <div>
            <img src='../public/phone.png' className="fa-solid fa-phone" />
            <span>{phoneNumber}</span>
          </div>
        )}

        {address && (
          <div>
            <img src='../public/address.png' className="fa-solid fa-location-dot" />
            <span>{address}</span>
          </div>
        )}
      </div>
    </div>
  );
}

GeneralInfoShow.propTypes = {
  fullName: PropTypes.string,
  eMail: PropTypes.string,
  phoneNumber: PropTypes.string,
  address: PropTypes.string
}

