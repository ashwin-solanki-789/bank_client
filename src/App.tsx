import { Navigate, Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import PrivateRoute from "./components/Auth/PrivateRoute";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Overview from "./components/Dashboard/Overview";
import Profile from "./components/Dashboard/Profile";
import Support from "./components/Dashboard/Support";

function App() {
  return (
    <Routes>
      <Route path={paths.home} element={<Navigate to={paths.auth.signIn} />} />
      <Route path={paths.auth.signIn} element={<SignIn />} />
      <Route path={paths.auth.signUp} element={<SignUp />} />
      <Route element={<PrivateRoute />}>
        <Route path={paths.dashboard.overview} element={<Overview />} />
        <Route path={paths.dashboard.profile} element={<Profile />} />
        <Route path={paths.dashboard.support} element={<Support />} />
      </Route>
    </Routes>
  );
}

export default App;
