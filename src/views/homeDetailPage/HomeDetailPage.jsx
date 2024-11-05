import React, { useCallback, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import HomeTitle from "./HomeTitle";

export default function HomeDetailPage() {
  const location = useLocation();
  let postID = location.state.postId;

  const [detailPageData, setDetailPageData] = useState({});

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
        setDetailPageData(data.postData);
      } catch (err) {
        console.error("Error during deletion:", err);
      }
    },
    [postID]
  );

  useEffect(() => {
    getPostData(postID);
  }, [getPostData]);

  return (
    <>
      <HomeTitle />
      <div className="mt-5">
        <div
          dangerouslySetInnerHTML={{ __html: detailPageData.postDescriptions }}
        />
      </div>
    </>
  );
}
