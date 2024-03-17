import React from 'react';
import './LoginStyle.scss';
import {  Container, Form, Row } from 'react-bootstrap';

export const LoginPage = () => {
  return (
    <Container>  
      <Form.Label className='text1'>Увійдіть в обліковий запис</Form.Label>
      <br></br>
      <Form.Label className='text2'>Пройдіть авторизацію.</Form.Label>
      <div className="form">
        <Row>
          <Form.Label className='text'>Введіть дані:</Form.Label>
        </Row>
        <Row>
          <input className="text-input" id="exampleFormControlInput1" placeholder="Електронна пошта"/>
        </Row>
        <Row>
          <input type='password' className="text-input" id="exampleFormControlInput2" placeholder="Пароль"/>
        </Row>
        <Row>
            <a className='forgot-password'>Забули пароль?</a>
        </Row>
        <Row>
          <button className='btn'>Увійти</button>
        </Row>
        <Row>
          <Form.Label className='register-text'>Вперше на FlexWatch?<a className='register' href='/register'>Зареєструватись зараз</a></Form.Label>
        </Row>      
      </div>
      
    </Container>
  );
}
