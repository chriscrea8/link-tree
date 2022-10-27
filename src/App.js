import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import LinkList from './components/LinkList';

const App = () => {
  return <>
    <main>
      Hello this is a test text!
      <LinkList/>

    </main>
  </>
}

export default App;
