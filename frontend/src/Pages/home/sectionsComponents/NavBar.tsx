import React from 'react'

import {
    IconButton,
    Typography,
  } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import { useLocation } from 'react-router';
import Hidden from '@material-ui/core/Hidden'
interface PropsType {

}
export const NavBar: React.FC<PropsType> = () => {
   const location = useLocation()
   console.log(location) //!
    return (
        <>
            <ul className="position-fixed top-0 list-unstyled">
              <li className="d-flex mt-2">
                <IconButton style={{ borderRadius: "19px" }} color="primary">
                  
                  <TwitterIcon
                    className="h-20"
                    color="primary"
                    fontSize="large"
                  />
                </IconButton>
              </li>
              <li className="d-flex mt-3">
                <IconButton style={{ borderRadius: "19px" }}>
                  <HomeIcon color="primary" />
                  <Hidden smDown>
                  <Typography color="primary" className="ml-3 font-weight-bold">
                    Главная
                  </Typography>
                  </Hidden>
                </IconButton>
              </li>
              <li className="d-flex mt-3">
                <IconButton style={{ borderRadius: "19px" }}>
                  <SearchIcon className="border-radius-0 " color="primary" />
                  <Hidden smDown>
                  <Typography className="ml-3 font-weight-bold text-dark">
                    Поиск
                  </Typography>
                  </Hidden>
                </IconButton>
              </li>
              <li className="d-flex mt-3">
                <IconButton style={{ borderRadius: "19px" }}>
                  <NotificationsIcon  color="primary"/>
                  <Hidden smDown>
                  <Typography className="ml-3 font-weight-bold text-dark">
                    Уведомления
                  </Typography>
                  </Hidden>
                </IconButton>
              </li>
              <li className="d-flex mt-3">
                <IconButton style={{ borderRadius: "19px" }}>
                  <EmailIcon  color="primary"/>
                  <Hidden smDown>
                  <Typography className="ml-3 font-weight-bold text-dark">
                    Сообщения
                  </Typography>
                  </Hidden>
                </IconButton>
              </li>
              <li></li>
              <li></li>
            </ul> 
        </>
    )
}
