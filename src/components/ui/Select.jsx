const Select = () => {
  return (
    <div>
      <select
        className="w-60 px-2 py-1 border-2 rounded"
        name="pdf"
        id="pdf-select">
        <option value="pdf">-- Select a file --</option>
        <option value="pdf_2">023ex_Python.pdf</option>
        <option value="pdf_3">1023ex_Python.pdf</option>
        <option value="pdf_4">2023ex_Python.pdf</option>
        <option value="pdf_5">Lecture_9.pdf</option>
        <option value="pdf_6">Lecture_10.pdf</option>
        <option value="pdf_7">Lecture_11.pdf</option>
      </select>
    </div>
  );
};

export default Select;
