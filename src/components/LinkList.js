import React from 'react'
import './LinkList.css'
import Contact from './Contact'
import { Link } from 'react-router-dom'

function LinkList(props) {
  return (
    <div className="link-list">
      {props.items.map((item) => {
        return item.internalLink ? (
          <Link to={item.link} key={item.id} id={item.id} className="link">
            {item.item}{' '}
          </Link>
        ) : (
          <a href={item.link} key={item.id} id={item.id} className="link" rel="noreferrer">
            {item.item}
          </a>
        )
      })}
    </div>
  )
}

export default LinkList
