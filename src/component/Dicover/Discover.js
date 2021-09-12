import React from 'react';
import img1 from '../../media/1.jpg';
import img2 from '../../media/2.jpg';
import img3 from '../../media/3.jpg';
import './discover.scss';

const  Discover = () => {
    return (
        <div className='discover'>
            <div className='d-container'>
                <h2 className='head-title'>Live anywhere</h2>
                <div className='img-wrap'>
                    <div className='box'>
                        <img src={img1} alt='f'/>
                        <h4>Experinces</h4>
                    </div>
                    <div className='box'>
                        <img src={img2} alt='f'/>
                        <h4>Online experinces</h4>
                    </div>
                    <div className='box'>
                        <img src={img3} alt='f'/>
                        <h4>Feactured collection: Wanderlast</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Discover;
