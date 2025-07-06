import React from "react";
import workoutImage from "../assets/img5.jpg"; // Ensure image exists

const WorkoutSessions = () => {
  const highlight = (text, color = "#ff4d4d") => (
    <span style={{ color, fontWeight: "bold" }}>{text}</span>
  );

  const bootcamps = [
    {
      title: "Full Body Conditioning Bootcamp",
      desc: `A mix of ${highlight("strength")}, ${highlight("cardio")}, and functional training that targets every major muscle group. Get ${highlight("toned")} and energized in just 45 minutes.`,
    },
    {
      title: "Strength & Power Training",
      desc: `Focused ${highlight("weightlifting")} sessions to improve ${highlight("power")}, build ${highlight("lean muscle")}, and boost performance.`,
    },
    {
      title: "Cardio Blast Bootcamp",
      desc: `Burn ${highlight("fat")} fast with high-intensity cardio. Improve ${highlight("heart health")}, ${highlight("endurance")}, and stamina.`,
    },
    {
      title: "Core Strength & Stability",
      desc: `Target your ${highlight("abs")}, obliques, and lower back. Great for ${highlight("balance")}, posture, and injury prevention.`,
    },
    {
      title: "Mobility & Flexibility Camp",
      desc: `Improve ${highlight("flexibility")}, ${highlight("joint health")}, and range of motion. Perfect for all levels and recovery days.`,
    },
    {
      title: "Athletic Conditioning",
      desc: `Sports-style training to enhance ${highlight("agility")}, ${highlight("reaction time")}, and ${highlight("speed")}.`,
    },
  ];

  return (
    <section
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#f8f9fa",
        fontFamily: "sans-serif",
        color: "#333",
      }}
    >
      {/* TOP WORKOUT SESSION */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto 4rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          TOP WORKOUT SESSION
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "2rem", lineHeight: 1.6 }}>
          Join our high-energy {highlight("HIIT")} workout designed to burn{" "}
          {highlight("calories")}, build {highlight("endurance")}, and
          strengthen your {highlight("core")}. Perfect for all fitness levels
          ready to unlock their full potential.
        </p>
        <img
          src={workoutImage}
          alt="Workout Session"
          style={{
            width: "100%",
            maxWidth: "700px",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      {/* FEATURED BOOTCAMPS */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          FEATURED BOOTCAMPS
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "3rem", lineHeight: 1.6 }}>
          Explore our most transformative programs designed for strength,
          stamina, flexibility, and peak performance.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {bootcamps.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "10px",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
                textAlign: "left",
              }}
            >
              <h4 style={{ marginBottom: "0.8rem", fontSize: "1.2rem" }}>
                {item.title}
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
