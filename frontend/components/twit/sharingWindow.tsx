import React from "react";


import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";

//interface Props {}

 const SharingWindow = () => {
  return (
    <>
    
      <div className='d-flex p-3 bg-white border rounded shadow-lg' style={{ width: "max-content" }}>
       <HomeIcon className='mr-3' color="primary" />
        <EmailIcon color="primary" />
      </div>
    </>
  );
};

export default SharingWindow;
