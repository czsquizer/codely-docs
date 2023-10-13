import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        className="w-7 h-7 fill-white"
        viewBox="0 0 24 24"
        id="terminal">
        <g>
          <path
            d="M17.7422,2.707c-3.7549-0.939-7.7275-0.9399-11.4844,0C4.5059,3.1445,3.1445,4.5044,2.707,6.2573
			c-0.9395,3.7568-0.9395,7.7285,0,11.4858c0.4375,1.7524,1.7988,3.1123,3.5508,3.5498c1.8779,0.4697,3.8096,0.7046,5.7422,0.7041
			c1.9316,0,3.8643-0.2344,5.7422-0.7041c1.752-0.4375,3.1133-1.7974,3.5508-3.5503c0.9395-3.7568,0.9395-7.7285,0-11.4858
			C20.8555,4.5049,19.4941,3.1445,17.7422,2.707z M19.3535,17.2578c-0.2588,1.0342-1.0615,1.8364-2.0957,2.0947
			c-3.4395,0.8604-7.0762,0.8604-10.5156,0c-1.0342-0.2583-1.8369-1.0605-2.0957-2.0942c-0.8594-3.4399-0.8594-7.0767,0-10.5161
			C4.9053,5.708,5.708,4.9058,6.7422,4.6475C8.4619,4.2173,10.2314,4.0024,12,4.0024s3.5381,0.2148,5.2578,0.645
			c1.0342,0.2583,1.8369,1.0605,2.0957,2.0942C20.2129,10.1816,20.2129,13.8184,19.3535,17.2578z"></path>
          <path d="M8.707 11.293c-.3906-.3906-1.0234-.3906-1.4141 0s-.3906 1.0234 0 1.4141l1.793 1.793-1.793 1.793c-.3906.3906-.3906 1.0234 0 1.4141C7.4883 17.9023 7.7441 18 8 18s.5117-.0977.707-.293l2.5-2.5c.3906-.3906.3906-1.0234 0-1.4141L8.707 11.293zM16 16h-3c-.5527 0-1 .4478-1 1s.4473 1 1 1h3c.5527 0 1-.4478 1-1S16.5527 16 16 16z"></path>
        </g>
      </svg>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed once, initially
          "Creating a roleplay server has never been easier",
          1000,
          "Creating a roleplay server has never been faster",
          1000,
          "Creating a roleplay server has never been more fun",
          1000,
          "Creating a roleplay server has never been simpler",
          1000,
        ]}
        speed={50}
        style={{ fontSize: "20px" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Typing;
