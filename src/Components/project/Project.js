import React from 'react';
import Title from '../layout/Title';
import Projectcard from './Projectcard';
import coll from "../plogo.jpeg"
import we from "../testimonial/wealogo.png"
import port from "../testimonial/pologo.png"
import clc from "../testimonial/clclogo.png"
import net from "../testimonial/nlogo.png"
const Project = () => {
    return (
        <section id='project' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center mb-12'>
                <Title title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK' des='MY Project' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <Projectcard
                    title='Patent Hub'
                    des="Introducing Patent Hub, a cutting-edge platform crafted with React.js, Redux, and Firebase, revolutionizing your patent exploration journey. Patent Hub simplifies the intricate world of patents, offering a streamlined experience for discovering, understanding, and registering patents.

                    Easily locate patents of interest, explore comprehensive profiles, and receive tailored recommendations based on your preferences. Our real-time database ensures you stay up-to-date with the latest developments, while insightful user reviews provide invaluable perspectives.
                    
                    Save and compare your favorite patents effortlessly, utilizing interactive maps for efficient planning and decision-making. Whether you're an inventor, entrepreneur, or a curious enthusiast, Patent Hub empowers you to navigate the patent landscape with ease.
                    
                    Join us for free and embark on a journey to unlock the potential of intellectual property. Discover the perfect patents that can shape your future endeavors today!"
                    src={coll}
                />
                <Projectcard
                    title='Weather-Live-WebApp'
                    des="Introducing Weather-Live-WebApp, a dynamic web application crafted with HTML, CSS, and JavaScript, bringing real-time weather updates straight to your fingertips.

                    Weather-Live-WebApp seamlessly integrates with an API to access live weather data, providing users with accurate and up-to-date information about current weather conditions, forecasts, and more.
                    
                    With a clean and intuitive user interface, Weather-Live-WebApp presents weather information in an easy-to-understand format, allowing users to quickly grasp the current weather situation and plan accordingly.
                    
                    
                    
                    Live Weather Updates: Access real-time weather data fetched through the API, ensuring that users receive the most accurate and timely information.
                    
                    
                    
                    
                    
                    Location-Based Forecasting: Receive personalized weather forecasts based on your current location, allowing for precise planning and preparation."
                    src={we}
                />
                <Projectcard
                    title='Portfolio_webApp'
                    des="
                    Introducing Portfolio-webApp, an innovative platform crafted with React.js, Firebase, and Redux, designed to empower individuals with essential insights and resources for professional growth.
                    Explore the Projects Repository: Delve into detailed project information to make informed decisions about collaborations and contributions.
                    Career Guidance: Access practical advice and tips on career development, ranging from resume building to interview strategies.
                    Real-Time Updates: Stay up-to-date with the latest trends and technologies in your field of expertise.
                    Saved Resources: Easily bookmark and access valuable articles, tutorials, and tools to enhance your skill set and productivity.
                    Take the next step in your professional journey with Portfolio - where opportunities meet preparation."
                    src={port}
                />
                <Projectcard
                    title='Calculator_webApp'
                    des="Introducing CalcWeb, a sleek and intuitive web-based calculator designed to make calculations easy and efficient. Built with HTML, CSS, and JavaScript, CalcWeb offers a user-friendly interface and a powerful computing engine for all your calculation needs.
                    Simple and Clean Interface: CalcWeb's design focuses on ease of use, providing a straightforward interface that anyone can use to perform basic arithmetic operations like addition, subtraction, multiplication, and division.

                    Responsive Design: Thanks to responsive CSS, CalcWeb works flawlessly on devices of all sizes, from desktops to mobile phones, ensuring you can do your calculations anytime, anywhere.

                    Real-Time Calculations: With JavaScript at its core, CalcWeb processes inputs instantly, offering real-time feedback as you type. There's no need to press an equals button; see results as you enter your expressions.

                    !"
                    src={clc}
                />
                <Projectcard
                    title='Netflix'
                    des="hows to life. Crafted meticulously with HTML, CSS, and JavaScript, MyFlix replicates the immersive experience of Netflix, presenting a sleek and user-friendly interface that movie enthusiasts will love.
                    legant Design: With a keen eye for detail, the UI/UX design of MyFlix mirrors the sophisticated look and feel of Netflix, offering a seamless browsing experience that keeps you engaged.

                    Responsive Layout: MyFlix boasts a responsive design that ensures a flawless viewing experience on devices of all sizes, from desktops to smartphones, thanks to the meticulous application of CSS.

                    Dynamic Content: Leveraging JavaScript, MyFlix dynamically displays a wide array of movies and TV shows, allowing users to easily browse, search, and select their preferred content.

                    User-Friendly Navigation: Navigate through the MyFlix platform effortlessly, with intuitive menus and categories designed to make finding your next binge-watch a breeze.
                    "
                    src={net}
                />
                {/* <Projectcard
                    title='Social media clone'
                    des="I'm the React Native mobile app developer, crafting seamless and captivating mobile experiences using the power of JavaScript and native components."
                    src={pic}
                />
                <Projectcard
                    title='Social media clone'
                    des="I'm the React Native mobile app developer, crafting seamless and captivating mobile experiences using the power of JavaScript and native components."
                    src={pic}
                />
                <Projectcard
                    title='Social media clone'
                    des="I'm the React Native mobile app developer, crafting seamless and captivating mobile experiences using the power of JavaScript and native components."
                    src={pic}
                /> */}
            </div>
        </section>
    );
};

export default Project;

