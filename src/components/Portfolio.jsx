import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Global Collaboration",
      description: "From LA to Stockholm and beyond, we assemble tailored teams of creatives for each project, drawing from our growing network to match the right skills to the right challenge."
    },
    {
      title: "Flexible Approach",
      description: "No cookie-cutter solutions. We adapt to each brief, combining research, strategy, and creativity to deliver results that are both impactful and authentic."
    },
    {
      title: "Diverse Expertise",
      description: "Our collective spans the full creative spectrum—video production, animation, UI/UX design, branding, tech development, and more—ensuring we can tackle any creative challenge with precision and flair."
    },
    {
      title: "Open Invitation",
      description: "We're always looking for passionate creatives to join our network. Whether you're an animator in Tokyo, a filmmaker in São Paulo, a designer in London, or a developer anywhere else, &more is a place to collaborate and grow."
    }
  ];

  return (
    <section className="portfolio">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="card">
              <h3 className="text-sm font-bold text-white mb-4">{project.title}</h3>
              <p className="text-sm font-light text-white leading-relaxed">{project.description}</p>
            </li>
          ))}
        </ul>
        <p className="text-sm font-light text-white text-center mt-8 leading-relaxed">Let's connect and bring your vision to life.</p>
      </div>
      <style jsx>{`
        .portfolio {
          padding: 40px 0;
        }
        .portfolio ul {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .portfolio li.card {
          background: rgba(57, 57, 57, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 12px;
          width: 100%;
          padding: 20px;
          text-align: left;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .portfolio li.card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        @supports not (backdrop-filter: blur(10px)) {
          .portfolio li.card {
            background: rgba(255, 255, 255, 0.3);
          }
        }
        @media (max-width: 768px) {
          .portfolio ul {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio; 