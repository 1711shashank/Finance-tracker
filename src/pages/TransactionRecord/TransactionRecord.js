import { createDummyRecord, insertNewRecord } from '../helperFuncrion/helperFunction';
import './TransactionRecord.css'
import TransactionTable from './TransactionTable'


const TransactionRecord = ({ transactionRecords, onTransactionAdded }) => {


    const handleAddDummyData = () => {

        const dummyRecord = createDummyRecord();
        const updatedRecord = insertNewRecord(dummyRecord);

        console.log(updatedRecord);
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