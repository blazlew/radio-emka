import Config from 'react-native-config';

interface RequestParams extends RequestInit {
  path: string;
}

export const makeRequest = (params: RequestParams) => {
  const {path, headers, ...restParams} = params;
  return fetch(`${Config.API_URL}${path}`, {
    ...restParams,
    headers: {
      Accept: 'application/json',
      ...headers,
    },
  });
};
