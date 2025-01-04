// src/components/AnchorPlayer.jsx
import React from 'react';

export const AnchorPlayer = ({ episodeId }) => {
  return (
    <div className="anchor-embed">
      <iframe
        src={`https://anchor.fm/techiesconnect/embed/episodes/${episodeId}`}
        height="102px"
        width="100%"
        frameBorder="0"
        scrolling="no"
        className={`w-full rounded-lg shadow-lg`}
      />
    </div>
  );
};