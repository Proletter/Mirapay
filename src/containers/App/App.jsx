import React, { Fragment, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/app.scss';
import Router from './Router';
import store from '../../redux/store/store';
import ScrollToTop from './ScrollToTop';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './swalvariables.scss'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  let persistor = persistStore(store);

  useEffect(() => {
    window.addEventListener('load', () => {
      setIsLoading(false);
      // setIsLoaded(true)
      setTimeout(()=>  setIsLoaded(true),500)
     
    });
      return ()=> window.removeEventListener("load",()=> setIsLoaded(true))
  });


  //didn't add a render dependency might lead to stack overflow still watching

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>          
      <BrowserRouter>
        <ScrollToTop>
          <Fragment>
            {!isLoaded && (
              <div className={`load${isLoading ? '' : ' loaded'}`}>
                <div className="load__icon-wrap">
                  <svg className="load__icon">
                    {setTimeout(()=>  setIsLoaded(true),800)}
                    <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                  </svg>
                </div>
              </div>
            )}
            <div>
              <Router />
            </div>
          </Fragment>
        </ScrollToTop>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
