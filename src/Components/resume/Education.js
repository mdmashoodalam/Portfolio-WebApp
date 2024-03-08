import React from 'react';
import { motion } from 'framer-motion';
import Resumecard from './Resumecard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col md:flex-row gap-8'
    >
      <div className='w-full md:w-1/2'>
        <div className='py-8 md:py-12 font-titleFont'>
          <p className='text-sm text-designColor tracking-[4px]'>2019-2025</p>
          <h2 className='text-2xl md:text-4xl font-bold'>Education Quality</h2>
        </div>
        <div className='mt-8 md:mt-12 w-full'>
          <EducationList />
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <div className='py-8 md:py-12 font-titleFont'>
          <p className='text-sm text-designColor tracking-[4px]'>2022-2025</p>
          <h2 className='text-2xl md:text-4xl font-bold'>Internship</h2>
        </div>
        <div className='mt-8 md:mt-12 w-full'>
          <InternshipList/>
        </div>
      </div>
    </motion.div>
  );
};

const EducationList = () => (
  <div className='mt-6 md:mt-10 w-full h-auto md:h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6'>
    
    <Resumecard
      title='B-tech Computer Science'
      subTitle='Truba institute of engineering and information technology.(Pursuing)'
      result='7.59/10'
      des='Actively engaged in higher education to earn an advanced academic degree.
      Developing expertise in computer science engineering through a comprehensive curriculum.'
    />
    <Resumecard
      title='Diploma Computer Science'
      subTitle='MANUU Polytechnic Bengaluru.(2019-2022)'
      result='9.26 /10 '
      des='Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education'
    />
    <Resumecard
      title='10th'
      subTitle='Janakpur Road High School(2018-2019)'
      result='69.6/100'
      des='Successfully completed 10th-grade studies with a focus on Physics, Chemistry, and Mathematics in 2019.
      Transitioned to post-secondary education to pursue academic and career goals.'
    />
  </div>
);




const InternshipList = () => (
  <div className='mt-6 md:mt-10 w-full h-auto md:h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6'>
    <Resumecard
      title='Full-Stack'
      subTitle='Innogenx Pvt.Ltd(2022-2023)'
      result='Development'
      des=' I am undergone training ,A FUll Stack developer crafts interactive web interfaces , leveraging JavaScript and components to create engaging user experiences'
    />
    <Resumecard
      title='Web Developer'
      subTitle='Bharat Intern Pvt.Ltd(2022-23)'
      result='Development'
      des='I am undergone training in the Web developer, crafting seamless and captivating web experiences using the power of HTML, CSS and JS.'
    />
    {/* <Resumecard
      title='PHP DEVELOPER'
      subTitle='VishaTech Education(2020-2021)'
      result='Development'
      des="I'm the PHP wizard who crafts dynamic web experiences. With server-side finesse and database magic, I conjure seamless functionality for engaging online journeys."
    /> */}
  </div>
);

export default Education;
