import { StrictMode, useState } from "react";
import "./App.css";
import { FaCopyright, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuArrowBigRight, LuArrowRight, LuArrowUpRightFromCircle } from "react-icons/lu";
import { useEffect } from "react";

function App() {
  const[active,setActive]=useState('about')
  
  function handleScrollto(){
    const sections=document.querySelectorAll('section')
    const scrollPosition=window.scrollY+200
    sections.forEach((section)=>{
      const sectionTop=section.offsetTop
      const sectionBottom=sectionTop+section.offsetHeight
      if(scrollPosition>=sectionTop && scrollPosition<= sectionBottom){
        setActive(section.id)
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
    if (id) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="outbox w-full bg-mount ">
       <div className=" w-full bg-black bg-opacity-10 h-auto  flex md:flex-row flex-col justify-around  text-slate-400 font-sans font-extralight tracking-wide leading-relaxed">
        <div className="Intro md:sticky md:top-0  md:w-[35%] w-[100%] h-auto md:h-screen flex flex-col justify-center gap-20 md:p-10 p-5">
          <div className="flex flex-col justify-center items-center md:items-start gap-2 font-extralight">
            <a className=" md:text-[3.5rem] text-[2rem] font-bold text-white leading-none tracking-tight ">
              Kabina Thapa
            </a>
            <h1 className="md:text-[1.5rem] text-[1rem] text-gray-100 ">
              Aspiring Front-End Developer
            </h1>
            <p className="md:text-lg text-sm md:text-start text-center">
              Crafting pixel-perfect wonders and turning ideas into interactive
              reality.
              <p>Let's build something extraordinary together!</p>
            </p>
          </div>
          <div className="flex flex-col text-2xl gap-4 ">
          <div  className='flex items-center'>
          <a
              href="#about"
              className={`${active==='about' && 'font-normal hover:no-underline text-white '}  hover:underline hover:underline-offset-8` }
             
              onClick={() => handlescroll("about")}
            >
              About
              
            </a>
            <div className={`${active==='about'?'opacity-100':'opacity-0'}  w-full bg-t h-[0.1rem]  ml-4 rounded` }></div>
          </div>
          <div className="flex items-center"> 
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
          <div className="flex flex-col gap-4">
          <div className="flex w-20 justify-between ">
            <a href='https://www.linkedin.com/in/kabina-thapa'> <FaLinkedin size={28} className="hover:text-white" /></a>
           <a href='https://github.com/KabinaThapa'> <FaGithub size={28} className="hover:text-white" /></a>
        
          </div>
          <div className="flex items-center gap-2">
           
          <p className="hover:text-white">Email: thapakabina28@gmail.com</p>
          </div>
        
          </div>
         
        
        </div>
        <div className="second  md:w-[55%] w-[100%] flex flex-col gap-10 ">
          <section id="about" className=" flex flex-col p-10 gap-2  ">
            <div>
              <h1 className="text-lg text-white">
                About Me: Unveiling My Journey
              </h1>
              <p>
                Greetings! I'm Kabina Thapa, Allow me to share a bit about the
                journey that brought me to where I am today.
              </p>
            </div>
            <div>
              {" "}
              <h1 className="text-lg text-white">Venturing into the unknown</h1>
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
              <h1 className="text-lg text-white"> Breaking Stereotypes</h1>
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
              <h1 className="text-white text-lg">Educational Milestones</h1>
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
              <h1 className="text-white text-lg">
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
              <h1 className="text-white text-lg">Looking Ahead</h1>
              <p>
                Now, as I stand at the threshold of my career, I am eager to
                contribute my skills and enthusiasm to a dynamic team. I bring
                not only technical prowess but also a unique perspective shaped
                by my diverse experiences. Join me on this exciting journey of
                innovation and transformation.
              </p>
            </div>
          </section>
          <section id="projects" className="  flex flex-col gap-16 p-4 text-[0.9rem] ">
            <div className="flex  items-start justify-evenly hover:bg-jet hover:bg-opacity-20  hover:rounded group p-6">
              <div className="w-[30%] border p-1 border-slate-500 ">
                <img src="/glamedge.png" className="w-full h-full object-fit"/>
              </div>
              <div className="w-[55%] flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg text-white font-light group-hover:text-t group">GlamEdge Ecommerce Website</h1>
                  <div className="flex justify-around w-16 group-hover:translate-y-[-0.4rem] group-hover:text-t ">
                  <a href='https://github.com/KabinaThapa/GlamEdge' >  <FaGithub size={20} className="hover:text-white" /></a> 
                   <a href='https://glam-edge.vercel.app/'><LuArrowUpRightFromCircle size={20} className="hover:text-white" /></a> 
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
                <div className="font-normal grid grid-cols-3 gap-4">
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
            <div className="flex  items-start justify-evenly  hover:bg-jet hover:bg-opacity-20 p-6 hover:rounded group">
              <div className="w-[30%] border p-1 border-slate-500">
              <img src="/weather.png" className="w-full h-full object-fit"/>
              </div>
              <div className="w-[55%] flex flex-col gap-4 ">
                <div className="flex justify-between items-center ">
                  <h1 className="text-white group-hover:text-t text-lg font-light">Weather Forecasts Website</h1>
                  <div className="flex justify-around w-16 group-hover:translate-y-[-0.4rem] group-hover:text-t  ">
                   <a href='https://github.com/KabinaThapa/weather-app'> <FaGithub size={20} className="hover:text-white" /></a> 
                    <a href=' https://weather-app-kabinathapa.vercel.app/'><LuArrowUpRightFromCircle size={20} className="hover:text-white" /></a>
                  </div>
                </div>
                <p>
                  Explore real-time weather forecasts for cities across the US
                  with the Weather Insight Website. Check current temperatures,
                  humidity, and wind conditions, along with detailed 3-hour
                  forecasts for the next 5 days. Stay informed and plan your
                  activities seamlessly with this intuitive weather application.
                </p>
                <div className="font-normal grid grid-cols-3 gap-4">
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
            <div className="flex  items-start justify-evenly  hover:bg-jet hover:bg-opacity-10 p-6 hover:rounded group">
              <div className="w-[30%] border p-1 border-slate-500">
                <img src='/portfolio.png'/>
              </div>
              <div className="w-[55%] flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-white group-hover:text-t text-lg font-light">An Old Portfolio</h1>
                  <div className="flex justify-around w-16 group-hover:text-t group-hover:translate-y-[-0.4rem]">
                    <a className="" href='https://github.com/KabinaThapa/portfolio'><FaGithub className="hover:text-white" size={20} /></a>
                    <a href='https://portfolio-thapakabina.vercel.app/'><LuArrowUpRightFromCircle className="hover:text-white" size={20} /></a>
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
                <div className="font-normal grid grid-cols-3 gap-4">
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
            <div className=" ml-12  flex items-center w-60 justify-evenly text-xl text-white font-semibold group hover:underline hover:underline-offset-8">
              <a href='/Kabina Thapa-Resume.pdf'>View Full Resume</a> 
            <LuArrowRight size={20} className="group-hover:translate-x-2"/>
              </div>
              <footer className="flex items-center gap-1 justify-center p-10">
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
