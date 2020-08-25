import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/login/login.jsx';
import rootReducer from './store/reducers/RootReducer.js';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import AppRouter from './AppRoute.jsx';
import Claimsummary from './Components/Claimsum/Claimsummary.jsx';
import Update from './Components/Update/UpdateClaim.jsx';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import home from './Components/home/home.jsx';
import { createStore, applyMiddleware } from 'redux';
import About from './Components/About/about.jsx';
const store = createStore(rootReducer, applyMiddleware(thunk));
import contactus from './Components/Contact/contactus.jsx';
ReactDOM.render((
       <Provider store={store}>
              <  Router history={browserHistory}>
                     <Route path="/" component={AppRouter}>
                            <IndexRoute component={Login} />
                            <Route path="/login" component={Login} />
                            <Route path="/home" component={home} />
                            <Route path="/Claimsummary" component={Claimsummary} />
                            <Route path="/UpdateClaim" component={Update} />
                            <Route path="/About" component={About} />
                            <Route path="/contactus" component={contactus} />
                        
                     </Route>
              </Router>
       </Provider>
), document.getElementById('router'));
