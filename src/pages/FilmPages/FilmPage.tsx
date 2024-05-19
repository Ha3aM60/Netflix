import React, { useEffect, useState } from 'react';
import './FilmPageStyle.scss';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import imgFilmPage from "../../images/fone-page-film.png"
import { useParams } from 'react-router-dom';
import { IMoviesItem } from '../../utils/types';
import http from '../../http';

export const FilmPage = () => {
    const { id } = useParams();
    const [allMovies, setMovies] = useState<IMoviesItem[]>([]);
    console.log(id);

    useEffect(() => {
        fetchGenreMovies();
    }, [id]);

    const fetchGenreMovies = async () => {
        try {
            const resp = await http.get(`/movies/searchById/${id}`);
            setMovies(resp.data);
            console.log(resp.data);
        } catch (error) {
            console.log('Error!', error);
        }
    };


    const [show, setShow] = useState(false);
    const [currentMovie, setCurrentMovie] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = (item: IMoviesItem) => {
        setShow(true);
    };

    return (
        <Container className='film-page'>
            {allMovies.map((item: IMoviesItem) => (
                <div className="movie-description">
                    <div className="container"></div>
                    <div className="radial"></div>
                    <div className="description-movie">
                        <div className="container-img">
                            <img className='img-fone' src={`http://127.0.0.1:8000/uploads/${item.image}`}></img>
                        </div>
                        <Form.Label className='name-film'>{item.title}</Form.Label>
                        <Button className='btn-start-film'>
                            <Form.Label onClick={() => handleShow(item)} className='text-start-film'>Дивитись онлайн</Form.Label>
                            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1316_1483)"><mask id="mask0_1316_1483" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="37" height="37"><path d="M0.166016 0.333328H36.8327V37H0.166016V0.333328Z" fill="white" /></mask><g mask="url(#mask0_1316_1483)"><path d="M33.8779 23.4454L33.8779 23.4454C37.5547 21.3211 37.5549 16.0122 33.8779 13.8855V23.4454ZM33.8779 23.4454L14.3873 34.7136L14.3872 34.7136C10.7083 36.8424 6.10384 34.1859 6.10384 29.9348V7.39851C6.10384 3.14744 10.7083 0.490852 14.3873 2.61741C14.3873 2.61741 14.3873 2.61742 14.3873 2.61742L33.8779 13.8855L33.8779 23.4454ZM12.8748 5.23356L12.8747 5.2335C12.4946 5.01408 12.0635 4.89857 11.6247 4.89857C11.1859 4.89856 10.7547 5.01407 10.3747 5.23349C9.99466 5.4529 9.67906 5.76849 9.45963 6.14852C9.24021 6.52856 9.12469 6.95967 9.12467 7.3985V29.9348C9.12469 30.3736 9.24021 30.8047 9.45963 31.1847C9.67906 31.5648 9.99466 31.8804 10.3747 32.0998C10.7547 32.3192 11.1859 32.4347 11.6247 32.4347C12.0635 32.4347 12.4946 32.3192 12.8747 32.0998L12.8748 32.0997L32.3653 20.8316C32.3653 20.8316 32.3654 20.8316 32.3654 20.8316C32.7454 20.6122 33.0609 20.2966 33.2803 19.9166C33.4997 19.5365 33.6152 19.1055 33.6152 18.6666C33.6152 18.2278 33.4997 17.7967 33.2803 17.4167C33.0609 17.0367 32.7453 16.7211 32.3653 16.5016L12.8748 5.23356Z" fill="white" stroke="#5314AD" strokeWidth="0.416667" /></g></g><defs><clipPath id="clip0_1316_1483"><rect width="36.6667" height="36.6667" fill="white" transform="translate(0.166992 0.333328)" /></clipPath></defs></svg>
                        </Button>
                        <div className="description">
                            <Form.Label className='text-description'>
                                {item.description}
                            </Form.Label>
                        </div>
                        <table className='table-info-movie'>
                            <tr>
                                <th>Жанр</th>
                                <th>Комедія</th>
                            </tr>
                            <tr>
                                <th>Країна</th>
                                <th>{item.country}</th>
                            </tr>
                            <tr>
                                <th>Режисер</th>
                                <th>{item.directorId}</th>
                            </tr>
                            <tr>
                                <th>Вік</th>
                                <th>{item.age}+</th>
                            </tr>
                            <tr>
                                <th>Час</th>
                                <th>{item.time}</th>
                            </tr>
                        </table>
                        <Button className='btn1'><Form.Label className='text'>Трейлер</Form.Label>
                            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1316_1115" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="37" height="37">
                                    <path d="M0.166016 0.166672H36.8327V36.8333H0.166016V0.166672Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_1316_1115)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2981 16.925L14.5536 7.97994C14.2722 7.82027 13.953 7.73621 13.628 7.73621C13.3031 7.73621 12.9838 7.82026 12.7024 7.97992C12.421 8.13959 12.1873 8.36923 12.0248 8.64578C11.8624 8.92233 11.7768 9.23603 11.7768 9.55537V27.4454C11.7768 27.7647 11.8624 28.0784 12.0248 28.355C12.1873 28.6315 12.421 28.8612 12.7024 29.0208C12.9838 29.1805 13.3031 29.2646 13.628 29.2646C13.953 29.2646 14.2722 29.1805 14.5536 29.0208L30.2981 20.0758C30.5795 19.9161 30.8131 19.6865 30.9756 19.4099C31.1381 19.1334 31.2236 18.8197 31.2236 18.5004C31.2236 18.1811 31.1381 17.8674 30.9756 17.5908C30.8131 17.3143 30.5795 17.0846 30.2981 16.925ZM31.6883 22.4371C34.7706 20.6871 34.7706 16.3137 31.6883 14.5618L15.9439 5.61679C12.8598 3.8649 9 6.0534 9 9.55537V27.4454C9 30.9474 12.8598 33.1359 15.9439 31.3822L31.6883 22.4371Z" fill="white" />
                                </g>
                            </svg>
                        </Button>
                        <Button className='btn2'><Form.Label className='text'>Переглянути пізніше</Form.Label>
                            <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.167 13.5C27.167 13.9297 26.9963 14.3417 26.6925 14.6455C26.3887 14.9493 25.9766 15.12 25.547 15.12H15.287V25.38C15.287 25.8097 15.1163 26.2217 14.8125 26.5255C14.5087 26.8293 14.0966 27 13.667 27C13.2373 27 12.8253 26.8293 12.5215 26.5255C12.2177 26.2217 12.047 25.8097 12.047 25.38V15.12H1.78699C1.35734 15.12 0.945288 14.9493 0.641479 14.6455C0.33767 14.3417 0.166992 13.9297 0.166992 13.5C0.166992 13.0703 0.33767 12.6583 0.641479 12.3545C0.945288 12.0507 1.35734 11.88 1.78699 11.88H12.047V1.62C12.047 1.19035 12.2177 0.778296 12.5215 0.474487C12.8253 0.170678 13.2373 0 13.667 0C14.0966 0 14.5087 0.170678 14.8125 0.474487C15.1163 0.778296 15.287 1.19035 15.287 1.62V11.88H25.547C25.9766 11.88 26.3887 12.0507 26.6925 12.3545C26.9963 12.6583 27.167 13.0703 27.167 13.5Z" fill="white" />
                            </svg>
                        </Button>
                        <Button className='btn3'>
                            <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.333 18.5C29.568 16.31 31.833 13.685 31.833 10.25C31.833 8.06196 30.9638 5.96354 29.4166 4.41637C27.8695 2.86919 25.771 2 23.583 2C20.943 2 19.083 2.75 16.833 5C14.583 2.75 12.723 2 10.083 2C7.89497 2 5.79655 2.86919 4.24938 4.41637C2.7022 5.96354 1.83301 8.06196 1.83301 10.25C1.83301 13.7 4.08301 16.325 6.33301 18.5L16.833 29L27.333 18.5Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Button>
                        <div className="more-details">
                            <Form.Label className='text1'>Детальніше</Form.Label>
                            <Form.Label className='text2'>Акторський склад</Form.Label>
                            <table className='table-info-actors'>
                                <tr>
                                    <th>Наталія Денисенко</th>
                                    <th>Олена Кравець</th>
                                    <th>Сара Наточенні</th>
                                    <th>Сергій Притула</th>
                                </tr>
                                <tr>
                                    <th>Артем Пивоваров</th>
                                    <th>Христина Соловій</th>
                                    <th>Михайло Хома</th>
                                    <th>Лорі Гаймс</th>
                                </tr>
                            </table>
                            <Form.Label className='text3'>Субтитри</Form.Label>
                            <Form.Label className='text4'>Українські, Англійські</Form.Label>
                        </div>
                        <div className="row-films">
                            <Row>
                                <Form.Label className="name-text">Глядачі також дивляться</Form.Label>
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
                </div>
            ))}
            {allMovies.map((item: IMoviesItem) =>  (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <video width="100%" controls>
                            <source
                                src={`http://127.0.0.1:8000/uploads/${item.video}`}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            ))}

        </Container>
    );
}
