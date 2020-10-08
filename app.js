window.onload = function() {
    getCovidStats();
}

function getCovidStats() {
    fetch('https://coronavirus-19-api.herokuapp.com/countries/Poland')
    .then(function(resp) { return resp.json() })
    .then(function (data) {
        console.log(data)
        let todayCases = data.todayCases;
        let todayDeaths = data.todayDeaths;
        let cases = data.cases;
        let deaths = data.deaths;
        let casesPerOneMillion = data.casesPerOneMillion;
        let deathsPerOneMillion = data.deathsPerOneMillion;
        let testsPerOneMillion = data.testsPerOneMillion;

        document.getElementById('todayCases').innerHTML = '+' + todayCases.toLocaleString('en');
        document.getElementById('todayDeaths').innerHTML = '+' + todayDeaths.toLocaleString('en');
        document.getElementById('cases').innerHTML = cases.toLocaleString('en');
        document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
        document.getElementById('casesPerOneMillion').innerHTML = casesPerOneMillion.toLocaleString('en');
        document.getElementById('deathsPerOneMillion').innerHTML = deathsPerOneMillion.toLocaleString('en');
        document.getElementById('testsPerOneMillion').innerHTML = testsPerOneMillion.toLocaleString('en');
    })

    .catch(function() {
        console.log('error');
    })
}