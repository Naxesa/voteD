import React from 'react';

const Candidate = ({ image, id, fullname, motto }) => {
  return (
    <article className="candidate">
      <div className="candidate__image">
        <img src={image} alt={fullname} />
      </div>
      <h5>{fullname?.length > 20 ? fullname.substring(0, 20) + "..." : fullname}</h5>
      <small>{motto?.length > 25 ? motto.substring(0, 25) + "..." : motto}</small>
      <button className="btn-primary">Vote</button>
    </article>
  );
};

export default Candidate;
