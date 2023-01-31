/**
 * Most of the time we are going to keep our custom components in seperate files
 * Remember to use CapitalCase when naming them,
 * and for simplicity just name the file the same as the component + '.jsx'
 */

/**
 * This component takes in children
 */
function ComponentWithChildren(properties) {
  // If you are curious just console out the incommig argument
  // console.log(properties)

  return (
    <div>
      <h1>This component has children</h1>
      {properties.children}
    </div>
  )
}

export default ComponentWithChildren