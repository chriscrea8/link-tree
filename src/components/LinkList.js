import React, {useState, useEffect} from 'react'
import {ListGroup, Image} from 'react-bootstrap';
import LinkButton from './LinkButton';
import './LinkList.css'

const LinkList = () => {
    const links = [
        'https://twitter.com/chriscrea8',
        'https://training.zuri.team/',
        'http://books.zuri.team ',
        'https://books.zuri.team/python-for-beginners?ref_id=chriscrea8',
        'https://background.zuri.team',
        'https://books.zuri.team/design-rules',
    ]
  return <ListGroup>
    <div>
        <Image id='profile__img' alt= "profile-image" width="120" height="120" src={`${process.env.PUBLIC_URL}/profile.jpg`} />

        <h5 className='profile-name'>Christian Chukwu</h5>
        {links.map((link) => (
            <LinkButton key={link} link={link}/>
        ))}
    </div>
  </ListGroup>
}

export default LinkList
