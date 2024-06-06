import { useState } from 'react';
const TextArea = ({longText}) => {
  const [v, setV] = useState('');
  function sendText(event){
    if (event.key === 'Enter' || event.keyCode === 13) {
        longText(event.target.value);
        setV('');
    }
  }
  function handleChange(e){
    setV(e.target.value);
  }
  return (
    <textarea
      className="w-full block p-1 border-2 border-gray-300 rounded"
      onKeyDown={sendText}
      onChange={handleChange}
      value={v}
      id="story"
      name="story"
      rows="3"
      placeholder="Type1 your question for ChatTutor and press enter. Use shift+enter for linebreaks."></textarea>
  );
};

export default TextArea;
