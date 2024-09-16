import "./style.css";
// eslint-disable-next-line react/prop-types
const TextField = ({ value, onChange, onClickDeleteButton }) => {
  return (
    <>
      <div className="input-with-button">
        <input
          type="text"
          placeholder="Type something..."
          className="search-field"
          value={value}
          onChange={onChange}
        />
        <img
          src="circled-x.png"
          className="circled-x"
          onClick={onClickDeleteButton}
        />
      </div>
    </>
  );
};
export default TextField;
