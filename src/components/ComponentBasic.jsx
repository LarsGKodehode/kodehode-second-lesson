/**
 * Most of the time we are going to keep our custom components in seperate files
 * Remember to use CapitalCase when naming them,
 * and for simplicity just name the file the same as the component + '.jsx'
 */

/**
 * This is a basic static components
 */
function ComponentBasic() {
  return (
    <div className="component-basic">
      <h3>This is a basic component</h3>
      <p>Some new text</p>
    </div>
  )
}

export default ComponentBasic