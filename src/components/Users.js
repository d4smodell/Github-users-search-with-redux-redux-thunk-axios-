import React from "react";

export const Users = (props) => {
  return (
    <div className="row">
      {props.users.map((user) => {
        return (
          <div className="card col-sm-4 mb-4" style={{width: "18rem", marginTop: '10px'}} key={user.id}>
            <img
              className="card-img-top"
              src={user.avatar_url}
              alt="user_photo"
            />
            <div className="card-body">
              <h5 className="card-title">{user.login}</h5>
                <ul>
                    
                </ul>
              <a target='blank' href={user.html_url} className="btn btn-primary">
                Open Profile
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
