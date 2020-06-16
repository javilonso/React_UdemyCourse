import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID lLHU2-45aex8kuzfnHUZANiuY7uLsOHUzJZyxo8wqX8'
    }
});