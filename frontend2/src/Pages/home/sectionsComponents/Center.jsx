import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import { Typography, Avatar, Button } from "@material-ui/core";
import { Twit } from "../../../components/twit/Twit";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CircularProgress from "@material-ui/core/CircularProgress";
import ImageIcon from "@material-ui/icons/Image";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { AddTwitForm } from "../../../components/addTwitForm/AddTwitForm";
export const Center = () => {
  return (
    <>
      <div
        style={{ top: 0, zIndex: 999 }}
        className="position-sticky d-flex justify-content-between bg-white"
      >
        <Typography variant="h4" className="font-weight-bold font-size-xl">
          Главная
        </Typography>
        <WbIncandescentIcon className="mt-3" color="action" />
      </div>
     <AddTwitForm />
      <Twit />
      <Twit />
      <Twit />
      <Twit />
    </>
  );
};
