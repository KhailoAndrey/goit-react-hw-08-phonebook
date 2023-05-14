import axios from 'axios';

export async function AdContacts({ name, number }) {
  const response = axios.post(`/contacts`, { name, number });
  return response;
}