import { Grid } from '@material-ui/core';
import React from 'react';
import img from '../../media/home.jpg';
import './hoist.scss';

function Hoist() {
    return (
        <div className='hoist'>
            <div className='h-container'>
                <div className='black'>
                    <h1>Try hoisting</h1>
                    <p>Earn extra income and unlock new<br />opportunitues by sharing your space.</p>
                    <button>Learn more</button>
                </div>
                <img alt='f' src={img} />
            </div>
        </div>
    )
}

export default Hoist
