import React from 'react'
import styles from './styles'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faComments, faTimes} from '@fortawesome/fontawesome-free-solid'

const Chat = ({toggleChat, active}) => <div className={styles.chat()}>
  <div className={`container ${styles.chatContainer()}`}>
    <iframe className={styles.chatTitan(active)}src='https://titanembeds.com/embed/418783769965625344' height='450' frameBorder='0' />
    <button className={`button ${styles.chatButton(active)}`} onClick={toggleChat}>
      <span className='icon'>
        {active === 'active' ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faComments} />}
      </span>
    </button>
  </div>
</div>

export default Chat
