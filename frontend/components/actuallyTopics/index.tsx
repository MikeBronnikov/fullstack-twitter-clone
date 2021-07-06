import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTopics } from "../../redux/topics/topicsSlice";
import { RootState } from "../../redux/store";
import { LoadingEnum } from "../../types";
import { Typography } from "@material-ui/core";

import Loaded from './loaded'
import TopicsLoader from './TopicsLoader'

  const ActuallyTopics = React.memo( () => {
  const topicItems = useSelector((state: RootState) => state.topics.items)
  const topicsLoadingStatus = useSelector((state: RootState) => state.topics.topicsLoadingStatus)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTopics())
  }, [])

const SwitchRender = () => {
  switch (topicsLoadingStatus) {
    case LoadingEnum.loaded:
      return <Loaded topicItems={topicItems}/>
    case LoadingEnum.loading:
      return <TopicsLoader />
    default:
      return <p>hi!</p>
  }
}

return(
  <> 
 <Typography className="font-weight-bold mb-3" variant="h5">
                Актуальные темы  
              </Typography> 
  <SwitchRender />
  </>
)
  // return (
  //   <>
  //     <Typography className="font-weight-bold" variant="h5">
  //       Актуальные темы  
  //     </Typography>
  //     <div className="border-top border-bottom mt-1">
  //       <p className="m-0 font-weight-bold">MOSCOW</p>
  //       <p className="m-0">Твитов: 121</p>
  //     </div>
  //     <div className="border-top border-bottom mt-2">
  //       <p className="m-0 font-weight-bold">MOSCOW</p>
  //       <p className="m-0" >Твитов: 121</p>
  //     </div>
  //   </SwitchRender>
  // );
})
export default ActuallyTopics