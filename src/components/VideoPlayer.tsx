import { useEffect, useRef } from "react";
type VideoPlayerProps = {
  vdoSrc: string;
  isPlaying: boolean;
  onStateChange: (state: boolean) => void;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  vdoSrc,
  isPlaying,
  onStateChange,
}) => {
  const vdoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      vdoRef.current?.play();
    } else {
      vdoRef.current?.pause();
    }
  }, [isPlaying]);

  const handlePlay = () => {
    onStateChange(true);
  };

  const handlePause = () => {
    onStateChange(false);
  };

  return (
    <video
      src={vdoSrc}
      ref={vdoRef}
      muted
      loop
      controls
      onPlay={handlePlay}
      onPause={handlePause}
    />
  );
};

export default VideoPlayer;
