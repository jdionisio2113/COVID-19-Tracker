import React from 'react';
import api from '../config/api';
import axios from 'axios';
import { all, get } from "axios";
import Cards from "./Cards";
import Chart from "./Chart";
import CountrySelector from "./CountrySelector";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            covidData: [],
            countriesData: [],
            dailyData: [],
            country: ''
        }

        this.fetchCovidData = this.fetchCovidData.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
    }

    componentDidMount() {

        this.fetchCovidData();

    }

    handleCountryChange(country) {

        if (country) {
            var countryName = country;
            api.get(`/countries/${country}`).then(country => {

                this.setState({
                    covidData: country.data,
                    country: countryName
                })

            })
        }
        else {
            this.fetchCovidData()
        }

    }


    fetchCovidData() {

        all([api.get(), api.get("/countries"), api.get("/daily")]).then(
            response => {
                var globalCount = response[0].data;
                var countries = response[1].data.countries;
                var dailyData = response[2].data

                const modifiedDailyData = dailyData.map((dailyData) => ({
                    confirmed: dailyData.confirmed.total,
                    deaths: dailyData.deaths.total,
                    date: dailyData.reportDate
                }))


                // console.log(globalCount)
                // console.log(countries)
                // console.log(modifiedDailyData)

                this.setState({
                    covidData: globalCount,
                    countriesData: countries,
                    dailyData: modifiedDailyData,
                    country: ''
                })

            }
        )
    }


    render() {
        const { covidData, countriesData, dailyData, country } = this.state
        return (
            <div>
                <h1 className="covid-title">C<i className="fas fa-biohazard"></i>VID-19</h1>
                <CountrySelector covidData={covidData} countriesData={countriesData} handleCountryChange={this.handleCountryChange} fetchCovidData={this.fetchCovidData} />
                <Cards covidData={covidData} />
                <Chart covidData={covidData} dailyData={dailyData} country={country} />
            </div >
        )
    }
}

export default App;