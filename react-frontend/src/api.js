

import axios from 'axios';

export function getConversationHistory() {
  return axios.get('https://api.liteLLM.com/conversations');
}

export function getFileShare() {
  return axios.get('https://api.liteLLM.com/files');
}

export function search(text) {
  return axios.get(`https://api.liteLLM.com/search?q=${text}`);
}