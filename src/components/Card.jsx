import React from 'react';

export default function Card({ title, img, index, setPercentage, isLoaded }) {
  function handleLoad() {
    setPercentage();
  }

  return (
    <div className={isLoaded ? 'card' : 'card card--none'}>
      <figure>
        <img src={img} alt={title} onLoad={handleLoad} />
      </figure>
      <figcaption>{title}</figcaption>
    </div>
  );
}
