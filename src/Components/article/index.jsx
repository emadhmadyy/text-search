import "./style.css";
// eslint-disable-next-line react/prop-types
const Article = ({ title, date, text }) => {
  return (
    <>
      <div className="article-container">
        <h1 className="article-title">{title}</h1>
        <i className="article-date">{date}</i>
        <p className="article-text">{text}</p>
      </div>
    </>
  );
};
export default Article;
