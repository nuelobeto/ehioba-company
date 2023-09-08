import { Link, useNavigate } from "react-router-dom";
import {
  AuthBody,
  // AuthFooter,
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
import { toast } from "react-toastify";
import { ResetPasswordT } from "../../types/types";
import { FaSpinner } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const ResetPassword = () => {
  const { resetPassword, user, loading } = useAuth((state) => state);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();

  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.email !== "ehioba@admin.com") {
      toast.error("Invalid Credentials");
      return;
    }

    if (formData.password !== formData.confirm_password) {
      toast.error("Passwords mismatch!");
      return;
    }

    const payload: ResetPasswordT = {
      email: formData.email,
      password: formData.password,
    };

    resetPassword(payload);
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
      <AuthForm onSubmit={handleResetPassword}>
        <AuthHeader>
          <h1>Update Password</h1>
          <p>
            Forgot your password? <br /> Create a new one
          </p>
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
            {!loading ? "Update Password" : <FaSpinner className="spinner" />}
          </SubmitBtn>
        </AuthBody>

        {/* <AuthFooter>
          <p>
            Don't have an account? <Link to={ROUTES.register}>Sign Up</Link>
          </p>
        </AuthFooter> */}
      </AuthForm>
    </AuthWrapper>
  );
};

export default ResetPassword;
