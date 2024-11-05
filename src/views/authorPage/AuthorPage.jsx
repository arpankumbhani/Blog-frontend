import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import img from "../../assets/images/avatars/politic.jpg";
import "../authorPage/authorPage.css";
import { useState, useCallback, useEffect } from "react";

export default function AuthorPage() {
  const location = useLocation();
  //   console.log(localhost);

  let authorID = location.state;

  const [authorData, setAuthorData] = useState({});
  //   console.log(authorData, "hello");

  const getAuthorData = useCallback(
    async (authorID) => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/author/getAuthorById`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ authorID }),
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAuthorData(data.authorData);
      } catch (err) {
        console.error("Error during deletion:", err);
      }
    },
    [authorID]
  );

  const [authorPostData, setAuthorPostData] = useState([]);

  console.log(authorPostData, "authorPostData");

  const getAuthorPostData = useCallback(
    async (authorID) => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/post/getAuthorDetailPageData`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ authorID }),
          }
        );
        // console.log(authorID, "authorID");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data, "data");
        setAuthorPostData(data.authorsPostData);
      } catch (err) {
        console.error("Error during deletion:", err);
      }
    },
    [authorID]
  );

  useEffect(() => {
    getAuthorData(authorID);
    getAuthorPostData(authorID);
  }, [getAuthorData, getAuthorPostData]);

  return (
    <>
      <div className="container-xl bg-[#d4ddeb] p-3 rounded-lg">
        <div className="author-page about-author padding-30 rounded">
          <div className="thumb">
            <img
              src={`http://localhost:8080/${authorData.img}`}
              className="img"
              alt=""
            />
          </div>
          <div className="details">
            <h1 className="name mt-0 mb-2 font-bold">{authorData.name}</h1>
            <p className="text-neutral-500 mb-3">
              {authorData.shortDescription}
            </p>
            <ul className="social-icons list-unstyled list-inline mb-0">
              <li className="list-inline-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/watch?v=9VdFCP6nC-g&ab_channel=CarryMinati"
                  className="linkedIn social"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/arpankumbhani"
                  className="instagram social"
                >
                  <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/Arpan Patel/"
                  className="facebook social"
                >
                  <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/arpankumbhani"
                  className="github social"
                >
                  <FontAwesomeIcon icon={faGithub} size="1x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <div className="card-container mt-5">
          {authorPostData &&
            authorPostData.map((data) => (
              <>
                <div class="card rounded-lg bg-[#d4ddeb4a">
                  <div className="p-4 rounded-md frame " key={""}>
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src={`http://localhost:8080/${data.postImg}`}
                        className="postImg rounded-lg rounded-lg transition duration-500 ease-in-out hover:scale-110"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="m-4">
                      <ul className="meta list-inline mb-0">
                        <li className="list-inline-item" key={""}>
                          <img
                            className="avatar h-10 w-10 rounded-full mx-3"
                            src={`http://localhost:8080/${authorData.img}`}
                            alt=""
                          />
                          <NavLink
                            // to={`author/${author.authorURLKey}`}
                            // state={`${author._id}`}
                            className="font-normal mx-2 text-neutral-500"
                          >
                            {authorData.name}
                          </NavLink>
                        </li>
                        <li className="list-inline-item font-bold text-current text-stone-500">
                          {authorData.date && authorData.date.slice(0, 10)}
                        </li>
                      </ul>
                      <NavLink
                        to={`/home/${data.postURLKey}`}
                        // state={`${data._id}`}
                        state={{
                          postId: data._id,
                          authorId: data.authorId,
                        }}
                        // onClick={() =>
                        //   dispatch(handleClickEnablePost(enablePost.postDescriptions))
                        // }
                        className=""
                      >
                        <h5 className="text-xl font-bold mb-3 mt-3">
                          {data.title}
                        </h5>
                      </NavLink>
                      <p className="text-neutral-500">
                        {data.shortDescription}...
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
}
