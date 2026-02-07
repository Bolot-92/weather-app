const input = document.getElementById("input")
const btn = document.getElementById("btn")
const text = document.getElementById("text")

btn.addEventListener('click', () => {
    console.log(input.value)
    const link = `http://api.weatherapi.com/v1/current.json?key=ebb331eaa5c24415984114257260702&q=${input.value}`
    fetch(link)
        .then(res => res.json())
        .then((res) => {
            console.log(res.current.temp_c)
            text.innerText = res.current.temp_c + "°"
        }) 
})