import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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
  const [cryptoList, setCrypotoList] = useState(cryptos);

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  const handleFliterednames = (searchvalue) => {
    const filteredcryptos = cryptos.filter(
      (each) => each.name.toLowerCase().includes(searchvalue.toLowerCase()),
    );
    setCrypotoList(filteredcryptos);
  };

  return (
    <section>
      <div className={`landingarea ${currTheme === true ? 'darklandingarea' : 'lightlandingarea'}`}>
        <div className={`${currTheme === true ? 'darklandingbg' : 'lightlandingbg'}`}>
          <Search handleFliterednames={handleFliterednames} />
        </div>
      </div>
      <p className={`allstats ${currTheme === true ? 'darkallstats' : 'lightallstats'}`}> CRYPTO RANKING </p>
      <main>
        <ul className={`listContain ${currTheme === true ? 'darklistContain' : 'lightlistContain'}`}>
          {cryptoList.map((each, eachId) => (
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
