import {makeRequest} from './common';

export interface SongMetaData {
  artists: Array<{
    id: string;
    image: string;
    name: string;
  }>;
  id: string;
  image: string;
  name: string;
  status: number;
}

export const getPlaybackMetadata = () =>
  makeRequest({path: '/m/android/playlist/channel-999.json'})
    .then(response => response.json())
    .then((json: Array<SongMetaData>) => {
      return json.find(songMetaData => songMetaData.status === 0);
    })
    .catch(error => {
      console.error(error);
    });
