import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<h1>Hello world!</h1>} />
    </Routes>
  );
};

export default AppRoutes;
