import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="section hero bg-dark has-after has-bg-image"
      id="home"
      aria-label="hero"
      data-section
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">
            <strong className="strong">The Best</strong>Fitness Club
          </p>
          <h1 className="h1 hero-title">Work Hard To Get Better Life</h1>
          <p className="section-text">
            Duis mollis felis quis libero dictum vehicula. Duis dictum lorem mi, a faucibus nisi eleifend eu.
          </p>
          <a href="/register" className="btn btn-primary">Register Now</a>
        </div>
        <div className="hero-banner">
          <Image
            src="/images/hero-banner.png"
            width={726}
            height={828}
            alt="hero banner"
            className="w-100"
            priority
          />
          <Image
            src="/images/hero-circle-one.png"
            width={666}
            height={666}
            aria-hidden="true"
            alt=""
            className="circle circle-1"
          />
          <Image
            src="/images/hero-circle-two.png"
            width={666}
            height={666}
            aria-hidden="true"
            alt=""
            className="circle circle-2"
          />
          <Image
            src="/images/heart-rate.svg"
            width={255}
            height={270}
            alt="heart rate"
            className="abs-img abs-img-1"
          />
          <Image
            src="/images/calories.svg"
            width={348}
            height={224}
            alt="calories"
            className="abs-img abs-img-2"
          />
        </div>
      </div>
    </section>
  )
}
