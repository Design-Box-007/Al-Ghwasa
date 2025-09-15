import React from "react";

interface VideoTitleProps {
  titles: string[];
}

const VideoTitle: React.FC<VideoTitleProps> = ({ titles }) => {
  return (
    <div className="py-4 px-10 grid md:grid-cols-3 grid-cols-2 gap-5">
      {titles.map((title, index) => (
        <button
          key={index}
          className="bg-[#E9E8E8] text-center text-gray-700 p-2.5 md:text-2xl text-xl rounded-md hover:bg-gray-300 transition cursor-pointer"
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default VideoTitle;
