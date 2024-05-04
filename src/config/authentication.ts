import { getCookie } from 'utils';
// import * as process from 'process';

export const awsConfig = {
  Auth: {
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_CLIENT_ID
  }
};

export const hasLoginAccess = (cookieName = 'IDToken'): boolean => getCookie(cookieName) === 'true';
