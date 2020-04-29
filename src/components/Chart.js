import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

function Chart(props) {
    var { dailyData, covidData, country } = props;

    const barChart = (
        covidData.confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [covidData.confirmed.value, covidData.recovered.value, covidData.deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}
            />
        ) : null
    );

    const lineChart = dailyData.length ? (<div className="chart">
        <Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }]
            }}
            width={400}
            height={400}
            options={{
                maintainAspectRatio: false
            }}
        />
    </div>) : null

    // var x = document.getElementById("global").selected = "true"
    return (
        <div className="line-chart">
            {country ? barChart : lineChart}
        </div>

    )
}

export default Chart;