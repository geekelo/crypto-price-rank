import { useSelector } from 'react-redux';
import logoicon from './assets/logoicon.png';
import './styles/dark/footer.css';
import './styles/light/footer.css';
import './styles/general/footer.css';

function Footer() {
  const currTheme = useSelector((state) => state.theme.value);

  return (
    <div className={`footer ${currTheme === true ? 'darkfooter' : 'lightfooter'}`}>
      <img src={logoicon} alt="logo" width="55" />
      <div className={`icon ${currTheme === true ? 'darkicon' : 'lighticon'}`}>
        <p className="tagtitle">CRYPTO PRICE RANK</p>
        <p className="copyright"> © COPYRIGHT GEEKELO 2023</p>
      </div>

    </div>
  );
}

export default Footer;
