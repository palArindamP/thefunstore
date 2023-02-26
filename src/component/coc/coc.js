import React from "react";
import co from '../Assects/coc.png';
import { Link } from 'react-router-dom';
import '../coc/coc.css'

const Coc = () => {
    return(
        <div style={{backgroundColor:'yellow' }}>
        <div style={{display:'flex'}}>
            <div className='g1'>
            <img src={co} alt="G3" className='g1'/>
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

export default Coc;