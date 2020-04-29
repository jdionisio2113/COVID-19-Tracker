import React from 'react';
import api from '../config/api';
import axios from 'axios';
import { all, get } from "axios";
import Cards from "./Cards";
import Chart from "./Chart";
import CountryPicker from "./CountryPicker";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            globalData: [],
            countriesData: [],
            dailyData: []
        }

        this.fetchCovidData = this.fetchCovidData.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
    }

    componentDidMount() {

        this.fetchCovidData();

    }

    handleCountryChange(country) {

        if (country) {
            api.get(`/countries/${country}`).then(country => {
                // console.log(country.data)

                this.setState({
                    globalData: country.data
                })
            })
        }

    }


    fetchCovidData(country) {

        // let changeableUrl = api

        // if (country) {
        //     changeableUrl = `${api}/countries/${country}`
        // }

        // axios.get(changeableUrl)

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
                // console.log(dailyData)

                this.setState({
                    globalData: globalCount,
                    countriesData: countries,
                    dailyData: modifiedDailyData
                })

            }
        )
    }


    render() {
        const { globalData, countriesData, dailyData } = this.state
        return (
            <div>
                <h1 className="covid-title">C<i className="fas fa-biohazard"></i>VID-19</h1>
                <CountryPicker countriesData={countriesData} handleCountryChange={this.handleCountryChange} fetchCovidData={this.fetchCovidData} />
                <Cards globalData={globalData} />
                <Chart handleCountryChange={this.handleCountryChange} globalData={globalData} countriesData={countriesData} dailyData={dailyData} />
            </div >
        )
    }
}

export default App;