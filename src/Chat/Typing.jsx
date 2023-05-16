import PropTypes from 'prop-types'

export const Typing = ({from, message}) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online">&#8226;</i>{from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="dots">
        <span className="dot">&#8226;</span>
        <span className="dot">&#8226;</span>
        <span className="dot">&#8226;</span>
      </div>
    </li>
  );
}
Typing.propTypes = {
  from: PropTypes.object,
  message: PropTypes.object
}