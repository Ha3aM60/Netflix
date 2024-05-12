import {Outlet} from 'react-router-dom';
import { Footer } from '../../components/Footer';
import {AuthorizationHeader} from "../../components/headers/AuthorizationHeader.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import {MainHeader} from "../../components/headers/MainHeader.tsx";

export const DefaultLayout = () => {
    const auth = useSelector((state: RootState) => state.users.isAuth);

    return (
        <>
            <div style={{ position: 'relative' }}>
                {auth ?  <AuthorizationHeader/> : <MainHeader/>}
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    )
}
