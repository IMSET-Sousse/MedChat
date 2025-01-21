CREATE DATABASE MedChat;
GRANT ALL PRIVILEGES ON DATABASE MedChat TO postgres;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
);

CREATE TABLE conversations (
    conversation_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ended_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE messages (
    message_id INT PRIMARY KEY AUTO_INCREMENT,
    conversation_id INT,
    user_id INT,
    message TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (conversation_id) REFERENCES conversations(conversation_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE bot_responses (
    response_id INT PRIMARY KEY AUTO_INCREMENT,
    intent VARCHAR(100) NOT NULL,  
    response_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

