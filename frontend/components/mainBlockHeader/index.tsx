import React from "react";

import { Typography } from "@material-ui/core";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import { useRouter } from "next/router";
import { RoutesEnum } from "../../types";

interface Props {}

const MainBlockHeader = (props: Props) => {
  const hasOwnPropertyName = "nickName";

  const router = useRouter();
  const getTitle = () => {
    switch (router.pathname) {
      case RoutesEnum.search:
        return "Поиск";
      case RoutesEnum.home: case RoutesEnum.start:
        return "Главная";
      default: {
        return router.query.hasOwnProperty(hasOwnPropertyName)
            ? router.query[hasOwnPropertyName]
            : ''
      }
    }
  };
  return (
    <div
      style={{ top: 0, zIndex: 999 }}
      className="position-sticky d-flex justify-content-between bg-white"
    >
      <Typography variant="h4" className="font-weight-bold font-size-xl">
        {getTitle()}
      </Typography>
      <WbIncandescentIcon className="mt-3" color="action" />
    </div>
  );
};
export default MainBlockHeader;
