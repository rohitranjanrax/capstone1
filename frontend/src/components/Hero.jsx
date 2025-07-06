import React from "react";
import heroBg from "../assets/img1.webp"; // Adjust the path if needed

const Hero = () => {
  const sectionStyle = {
    height: "100vh",
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    color: "white",
    fontFamily: "sans-serif",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 0,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
  };

  const h1Style = {
    fontSize: "4rem",
    margin: 0,
    fontWeight: "bold",
  };

  const subTitleStyle = {
    marginTop: "1.5rem",
    fontSize: "1.2rem",
    lineHeight: "1.6",
  };

  const buttonContainerStyle = {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
  };

  const primaryBtnStyle = {
    padding: "1rem 2rem",
    fontSize: "1rem",
    borderRadius: "30px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#ff4d4d",
    color: "#fff",
  };

  const outlineBtnStyle = {
    padding: "1rem 2rem",
    fontSize: "1rem",
    borderRadius: "30px",
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid white",
  };

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>

      <div style={contentStyle}>
        <div className="title">
          <h1 style={h1Style}>LET'S</h1>
          <h1 style={h1Style}>GET</h1>
          <h1 style={h1Style}>MOVING</h1>
        </div>

        <div style={subTitleStyle}>
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>

        <div style={buttonContainerStyle}>
          <button style={primaryBtnStyle}>Start Your Journey</button>
          <button style={outlineBtnStyle}>Discover Your Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
