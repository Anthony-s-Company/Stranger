import "./App.css";
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/login" element={<LoginForm />} />
        <Route path="/account/register" element={<RegisterForm />} />
      </Routes>
    </>
  );
}

