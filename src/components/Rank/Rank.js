import React from 'react'

const Rank = ({ fullname, entries }) =>{
    return(
        <div className="link-container form">
            <h4 className='paragraph'>
                {`${fullname}, your current entries count is .....`}
            </h4>
            <p className='paragraph'>
                {entries}
            </p>
        </div>
    )
}

export default Rank;