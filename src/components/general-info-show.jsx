import PropTypes from 'prop-types'

export function GeneralInfoShow({ fullName, eMail, phoneNumber, address }) {
    return (
        <div className='general-info-show'>
            <h1 className='full-name-show'>{fullName}</h1>
            <div className='contact-show'>
            <div>
                <img src="" alt="email" />
                <span>{eMail}</span>
            </div>
            <div>
                <img src="" alt="phone" />
                <span>{phoneNumber}</span>
            </div>
            <div>
                <img src="" alt="location" />
                <span>{address}</span>
            </div>
            </div>
        </div>
    )
}

GeneralInfoShow.propTypes = {
    fullName: PropTypes.string,
    eMail: PropTypes.string,
    phoneNumber: PropTypes.string,
    address: PropTypes.string
}
