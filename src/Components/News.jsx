import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useHttp from '../hooks/useHttp'
import { newFetch } from '../Store/actions/actions'
import New from './New'
import Error from './Error'
import Spinner from './Spinner'
import Empty from './Empty'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
import { createSelector } from 'reselect'

function News() { 
    const selectStore = createSelector(
        state=> state.news.news,
        state=> state.filter.activeFilter,
        (news,activeFilter)=> {
            console.log('filter render')
            
            if(activeFilter==='all') {
                return news
            }
            else {
               return news.filter(s=> s.category===activeFilter)
            }
        }
    )
    const filterNews = useSelector(selectStore)
    const {filterLoading} = useSelector(state=> state.filter)
    const dispatch = useDispatch()
    const { request } = useHttp()

    useEffect(()=> {
      dispatch(newFetch(request))
    }, [])

    if(filterLoading === 'Loading') {
        return <Spinner />
    }
    else if(filterLoading === 'Loading_Error'){ 
        return <Error />
    }
    
    const renderNews =(arr)=> {
        if(arr.length === 0) {  
            return <CSSTransition component={Empty}  timeout={50} classNames="alert"> 
                <Empty/>
            </CSSTransition>
        } else {
           return arr.map(({...props}) => (
            <CSSTransition component={New}   timeout={400} key={props.id}  classNames="item">
                    <New {...props}/>
            </CSSTransition>
           
           )).reverse()
        }
    }

    const element = renderNews(filterNews) 
    
    return (
        <TransitionGroup className="todo-list">
            {element}
        </TransitionGroup>
    )
  
}

export default News