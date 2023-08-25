import { InputGroup } from "./input-group";
import PropTypes from 'prop-types'

import '../styles/general-info.css'

export function GeneralInfoInput({ onChange, eMail, fullName, phoneNumber, address }) {
  return (
    <form className="general-info">
      <h2>General Info</h2>
      <InputGroup
        type="text"
        id="full-name"
        labelText="Full name"
        placeholder="First and last name"
        value={fullName}
        onChange={onChange}
        data-key="fullName"
      />
      <InputGroup
        type="email"
        id="eMail"
        labelText="Email"
        placeholder="Enter email"
        value={eMail}
        onChange={onChange}
        data-key="eMail"
        recommended
      />
      <InputGroup
        type="tel"
        id="phone-number"
        labelText="Phone number"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={onChange}
        data-key="phoneNumber"
        recommended
      />
      <InputGroup
        type="text"
        id="address"
        labelText="Address"
        placeholder="City, Country"
        value={address}
        onChange={onChange}
        data-key="address"
        recommended
      />
    </form>
  );
}

GeneralInfoInput.propTypes = {
  fullName: PropTypes.string,
  onChange: PropTypes.func,
  eMail: PropTypes.string,
  phoneNumber: PropTypes.string,
  address: PropTypes.string
}
