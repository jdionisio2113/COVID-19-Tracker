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
            countriesData: []
        }

        this.fetchCovidData = this.fetchCovidData.bind(this);
    }

    componentDidMount() {

        this.fetchCovidData();

    }


    fetchCovidData() {

        all([api.get(), api.get("/countries")]).then(
            response => {
                var globalCount = response[0].data;
                var countries = response[1].data.countries;

                console.log(globalCount);
                console.log(countries)

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
                <CountryPicker countriesData={countriesData} />
                <Cards globalData={globalData} />
                <Chart />
            </div >
        )
    }
}

export default App;