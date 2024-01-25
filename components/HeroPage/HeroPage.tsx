import Navbar from "../Navbar/Navbar";
import "./heropage.css";
import Image from "next/image";

const HeroPage = () => {
  return (
    <div className="heropage">
      <Navbar />

      <div className="hero-content">
        <div className="section1">
          <h1>
            Uniting the world, <br /> one video call at a time
          </h1>
          <p>
            Experience the future of communication with ClearLink – <br /> where
            crystal-clear video conferencing meets <br /> unparalleled
            simplicity.
          </p>

          <div className="sec1-btn">
            <div className="btn1">Start your free trail</div>
            <div className="btn2">
              <Image
                src="image/ai-discover.svg"
                alt="AI discover Icon"
                width={200}
                height={100}
              />
            </div>
          </div>

          <Image
            src="image/reviewsuser-reviews.svg"
            alt="User Review Icon"
            width={230}
            height={100}
          />
        </div>
        <div className="section2">
          <Image
            src="image/hero-pics.svg"
            alt="Group image icon"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="parthner-sec">
        <Image
          src="image/patners-clearlink.svg"
          alt="Pathners image icon"
          width={980}
          height={300}
        />
      </div>
    </div>
  );
};

export default HeroPage;
