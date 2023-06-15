import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useHttp from '../hooks/useHttp'
import {active_filter_changed, filterFetch} from '../Store/actions/actions'
import Spinner from '../Components/Spinner'
import Error from '../Components/Error'
import classNames from 'classnames'

const NewsFilter = () => {
  const { activeFilter, filters, filterLoading } = useSelector(state=> state.filter)
  const dispatch = useDispatch()
  const { request } = useHttp()

  useEffect(()=> {
    dispatch(filterFetch(request))
  }, [])

  if(filterLoading === 'Loading') {
    return <Spinner />
  }
  else if(filterLoading === 'Loading_Error') {
    return <Error />
  }

  const renderFilter =(arr)=> {
    if(arr.length === 0) {
      return <h1>Filter isn't found</h1>
    }

    return arr.map(({name, label, className})=> {
        const btnClasses = classNames('btn', className, {
          "active": name === activeFilter
        })
        return (
          <div className="categories" key={name}>
            <button 
            key={name}
            id={name}
            className={btnClasses}
            onClick={()=> {
              dispatch(active_filter_changed(name))
              console.log(name);
            }}> {label} </button>
          </div>
        )

      })
    
  }
  
  const elements = renderFilter(filters)

  return (
    <>
        {elements}
    </>
  );
}


export default NewsFilter