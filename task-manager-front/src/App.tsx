import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import RegistrationPage from "./pages/registrationPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>    
    </BrowserRouter>
  );
}