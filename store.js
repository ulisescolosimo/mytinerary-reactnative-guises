import { configureStore } from '@reduxjs/toolkit'
import citiesApi from './src/features/citiesApi'
import activityAPI  from './src/features/activitiesAPI'
import itineraryAPI from './src/features/itineraryAPI'
import myTineraryAPI from './src/features/myTineraryAPI'
import usersAPI from './src/features/usersAPI'
import loggedSlice from './src/features/loggedSlice'
import commentsAPI from './src/features/commentsAPI'
import refreshSlice from './src/features/refreshSlice'

export default configureStore({
  reducer: {
    [citiesApi.reducerPath] : citiesApi.reducer,
    [activityAPI.reducerPath]: activityAPI.reducer,
    [itineraryAPI.reducerPath]: itineraryAPI.reducer,
    [myTineraryAPI.reducerPath]: myTineraryAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    [commentsAPI.reducerPath]: commentsAPI.reducer,
    logged: loggedSlice,
    refresh: refreshSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    citiesApi.middleware, activityAPI.middleware, itineraryAPI.middleware, usersAPI.middleware)
})