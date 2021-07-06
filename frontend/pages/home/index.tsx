import {
  TextField,
  withStyles,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { Center } from "./homeComponents/Center";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";
import { RootState } from "../../redux/store";
import { fetchTweets } from "../../redux/tweets/tweetsSlice";
import Head from 'next/head'

const classesss = withStyles({
  root: {
    borderRadius: "31px",
  },
  label: {
    textTransform: "capitalize",
  },
})(TextField);


const Home: React.FC = () => {
  const dispatch = useDispatch();
  const tweetsItems = useSelector((state: RootState) => state.tweets.items);
  const loadingStatus  = useSelector((state: RootState) => state.tweets.tweetsLoadingStatus);
  const router = useRouter();
  useEffect(() => {
    dispatch(fetchTweets())
  }, [])

  return (
    
    <section className="col">
      <Head>
        <title>My page title</title>
      </Head>
      <Center loadingStatus={loadingStatus} tweetsItems={tweetsItems} />
    </section>
  );
};

export default Home;
