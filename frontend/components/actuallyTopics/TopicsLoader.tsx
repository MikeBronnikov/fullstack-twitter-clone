import React from "react"
import ContentLoader from "react-content-loader"

const TopicsLoader = () => (
  <ContentLoader 
    speed={2}
    width={220}
    height={250}
    viewBox="0 0 220 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ffffff"

  >
    <rect x="5" y="32" rx="3" ry="3" width="80" height="13" /> 
    <rect x="275" y="162" rx="3" ry="3" width="52" height="20" /> 
    <rect x="513" y="162" rx="3" ry="3" width="52" height="20" /> 
    <rect x="2" y="-2" rx="3" ry="3" width="188" height="22" /> 
    <rect x="1" y="78" rx="3" ry="3" width="188" height="22" /> 
    <rect x="-3" y="155" rx="3" ry="3" width="188" height="22" /> 
    <rect x="3" y="287" rx="3" ry="3" width="188" height="22" /> 
    <rect x="3" y="194" rx="3" ry="3" width="80" height="13" /> 
    <rect x="2" y="116" rx="3" ry="3" width="80" height="13" /> 
    <rect x="6" y="326" rx="3" ry="3" width="80" height="13" /> 
    <rect x="0" y="227" rx="3" ry="3" width="188" height="22" />
  </ContentLoader>
)

export default TopicsLoader