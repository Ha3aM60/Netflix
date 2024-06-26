import React from 'react';
import './StartStyle.scss';
import logo from '../../images/logo.png'
import img1 from '../../images/homePage_image1.png'
import img2 from '../../images/homePage_image2.png'
import img3 from '../../images/homePage_image3.png'
import img4 from '../../images/homePage_image4.png'
import img5 from '../../images/homePage_image5.png'
import img6 from '../../images/homePage_image6.png'
import img7 from '../../images/homePage_image7.png'
import { Container, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const StartPage = () => {
  return (
    <Container className='start-page-block'>
      <div className="block1">
        <div className="language">
          <Form.Label className='lang'><a href='/ua'>UA</a></Form.Label> <Form.Label className='lang'> | </Form.Label> <Form.Label className='lang'><a href='/eng'> ENG </a></Form.Label>
          <button className='button3'>Увійти </button>
        </div>
        <img className='logo' src={logo} />
        <div className='container1'>
          <Form.Label className='text1'>Фільми, серіали й інший контент <br></br>без обмежень</Form.Label>
          <Form.Label className='text2'>Дивіться будь-де. Скасувати підписку можна будь-коли.</Form.Label>
          <div className='container2'>
            <Form.Label className='text3'>Готові до перегляду? Введіть адресу електронної пошти,<br></br> щоб оформити або поновити підписку.</Form.Label>
          </div>
          <input type="email" className="email" id="exampleFormControlInput1" placeholder="Адреса елекронної пошти" />
          <button className='button'><Link to={"/main/register"} className="nav-link">Почати</Link></button>
        </div>
        <Image className='img1' src={img1} />
        <Image className='img2' src={img2} />
        <Image className='img3' src={img3} />
        <Image className='img4' src={img4} />
        <Image className='img5' src={img5} />
        <Image className='img6' src={img6} />
        <Image className='img7' src={img7} />
      </div>
      <div className='block2'>
        <div className='linear1'></div>
        {/* <div className='linear2'></div>
        <div className='linear3'></div> */}
        <div className="text-block1">
          <Form.Label className='text1'>Дивіться на телевізорі</Form.Label>
          <Form.Label className='text2'>Дивіться на Smart TV, Playstation, Xbox, Chromecast<br></br> Apple TV, Blu-ray-g програвачах тощо.</Form.Label>
        </div>
        <div className="text-block2">
          <Form.Label className='text1'>Завантажуйте контент і<br></br>дивіться його офлайн</Form.Label>
          <Form.Label className='text2'>Легко зберігайте улюблені телесеріали й фільми, <br></br>щоб дивитися їх будь-коли.</Form.Label>
        </div>
        <div className="text-block3">
          <Form.Label className='text1'>Дивіться будь-де</Form.Label>
          <Form.Label className='text2'>Дивіться фільми й телесеріали без обмежень на <br></br>смартфоні, планшеті, ноутбуці й телевізорі.</Form.Label>
        </div>
        <div className="text-block4">
          <Form.Label className='text1'>Створюйте профілі <br></br>для дітей</Form.Label>
          <Form.Label className='text2'>Ваші діти зможуть мандрувати країною фантазії <br></br>разом з улюбленими персонажами в спеціальних<br></br>профілях, які входять у вартість підписки.</Form.Label>
        </div>
      </div>
      <div className="block3">
        <div className='line'></div>
        <div className='text2'>Поширені запитання</div>
        <ul>
          <li><Form.Label className='li_text'>Що таке Netflix?</Form.Label><svg className="plus" width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2857 18.7H17.7857V19.2V31.2C17.7857 31.7116 17.5919 32.1976 17.2542 32.5522C16.9172 32.9061 16.4655 33.1 16 33.1C15.5345 33.1 15.0828 32.9061 14.7458 32.5522C14.4081 32.1976 14.2143 31.7116 14.2143 31.2V19.2V18.7H13.7143H2.28571C1.8202 18.7 1.36852 18.5061 1.03154 18.1522C0.693772 17.7976 0.5 17.3116 0.5 16.8C0.5 16.2884 0.693771 15.8024 1.03154 15.4478C1.36852 15.0939 1.8202 14.9 2.28571 14.9H13.7143H14.2143V14.4V2.4C14.2143 1.88843 14.4081 1.40243 14.7458 1.04777C15.0828 0.693943 15.5345 0.5 16 0.5C16.4655 0.5 16.9172 0.693944 17.2542 1.04777C17.5919 1.40243 17.7857 1.88843 17.7857 2.4V14.4V14.9H18.2857H29.7143C30.1798 14.9 30.6315 15.0939 30.9685 15.4478C31.3062 15.8024 31.5 16.2884 31.5 16.8C31.5 17.3116 31.3062 17.7976 30.9685 18.1522C30.6315 18.5061 30.1798 18.7 29.7143 18.7H18.2857Z" fill="white" stroke="#49108B" /></svg></li>
          <li><Form.Label className='li_text'>Скільки коштує підписка Netflix?</Form.Label><svg className="plus" width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2857 18.7H17.7857V19.2V31.2C17.7857 31.7116 17.5919 32.1976 17.2542 32.5522C16.9172 32.9061 16.4655 33.1 16 33.1C15.5345 33.1 15.0828 32.9061 14.7458 32.5522C14.4081 32.1976 14.2143 31.7116 14.2143 31.2V19.2V18.7H13.7143H2.28571C1.8202 18.7 1.36852 18.5061 1.03154 18.1522C0.693772 17.7976 0.5 17.3116 0.5 16.8C0.5 16.2884 0.693771 15.8024 1.03154 15.4478C1.36852 15.0939 1.8202 14.9 2.28571 14.9H13.7143H14.2143V14.4V2.4C14.2143 1.88843 14.4081 1.40243 14.7458 1.04777C15.0828 0.693943 15.5345 0.5 16 0.5C16.4655 0.5 16.9172 0.693944 17.2542 1.04777C17.5919 1.40243 17.7857 1.88843 17.7857 2.4V14.4V14.9H18.2857H29.7143C30.1798 14.9 30.6315 15.0939 30.9685 15.4478C31.3062 15.8024 31.5 16.2884 31.5 16.8C31.5 17.3116 31.3062 17.7976 30.9685 18.1522C30.6315 18.5061 30.1798 18.7 29.7143 18.7H18.2857Z" fill="white" stroke="#49108B" /></svg></li>
          <li><Form.Label className='li_text'>Як скасувати підписку?</Form.Label><svg className="plus" width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2857 18.7H17.7857V19.2V31.2C17.7857 31.7116 17.5919 32.1976 17.2542 32.5522C16.9172 32.9061 16.4655 33.1 16 33.1C15.5345 33.1 15.0828 32.9061 14.7458 32.5522C14.4081 32.1976 14.2143 31.7116 14.2143 31.2V19.2V18.7H13.7143H2.28571C1.8202 18.7 1.36852 18.5061 1.03154 18.1522C0.693772 17.7976 0.5 17.3116 0.5 16.8C0.5 16.2884 0.693771 15.8024 1.03154 15.4478C1.36852 15.0939 1.8202 14.9 2.28571 14.9H13.7143H14.2143V14.4V2.4C14.2143 1.88843 14.4081 1.40243 14.7458 1.04777C15.0828 0.693943 15.5345 0.5 16 0.5C16.4655 0.5 16.9172 0.693944 17.2542 1.04777C17.5919 1.40243 17.7857 1.88843 17.7857 2.4V14.4V14.9H18.2857H29.7143C30.1798 14.9 30.6315 15.0939 30.9685 15.4478C31.3062 15.8024 31.5 16.2884 31.5 16.8C31.5 17.3116 31.3062 17.7976 30.9685 18.1522C30.6315 18.5061 30.1798 18.7 29.7143 18.7H18.2857Z" fill="white" stroke="#49108B" /></svg></li>
          <li><Form.Label className='li_text'>Де можна дивитись контент?</Form.Label><svg className="plus" width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2857 18.7H17.7857V19.2V31.2C17.7857 31.7116 17.5919 32.1976 17.2542 32.5522C16.9172 32.9061 16.4655 33.1 16 33.1C15.5345 33.1 15.0828 32.9061 14.7458 32.5522C14.4081 32.1976 14.2143 31.7116 14.2143 31.2V19.2V18.7H13.7143H2.28571C1.8202 18.7 1.36852 18.5061 1.03154 18.1522C0.693772 17.7976 0.5 17.3116 0.5 16.8C0.5 16.2884 0.693771 15.8024 1.03154 15.4478C1.36852 15.0939 1.8202 14.9 2.28571 14.9H13.7143H14.2143V14.4V2.4C14.2143 1.88843 14.4081 1.40243 14.7458 1.04777C15.0828 0.693943 15.5345 0.5 16 0.5C16.4655 0.5 16.9172 0.693944 17.2542 1.04777C17.5919 1.40243 17.7857 1.88843 17.7857 2.4V14.4V14.9H18.2857H29.7143C30.1798 14.9 30.6315 15.0939 30.9685 15.4478C31.3062 15.8024 31.5 16.2884 31.5 16.8C31.5 17.3116 31.3062 17.7976 30.9685 18.1522C30.6315 18.5061 30.1798 18.7 29.7143 18.7H18.2857Z" fill="white" stroke="#49108B" /></svg></li>
          <li><Form.Label className='li_text'>Що можна подивитись на Netflix?</Form.Label><svg className="plus" width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2857 18.7H17.7857V19.2V31.2C17.7857 31.7116 17.5919 32.1976 17.2542 32.5522C16.9172 32.9061 16.4655 33.1 16 33.1C15.5345 33.1 15.0828 32.9061 14.7458 32.5522C14.4081 32.1976 14.2143 31.7116 14.2143 31.2V19.2V18.7H13.7143H2.28571C1.8202 18.7 1.36852 18.5061 1.03154 18.1522C0.693772 17.7976 0.5 17.3116 0.5 16.8C0.5 16.2884 0.693771 15.8024 1.03154 15.4478C1.36852 15.0939 1.8202 14.9 2.28571 14.9H13.7143H14.2143V14.4V2.4C14.2143 1.88843 14.4081 1.40243 14.7458 1.04777C15.0828 0.693943 15.5345 0.5 16 0.5C16.4655 0.5 16.9172 0.693944 17.2542 1.04777C17.5919 1.40243 17.7857 1.88843 17.7857 2.4V14.4V14.9H18.2857H29.7143C30.1798 14.9 30.6315 15.0939 30.9685 15.4478C31.3062 15.8024 31.5 16.2884 31.5 16.8C31.5 17.3116 31.3062 17.7976 30.9685 18.1522C30.6315 18.5061 30.1798 18.7 29.7143 18.7H18.2857Z" fill="white" stroke="#49108B" /></svg></li>
          <li><Form.Label className='li_text'>Netflix підходить для дітей?</Form.Label><svg className="plus" width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2857 18.7H17.7857V19.2V31.2C17.7857 31.7116 17.5919 32.1976 17.2542 32.5522C16.9172 32.9061 16.4655 33.1 16 33.1C15.5345 33.1 15.0828 32.9061 14.7458 32.5522C14.4081 32.1976 14.2143 31.7116 14.2143 31.2V19.2V18.7H13.7143H2.28571C1.8202 18.7 1.36852 18.5061 1.03154 18.1522C0.693772 17.7976 0.5 17.3116 0.5 16.8C0.5 16.2884 0.693771 15.8024 1.03154 15.4478C1.36852 15.0939 1.8202 14.9 2.28571 14.9H13.7143H14.2143V14.4V2.4C14.2143 1.88843 14.4081 1.40243 14.7458 1.04777C15.0828 0.693943 15.5345 0.5 16 0.5C16.4655 0.5 16.9172 0.693944 17.2542 1.04777C17.5919 1.40243 17.7857 1.88843 17.7857 2.4V14.4V14.9H18.2857H29.7143C30.1798 14.9 30.6315 15.0939 30.9685 15.4478C31.3062 15.8024 31.5 16.2884 31.5 16.8C31.5 17.3116 31.3062 17.7976 30.9685 18.1522C30.6315 18.5061 30.1798 18.7 29.7143 18.7H18.2857Z" fill="white" stroke="#49108B" /></svg></li>
          <li><Form.Label className='li_text'>Чому текст відображається цією мовою?</Form.Label><svg className="plus" width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2857 18.7H17.7857V19.2V31.2C17.7857 31.7116 17.5919 32.1976 17.2542 32.5522C16.9172 32.9061 16.4655 33.1 16 33.1C15.5345 33.1 15.0828 32.9061 14.7458 32.5522C14.4081 32.1976 14.2143 31.7116 14.2143 31.2V19.2V18.7H13.7143H2.28571C1.8202 18.7 1.36852 18.5061 1.03154 18.1522C0.693772 17.7976 0.5 17.3116 0.5 16.8C0.5 16.2884 0.693771 15.8024 1.03154 15.4478C1.36852 15.0939 1.8202 14.9 2.28571 14.9H13.7143H14.2143V14.4V2.4C14.2143 1.88843 14.4081 1.40243 14.7458 1.04777C15.0828 0.693943 15.5345 0.5 16 0.5C16.4655 0.5 16.9172 0.693944 17.2542 1.04777C17.5919 1.40243 17.7857 1.88843 17.7857 2.4V14.4V14.9H18.2857H29.7143C30.1798 14.9 30.6315 15.0939 30.9685 15.4478C31.3062 15.8024 31.5 16.2884 31.5 16.8C31.5 17.3116 31.3062 17.7976 30.9685 18.1522C30.6315 18.5061 30.1798 18.7 29.7143 18.7H18.2857Z" fill="white" stroke="#49108B" /></svg></li>
        </ul>
        <Form.Label className='text'>Готові до перегляду? Введіть адресу електронної пошти,<br></br> щоб оформити або поновити підписку.</Form.Label>
        <input type="email" className="email" id="exampleFormControlInput1" placeholder="Адреса елекронної пошти" />
        <button className='button'><Link to={"/main/register"} className="nav-link">Почати</Link></button>
      </div>
      <div className="wrapper-footer">
                
                <div className='footer'>
                    <p className='ques'>Маєте запитання? Зателефонуйте за номером 0800-509-416</p>

                    <div className="column-wrapper">
                        <div className="column">
                            <div className="column-text">
                                Поширені запитання
                            </div>
                            <div className="column-text">
                                Зв’язки з інвесторами
                            </div>
                            <div className="column-text">
                                Конфіденційність
                            </div>
                            <div className="column-text">
                                Перевірка швидкості
                            </div>
                        </div>
                        <div className="column">
                            <div className="column-text">
                                Довідковий центр
                            </div><div className="column-text">
                                Вакансії
                            </div><div className="column-text">
                                Налаштування файлів cookie
                            </div><div className="column-text">
                                Юридичні повідомлення
                            </div>
                        </div>
                        <div className="column">
                            <div className="column-text">
                                Обліковий запис
                            </div><div className="column-text">
                                Способи перегляду
                            </div><div className="column-text">
                                Корпоративна інформація
                            </div><div className="column-text">
                                Тільки на Netflix
                            </div>

                        </div>
                        <div className="column">
                            <div className="column-text">
                                Медіацентр
                            </div><div className="column-text">
                                Умови використання
                            </div><div className="column-text">
                                Зв’язатися з нами
                            </div>
                        </div>

                    </div>
                    <div className="column-text bottom-text">FlexWatch Україна</div>
                </div>

            </div>
    </Container>
  );
}
