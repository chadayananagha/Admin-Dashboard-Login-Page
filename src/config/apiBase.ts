import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const fetchQ = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API_BASE_URL}/`,
  prepareHeaders(headers) {
    return headers;
  },
  credentials: 'include'
});
const baseQuery: any = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  const result = await fetchQ(args, api, extraOptions);
  return result;
};
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: () => ({}),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true
});
