import React, { useState, useEffect } from "react";
import $ from "jquery";

const NameEffect = () => {
  const words = [
    "Vince Serrano",
    "a web developer",
    "a UI designer",
    "a   graphic artist",
  ];
  const [part, setPart] = useState("");
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount((prevSkipCount) => prevSkipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prevI) => (prevI + 1) % words.length);
          setOffset(0);
        }
      }
      setPart(words[i].substr(0, offset));
      if (skipCount === 0) {
        if (forwards) {
          setOffset((prevOffset) => prevOffset + 1);
        } else {
          setOffset((prevOffset) => prevOffset - 1);
        }
      }
      $(".word").text(part);
    }, speed);
    return () => clearInterval(interval);
  }, [forwards, i, offset, part, skipCount, words]);

  return <div className="word">{part}</div>;
};

export default NameEffect;
