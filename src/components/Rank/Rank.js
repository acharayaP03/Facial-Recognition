import React from 'react'

const Rank = ({ name, entries }) =>{
    return(
        <div className="link-container form">
            <h4 className='paragraph'>
                {`${name}, your current entries count is .....`}
            </h4>
            <p className='paragraph'>
                {entries}
            </p>
        </div>
    )
}

export default Rank;