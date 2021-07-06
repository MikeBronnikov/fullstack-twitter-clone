import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Container, Grid, InputAdornment, TextField } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { NavBar } from "../components/navbar/Navbar";
import SearchIcon from "@material-ui/icons/Search";
import  ActuallyTopics  from "../components/actuallyTopics/index";

import { useRouter } from "next/router";
import SignIn from "./signIn";
import MainBlockHeader from '../components/mainBlockHeader/index'
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../redux/store";
import { LoadingEnum } from "../types";
import { SnackbarProvider, useSnackbar } from "notistack";
import { setWasFailNotificated } from "../redux/tweets/tweetsSlice";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#00b7ff",
      dark: "#0087cb",
      contrastText: "#fff",
    },
    secondary: {
      light: "#9c9eb1",
      main: "#9c9eb1",
      dark: "#9c9eb1",
      contrastText: "#fff",
    },
    error: {
      light: "#eb0aff",
      main: "#bf00ff",
      dark: "#9c9eb1",
      contrastText: "#fff",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const MainBlock = () => {
    const { enqueueSnackbar } = useSnackbar();
    const tweetsLoadingStatus = useSelector((state: RootState) => state.tweets.tweetsLoadingStatus);
    const topicsLoadingStatus = useSelector((state: RootState) => state.topics.topicsLoadingStatus);
    const wasFailNotificated = useSelector((state: RootState) => state.tweets.wasFailNotificated);
    const dispatch = useDispatch();
    useEffect(() => {
      if (tweetsLoadingStatus === LoadingEnum.failed && !wasFailNotificated) {
        enqueueSnackbar("Loading of data was failed, try again later", {
          variant: "error",
          autoHideDuration: 5000,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        })

        dispatch(setWasFailNotificated(true))
      }

    }, [tweetsLoadingStatus, topicsLoadingStatus]);

    return (
      <>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid container item xs={2}>
              <section className="col">
                <NavBar />
              </section>
            </Grid>
            <Grid className="vh-100" container item xs={6}>
              <section className="col m-0 p-0">
              <MainBlockHeader />
                <Component {...pageProps} />
              
              </section>
            </Grid>
            <Grid container item xs={3}>
              <section className="col overflow-overlay">
                <div className="position-fixed top-0">
                  <TextField
                    fullWidth
                    style={{ borderRadius: "19px" }}
                    variant="filled"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <div
                    className="mt-3 p-2"
                    style={{ backgroundColor: "#f4f0f0", borderRadius: "20px" }}
                  >
                    <ActuallyTopics />
                  </div>
                </div>
              </section>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  };

  let router = useRouter();
 // return <p>wait</p>
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            {router.pathname === "/signIn" ? <SignIn /> : <MainBlock />
            }
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}
export default MyApp;
