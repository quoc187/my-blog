import { CirclePlay, CirclePause, LoaderCircle } from 'lucide-react'
import { useState, useRef } from 'react';

export const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) {
      const audio = new Audio('/music-1.mp3');
      audio.loop = true;
      audio.addEventListener("canplay", () => setIsLoading(false));
      setIsLoading(true);

      audioRef.current = audio
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-4 right-4 bg-white text-black p-3 rounded-lg hover:bg-gray-200 transition-colors"
    >
      {!isPlaying ? <CirclePlay /> : (isLoading ? <LoaderCircle className="animate-spin" /> : <CirclePause />)}
    </button>
  );
};
