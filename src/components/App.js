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

        this.fetchCovidData = this.fetchCovidData.bind(this);
    }

    componentDidMount() {

        this.fetchCovidData();

    }


    fetchCovidData() {

        all([api.get(), api.get("/countries")]).then(
            res => {
                var globalCount = res[0].data;
                var countries = res[1].data;

                console.log(globalCount);
                console.log(countries)
            }

        )
    }

    render() {
        return (
            <div>
                <h1>COVID-19</h1>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;