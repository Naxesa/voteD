
import React from 'react';

const CandidateRating = ({ fullname, image, voteCount, totalVotes }) => {
  const votePercentage = totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0;

  return (
    <li className="candidate">
      <div className="candidate__image">
        <img src={image} alt={fullname} />
      </div>
      <div className="candidate__info">
        <div className="candidate__details">
          <h5>{fullname}</h5>
          <small>{`${voteCount} ${voteCount === 1 ? 'vote' : 'votes'}`}</small>
        </div>
        <div className="candidate__rating">
          <div className="candidate__bar">
            <span style={{ width: `${votePercentage}%` }}></span>
          </div>
          <small>{votePercentage.toFixed(2)}%</small>
        </div>
      </div>
    </li>
  );
};

export default CandidateRating;