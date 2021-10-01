import logo from './logo.svg';
import './App.css';
import './assets/scss/style.scss'
import Products from "./feature/product";
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import React from "react";
import router from "./util/router";

const loading = (
    <div className={'d-flex justify-content-center'}>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
)

function App() {
    return (
        <BrowserRouter> {/*or  HashRouter https://viblo.asia/p/co-ban-ve-router-trong-reactjs-07LKXzAElV4*/}
            {/*https://thaunguyen.com/blog/reactjs/tu-hoc-reactjs-react-suspense-lay-du-lieu-tu-api#Tai_sao_can_ReactSuspense_va_concurrent_mode*/}
            <React.Suspense fallback={loading}>
                <Switch>
                    {/*<Route/>*/}
                    {router.map((item, index) => {
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                exact={item.exact}
                                name={item.name}
                                component={item.component}
                            />
                        )
                    })}

                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default App;
