import Image from 'next/image'

export default function Blog() {
  const blogs = [
    {
      title: 'Going to the gym for the first time',
      description: 'Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.',
      image: '/images/blog-1.jpg',
      imgAlt: 'Going to the gym for the first time',
      date: '7 July 2022'
    },
    {
      title: 'Parturient accumsan cacus pulvinar magna',
      description: 'Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.',
      image: '/images/blog-2.jpg',
      imgAlt: 'Parturient accumsan cacus pulvinar magna',
      date: '7 July 2022'
    },
    {
      title: 'Risus purus namien parturient accumsan cacus',
      description: 'Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.',
      image: '/images/blog-3.jpg',
      imgAlt: 'Risus purus namien parturient accumsan cacus',
      date: '7 July 2022'
    }
  ]

  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
        <p className="section-subtitle">Our News</p>
        <h2 className="h2 section-title text-center">Latest Blog Feed</h2>
        <ul className="blog-list has-scrollbar">
          {blogs.map((item, index) => (
            <li className="scrollbar-item" key={index}>
              <div className="blog-card">
                <div className="card-banner img-holder" style={{ '--width': 440, '--height': 270 } as React.CSSProperties}>
                  <Image
                    src={item.image}
                    width={440}
                    height={270}
                    alt={item.imgAlt}
                    className="img-cover"
                  />
                  <time className="card-meta" dateTime={item.date.slice(-4) + '-' + item.date.slice(2, 5) + '-' + item.date.slice(0, 2)}>
                    {item.date}
                  </time>
                </div>
                <div className="card-content">
                  <h3 className="h3">
                    <a href="#" className="card-title">
                      {item.title}
                    </a>
                  </h3>
                  <p className="card-text">{item.description}</p>
                  <a href="#" className="btn-link has-before" style={{ color: 'red' }}>
                    Read More
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
