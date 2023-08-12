import useAuth from "../../store/useAuth";
import { Container } from "../Navbar/styles";
import { AddNewPostBtn, Nav, NavContent } from "./style";
import { FiPlusCircle } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

type NavProps = {
  setOpenTextEditor: React.Dispatch<React.SetStateAction<boolean>>;
};

const AdminNav = ({ setOpenTextEditor }: NavProps) => {
  const { logout } = useAuth((state) => state);

  return (
    <Nav>
      <NavContent style={Container}>
        <h1>Admin Dashboard</h1>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <AddNewPostBtn onClick={() => setOpenTextEditor(true)}>
            <span>Add New Post</span> <FiPlusCircle />
          </AddNewPostBtn>
          <AddNewPostBtn onClick={logout}>
            <span>Logout</span> <BiLogOut />
          </AddNewPostBtn>
        </div>
      </NavContent>
    </Nav>
  );
};

export default AdminNav;
