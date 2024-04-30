import React, { useContext, useState } from 'react';
import Popup from 'reactjs-popup';
import { PostalContext } from './PostalContext';
import "./PostalCode.css"

const PostalCode = () => {
    const {postalCode, setPostalCode} = useContext(PostalContext)
    const [inputPostal, setInputPostal] = useState("")
    return (
        <Popup trigger={<button className='popup'>{postalCode}</button>} position={'bottom right'}>
            <div>
                <input
                    className='input-box'
                    type='text'
                    placeholder="New Postal Code"
                    value={inputPostal}
                    onChange={(e) => setInputPostal(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' ? setPostalCode(inputPostal.toUpperCase()) : null}
                />
            </div>
        </Popup>
    );
};

export default PostalCode;