import React, { useState } from "react";

import { Button, IconButton, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import Hidden from "@material-ui/core/Hidden";
import { Modal } from "../modal";
import { AddTwitForm } from "../addTwitForm/AddTwitForm";
import { useRouter } from "next/router";
import Link from 'next/link'

 enum navBarItems  {
   home = '/',
   search = '/search',
   notifications = '/notifications',
   messages = '/messages'
 }

export const NavBar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  let router = useRouter()

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
          <Link href={navBarItems.home}>
          <IconButton style={{ borderRadius: "19px" }} color="primary">
            <TwitterIcon className="h-20" color="primary" fontSize="large" />
          </IconButton>
          </Link>
        </li>
        <li className="d-flex mt-3">
        <Link href={navBarItems.home}>
          <IconButton style={{ borderRadius: "19px" }}>
            <HomeIcon color="primary" />
            <Hidden smDown>
              <Typography color={router.pathname === '/' ? 'primary' : 'textPrimary'} className="ml-3 font-weight-bold">
                Главная
              </Typography> 
            </Hidden>
          </IconButton>
          </Link>
        </li>
        <li className="d-flex mt-3">
          <Link href={navBarItems.search}>
          <IconButton style={{ borderRadius: "19px" }}>
            <SearchIcon className="border-radius-0 " />
            <Hidden smDown>
              <Typography color={ router.pathname === navBarItems.search ? 'primary' : 'textPrimary'} className="ml-3 font-weight-bold" >
                Поиск
              </Typography>
            </Hidden>
          </IconButton>
          </Link>
        </li>
        <li className="d-flex mt-3">
        <Link href={navBarItems.notifications}>
          <IconButton style={{ borderRadius: "19px" }}>
            <NotificationsIcon />
            <Hidden smDown>
              <Typography color={ router.pathname === navBarItems.notifications ? 'primary' : 'textPrimary'} className="ml-3 font-weight-bold">
                Уведомления
              </Typography>
            </Hidden>
          </IconButton>
          </Link>
        </li>
        <li className="d-flex mt-3">
        <Link href={navBarItems.messages}>
          <IconButton style={{ borderRadius: "19px" }}>
            <EmailIcon />
            <Hidden smDown>
              <Typography color={ router.pathname === navBarItems.messages ? 'primary' : 'textPrimary'} className="ml-3 font-weight-bold">
                Сообщения
              </Typography>
            </Hidden>
          </IconButton>
          </Link>
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
