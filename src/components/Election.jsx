import React from 'react';
import { Link } from 'react-router-dom';

const Election = ({ id, title, description, thumbnail }) => {
  return (
    <article className="election-card">
      <div className="election-card__image">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="election-card__details">
        <Link to={`/elections/${id}`} className="election-card__title">
          <h4>{title}</h4>
        </Link>
        <p className="election-card__description">
          {description?.length > 177? `${description.substring(0, 149)}...` : description}
        </p>
        <div className="election-card__actions">
          <Link to={`/elections/${id}`} className="btn btn-small">View</Link>
          <button className="btn btn-small btn-primary">Edit</button>
        </div>
      </div>
    </article>
  );
};

export default Election;

