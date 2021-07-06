import React, { useState } from "react";

import { Button, IconButton, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import { useLocation } from "react-router";
import Hidden from "@material-ui/core/Hidden";
import { Modal } from "../modal";
import { AddTwitForm } from "../addTwitForm/AddTwitForm";
interface PropsType {}
export const NavBar: React.FC<PropsType> = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false)

  const addTwitHandler = () => {
    setIsModalOpen(true)
  }
  const CreateTwitModalHeader = () => (<>
    <div className='w-100 text-right'>
      <Typography 
      color='primary' 

      className="mb-0 font-weight-bold">Неотправленные твиты</Typography>
    </div>
  </>
  )
  return (
    <>
      <ul className="position-fixed top-0 list-unstyled">
        <li className="d-flex mt-2">
          <IconButton style={{ borderRadius: "19px" }} color="primary">
            <TwitterIcon className="h-20" color="primary" fontSize="large" />
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
            <SearchIcon className="border-radius-0 " />
            <Hidden smDown>
              <Typography className="ml-3 font-weight-bold text-dark">
                Поиск
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li className="d-flex mt-3">
          <IconButton style={{ borderRadius: "19px" }}>
            <NotificationsIcon />
            <Hidden smDown>
              <Typography className="ml-3 font-weight-bold text-dark">
                Уведомления
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li className="d-flex mt-3">
          <IconButton style={{ borderRadius: "19px" }}>
            <EmailIcon />
            <Hidden smDown>
              <Typography className="ml-3 font-weight-bold text-dark">
                Сообщения
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li>
          <div
            
            role="button"
           
          >
            <Button  
            className="container mt-3 p-2 bg-red text-center h-25 font-weight-bold text-white"
            style={{ backgroundColor: "#00b7ff", borderRadius: "30px" }}
            onClick={addTwitHandler}
            >
              Твитнуть
            </Button>
          </div>
        </li>
        <li></li>
      </ul>

      <Modal
        isVisible={isModalOpen}
        title={<CreateTwitModalHeader />}
        onClose={() => setIsModalOpen(false)}
      >
        <AddTwitForm />
      </Modal>
    </>
  );
};
