import React from 'react';

function CountryPicker(props) {
    var { countriesData, handleCountryChange, fetchCovidData } = props

    return (
        <div>
            <div className="country-selector">
                <select defaultValue="" onChange={(e) => {
                    if (e.target.value !== "Global") {
                        handleCountryChange(e.target.value)
                    } else {
                        fetchCovidData()
                    }
                }}>
                    <option value="Global">Global</option>
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