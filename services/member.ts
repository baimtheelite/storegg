import axios from "axios";
import callAPI from "../config/api";
import { CheckoutTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getMemberOverview() {
    const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;
  
    return callAPI({
      url,
      method: 'GET',
      data: {},
      token: true,
    });
  }

export async function getMemberTransaction(valueParams: string) {
    let params = '';
    
    if(valueParams === 'all') {
      params = ''
    } else {
      params = `?status=${valueParams}`;
    }

    const url = `${ROOT_API}/${API_VERSION}/players/history${params}`;

    return callAPI({
        url,
        method: 'GET',
        token: true,
      });
}

export async function getMemberTransactionDetail(id: string, jwtToken: string) {
  const url = `${ROOT_API}/${API_VERSION}/players/history/${id}/detail`;

  return callAPI({
    url,
    method: 'GET',
    serverToken: jwtToken,
  });
}