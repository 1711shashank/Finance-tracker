# Finance Tracker Application

The Finance Tracker is a web application that helps users record their financial transactions and visualize their financial data.

**Live Project:** [View Live Project](https://finance-tracker-mh5r.onrender.com/)

## Features

- **Data Upload Page**: Users can record expenses with specific dates for different months. They can enter multiple transactions for a date, whether credits or debits. The data is stored in the browser's local storage.

- **Visualization Page**: Users can view line charts that represent their financial history. Charts display Total Debit, Total Credit, and Current Balance, aggregated on a weekly basis. Users can also see the Monthly Average Balance (MAB) for the selected month.

## Data Upload Page

To record your financial transactions:

1. Select the desired month.
2. Choose a specific date.
3. Specify the transaction type (credit or debit).
4. Enter the transaction amount (up to two decimal places).
5. Click the "Add" button to save the transaction.

## Visualization Page

To visualize your financial data:

1. Select a month from the list of months for which you've recorded transactions.
2. A line chart will display Total Debit, Total Credit, and Current Balance.
3. The chart's data points are aggregated weekly.
4. The Monthly Average Balance (MAB) is also shown.

## Usage

1. Start the application: `npm start`
2. Access the Data Upload page to record transactions.
3. Use the Visualization page to view line charts and MAB calculations.

## Dependencies

- React
- React Apexcharts

