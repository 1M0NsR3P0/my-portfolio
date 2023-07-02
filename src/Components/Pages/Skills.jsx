import React from 'react';
import SkillBar from 'react-skillbars';

const Skills = () => {
    const colors = {
        bar: "#3498db",
        title: {
          text: "#fff",
          background: "#2980b9"
        }
      };
    const SKILLS = [
        { type: 'HTML', level: 75 },
        { type: 'CSS', level: 70 },
        { type: 'Javascript', level: 85 },
        { type: 'NodeJs', level: 83 },
        { type: 'ReactJs', level: 88 },
        { type: 'ExpressJs', level: 72 },
        { type: 'Mongodb', level: 65 },
        { type: 'PhotoShop', level: 55 },
        { type: 'CSS FrameWorks', level: 80 },
      ];
      
    return (
        <div>
            <div className='text-xl text-gray-900'>Skills i honed</div>
            <SkillBar skills={SKILLS} height={'2vh'} animationDelay={1000} offset={`25px`} colors={colors}/>          
        </div>
    );
};

export default Skills;