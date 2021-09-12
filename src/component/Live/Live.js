import React from 'react';
import './live.scss';
import img from '../../media/images.jpg'

const Live = () => {
    return (
        <div id='live'>
            <div className='l-container'>
                <h2 className='head-title'>Live anywhere</h2>
                <div className='img-wrap'>
                    <div className='box'>
                        <img src={img} alt='f'/>
                        <h4>Outdoor gataways</h4>
                    </div>
                    <div className='box'>
                        <img src={img} alt='f'/>
                        <h4>Outdoor gataways</h4>
                    </div>
                    <div className='box'>
                        <img src={img} alt='f'/>
                        <h4>Outdoor gataways</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Live;
