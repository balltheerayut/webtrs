import React from "react";
import myImage from "../assets/meB.jpg";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 6,
      }}
    >

      <img
        src={myImage}
        alt="My Profile"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "40px",
          objectFit: "cover",
        }}
      />

      <Typography variant="h4" sx={{ mt: 3 }}>
        Welcome to My Web Portfolio!
      </Typography>
      <Typography variant="h4" sx={{ mt: 1 }}>
        ยินดีต้อนรับสู่เว็ปพอร์ตโฟลิโอ
      </Typography>
      {/* เพิ่มข้อความต่อจากยินดีต้อนรับ */}
      <Typography variant="body1" sx={{ mt: 2, fontSize: "1.3rem" }}>
      Hello! My name is Teerayut Sangthong.
      I am a student in the Electronics Technology (ECT) 
      program at King Mongkut's University of Technology North Bangkok (KMUTNB).
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, fontSize: "1.3rem" }}>
      สวัสดี ผมชื่อ ธีรยุทธ สังข์ทอง
      เป็นนักศึกษาสาขาวิชา เทคโนโลยีอิเล็กทรอนิกส์ (ECT)
      ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)
      </Typography>
    </Box>
  );
};

export default Home;
