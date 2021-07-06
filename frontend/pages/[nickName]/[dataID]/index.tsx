import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FullTweet from '../../../components/fullTweet/FullTweet'
import { RootState } from '../../../redux/store'
import { fetchFullTweet } from '../../../redux/tweet/FullTweetSlice'

 const UserTweet = () => {
     const router = useRouter()
     const dataID: string | string[] = router.query.dataID
     const dispatch = useDispatch()

     const [preFetchedTweetData, setPreFetchedTweetData] = useState(useSelector((state: RootState) => 
     state.tweets.items.find(item => item._id === dataID )))
    console.log(preFetchedTweetData)
     useEffect(() => {
         dataID && dispatch(fetchFullTweet(dataID))
     }, [dataID])
     if (!dataID) return null
    return (
        <div>
            <FullTweet />
        </div>
    )
}
export default UserTweet
