import {Outlet, useLocation} from 'react-router-dom';
import { MainHeader } from '../../components/headers/MainHeader.tsx';
import { Footer } from '../../components/Footer';
import {AuthorizationHeader} from "../../components/headers/AuthorizationHeader.tsx";

const renderHeader = ({location}:{location:string})=> {
    switch (location){
        case '':
            return <MainHeader/>;
        case '1':
            return <MainHeader/>;
        default:
            return <MainHeader/>;
    }
}

export const DefaultLayout = () => {
    const location = useLocation();
    const { pathname } = location;
    console.log('location', pathname);

    return (
        <>
            <div style={{ position: 'relative' }}>
                <AuthorizationHeader/>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    )
}
