
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import {jwtDecode} from "jwt-decode";
import { store } from "./app/store.ts";
import {IUserLogin} from "./redux/types.ts";
import {auth} from "./redux/userSlice.ts";

const token = localStorage.getItem("authToken");
if (typeof token === "string") {
    const decoded = jwtDecode<IUserLogin>(token);
    store.dispatch(auth(decoded));
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
  </BrowserRouter>
)
