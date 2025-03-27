import React from "react";
import myImage from "../assets/meB.jpg";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",  // จัดให้คอนเทนต์อยู่ในรูปแบบ column
        alignItems: "center",     // จัดให้อยู่กลางในแนวนอน
        justifyContent: "center", // จัดให้อยู่กลางในแนวตั้ง
        height: "100vh",          // ให้สูงเต็มหน้าจอ
        textAlign: "center",      // ข้อความจะถูกจัดกลาง
        padding: { xs: "20px", sm: "100px", md: "130px" },  // ปรับ padding สำหรับหน้าจอที่ต่างกัน
      }}
    >
      <img
        src={myImage}
        alt="My Profile"
        style={{
          width: "300px",  // ความกว้างของรูปภาพ
          height: "300px", // ความสูงของรูปภาพ
          borderRadius: "20%", // รูปทรงกลม
          objectFit: "cover", // ทำให้รูปภาพไม่ผิดสัดส่วน
        }}
      />

      <Typography variant="h4" sx={{ mt: 3 }}>
        Welcome to My Web Portfolio!
      </Typography>
      <Typography variant="h4" sx={{ mt: 1 }}>
        ยินดีต้อนรับสู่เว็ปพอร์ตโฟลิโอ
      </Typography>

      <Typography variant="body1" sx={{ mt: 2, fontSize: { xs: "1rem", sm: "1.3rem" } }}>
        Hello! My name is Teerayut Sangthong. I am a student in the Electronics Technology (ECT)
        program at King Mongkut's University of Technology North Bangkok (KMUTNB).
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, fontSize: { xs: "1rem", sm: "1.3rem" } }}>
        สวัสดี ผมชื่อ ธีรยุทธ สังข์ทอง เป็นนักศึกษาสาขาวิชา เทคโนโลยีอิเล็กทรอนิกส์ (ECT)
        ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)
      </Typography>
    </Box>
  );
};

export default Home;
