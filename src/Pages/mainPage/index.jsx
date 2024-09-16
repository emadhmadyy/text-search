import { useEffect, useState } from "react";
import Article from "../../Components/article";
import TextField from "../../Components/textField";
import articles from "../../data/articles.json";
const MainPage = () => {
  const [articlesArr, setArticlesArr] = useState(articles);
  const [searchTerm, setSearchTerm] = useState("");
  const [articlesCount, setArticlesCount] = useState(null);
  useEffect(() => {
    const filteredArticles = articles.filter((a) => {
      return (
        a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setArticlesArr(filteredArticles);
    setArticlesCount(filteredArticles.length);
  }, [searchTerm]);
  const highlightText = (text, searchTerm) => {
    if (!searchTerm.trim()) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  return (
    <>
      <h1 className="page-title">Search</h1>
      <TextField
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        onClickDeleteButton={() => setSearchTerm("")}
      ></TextField>
      {searchTerm != "" && (
        <p>
          <span style={{ fontWeight: "bold" }}>
            {articlesCount == 0 ? "no posts" : `${articlesCount} posts `}
          </span>{" "}
          were found
        </p>
      )}

      {articlesArr.map((a, i) => {
        return (
          <Article
            key={i}
            title={highlightText(a.title, searchTerm)}
            date={a.date}
            text={highlightText(a.text, searchTerm)}
          ></Article>
        );
      })}
    </>
  );
};
export default MainPage;
