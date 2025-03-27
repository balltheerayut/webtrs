import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import myImage from "../assets/B.jpg"; // ใส่รูป B.jpg

// นำเข้ารูปภาพสำหรับทักษะต่าง ๆ
import javaLogo from "../assets/java.jpg";
import cssLogo from "../assets/css.jpg";
import cppLogo from "../assets/cpp.jpg";
import pythonLogo from "../assets/python.jpg";
import photoshopLogo from "../assets/photoshop.jpg";
import sonyVegasLogo from "../assets/sv.jpg";

// นำเข้าไฟล์ gif และ mp3
import oiaGif from "../assets/oia.gif";
import oiaSound from "../assets/oiaa.mp3";

const About = () => {
  const [audio] = useState(new Audio(oiaSound)); // สร้าง Audio object
  const openResume = () => {
    window.open(require("../assets/re.pdf"), "_blank");
  };

  const openTranscript = () => {
    window.open(require("../assets/trs.pdf"), "_blank");
  };

  // ฟังก์ชันสำหรับเล่นเสียง
  const playSound = () => {
    audio.play();
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 6, // เว้นระยะห่างจากแทบบน
      }}
    >
      {/* รูปภาพ */}
      <img
        src={myImage}
        alt="My Profile"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />

      {/* ปุ่มสำหรับเปิด PDF */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "orange",
            color: "#fff",
            fontSize: "1rem",
            width: "150px", // กำหนดขนาดให้ปุ่มเท่ากัน
            "&:hover": { backgroundColor: "#ff9800" },
          }}
          onClick={openResume}
        >
          Resume
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2196f3",
            color: "#fff",
            fontSize: "1rem",
            width: "150px", // กำหนดขนาดให้ปุ่มเท่ากัน
            "&:hover": { backgroundColor: "#1976d2" },
          }}
          onClick={openTranscript}
        >
          Transcript
        </Button>
      </Box>

      {/* ข้อความใต้ปุ่ม */}
      <Typography variant="h2" sx={{ mt: 4, color: "#666" }}>
        My Skill
      </Typography>

      {/* แสดงรูปภาพทักษะต่าง ๆ */}
      <Grid container spacing={4} sx={{ justifyContent: "center", mt: 3 }}>
        <Grid item>
          <img src={javaLogo} alt="Java" style={{ width: "50px", height: "50px" }} />
        </Grid>
        <Grid item>
          <img src={cssLogo} alt="CSS" style={{ width: "50px", height: "50px" }} />
        </Grid>
        <Grid item>
          <img src={cppLogo} alt="C++" style={{ width: "50px", height: "50px" }} />
        </Grid>
        <Grid item>
          <img src={pythonLogo} alt="Python" style={{ width: "50px", height: "50px" }} />
        </Grid>
        <Grid item>
          <img src={photoshopLogo} alt="Photoshop" style={{ width: "50px", height: "50px" }} />
        </Grid>
        <Grid item>
          <img src={sonyVegasLogo} alt="Sony Vegas" style={{ width: "50px", height: "50px" }} />
        </Grid>
      </Grid>

      {/* GIF ที่มุมขวาล่าง */}
      <Box
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
        }}
        onClick={playSound} // คลิกที่ GIF เพื่อเล่นเสียง
      >
        <img src={oiaGif} alt="OIA GIF" style={{ width: "150px", height: "150px" }} />
      </Box>
    </Box>
  );
};

export default About;
