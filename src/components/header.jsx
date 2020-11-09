import search from './assets/search.svg';
import logo from './assets/logo.svg';
import phone from './assets/phone.svg';

const Header = () => {
   return (<header>
      <div className="container">
         <div className="header__top"></div>
         <div className="header__bottom"></div>
         
         <nav className="header__nav nav">
            <ul className="nav__menu">
               <li className="nav__item"><a href="#" className="nav__link"></a></li>
               <li className="nav__item"><a href="#" className="nav__link"></a></li>
               <li className="nav__item"><a href="#" className="nav__link"></a></li>
               <li className="nav__item"><a href="#" className="nav__link"></a></li>
               <li className="nav__item"><a href="#" className="nav__link"></a></li>
               <li className="nav__item"><a href="#" className="nav__link"></a></li>
            </ul>
         </nav>
      </div>
   </header>)
}
export default Header;