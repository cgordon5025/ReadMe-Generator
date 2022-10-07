// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var licenseID;
var licenseTxt;
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      licenseID = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      return licenseID
    case "GNU General Public License v3.0":
      licenseID = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      return licenseID
    case "MIT License":
      licenseID = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      return licenseID
    case "BSD 2-Clause 'Simplified License":
      licenseID = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
      return licenseID
    case "BSD 3-Clause 'New' or'Revised' License":
      licenseID = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      return licenseID
    case "Boost Software License 1.0":
      licenseID = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      return licenseID
    case "Creative Commons Zero v1.0 Universal":
      return licenseID
    case "Eclipse Public License 2.0":
      licenseID = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
      return licenseID
    case "GNU Affero General Public License v3.0":
      licenseID = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
      return licenseID
    case "GNU General Public License v2.0":
      licenseID = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
      return licenseID
    case "Mozilla Public License v2.1":
      licenseID = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
      return licenseID
    case "The Unilicense":
      licenseID = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
      return licenseID
    default:
      licenseID = ''
      return licenseID

  }
}

// TODO: Create a function that returns the license link
//this is for the table of contents, not the actual license link (to the documentation)
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string (i personally like N/A)
function renderLicenseSection(license) {
  //if they choose no no license then the section will display N/A, if not it will display what they want
  (license == 'No License') ? licenseTxt = 'N/A' : licenseTxt = (license)
  return licenseTxt
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license) //we want this up top
  renderLicenseSection(data.license)
  // console.log(data)
  // console.log(data.license)
  // console.log(licenseID)
  // console.log(licenseTxt)
  const myData = `${licenseID}\n
  # ${data.repo_name} \n\n
  ## Description \n
  ${data.description} \n\n
  ## Table of Contents \n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributions](#to-contribute)\n
  [License](#license)\n
  [Tests](#tests)\n
  [Questions](#questions)\n
  ## Installation \n
  ${data.installation}\n\n
  ## Usage \n
  ${data.usage}\n\n
  ## To Contribute \n
  ${data.credits}\n\n
  ## License \n
  ${licenseTxt}\n\n
  ## Tests\n
  ${data.test_instruct}\n\n
  ## Questions \n
  See my other repos on my github or send me an email to collaborate\n
  github: [${data.github}](https://github.com/${data.github})\n
  email: ${data.email}

`
    ;
  return myData
}

module.exports = generateMarkdown;
