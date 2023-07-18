// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "35rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const numCardsToShow = showMore ? skills.skills_content.length : 6;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function showMoreCards() {
    setNumCardsToShow(skills.skills_content.length);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          {selectSkill?.skillDetail.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5  py-14">
      <h2 className="title" data-aos="fade-down">
        {skills.title}
      </h2>
      <h4 className="subtitle" data-aos="fade-down">
        {skills.subtitle}
      </h4>
      <br />
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.skills_content.slice(0, numCardsToShow).map((skill, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 400}
            className="bg-white sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                src={skill.logo}
                alt="..."
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <div>
              <h6>{skill.name}</h6>
              <p className="italic">{skill.para}</p>
              <div
                onClick={() => {
                  setSelectSkill(skill);
                  openModal();
                }}
                className="text-xl absolute top-3 right-3"
              >
                {createElement(skills.icon)}
              </div>
            </div>
          </div>
        ))}
        {showMore &&
          skills.skills_content.slice(6).map((skill, i) => (
            <div
              key={i + 6}
              data-aos="fade-up"
              data-aos-delay={(i + 6) * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div
                  onClick={() => {
                    setSelectSkill(skill);
                    openModal();
                  }}
                  className="text-xl absolute top-3 right-3"
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-end items-center mt-5">
      <button
        onClick={() => setShowMore(!showMore)}
        className="btn"
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
      </div>
    </div>
    
    </section>
  );
};

export default Skills;
