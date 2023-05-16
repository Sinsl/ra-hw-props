import PropTypes from 'prop-types'
import { Message } from './Message';
import { Response } from './Response';
import { Typing } from './Typing';

export const MessageHistory = ({list}) => {

  return (
    <ul>
      {
        list.map((item) => {
          if (item.type === "message") {
            return (<Message key={item.id} from={item.from} message={item}/>)
          }
          if (item.type === "response") {
            return <Response key={item.id} from={item.from} message={item}/>
          }
          if (item.type === "typing") {
            return <Typing key={item.id} from={item.from} message={item}/>
          }
        })
      }
    </ul>
  );
}

MessageHistory.propTypes = {
  list: PropTypes.array
}