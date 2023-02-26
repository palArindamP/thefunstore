import React from 'react';
import pa from '../Assects/pubg.png'
import ca from '../Assects/call.png'
import co from '../Assects/coc.png'
import { Link } from 'react-router-dom';
import '../home/home.css'

const Home = () => {
    return(
        <div style={{backgroundColor:'goldenrod' }}>
            <h1 style={{color:'greenyellow'}}>GAME STORE</h1>
            <div style={{display:'flex' }}>
                <div style={{ margin:'10px', padding:'10px' }}>
                    <h4 style={{ margin:'20px', color:'red'}}>PUBG</h4>
                    <img src={pa} alt="G1" className='g1'/>
                    <Link to='/pubg'><div style={{ margin:'20px'}}><button style={{ border:'2px solid black', color:'blue'}}>Add to cart</button></div></Link>
                </div>
                <div style={{ margin:'10px', padding:'10px' }}>
                    <h4 style={{ margin:'20px', color:'red'}}>CallOfDuty</h4>
                    <img src={ca} alt="G2" className='g1'/>
                    <Link to='/call'><div style={{ margin:'20px'}}><button style={{ border:'2px solid black', color:'blue'}}>Add to cart</button></div></Link>
                </div>
                <div style={{ margin:'10px', padding:'10px' }}>
                    <h4 style={{ margin:'20px', color:'red'}}>COC</h4>
                    <img src={co} alt="G3" className='g1'/>
                    <Link to='/coc'><div style={{ margin:'20px'}}><button style={{ border:'2px solid black', color:'blue'}}>Add to cart</button></div></Link>
                </div>
                
            </div>
        </div>
    )
}

export default Home;