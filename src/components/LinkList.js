import React from 'react'
import './LinkList.css'

function LinkList(props) {
  return (
    <div className='link-list'>
        {props.items.map(item => (
          <a href={item.link} key={item.id} id={item.id} className="link" rel="noreferrer" target="_blank">{item.item}</a>
        ))}
    </div>
  )
}

export default LinkList
