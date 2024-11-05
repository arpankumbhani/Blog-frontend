import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { handleClickEnablePost } from "../../redux/action/index";

import { NavLink } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();

  const [PostItems, setPostItems] = useState([]);
  const getPostData = useCallback(async () => {
    await fetch(`${process.env.REACT_APP_API_URL}api/post/getEnablePost`, {
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
    await fetch(`${process.env.REACT_APP_API_URL}api/author/getEnableAuthor`, {
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
      {/* <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(" + img1 + ")" }}
      > */}
      <div className="transition duration-150 ease-out md:ease-in"></div>
      <div className="flex justify-center item-center min-h-screen flex-wrap mt-5">
        <div className="flex-1 max-w-10xl p16">
          <div className="grid grid-cols2 grid-rows-3 gap-8 grid-flow-row-dense lg:grid-cols-3">
            {PostItems.map((enablePost) => (
              <>
                <div
                  className="p-3 pr-6 backdrop-blur-sm border-transparent rounded-md shadow-md hover:shadow-xl space-y-2 bg-[#e6ebf5b3] "
                  key={enablePost._id}
                >
                  <div className="relative overflow-hidden rounded-md">
                    {/* <NavLink to="" className="">
                      life style
                    </NavLink> */}
                    <img
                      src={`${process.env.REACT_APP_API_URL}${enablePost.postImg}`}
                      className="card-img-top rounded-lg transition duration-500 ease-in-out hover:scale-110"
                      alt=""
                    />
                  </div>
                  <div className="m-4">
                    <div>
                      <ul className="meta list-inline mb-0">
                        {authorItems.map((author) => (
                          <>
                            {author._id === enablePost.authorId && (
                              <>
                                <li
                                  className="list-inline-item"
                                  key={author._id}
                                >
                                  <img
                                    src={`${process.env.REACT_APP_API_URL}${author.img}`}
                                    className="avatar h-10 w-10 rounded-full mx-3"
                                    alt=""
                                  />
                                  <NavLink
                                    to={`author/${author.authorURLKey}`}
                                    state={`${author._id}`}
                                    className="font-normal mx-2"
                                  >
                                    {author.name}
                                  </NavLink>
                                </li>
                                <li className="list-inline-item font-bold text-current text-stone-500">
                                  {author.date.slice(0, 10)}
                                </li>
                              </>
                            )}
                          </>
                        ))}
                      </ul>
                      {/* {console.log(enablePost)} */}
                      {/* {enablePost.authorId === author._id ? author._id : ""} */}
                      <NavLink
                        to={`${enablePost.postURLKey}`}
                        // state={`${enablePost._id}`}
                        state={{
                          postId: enablePost._id,
                          authorId: enablePost.authorId,
                        }}
                        // onClick={() =>
                        //   dispatch(
                        //     handleClickEnablePost(enablePost.postDescriptions)
                        //   )
                        // }
                        className=""
                      >
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
          </div>
        </div>
      </div>
      {/* <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-700 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-700 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
