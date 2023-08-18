import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCryptos } from './redux/crypto/cryptosSlice';
import './styles/dark/home.css';
import './styles/light/home.css';
import './styles/general/home.css';
import Search from './search';
import CryptoList from './cryptolist';

function Home() {
  const currTheme = useSelector((state) => state.theme.value);
  const cryptos = useSelector((state) => state.cryptos.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  console.log(cryptos);

  return (
    <section>
      <div className={`landingarea ${currTheme === true ? 'darklandingarea' : 'lightlandingarea'}`}>
        <div className={`${currTheme === true ? 'darklandingbg' : 'lightlandingbg'}`}>
          <Search />
        </div>
      </div>
      <p className={`allstats ${currTheme === true ? 'darkallstats' : 'lightallstats'}`}> CRYPTO RANKING </p>
      <main>
        <ul className={`listContain ${currTheme === true ? 'darklistContain' : 'lightlistContain'}`}>
          {cryptos.map((each, eachId) => (
            <CryptoList
              key={each.rank}
              id={eachId}
              supply={each.supply}
              price={each.priceUsd}
              name={each.name}
            />
          ))}
        </ul>
      </main>
    </section>
  );
}

export default Home;
