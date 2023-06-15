import React from 'react'

const Categories = () => {
  return (
    <div className='categories'>
        <button type="button" className="btn btn-danger">All</button>
        <button type="button" className="btn btn-warning">Weather</button>
        <button type="button" className="btn btn-info">Sport</button>
        <button type="button" className="btn btn-success">World</button>
    </div>
  )
}

export default Categories