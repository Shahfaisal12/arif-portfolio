import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem]  duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <img src={content.logo} alt="..." className="mx-auto" />
              <h6 className="mt-3">{content.title}</h6>
              <p className="text-slate-500 text-[12px] font-semibold">At</p>
              <p className="text- text-[14px] font-semibold mb-3">{content.company} <span className="text-left">{content.date}</span></p>
              <p className="leading-7">{content.para}</p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
