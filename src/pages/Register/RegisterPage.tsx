import React from 'react';
import './RegisterStyle.scss';
import { Col, Container, Form, Row } from 'react-bootstrap';

export const RegisterPage = () => {
  return (
    <Container>  
      <Form.Label className='text1'>Реєстрація</Form.Label>
      <br></br>
      <Form.Label className='text2'>Зареєструйтесь, щоб почати пробний період.</Form.Label>
      <div className="form">
        <Row>
          <Form.Label className='text'>Введіть дані:</Form.Label>
        </Row>
        <Row>
          <input className="text-input" id="exampleFormControlInput1" placeholder="Номер телефону або пошта"/>
        </Row>
        <Row>
          <input type='password' className="text-input" id="exampleFormControlInput2" placeholder="Пароль"/>
        </Row>
        <Row>
          <Col xs lg="2">
            <input type='checkbox' className='checkbox-ac'></input>
          </Col>
          <Col>
            <Form.Label className='text-checkbox'>Не надсилати мені спеціальні пропозиції від<br/> FlexWatch електронною поштою.</Form.Label>
          </Col>
        </Row>
        <Row>
          <button className='btn'>Продовжити</button>
        </Row>
      </div>
    </Container>
  );
}
