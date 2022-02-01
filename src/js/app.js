const disocrdTag = 'matsn0w#4402'
const discordButton = document.querySelector('#discord')
const copiedMessage = document.querySelector('#copiedMessage')

discordButton.addEventListener('click', (e) => {
    console.log(`Add me on Discord: ${disocrdTag}`)

    // copy text to clipboard
    navigator.clipboard.writeText(disocrdTag)

    // show a message
    copiedMessage.style.visibility = 'visible'
})
