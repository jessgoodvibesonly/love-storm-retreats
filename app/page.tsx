import Image from 'next/image';

const experienceCards = [
  'Gentle morning grounding',
  '80s-inspired joy and music',
  'Creative expression',
  'Spiritual reflection',
  'Nervous system support',
  'Beach, beauty, laughter, and connection'
];

const forWho = [
  'Neurodivergent adults',
  'Deep feelers and highly sensitive people',
  'Creative souls',
  'People craving community without pressure',
  'Anyone ready for a reset in a safe, uplifting environment'
];

export default function Home() {
  return (
    <main className="page">
      <div className="bg-glow bg-glow--pink" />
      <div className="bg-glow bg-glow--cyan" />

      <section className="container hero card">
        <Image
          src="/love-storm-logo.svg"
          alt="Love Storm Retreats logo"
          width={220}
          height={220}
          className="logo"
          priority
        />
        <p className="eyebrow">Love Storm Retreats</p>
        <h1>Love Storm Retreats</h1>
        <p className="lead">
          A vibrant retreat experience for neurodivergent and sensitive souls ready to reconnect,
          reset, and feel fully alive.
        </p>
        <div className="actions">
          <button className="btn btn-primary">Join the Interest List</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </section>

      <section className="container card">
        <h2>What It Is</h2>
        <p>
          Love Storm Retreats is a heart-led retreat experience blending rest, creativity,
          spirituality, nervous system support, community, music, movement, reflection, and joy.
        </p>
      </section>

      <section className="container card">
        <h2>Who It’s For</h2>
        <ul className="bullet-list">
          {forWho.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="container card">
        <h2>The Experience</h2>
        <div className="grid">
          {experienceCards.map((card) => (
            <article key={card} className="exp-card">
              <p>{card}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container card">
        <h2>Coming Soon</h2>
        <p>
          Our first Love Storm Retreat is being designed now. Join the interest list to receive
          updates, early access, and retreat details.
        </p>
      </section>

      <section className="container card cta-footer">
        <h2>Come as you are.</h2>
        <p>This is a space for love, light, laughter, and nervous system-safe connection.</p>
        <button className="btn btn-primary">Join the Interest List</button>
      </section>
    </main>
  );
}
