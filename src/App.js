import "./App.css";
import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Loader from "./components/loader/loader.component";

const Home = lazy(() => import("./pages/home/home.component"));
const SignUp = lazy(() => import("./pages/sign-up/sign-up.component"));
const MerchantSignUp = lazy(() => import("./pages/merchant-signup/merchant-signup.component"));
const MerchantSignUpForm = lazy(() => import("./pages/merchant-signup-form/merchant-signup-form.component"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path={"/landing"} exact={true} element={<Home />} />
              <Route path={"/"} exact={true} element={<MerchantSignUp />} />
              <Route path={"/signup"} exact={true} element={<MerchantSignUpForm />} />
              <Route path={"/sign-up"} exact={true} element={<SignUp />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
