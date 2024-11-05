import React, { useCallback, useEffect, useState } from "react";
// import img from "../../assets/images/avatars/politic.jpg";
// import img1 from "../../assets/images/avatars/Katendoe.jpg";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [PostItems, setPostItems] = useState([]);
  const getPostData = useCallback(async () => {
    await fetch(`http://localhost:8080/api/post/getEnablePost`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPostItems(data.enablePost);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [setPostItems]);

  const [authorItems, setAuthorItems] = useState([]);
  const getAuthorData = useCallback(async () => {
    await fetch(`http://localhost:8080/api/author/getEnableAuthor`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAuthorItems(data.author);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [setAuthorItems]);

  useEffect(() => {
    getPostData();
    getAuthorData();
  }, [getPostData, getAuthorData]);

  return (
    <>
      {/*  */}
      <div className="transition duration-150 ease-out md:ease-in"></div>
      <div className="flex justify-center item-center min-h-screen flex-wrap mt-5">
        <div className="flex-1 max-w-10xl p16">
          <div className="grid grid-cols2 grid-rows-3 gap grid-flow-row-dense lg:grid-cols-3">
            {PostItems.map((enablePost) => (
              <>
                <div
                  className="p-3 pr-6 bg-white border-transparent rounded-md shadow-md space-y-2"
                  key={enablePost._id}
                >
                  <div className="relative overflow-hidden rounded-md">
                    <img
                      src={`http://localhost:8080/${enablePost.postImg}`}
                      //   src={`localhost:`img}
                      className="card-img-top rounded-lg transition duration-500 ease-in-out hover:scale-110"
                      alt="politic"
                    />
                  </div>
                  <div className="m-4">
                    <div>
                      <ul className="meta list-inline mb-0">
                        {authorItems.map((author) => (
                          <>
                            <li className="list-inline-item" key={author._id}>
                              <img
                                src={`http://localhost:8080/${author.img}`}
                                className="avatar h-10 w-10 rounded-full mx-3"
                                alt=""
                              />
                              <NavLink to="/" className="font-normal mx-2">
                                {enablePost.authorName}
                              </NavLink>
                            </li>
                            <li className="list-inline-item font-bold text-current text-stone-500">
                              {author.date.slice(0, 10)}
                            </li>
                          </>
                        ))}
                      </ul>
                      <NavLink to="/" className="">
                        <h5 className="text-xl font-bold mb-3 mt-3">
                          {enablePost.title}
                        </h5>
                      </NavLink>
                    </div>

                    <p className="text-neutral-500">
                      {enablePost.shortDescription},etc...
                    </p>
                  </div>
                </div>
              </>
            ))}

            {/*  */}
            {/* <div className="p-4 pr-6 bg-white border-l-8 border-transparent rounded-md shadow-md space-y-2">
              <h2 className="text-lg font-semibold leading-6 ">
                home renovations
              </h2>
              <p className="text-gray-600">
                A place to keep track of all renovation going around the house
              </p>
            </div>
            <div className="p-4 pr-6 bg-white border-l-8 border-transparent rounded-md shadow-md space-y-2">
              <h2 className="text-lg font-semibold leading-6 ">
                home renovations
              </h2>
              <p className="text-gray-600">
                A place to keep track of all renovation going around the house
              </p>
            </div>
            <div className="p-4 pr-6 bg-white border-l-8 border-transparent rounded-md shadow-md space-y-2">
              <h2 className="text-lg font-semibold leading-6 ">
                home renovations
              </h2>
              <p className="text-gray-600">
                A place to keep track of all renovation going around the house
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
