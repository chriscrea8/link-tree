import React, {Component} from 'react';
import LinkList from './components/LinkList';
import './App.css'
import './components/LinkList.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
        link: 'https://twitter.com/chriscrea8',
        item: 'Twitter Link',
        id: 1
      },
      {
        link: 'https://training.zuri.team/',
        item: 'Zuri Team',
        id: 2
      },
      {
        link: 'http://books.zuri.team ',
        item: 'Zuri Books',
        id: 3
      },
      {
        link: 'https://books.zuri.team/python-for-beginners?ref_id=chriscrea8',
        item: 'Python Books',
        id: 4
      },
      {
        link: 'https://background.zuri.team',
        item: 'Background Check for Coders',
        id: 5
      },
      {
        link: 'https://books.zuri.team/design-rules',
        item: 'Design Books',
        id: 6
      }
      ]
    }
  }

  render() {
  return (
    <div className='App'>
      <LinkList> 
        {this.state.items.map(item => (
          <a href={item.link} key={item.id} className="link">{item.item}</a>
        ))}
      </LinkList>
      
    </div>
  )
  }
}

export default App;
