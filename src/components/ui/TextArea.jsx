import React from "react";

const TextArea = () => {
  return (
    <textarea
      className="w-full block p-1 border border-slate-500 rounded"
      id="story"
      name="story"
      rows="3"
      placeholder="Type1 your question for ChatTutor and press enter. Use shift+enter for linebreaks."></textarea>
  );
};

export default TextArea;
