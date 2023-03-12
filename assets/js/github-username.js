// To enable project links, we'll ask users for their github username and store it in local storage

let githubUsername = window.localStorage.getItem('ghName')

const ensureGHUsername = () => {
  if (!githubUsername) {
    githubUsername = window.prompt(
      'Please enter your GitHub username. \n\n This site uses it to generate personalized project links. \n\n If you dismiss this prompt, it will keep appearing until you enter your information. 😀',
      ''
    )
    window.localStorage.setItem('ghName', githubUsername.trim())
  }
}

const repoLink = document.getElementById('custom-repo-link')
if (repoLink) repoLink.href += githubUsername

window.addEventListener('load', () => ensureGHUsername())
