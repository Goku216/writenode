import { Routes, Route } from "react-router-dom";
import { HomePage, CreatePost, PageNotFound } from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = ({ toggle, setToggle }) => {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<HomePage toggle={toggle} setToggle={setToggle} />}
        />
        <Route
          path="create"
          element={
            <ProtectedRoutes>
              <CreatePost />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};
