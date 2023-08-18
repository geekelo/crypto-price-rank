import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCryptos } from './redux/crypto/cryptosSlice';
import './styles/general/cryptopage.css';
import './styles/dark/cryptopage.css';
import './styles/light/cryptopage.css';
import './styles/dark/home.css';
import './styles/light/home.css';
import coins from './assets/coins.png';

function Cryptopage() {
  const currTheme = useSelector((state) => state.theme.value);
  const cryptos = useSelector((state) => state.cryptos.value);
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split('/').pop();

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  const selectedCrypto = cryptos[id] || {};

  return (
    <div>
      <div className={`cryptoarea ${currTheme === true ? 'darkcryptoarea' : 'lightcryptoarea'}`}>
        <p className="cryptoname">{selectedCrypto.name}</p>
        <p><img src={coins} alt="fancy" width="300" /></p>
      </div>
      <p className={`allstats ${currTheme === true ? 'darkallstats' : 'lightallstats'}`}>CRYPTO DETAILS</p>
      <div>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>Symbol:</span>
          <span>{selectedCrypto.symbol}</span>
        </p>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>Price | USD:</span>
          <span>{selectedCrypto.priceUsd}</span>
        </p>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>Supply:</span>
          <span>{selectedCrypto.supply}</span>
        </p>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>Max Supply:</span>
          <span>{selectedCrypto.maxSupply}</span>
        </p>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>Change Percent | 24hrs:</span>
          <span>{selectedCrypto.changePercent24Hr}</span>
        </p>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>Market Cap | USD:</span>
          <span>{selectedCrypto.marketCapUsd}</span>
        </p>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>Volume | USD | 24hrs:</span>
          <span>{selectedCrypto.volumeUsd24Hr}</span>
        </p>
        <p className={`detailslist ${currTheme === true ? 'darkdetailslist' : 'lightdetailslist'}`}>
          <span>VWAP | 24hrs:</span>
          <span>{selectedCrypto.vwap24Hr}</span>
        </p>
      </div>
    </div>
  );
}

export default Cryptopage;
