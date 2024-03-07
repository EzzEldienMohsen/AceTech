/* eslint-disable react/prop-types */

import React from 'react';

const Number = ({ number, title, theNumber }) => {
  const [count, setCount] = React.useState(0);
  const [start, setStart] = React.useState(true);
  const timerIdRef = React.useRef(null);

  React.useEffect(() => {
    if (start) {
      timerIdRef.current = setTimeout(() => {
        if (number > 1000) {
          setCount(count + 1000);
          if (count == number - 1000) setStart(false);
        } else {
          setCount(count + 1);
        }
      }, 40);
    }

    () => {
      clearTimeout(timerIdRef.current);
    };
    if (count === number - 1) {
      setStart(() => false);
    }
  }, [count, start]);

  return (
    <>
      <h1 className="stat-value mb-2">{count + theNumber}</h1>
      <h1 className="stat-title">{title}</h1>
    </>
  );
};

export default Number;
