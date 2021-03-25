import React, { useState, useEffect } from "react";

import { GoogleLogin, GoogleLogout } from "react-google-login";

import "../assets/css/admin.css";
import pagesConfig from "../assets/pagesConfig";
import { BlogWrapper } from "../components/admin/BlogWrapper";
import { getBlogEntries, createNewEntry } from "../components/admin/helper";

export default function Admin() {
  const [user, setUser] = useState(null),
    [blogEntries, setBlogEntries] = useState(null),
    gCid =
      "237595745573-poendb74l7cukb9hnac72shmd5hl2e9a.apps.googleusercontent.com",
    login = (response) => {
      response && ['bestrapboy@gmail.com', 'ati.csordas@gmail.com'].includes(response.profileObj.email) && setUser(response.profileObj);
    },
    logout = (response) => {
      setUser(null);
    };

  useEffect(() => {
    const fetchData = async () => {
      const result =
        (await getBlogEntries().catch((err) => console.log(err))) ||
        pagesConfig.blog.cards;
      setBlogEntries(result);
    };
    fetchData();
  }, []);

  return (
    <div className="admin">
      <div className={`login-background ${user && "logged-in"}`}></div>
      <div className={`login-box ${user && "logged-in"}`}>
        <GoogleLogin
          clientId={gCid}
          buttonText="Google login"
          onSuccess={login}
          onFailure={logout}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
      <div className={`admin-wrapper ${user && "logged-in"}`}>
        <div className="nav-bar">
          <GoogleLogout
            clientId={gCid}
            buttonText="Google Logout"
            onLogoutSuccess={logout}
            onFailure={login}
          />
        </div>
        <div className="content">
          <div className="stuff">
            {blogEntries && <BlogWrapper entries={blogEntries} />}
          </div>
          <div className="side-bar">
            <button
              onClick={() => {
                createNewEntry(setBlogEntries);
              }}
              className="btn btn-primary"
            >
              Új bejegyzés
            </button>
            <button className="btn btn-secondary">Bejegyzések</button>
          </div>
        </div>
      </div>
    </div>
  );
}
