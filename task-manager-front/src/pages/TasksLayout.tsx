import { Outlet } from "react-router-dom";
import TaskNavBar from "../components/TaskNavBar";

export default function TasksLayout() {
  return (
    <div>
      <TaskNavBar />
      <div style={{ padding: "0 16px" }}>
        <Outlet />
      </div>
    </div>
  );
}