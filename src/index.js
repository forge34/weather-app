import './style/main.css'
import { Weather } from './weather'

(async function() {

    let btn = document.getElementById('btn')
    btn.addEventListener('click' ,async () => {
        let search = document.getElementById('search')
        let data = await Weather.getData(search.value)

        let tempc = document.getElementById('tempc')
        let tempf = document.getElementById('tempf')
        let winds = document.getElementById('winds')

        console.log(tempc , tempf , winds)

        let d = Weather.Data(data)
        tempc.textContent = `temperature C : ${d.temp_c} C°`
        tempf.textContent = `temperature F : ${d.temp_f} F`
        winds.textContent = `Wind speed : ${d.wind_s} KM/h`

        console.log(Weather.Data(data))
    })

})();
