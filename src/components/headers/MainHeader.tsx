import Logo from '../assets/images/logo-header.png'
import '../style/MainHeader.css'

export const MainHeader = () => {
  return (
    <>
      <div className="header-pos">
        <img src={Logo} className='logo-image'></img>
        <div className="right-wrapper">
          
          <p className='lang-p'>UA | ENG</p>
          <button className='exit-button'>Увійти</button></div>
      </div>
    </>
  )
}