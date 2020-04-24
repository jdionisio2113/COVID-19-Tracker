import React from 'react';

function CountryPicker(props) {
    var { countriesData } = props
    if (!countriesData) {
        return 'Loading...'
    }
    console.log(countriesData)

    // countriesData.map(country => {
    //     console.log(country.name)
    //     var z = country.name
    //     return z
    // })

    return (
        <div className="country-selector">
            <select>
                <option>Global</option>
                {/* <option>{z}</option> */}
            </select>
        </div>
    )
}

export default CountryPicker;