
import './App.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function App() {
  const handlescroll=(id)=>{

    const section=document.getElementById(id)
    if(id){
      section.scrollIntoView({behavior:smooth})
    }
  }
 

  return (
    <>
    <div className='outbox w-full bg-jet h-auto flex justify-evenly  text-gray-300'>
   
      <div className='Intro sticky top-0 border w-[40%] h-screen flex flex-col justify-center gap-20 p-10'>
        <div className='flex flex-col justify-center gap-2'>
      <a className='font-opensans text-[3.5rem] font-bold tracking-tighter text-white leading-none'>Kabina Thapa</a>
      <h1 className='text-[1.5rem] text-gray-100 '>Aspiring Front-End Developer</h1>
      <p className='text-lg '>Crafting pixel-perfect wonders and turning ideas into interactive reality.
      <p >Let's build something extraordinary together!</p>
      </p>
      </div>
      <div className='flex flex-col text-[2rem] '> 
        <a href='#about' className=' hover:text-white'  onClick={()=>handlescroll('about')}>About</a>
        <a href='#projects' className=' hover:text-white' onClick={()=>handlescroll('projects')}>Projects</a>
        <a href='#skills' className=' hover:text-white' onClick={()=>handlescroll('skills')}>Skills</a>
      </div>
          <div className='flex w-20 justify-between'>
            <FaLinkedin size={32}/>
            <FaGithub size={32}/>

          </div>
      
      </div>
   <div className='second border w-[40%]'>
    <div id='about'>
    <h1>About Me: Unveiling My Journey</h1>
    <p>Greetings! I'm Kabina Thapa, 
       Allow me to share a bit about the journey that brought me to where I am today.</p>
    <h1>Venturing into the unknown</h1>
    <p>In 2017, I embarked on a life-changing journey, leaving the comfort of my home country to pursue my dreams in the United States. As an international student with a burning desire to delve into the world of technology, I chose to study Computer Science. 
      It wasn't merely a choice of career; it was a bold step to challenge norms and break barriers.</p>
      <h1> Breaking Stereotypes</h1>
      <p>Back in my homeland, the percentage of women pursuing technology was minimal. Motivated by a desire to change this narrative, 
        I set out on a mission to be a trailblazer. I knew that by immersing myself in the world of computer science, 
        I could inspire other young women to follow their passion and embrace the possibilities within the tech realm.</p>
        <h1>Educational Milestones</h1>
        <p>Fast forward to today, I hold a Bachelor's degree in Computer Science from Queens College/CUNY, a testament to my dedication and hard work. Additionally, I earned an Associate degree in Computer Science from Fiorello H. LaGuardia Community College/CUNY. 
          My academic journey has equipped me with the skills and knowledge needed to excel in the dynamic field of technology.</p>
          <h1>Beyond Code: Unleashing Creativity</h1>
          <p>Beyond the world of coding, I find solace in the realm of 3D art painting during my free time. This creative outlet allows me to express myself, 
            adding a vibrant and artistic dimension to my skill set.</p>
            <h1>Looking Ahead</h1>
            <p>Now, as I stand at the threshold of my career, I am eager to contribute my skills and enthusiasm to a dynamic team. I bring not only technical prowess but also a unique perspective shaped by my diverse experiences.
              Join me on this exciting journey of innovation and transformation.</p>
    
    </div>
    <div id='projects' className='h-96 border'>
      <h1>Projects</h1>
    </div>
    <div id='skills' className='h-[55rem]'>
      Skills
    </div>
    </div>
    </div>
    
     
    </>
  )
}

export default App
