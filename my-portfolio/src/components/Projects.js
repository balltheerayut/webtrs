import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

const projects = [
  { title: "Web App", url: "https://github.com/balltheerayut/app8-1" },
  { title: "quiz-app", url: "https://github.com/balltheerayut/quiz-app" },
];

const Projects = () => {
  return (
    <Container sx={{ marginTop: "8vh" }}>
      <Typography variant="h3" gutterBottom>My Projects</Typography>
      {projects.map((project, index) => (
        <Card key={index} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none", 
                  color: "inherit", 
                  transition: "all 0.3s",
                  display: "inline-block", // ให้สามารถทำให้พื้นหลังดูเหมือนปุ่มได้
                  padding: "5px 10px", // เพิ่ม padding เพื่อให้พื้นหลังดูใหญ่ขึ้น
                  borderRadius: "4px", // เพิ่มมุมโค้งให้กับพื้นหลัง
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#00bcd4"; // เปลี่ยนพื้นหลังเป็นน้ำทะเล
                  e.target.style.color = "#fff"; // เปลี่ยนสีตัวอักษรเป็นขาว
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent"; // รีเซ็ตพื้นหลัง
                  e.target.style.color = "inherit"; // รีเซ็ตสีตัวอักษร
                }}
              >
                {project.title}
              </a>
            </Typography>
            <Typography>{project.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Projects;
