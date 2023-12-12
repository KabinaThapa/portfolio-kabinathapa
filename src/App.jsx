import { StrictMode, useState } from "react";
import "./App.css";
import { FaCopyright, FaEnvelope, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuArrowBigRight, LuArrowRight, LuArrowUpRightFromCircle } from "react-icons/lu";
import { useEffect } from "react";

function App() {
  const[active,setActive]=useState('about')
  const [stickyProject, setStickyProject]=useState(false)
  const [stickyAbout, setStickyAbout]=useState(false)
  
  function handleScrollto(){
    const sections=document.querySelectorAll('section')
    const scrollPosition=window.scrollY+100
    sections.forEach((section)=>{
      const sectionTop=section.offsetTop
      const sectionBottom=sectionTop + section.offsetHeight
      if(scrollPosition>=sectionTop && scrollPosition<= sectionBottom){
        setActive(section.id)
        setStickyAbout(section.id==='about')
        setStickyProject(section.id==='projects')
      }
    })
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScrollto)
    return()=>{
      window.removeEventListener('scroll', handleScrollto)
    }
  },[])
 
  
  
  const handlescroll = (id) => {
    const section = document.getElementById(id);
    if(id){
      section.scrollIntoView({behaviour:'smooth'})
    }

    
  };

  return (
    <>
      <div className="outbox w-full bg-mount ">
       <div className=" w-full bg-black bg-opacity-10 h-auto  flex lg:flex-row flex-col lg:justify-around  text-slate-400 font-sans font-extralight tracking-wide leading-relaxed lg:text-base text-[0.9rem]">
        <div className="Intro border lg:sticky lg:top-0 md:mt-10 lg:mt-0  lg:w-[45%] w-[100%]  lg:h-screen flex flex-col justify-center lg:gap-20  lg:p-10 p-6 gap-3 ">
          <div className="flex flex-col  justify-center  lg:items-start lg:gap-4 gap-2 font-extralight">
            <a className=" lg:text-[3.2rem] text-[2rem] font-bold text-white leading-none tracking-tight ">
              Kabina Thapa
            </a>
            <h1 className="lg:text-[1.5rem] text-[1rem] text-gray-100 ">
              Aspiring Front-End Developer
            </h1>
            <p className="lg:text-lg text-[0.9rem]">
              Crafting pixel-perfect wonders and turning ideas into interactive
              reality.
              <p className="mt-1">Let's build something extraordinary together!</p>
            </p>
          </div>
          <div className=" lg:flex  hidden lg:flex-col text-2xl gap-4 ">
          <div  className='flex    items-center'>
          <a
              href="#about"
              className={`${active==='about' && 'font-normal hover:no-underline text-white '}  hover:underline hover:underline-offset-8` }
             
              onClick={() => handlescroll("about")}
            >
              About
              
            </a>
            <div className={`${active==='about'?'opacity-100':'opacity-0'}  w-full bg-t h-[0.1rem]  ml-4 rounded` }></div>
          </div>
          <div className=" lg:flex hidden items-center"> 
          <a
              href="#projects"
              className={`${active==='projects' && ' text-white font-normal hover:no-underline'}  hover:underline hover:underline-offset-4` }
              onClick={() => handlescroll("projects")}
            >
              Projects
            </a>
            <div className={`${active==='projects'?'opacity-100':'opacity-0'}  w-full bg-t h-[0.1rem] rounded ml-4` }></div>
          </div>
           
            
         
              
          
          </div>
          
          <div className="flex w-32 justify-between  ">
            <a href='https://www.linkedin.com/in/kabina-thapa'> <FaLinkedin className="hover:text-white text-2xl lg:text-3xl" /></a>
           <a href='https://github.com/KabinaThapa'> <FaGithub  className="hover:text-white text-2xl lg:text-3xl" /></a>
           <a href="mailto:thapakabina28@gmail.com">
              <FaEnvelope className="hover:text-white lg:text-3xl text-2xl"/>
            </a>
        
         
        
          </div>
         
        
        </div>
        <div className="second  lg:w-[55%] w-[100%] flex flex-col lg:gap-10 text-[0.9rem] lg:text-base">

        <section  className={`${stickyAbout?"block lg:hidden sticky font-semibold top-0   mt-14 pl-6 pt-2 pb-2  text-white backdrop-blur text-lg":'font-semibold block lg:hidden   mt-10 pl-6 pt-2 pb-2  text-white backdrop-blur text-lg'}`}>
              About
            </section>

          <section id="about" className=" flex flex-col lg:p-10 p-6 gap-2  ">
         
         
            <div>
              <h1 className="lg:text-lg text-base text-white">
                About Me: Unveiling My Journey
              </h1>
              <p>
                Greetings! I'm Kabina Thapa, Allow me to share a bit about the
                journey that brought me to where I am today.
              </p>
            </div>
            <div>
              {" "}
              <h1 className="lg:text-lg text-base text-white">Venturing into the unknown</h1>
              <p>
                In 2017, I embarked on a life-changing journey, leaving the
                comfort of my home country to pursue my dreams in the United
                States. As an international student with a burning desire to
                delve into the world of technology, I chose to study Computer
                Science. It wasn't merely a choice of career; it was a bold step
                to challenge norms and break barriers.
              </p>
            </div>
            <div>
              <h1 className="lg:text-lg text-base text-white"> Breaking Stereotypes</h1>
              <p>
                Back in my homeland, the percentage of women pursuing technology
                was minimal. Motivated by a desire to change this narrative, I
                set out on a mission to be a trailblazer. I knew that by
                immersing myself in the world of computer science, I could
                inspire other young women to follow their passion and embrace
                the possibilities within the tech realm.
              </p>
            </div>
            <div>
              <h1 className="text-white lg:text-lg text-base">Educational Milestones</h1>
              <p>
                Fast forward to today, I hold a Bachelor's degree in Computer
                Science from Queens College/CUNY, a testament to my dedication
                and hard work. Additionally, I earned an Associate degree in
                Computer Science from Fiorello H. LaGuardia Community
                College/CUNY. My academic journey has equipped me with the
                skills and knowledge needed to excel in the dynamic field of
                technology.
              </p>
            </div>
            <div>
              <h1 className="text-white lg:text-lg text-base">
                Beyond Code: Unleashing Creativity
              </h1>
              <p>
                Beyond the world of coding, I find solace in the realm of 3D
                art, painting, and sketching during my free time. This creative
                outlet allows me to express myself, adding a vibrant and
                artistic dimension to my skill set.
              </p>
            </div>
            <div>
              <h1 className="text-white lg:text-lg text-base">Looking Ahead</h1>
              <p>
                Now, as I stand at the threshold of my career, I am eager to
                contribute my skills and enthusiasm to a dynamic team. I bring
                not only technical prowess but also a unique perspective shaped
                by my diverse experiences. Join me on this exciting journey of
                innovation and transformation.
              </p>
            </div>
          </section>
          <section  className={`${stickyProject ? "block lg:hidden sticky font-semibold top-0   mt-10 pl-6 pt-2 pb-2 z-20 text-white backdrop-blur text-lg":' lg:hidden block font-semibold   mt-10 pl-6 pt-2 pb-2  text-white backdrop-blur text-lg'}`}>
              Projects
            </section>
        
          <section id="projects" className="  flex flex-col lg:gap-16 gap-20 lg:p-4 p-6 ">
        

            <div className="flex lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 flex-col-reverse lg:gap-8 gap-6 items-start justify-evenly hover:bg-jet hover:bg-opacity-20  hover:rounded group lg:p-6 md:p-6 md:gap-12 ">
              <div className=" border p-1 border-slate-500 ">
                <img src="/glamedge.png" className="w-full h-full object-fit"/>
              </div>
              <div className=" lg:col-span-2 md:col-span-2 flex flex-col gap-4">
                <div className="flex  justify-between items-center">
                  <h1 className="lg:text-lg md:text-lg text-base text-white font-light group-hover:text-t group">GlamEdge Ecommerce Website</h1>
                  <div className="flex justify-evenly  lg:w-20 w-16 group-hover:translate-y-[-0.4rem] group-hover:text-t ">
                  <a href='https://github.com/KabinaThapa/GlamEdge' >  <FaGithub  className="hover:text-white text-xl " /></a> 
                   <a href='https://glam-edge.vercel.app/'><LuArrowUpRightFromCircle className="hover:text-white text-xl" /></a> 
                  </div>
                </div>

                <p>
                  GlamEdge is a dynamic e-commerce application designed for a
                  seamless shopping experience. With user-friendly categories
                  like Men, Women, and Beauty, it offers a curated selection of
                  featured products, on-sale items, and top trending fashion.
                  Users can easily add, delete, and manage items in their cart,
                  and the app provides a wishlist feature for saving favorite
                  items. From exploring the latest trends to hassle-free
                  checkout, GlamEdge delivers a modern and enjoyable shopping
                  journey.
                </p>
                <div className="font-normal  grid lg:grid-cols-3 grid-cols-2 lg:gap-4 gap-2">
                  <div className=" text-t bg-t bg-opacity-20 flex  justify-center rounded-3xl p-1">
                    Next.js
                  </div>
                  <div className=" text-t bg-t bg-opacity-20 flex  justify-center rounded-3xl p-1">
                    Tailwind CSS
                  </div>
                  <div className=" text-t bg-t bg-opacity-20 flex  justify-center rounded-3xl p-1">
                    React
                  </div>
                  <div className=" text-t bg-t bg-opacity-20 flex  justify-center rounded-3xl p-1">
                    Typescript
                  </div>
                  <div className=" text-t bg-t bg-opacity-20 flex  justify-center rounded-3xl p-1">
                    Redux-Toolkit
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:grid lg:grid lg:grid-cols-3 md:grid-cols-3 flex flex-col-reverse lg:gap-8 md:gap-12 gap-6 items-start justify-evenly  hover:bg-jet hover:bg-opacity-20 lg:p-6 md:p-6 hover:rounded group">
              <div className=" border p-1 border-slate-500">
              <img src="/weather.png" className="w-full h-full object-fit"/>
              </div>
              <div className=" lg:col-span-2 md:col-span-2 flex flex-col gap-4  ">
                <div className="flex justify-between items-center ">
                  <h1 className="text-white group-hover:text-t lg:text-lg md:text-lg text-base font-light">Weather Forecasts Website</h1>
                  <div className="flex justify-evenly  lg:w-20 w-16 group-hover:translate-y-[-0.4rem] group-hover:text-t  ">
                   <a href='https://github.com/KabinaThapa/weather-app'> <FaGithub className="hover:text-white text-xl" /></a> 
                    <a href=' https://weather-app-kabinathapa.vercel.app/'><LuArrowUpRightFromCircle className="hover:text-white text-xl" /></a>
                  </div>
                </div>
                <p>
                  Explore real-time weather forecasts for cities across the US
                  with the Weather Insight Website. Check current temperatures,
                  humidity, and wind conditions, along with detailed 3-hour
                  forecasts for the next 5 days. Stay informed and plan your
                  activities seamlessly with this intuitive weather application.
                </p>
                <div className="font-normal grid lg:grid-cols-3 grid-cols-2 lg:gap-4 gap-2">
                  <div className=" text-t bg-t bg-opacity-20 flex  justify-center rounded-3xl p-1">
                    React
                  </div>
                  <div className=" text-t bg-t bg-opacity-20 flex  justify-center rounded-3xl p-1">
                    Tailwind CSS
                  </div>
                
                  <div className=" text-t bg-t bg-opacity-20 flex  justify-center rounded-3xl p-1">
                    JavaScript
                  </div>
                  <div className=" text-t bg-t bg-opacity-20 flex  justify-center rounded-3xl p-1">
                   Context API
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 flex-col-reverse lg:gap-8 gap-6 items-start justify-evenly  hover:bg-jet hover:bg-opacity-10 lg:p-6 md:p-6 md:gap-12 hover:rounded group">
              <div className=" border p-1 border-slate-500">
                <img src='/portfolio.png'/>
              </div>
              <div className="lg:col-span-2 md:col-span-2 flex flex-col  gap-4">
                <div className="flex  justify-between items-center">
                  <h1 className="text-white group-hover:text-t lg:text-lg md:text-lg text-base font-light">An Old Portfolio</h1>
                  <div className="flex justify-evenly lg:w-20 w-16 group-hover:text-t group-hover:translate-y-[-0.4rem]">
                    <a className="" href='https://github.com/KabinaThapa/portfolio'><FaGithub className="hover:text-white text-xl"  /></a>
                    <a href='https://portfolio-thapakabina.vercel.app/'><LuArrowUpRightFromCircle className="hover:text-white text-xl" /></a>
                  </div>
                </div>
                <p>
                  Explore my previous portfolio where creativity met technology.
                  Featuring a captivating blend of Three.js magic, it showcased
                  a meticulously crafted 3D model designed in Blender. The
                  experience was elevated with smooth scrolling, offering a
                  seamless journey through digital artistry. Discover the
                  intersection of design and technology that defined this
                  portfolio and stay tuned for more exciting chapters in my
                  evolving journey.
                </p>
                <div className="font-normal grid lg:grid-cols-3 grid-cols-2 lg:gap-4 gap-2">
                  <div className=" text-t bg-t bg-opacity-20 flex  justify-center rounded-3xl p-1">
                    Three.js
                  </div>
                  <div className=" text-t bg-t bg-opacity-20 flex  justify-center rounded-3xl p-1">
                    Tailwind CSS
                  </div>
                  <div className=" text-t bg-t bg-opacity-20 flex  justify-center rounded-3xl p-1">
                    React
                  </div>
                  <div className=" text-t bg-t bg-opacity-20 flex  justify-center rounded-3xl p-1">
                    JavaScript
                  </div>
                  <div className=" text-t bg-t bg-opacity-20 flex  justify-center rounded-3xl p-1">
                    Blender
                  </div>
                </div>
              </div>
           
            </div>
            <div className=" lg:ml-12  flex items-center w-60 lg:justify-evenly  text-xl text-white font-semibold group hover:underline hover:underline-offset-8">
              <a href='/Kabina Thapa-Resume.pdf'>View Full Resume</a> 
            <LuArrowRight size={20} className="group-hover:translate-x-2"/>
              </div>
              <footer className="flex items-center gap-1 justify-center lg:p-10 text-[0.8rem]">
              <FaRegCopyright/>
                <p>
                    2024 Kabina Thapa. All rights Reserved.
                </p>
              </footer>
            
          </section>
         
          

        </div>
        </div>
      </div>
    </>
  );
}

export default App;
