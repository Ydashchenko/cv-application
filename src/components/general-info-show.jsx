import '../styles/general-info-show.css'
import PropTypes from 'prop-types'
import addressImg from '../assets/address.png'
import gmailImg from '../assets/gmail.png'
import phoneImg from '../assets/phone.png'

export function GeneralInfoShow({ fullName, eMail, phoneNumber, address }) {
  return (
    <div className="general-info-show">
      <h1 className="resume-name">{fullName}</h1>
      <div className="contact-info">
        {eMail && (
          <div>
            <img  src={gmailImg} className="fa-solid fa-envelope" />
            <span>{eMail}</span>
          </div>
        )}

        {phoneNumber && (
          <div>
            <img src={phoneImg} className="fa-solid fa-phone" />
            <span>{phoneNumber}</span>
          </div>
        )}

        {address && (
          <div>
            <img src={addressImg} className="fa-solid fa-location-dot" />
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

