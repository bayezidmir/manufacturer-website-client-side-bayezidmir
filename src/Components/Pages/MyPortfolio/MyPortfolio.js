import React from "react";

const MyPortfolio = () => {
  return (
    <>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src="https://i.ibb.co/3F0nL13/abr.jpg" class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">My name is Abdur Rahman</h1>
            <p class="py-6">
              Email: <span className="text-xl font-bold"> abdurrahamn.offical.63@gmail.com</span>
            </p>
            <p>
              Skills:{" "}
              <span className="text-xl font-bold">
                React.Js, JavaScript, NodeJs, HTML, CSS, bootstrap, tailwind,etc
              </span>
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPortfolio;
