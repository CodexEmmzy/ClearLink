import "./aboutPage.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="about-page">
      <span>The ClearLink Advantage</span>
      <h1>Why choose ClearLink?</h1>

      <p>
        In a world where connection is everything, ClearLink takes the lead. Our
        cutting-edge video conferencing app offers:
      </p>

      <div className="about-section">
        <div className="section1">
          <div className="div div1">
            <Image
              src="image/down-icon.svg"
              alt="Down icon"
              width={15}
              height={20}
            />

            <h2>Crystal-clear HD video</h2>
            <p>
              No more pixelation or blurriness – just stunning, lifelike clarity
              that brings your team closer in meetings.
            </p>
          </div>

          <div className="div div1">
            <Image
              src="image/down-icon.svg"
              alt="Down icon"
              width={15}
              height={20}
            />

            <h2>Crystal-clear HD video</h2>
            <p>
              No more pixelation or blurriness – just stunning, lifelike clarity
              that brings your team closer in meetings.
            </p>
          </div>

          <div className="div div1">
            <Image
              src="image/down-icon.svg"
              alt="Down icon"
              width={15}
              height={20}
            />

            <h2>Crystal-clear HD video</h2>
            <p>
              No more pixelation or blurriness – just stunning, lifelike clarity
              that brings your team closer in meetings.
            </p>
          </div>

          <div className="div div1">
            <Image
              src="image/down-icon.svg"
              alt="Down icon"
              width={15}
              height={20}
            />

            <h2>Crystal-clear HD video</h2>
            <p>
              No more pixelation or blurriness – just stunning, lifelike clarity
              that brings your team closer in meetings.
            </p>
          </div>
        </div>
        <div className="section2"></div>
      </div>
    </div>
  );
};

export default AboutPage;
