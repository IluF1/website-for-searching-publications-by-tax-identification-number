import axios from "axios"
import localStorage from "redux-persist/es/storage"
import { IAuthCredentials, TToken } from "../utils/types/types"

export const API_URL = process.env.BASE_URL;

export async function verifyRequisites(
    credentials: IAuthCredentials,
): Promise<void> {

    try {
        await axios.post(
            `https://gateway.scan-interfax.ru/api/v1/account/login`,
            credentials
        )
            .then((response: axios.AxiosResponse<TToken>) => {
                localStorage.setItem('token', response.data.accessToken);
                localStorage.setItem('expire', response.data.expire!);
            })
    } catch (e) {
       alert('ошибка')
    }
}
