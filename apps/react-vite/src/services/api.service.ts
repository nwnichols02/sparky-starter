import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';

export interface IUser {
  userId?: number;
  userName?: string;
  firstName?: string;
  lastName?: string;
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    onError?: Function;
    onSuccess?: Function;
    options?: {
      ignoreAbortController?: boolean;
    };
    id?: string;
  }
}

const axiosInstance = axios.create();
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
axiosInstance.defaults.withCredentials = true;

//? Contains all the request ids and abort controllers related with them
const requestAbortControllers: any = {};

const abortRequest = (requestId: string) => {
  if (requestAbortControllers[requestId]) {
    requestAbortControllers[requestId]?.abort();
  }
};

export const getAuthToken = async () => {

  const user: IUser = {};
  const token = {}

  return {
    token,
    user,
  };
};

//? Can pass clearAuth to this function and automatically call it in the interceptors.response error to log the user out and clear the global auth state
//? Add this to app.tsx or header or something that could pass in the clearAuth in the future
export const setupInterceptors = (token?: string) => {
  axiosInstance.interceptors.request.use(
    async (config: any) => {
      const requestAbortId = `controller/${config.url}_${config.id}`;
      if (!config?.options?.ignoreAbortController && requestAbortControllers[requestAbortId]) {
        //? This will abort the request if the same request is called more than once.
        abortRequest(requestAbortId);
      }
      if (!config.headers) {
        config.headers = {};
      }
      config.headers['Authorization'] = `Bearer ${token}`;
      requestAbortControllers[requestAbortId] = new AbortController();
      if (requestAbortControllers[requestAbortId] !== undefined) {
        config.signal = requestAbortControllers[requestAbortId]?.signal;
      }
      return config;
    },
    async (error: AxiosError) => {
      //? Add custom error logic here
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (res: AxiosResponse) => {
      if (res?.config?.onSuccess) {
        return res.config.onSuccess(res);
      }
      return res;
    },
    (err: AxiosError) => {
      //? Can add code here to check the authorization token expired date and automatically log the user out
      if (err?.config?.onError) {
        return err.config.onError(err);
      }
      return err;
    },
  );
};

export const apiService = axiosInstance;
