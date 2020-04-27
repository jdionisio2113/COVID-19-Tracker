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
            api.get(`/countries/${country}`).then(country => {
                console.log(country.data)

                this.setState({
                    globalData: country.data
                })
            })
        } else {
            this.fetchCovidData()
        }

    }


    fetchCovidData(country) {

        // let changeableUrl = api

        // if (country) {
        //     changeableUrl = `${api}/countries/${country}`
        // }

        // axios.get(changeableUrl)

        all([api.get(), api.get("/countries")]).then(
            response => {
                var globalCount = response[0].data;
                var countries = response[1].data.countries;

                this.setState({
                    globalData: globalCount,
                    countriesData: countries
                })
            }

        )
    }


    render() {
        const { globalData, countriesData } = this.state
        return (
            <div>
                <h1 className="covid-title">C<i className="fas fa-biohazard"></i>VID-19</h1>
                <CountryPicker countriesData={countriesData} handleCountryChange={this.handleCountryChange} fetchCovidData={this.fetchCovidData} />
                <Cards globalData={globalData} />
            </div >
        )
    }
}

export default App;