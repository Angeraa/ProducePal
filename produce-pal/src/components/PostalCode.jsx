import React, { useContext, useState } from 'react';
import Popup from 'reactjs-popup';
import { PostalContext } from './PostalContext';
import "./PostalCode.css"

const PostalCode = () => {
    const {postalCode, setPostalCode} = useContext(PostalContext)
    const [inputPostal, setInputPostal] = useState("")
    const handlePostalChange = (e) => {
        if (e.key === 'Enter') {
            if (inputPostal === "") {
                setPostalCode("Postal Code");
            } else if (inputPostal.length !== 6) {
                setPostalCode("Postal Code");
                alert("Please enter a valid postal code.")
            } else {
                setPostalCode(inputPostal.toUpperCase().replace(/\s+/g, ''))
            }
        }
    }
    return (
        <Popup trigger={<button className='popup'>{postalCode}</button>} position={'bottom right'}>
            <div className='postal-change-wrapper'>
                <p className='postal-change-instructions'>
                    Please enter your postal code in the box below and press Enter to confirm.
                </p>
                <input
                    className='input-box'
                    type='text'
                    placeholder="Postal Code"
                    value={inputPostal}
                    onChange={(e) => setInputPostal(e.target.value)}
                    onKeyDown={(e) => handlePostalChange(e)}
                />
            </div>
        </Popup>
    );
};

export default PostalCode;