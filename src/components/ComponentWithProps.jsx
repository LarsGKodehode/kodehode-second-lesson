/**
 * Most of the time we are going to keep our custom components in seperate files
 * Remember to use CapitalCase when naming them,
 * and for simplicity just name the file the same as the component + '.jsx'
 */

/**
 * This is a component with properties
 */
function ComponentWithProps(props) {
  // If you are curious just console out the incommig argument
  // console.log(properties)

  return (
    <div>
      <h1>{props.title}</h1>
      <h3>This is a component with properties (HTML Attributes) </h3>
      <p>{props.anotherName}</p>
    </div>
  )
}

export default ComponentWithProps


/**
 * ==================
 * === Variations ===
 * ==================
 * These are different ways to write components with properties
 * They function the same way as the one above.
 * 
 * I suggest you choose one of the ways bellow and stick with that
 * Consistency when writing code makes it far easier to navigate through it.
 */


/**
 * Simple destructuring
 */
function PropertiesDestructuring(props) {
  const { title, anotherName } = props

  return (
    <div>
      <h1>{title}</h1>
      <h3>This is a component with properties (HTML Attributes) </h3>
      <p>{anotherName}</p>
    </div>
  )
}

/**
 * Inline destructuring
 */
function PropertiesDestructuringInline({
  title,
  anotherName
}) {

  return (
    <div>
      <h1>{title}</h1>
      <h3>This is a component with properties (HTML Attributes) </h3>
      <p>{anotherName}</p>
    </div>
  )
}