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

type PostProps = {
  post: PostT;
};

const Post = ({ post }: PostProps) => {
  return (
    <PostCard>
      <PostImage src={post.image} />
      <PostDetails>
        <div>
          <AiFillCalendar /> {formatStrDate(post.date)}
        </div>
        <div>
          <AiFillClockCircle /> 5 mins read
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
