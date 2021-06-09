import {makeRequest} from './common';

export interface SongMetaData {
  artists: Array<{
    id: string | null;
    image: string | null;
    name: string;
  }>;
  id: string | null;
  image: string | null;
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
