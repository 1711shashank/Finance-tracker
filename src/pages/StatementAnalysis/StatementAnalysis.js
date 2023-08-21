import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import './StatementAnalysis.css'
import ChartImg from '../../images/chart.svg'
import { SelectField } from '../helperFuncrion/FormField'
import { calculateBalance, filterAvailableMonths, filterDataByMonth, getWeeklyDate, getmonthlyAverageBalance } from "../helperFuncrion/helperFunction";


const StatementAnalysis = ({ setShowChartModal }) => {

    const [selectedMonth, setSelectedMonth] = useState('Select Month');

    const monthlyAverageBalance = getmonthlyAverageBalance(selectedMonth);
    const transactionRecords = filterDataByMonth(selectedMonth);
    const availableMonths = filterAvailableMonths();

    const data = calculateBalance(transactionRecords);
    const weeklyData = getWeeklyDate(data);

    const weekNumbers = Object.keys(weeklyData).map(Number).sort((a, b) => a - b);
    const debitSeries = weekNumbers.map(week => weeklyData[week].debit);
    const creditSeries = weekNumbers.map(week => weeklyData[week].credit);
    const balanceSeries = weekNumbers.map(week => weeklyData[week].balance);

    const options = {

        colors: ["#FF5733", "#33FF6D", "#337DFF"],
        chart: { type: "line", zoom: { enabled: false } },

        yaxis: { labels: { formatter: value => value.toFixed(2) } },
        xaxis: { categories: weekNumbers.map(week => `Week ${week}`) },

    };

    const series = [
        {
            name: "Total Debit",
            data: debitSeries
        },
        {
            name: "Total Credit",
            data: creditSeries
        },
        {
            name: "Total Balance",
            data: balanceSeries
        },
    ];

    return (
        <div id="chart" className="statementAnalysis">

            <div className='dim_background' onClick={() => setShowChartModal(false)} />

            <div className='chart_modal'>

                <div className="chart-header">
                    <h2 className="statementAnalysis-title"> Line Chart </h2>
                    {selectedMonth !== 'Select Month' && <div className='statementAnalysis-mab'>Monthly Average Balance <span className='mab-amount'>{monthlyAverageBalance}</span>  </div>}
                </div>

                <SelectField label="Select Month" options={availableMonths} onChange={(e) => setSelectedMonth(e.target.value)} />

                {
                    selectedMonth !== 'Select Month'

                        ? <ReactApexChart options={options} series={series} type="line" height={300} />
                        : <div className="chartImg-wrapper">
                            <p> Please select the Month</p>
                            <img src={ChartImg} alt="" />
                        </div>
                }

                <div className="close-button-wrapper">
                    <button type="submit" onClick={() => setShowChartModal(false)}> Close </button>
                </div>

            </div>
        </div >
    );
};

export default StatementAnalysis;
