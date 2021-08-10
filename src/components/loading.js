import React from 'react'
import {BeatLoader} from 'react-spinners'
function loading({loading}) {
    return (
        <div className='load'>
           <h2><BeatLoader  loading={loading}/></h2> 
        </div>
    )
}

export default loading
