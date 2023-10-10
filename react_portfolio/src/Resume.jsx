import React from 'react'
import Stack from 'react-bootstrap/Stack';
import './components/Page.css';

function Resume() {
  return (
    <div>
      <a href='portfolio.pdf' download="myname">download resume</a>
     <Stack gap={3}>
      <div>
        <h2>Backend Skills</h2> 
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
        </ul>

      </div>
      <div >
      <h2>Frontend Skills</h2> 
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Routing</li>
          <li>Bulma</li>
        </ul>
      </div>
      <div className="p-2">Third item</div>
    </Stack>
      </div>
  )
}

export default Resume