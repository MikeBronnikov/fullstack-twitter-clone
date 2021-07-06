import { topicsSlice } from './topics/topicsSlice';
import { configureStore } from '@reduxjs/toolkit'
import tweetsSlice from './tweets/tweetsSlice' //!
import createSagaMiddleware from 'redux-saga'
import { tweetsWatcherSaga } from './tweets/tweetsSaga'
import { all } from '@redux-saga/core/effects'
import { topicsWatcherSaga } from './topics/topicsSaga';
import FullTweetSlice from './tweet/FullTweetSlice';
import { fullTweetWatcherSaga } from './tweet/fullTweetSaga';




const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
      tweets: tweetsSlice,
      fullTweet: FullTweetSlice,
      topics: topicsSlice.reducer
    },
    middleware: [sagaMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

function* rootSaga() {
  yield all([
    tweetsWatcherSaga(),
    topicsWatcherSaga(),
    fullTweetWatcherSaga()
  ])
 
}
sagaMiddleware.run(rootSaga)
