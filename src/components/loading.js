import React from 'react'
import {BeatLoader, BounceLoader} from 'react-spinners'
function loading({loading}) {
    return (
        <div className='load'>
            <BeatLoader  loading={loading}/>
        </div>
    )
}

export default loading
