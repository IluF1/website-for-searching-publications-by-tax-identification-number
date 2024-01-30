
import api from './http'

import { IAuthCredentials, TToken } from "../utils/types/types"


const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

export const API_URL = process.env.REACT_APP_BASE_URL;

export async function verifyRequisites(credentials: IAuthCredentials): Promise<void> {
    try {
        const response = await api.post(JSON.stringify(API_URL), credentials);
        const responseData: TToken = response.data;
        if (localStorage) {
            localStorage.setItem('token', responseData.accessToken);
            localStorage.setItem('expire', responseData.expire || '');
        } else {
            console.error('localStorage is not available');
        }
    } catch (error) {
        console.error('An error occurred:', error);
       
    }
}