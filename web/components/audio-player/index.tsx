
import React, { useState, useEffect, useRef } from 'react';
import { getImageUrl, projectId, dataset } from 'sanity';
import Image from 'next/image';
import { PlayArrow, Pause } from '@mui/icons-material';

import styles from './style.module.scss';

const AudioPlayer = (props) => {
  const { file, cover, artist, title } = props;

  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  const [playing, setPlaying] = useState<boolean>(false);
  const [drawPlay, setDrawPlay] = useState<boolean>(false);

  useEffect(() => {
    create();

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    }
  }, []);

  // stolen from https://hdoro.dev/inline-audio-player-sanity-io
  const { _ref: ref } = file.asset;

  const assetRefParts = ref.split('-');
  const id = assetRefParts[1];
  const format = assetRefParts[2];
  const audioUrl = `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${format}`;
  // stolen from https://hdoro.dev/inline-audio-player-sanity-io

  const imageUrl = getImageUrl(cover).url();

  const formOptions = (ref) => ({
    container: ref,
    waveColor: '#eee',
    progressColor: '#777',
    barWidth: 3,
    barRadius: 3,
    responsive: true,
    height: 110,
    normalize: true,
    partialRender: true
  });

  const create = async () => {
    const WaveSurfer = (await import('wavesurfer.js')).default;

    const options = formOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.on('ready', () => {
      setDrawPlay(true);
    });

    wavesurfer.current.load(audioUrl);
  }

  const handlePlay = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  }

  return (
    <div className={styles.wrapper}>
      <Image width={200} height={200} src={imageUrl} alt={`${artist} - ${title}`} />
      <div className={styles.player}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{artist} - {title}</h2>
        </div>
        <div className={styles.playWrapper}>
          {drawPlay
          ? <button onClick={handlePlay} aria-label='Play audio' className={styles.playButton}>
              {playing
              ? <Pause />
              : <PlayArrow />}
            </button>
          : <div className={styles.playButton} /> // make sure the waveform generates properly
          }
          <div id='waveform' ref={waveformRef} className={styles.waveform} />
        </div>
      </div>
      <audio id='track' src={audioUrl} />
    </div>
  );
}

export default AudioPlayer;