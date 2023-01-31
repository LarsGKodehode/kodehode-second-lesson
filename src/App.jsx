import ComponentBasic from './components/ComponentBasic'
import ComponentWithProps from './components/ComponentWithProps'
import ComponentWithChildren from './components/ComponentWithChildren'

import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Title text</h1>
      </header>

      <main>
        
        {/* This is how you use a basic component */}
        <ComponentBasic />

        {/* Component can also take properties (HTML attributes) you can use to modify the resulting JSX (HTML) */}
        <img src="" alt=""  />

        <ComponentWithProps title="ComponentWithProps" anotherName="Some text content here" />


        {/* You can also create components that acts as custom containers */}
        <div>
          <h4>A div is a wrapper/container</h4>
        </div>

        <ComponentWithChildren>
          <h4>This is a children of the custom container</h4>
          <p>Some more elements</p>
        </ComponentWithChildren>

      </main>

      <footer>
        {/* Footer content here */}
      </footer>
    </div>
  )
}

export default App