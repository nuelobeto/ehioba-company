import {
  PostCard,
  PostContent,
  PostDetails,
  PostImage,
  PostTitle,
  ReadMore,
} from "./style";
import {
  AiFillCalendar,
  AiFillClockCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";
import HtmlParser from "../html-parser/HtmlParser";
import { PostT } from "../../types/types";
import { formatStrDate } from "../../utils/date";
import { useNavigate } from "react-router";
import { ROUTES } from "../../app-navigation/routes";

type PostProps = {
  post: PostT;
};

const Post = ({ post }: PostProps) => {
  const navigate = useNavigate();
  const readingTime = Math.ceil(post.content.length / 200);

  return (
    <PostCard onClick={() => navigate(`${ROUTES.post_details}/${post.id}`)}>
      <PostImage src={post.image} />
      <PostDetails>
        <div>
          <AiFillCalendar /> {formatStrDate(post.date)}
        </div>
        <div>
          <AiFillClockCircle /> {readingTime} min{readingTime > 1 && "s"} read
        </div>
      </PostDetails>
      <PostTitle>{post.title}</PostTitle>
      <PostContent>
        <HtmlParser htmlString={post.content} />
      </PostContent>
      <ReadMore>
        <p>Read More</p> <AiOutlineArrowRight />
      </ReadMore>
    </PostCard>
  );
};

export default Post;
