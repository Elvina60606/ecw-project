import { useParams } from "react-router";
import newsCategories from "../../../data/newsCategories";

const News = () => {
  const { newsCategory } = useParams();

  const currentCategory = newsCategories.filter((c) => c.id === newsCategory);
  const categoryToShow =
    newsCategory === "all_news"
      ? newsCategories.filter((c) => c.id !== newsCategory)
      : currentCategory;

  return (
    <>
      {categoryToShow.map((c) => (
        <div
          className="border border-2 border-warning-subtle rounded-4 p-4 p-md-6 mb-4"
          key={c.id}
        >
          <div className="border-dashed mb-4">
            <h2 className="mb-2">{c.content.beginDate}</h2>
            <h4 className="mb-4">{c.content.title}</h4>
          </div>
          {c.content.description.map((item) => (
            <p className="fs-4">{item}</p>
          ))}
        </div>
      ))}
    </>
  );
};
export default News;
