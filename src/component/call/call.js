import React from "react";
import ca from '../Assects/call.png';
import { Link } from 'react-router-dom';
import '../call/call.css'

const Call = () => {
    return(
        <div style={{backgroundColor:'yellow' }}>
        <div style={{display:'flex'}}>
            <div className='g1'>
            <img src={ca} alt="G3" className='g1'/>
            </div>
            <div style={{ padding:'30px'}}>
                <h2>PUBG</h2>
                <p>Good & Interesting</p>
                <p>Price: 100</p>
                <Link to = "/payments"> <button>BUY NOW</button></Link>
            </div>
        </div>
        </div>
        
    )
}

export default Call;