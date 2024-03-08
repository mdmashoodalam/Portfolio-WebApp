import React from 'react';
import { BiLogoReact, BiLogoHtml5 } from "react-icons/bi";
import { FaMobileAlt, FaPhp, FaGlobe } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { MdDeveloperMode } from "react-icons/md";
import { FaWordpress } from 'react-icons/fa';
import Title from './Title';
import Card from './Card';
const Features = () => {
    return (
        <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
            <Title title="Features" des="What I do" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                <Card title="React Developer"
                    des="A React developer crafts interactive web interfaces using the React framework, leveraging JavaScript and components to create engaging user experiences."
                    icon={<BiLogoReact />}
                />
                <Card title="WordPress developer "
                    des="I'm a passionate WordPress developer with extensive experience in crafting dynamic and user-friendly websites. With a keen eye for detail and a commitment to excellence, I bring your digital vision to life. "
                    icon={<FaWordpress />}
                />
                <Card title="App Developer"
                    des="I'm the React Native mobile app developer, crafting seamless and captivating mobile experiences using the power of JavaScript and native components."
                    icon={<FaMobileAlt />}
                />
                <Card title="UI Designer"
                    des="I'm a UI designer, sculpting digital aesthetics with a creative blend of colors, layouts, and elements, crafting intuitive and visually pleasing user experiences."
                    icon={<SlScreenDesktop />}
                />
                <Card title="Full Stack Developer"
                    des="I'm a full stack developer, proficient in both front-end and back-end technologies, building complete web solutions and intractive interface."
                    icon={<MdDeveloperMode />}
                />
                <Card title="Deploy-Hosting"
                    des="I handle deployment and hosting,your web applications and mobile application are live and accessible to users worldwide."
                    icon={<FaGlobe />}
                />
            </div>
        </section>
    );
}

export default Features;
