import Logo from '../assets/images/logo-header.png';
import '../style/MainHeader.css'
import {Search} from "../assets/search.tsx";
import {Like} from "../assets/Like.tsx";
import {Time} from "../assets/Time.tsx";
import {Account} from "../assets/Account.tsx";

export const AuthorizationHeader = () => {
    return (
        <>
            <div className="header-pos">
               <div className={'authorizationHeaderWrapper'}>
                   <div className={'wrapperLinks'}>
                       <img src={Logo} className='logo-image' alt={'logo'}/>
                       <a className={'textHeaderLinks'}>Фільми</a>
                       <a className={'textHeaderLinks'}>Серіали</a>
                       <a className={'textHeaderLinks'}>Аніме</a>
                       <a className={'textHeaderLinks'}>Мультфільми</a>
                   </div>
                   <div className={'wrapperProfiles'}>
                       <div className={'wrapperIcons'}>
                           <Search/>
                           <p className='lang-p'>UA | ENG</p>
                           <div className={'wrapperLikeTime'}>
                               <Like/>
                               <Time/>
                           </div>
                       </div>
                       <Account/>
                   </div>
               </div>
            </div>
        </>
    )
}