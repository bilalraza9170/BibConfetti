import React from 'react';

class PublicationButtons extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.handleButtonClick('conference_papers')}>Search Conference Papers</button>
        <button onClick={() => this.handleButtonClick('research_articles')}>Search Research Articles</button>
        <button onClick={() => this.handleButtonClick('journals')}>Search Journals</button>
      </div>
    );
  }

  handleButtonClick(publicationType) {
    // Call a function to handle button click
    // This function will navigate to the respective folder
    // You can implement this function based on your requirements
    console.log("Button clicked:", publicationType);
    // Example: navigateToFolder(publicationType);
  }
}

export default PublicationButtons;
