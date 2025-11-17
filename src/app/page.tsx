import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Video from '../components/Video'
import Class from '../components/Class'
import Pricing from '../components/Pricing'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <Hero />
          <About />
          <Video />
          <Class />
          <Pricing />
          <Blog />
        </article>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
