const experienceCards = [
  {
    title: 'Guided awareness practices',
    copy: 'Breathwork, grounding, and gentle spiritual rituals that help your body and mind soften into the present.'
  },
  {
    title: 'Neurodivergent-friendly connection',
    copy: 'Consent-based community moments with space for solitude, reduced social pressure, and sensory-aware pacing.'
  },
  {
    title: '80s-inspired joy and play',
    copy: 'Neon nostalgia, expressive movement, music, and playful energy to wake up your spirit without overwhelm.'
  },
  {
    title: 'Reflection, creativity, and nervous system calm',
    copy: 'Journaling, art, and integration practices designed to support regulation, clarity, and transformation.'
  }
];

export default function Home() {
  return (
    <main className="page">
      <div className="bg-gradient" />
      <div className="bg-glow bg-glow--pink" />
      <div className="bg-glow bg-glow--violet" />
      <div className="bg-glow bg-glow--blue" />

      <section className="hero container">
        <p className="hero-kicker">✦ EARTH SCHOOL IN REAL LIFE ✦</p>
        <h1>LOVE STORM RETREATS</h1>
        <p className="hero-subheadline">
          A real-world extension of EARTH SCHOOL for sensitive, creative, neurodivergent souls
          ready to reconnect with themselves.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Join the Interest List</button>
          <button className="btn btn-secondary">Explore the Experience</button>
        </div>
        <div className="storm-icons" aria-hidden="true">
          <span>⚡</span>
          <span>♡</span>
          <span>⚡</span>
        </div>
      </section>

      <section className="container glass-section vibe">
        <h2>Not a typical retreat.</h2>
        <p>
          This is a calm, sensory-aware, spiritually grounded experience designed for people who
          feel deeply, think differently, and are ready for peace, light, and levity.
        </p>
      </section>

      <section className="container glass-section">
        <h2>The Experience</h2>
        <div className="experience-grid">
          {experienceCards.map((card) => (
            <article key={card.title} className="experience-card">
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container glass-section earth-school">
        <h2>From EARTH SCHOOL to embodied life</h2>
        <p>
          Love Storm Retreats brings the EARTH SCHOOL philosophy into the physical world: you are
          a spiritual being having a temporary human experience. Here, that truth becomes felt —
          in your body, your relationships, your creativity, and your capacity to be fully alive.
        </p>
      </section>

      <section className="container glass-section interest">
        <h2>Stay close to the next retreat</h2>
        <p>Be first to hear dates, locations, and gentle updates as Love Storm Retreats unfolds.</p>
        <form className="interest-form" action="#">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input id="email" type="email" placeholder="Enter your email" />
          <button className="btn btn-primary" type="submit">
            Notify Me
          </button>
        </form>
      </section>

      <footer className="container footer">Love Storm Retreats • Peace, light, and levity ☮️</footer>
    </main>
  );
}
