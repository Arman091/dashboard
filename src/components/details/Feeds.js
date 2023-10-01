// import React from "react";



import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Feeds({user}) {
  const [visibleFeeds, setVisibleFeeds] = useState(4);

  const communityFeeds = user.feeds.communityFeeds

  const handleShowMoreClick = () => {
    setVisibleFeeds(visibleFeeds + 4);
  };

  return (
    <div>
      <div className="mt-25">
        <h2 className="text-xl font-semibold mb-4 font-sans">
          Communities Feed
        </h2>
        <div>
          {communityFeeds.slice(0, visibleFeeds).map((feed, index) => (
            <div
              key={index}
              className="flex items-start mb-3 w-10/12 m-auto-15 cursor-pointer"
            >
              <img
                src={feed.image}
                alt={feed.name}
                className="w-6 h-6 rounded-full mr-0.5"
              />
              <div className="ml-1">
                <p className="text-1 font-sans font-medium">{feed.name}</p>
                <p className="text-xs pb-0 text-left text-slate-400 font-sans">
                  {feed.members} members
                </p>
              </div>
            </div>
          ))}
        </div>
        {visibleFeeds < communityFeeds.length && (
          <button
            className="mt-1 ml-12 flex items-center text-slate-400"
            onClick={handleShowMoreClick}
          >
            <span>Show {communityFeeds.length - visibleFeeds} More</span>
            <ExpandMoreIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default Feeds;
