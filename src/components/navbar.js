import { BiSolidChevronLeft, BiSolidAdjust } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from './redux/theme/themeSlice';
import './styles/light/navbar.css';
import './styles/dark/navbar.css';
import logo from './assets/logo.png';
import './styles/styles.css';

function NavBar() {
  const currTheme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(toggleMode());
  };

  return (
    <header className={`${currTheme === true ? 'darknavbarContain' : 'lightnavbarContain'}`}>
      <div className={`${currTheme === true ? 'darknavArrow' : 'lightnavArrow'}`}>
        <p><BiSolidChevronLeft className={`${currTheme === true ? 'darkarrow' : 'lightarrow'}`} /></p>
        <p>Back</p>
      </div>
      <p className={`${currTheme === true ? 'darklogo' : 'lightlogo'}`}><img src={logo} width="100" alt="Logo" /></p>
      <button
        type="button"
        className={`${currTheme === true ? 'darkthemebtn' : 'lightthemebtn'}`}
        onClick={toggleTheme}
      >
        <BiSolidAdjust className={`${currTheme === true ? 'darknavIcon' : 'lightnavIcon'}`} />
      </button>
    </header>
  );
}

export default NavBar;
