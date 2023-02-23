import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            {/* <p>All rights reserved to <Link to="https://www.facebook.com/alwaysnayon/">Md. Tarikul Islam</Link> </p> */}
            <p className='foo'>All rights reserved to <a target='_blank' href="https://github.com/Md-TarikulIslam">Md. Tarikul Islam</a></p>
        </div>
    );
};

export default Footer;