import { Routes, Route } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import App from "./App";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/task" element={<TaskPage />} />
    </Routes>
  );
}
