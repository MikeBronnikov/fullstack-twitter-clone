import { PayloadAction } from '@reduxjs/toolkit';
import { homePageAPI } from './../../services/api/api';
import { FullTweet, Tweet } from './../tweet/types';
import { put, call, takeLeading} from 'redux-saga/effects'
import { LoadingEnum } from '../../types';
import { fetchFullTweet, setFullTweet } from './FullTweetSlice';

type Action = {
    type: string
    payload: string
}
function* fullTweetWorkerSaga( action: Action ): Generator<unknown, any, FullTweet[]> {
  try {
  const response = yield homePageAPI.getFullTweet(action.payload)
  yield put(setFullTweet(response))
  } catch (error) {
    console.error('server was turned off');

  }

}

export function* fullTweetWatcherSaga() {
    yield takeLeading(fetchFullTweet.type, fullTweetWorkerSaga)
}