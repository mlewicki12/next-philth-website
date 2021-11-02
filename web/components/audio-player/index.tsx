
import React, { useState, useEffect, useRef } from 'react';
import { getImageUrl, projectId, dataset } from 'sanity';
import Image from 'next/image';
import { PlayArrow, Pause } from '@mui/icons-material';

// stolen from https://hdoro.dev/inline-audio-player-sanity-io
const AudioPlayer = (props) => {
  const { file, cover } = props;

  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  const [playing, setPlaying] = useState<boolean>(false);

  if(!file.asset?._ref) {
    return null;
  }

  const { _ref: ref } = file.asset;

  const assetRefParts = ref.split('-');
  const id = assetRefParts[1];
  const format = assetRefParts[2];
  const audioUrl = `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${format}`;

  const imageUrl = getImageUrl(cover).url();

  const formOptions = (ref) => ({
    container: ref,
    waveColor: '#eee',
    progressColor: '#333',
    barWidth: 3,
    barRadius: 3,
    responsive: true,
    height: 80,
    normalize: true,
    partialRender: true
  });

  const create = async () => {
    const WaveSurfer = (await import('wavesurfer.js')).default;

    const options = formOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(audioUrl);
  }

  useEffect(() => {
    create();

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    }
  }, []);

  const handlePlay = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  }

  return (
    <div style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '1rem', backgroundColor: '#000'}}>
      <Image width={200} height={200} src={imageUrl} />
      <div style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-between', alignItems: 'flex-start', paddingLeft: '1rem', height: '100%', width: '100%'}}>
        <h2 style={{color: 'white', padding: 0, margin: 0}}>Two Thumbs Down - Bob and Edith</h2>
        <div style={{width: '100%', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-start', alignItems: 'center', padding: '1.5rem 0'}}>
          <button onClick={handlePlay} aria-label='Play audio' style={{border: '2px solid white', backgroundColor: 'black', color: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0.5rem'}}>
            {playing
            ? <Pause />
            : <PlayArrow />}
          </button>
          <div id='waveform' ref={waveformRef} style={{width: '100%', height: '90px'}} />
        </div>
      </div>
      <audio id='track' src={audioUrl} />
    </div>
  );
}

export default AudioPlayer;