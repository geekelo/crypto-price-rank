import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles/general/search.css';

function Search({ handleFliterednames }) {
  const currTheme = useSelector((state) => state.theme.value);
  const [searchValue, setSearchValue] = useState('');
  const [cryptoRank, setCryptoRank] = useState('null');

  useEffect(() => {
    handleFliterednames(searchValue, cryptoRank);
    // eslint-disable-next-line
  }, [searchValue, cryptoRank]);

  return (
    <div>
      <form className={`searchContain ${currTheme === true ? 'darksearchContain' : 'lightsearchContain'}`}>
        <div className={`input ${currTheme === true ? 'darkinput' : 'lightinput'}`}>
          <input
            type="search"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={`formField ${currTheme === true ? 'darkformField' : 'lightformField'}`}
          />
        </div>
        <div className={`input ${currTheme === true ? 'darkinput' : 'lightinput'}`}>
          <select onChange={(e) => setCryptoRank(e.target.value)} className={`formField ${currTheme === true ? 'darkformField' : 'lightformField'}`}>
            <option value="null">- Select Ranking -</option>
            <option value="priceUsd">Rank by Price</option>
            <option value="supply">Rank by Supply</option>
          </select>
        </div>
      </form>
    </div>
  );
}

Search.propTypes = {
  handleFliterednames: PropTypes.func.isRequired,
};

export default Search;
