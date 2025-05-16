'use client'
import React, { useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

function VideoPlayer() {
    useEffect(() => {
        const player = videojs('video-player', {
            controls: true,
            autoplay: false,
            preload: 'auto',
            fluid: true,
            sources: [
                {
                    src: 'https://drive.google.com/file/d/1AitTbDwYHbHI8o96MCWxisE_IO2p5xl8/view?usp=sharing', // Replace with streaming URL
                    type: 'video/mp4', // Adjust based on file type
                },
            ],
        });

        return () => {
            if (player) {
                player.dispose();
            }
        };
    }, []);

    return (
        <div>
            <h2>Video Player</h2>
            <video
                id="video-player"
                className="video-js vjs-default-skin"
                controls
                width="100%"
                height="360"
            />
        </div>
    );
}

export default VideoPlayer;