export const CourseRecommendation = ({recommendation}) => {
	return (
		<a
			className={"course-recommendation"}
			href={recommendation.Url}
			style={{backgroundImage: `url(${recommendation.Image})`}}
		>
			<span>{recommendation.Title}</span>
		</a>
	);
}
