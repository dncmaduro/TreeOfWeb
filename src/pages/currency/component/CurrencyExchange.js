import './CurrencyExchange.scss'
import { currencyKeys } from '../const';
import { useState } from 'react';

const CurrencyExchange = (props) => {

    const { rates, base } = props;

    const [currency, setCurrency] = useState('AUD')
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    const handleCurrencyBaseChange = (e) => {
        setCurrency(e.target.value)
    }

    const handleChangeFirst = (e) => {
        setFirst(e.target.value)
        setSecond(Number((e.target.value / rates[currency]).toFixed(4)))
    }

    const handleChangeSecond = (e) => {
        setSecond(e.target.value)
        console.log(rates[currency])
        setFirst(Number((e.target.value * rates[currency]).toFixed(4)))
    }

    return <>
        <div className='currency-exchange'>
            <h2 className='currency-exchange-title'>Currency Exchange</h2>
            <span className='currency-exchange-note'>Note: Select Currency Base and Date in the information box on the left if you want to change the currency base.</span>
            <div className='currency-exchange-box'>
                <input type='number' className='currency-exchagne-first' onChange={(e) => handleChangeFirst(e)} value={first} ></input>
                <select value={currency} onChange={(e) => handleCurrencyBaseChange(e)}>
                    {currencyKeys.map((key) => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
                <span>=</span>
                <input type='number' className='currency-exchagne-second' onChange={(e) => handleChangeSecond(e)} value={second} ></input>
                <span>{base}</span>
            </div>
        </div >
    </>
}

export default CurrencyExchange;