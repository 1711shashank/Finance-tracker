import React from 'react'
import './Header.css'
const Header = ({ setShowChartModal }) => {

    return (
        <>
            <div className='header'>
                <p className='project-name'> Finance Tracker </p>
                <button type="submit" className='statement-analysis statementAnalysisBtn' onClick={() => setShowChartModal(true)}>
                    Statement Analysis
                </button>
            </div>
        </>
    )
}

export default Header