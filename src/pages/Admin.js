import React, { useState, useEffect } from "react";

import { GoogleLogin, GoogleLogout } from "react-google-login";

import "../assets/css/admin.css";
import pagesConfig from "../assets/pagesConfig";
// import { BlogWrapper } from "../components/admin/BlogWrapper";
import { getBlogEntries, createNewEntry } from "../components/admin/helper";
import { TagSelect } from "../components/admin/TagSelect";
import { Title } from "../components/admin/Title";
import { EntryEditor } from "../components/admin/EntryEditor";

export default function Admin() {
  const [user, setUser] = useState(null),
    // eslint-disable-next-line
    [blogEntries, setBlogEntries] = useState(null),
    // eslint-disable-next-line
    [title, setTitle] = useState(""),
    // [pictureTitle, setpictureTitle] = useState(""),
    [textFirst, setTextFirst] = useState(""),
    [textSecond, setTextSecond] = useState(""),
    gCid =
      "237595745573-poendb74l7cukb9hnac72shmd5hl2e9a.apps.googleusercontent.com",
    login = (response) => {
      response &&
        response.profileObj &&
        response.profileObj.email &&
        ["bestrapboy@gmail.com", "ati.csordas@gmail.com"].includes(
          response.profileObj.email
        ) &&
        setUser(response.profileObj);
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

  function imageUpload(event) {
    debugger;
  }

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
            {/* {blogEntries && <BlogWrapper entries={blogEntries} />} */}
            <div>
              <div>
                <Title setTitle={setTitle} />
                <label>
                  <input type={"file"} onChange={(e) => imageUpload(e)} />
                </label>
                <TagSelect />
              </div>
              <h2>kép feletti szöveg</h2>
              <button
                onClick={() => {
                  console.log(textFirst);
                }}
              >
                katt
              </button>
              <EntryEditor setText={setTextFirst} />
            </div>
            <div>
              <h2>kép alatti szöveg</h2>
              <button
                onClick={() => {
                  console.log(textSecond);
                }}
              >
                katt
              </button>
              <EntryEditor setText={setTextSecond} />
            </div>
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
