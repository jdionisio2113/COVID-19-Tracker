import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

function Chart(props) {
    var { dailyData } = props;

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

    return (
        <div className="line-chart">
            {lineChart}
        </div>

    )
}

export default Chart;