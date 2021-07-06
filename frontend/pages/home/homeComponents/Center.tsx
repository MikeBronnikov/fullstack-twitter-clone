import React from 'react'

import { AddTwitForm } from "../../../components/addTwitForm/AddTwitForm";
import { LoadingEnum } from "../../../types";
import { Tweet } from "../../../redux/tweet/types";
import TweetsList from "../../../components/tweetsList";

interface Props {
  tweetsItems: Array<Tweet>;
  loadingStatus: LoadingEnum
}
export const Center: React.FC<Props> = ({tweetsItems, loadingStatus, ...restProps}) => {
  return (
    <>
      <AddTwitForm />
      <TweetsList tweetsItems={tweetsItems} loadingStatus={loadingStatus}/>
    </>
  );
};

// {loadingStatus === LoadingEnum.loading ? (
//     <p>tempr</p>
// ) : (
//   <>
//    {a.loaded}
//     <Twit />
//     <Twit />
//     <Twit />
//     <Twit />
//   </>
// )}