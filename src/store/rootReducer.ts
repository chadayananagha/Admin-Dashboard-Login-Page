import { combineReducers } from '@reduxjs/toolkit';
import { Env } from 'config';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

import { baseApi } from '../config/apiBase';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
  reduxTravelling: Env.isDev(),
  savePreviousLocations: 1
});

export const rootReducer = combineReducers({
  router: routerReducer,
  [baseApi.reducerPath]: baseApi.reducer
});

export { routerMiddleware, createReduxHistory };
