import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './styles/general/search.css';

function Search({ handleFliterednames }) {
  const currTheme = useSelector((state) => state.theme.value);
  let searchValue;

  const triggerFilterHandler = (inputs) => {
    searchValue = inputs;
    handleFliterednames(searchValue);
  };

  return (
    <div>
      <form className={`searchContain ${currTheme === true ? 'darksearchContain' : 'lightsearchContain'}`}>
        <div className={`input ${currTheme === true ? 'darkinput' : 'lightinput'}`}>
          <input
            type="search"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => triggerFilterHandler(e.target.value)}
            className={`formField ${currTheme === true ? 'darkformField' : 'lightformField'}`}
          />
        </div>
        <div className={`input ${currTheme === true ? 'darkinput' : 'lightinput'}`}>
          <select className={`formField ${currTheme === true ? 'darkformField' : 'lightformField'}`}>
            <option value="price">- Select Ranking -</option>
            <option value="price">Rank by Price</option>
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
