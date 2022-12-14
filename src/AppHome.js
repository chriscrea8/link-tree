import React from 'react'
import LinkList from './components/LinkList'
import './App.css'
import './components/LinkList.css'
import Profile from './components/Profile'
import SocialIcons from './components/SocialIcons'

const items = [
  {
    link: 'https://twitter.com/chriscrea8',
    item: 'Twitter Link',
    id: 'twitter',
  },
  {
    link: 'https://training.zuri.team/',
    item: 'Zuri Team',
    id: 'btn__zuri',
  },
  {
    link: 'http://books.zuri.team ',
    item: 'Zuri Books',
    id: 'books',
  },
  {
    link: 'https://books.zuri.team/python-for-beginners?ref_id=chriscrea8',
    item: 'Python Books',
    id: 'book__python',
  },
  {
    link: 'https://background.zuri.team',
    item: 'Background Check for Coders',
    id: 'pitch',
  },
  {
    link: 'https://books.zuri.team/design-rules',
    item: 'Design Books',
    id: 'book__design',
  },
  {
    link: '/contact',
    item: 'Contact Me',
    id: 'contact',
    internalLink: true,
  },
]
const AppHome = () => {
  return (
    <div className="App">
      <Profile />
      <LinkList items={items} />
      <SocialIcons />
    </div>
  )
}

export default AppHome
