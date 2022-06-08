import { useState, useEffect, useRef, useCallback } from "react";
import Iframe from "../Iframe";
import styles from "./styles.module.scss";

const Slider = ({ offerts, time }) => {
  const sliderRef = useRef(null);
  const [moveSlider, setMoveSlider] = useState(0);
  const [sliderCounter, setSliderCounter] = useState(0);
  const DIRECTION = {
    LEFT: "left",
    RIGHT: "right",
  };
  const intervalTime = time * 1000;
  const sliderLeft = useCallback(() => {
    setMoveSlider(moveSlider + 100);
    setSliderCounter(sliderCounter - 1);
  }, [moveSlider, sliderCounter]);

  const sliderRight = useCallback(() => {
    setMoveSlider(moveSlider - 100);
    setSliderCounter(sliderCounter + 1);
    if (sliderCounter === sliderRef.current.children.length - 1) {
      setMoveSlider(0);
      setSliderCounter(0);
    }
  }, [moveSlider, sliderCounter, sliderRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRight();
    }, intervalTime);
    return () => clearInterval(interval);
  }, [sliderRight, intervalTime]);

  const handleMoveSlider = (direction) => {
    if (direction === DIRECTION.LEFT) {
      sliderLeft();
    }
    if (direction === DIRECTION.RIGHT) {
      sliderRight();
    }
  };
  return (
    <>
      <div>
        <div className={styles.sliderContainer}>
          <div
            ref={sliderRef}
            className={styles.slider}
            style={{
              transform: `translateX(${moveSlider}%)`,
              transition: "all 1s",
            }}
          >
            {offerts.map((res, index) => (
              <div key={index} className={styles.sliderItem}>
                <Iframe uri={res.uri} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.sliderButtons}>
          <button
            className={styles.buttonLeft}
            onClick={() => handleMoveSlider(DIRECTION.LEFT)}
            disabled={sliderCounter === 0}
          >
            &lt;
          </button>
          <button
            className={styles.buttonRight}
            onClick={() => handleMoveSlider(DIRECTION.RIGHT)}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};
export default Slider;
