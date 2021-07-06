import React from "react"
import ContentLoader from "react-content-loader"

const TweetLoader = () => (
    <ContentLoader 
      speed={2}
      width={700}
      height={200}
      viewBox="0 0 700 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className='w-100 ml-4'
    >
      <rect x="66" y="5" rx="3" ry="3" width="349" height="15" /> 
      <rect x="68" y="159" rx="3" ry="3" width="52" height="20" /> 
      <rect x="67" y="38" rx="3" ry="3" width="505" height="17" /> 
      <circle cx="27" cy="27" r="27" /> 
      <rect x="275" y="162" rx="3" ry="3" width="52" height="20" /> 
      <rect x="513" y="162" rx="3" ry="3" width="52" height="20" /> 
      <rect x="67" y="66" rx="3" ry="3" width="505" height="17" /> 
      <rect x="66" y="96" rx="3" ry="3" width="505" height="17" />
    </ContentLoader>
  )

export default TweetLoader