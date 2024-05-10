import React from "react";
import About from "../assets/About.png";

export const Attributes1 = () => {
  return (
    <div className="bg-[#222222] text-[#FFFFFF] font-Poppins w-full py-16 px-4">
      <div className="w-full mx-auto grid md:grid-cols-2 my-4">
        <img className="w-[400px] mx-auto my-4" src={About} alt="king" />
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-3xl font-bold mb-4">
            Experienced Frontend Developer: Aweda Ibrahim Ismaila
          </h1>
          <p className="text-lg mb-4">
            Aweda Ibrahim Ismaila is an accomplished frontend developer with a
            passion for crafting engaging user experiences. With a proven track
            record of delivering high-quality web applications, Aweda combines
            technical expertise with a creative mindset to bring designs to
            life.
          </p>
          <h2 className="text-2xl font-bold mb-2">Skills:</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Proficient in HTML5, CSS3, and JavaScript, with a focus on modern
              frontend frameworks such as React.js, Angular, and Vue.js.
            </li>
            <li>
              Strong understanding of responsive web design principles, ensuring
              seamless user experiences across various devices and screen sizes.
            </li>
            <li>
              Experience in translating design mockups and wireframes into
              functional frontend code, with an emphasis on usability and
              accessibility.
            </li>
            <li>
              Knowledgeable in version control systems such as Git, facilitating
              collaboration and code management in team environments.
            </li>
            <li>
              Familiarity with UI/UX design principles, optimizing user
              interfaces for intuitive navigation and engagement.
            </li>
            <li>
              Skilled in performance optimization techniques, including code
              minification, image optimization, and lazy loading, to enhance
              website speed and performance.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">Experience:</h2>
          <p className="mb-4">
            <strong>
              Frontend Developer, Tech Solutions Inc. (2024-Present)
            </strong>
            <br />
            - Developed and maintained frontend components for client-facing web
            applications, resulting in a 20% increase in user satisfaction.
            <br />
            - Collaborated with cross-functional teams to implement new features
            and enhancements, ensuring alignment with project requirements and
            timelines.
            <br />
            - Conducted code reviews and implemented best practices to maintain
            code quality and consistency across projects.
            <br />- Contributed to the optimization of website performance,
            resulting in improved loading times and enhanced user experiences.
          </p>

          <h2 className="text-2xl font-bold mb-2">Education:</h2>
          <p className="mb-4">
            Bachelor of Science in Computer Science, University of ABC
          </p>
          <p>
            With a dedication to staying updated with the latest technologies
            and trends in frontend development, Aweda Ibrahim Ismaila brings a
            wealth of knowledge and expertise to every project. With a strong
            foundation in frontend development and a commitment to excellence,
            Aweda is poised to continue delivering innovative solutions that
            exceed client expectations.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Attributes1;
