import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/About.module.css";

export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/about/get") // Fetch data from backend
      .then((res) => res.json())
      .then((data) => {
        setAboutData(data[0]); // Assuming only one document exists
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!aboutData) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>Alovelo - About Us</title>
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{aboutData.hero_title}</h1>
          <p>{aboutData.hero_content}</p>
        </div>
        <Image 
  src={`http://localhost:5000${aboutData.hero_image}`} 
  alt="About Hero"
  width={1146}
  height={768}
  className={styles.heroImage} 
  unoptimized // Add this if still facing issues
/>
      </section>

      {/* Vision & Mission Section */}
      <section className={styles.visionMission}>
        <h2>VISION & MISSION</h2>
        <div className={styles.textContainer}>
          <div>
            <h3>{aboutData.vision_title}</h3>
            <p>{aboutData.vision_content}</p>
          </div>
          <div>
            <h3>{aboutData.mission_title}</h3>
            <p>{aboutData.mission_content}</p>
          </div>
        </div>
        <Image 
          src={`http://localhost:5000${aboutData.main_image}`} 
          alt="Vision & Mission" 
          width={800} height={500} 
          className={styles.missionImage} 
        />
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>WHAT MAKES US DIFFERENT</h2>
        <div className={styles.featureContainer}>
          {aboutData.features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <Image 
                src={`http://localhost:5000${feature.icon}`} 
                alt={feature.title} 
                width={100} height={100} 
              />
              <p>{feature.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Alovelo. All Rights Reserved.</p>
      </footer>
    </>
  );
}
