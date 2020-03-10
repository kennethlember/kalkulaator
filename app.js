let occupations = {
    1322: {name: 'Kaevanduse juht', rate: 0},
    2633: {name: 'Filosoof', rate: 0},
    3154: {name: 'Lennujuht', rate: 0},
    3323: {name: 'Varustaja', rate: 0},
    8322: {name: 'Autojuht', rate: 0}
}

fetch("http://andmebaas.stat.ee/sdmx-json/data/PA633/17+DBL112+DBL151+DBL177+DBL401.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions")
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data)

    console.log(data.structure.dimensions.observation[0].values)
    data.structure.dimensions.observation[0].values.forEach((el, i) => {
        const occupationKey = el.name.split(' ')[0]
        console.log(el.name.split(' ')[0])
        const dataSetKey = i + ':0:0:0'
        console.log(dataSetKey)
        console.log(data.dataSets[0].observations[dataSetKey][0])
        occupations[occupationKey].rate = data.dataSets[0].observations[dataSetKey][0]
    });

    console.log(occupations)
})