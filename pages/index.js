export default function Home() {
  return (
    <main>
      {/* HERO / SHOWREEL */}
      <section className="hero">
        <div className="overlay">
          <h1>你的名字</h1>
          <p>Video Editor · Motion Designer</p>
          <a href="#projects" className="btn">View My Work</a>
        </div>

        <iframe
          src="https://player.vimeo.com/video/你的ShowreelID?background=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>Selected Works</h2>

        <div className="grid">
          <div className="card">
            <iframe src="https://player.vimeo.com/video/影片ID1"></iframe>
            <h3>Project Title 01</h3>
            <p>Role: Editing · Motion Graphics</p>
          </div>

          <div className="card">
            <iframe src="https://player.vimeo.com/video/影片ID2"></iframe>
            <h3>Project Title 02</h3>
            <p>Role: Director · Cinematography</p>
          </div>

          <div className="card">
            <iframe src="https://player.vimeo.com/video/影片ID3"></iframe>
            <h3>Project Title 03</h3>
            <p>Role: Animation · Compositing</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a visual storyteller specializing in editing, motion graphics,
          and cinematic visuals. I love crafting emotional pacing and dynamic
          visual rhythm.
        </p>

        <ul>
          <li>Premiere Pro / Final Cut</li>
          <li>After Effects / Motion Graphics</li>
          <li>DaVinci Resolve / Color Grading</li>
          <li>Sound Design</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Let’s create something great together.</p>
        <a href="mailto:your@email.com" className="btn">Email Me</a>
      </section>
    </main>
  );
}
