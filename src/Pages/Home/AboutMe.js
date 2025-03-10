export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/shiva.jpeg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          I am a dedicated Full Stack .NET Developer with over 5 years of experience in designing and building web applications. Skilled in both front-end and back-end development, I specialize in ASP.NET Core, C#, Angular, and React.js. My expertise lies in creating RESTful APIs, microservices, and containerized applications using Docker on cloud platforms like AWS, Azure, and GCP. I am passionate about delivering scalable, high-performance solutions while collaborating in Agile environments. With a strong focus on continuous learning and problem-solving, I strive to create impactful software that enhances business operations. </p>
        </div>
      </div>
    </section>
  );
}
