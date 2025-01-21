import styles from  "./Messages.module.css";

const Messages = (props) => {
  return (
    <div className={styles.messages}>
      {props.messages.map((msg, index) => (
        <div key={index} className={styles.message} style={msg.sender === 'bot' ? { backgroundColor: 'rgb(241, 248, 233)', alignSelf: 'flex-start', textAlign: 'left' } : {}}> {msg.text}
        </div>
      ))}
    </div>
  )

}

export default Messages;