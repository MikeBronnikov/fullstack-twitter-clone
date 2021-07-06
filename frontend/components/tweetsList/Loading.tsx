import React from 'react'
import TweetLoader from '../loaders/TweetLoader'



 const Loading: React.FC  = ({ ...restProps}) => {
    return (
        <>
          <TweetLoader />
          <TweetLoader />
          <TweetLoader />
          <TweetLoader />
          <TweetLoader />
        </>
    )
}
export default Loading