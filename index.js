const Notification = props => {
  //  Write your code here.
  const Notification = props => {
  const { className, iconlink, text } = props;
  const container-name=`${className}`
  return (
    <div className={`button ${className}`}>
      <img className="icon" src={iconlink} />
      <p className="messaage">{text}</p>
    </div>
  );
}

const element = (
  //  Write your code here.   
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-list-container">
      <Notification
        className="card-container1"
        iconlink="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        className="card-container2"
        iconlink="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />
      <Notification
        className="card-container3"
        iconlink="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />
      <Notification
        className="card-container4"
        iconlink="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
