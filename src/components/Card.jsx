import React from 'react';

export default function Card({ title, img, index }) {
  return (
    <div className="card" style={{ animationDelay: `${index * 300}ms` }}>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <figcaption>{title}</figcaption>
    </div>
  );
}
