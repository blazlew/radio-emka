import {getPlaybackMetadata, SongMetaData} from '@api/playbackMetadata';
import {
  META_DATA_POLL_INTERVAL,
  TRACK_POSTER_SIZE,
} from '@config/constants/playbackMetaData';
import {useEffect, useState} from 'react';

const INIT_META_DATA: SongMetaData = {
  id: '420',
  image: '', // TODO: Add m-logo from github,
  name: 'Radio emka',
  status: 0,
  artists: [],
};

export function useTrackMetadata() {
  const [
    currentTrackMetadata,
    setCurrentTrackMetadata,
  ] = useState<SongMetaData>(INIT_META_DATA);

  const fetchData = async () => {
    const metaData = await getPlaybackMetadata();
    if (metaData) {
      metaData.image = metaData.image
        .replace('[WIDTH]', TRACK_POSTER_SIZE)
        .replace('[HEIGHT]', TRACK_POSTER_SIZE);
      setCurrentTrackMetadata(metaData);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, META_DATA_POLL_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return currentTrackMetadata;
}
