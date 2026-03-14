import React from 'react'
import './Stepper.css'

const Stepper = ({ data, activeIndex }) => { 
    console.log(activeIndex)
    return (
        <div className='stepper-container'>
            {data.map((item, index) => {
                return (
                    <div className='stepper-item'>
                        <div className="stepper-top">
                            <div className= {index <= activeIndex ? `stepper-loader active-loader` : `stepper-loader`}></div>
                            <div className='stepper-label'>{item.label}</div>
                        </div>
                        {index !== data.length - 1 && <div className="stepper-bottom">
                            <div className= {index <= activeIndex ? `stepper-line active-line` : `stepper-line`}></div>
                        </div>}
                    </div>)
            })}
        </div>
    )
}

export default Stepper
 