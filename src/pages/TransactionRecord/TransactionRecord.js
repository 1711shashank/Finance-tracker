import './TransactionRecord.css'
import TransactionTable from './TransactionTable'


const TransactionRecord = ({ transactionRecords, onTransactionAdded }) => {

    const handleAddDummyData = () => {


        const dummyRecord = {
            amount: Math.floor(Math.random() * 9 + 1) * 1000,
            creditDebit: Math.random() < 0.5 ? 'Credit' : 'Debit',
            date: new Date()
        };


        const existingRecordsJSON = localStorage.getItem('TransactionsData');
        const existingRecords = existingRecordsJSON ? JSON.parse(existingRecordsJSON) : [];

        const updatedRecords = [...existingRecords, dummyRecord];
        localStorage.setItem('TransactionsData', JSON.stringify(updatedRecords));

        console.log(dummyRecord);
        onTransactionAdded();

    }


    const handleStatementAnalysis = () => {

    }

    return (
        <>
            <div className='transactionRecord'>
                <div className='form-container'>

                    <h2 className="statement-title">Transaction Data</h2>



                    <TransactionTable transactionRecords={transactionRecords} />


                    <div className='button-wrapper'>

                        <button type="submit" className='statement-analysis' onClick={handleAddDummyData}>
                            Add Dummy Record
                        </button>
                        <button type="submit" className='statement-analysis' onClick={handleStatementAnalysis}>
                            Statement Analysis
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TransactionRecord