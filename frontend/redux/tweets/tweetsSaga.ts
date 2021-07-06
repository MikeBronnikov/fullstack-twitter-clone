import { Tweet } from './../tweet/types';
import { homePageAPI } from '../../services/api/api';
import { put, call, throttle} from 'redux-saga/effects'
import {fetchTweets, setTweets, setLoadingStatus, setWasFailNotificated } from './tweetsSlice'
import { LoadingEnum } from '../../types';

function* tweetsWorkerSaga(): Generator<unknown, any, Array<Tweet>> {
  try {
    yield put(setWasFailNotificated(false))
    yield put(setLoadingStatus(LoadingEnum.loading)) 
    const response = yield call(homePageAPI.getTweets)
    yield put(setTweets(response))
    yield put(setLoadingStatus(LoadingEnum.loaded)) 
  } catch (error) {
    console.error('server was turned off');
    yield put(setLoadingStatus(LoadingEnum.failed)) 
  }

}

export function* tweetsWatcherSaga() {
    yield throttle(11000, fetchTweets.type, tweetsWorkerSaga)
}