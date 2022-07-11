import styles from "./Iframe.module.scss";
import YouTube from "react-youtube";
const Iframe = ({ uri, title, random }) => {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
  const playVideo = (e) => {
    setTimeout(() => {
      e.target.playVideo();
    }, 1000);
  };

  const replay = (e) => {
    e.target.seekTo(0);
  };
  return (
    <YouTube
      className={styles.iframeBox}
      iframeClassName={styles.iframe}
      opts={opts}
      videoId={uri}
      title={title}
      onReady={(e) => playVideo(e)}
      onEnd={random ? () => random() : (e) => replay(e)}
      onPause={() => console.log("pause")}
    />
  );
};

export default Iframe;
