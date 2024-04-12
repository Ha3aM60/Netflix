
import React, { useEffect, useState } from 'react';
import  './watchlater.scss';


function watchlater() {

  return (
    <>
    {
      <div className='Maindivbox'>
          <div className='checklaterdiv'>
              Переглянути пізніше
          </div>

          <div className='firstrowfilms'>
              <div className='filmsdiv'>
                <p className='actuallname1'>Фільми</p>
              </div>
          </div>

          <div className='arrowbutton1'>
              <div className='arrowbtnvector'> </div>
          </div>

          <div className='godzillaframe'>
            <img src="./images/godzillaimage.jpg"  className='godzillaimg'/>
          </div>

          <div className='secondrowfilms'>
              <div className='showsdivsecond'>
                <p className='showsword'>Серіали</p>  
              </div>
          </div>


          <div className='thirdrowfilms'>
              <div className='thirddivsecond'>
                <p className='thirdword'>Аніме</p>  
              </div>

              <div className='arrowbutton1'>
                <div className='arrowbtnvector'> </div>
              </div>

              <div className='godzillaframe'>
                <img src="./images/godzillaimage.jpg"  className='godzillaimg'/>
              </div>
          </div>


          <div className='fourthrowfilms'>
              <div className='fourthdivsecond'>
                <p className='fourthword'>Мультфільми</p>  
              </div>

              <div className='arrowbutton1'>
                <div className='arrowbtnvector'> </div>
              </div>

              <div className='godzillaframe'>
                <img src="./images/godzillaimage.jpg"  className='godzillaimg'/>
              </div>
          </div>
      </div>
 }
    </>
  )
}

export default watchlater