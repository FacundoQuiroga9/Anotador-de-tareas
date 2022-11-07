import marca from '../img/banner-marca.png'
import '../styles/Logo.css';

const Logo = ()=>{
  return(
    <div className="logo-container">
        <a href="https:/quirogafacundo.com" target='_blanck'><img src={marca} alt="Logo de freeCodeCamp" className="logo" /></a>
    </div>
  )
}

export default Logo