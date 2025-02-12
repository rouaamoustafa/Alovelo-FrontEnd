import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/home/homecontent")
      .then((res) => res.json())
      .then((data) => {
        setHomeData(data[0]); // Assuming only one document exists
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!homeData) return <p>Loading...</p>;

  return (
    <div>
      <Head>
        <title>Alovelo Home</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <img src={`http://localhost:5000${homeData.imageHome}`} alt="Hero Image" class="hero-image"/>
        <h1 className="hero-text">{homeData.subtitlehomeHeader}</h1>
        <p className="hero-text">{homeData.contenthomeHeader}</p>
        <button  class="boutton">{homeData.ctabtnhomeHeader}</button>
      </section>

      {/* Events Section */}
      <section class="events-section" id="events">
        <img src={`http://localhost:5000${homeData.imageSection}`} alt="Event" class="event-image"  />
        {/*<h2>{homeData.titleSection}</h2>*/}
        <p class="events-text">{homeData.contentSection}</p>
      </section>

      {/* Promotional Section */}
      <section >
        <h2>{homeData.titlePromotionalSection}</h2>
        <button class="boutton">{homeData.ctabtnPromotionalSection}</button>
      </section>

      {/* Gallery */}
      <section class="gallery">
        <div class="gallery-container">
          {homeData.galleryImages.map((img, index) => (
            <img key={index} src={`http://localhost:5000${img}`} alt={`Gallery ${index}`} width="300px" />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px", textAlign: "center" }}>
        <p>Copyright © All Rights Reserved</p>
      </footer>
    </div>
  );
}
