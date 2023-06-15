import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import useHttp from '../hooks/useHttp'
import { newsDelete } from '../News/newsSlice'

const New = ({id, title, category, description}) => {
  const dispatch = useDispatch()
  const { request } = useHttp()
  const newDelete =()=>{
    request(`http://localhost:3001/news/${id}`, "DELETE")
    .then(res=> console.log('removed'))
    .then(data=> dispatch(newsDelete(id)))
    toast.error('Removed successfully')
  }

  let classElement = ''
  switch (category){
    case "sport": {
      classElement = 'blue'
      break;
    }
    case "weather": {
      classElement = 'gold'
      break;
    }
    case "world": {
      classElement = 'green'
      break;
    }
    default: return classElement;
  }
  return (
      <div className="row">
        <div className="col-sm-5">
          <div className={classElement} id="box">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <span className='close' onClick={newDelete}>x</span>
              <p className="card-text">{description}</p>
              <a href="#" className="btn btn-primary">{category}</a>
            </div>
          </div>  
        </div>
      </div>
  )
}

export default New