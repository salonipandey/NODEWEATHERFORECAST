const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    console.log('location', location)

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:9007/weather?address=' + location).then((response) => {
        // console.log(data)
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                console.log(data)
                messageOne.textContent = data.location.name
                messageTwo.textContent = data.current.temperature
            }
        })
    })
})