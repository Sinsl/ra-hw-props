import PropTypes from 'prop-types'

export const Message = ({from, message}) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online">&#8226;</i>{from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">
        {message.text}
      </div>
    </li>
  );
}
Message.propTypes = {
  from: PropTypes.object,
  message: PropTypes.object
}