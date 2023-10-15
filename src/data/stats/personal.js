import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1999-08-24T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'hometown',
    label: 'Hometown',
    value: 'Hanamkonda, India',
    link:
      'https://maps.app.goo.gl/W1U45ywnwPU5EJhx6',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Raleigh, NC',
    link: 'https://maps.app.goo.gl/nBKxJAnEXbefKqdE7',
  },
  {
    key: 'spoken-languages',
    label: 'Languages I Speak',
    value: 'English, Telugu, Hindi',
  },
  {
    key: 'languages',
    label: 'Languages I Type',
    value: 'C, C++, Python, Java, SQL, Assembly',
  },
];

export default data;
