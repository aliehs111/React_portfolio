import Accordion from "react-bootstrap/Accordion";

function AccordionAbout() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>My Approach</Accordion.Header>
        <Accordion.Body>
          The reason I did well in the class is because I learned how to be
          resourceful and patient. I remained calm and positive <em>almost</em>{" "}
          every time my apps crashed. I learned how to read the error messages
          and find the problem. I learned how to really read documentation and
          sometimes take risks implementing other things I learned from YouTube
          videos or Slack Overflow. Testing small changes, moving code around,
          learning about the different JavaScript versions and when to use them.
          I learned how to use the Chrome Dev Tools to debug my code.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>My Goals</Accordion.Header>
        <Accordion.Body>
          I'm not looking for a "job", I'm looking for a team and an
          opportunity. If I can't find the right fit, I will probably create my
          own team of talented developers and sell cool apps myself. I took the
          course because I just wanted to know how to do it, maybe have a little
          side gig and make custom website and applications in my current field
          of commercial construction. But something happened, and through all
          the hard work and hours of homework, I got hooked. This is what I want
          to do now. <br />
          <br />
          My interests in development are mostly in the backend with a special interest in integrating AI and machine learning to make my apps more practical, engaging and truly useful in helping an organization be more efficient.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>My Career Background</Accordion.Header>
        <Accordion.Body>
          I bring with me 20 years experience of sales and project management. With
          experience specifically in commercial construction, I have a working
          knowledge of the esoteric terms and processes that are used in
          construction and architectural documents. I have managed my own cost
          accounting and billing for my projects, overseen the project inventory process and vendor payments.  I have negotiated, sold and managed millions in revenue for large complex projects in different stages from pre-sales to completion running concurrently.
          <br />
          <br />
          So it would make sense to work on application specific to contruction
          workflow and accounting. However, I'm up for anything that seems like
          a worthwhile endeavor. <br />
          <br />
          While I have a great team to support my projects, being a project
          manager means that the buck stops with me and at any given time, I
          will have to drop back and play D. That might mean doing my own
          estimating, writing and implementing a material logistics plan,
          visiting job sites and managing the field or addressing details and QC
          issues. It's up to me to stay at work for as long as it takes to meet a deadline.  I am the one who handles the difficult conversations, and
          negotiates solutions with clients and subcontractors to keep the
          project moving forward, meet the contract obligations and protect the
          company's interests.  I do all this while maintaining the most important aspect of business, <em>the relationships</em>.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionAbout;
