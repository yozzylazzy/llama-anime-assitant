import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta p-3'>
      <p className='cta-text'>Have a project in mind? <br className='sm:block hidden' />
        Let&apos;s build something together!</p>
      <Link to="/contact" className='btn'>
        Contact
      </Link>
    </section>
  )
}

export default CTA
