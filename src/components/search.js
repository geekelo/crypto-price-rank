import { useSelector } from 'react-redux';
import './styles/light/search.css';
import './styles/dark/search.css';
import './styles/general/search.css';

function Search() {
  const currTheme = useSelector((state) => state.theme.value);

  return (
    <div>
      <form className={`searchContain ${currTheme === true ? 'darksearchContain' : 'lightsearchContain'}`}>
        <div className={`input ${currTheme === true ? 'darkinput' : 'lightinput'}`}>
          <input type="search" placeholder="Search" className={`formField ${currTheme === true ? 'darkformField' : 'lightformField'}`} />
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

export default Search;
