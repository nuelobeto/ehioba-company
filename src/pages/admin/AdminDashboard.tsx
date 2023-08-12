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

const AdminDashboard = () => {
  const { user } = useAuth((state) => state);
  const { posts, deletePost, deletingPost } = usePost((state) => state);
  const [openTextEditor, setOpenTextEditor] = useState(false);
  const [post, setPost] = useState<PostT | null>(null);

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

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.login);
    }
  }, [user]);

  return (
    <>
      <AdminNav setOpenTextEditor={setOpenTextEditor} />
      <Main>
        <div style={Container}>
          <Stats>
            <Stat>
              <img src={POSTS_IMG} alt="" />
              <h2>
                20 <br /> <span>Posts Created</span>
              </h2>
            </Stat>
            <Stat>
              <img src={INSIGHTS_IMG} alt="" />
              <h2>
                10 <br /> <span>Insight Posts created</span>
              </h2>
            </Stat>
            <Stat>
              <img src={BLOG_IMG} alt="" />
              <h2>
                10 <br /> <span>Blog Posts created</span>
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
              <Tbody>
                {posts.map((item, index) => (
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
            </Table>
          </TableWrapper>
        </div>
      </Main>
      {openTextEditor && (
        <TextEditor setOpenTextEditor={setOpenTextEditor} post={post} />
      )}
    </>
  );
};

export default AdminDashboard;
