import { BLOG_IMG, INSIGHTS_IMG, POSTS_IMG } from "../../assets/images";
import { Container } from "../../components/Navbar/styles";
import AdminNav from "../../components/admin-nav/AdminNav";
import { tableHeadData } from "../../utils/constants";
import {
  Main,
  Stat,
  Stats,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableWrapper,
  ActionBtn,
  SearchXFilter,
  SearchBar,
  Filter,
  NoTableData,
} from "./style";
import { BiEditAlt } from "react-icons/bi";
import { IoTrashBin } from "react-icons/io5";
import { sliceRangeStr } from "../../utils/strings";
import usePost from "../../store/usePost";
import { formatStrDate } from "../../utils/date";
import useAuth from "../../store/useAuth";
import { FaSpinner } from "react-icons/fa";
import { useEffect, useState } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import { PostT } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../app-navigation/routes";
import { MdSearch } from "react-icons/md";
import { searchPosts } from "../../utils/search-x-filter";

const AdminDashboard = () => {
  const { user } = useAuth((state) => state);
  const { posts, deletePost, deletingPost } = usePost((state) => state);
  const [openTextEditor, setOpenTextEditor] = useState(false);
  const [post, setPost] = useState<PostT | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<PostT[]>([]);
  const blogs = posts.filter((post) => post.category === "Blog");
  const insights = posts.filter((post) => post.category === "Insight");
  const numOfPosts = posts.length;
  const numOfBlogs = blogs.length;
  const numOfInsights = insights.length;

  const navigate = useNavigate();

  const handleDeletePost = (postId: string) => {
    if (user) {
      deletePost(postId, user.token);
    }
  };

  const initializeUpdate = (post: PostT) => {
    setPost(post);
    setOpenTextEditor(true);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFilteredPosts(searchPosts(posts, searchQuery));
  };

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.login);
    }
  }, [user]);

  useEffect(() => {
    if (posts.length !== 0) {
      setFilteredPosts(posts);
    }
  }, [posts]);

  useEffect(() => {
    setFilteredPosts(searchPosts(posts, category));
    setSearchQuery("");
  }, [category]);

  return (
    <>
      <AdminNav setOpenTextEditor={setOpenTextEditor} />
      <Main>
        <div style={Container}>
          <SearchXFilter>
            <SearchBar onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <MdSearch />
            </SearchBar>
            <Filter>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All</option>
                <option value="Blog">Blog</option>
                <option value="Insight">Insight</option>
              </select>
            </Filter>
          </SearchXFilter>

          <Stats>
            <Stat>
              <img src={POSTS_IMG} alt="" />
              <h2>
                {numOfPosts} <br />{" "}
                <span>Post{numOfPosts !== 1 && "s"} Created</span>
              </h2>
            </Stat>
            <Stat>
              <img src={INSIGHTS_IMG} alt="" />
              <h2>
                {numOfInsights} <br />{" "}
                <span>Insight Post{numOfInsights !== 1 && "s"} created</span>
              </h2>
            </Stat>
            <Stat>
              <img src={BLOG_IMG} alt="" />
              <h2>
                {numOfBlogs} <br />{" "}
                <span>Blog Post{numOfBlogs !== 1 && "s"} created</span>
              </h2>
            </Stat>
          </Stats>
        </div>

        <div style={Container}>
          <TableWrapper className="scroll">
            <Table>
              <Thead>
                <Tr>
                  {tableHeadData.map((item, index) => (
                    <Th key={index}>{item}</Th>
                  ))}
                </Tr>
              </Thead>
              {filteredPosts.length !== 0 && (
                <Tbody>
                  {filteredPosts.map((item, index) => (
                    <Tr key={index}>
                      <Td>{sliceRangeStr(item.id, 4, 4)}</Td>
                      <Td>{item.title}</Td>
                      <Td>{item.category}</Td>
                      <Td>{item.author}</Td>
                      <Td className="date">{formatStrDate(item.date)}</Td>
                      <Td>
                        <div className="action">
                          <ActionBtn
                            className="edit"
                            onClick={() => initializeUpdate(item)}
                          >
                            <BiEditAlt />
                          </ActionBtn>
                          <ActionBtn
                            className="delete"
                            onClick={() => handleDeletePost(item.id)}
                          >
                            {!deletingPost ? (
                              <IoTrashBin />
                            ) : (
                              <FaSpinner className="spinner" />
                            )}
                          </ActionBtn>
                        </div>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              )}
            </Table>
            {filteredPosts.length === 0 && (
              <NoTableData>No Table Data</NoTableData>
            )}
          </TableWrapper>
        </div>
      </Main>

      {openTextEditor && (
        <TextEditor
          setOpenTextEditor={setOpenTextEditor}
          post={post}
          setPost={setPost}
        />
      )}
    </>
  );
};

export default AdminDashboard;
