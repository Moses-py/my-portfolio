import { useEffect } from 'react';
import { motion } from 'framer-motion';
const skills = [
    { href: "#git_", title: "Git" },
    { href: "#json_", title: "JSON" },
    { href: "#html_", title: "HTML5" },
    { href: "#react_", title: "React" },
    { href: "#python_", title: "Python" },
    { href: "#sql_", title: "SQL" },
    { href: "#aws_", title: "AWS" },
    { href: "#wordpress_", title: "WordPress" },
    { href: "#npm_", title: "npm" },
    { href: "#css_", title: "CSS3" },
    { href: "#jquery_", title: "jQuery" },
    { href: "#js_", title: "JavaScript" },
    { href: "#node.js_", title: "Node.js" },
    { href: "#mongodb", title: "Mongo DB" },
    { href: "#restapis", title: "Rest APIs" },
    { href: "#apollogql", title: "Apollo GraphQL" },
    { href: "#bootstrap", title: "Bootstrap" },
    { href: "#lodash", title: "_Lodash" },
    { href: "#es5/es6", title: "ES5/ES6" },
    { href: "#typescript", title: "Typescript" }
];

const Skills = ({ ...rest }) => {
  useEffect(() => {
    console.log('Loading TagCanvas...');
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: "#ee7652b6",
      outlineThickness: 0.5,
      outlineColour: '#FE0853',
      maxSpeed: 0.05,
      freezeActive: true,
      shuffleTags: true,
      shape: 'sphere',
      zoom: 1.1,
      wheelZoom: false,
      noSelect: true,
      textFont: null,
      freezeDecel: true,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 1.1,
    };
    try {
      TagCanvas.Start('tagcanvas', 'taglist', tagCanvasOptions);
    } catch (e) {
      console.log('Canvas error.');
      console.log(e);
    }
  }, []);

  const listStyle= {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: "800",
      fontSize: "3rem"
    }
  

  return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ delay : 1 }} className='container'>
        <canvas
          id='tagcanvas'
          width='820'
          height='600'
          style={{
            maxWidth: '1000px',
            width: '100%',
            zIndex: '99',
            position: 'relative',
            margin: '5% auto',
          }}
          className='to-fade-in fast-anim'
        ></canvas>
        <div id='taglist' style={{ display: 'none' }}>
          <ul>
            {skills.map((skill) => (
              <li style={listStyle} key={skill.title}>
                <a href={skill.href}>{skill.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
  );
};

export default Skills;