import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeContextProvider } from "./ThemeContext";
import LoadingPage from "./components/LoadingPage"; // นำเข้าหน้าโหลด

function App() {
  const [loading, setLoading] = useState(true); // สถานะการโหลด

  // เมื่อเริ่มต้น เราจะตั้งเวลา 3 วินาทีเพื่อแสดงหน้าโหลด
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // เปลี่ยนสถานะให้โหลดเสร็จหลังจาก 3 วินาที
    }, 2500);
  }, []);

  return (
    <ThemeContextProvider>
      <Router>
        {loading ? (
          // ถ้ายังโหลดอยู่ ให้แสดงหน้าโหลด
          <LoadingPage />
        ) : (
          // เมื่อโหลดเสร็จแล้วให้แสดงเนื้อหา
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        )}
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
