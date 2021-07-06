import React from 'react'
import { Tweet } from '../../redux/tweet/types'
import { LoadingEnum } from '../../types'
import  Loaded  from './Loaded'
import Loading from './Loading'

type PropsType = {
    tweetsItems: Array<Tweet>;
    loadingStatus: LoadingEnum
}
interface renderObjType  {
    loaded: JSX.Element
    failed: JSX.Element
    loading: JSX.Element
    failNotificated: JSX.Element
    never: JSX.Element
}
const TweetsList: React.FC<PropsType> = ({tweetsItems, loadingStatus, ...restProps}) => {
    const renderObj : renderObjType  = {
        loaded: <Loaded tweetsItems={tweetsItems}/>,
        failed: <p>failed picture</p>,
        loading:  <Loading />,
        failNotificated:  <>failNotificated</>,
        never: <><p>never</p></>
      }
    return (
      <> 
      { renderObj[loadingStatus] }
      </>
    )
}
export default TweetsList
