// components/RadioPlayer.tsx
import React from 'react';

const RadioPlayer: React.FC = () => {
  return (
    <audio controls autoPlay>
      <source src="http://localhost:8000/live/your_stream_name/index.m3u8" type="application/x-mpegURL" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default RadioPlayer;