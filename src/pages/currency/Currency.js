import './Currency.scss'
import CurrencyTable from './component/CurrencyTable';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { currencyKeys } from './const';
import CurrencyExchange from './component/CurrencyExchange';

const Currency = () => {

    const [currency, setCurrency] = useState();
    const [date, setDate] = useState();
    const [currentDate, setCurrentDate] = useState();
    const [currencyBase, setCurrencyBase] = useState('');
    const [currentBase, setCurrentBase] = useState('');

    useEffect(() => {
        axios.get('https://api.frankfurter.app/latest', { data: {} })
            .then(response => {
                setCurrency(response.data);
                setDate(response.data.date);
                setCurrentDate(response.data.date);
                setCurrentBase(response.data.base);
                setCurrencyBase(response.data.base);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    useEffect(() => {
        console.log(currency);
    }, [currency]);

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleCurrencyBaseChange = (event) => {
        setCurrencyBase(event.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.frankfurter.app/${date}?from=${currencyBase}`)
            .then(response => {
                setCurrency(response.data);
                setDate(response.data.date);
                setCurrentDate(response.data.date);
                setCurrentBase(response.data.base);
                setCurrencyBase(response.data.base);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return <>
        <div className='currency'>
            <div className='currency-box'>
                <div className='currency-info'>
                    <h2 className='currency-title'>Information Of Currency Around The World</h2>
                    <form className='currency-form' onSubmit={(e) => handleFormSubmit(e)}>
                        <div className='currency-date-box'>
                            <span className='currency-date-text'>Date
                            </span>
                            <input type='date' value={date} onChange={(e) => handleDateChange(e)} name='currency-date' />
                        </div>
                        <div className='currency-base-box'>
                            <span className='currency-date-text'>Currency Base
                            </span>
                            <select value={currencyBase} onChange={(e) => handleCurrencyBaseChange(e)}>
                                {currencyKeys.map((key) => (
                                    <option key={key} value={key}>
                                        {key}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input className='currency-submit' type='submit' value={`View the currency rates again`}></input>
                    </form>
                    <span>Current Currency Base: {currentBase}</span>
                    <span>Current Date: {currentDate}</span>
                </div>
                <CurrencyExchange rates={currency ? currency.rates : null} base={currencyBase} />
            </div>
            <CurrencyTable base={currencyBase} rates={currency ? currency.rates : null} />
        </div>
    </>
}

export default Currency;