// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = hero.resumeDownload;
    link.target = "_blank";
    link.download = "arif-cv";
    link.click();
  };

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-0 md:rotate-90 absolute top-20 md:top-52 right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-52 md:pt-5" data-aos="fade-down">
          <h2 className="">{hero.title}</h2>
          <br />
          <div className="flex justify-center md:justify-end gap-3">
            <a  href="#contact" className="btn">{hero.btnText}</a>
            <button className="btn" onClick={handleDownload}>{hero.btnDownload}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96 hidden md:block">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
