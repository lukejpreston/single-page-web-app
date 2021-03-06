import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router'
import reducers from './reducers'
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux'
import SinglePageWebApp from './container'
import 'normalize.css'
import 'bulma/css/bulma.css'
import './polyfills'
import registerServiceWorker from './registerServiceWorker'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path='*' component={SinglePageWebApp} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
