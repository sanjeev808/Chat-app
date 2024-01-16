import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import MainContainer from "./component/MainContainer";
import Welcome from "./component/Welcome";
import ChatArea from "./component/ChatArea";
import User_Group from "./component/User_Group";
import CreateGroup from "./component/CreateGroup";
import Groups from "./component/Groups";
import Register from "./component/Register";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="app" element={<MainContainer />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="chat" element={<ChatArea />} />
            <Route path="users" element={<User_Group />} />
            <Route path="groups" element={<Groups />} />

            <Route path="create-groups" element={<CreateGroup />} />
            {/* <Route path="chat" element={<ChatArea />} /> */}
          </Route>
        </Routes>
        {/* <Login /> */}
        {/* <MainContainer /> */}
      </div>
    </>
  );
}

export default App;
