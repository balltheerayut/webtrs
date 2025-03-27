import React, { useState, useContext } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ThemeContext } from "../ThemeContext";
import crycatGif from "../assets/crycat.gif";
import sound from "../assets/cry.mp3";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Email:", email);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "600px",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        Contact Me
      </Typography>

      <IconButton
        sx={{
          backgroundColor: darkMode ? "#555" : "#000066",
          color: "#fff",
          padding: "16px",
          borderRadius: "50%",
          mb: 2,
        }}
      >
        <EmailIcon fontSize="large" />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          sx={{
            backgroundColor: darkMode ? "#555" : "#000066",
            color: "#fff",
            "&:hover": { backgroundColor: darkMode ? "#444" : "#000099" },
          }}
        >
          Send Message
        </Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <IconButton
          href="https://www.instagram.com/b.3rayut/"
          target="_blank"
          sx={{
            backgroundColor: "#000066",
            color: "#fff",
            padding: "12px",
            borderRadius: "50%",
            "&:hover": { backgroundColor: "#333" },
          }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>

        <IconButton
          href="https://www.facebook.com/Ballcraft.kung/"
          target="_blank"
          sx={{
            backgroundColor: "#3b5998",
            color: "#fff",
            padding: "12px",
            borderRadius: "50%",
            "&:hover": { backgroundColor: "#333" },
          }}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
      </Box>

      <img
        src={crycatGif}
        alt="crycat"
        onClick={playSound}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "80px",
          height: "80px",
          cursor: "pointer",
        }}
      />
    </Box>
  );
};

export default Contact;