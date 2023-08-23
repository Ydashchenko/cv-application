export function GeneralInfoConstructor() {
    return (
        <form className="general-info-add">
            <h2>General Info</h2>
            <div>
                <label htmlFor="full-name">Full name</label>
                <input type="text" id="full-name" placeholder="First and last names" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" />
            </div>
            <div>
                <label htmlFor="phone-number">Phone number</label>
                <input type="tel" id="phone-number" placeholder="Phone number" />
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="City, Country" />
            </div>
        </form>
    )
}
