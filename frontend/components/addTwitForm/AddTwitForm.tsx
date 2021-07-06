import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import ImageIcon from "@material-ui/icons/Image";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Avatar, Button, TextareaAutosize } from "@material-ui/core";

interface Props {}

export const AddTwitForm = (props: Props) => {

    const [inputValue, setinputValue] = useState<string>('')

    const maximumValue: number = 280
    const inputValuePrecent: number = (inputValue.length/maximumValue) *100 

    const isTwitOverSized = () => inputValue.length >= maximumValue

    const textAreaHandleChange : (event: React.ChangeEvent<HTMLTextAreaElement>)=>void = (event)=> {
      setinputValue(event.currentTarget.value)

    }
  return (
    <form className='mb-3'>
      <div style={{ marginLeft: "12px" }} className="d-flex mb-3 border-top">
        <Avatar
          className="mt-3"
          alt="Remy Sharp"
          src="https://sun9-58.userapi.com/impf/c852032/v852032076/15efb7/Pg73WOlBJnk.jpg?size=1440x2160&quality=96&sign=2d032784bb2204eceeaf081a9f049ac3&type=album"
        />
        <div className="w-100 overflow-hidden">
          <TextareaAutosize
            placeholder="Что происходит?"
            className="mt-3 ml-3 w-75 border-0 h-100 border-right"
            style={{ resize: "none", outline: "none", overflowY: 'hidden'}}
            value={inputValue}
            onChange={textAreaHandleChange}
            rowsMin="2"
            
          />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <ImageIcon className="pt-2 h-100" color="primary" />
          <input type="file" id="input-file" className="d-none" />
          <label htmlFor="input-file">
            <InsertEmoticonIcon className="pt-2 h-100 ml-3" color="primary" />
          </label>
        </div>
        <div className="d-flex">
          {inputValue && 
          <>
          <span className='buttom-0 mt-1 mr-3 fs-md'
          >{maximumValue - inputValue.length}</span>
          <CircularProgress
            variant="determinate"
            className="mr-3 mt-1"
            size="1.7rem"
            style={isTwitOverSized()? {color: 'red'}: {}}
            value={inputValuePrecent}
          /> 
          
          </>
          }
          <Button
            color="primary"
            size="small"
            variant="contained"
            disabled={isTwitOverSized()}
            style={{ borderRadius: 20 }}
          >
            Твитнуть
            {/*   <CircularProgress size='1.7rem' /> */}
          </Button>
        </div>
      </div>
    </form>
  );
};
