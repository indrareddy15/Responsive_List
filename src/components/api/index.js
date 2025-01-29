/* eslint-disable no-useless-catch */
import axios from 'axios';

export const getLists = async () => {
    try {
        const response = await axios.get('https://apis.ccbp.in/list-creation/lists');
        return response.data;
    } catch (error) {
        throw error;
    }
};