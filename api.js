const petro = document.getElementById('Petro')
const tucson = document.getElementById('Tucson')
const tokyo = document.getElementById('Tokyo')

async function Api() {
    const respons_petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m')
    const respons_tokyo = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&current=temperature_2m')
    const respons_tucson = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.22&longitude=-110.93&current=temperature_2m')
    const data_petro = await respons_petro.json()
    const data_tokyo = await respons_tokyo.json()
    const data_tucson = await respons_tucson.json()
    return [data_petro, data_tokyo, data_tucson]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        petro.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C`
        tucson.textContent = `Air temperature: ${out[2].current.temperature_2m} \u00B0C`
        tokyo.textContent = `Air temperature: ${out[1].current.temperature_2m} \u00B0C`
    }
    catch(error) {
        console.log(error)
    }
    finally{
        setTimeout(output, 10000)
    }
}

output()