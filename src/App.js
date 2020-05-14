import React from 'react'
import ContactForm from "./components/Form";
import { Users } from './components/Users';

const App = (props) => {
  return (
    <div className='container'>
      <ContactForm onSubmit={props.onSubmit}/>
      <Users {...props}/>
    </div>
  )
}

export default App


