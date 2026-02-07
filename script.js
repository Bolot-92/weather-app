const input = document.getElementById("input")
const btn = document.getElementById("btn")
const text = document.getElementById("text")
const icon = document.getElementById("icon")

btn.addEventListener('click', () => {
    console.log(input.value)
    const link = `https://api.weatherapi.com/v1/current.json?key=ebb331eaa5c24415984114257260702&q=${input.value}`
    fetch(link)
        .then(res => res.json())
        .then((res) => {
            console.log(res.current.temp_c)
            text.innerText = res.current.temp_c + "°"
            icon.src = "https:" + data.current.condition.icon
            icon.alt = data.current.condition.text
            
            setBackground(data.current.condition.text)

        }) 
})

function setBackground(condition) {
    const body = document.body

    body.classList.remove("clear", "cloudy", "rain", "snow", "thunder")

    if (condition.includes("ясно") || condition.includes("Sunny")) {
        body.classList.add("clear")
    } else if (condition.includes("облачно") || condition.includes("cloud")) {
        body.classList.add("cloudy")
    } else if (condition.includes("дождь") || condition.includes("rain")) {
        body.classList.add("rain")
    } else if (condition.includes("снег") || condition.includes("snow")) {
        body.classList.add("snow")
    } else if (condition.includes("гроза") || condition.includes("thunder")) {
        body.classList.add("thunder")
    }
}
