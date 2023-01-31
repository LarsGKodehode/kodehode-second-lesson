/**
 * We will mostly leave this file untouched
 * and only use it for setting up React
 */
// We have to import React to actually be able to use it
import React from 'react'
// React provides support for both the browser (DOM) and native (Mobile apps)
// We are going to use the browser
import ReactDOM from 'react-dom/client'

// Here we are importing the main App 'component'
import App from './App'

// We need to include the css files as well
// You can split those up into seperate files if you want
import './index.css'

/**
 * The section down here is the way React is setup
 */
// First we are calling a method from ReactDOM and giving it the
// root element we want to put our application at
const root = ReactDOM.createRoot(document.getElementById('root'))

// Here we are telling React to start rendering (displaying) all of our HTML (JSX/Markdown)
root.render(
  <App />
)