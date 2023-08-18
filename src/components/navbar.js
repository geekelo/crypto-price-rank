import { BiSolidChevronLeft, BiSolidAdjust, BiRefresh } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { toggleMode } from './redux/theme/themeSlice';
import './styles/light/navbar.css';
import './styles/dark/navbar.css';
import './styles/general/navbar.css';
import logo from './assets/logo.png';

function NavBar() {
  const currTheme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(toggleMode());
  };

  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <header className={`navbarContain ${currTheme === true ? 'darknavbarContain' : 'lightnavbarContain'}`}>
      <div className={`navArrow ${currTheme === true ? 'darknavArrow' : 'lightnavArrow'}`}>
        {
          !isHomepage
            ? (
              <NavLink
                to="/"
                className={`navArrow ${currTheme === true ? 'darknavArrow' : 'lightnavArrow'}`}
              >
                <p><BiSolidChevronLeft size="30" className={`arrow ${currTheme === true ? 'darkarrow' : 'lightarrow'}`} /></p>
              </NavLink>
            )
            : (<p><BiRefresh size="30" onClick={() => window.location.reload()} className={`arrow ${currTheme === true ? 'darkarrow' : 'lightarrow'}`} /></p>)
        }

      </div>
      <p className={`logo ${currTheme === true ? 'darklogo' : 'lightlogo'}`}><img src={logo} width="100" alt="Logo" /></p>
      <button
        type="button"
        className={`themebtn ${currTheme === true ? 'darkthemebtn' : 'lightthemebtn'}`}
        onClick={toggleTheme}
      >
        <BiSolidAdjust className={`navIcon ${currTheme === true ? 'darknavIcon' : 'lightnavIcon'}`} />
      </button>
    </header>
  );
}

export default NavBar;
