import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import './styles/general/cryptolist.css';
import './styles/light/cryptolist.css';
import './styles/dark/cryptolist.css';
import coin from './assets/coin.png';

function CryptoList({
  id,
  rank,
  name,
  price,
  supply,
}) {
  console.log(id, rank, price, supply);

  const currTheme = useSelector((state) => state.theme.value);

  return (
    <NavLink to={`/cryptopage/${id}`} className={`list ${currTheme === true ? 'darklist' : 'lightlist'}`}>
      <p className="gotoArrow"><BsArrowRightCircle /></p>
      <div className="coinDetails">
        <img src={coin} alt="coin" width="20" />
        <h3>{name}</h3>
        <p className="price">
          $&nbsp;
          {price}
        </p>
      </div>
    </NavLink>
  );
}

CryptoList.propTypes = {
  id: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  supply: PropTypes.string.isRequired,
};

export default CryptoList;
