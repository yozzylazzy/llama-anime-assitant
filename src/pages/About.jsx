import 'react-vertical-timeline-component/style.min.css';
import { skills } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section
      style={{
        background: "linear-gradient(to right, #dff2eb, #b9e5e8)",
      }}
    >
      <div className='max-container'>
        <h1 className='head-text text-[#4A628A]'>
          Hello, I&apos;m <span className='blue-gradient_text font-semibold drop-shadow'>Yozzy Lazzy</span>
        </h1>
        <div className='mt-5 flex flex-col gap-3 text-[#4A628A]'>
          <p>
            I am a software engineer based in Indonesia. I create web and mobile application using
            modern framework and technology and have a role as Fullstack Developer.
          </p>
        </div>
        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text text-[#4A628A]'>My Skills</h3>

          <div className='mt-16 flex flex-wrap gap-12 justify-center md:justify-start'>
            {skills.map((skill) => (
              <div key={skill.name} className='block-container w-24 h-24'>
                <div className='btn-back rounded-xl drop-shadow-md' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className='border-slate-200' />
        <div>
          <CTA />
        </div>
      </div>
    </section>
  )
}

export default About;