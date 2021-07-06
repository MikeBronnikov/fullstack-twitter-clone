import React from 'react'
import { Tweet } from '../../redux/tweet/types'
import { Twit } from '../twit/Twit'

interface Props {
    tweetsItems: Array<Tweet>;
}

const Loaded: React.FC<Props>  = ({tweetsItems, ...restProps}) => {
    return (
        <>
           {tweetsItems.map((item)=> <Twit key={item._id} {...item}/> )} 
        </>
    )
}
export default Loaded
