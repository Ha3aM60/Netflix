import Logo from '../assets/images/logo-header.png';
import '../style/MainHeader.css'
import { Search } from "../assets/search.tsx";
import { Like } from "../assets/Like.tsx";
import { Time } from "../assets/Time.tsx";
import { Account } from "../assets/Account.tsx";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import http from '../../http.ts';
import { IMoviesItem } from '../../utils/types.ts';

export const AuthorizationHeader = () => {
    const [find, setFind] = useState<string>('');
    const [addMovie, addMovies] = useState<IMoviesItem[]>([]);
    const [error, setError] = useState<string>('');

    const handleFind = (value: string) => {
        http.get(`/movies/searchByTitle/${value}`)
            .then((response) => {
                addMovies(response.data);
                setError('');
            })
            .catch((error) => {
                setFind('');
                setError(error.message);
            });
    };

    return (
        <>
            <div className="header-pos">
                <div className={'authorizationHeaderWrapper'}>
                    <div className={'wrapperLinks'}>
                        <Link to={''}><img src={Logo} className='logo-image' alt={'logo'} /></Link>
                        <Link to={'/main/popular-films'} className="nav-link"><a className={'textHeaderLinks'}>Фільми</a></Link>
                        <Link to={'/main/popular-serials'} className="nav-link"><a className={'textHeaderLinks'}>Серіали</a></Link>
                        <Link to={'/main/popular-animes'} className="nav-link"><a className={'textHeaderLinks'}>Аніме</a></Link>
                        <Link to={'/main/popular-cartoons'} className="nav-link"><a className={'textHeaderLinks'}>Мультфільми</a></Link>
                    </div>
                    <div className={'wrapperProfiles'}>
                        <div className={'wrapperIcons'}>
                            <div className={'wrapperLikeTime'}>
                                <Link to={'/main/favorit'}><Like /></Link>
                                <Time />
                            </div>
                            <input
                                className={'searchInput'}
                                type='text'
                                placeholder="Введіть назву"
                                value={find}
                                onChange={(e) => setFind(e.target.value)}
                            />
                            <div className='centerHeaderContainer'>
                                <div onClick={() => handleFind(find)} ><Search /></div>
                                <p className='lang-p' style={{ margin: "0px 14px 0px 29px" }}>UA | ENG</p>
                                <Account />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
