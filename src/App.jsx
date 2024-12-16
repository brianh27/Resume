import { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';



function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const [text,setText]=useState('')
  const [cursor,setCursor]=useState(true)
  const [enter, setEnter] = useState(0);
  const [list,setList]=useState([])
  const [enterPressed, setEnterPressed] = useState(false);
  const commands={'help':<div><p>ABOUT: Info about Brian He</p>
    <p>Resume: Brian He's skills and activities</p>
    <p>Skills: Brian He's skills</p>
    <p>Mindsets: Brian He's mindsets</p>
    <p>TESTFORGE: Brian He's main website</p>
    
    
    </div>, 'about':
    <div><p>Brian He is a current sophmore at Lakeside School (Seattle). He is the leader of CS club, writes for the school newspaper, and is a website designer.</p></div>,
    'resume':<div>
      <h2>Leader of Computer Science Club</h2>
  <p>2023-2024</p>
  <ul>
    <li>Each week I went to my middle school, Odle, to teach students on coding concepts</li>
    <li>Helped run, advertise and solicit feedback</li>
  </ul>

  <h2>Website Development</h2>
  <p>August 2021 - Present</p>
  <ul>
    <li>Learned web development from the University of Helsinki’s Fullstack Web Development course.</li>
    <li>Programmed website for essay review for hackathon (2nd place).</li>
    <li>Programmed a website for generating study guides, and inventory of practice problems.</li>
    <li>Learned teamwork, javascript, react, html, and using AI to improve the world.</li>
  </ul>

  <h2>Social Media and Journalism</h2>
  <p>October 2020 - Present</p>
  <ul>
    <li>Write science and tech for the school newspaper</li>
    <li>Created a youtube channel teaching coding and science</li>
    <li>Ran a youtube channel teaching geography which amassed over 1.8k subscribers and 80k views.</li>
    <li>Learned how to use methods such as humor, visuals, and metaphors to engage the audience.</li>
    <li>Clearly communicated geopolitics around the world on my geography channel and science projects and topics on my STEM channel.</li>
  </ul>

  <h2>Awards</h2>
  <ul>
    <li>Reached state final in First Lego League; Received 1st place in innovation project; Learned about programming, teamwork, and effective communication.</li>
    <li>Qualified for USACO Silver</li>
    <li>Received 1st place in all grades in the Fall Classic Individual Math Contest.</li>
    <li>Went to state finals, received 1st place team award and ranked 9th place individually in the Math is Cool competition</li>
    <li>Completed 210 mile Seattle to Portland Bike Race.</li>
    <li>Completed a half marathon</li>
    <li>Competed as Varsity Top 14 in cross country.</li>
    <li>Received 9th place nationally in AOPS Short Story Contest</li>
  </ul>

  <h2>Volunteer Roles</h2>
  <p>October 2020 - Present</p>
  <ul>
    <li>Summer camp teacher for CAD at Salvation Army</li>
    <li>Served on my school’s assembly committee</li>
    <li>Served as a WEB leader - introducing new students to the school</li>
    <li>Founder and leader of Green Club.</li>
  </ul>

  <h2>Schools:</h2>
  <p>Lakeside High School '27 -Seattle, WA: 4.0 GPA</p>
  <p>Odle Middle School '23 -Bellevue, WA: 4.0 GPA</p>
    
    </div>, 'testforge':
    <div>
      <p>I developed this website because I believe AI is a tool to make lives easier, especially for education. This websites leverages AI to generate flashcards and practice tests. </p>
      <p>It also uses AI to build websites, making it trivial to create a website - zero cost, no coding skills needed. </p>
      <p>I also strive to create a community with my daily puzzles and math challenges, there is even a community board where everyone can each contribute a pixel. This project taught me about coding, design, and advertising. It has over 90 users right now. </p>
      <p>There is also an Upload document page, for documents. I do this to encourage peer review and collaboration through this easy sharing of documents.</p>

      <p>To circumvent the hassle of creating an account, here is the login details for a guest one.  </p>
      <p>Username: Guest</p>
      <p>Password: 12345</p>
      <p><a href='https://testforger.vercel.app'> Click to see website</a></p>
    </div>, 'skills': <div>
      <p>HTML 5</p>
      <p>Tailwind CSS</p>
      <p>CSS 3</p>
      <p>Node.JS</p>
      <p>Pocketbase</p>
      <p>React</p>
      <p>Javascript</p>
      <p>Python</p>
      <p>Full Stack Web Development</p>
      <p>Use of AI</p>
      <p>Social Media</p>
      <p>Writing</p>
      <p>Conducting Interviews</p>
      <p>Instruction/Mentoring</p>
    </div>,'mindsets':
    <div>
      <p>Determined: I will not give up</p>
      <p>Growth Mindset: I believe in my ability to develop my skills through effort and persistence</p>

<p>Resilient: I learn from setbacks and use them as opportunities for growth</p>
<p>Curious: I embrace challenges as chances to learn and grow</p>
<p>Adaptable: I can adjust my approach when things don’t go as planned</p>
<p>Persistent: I keep going even when faced with difficulties</p>
<p>Reflective: I think critically about my experiences to learn and improve</p>
<p>Open-Minded: I consider different perspectives and adapt my thinking</p>

    </div>
    }
  

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        setEnterPressed(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === 'Enter' && enterPressed) {
        console.log('Enter key released for the first time');
        list.push("C:\>"+text)
        
        list.push(commands[text.toLowerCase()])
        setText('')
        setEnterPressed(false); // Reset state for next press
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [enterPressed]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      let date =new Date();
      
      if (date.getMilliseconds()<500){
        setCursor(true)
      }else{
        setCursor(false)
      }
      inputRef.current.focus();

    }, 10);

    return () => clearInterval(intervalId);
  }, []); 
  
  
  //<li key={i}><h1>{n}</h1></li>)}
  return (
    <div style={{
      color: 'white'
    }}>
      <h1>brianheresume.vercel.app [Resume]</h1>
      
      <h1>(C) Brian He. All rights not reserved.</h1>
      <h1>Type 'help' for a list of commands.</h1>
      
      {list.map((n) => (
        
          <h1>{n}</h1>
        
      ))}


      
      <h1>{"C:\>"+text}
        {cursor&&'|'}
        
        
      </h1>
      <p><input ref={inputRef} value={text} onChange={(e)=>{setText(e.target.value)}} autoFocus style={{ backgroundColor: 'black', color: 'black', border: 'none', outline: 'none' }}></input>      
      </p>
    </div>
  );
}

export default App;
