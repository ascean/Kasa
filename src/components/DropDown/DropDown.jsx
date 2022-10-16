import React, { useState } from 'react';
import chevronDown from '../../assets/images/chevron-down.png'
import chevronUp from '../../assets/images/chevron-up.png'

const DropDown = (props) => {
    const type = props.type;
    const details = props.details
    const label = props.label

    const [isOpen, setIsOpen] = useState (false)

    return (
        
        <div className={`dropdown-container ${isOpen ? "" : "close"}`}>
            {isOpen ? (
                <div className='dropdown-content'>
                    {type === "text"
                        ? <p>{ details }</p>
                        : <ul>
                            {details && details.map((detail, index) => {
                                return (<li key={`detail${index}`}>{detail}</li>)
                            })}
                        </ul>
                    }
                </div>
            ) : (
                null
            )}

            <div className='dropdown-label'>
                <span className="label">
                    {label}
                </span>

                {isOpen ? (
                    <span className="chevron" onClick={() => setIsOpen(false)}>
                        <img src = {chevronUp } alt="" />
                    </span>
                ):(
                    <span className="chevron" onClick={() => setIsOpen(true)}>
                        <img src = {chevronDown } alt="" />
                    </span>
                )} 
            </div>
            
        </div>
    );
};

export default DropDown;