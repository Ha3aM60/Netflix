import React, { useEffect, useState } from 'react';
import './paymentpage.css'

function paymentpage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='head-title'>
        <h1 className='makepayment-title'>Здійсніть оплату</h1>
          <p className='usecard-title'>Скористайтесь платіжною карткою.</p>
      </div>

      <div className='main-outer-form'>
          <div className='first-line'>
              Введіть дані:
          </div>
          <div className='visa'>
              <img src="images\visa.png" alt="Image" />
          </div>
          <div className='mastercard'>
              <img src="images\mastercard.png" alt="Image" />
          </div>
          <div className='firstinput-box'> 
            <input className='name-oncard' type="text" placeholder='Ім’я на картці'/>
            <div className='card-icon'>
                <img className='card-itself'  src="images\cardicon.png" alt="Image" />
              </div>     
          </div>

          <div className='card-number-form'>

            <div className=''>
              <input className='card-number' type="text" placeholder='Номер картки'/>                             
            </div>

              <div className='random-text'>
                <p className='expiration-date'>Дійсна до:</p>
              </div>

              <div className='random-text2'>
                <p className='expiration-date2'>CVV:</p>
              </div>            
          </div>

          <div>
              <input className='date-box' type="date" placeholder='MM/YY' />
          </div>

          <div>
              <input className='cvvcode-box' type="text" placeholder='Код:' />
          </div>

          <div className='changeplan'>
            <p className='changeplan-text'>
                Змінити план
            </p>
          </div>

     
            <button className='pay-button'>
              <p className='paybutton-text'>
                Оплатити зараз
              </p>
            </button>
          
      </div>
    </>
  )
}

export default paymentpage