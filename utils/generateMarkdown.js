//function to generate the markdown
function generateMarkdown(data) {
    return `
# Project Title
${data.title}
${data.getLicense}
# Description
${data.description}
# Table of Contents 
* [Installation](#-Installation)
* [Usage](#-Usage)
* [License](#-Installation)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Questions](#-Contact-Information)
    
# Installation
${data.installation}
# Usage
${data.usage}
# License 
${data.license}
* Use the contact information below to ask for license to be added. 
# Contributing 
${data.contributing}
# Tests
${data.tests}
# Contact Information 
* GitHub Username: ${data.userName}
* Contact Email: ${data.userEmail}
`;
}

//need to export the generateMarkdown function 
module.exports = generateMarkdown;