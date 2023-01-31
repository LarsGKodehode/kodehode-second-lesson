import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Title text</h1>
        {/* Some content */}
      </header>

      <main>
        {/* Some more content */}
        <ComponentBasic />
      </main>

      <footer>
        {/* Some contact info here */}
      </footer>
    </div>
  )
}

/**
 * This is a basic components
 */
function ComponentBasic() {
  return (
    <div>
      <h3>This is a basic component</h3>
      <p>Some new text</p>
    </div>
  )
}

export default App