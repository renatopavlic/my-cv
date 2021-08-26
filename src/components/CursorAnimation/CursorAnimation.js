import React, { useEffect, useCallback } from "react";

const CursorAnimation = () => {
  const typeWriter = useCallback((text, i, fnCallback) => {
    if (i < text.length) {
      document.querySelector(".cursor-animation-text").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700);
    }
  }, []);

  const StartTextAnimation = useCallback(
    (i) => {
      const dataText = [
        "Hi, my name is Renato",
        "I'm a web developer.",
        "My passion is to create",
        "beautiful, responsive and moder",
        "web application using newest technologies.",
      ];

      if (typeof dataText[i] == "undefined") {
        return StartTextAnimation(0);
      }

      if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, function () {
          StartTextAnimation(i + 1);
        });
      }
    },
    [typeWriter]
  );

  useEffect(() => {
    StartTextAnimation(0);
  }, [typeWriter, StartTextAnimation]);

  return (
    <div className="cursor-animation">
      <h1 className="cursor-animation-text">Nešto bezveze</h1>
    </div>
  );
};

export default CursorAnimation;
