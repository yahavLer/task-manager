import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import RegistrationPage from "./pages/registrationPage";
import { TaskPage } from "./pages/TaskPage";
import TasksLayout from "./pages/TasksLayout";
import NewTaskPage from "./pages/NewTaskPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        <Route path="/tasks" element={<TasksLayout />}>
          <Route index element={<TaskPage />} />
          <Route path="create" element={<NewTaskPage />} />
        </Route>
      </Routes>    
    </BrowserRouter>
  );
}

