import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Video from '../components/Video'
import Class from '../components/Class'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <article>
          <Hero />
          <About />
          <Video />
          <Class />
          <Blog />
        </article>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
