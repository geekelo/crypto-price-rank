import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './styles/general/cryptopage.css';
import './styles/dark/cryptopage.css';
import './styles/light/cryptopage.css';
import './styles/dark/home.css';
import './styles/light/home.css';
import coins from './assets/coins.png';

function Cryptopage() {
  const currTheme = useSelector((state) => state.theme.value);
  const cryptos = useSelector((state) => state.cryptos.value);
  const { id } = useParams();

  return (
    <div>
      <div className={`cryptoarea ${currTheme === true ? 'darkcryptoarea' : 'lightcryptoarea'}`}>
        <p className="cryptoname">{cryptos[id].name}</p>
        <p><img src={coins} alt="fancy" width="300" /></p>
      </div>
      <p className={`allstats ${currTheme === true ? 'darkallstats' : 'lightallstats'}`}>CRYPTO DETAILS</p>
      <div>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>Symbol:</span>
          <span>{cryptos[id].symbol}</span>
        </p>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>Price | USD:</span>
          <span>{cryptos[id].priceUsd}</span>
        </p>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>Supply:</span>
          <span>{cryptos[id].supply}</span>
        </p>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>Max Supply:</span>
          <span>{cryptos[id].maxSupply}</span>
        </p>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>Change Percent | 24hrs:</span>
          <span>{cryptos[id].changePercent24Hr}</span>
        </p>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>Market Cap | USD:</span>
          <span>{cryptos[id].marketCapUsd}</span>
        </p>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>Volume | USD | 24hrs:</span>
          <span>{cryptos[id].volumeUsd24Hr}</span>
        </p>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>VWAP | 24hrs:</span>
          <span>{cryptos[id].vwap24Hr}</span>
        </p>
      </div>
    </div>
  );
}

export default Cryptopage;
