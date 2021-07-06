import React from 'react'
import {CSSTransition} from 'react-transition-group'
import stylessss from '../../components/twit/styles.module.scss'


 const Search = () => {

    return (
        <CSSTransition
        timeout={1000}
        mountOnEnter={true} 
        classNames={stylessss}>
        <div>
           <h1>testing</h1> 
        </div>
        </CSSTransition>
    )
}
export default Search
