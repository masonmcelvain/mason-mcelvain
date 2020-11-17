import React from 'react';
import './Projects.scss';
import ProjectListing from '../ProjectListing/ProjectListing';
import Dropdown from '../Dropdown/Dropdown';

export default function Projects({ theme }) {
  let categoryTheme = { borderColor: `var(--${theme}Shadow)` };
  let nimbusValidatorGif = 'https://media.giphy.com/media/6Zc3pEySruneZ6XY4I/giphy.gif';
  let nimbusChatGif = 'https://media.giphy.com/media/Piv6R2iqQ7OwhUUaQV/giphy.gif';

  return (
    <div className="Projects">
      <h2 className="category" style={categoryTheme}>Projects</h2>
      <ProjectListing
        link="https://github.com/calpoly-csai/nimbus-validator-app"
        title="CSAI Phrase Validator"
        description="A web app for club members to validate phrases that Nimbus, the club's AI Chatbot, can understand."
      >
        <Dropdown
          name="Demo"
          image={nimbusValidatorGif}
          theme={theme}
        />
      </ProjectListing>
      <ProjectListing
        link="https://wonderful-meninsky-341976.netlify.app/"
        title="Swanton Chat Bot"
        description="Mobile friendly tool to communicate with Swanton Ranch's chatbot."
      />
      <ProjectListing
        link="https://ifixit-grab-bag-mm.netlify.app/"
        title="iFixit Grab Bag"
        description="Create a collection of devices you own to easily find repair guides."
      />
    </div>
  );
}