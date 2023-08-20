import React from 'react'
import './Header.css'
import { getmonthlyAverageBalance } from './helperFuncrion/helperFunction';

const Header = () => {
    const MAB = getmonthlyAverageBalance('September');
    const formattedMab = MAB.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
    });
    return (
        <>
            <div className='header'>

                <div className="project-name">Finance tracker</div>
                <div className='header-mab'>Monthly Average Balance <span className='mab-amount'>{formattedMab}</span>  </div>

            </div>
        </>
    )
}

export default Header