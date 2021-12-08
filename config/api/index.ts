import axios, { AxiosRequestConfig } from "axios";
import Cookie from "js-cookie";

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}

export default async function callAPI({ url, method, data, token, serverToken }: CallAPIProps) {
  let headers = {};
  
  if (serverToken) {
      headers = {
        Authorization: `Bearer ${serverToken}`
      }
  } else if(token) {
    const tokenCookies = Cookie.get("token");
    if(tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`
      }
    }
  }
  const response = await axios({
    url,
    method,
    data,
    headers
  }).catch((error) => error.response);
  if (response?.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const responseLength  = Object.keys(response.data).length;

  const res = {
    error: false,
    message: "success",
    data: (responseLength > 1) ? response.data : response.data.data,
  };

  return res;
}
