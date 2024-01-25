import "./navbar.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Image
          src="image/clearlink-logo.svg"
          alt="Clear Link Logo"
          width={20}
          height={20}
        />
        <h1>ClearLink</h1>
      </div>

      <div className="nav">
        <ul>
          <li>
            <span>Products </span>
            <Image
              src="image/down-icon.svg"
              alt="Down icon"
              width={15}
              height={20}
            />
          </li>
          <li>
            <span>Solutions </span>
            <Image
              src="image/down-icon.svg"
              alt="Down icon"
              width={15}
              height={20}
            />
          </li>
          <li>
            <span>Resources </span>

            <Image
              src="image/down-icon.svg"
              alt="Down icon"
              width={15}
              height={20}
            />
          </li>
          <li>Pricing</li>
        </ul>
      </div>

      <div className="signup">
        <div className="sales-btn">Talk to sales</div>

        <div className="signup-btn">Sign up for free</div>
      </div>
    </div>
  );
};

export default Navbar;
