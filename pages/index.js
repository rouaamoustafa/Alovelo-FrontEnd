import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/home/homecontent")
      .then((res) => res.json())
      .then((data) => {
        setHomeData(data[0]); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!homeData) return <p>Loading...</p>;

  return (
    <div>
      <Head>
        <title>Alovelo Home</title>
      </Head>

      {/* Hero Section <button  class="boutton">{homeData.ctabtnhomeHeader}</button>*/}
      <section className="hero-section">
        <img src={`http://localhost:5000${homeData.imageHome}`} alt="Hero Image" class="hero-image"/>
        <h1 className="hero-text">{homeData.subtitlehomeHeader}</h1>
        <p className="hero-content">{homeData.contenthomeHeader}</p>
        <Link href="/about" legacyBehavior><button  class="boutton">Learn More</button></Link>
      </section>

      {/* Events Section */}
      <section class="events-section" id="events">
        
        {/*<h2>{homeData.titleSection}</h2> <img src={`http://localhost:5000${homeData.imageSection}`} alt="Event" class="event-image"  />*/}
        <img src={`http://localhost:5000${homeData.imageSection}`} alt="Event" class="event-image"  />
        <p class="events-text">{homeData.contentSection}</p>
      </section>

      {/* Promotional Section */}
      <section >
        <h2 class="titlePromotional">{homeData.titlePromotionalSection}</h2>
        <Link href="/contact" legacyBehavior><button class="boutton">{homeData.ctabtnPromotionalSection}</button></Link>
      </section>

      {/* Gallery */}
      <section >
        <div class="imageGallery">
          {homeData.galleryImages.map((img, index) => (
            <img key={index} src={`http://localhost:5000${img}`} alt={`Gallery ${index}`} width="300px" />
          ))}
        </div>
      </section>
    </div>
  );
}
