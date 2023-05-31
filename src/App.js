import "./App.css";
import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Loader from "./components/loader/loader.component";

const Home = lazy(() => import("./pages/home/home.component"));
const SignUp = lazy(() => import("./pages/sign-up/sign-up.component"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path={"/"} exact={true} element={<Home />} />
              <Route path={"/signup"} exact={true} element={<SignUp />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
