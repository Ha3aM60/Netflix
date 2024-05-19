import React from 'react';
import './FavoritStyle.scss';
import { Col, Container, Form, Row } from 'react-bootstrap';

export const FavoritPage = () => {
  return (
    <Container>
      <Form.Label className="favorit-text">Вподобання</Form.Label>
      <Row className='favorit-films'>
        <div className="row-films">
          <Row>
            <Form.Label className="name-text">Фільми</Form.Label>
          </Row>
          <Row className="row-film">
            <svg className='click-left' width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_700_1193)"><circle cx="31" cy="31" r="31" transform="rotate(180 31 31)" fill="black" /><path d="M40 47.1989L40 47.2005C40.0002 47.346 39.9605 47.489 39.885 47.6138C39.8095 47.7386 39.701 47.8406 39.5711 47.9085C39.4413 47.9764 39.2951 48.0076 39.1486 47.9984C39.002 47.9893 38.861 47.9403 38.7406 47.8568L38.7393 47.8559L15.2984 31.656C15.2981 31.6559 15.2979 31.6557 15.2976 31.6555C15.1298 31.5389 15 31.3038 15 30.9969C15 30.6895 15.1302 30.4553 15.2973 30.3398L15.2975 30.3397L38.7359 14.1415C38.7363 14.1413 38.7367 14.141 38.737 14.1408C38.8578 14.0583 38.9989 14.0101 39.1453 14.0014C39.2922 13.9927 39.4385 14.0242 39.5686 14.0923L40.0325 13.2064L39.5686 14.0923C39.6987 14.1604 39.8074 14.2625 39.8833 14.3874C39.959 14.5119 39.9993 14.6544 40 14.7997L40 47.1989Z" fill="black" stroke="#5314AD" stroke-width="2" /></g><defs><clipPath id="clip0_700_1193"><rect width="62" height="62" fill="white" transform="translate(0 62) rotate(-90)" /></clipPath></defs></svg>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <svg className='click-right' width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_660_1209)"><circle cx="31" cy="31" r="31" fill="black" /><path d="M22 14.8011L22 14.7995C21.9998 14.654 22.0395 14.511 22.115 14.3862C22.1905 14.2614 22.299 14.1594 22.4289 14.0915C22.5587 14.0236 22.7049 13.9924 22.8514 14.0016C22.998 14.0107 23.139 14.0597 23.2594 14.1432L23.2607 14.1441L46.7016 30.344C46.7019 30.3441 46.7021 30.3443 46.7024 30.3445C46.8702 30.4611 47 30.6962 47 31.0031C47 31.3105 46.8698 31.5447 46.7027 31.6602L46.7025 31.6603L23.2641 47.8585C23.2637 47.8587 23.2633 47.859 23.263 47.8592C23.1422 47.9417 23.0011 47.9899 22.8547 47.9986C22.7078 48.0073 22.5615 47.9758 22.4314 47.9077L21.9675 48.7936L22.4314 47.9077C22.3013 47.8396 22.1926 47.7375 22.1167 47.6126C22.041 47.4881 22.0007 47.3456 22 47.2003L22 14.8011Z" fill="black" stroke="#5314AD" stroke-width="2" /></g><defs><clipPath id="clip0_660_1209"><rect width="62" height="62" fill="white" transform="translate(62) rotate(90)" /></clipPath></defs></svg>

          </Row>
        </div>
        <div className="row-films">
          <Row>
            <Form.Label className="name-text">Серіали</Form.Label>
          </Row>
          <Row className="row-film">
            <svg className='click-left' width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_700_1193)"><circle cx="31" cy="31" r="31" transform="rotate(180 31 31)" fill="black" /><path d="M40 47.1989L40 47.2005C40.0002 47.346 39.9605 47.489 39.885 47.6138C39.8095 47.7386 39.701 47.8406 39.5711 47.9085C39.4413 47.9764 39.2951 48.0076 39.1486 47.9984C39.002 47.9893 38.861 47.9403 38.7406 47.8568L38.7393 47.8559L15.2984 31.656C15.2981 31.6559 15.2979 31.6557 15.2976 31.6555C15.1298 31.5389 15 31.3038 15 30.9969C15 30.6895 15.1302 30.4553 15.2973 30.3398L15.2975 30.3397L38.7359 14.1415C38.7363 14.1413 38.7367 14.141 38.737 14.1408C38.8578 14.0583 38.9989 14.0101 39.1453 14.0014C39.2922 13.9927 39.4385 14.0242 39.5686 14.0923L40.0325 13.2064L39.5686 14.0923C39.6987 14.1604 39.8074 14.2625 39.8833 14.3874C39.959 14.5119 39.9993 14.6544 40 14.7997L40 47.1989Z" fill="black" stroke="#5314AD" stroke-width="2" /></g><defs><clipPath id="clip0_700_1193"><rect width="62" height="62" fill="white" transform="translate(0 62) rotate(-90)" /></clipPath></defs></svg>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <svg className='click-right' width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_660_1209)"><circle cx="31" cy="31" r="31" fill="black" /><path d="M22 14.8011L22 14.7995C21.9998 14.654 22.0395 14.511 22.115 14.3862C22.1905 14.2614 22.299 14.1594 22.4289 14.0915C22.5587 14.0236 22.7049 13.9924 22.8514 14.0016C22.998 14.0107 23.139 14.0597 23.2594 14.1432L23.2607 14.1441L46.7016 30.344C46.7019 30.3441 46.7021 30.3443 46.7024 30.3445C46.8702 30.4611 47 30.6962 47 31.0031C47 31.3105 46.8698 31.5447 46.7027 31.6602L46.7025 31.6603L23.2641 47.8585C23.2637 47.8587 23.2633 47.859 23.263 47.8592C23.1422 47.9417 23.0011 47.9899 22.8547 47.9986C22.7078 48.0073 22.5615 47.9758 22.4314 47.9077L21.9675 48.7936L22.4314 47.9077C22.3013 47.8396 22.1926 47.7375 22.1167 47.6126C22.041 47.4881 22.0007 47.3456 22 47.2003L22 14.8011Z" fill="black" stroke="#5314AD" stroke-width="2" /></g><defs><clipPath id="clip0_660_1209"><rect width="62" height="62" fill="white" transform="translate(62) rotate(90)" /></clipPath></defs></svg>

          </Row>
        </div>
        <div className="row-films">
          <Row>
            <Form.Label className="name-text">Аніме</Form.Label>
          </Row>
          <Row className="row-film">
            <svg className='click-left' width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_700_1193)"><circle cx="31" cy="31" r="31" transform="rotate(180 31 31)" fill="black" /><path d="M40 47.1989L40 47.2005C40.0002 47.346 39.9605 47.489 39.885 47.6138C39.8095 47.7386 39.701 47.8406 39.5711 47.9085C39.4413 47.9764 39.2951 48.0076 39.1486 47.9984C39.002 47.9893 38.861 47.9403 38.7406 47.8568L38.7393 47.8559L15.2984 31.656C15.2981 31.6559 15.2979 31.6557 15.2976 31.6555C15.1298 31.5389 15 31.3038 15 30.9969C15 30.6895 15.1302 30.4553 15.2973 30.3398L15.2975 30.3397L38.7359 14.1415C38.7363 14.1413 38.7367 14.141 38.737 14.1408C38.8578 14.0583 38.9989 14.0101 39.1453 14.0014C39.2922 13.9927 39.4385 14.0242 39.5686 14.0923L40.0325 13.2064L39.5686 14.0923C39.6987 14.1604 39.8074 14.2625 39.8833 14.3874C39.959 14.5119 39.9993 14.6544 40 14.7997L40 47.1989Z" fill="black" stroke="#5314AD" stroke-width="2" /></g><defs><clipPath id="clip0_700_1193"><rect width="62" height="62" fill="white" transform="translate(0 62) rotate(-90)" /></clipPath></defs></svg>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <svg className='click-right' width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_660_1209)"><circle cx="31" cy="31" r="31" fill="black" /><path d="M22 14.8011L22 14.7995C21.9998 14.654 22.0395 14.511 22.115 14.3862C22.1905 14.2614 22.299 14.1594 22.4289 14.0915C22.5587 14.0236 22.7049 13.9924 22.8514 14.0016C22.998 14.0107 23.139 14.0597 23.2594 14.1432L23.2607 14.1441L46.7016 30.344C46.7019 30.3441 46.7021 30.3443 46.7024 30.3445C46.8702 30.4611 47 30.6962 47 31.0031C47 31.3105 46.8698 31.5447 46.7027 31.6602L46.7025 31.6603L23.2641 47.8585C23.2637 47.8587 23.2633 47.859 23.263 47.8592C23.1422 47.9417 23.0011 47.9899 22.8547 47.9986C22.7078 48.0073 22.5615 47.9758 22.4314 47.9077L21.9675 48.7936L22.4314 47.9077C22.3013 47.8396 22.1926 47.7375 22.1167 47.6126C22.041 47.4881 22.0007 47.3456 22 47.2003L22 14.8011Z" fill="black" stroke="#5314AD" stroke-width="2" /></g><defs><clipPath id="clip0_660_1209"><rect width="62" height="62" fill="white" transform="translate(62) rotate(90)" /></clipPath></defs></svg>

          </Row>
        </div>
        <div className="row-films">
          <Row>
            <Form.Label className="name-text">Мультфільми</Form.Label>
          </Row>
          <Row className="row-film">
            <svg className='click-left' width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_700_1193)"><circle cx="31" cy="31" r="31" transform="rotate(180 31 31)" fill="black" /><path d="M40 47.1989L40 47.2005C40.0002 47.346 39.9605 47.489 39.885 47.6138C39.8095 47.7386 39.701 47.8406 39.5711 47.9085C39.4413 47.9764 39.2951 48.0076 39.1486 47.9984C39.002 47.9893 38.861 47.9403 38.7406 47.8568L38.7393 47.8559L15.2984 31.656C15.2981 31.6559 15.2979 31.6557 15.2976 31.6555C15.1298 31.5389 15 31.3038 15 30.9969C15 30.6895 15.1302 30.4553 15.2973 30.3398L15.2975 30.3397L38.7359 14.1415C38.7363 14.1413 38.7367 14.141 38.737 14.1408C38.8578 14.0583 38.9989 14.0101 39.1453 14.0014C39.2922 13.9927 39.4385 14.0242 39.5686 14.0923L40.0325 13.2064L39.5686 14.0923C39.6987 14.1604 39.8074 14.2625 39.8833 14.3874C39.959 14.5119 39.9993 14.6544 40 14.7997L40 47.1989Z" fill="black" stroke="#5314AD" stroke-width="2" /></g><defs><clipPath id="clip0_700_1193"><rect width="62" height="62" fill="white" transform="translate(0 62) rotate(-90)" /></clipPath></defs></svg>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <Col><div className="img-poster"></div></Col>
            <svg className='click-right' width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_660_1209)"><circle cx="31" cy="31" r="31" fill="black" /><path d="M22 14.8011L22 14.7995C21.9998 14.654 22.0395 14.511 22.115 14.3862C22.1905 14.2614 22.299 14.1594 22.4289 14.0915C22.5587 14.0236 22.7049 13.9924 22.8514 14.0016C22.998 14.0107 23.139 14.0597 23.2594 14.1432L23.2607 14.1441L46.7016 30.344C46.7019 30.3441 46.7021 30.3443 46.7024 30.3445C46.8702 30.4611 47 30.6962 47 31.0031C47 31.3105 46.8698 31.5447 46.7027 31.6602L46.7025 31.6603L23.2641 47.8585C23.2637 47.8587 23.2633 47.859 23.263 47.8592C23.1422 47.9417 23.0011 47.9899 22.8547 47.9986C22.7078 48.0073 22.5615 47.9758 22.4314 47.9077L21.9675 48.7936L22.4314 47.9077C22.3013 47.8396 22.1926 47.7375 22.1167 47.6126C22.041 47.4881 22.0007 47.3456 22 47.2003L22 14.8011Z" fill="black" stroke="#5314AD" stroke-width="2" /></g><defs><clipPath id="clip0_660_1209"><rect width="62" height="62" fill="white" transform="translate(62) rotate(90)" /></clipPath></defs></svg>
          </Row>
          <div className="line1"></div>
          <div className="row-films">
            <Row>
              <Form.Label className="name-text">Рекомендоване</Form.Label>
            </Row>
            <Row className="row-film">
              <svg className='click-left' width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_700_1193)"><circle cx="31" cy="31" r="31" transform="rotate(180 31 31)" fill="black" /><path d="M40 47.1989L40 47.2005C40.0002 47.346 39.9605 47.489 39.885 47.6138C39.8095 47.7386 39.701 47.8406 39.5711 47.9085C39.4413 47.9764 39.2951 48.0076 39.1486 47.9984C39.002 47.9893 38.861 47.9403 38.7406 47.8568L38.7393 47.8559L15.2984 31.656C15.2981 31.6559 15.2979 31.6557 15.2976 31.6555C15.1298 31.5389 15 31.3038 15 30.9969C15 30.6895 15.1302 30.4553 15.2973 30.3398L15.2975 30.3397L38.7359 14.1415C38.7363 14.1413 38.7367 14.141 38.737 14.1408C38.8578 14.0583 38.9989 14.0101 39.1453 14.0014C39.2922 13.9927 39.4385 14.0242 39.5686 14.0923L40.0325 13.2064L39.5686 14.0923C39.6987 14.1604 39.8074 14.2625 39.8833 14.3874C39.959 14.5119 39.9993 14.6544 40 14.7997L40 47.1989Z" fill="black" stroke="#5314AD" stroke-width="2" /></g><defs><clipPath id="clip0_700_1193"><rect width="62" height="62" fill="white" transform="translate(0 62) rotate(-90)" /></clipPath></defs></svg>
              <Col><div className="img-poster"></div></Col>
              <Col><div className="img-poster"></div></Col>
              <Col><div className="img-poster"></div></Col>
              <Col><div className="img-poster"></div></Col>
              <Col><div className="img-poster"></div></Col>
              <svg className='click-right' width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_660_1209)"><circle cx="31" cy="31" r="31" fill="black" /><path d="M22 14.8011L22 14.7995C21.9998 14.654 22.0395 14.511 22.115 14.3862C22.1905 14.2614 22.299 14.1594 22.4289 14.0915C22.5587 14.0236 22.7049 13.9924 22.8514 14.0016C22.998 14.0107 23.139 14.0597 23.2594 14.1432L23.2607 14.1441L46.7016 30.344C46.7019 30.3441 46.7021 30.3443 46.7024 30.3445C46.8702 30.4611 47 30.6962 47 31.0031C47 31.3105 46.8698 31.5447 46.7027 31.6602L46.7025 31.6603L23.2641 47.8585C23.2637 47.8587 23.2633 47.859 23.263 47.8592C23.1422 47.9417 23.0011 47.9899 22.8547 47.9986C22.7078 48.0073 22.5615 47.9758 22.4314 47.9077L21.9675 48.7936L22.4314 47.9077C22.3013 47.8396 22.1926 47.7375 22.1167 47.6126C22.041 47.4881 22.0007 47.3456 22 47.2003L22 14.8011Z" fill="black" stroke="#5314AD" stroke-width="2" /></g><defs><clipPath id="clip0_660_1209"><rect width="62" height="62" fill="white" transform="translate(62) rotate(90)" /></clipPath></defs></svg>
            </Row>
          </div>

        </div>
      </Row>
    </Container>
  );
}
