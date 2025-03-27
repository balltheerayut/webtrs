import React from "react";
import oiaGif from "../assets/oia.gif"; // นำเข้าไฟล์ GIF ของคุณ

const LoadingPage = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(126, 125, 125)", // สีพื้นหลังให้เบลอๆ
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999, // ให้หน้าโหลดทับหน้าต่างอื่น
      }}
    >
      <img
        src={oiaGif}
        alt="Loading..."
        style={{
          width: "200px",
          height: "200px",
        }}
      />
    </div>
  );
};

export default LoadingPage;
