import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Insights from "../pages/Insights/Insights";
import Blog from "../pages/Blog/Blog";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.about} element={<About />} />
      <Route path={ROUTES.contact} element={<Contact />} />
      <Route path={ROUTES.insights} element={<Insights />} />
      <Route path={ROUTES.blog} element={<Blog />} />
    </Routes>
  );
};

export default AppRoutes;
