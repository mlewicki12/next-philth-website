
import React, { useState, useEffect, useRef } from 'react';
import { getImageUrl, projectId, dataset } from 'sanity';
import Image from 'next/image';
import { PlayArrow, Pause } from '@mui/icons-material';

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
    progressColor: '#333',
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
    <div style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '1rem', backgroundColor: '#000'}}>
      <Image width={200} height={200} src={imageUrl} alt={`${artist} - ${title}`} />
      <div style={{display: 'flex', flexFlow: 'column-reverse nowrap', justifyContent: 'flex-end', alignItems: 'flex-start', paddingLeft: '1rem', height: '100%', width: '100%', alignSelf: 'flex-end'}}>
        <div style={{width: '100%', borderTop: '1px solid white', padding: '0.5rem 0 0 0'}}>
          <h2 style={{color: 'white', padding: 0, paddingLeft: '0.5rem', margin: 0, fontFamily: 'RadioNewsman, serif', fontWeight: 'lighter'}}>{artist} - {title}</h2>
        </div>
        <div style={{width: '100%', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-start', alignItems: 'center', padding: 0}}>
          {drawPlay
          ? <button onClick={handlePlay} aria-label='Play audio' style={{border: '2px solid white', backgroundColor: 'black', color: 'white', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0.5rem 1rem 0.5rem 0', cursor: 'pointer', alignSelf: 'flex-end'}}>
              {playing
              ? <Pause />
              : <PlayArrow />}
            </button>
          : <div style={{width: '45px', height: '45px', margin: '0.5rem 1rem 0.5rem 0'}} /> // make sure the waveform generates properly
          }
          <div id='waveform' ref={waveformRef} style={{width: '100%', height: '120px'}} />
        </div>
      </div>
      <audio id='track' src={audioUrl} />
    </div>
  );
}

export default AudioPlayer;