import { FullTweet, Tweet } from './../../redux/tweet/types';
import axios from 'axios'
import { Topic } from '../../redux/topics/types';
const instance = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true,
  });
export const homePageAPI = {
    getTweets(): Promise<Tweet[]> {
        return instance.get<Array<Tweet>>('/tweets').then(resp=> resp.data)
    },
    getTopics(): Promise<Topic[]>  {
        return instance.get<Array<Topic>>('/tags').then(respo => respo.data)
    },
    getFullTweet(id: string) {
        return instance.get<FullTweet[]>(`/tweet?_id=${id}`)
    }
}