import { Link, useNavigate } from "react-router-dom";
import {
  AuthBody,
  AuthFooter,
  AuthForm,
  AuthHeader,
  AuthNav,
  AuthWrapper,
  FormGroup,
  SubmitBtn,
} from "./style";
import { ROUTES } from "../../app-navigation/routes";
import { useEffect, useState } from "react";
import useAuth from "../../store/useAuth";
import { LoginT } from "../../types/types";
import { FaSpinner } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const Login = () => {
  const { login, user, loading } = useAuth((state) => state);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: LoginT = {
      email: formData.email,
      password: formData.password,
    };

    login(payload);
  };

  useEffect(() => {
    if (user) {
      navigate(ROUTES.admin);
    }
  }, [user, navigate]);

  return (
    <AuthWrapper>
      <AuthNav>
        <Link to={ROUTES.home}>
          <BiArrowBack />
          Back to Website
        </Link>
      </AuthNav>
      <AuthForm onSubmit={handleLogin}>
        <AuthHeader>
          <h1>Log In</h1>
          <p>Log In to access your account</p>
        </AuthHeader>

        <AuthBody>
          <FormGroup>
            <label>Email:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <label>Password:</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </FormGroup>
          <SubmitBtn>
            {!loading ? "Log In" : <FaSpinner className="spinner" />}
          </SubmitBtn>
        </AuthBody>

        <AuthFooter>
          <Link to={ROUTES.reset_password}>Forgot Password?</Link>
          <p>
            Don't have an account? <Link to={ROUTES.register}>Sign Up</Link>
          </p>
        </AuthFooter>
      </AuthForm>
    </AuthWrapper>
  );
};

export default Login;
