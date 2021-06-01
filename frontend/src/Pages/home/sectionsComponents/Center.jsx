

import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import { Typography, Avatar } from '@material-ui/core';
import { Twit } from '../../../components/twit/Twit';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
export const Center = () => {
    return (
        <>
        <div style={{top: 0, zIndex: 9999}} className='position-sticky d-flex justify-content-between bg-white'>
            <Typography variant='h4' className='font-weight-bold font-size-xl'> Главная</Typography>
            <WbIncandescentIcon className='mt-3' color='action'/>
        </div> 

        <div className='d-flex'>
        <Avatar
              alt="Remy Sharp"
              src="https://sun9-58.userapi.com/impf/c852032/v852032076/15efb7/Pg73WOlBJnk.jpg?size=1440x2160&quality=96&sign=2d032784bb2204eceeaf081a9f049ac3&type=album"
            />
        <TextareaAutosize className='mt-3 w-100' style={{ resize: 'none'}} rowsMin='2'/>
        </div> 
        textattt
            <Twit />
            <Twit />
            <Twit />
            <Twit />
        </>
    )
}
