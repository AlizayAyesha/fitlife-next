import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <div className="about-banner has-after">
          <Image
            src="/images/about-banner.png"
            width={660}
            height={648}
            alt=""
            className="w-100"
          />
          <Image
            src="/images/about-circle-one.png"
            width={660}
            height={534}
            aria-hidden="true"
            alt=""
            className="circle circle-1"
          />
          <Image
            src="/images/about-circle-two.png"
            width={660}
            height={534}
            aria-hidden="true"
            alt=""
            className="circle circle-2"
          />
          <Image
            src="/images/fitness.png"
            width={650}
            height={154}
            alt="fitness"
            className="abs-img w-100"
          />
        </div>
        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="h2 section-title">Welcome To Our Fitness Gym</h2>
          <p className="section-text">
            Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat.
            Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.
          </p>
          <p className="section-text">
            Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante
            ipsum primis.
          </p>
          <div className="wrapper">
            <div className="about-coach">
              <figure className="coach-avatar">
                <Image src="https://img.freepik.com/free-photo/young-adult-doing-indoor-sport-gym_23-2149205542.jpg?semt=ais_hybrid&w=740&q=80" width={65} height={65} alt="Trainer" />
              </figure>
              <div>
                <h3 className="h3 coach-name">Dr. Marco</h3>
                <p className="coach-title">Our Coach</p>
              </div>
            </div>
            <Link href="/coach" className="btn btn-primary">Explore More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
