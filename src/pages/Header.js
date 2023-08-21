import React from 'react'
import './Header.css'
import { createDummyRecord, insertNewRecord } from './helperFuncrion/helperFunction';
const Header = ({ onTransactionAdded, setShowChartModal }) => {

    const handleAddDummyData = () => {
        const dummyRecord = createDummyRecord();
        insertNewRecord(dummyRecord);

        onTransactionAdded();
    }


    return (
        <>
            <div className='header'>

                {/* <div className='project-name'>Finance Tracker</div> */}

                <button type="submit" className='statement-analysis addDummyRecordBtn' onClick={handleAddDummyData}>
                    Add Dummy Record
                </button>
                <button type="submit" className='statement-analysis statementAnalysisBtn' onClick={() => setShowChartModal(true)}>
                    Statement Analysis
                </button>

            </div>
        </>
    )
}

export default Header