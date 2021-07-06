import React, { useState } from "react";
import "../../App.scss";
import SearchIcon from "@material-ui/icons/Search";
import GroupIcon from "@material-ui/icons/Group";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import logo from "../../assets/images/logo.png";
import { Modal } from "../../components/modal";
import Login from "./components/Login";
import Register from "./components/Register";
export const SignIn = () => {
  const [isModalOpen, setisModalOpen] = useState<"signIn" | "signUp">();

  const loginHandleClick: () => void = () => setisModalOpen("signIn");
  const modalCloseHandleClick = () => {
    setisModalOpen(undefined);
  };
  return (
    <div className="d-flex w-100 h-100 vh-100 ">
      <div className="w-50 border d-flex justify-content-center flex-column align-items-center bg-primary border-primary position-relative overflow-hidden">
        <img className="position-absolute w-70" src={logo} alt="logo" />
        <div className="d-flex text-light mb-5 position-relative">
          <SearchIcon className="mr-3" />
          <h5 className="font-weight-bold">Читайте то, что Вам интересно</h5>
        </div>
        <div className="d-flex text-light mb-5 position-relative">
          <GroupIcon className="mr-3" />
          <h5 className="font-weight-bold">Узнавайте, о чем говорят в мире</h5>
        </div>
        <div className="d-flex text-light mb-5 position-relative">
          <SearchIcon className="mr-3" />
          <h5 className="font-weight-bold">Присоеденяйтесь к общению</h5>
        </div>
      </div>
      <div className=" d-flex w-50 justify-content-center flex-column align-items-center">
        <div className="container p-5">
          <TwitterIcon className="twt" color="primary" />
          <Modal
            isVisible={isModalOpen === "signIn"}
            title="Войти в твиттер"
            onClose={modalCloseHandleClick}
          >
            <Login />
          </Modal>
          <Modal
            isVisible={isModalOpen === "signUp"}
            title="Создайте учетную запись"
            onClose={modalCloseHandleClick}
          >
            <Register />
          </Modal>
          <h2 className="font-weight-bold mb-5">
            Узнайте, что происходит в мире прямо сейчас
          </h2>
          
          <Button
            onClick={() => setisModalOpen("signUp")}
            className=""
            variant="contained"
            color="primary"
            style={{ borderRadius: 20, width: "90%" }}
          >
            Зарегестрироваться
          </Button>
          <Button
            onClick={loginHandleClick}
            className="mt-4"
            variant="contained"
            color="primary"
            style={{ borderRadius: 20, width: "90%" }}
          >
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
