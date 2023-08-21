import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import './StatementAnalysis.css'
import { SelectField } from '../helperFuncrion/FormField'
import { calculateBalance, filterAvailableMonths, filterDataByMonth, getWeeklyDate, getmonthlyAverageBalance } from "../helperFuncrion/helperFunction";


const StatementAnalysis = ({ setShowChartModal }) => {

    const availableMonths = filterAvailableMonths();

    const [selectedMonth, setSelectedMonth] = useState('August');

    const transactionRecords = filterDataByMonth(selectedMonth);
    const monthlyAverageBalance = getmonthlyAverageBalance(selectedMonth);


    const data = calculateBalance(transactionRecords);
    const weeklyData = getWeeklyDate(data);

    const weekNumbers = Object.keys(weeklyData).map(Number).sort((a, b) => a - b);
    const debitSeries = weekNumbers.map(week => weeklyData[week].debit);
    const creditSeries = weekNumbers.map(week => weeklyData[week].credit);
    const balanceSeries = weekNumbers.map(week => weeklyData[week].balance);

    const options = {
        chart: { type: "line", zoom: { enabled: false } },
        xaxis: { categories: weekNumbers.map(week => `Week ${week}`) },
        colors: ["#FF5733", "#33FF6D", "#337DFF"]

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
                    <div className='statementAnalysis-mab'>Monthly Average Balance <span className='mab-amount'>{monthlyAverageBalance}</span>  </div>
                </div>

                <SelectField label="Select Month" options={availableMonths} onChange={(e) => setSelectedMonth(e.target.value)} />

                <ReactApexChart options={options} series={series} type="line" height={300} />

                <div className="close-button-wrapper">
                    <button type="submit" onClick={() => setShowChartModal(false)}> Close  </button>
                </div>

            </div>


        </div >
    );
};

export default StatementAnalysis;