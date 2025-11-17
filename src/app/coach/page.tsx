import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Coach = () => {
  const specialties = [
    { name: "Strength Training", icon: "🏋️‍♂️", desc: "Power & muscle building" },
    { name: "Weight Loss", icon: "⚖️", desc: "Effective fat loss programs" },
    { name: "Functional Fitness", icon: "🤸‍♂️", desc: "Movement efficiency" },
    { name: "HIIT Training", icon: "⚡", desc: "High-intensity intervals" },
    { name: "Sports Nutrition", icon: "🥗", desc: "Diet optimization" },
    { name: "Injury Recovery", icon: "🏥", desc: "Rehab & prevention" }
  ];

  const testimonials = [
    { 
      name: "Sarah Johnson", 
      rating: 5, 
      text: "Dr. Marco's program helped me lose 40lbs and gain confidence. His personalized approach is unmatched!" 
    },
    { 
      name: "Mike Chen", 
      rating: 5, 
      text: "Started as a beginner, now competing in triathlons. The training plans are comprehensive and effective." 
    },
    { 
      name: "Jennifer Williams", 
      rating: 5, 
      text: "Post-pregnancy fitness journey was challenging until Dr. Marco. Safe, effective, and motivating coaching." 
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="coach-hero">
          <div className="container">
            <div className="coach-hero-flex">
              {/* Image - Left Side */}
              <div className="coach-image">
                <div>
                  <img
                    src="https://img.freepik.com/free-photo/young-adult-doing-indoor-sport-gym_23-2149205542.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Dr. Marco - Fitness Coach"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Content - Right Side */}
              <div className="coach-content" style={{paddingTop: '100px'}}>
                <h1 className="coach-h1">
                  Dr. Marco
                </h1>
                <p className="coach-subtitle">
                  Certified Fitness Coach & Personal Trainer
                </p>

                {/* Stats */}
                <div className="coach-stats">
                  <div>
                    <div className="coach-stat-number">10+</div>
                    <p className="coach-stat-label">Years Experience</p>
                  </div>
                  <div>
                    <div className="coach-stat-number">500+</div>
                    <p className="coach-stat-label">Happy Clients</p>
                  </div>
                  <div>
                    <div className="coach-stat-number">15+</div>
                    <p className="coach-stat-label">Certifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About & Specialties Section */}
        <section className="coach-about-specialties">
          <div className="container">
            <div className="coach-grid">
              {/* About Card */}
              <div className="coach-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <svg className="coach-icon text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="coach-card-title">About Our Coach</h2>
                </div>

                <div className="coach-card-content">
                  <p>
                    Dr. Marco brings over a decade of experience in personal training and group fitness
                    instruction. As our lead certified fitness professional, he specializes in creating
                    personalized fitness programs that deliver real results.
                  </p>
                  <p>
                    With advanced certifications in strength training, functional fitness, and sports
                    nutrition, he has transformed the lives of hundreds of clients through
                    customized training regimens and comprehensive wellness planning.
                  </p>
                  <div className="coach-cert-container">
                    {['CISN', 'CSCS', 'NASM CPT', 'PN Level 1'].map((cert, index) => (
                      <span key={index} className="coach-cert-tag">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specialties Card */}
              <div className="coach-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <svg className="coach-icon text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v1H3V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="coach-card-title">Specialties</h2>
                </div>

                <div className="coach-specialties-grid">
                  {specialties.map((specialty, index) => (
                    <div key={index} className="coach-specialty">
                      <div className="coach-specialty-icon">{specialty.icon}</div>
                      <h3 className="coach-specialty-name">{specialty.name}</h3>
                      <p className="coach-specialty-desc">{specialty.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="coach-cta">
              <div className="coach-cta-card">
                <div className="coach-cta-content">
                  <h2 className="coach-cta-title">
                    Ready to Transform Your Fitness Journey?
                  </h2>
                  <p className="coach-cta-text">
                    Get personalized training programs, expert nutrition guidance, and ongoing support
                    to achieve your fitness goals with Dr. Marco.
                  </p>

                  <div className="flex gap-4 justify-center items-center">
                    <Link href="/contact" className="btn btn-secondary font-bold">Schedule Free Consultation</Link>
                    <div className="flex items-center gap-2 text-background/70 coach-btn-text">
                      <svg className="coach-tiny-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>No obligation • Virtual & in-person sessions available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Preview */}
        <section className="coach-testimonials">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="coach-testimonials-title">What Clients Say</h2>
              <p className="coach-testimonials-subtitle">
                Real results from real people who transformed their lives with Dr. Marco
              </p>
            </div>

            <div className="coach-testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="coach-testimonial">
                  <div className="coach-testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="coach-small-icon" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="coach-testimonial-text">
                    "{testimonial.text}"
                  </p>
                  <div className="coach-testimonial-name">{testimonial.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Coach;
