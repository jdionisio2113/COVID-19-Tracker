import React from 'react';

function CountrySelector(props) {
    var { countriesData, handleCountryChange, fetchCovidData, covidData } = props

    return (
        <div>
            <div className="country-selector">
                <select defaultValue="" onChange={(e) => {
                    handleCountryChange(e.target.value)
                }}>
                    <option value="">Global</option>
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

export default CountrySelector;