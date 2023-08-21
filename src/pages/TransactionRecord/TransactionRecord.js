import { calculateBalance } from '../helperFuncrion/helperFunction';
import RecordImg from '../../images/table.svg'
import './TransactionRecord.css'
import moment from 'moment';


const TransactionRecord = ({ transactionRecords }) => {

    const updatedRecords = calculateBalance(transactionRecords);

    return (
        <>
            <div className='card' >

                <h2 className="card-title">Transaction Data</h2>

                {
                    updatedRecords.length === 0 ?
                        <div className='noRecordFound-wrapper'>
                            <p>No Record Found</p>
                            <img  src={RecordImg} alt='' />
                        </div>
                        : <table>
                            <thead>
                                <tr className='table-head'>
                                    <th>Date</th>
                                    <th>Transaction Type</th>
                                    <th>Credit </th>
                                    <th>Debit </th>
                                    <th>Balance </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    updatedRecords.map((record, index) => (
                                        <tr key={index} className='table-column'>
                                            <td>{moment(record.date).format('DD MMM YYYY')}</td>
                                            <td>{record.transactionType}</td>
                                            <td>{record.credit !== 0 && record.credit}</td>
                                            <td>{record.debit !== 0 && record.debit}</td>
                                            <td>{record.balance}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                }


            </div>
        </>
    )
}

export default TransactionRecord