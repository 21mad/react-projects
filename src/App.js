import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import './index.scss';

const API_KEY = '74e4d145b5292ff29bb7dbf7a673a997';

function App() {
  const [rate, setRate] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('RUB');
  const [toCurrency, setToCurrency] = useState('USD');


  useEffect(() => {
    let pair = fromCurrency + toCurrency;
    fetch("https://currate.ru/api/?get=rates&pairs=" + pair + "&key=" + API_KEY)
    .then((res) => res.json())
    .then((json) => {
      setRate(json.data[pair]);
      console.log(rate);
    })
    .catch(err => {
      console.warn(err);
      alert('Ошибка при получении данных');
    })
  }, [fromCurrency, toCurrency]);

  return (
    <div className="App">
      <Block value={0} currency="RUB" onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default App;
