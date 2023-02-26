import React from "react";
import { Link } from "react-router-dom";
import pa from '../Assects/pubg.png'
import '../pubg/pubg.css'

const Pubg = () => {
    return(
        <div style={{backgroundColor:'yellow' }}>
        <div style={{display:'flex'}}>
            <div className='g1'>
            <img src={pa} alt="G3" className='g1'/>
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

export default Pubg;