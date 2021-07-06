import { homePageAPI } from './../../services/api/api';
import { Tweet } from './../tweet/types';
import { put, call, takeLeading } from 'redux-saga/effects'
import { LoadingEnum } from '../../types';
import { fetchTopics, setLoadingStatus, setTopics } from './topicsSlice';

function* topicsWorkerSaga(): Generator<unknown, any, Array<Tweet>> {
  try {
    yield put(setLoadingStatus(LoadingEnum.loading))
    const response = yield call(homePageAPI.getTopics)
    //@ts-ignore
    yield put(setTopics(response))
    yield put(setLoadingStatus(LoadingEnum.loaded)) 
  } catch (error) {
    console.error('server was turned off');
    yield put(setLoadingStatus(LoadingEnum.failed)) 
  }

}

export function* topicsWatcherSaga() {
    yield takeLeading(fetchTopics.type, topicsWorkerSaga)
}