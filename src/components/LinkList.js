import React from 'react'
import './LinkList.css'

function LinkList(props) {
  return (
    <div className='link-list'>
      {props.children}
    </div>
  )
}

export default LinkList
