import React from 'react';

function CountryPicker(props) {
    var { countriesData } = props

    return (
        <div>
            <div className="country-selector">
                <select>
                    <option>Global</option>
                    {countriesData.map((country, i) => {
                        return (
                            <option key={i} value={country.name}>{country.name}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default CountryPicker;