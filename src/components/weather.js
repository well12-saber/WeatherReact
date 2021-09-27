import React from 'react';
import '../styles.css';
import {Card} from 'semantic-ui-react';
import moment from 'moment';
import {Wrapper} from './weather.styles';

const Weather=({weatherData})=>(
    <Wrapper>
        <Card>
            <Card.Content>
                <Card.Header className='header'>{weatherData.name}</Card.Header>
                <p>Temperature: {parseFloat(weatherData.main.temp-273).toFixed(2)} C</p>
                <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                <p>Description: {weatherData.weather[0].description}</p>
                <p>Himidity: {weatherData.main.humidity} %</p>
                <p>Date : {new Date().toISOString().slice(0, 10)}</p>
            </Card.Content>
        </Card>
    </Wrapper>
    
);

export default Weather;