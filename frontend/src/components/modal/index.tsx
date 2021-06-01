import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { createMuiTheme, DialogContent, DialogTitle, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

interface ModalProps {
   isVisible: boolean,
  title: string;
  children: React.ReactNode;
  onClose: ()=> void
}
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#00b7ff',
      dark: '#0087cb',
      contrastText: '#fff',
    },
  } 
})
export const Modal: React.FC<ModalProps> = ({isVisible, title, children, onClose}) => {
  return (
    <ThemeProvider theme={theme}>

    <Dialog onClose={onClose} open={isVisible} fullWidth maxWidth="xs" >
      <div className="d-flex justify-content-between">
        
        <CloseIcon color='primary' onClick={onClose} className="m-2 flex-basis-3" />
        <p className='p-2 flex-basis-1 font-weight-bold'>{title}</p>
        <div className='mr-4' data-info='empty, for centering'></div>
      </div>
      <DialogContent>
        <div>
        {children}
        </div>
        </DialogContent>
    </Dialog>
    </ThemeProvider>
  );
};
