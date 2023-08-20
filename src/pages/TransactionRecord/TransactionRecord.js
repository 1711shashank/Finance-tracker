import { createDummyRecord, insertNewRecord } from '../helperFuncrion/helperFunction';
import './TransactionRecord.css'
import TransactionTable from './TransactionTable'


const TransactionRecord = ({ transactionRecords, onTransactionAdded, setShowChartModal }) => {

    const handleAddDummyData = () => {
        const dummyRecord = createDummyRecord();
        insertNewRecord(dummyRecord);
        onTransactionAdded();
    }


    const handleStatementAnalysis = () => {
        setShowChartModal(true);
    }

    return (
        <>
            {/* <div className='transactionRecord '> */}
                <div className='form-container' >

                    <h2 className="form-title">Transaction Data</h2>

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
            {/* </div> */}
        </>
    )
}

export default TransactionRecord