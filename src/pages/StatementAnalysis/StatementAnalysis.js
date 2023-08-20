import React from "react";
import ReactApexChart from "react-apexcharts";
import './StatementAnalysis.css'
import { calculateBalance, getWeeklyDate } from "../helperFuncrion/helperFunction";


const StatementAnalysis = ({ transactionRecords }) => {

    const data = calculateBalance(transactionRecords);
    const weeklyData = getWeeklyDate(data);

    const weekNumbers = Object.keys(weeklyData).map(Number).sort((a, b) => a - b);
    const debitSeries = weekNumbers.map(week => weeklyData[week].debit);
    const creditSeries = weekNumbers.map(week => weeklyData[week].credit);
    const balanceSeries = weekNumbers.map(week => weeklyData[week].balance);

    const options = {
        chart: { type: "line" },
        xaxis: { categories: weekNumbers.map(week => `Week ${week}`) }
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
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    );
};

export default StatementAnalysis;
