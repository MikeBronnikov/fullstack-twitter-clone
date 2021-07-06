import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { createMuiTheme, DialogContent, DialogTitle, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

interface ModalProps {
   isVisible: boolean,
  title: string | React.ReactNode;
  children: React.ReactNode;
  onClose: ()=> void
}

export const Modal: React.FC<ModalProps> = ({isVisible, title, children, onClose}) => {
  return (
    

    <Dialog onClose={onClose} open={isVisible} fullWidth maxWidth="xs" >
      <div className="d-flex justify-content-between">
        
        <CloseIcon 
        color='primary' 
        role='button'
        onClick={onClose} className="m-2 flex-basis-3" />
        <div className='p-2 d-flex flex-basis-1 d-block justify-content-center font-weight-bold w-100'>
          {title}
          </div>
        <div className='mr-4' data-info='empty, for centering'></div>
      </div>
      <DialogContent>
        <div >
        {children}
        </div>
        </DialogContent>
    </Dialog>

  );
};
