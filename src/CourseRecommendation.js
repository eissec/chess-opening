export const CourseRecommendation = ({ recommendation }) => {
  return (
    <div className="course-rec">
      <a className={"course-recommendation"} href={recommendation.Url}>
        <img className="courseImg" src={recommendation.Image} />
      </a>
      <span>{recommendation.Title}</span>
    </div>
  );
};
