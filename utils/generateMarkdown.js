// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      //get license id
      break
    case "GNU General Public License v3.0":
      break
    case "MIT License":
      break
    case "BSD 2-Clause 'Simplified License":
      break
    case "BSD 3-Clause 'New' or'Revised' License":
      break
    case "Broost Software License 1.0":
      break
    case "Creative Commons Zero v1.0 Universal":
      break
    case "Eclipse Public License 2.0":
      break
    case "GNU Affero General Public License v3.0":
      break
    case "GNU General Public License v2.0":
      break
    case "GNU Lesser General Public License v2.1":
      break
    case "Mozilla Public License v2.1":
      break
    case "The Unilicense":
      break
    default:

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
