// To enable project links, we'll ask users for their github username and store it in local storage

const localStorageKey = 'ghName'
const dialog = document.getElementById('gh-name-dialog')
const cancelBtn = document.getElementById('cancel-btn')
const form = document.getElementById('gh-username-form')
let cancelAttempts = 0

/****** Functions ******/
const handleSubmit = (e) => {
  e.preventDefault()
  const ghNameInput = document.getElementById('gh-name-input')
  window.localStorage.setItem(localStorageKey, ghNameInput.value)
  ghNameInput.value = ''
  dialog.close()
  createCustomRepoLink()
}

// run this function once we have a username in localstorage
function createCustomRepoLink() {
  let githubUsername = window.localStorage.getItem(localStorageKey)
  if (!githubUsername) return 
  const repoLink = document.getElementById('custom-repo-link')
  if (repoLink) repoLink.href += githubUsername
}

const openDialog = () => {
  dialog.showModal()
}

const showWarning = () => {
  const dialogTextDiv = document.getElementById('dialog-text')
  let warning = document.getElementById('dialog-warning')
  if (warning) dialogTextDiv.removeChild(warning)
  const githubUsername = window.localStorage.getItem(localStorageKey)
  if (!githubUsername) {
    warning = document.createElement('p')
    warning.id = 'dialog-warning'
    warning.style.color = '#c9184a'
    warning.innerText =
      "If you don't set a GitHub username, some project links might not work properly."
    dialogTextDiv.appendChild(warning)
  }
}

const closeDialog = (event) => {
  event.preventDefault()
  if (cancelAttempts) dialog.close()
  cancelAttempts = 1
  showWarning()
}


/****** Event Listeners ******/
window.addEventListener('load', () => {
  const githubUsername = window.localStorage.getItem(localStorageKey)
  if (!githubUsername) {
    console.log('No github username')
    openDialog()
  } else {
    createCustomRepoLink()
  }
})

cancelBtn.addEventListener('click', closeDialog)

form.addEventListener('submit', handleSubmit)
