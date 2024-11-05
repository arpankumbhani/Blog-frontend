import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const HomeTitle = () => {
  const location = useLocation();

  let postID = location.state.postId;

  const [homeData, setHomeData] = useState({
    authorData: "",
    postData: "",
  });

  // console.log(homeData);
  const getPostData = useCallback(
    async (postID) => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/post/getPostDataById`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ postID }),
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setHomeData((prevData) => ({
          ...prevData,
          postData: data.postData,
        }));
      } catch (err) {
        console.error("Error during deletion:", err);
      }
    },
    [postID]
  );

  let authorID = location.state.authorId;
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
        setHomeData((prevData) => ({
          ...prevData,
          authorData: data.authorData,
        }));
      } catch (err) {
        console.error("Error during deletion:", err);
      }
    },
    [authorID]
  );

  useEffect(() => {
    getPostData(postID);
    getAuthorData(authorID);
  }, [getPostData, getAuthorData]);

  return (
    <>
      <div>
        <div className="	text-[#707a88]">
          <NavLink to="/home" className="hover:text-blue-500 hover:underline">
            Home{" "}
          </NavLink>
          / {homeData.postData.title}
        </div>
        <div className="mt-4 text-5xl font-bold">{homeData.postData.title}</div>

        <div className="mt-4">
          <>
            <li className="list-inline-item" key={homeData.authorData._id}>
              <img
                src={`http://localhost:8080/${homeData.authorData.img}`}
                className="avatar h-9 w-9 rounded-full mx-3"
                alt=""
              />
              {homeData.authorData && (
                <NavLink
                  to={`/home/author/${homeData.authorData.authorURLKey}`}
                  state={`${homeData.authorData._id}`}
                  className="font-normal mx-2"
                >
                  {homeData.authorData.name}
                </NavLink>
              )}
            </li>
            <li className="list-inline-item font-bold text-current text-stone-500">
              {homeData.authorData && homeData.authorData.date.slice(0, 10)}
            </li>
          </>
        </div>
      </div>
    </>
  );
};

export default HomeTitle;
