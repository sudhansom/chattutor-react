const Select = () => {
  return (
    <div>
      <select
        className="w-60 px-2 py-1 border rounded"
        name="pdf"
        id="pdf-select">
        <option value="pdf">-- Select a file --</option>
        <option value="pdf_2">pdf 1</option>
        <option value="pdf_3">pdf 2</option>
        <option value="pdf_4">pdf 3</option>
        <option value="pdf_5">pdf 4</option>
        <option value="pdf_6">pdf 5</option>
        <option value="pdf_7">pdf 6</option>
      </select>
    </div>
  );
};

export default Select;
