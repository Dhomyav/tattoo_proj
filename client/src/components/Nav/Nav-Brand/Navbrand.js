import './NavBrand.css'
import { Link } from 'react-router-dom';
import logo from '../../../asset/img/logo.png'

const NavBrand = () => {
    return ( 
        <div href="#home" className='navbrand__container'>
           <h1 className='navbrand'>
               <Link to="/"><img className='navlogo' src={logo} alt='logo' /></Link>
            </h1>
        </div>
     );
}
 
export default NavBrand;