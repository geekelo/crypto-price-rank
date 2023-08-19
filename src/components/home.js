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
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    dispatch(fetchCryptos()).then((data) => {
      setCryptoList(data.payload); // Set the fetched data to the state
    });
  }, [dispatch]);

  const handleFilteredNames = (searchValue, rank) => {
    if (rank === 'null') {
      if (searchValue !== '' && searchValue.trim().length > 0) {
        const filteredCryptos = cryptos.filter(
          (each) => each.name.toLowerCase().includes(searchValue.toLowerCase()),
        );
        setCryptoList(filteredCryptos);
      } else {
        setCryptoList(cryptos);
      }
    } else {
      const sortedCryptos = [...cryptos].sort((a, b) => b[rank] - a[rank]);

      if (searchValue !== '' && searchValue.trim().length > 0) {
        const filteredSortedCryptos = sortedCryptos.filter(
          (each) => each.name.toLowerCase().includes(searchValue.toLowerCase()),
        );
        setCryptoList(filteredSortedCryptos);
      } else {
        setCryptoList(sortedCryptos);
      }
    }
  };

  return (
    <section>
      <div className={`landingarea ${currTheme === true ? 'darklandingarea' : 'lightlandingarea'}`}>
        <div className={`${currTheme === true ? 'darklandingbg' : 'lightlandingbg'}`}>
          <Search handleFliterednames={handleFilteredNames} />
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
