import React from 'react';
import Verify from '../components/VerifyEmail/verifyEmail';

function VerifyEmail(props) {
    const uniqueKey = props.match.params.uniqueKey
    return (  
        <div className='display:flex;
        justify-content center;
        align-items:center;width: 100vh; 
        height:auto;background-color:#fafafa;'>
        <Verify uniqueKey={uniqueKey} />
        </div>
    );
}

export default VerifyEmail;