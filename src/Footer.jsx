import React from "react";

export const Footer = () => {
  return (
    <footer className="card" id="footer">
      <h1 className="title_secondary">Connect with me on</h1>
      <ul>
        <li className="github social">
          <a
            rel="noopener noreferrer"
            href="https://github.com/sanjitsarkar"
            target="_blank"
          >
            <img
              src="https://sanjitsarkar.tk/_next/image?url=%2Fimg%2Ficons%2Fgithub.svg&w=48&q=75"
              alt=""
              srcSet=""
            />
          </a>
        </li>
        <li className="linkedin social">
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/sanjit-sarkar/"
            target="_blank"
          >
            <img
              src="https://sanjitsarkar.tk/_next/image?url=%2Fimg%2Ficons%2Flinkedin.svg&w=48&q=75"
              alt=""
              srcSet=""
            />
          </a>
        </li>
        <li className="twitter social">
          <a
            rel="noopener noreferrer"
            href="https://twitter.com/XanjitXarkar"
            target="_blank"
          >
            <img
              src="https://sanjitsarkar.tk/_next/image?url=%2Fimg%2Ficons%2Ftwitter.svg&w=48&q=75"
              alt=""
              srcSet=""
            />
          </a>
        </li>
        <li className="codepen social">
          <a
            rel="noopener noreferrer"
            href="https://codepen.io/sanjitbrwnsmith"
            target="_blank"
          >
            <img
              src="https://sanjitsarkar.tk/_next/image?url=%2Fimg%2Ficons%2Fcodepen.svg&w=48&q=75"
              alt=""
              srcSet=""
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};
