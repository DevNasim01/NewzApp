const ErrorMsg = ({error}) => {
  return (
    <div className="error">
      <h1>Error: {error} <br /><span>it's not you, it's us</span>
      <p>Please re-load the page to restart the process.</p>
      </h1>
      
    </div>
  )
}

export default ErrorMsg