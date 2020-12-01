import React, { useState, useEffect } from "react";

import { GoogleLogin, GoogleLogout } from 'react-google-login';
  
import "../assets/css/admin.css";

const BlogEntries = function(props) {
  return props.entries.map((entry, index) => (
    <div className="entry" key={ index }>
      <img className="entry-image" src={ getImgaeBlob(entry.picture) } alt=""/>
      <label className="text size-14">{entry.title}</label>
    </div>
  ));
};

const getImgaeBlob = function(blob) {
  return 'data:image/png;base64,' + blob;
}

export default function Admin() {
  const [user, setUser] = useState(null),
  [blogEntries, setBlogEntries] = useState(null),
  gCid="237595745573-poendb74l7cukb9hnac72shmd5hl2e9a.apps.googleusercontent.com",
	login = (response) => {
    response && setUser(response.profileObj);
	},
	logout = (response) => {
		setUser(null)
  };

  useEffect(() => {
    getBlogEntries().then(entries => setBlogEntries(entries));
  }, []);

  return (
    <div className="admin">
        <div className={`login-background ${ user && 'logged-in'}`}></div>
        <div className={`login-box ${ user && 'logged-in'}`}>
          <GoogleLogin
            clientId={gCid}
            buttonText="Google login"
            onSuccess={login}
            onFailure={logout}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        </div>
        <div className={`admin-wrapper ${ user && 'logged-in'}`}>
          <div className="nav-bar">
            <GoogleLogout
              clientId={gCid}
              buttonText='Google Logout'
              onLogoutSuccess={ logout }
              onFailure={ login }
            />
          </div>
          <div className="content">
            <div className="side-bar">
              <button onClick={() => { createNewEntry(setBlogEntries)} } className="btn btn-primary">Új bejegyzés</button>
              <button className="btn btn-secondary">Bejegyzések</button>
            </div>
            <div className="stuff">
              {blogEntries && <BlogEntries entries={blogEntries}/>}
            </div>
          </div>
        </div>
    </div>
  );
}

function createNewEntry(setBlogEntries) {
  const  requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: 'add_entry',
      payload: {},
    }),
  };

  fetch("https://omisk/admin.php", requestOptions)
  .then(response => response.json())
  .then(data => getBlogEntries().then(entries => setBlogEntries(entries)) );
}

function getBlogEntries() {
  const  requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: 'get_entries',
      payload: {},
    }),
  };

  return fetch("https://omisk/admin.php", requestOptions)
  .then(response => response.json())
  .then((data) => { return data});
}
