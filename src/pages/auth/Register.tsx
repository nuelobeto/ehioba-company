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
import useAuth from "../../store/useAuth";
import { useEffect, useState } from "react";
import { RegisterT } from "../../types/types";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const Register = () => {
  const { register, user, loading } = useAuth((state) => state);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      toast.error("Passwords mismatch!");
      return;
    }

    const payload: RegisterT = {
      email: formData.email,
      password: formData.password,
    };

    register(payload);
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
      <AuthForm onSubmit={handleRegister}>
        <AuthHeader>
          <h1>Sign Up</h1>
          <p>Sign up to create an account</p>
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
          <FormGroup>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={formData.confirm_password}
              onChange={(e) =>
                setFormData({ ...formData, confirm_password: e.target.value })
              }
            />
          </FormGroup>
          <SubmitBtn>
            {!loading ? "Sign Up" : <FaSpinner className="spinner" />}
          </SubmitBtn>
        </AuthBody>

        <AuthFooter>
          <p>
            Already have an account? <Link to={ROUTES.login}>Log In</Link>
          </p>
        </AuthFooter>
      </AuthForm>
    </AuthWrapper>
  );
};

export default Register;
