import { Grid } from '@material-ui/core';
import React from 'react';
import { YMaps, Map, Placemark, FullscreenControl, GeolocationControl, ZoomControl } from 'react-yandex-maps';
import './map.scss';

const YandexMap = () => {

    return(
        <div id='location' >
            <div className='l-container' >
                <h1>Our locations</h1>
                <Grid container >
                    <Grid item md='6' sm='6' xs='12'>
                        <div className='information'>
                            <h3>About</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum perspiciatis animi 
                                distinctio impedit nulla aperiam. Fugiat repellendus non rem aliquid molestias reiciendis, 
                                quibusdam cumque quasi molestiae atque autem ullam 
                                asperiores ratione distinctio sunt accusamus perspiciatis quae. Et, quibusdam voluptate.
                                {window.innerWidth > 600 && 'distinctio impedit nulla aperiam. Fugiat repellendus non rem aliquid molestias reiciendis, quibusdam cumque quasi molestiae atque autem ullam asperiores ratione distinctio sunt accusamus perspiciatis quae. Et, quibusdam voluptate, non rem aliquid molestias reiciendis quibusdam cumque quasi molestiae atque autem ullam asperiores ratione distinctio sunt accusamus perspiciatis quae. Et, quibusdam voluptate.'}
                            </p>
                        </div>
                    </Grid>
                    <Grid item md='6' sm='6' xs='12' >
                        <div className='map'>
                            <YMaps>
                                <Map
                                    defaultState = {{
                                        center: [44.525953, -109.055786],
                                        zoom: 3
                                    }}
                                >
                                    <Placemark geometry={[35.589702, -105.212887]} />
                                    <Placemark geometry={[42.684692, -73.798954]} />
                                    <Placemark geometry={[37.759351, -122.446913]} />
                                    <Placemark geometry={[33.569785, -112.064490]} />
                                    <Placemark geometry={[34.055863, -118.246139]} />
                                    <Placemark geometry={[37.556196, -77.460388]} />
                                    <Placemark geometry={[47.596200, -120.660388]} />
                                    <Placemark geometry={[47.596200, -120.660388]} />

                                    <FullscreenControl options={{float: 'left'}} />
                                    <GeolocationControl options={{float: 'right'}}/>
                                    <ZoomControl options={{float: 'left'}} />
                                </Map>
                            </YMaps>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default YandexMap;