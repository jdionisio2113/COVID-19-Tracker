import React from 'react';
import truncateString from '../utils/truncateString';

function Cards({ globalData: { confirmed, recovered, deaths, lastUpdate } }) {
    if (!confirmed) {
        return 'Loading...'
    }

    var infected = confirmed.value.toLocaleString();
    var recovered = recovered.value.toLocaleString();
    var deaths = deaths.value.toLocaleString();
    // var { data } = props
    // console.log(data)
    return (
        <div className="card-container">
            <div className="confirmed_card">
                <h2>Confirmed Cases</h2>
                <p className="infected_value">{infected}</p>
                <p>active cases of COVID-19 </p>
                <p className="info_date">Last updated: {truncateString(lastUpdate, 10)}</p>
            </div>
            <div className="recovered_card">
                <h2>Recovered</h2>
                <p className="recovered_value">{recovered}</p>
                <p>recoveries from COVID-19 </p>
                <p className="info_date">Last updated: {truncateString(lastUpdate, 10)}</p>
            </div>
            <div className="death_card">
                <h2>Deaths</h2>
                <p className="deaths_value">{deaths}</p>
                <p>deaths from COVID-19</p>
                <p className="info_date">Last updated: {truncateString(lastUpdate, 10)}</p>
            </div>
        </div>
    )
}

export default Cards;