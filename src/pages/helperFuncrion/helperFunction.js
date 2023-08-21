import moment from "moment";

export const createTransactionObj = (date, transactionType, amount) => {

    amount = parseFloat(amount).toFixed(2);

    const newTransaction = {
        debit: transactionType === 'Debit' ? amount : 0,
        credit: transactionType === 'Credit' ? amount : 0,
        transactionType,
        date: moment(date).format('DD MMMM YYYY'),
    };
    return newTransaction;
}

export const createDummyRecord = () => {

    const date = moment(new Date(new Date().getFullYear(), new Date().getMonth(), Math.floor(Math.random() * 30) + 1)).format('DD MMMM YYYY');
    const transactionType = Math.random() < 0.5 ? 'Credit' : 'Debit';
    const amount = (Math.random() * 9000 + 1000).toFixed(2);

    return createTransactionObj(date, transactionType, amount);;
}

export const insertNewRecord = (newRecord) => {

    const existingRecordsJSON = localStorage.getItem('TransactionsData');
    const existingRecords = existingRecordsJSON ? JSON.parse(existingRecordsJSON) : [];

    const updatedRecord = [...existingRecords, newRecord];

    const sortedRecord = sortedRecordsByDate(updatedRecord);

    localStorage.setItem('TransactionsData', JSON.stringify(sortedRecord));

    return sortedRecord;
}

export const calculateBalance = (transactionRecords) => {

    if (!transactionRecords || transactionRecords.length === 0) {
        return [];
    }

    let runningBalance = parseFloat(0);
    const updatedRecords = transactionRecords.map((record, index) => {
        let balance = 0.0;

        if (index === 0) {
            balance = record.transactionType === 'Credit' ? record.credit : (record.debit) * -1;
            balance = parseFloat(balance);
        } else {
            balance = runningBalance + (record.credit - record.debit);
        }

        runningBalance = balance

        return {
            ...record,
            balance: balance.toFixed(2)
        };
    });


    return updatedRecords;
}

export const sortedRecordsByDate = (transactionRecords) => {
    let sortedRecords = [];

    if (transactionRecords && transactionRecords.length > 0) {
        sortedRecords = transactionRecords.slice().sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
    }

    return sortedRecords;
}

export const getLastDayOfMonth = (month) => {
    const monthDaysMap = new Map([
        ["January", 31],
        ["February", 28],
        ["March", 31],
        ["April", 30],
        ["May", 31],
        ["June", 30],
        ["July", 31],
        ["August", 31],
        ["September", 30],
        ["October", 31],
        ["November", 30],
        ["December", 31]
    ])

    return monthDaysMap.get(month) || "Invalid month";
}

export const getmonthlyAverageBalance = (month) => {

    const daysInMonth = getLastDayOfMonth(month);

    const closingBalances = new Array(daysInMonth + 1).fill(null);
    closingBalances[0] = 0;


    const monthlyData = filterDataByMonth(month);

    for (let i = 1; i <= daysInMonth; i++) {

        const currentDate = (i) < 10 ? `0${i}` : `${i}`;
        const dailyRecords = monthlyData.filter((item) => item.date.split(' ')[0] === currentDate);
        const dailyClosingBalance = dailyRecords.reduce((sum, item) => sum + (item.credit - item.debit), 0);
        closingBalances[i] = closingBalances[i - 1] + dailyClosingBalance;

    }

    const totalClosingBalance = closingBalances.reduce((sum, balance) => sum + balance, 0);
    const monthlyAverageBalance = totalClosingBalance / daysInMonth;

    const formattedMab = monthlyAverageBalance.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

    return formattedMab;
}

export const filterDataByMonth = (month) => {
    const existingRecordsJSON = localStorage.getItem('TransactionsData');
    const transactionRecords = existingRecordsJSON ? JSON.parse(existingRecordsJSON) : [];

    const filteredData = transactionRecords.filter((record) => record.date.split(' ')[1] === month);

    return filteredData;
}

export const filterAvailableMonths = () => {

    const existingRecordsJSON = localStorage.getItem('TransactionsData');
    const transactionData = existingRecordsJSON ? JSON.parse(existingRecordsJSON) : [];

    const availableMonths = ['Select Month'];

    if (transactionData) {
        transactionData.forEach((transaction) => {

            const transactionMonth = transaction.date.split(' ')[1];
            const existingMonthObject = availableMonths.find(month => month === transactionMonth);

            if (!existingMonthObject) {
                availableMonths.push(transactionMonth);
            }
        });
    }

    return availableMonths;
}

export const getWeekNumberByDate = (dateString) => {
    const date = parseInt(dateString.split(' ')[0]);
    const weekNumber = Math.floor((date - 1) / 7) + 1;
    return weekNumber;
};

export const getWeeklyDate = (data) => {

    const weeklyDate = data.reduce((sum, record) => {
        const weekNumber = getWeekNumberByDate(record.date);

        if (!sum[weekNumber]) {
            sum[weekNumber] = { debit: 0, credit: 0, balance: 0 };
        }

        sum[weekNumber].debit += record.debit || 0;
        sum[weekNumber].credit += record.credit || 0;
        sum[weekNumber].balance = record.balance;
        return sum;
    }, {});

    return weeklyDate;

}