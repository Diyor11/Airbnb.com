import { Grid } from '@material-ui/core';
import React from 'react';
import './footerinfo.scss';

const FooterInfo = () => {
    return (
        <div id='footer-info'>
            <div className='container'>
                <Grid container>
                    <Grid item lg='3' md='4' sm='6' xs='12'>
                        <div className='column-info'>
                            <h3>About</h3>
                            <p>How Airbnb works</p>
                            <p>Newsroom</p>
                            <p>Airbnb 2021</p>
                            <p>Investors</p>
                            <p>Airbnb Plus</p>
                            <p>Airbnb Luxe</p>
                            <p>HotelTonight</p>
                            <p>Airbnb for Work</p>
                        </div>
                    </Grid>
                    <Grid item lg='3' md='4' sm='6' xs='12'>
                        <div className='column-info'>
                            <h3>Comunity</h3>
                            <p>Diversity & Belonging</p>
                            <p>Against Discrimination</p>
                            <p>Accessibility </p>
                            <p>Airbnb Associates</p>
                            <p>Host Afghan refugees</p>
                            <p>Guest Referrals</p>
                            <p>Gift cards</p>
                            <p>Airbnb.org</p>
                        </div>
                    </Grid>
                    <Grid item lg='3' md='4' sm='6' xs='12'>
                        <div className='column-info'>
                            <h3>About</h3>
                            <p>Host your home</p>
                            <p>Host an Online Experience</p>
                            <p>Host an Experience </p>
                            <p>Responsible hosting</p>
                            <p>Resource Center</p>
                            <p>Guest Referrals</p>
                            <p>Community Center</p>
                        </div>
                    </Grid>
                    <Grid item lg='3' md='4' sm='6' xs='12'>
                        <div className='column-info'>
                            <h3>Support</h3>
                            <p>Our COVID-19 Response</p>
                            <p>Help Center</p>
                            <p>Cancellation options </p>
                            <p>Neighborhood Support</p>
                            <p>Trust & Safety</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default FooterInfo;
