import Image from 'next/image'

export default function Class() {
  const classes = [
    {
      title: 'Weight Lifting',
      description: 'Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.',
      progress: 85,
      image: '/images/class-1.jpg',
      icon: '/images/class-icon-1.png'
    },
    {
      title: 'Cardio & Strenght',
      description: 'Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.',
      progress: 70,
      image: '/images/class-2.jpg',
      icon: '/images/class-icon-2.png'
    },
    {
      title: 'Power Yoga',
      description: 'Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.',
      progress: 90,
      image: '/images/class-3.jpg',
      icon: '/images/class-icon-3.png'
    },
    {
      title: 'Pilates Workout',
      description: 'Experience the mind-body connection with our comprehensive Pilates programs.',
      progress: 75,
      image: '/images/class-4.jpg',
      icon: '/images/class-icon-4.png'
    },
    {
      title: 'The Fitness Pack',
      description: 'Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.',
      progress: 60,
      image: '/images/class-4.jpg',
      icon: '/images/class-icon-4.png'
    },
    {
      title: 'New Male Beginner Tasks',
      description: 'Start your fitness journey with targeted beginner routines designed specifically for men.',
      progress: 45,
      image: '/images/class-1.jpg',
      icon: '/images/class-icon-1.png'
    }
  ]

  return (
    <section
      className="section class bg-dark has-bg-image"
      id="class"
      aria-label="class"
      style={{ backgroundImage: "url('/images/classes-bg.png')" }}
    >
      <div className="container">
        <p className="section-subtitle">Task Categories</p>
        <h2 className="h2 section-title text-center">Fitness Programs For Every Goal</h2>
        <ul className="class-list has-scrollbar">
          {classes.map((item, index) => (
            <li className="scrollbar-item" key={index}>
              <div className="class-card">
                <figure className="card-banner img-holder" style={{ '--width': 416, '--height': 240 } as React.CSSProperties}>
                  <Image
                    src={item.image}
                    width={416}
                    height={240}
                    alt={item.title}
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <div className="title-wrapper">
                    <Image
                      src={item.icon}
                      width={52}
                      height={52}
                      aria-hidden="true"
                      alt=""
                      className="title-icon"
                    />
                    <h3 className="h3">
                      <a href={
                        item.title === "Weight Lifting" ? "/weight-lifting" :
                        item.title === "Cardio & Strenght" ? "/cardio-strength" :
                        item.title === "Power Yoga" ? "/power-yoga" :
                        item.title === "Pilates Workout" ? "/pilates-workout" :
                        item.title === "The Fitness Pack" ? "/fitness-pack" :
                        item.title === "New Male Beginner Tasks" ? "/male-beginner-tasks" :
                        "#"
                      } className="card-title">
                        {item.title}
                      </a>
                    </h3>
                  </div>
                  <p className="card-text">{item.description}</p>
                  <div className="card-progress">
                    <div className="progress-wrapper">
                      <p className="progress-label">Class Full</p>
                      <span className="progress-value">{item.progress}%</span>
                    </div>
                    <div className="progress-bg">
                      <div className="progress-bar" style={{ width: `${item.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
