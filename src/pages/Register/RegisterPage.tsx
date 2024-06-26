import React, { useState } from 'react';
import './RegisterStyle.scss';
import { Col, Container, Form, Row } from 'react-bootstrap';
import http from '../../http';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice.ts";
import { log } from "node:util";
import { addLocalStorage } from "../../utils/localStorageUtils.ts";

export interface IUser {
  email: string,
  password: string;
  isAdmin: boolean;
}

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>({
    email: "",
    password: "",
    isAdmin: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevstate) => ({
      ...prevstate,
      [name]: value
    }))
  }
  const PostDataAsync = async () => {
    try {
      console.log('user', user);
      const resp = await http
        .post<IUser>("/auth/register", user, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
      console.log('billie eilish top', resp);
      dispatch(login({ email: user.email, password: user.password, isAdmin: user.isAdmin, id: resp.data.user.id }));
      addLocalStorage("authToken", resp.data.token.original.access_token);
    }
    catch (error: any) {
      console.log(error);
    }

  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    await PostDataAsync();
    setUser({
      email: "",
      password: "",
      isAdmin: false
    });
    form.reset();
    navigate("/main/popular-films");
  }

  return (
    <Container>
      <div className="page-register">
        <Form.Label className='text1'>Реєстрація</Form.Label>
        <br></br>
        <Form.Label className='text2'>Зареєструйтесь, щоб почати пробний період.</Form.Label>
        <Form onSubmit={handleSubmit} className="form">
          <Row>
            <Form.Label className='text'>Введіть дані:</Form.Label>
          </Row>
          <Row>
            <Form.Control value={user.email} onChange={handleChange} name="email" className="text-input" id="exampleFormControlInput1" placeholder="Номер телефону або пошта" />
          </Row>
          <Row>
            <Form.Control value={user.password} onChange={handleChange} name="password" type='password' className="text-input" id="exampleFormControlInput2" placeholder="Пароль" />
          </Row>
          <Row>
            <Col xs lg="2">
              <input type='checkbox' className='checkbox-ac'></input>
            </Col>
            <Col>
              <Form.Label className='text-checkbox'>Не надсилати мені спеціальні пропозиції від<br /> FlexWatch електронною поштою.</Form.Label>
            </Col>
          </Row>
          <Row>
            <button type="submit" className='btn'>Продовжити</button>
          </Row>
        </Form>
        <svg className="line-foneL" width="186" height="279" viewBox="0 0 186 279" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_381_185)"><path d="M110.927 279C104.483 279 98.1011 278.137 91.9425 276.404C80.0553 273.061 70.4986 266.936 64.3086 258.682C56.2026 247.879 54.5564 233.745 60.109 222.68C67.4368 208.086 85.1503 201.105 108.721 203.533L106.555 224.503C95.6416 223.379 82.6673 224.788 78.9878 232.125C77.0483 235.99 77.9633 241.71 81.2088 246.04C85.4827 251.74 92.5134 254.656 97.6632 256.105C116.667 261.446 138.752 254.586 151.367 239.422C159.035 230.207 163.774 217.714 164.713 204.244C166.058 184.917 159.61 165.376 147.019 150.633C137.943 140.01 125.903 132.134 112.647 127.922C112.538 128.796 112.424 129.671 112.303 130.545C110.884 140.841 108.194 154.034 99.9233 164.771C95.5829 170.405 89.6354 174.977 83.1757 177.64C75.7149 180.716 68.0116 181.181 60.9067 178.99C53.5867 176.73 47.2638 171.6 43.0954 164.544C39.193 157.938 37.4959 150.208 38.3093 142.77C39.7717 129.44 48.8122 116.888 61.9038 110.005C70.8114 105.319 81.2479 103.106 93.0061 103.399C92.9787 95.5391 92.4156 87.6836 91.3168 79.8788C89.8505 69.4581 86.1123 58.6314 79.8871 46.7818C56.273 1.82332 -5.7477 28.3962 -17.9399 34.1786L-27 15.1332C-17.8695 10.8033 6.15515 0.663737 31.9668 0.0312347C32.8075 0.011713 33.6482 0 34.4772 0C63.7221 0 85.8542 12.7555 98.586 36.9936C105.953 51.0219 110.418 64.0936 112.225 76.9467C113.601 86.7192 114.227 96.5699 114.106 106.413C133.024 111.344 150.334 122.034 163.078 136.956C179.224 155.861 187.498 180.919 185.769 205.708C184.526 223.551 178.074 240.312 167.602 252.9C158.808 263.469 146.901 271.312 133.172 275.576C125.829 277.856 118.333 279 110.919 279H110.927ZM91.1252 124.466C83.6371 124.466 77.017 125.888 71.7499 128.66C64.8873 132.267 60.0034 138.709 59.3035 145.066C58.6505 151.02 62.244 157.333 67.1475 158.848C72.0744 160.371 78.9721 157.392 83.1874 151.922C88.4271 145.116 90.3236 135.387 91.3872 127.672C91.5358 126.606 91.6727 125.536 91.7978 124.47C91.571 124.47 91.3481 124.47 91.1252 124.47V124.466Z" fill="#5314AD" /></g><defs><clipPath id="clip0_381_185"><rect width="213" height="279" fill="white" transform="translate(-27)" /></clipPath></defs></svg>
        <svg className="line-foneR" width="278" height="437" viewBox="0 0 278 437" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_381_173)"><path d="M292.769 374.52C276.563 380.403 260.494 384.509 244.916 386.747C225.305 389.562 206.341 389.423 188.549 386.336C153.175 380.197 119.993 360.735 95.1146 331.538C70.2403 302.339 56.2982 266.487 55.8558 230.588C55.4135 194.689 68.482 158.505 92.6387 128.707C112.91 103.701 139.203 85.4008 167.944 76.025C169.636 71.2467 171.752 66.5812 174.252 62.1307C195.279 24.6985 242.438 4.74415 283.946 15.7229L277.648 39.5385C248.896 31.9318 215.258 45.041 198.568 69.6154C212.459 68.4015 224.611 69.9742 235.437 74.3529C244.351 77.9597 252.217 83.7431 258.194 91.0759C264.821 99.2113 268.55 108.627 268.984 118.312C269.513 130.049 264.965 141.586 256.183 150.793C246.724 160.715 233.813 166.421 220.762 166.461C208.975 166.494 197.448 162.404 187.431 154.64C178.125 147.428 170.864 137.426 166.984 126.483C164.488 119.449 163.192 112.029 163.098 104.322C115.106 126.006 79.854 177.517 80.4974 230.281C81.257 292.336 131.619 351.448 192.762 362.059C222.267 367.18 254.918 362.893 289.803 349.316C321.065 337.152 350.494 319.014 380.395 299.932L393.646 320.698C362.66 340.469 332.088 359.294 298.733 372.272C296.744 373.048 294.757 373.793 292.772 374.514L292.769 374.52ZM188.256 96.0526C187.179 103.85 187.794 111.493 190.19 118.253C194.97 131.728 208.076 141.865 220.683 141.831C226.957 141.815 233.56 138.811 238.341 133.799C242.443 129.495 244.583 124.389 244.358 119.424C243.959 110.503 236.482 101.365 226.18 97.1991C216.491 93.2767 204.493 92.8226 189.501 95.8046C189.084 95.8878 188.664 95.9726 188.249 96.06L188.256 96.0526Z" fill="#5314AD" /></g><defs><clipPath id="clip0_381_173"><rect width="296" height="357" fill="white" transform="translate(0 101.006) rotate(-19.9523)" /></clipPath></defs></svg>
      </div>
    </Container>
  );
}
