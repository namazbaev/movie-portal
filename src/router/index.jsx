import routers from "./routers";
import store from "redux/store";
import { Suspense } from 'react';
import { Provider } from "react-redux";
import Header from "components/Header/Header";
import { GloabalStyle } from "styles/globalStyle";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Router = () => (
    <Provider store={store}>
        <Suspense fallback={null}>
            <Header />
            <GloabalStyle />
            <BrowserRouter>
                <Routes>
                    {routers.map(({ path, component }) => <Route key={path} path={path} element={component} />)}
                </Routes>
            </BrowserRouter>
        </Suspense>
    </Provider>
)
export default Router