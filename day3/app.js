const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const PORT = 3000

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())
app.use(express.static('public'))

const moviesRouter = require('./routers/movies')
app.use('/movies', moviesRouter)

global.movies = [{
    taskID: 1,
    title: 'The Tomorrow War',
    description: 'is a 2021 American military science fiction action film directed by Chris McKay and starring Chris Pratt.',
    genre: 'science fiction',
    posterURL: 'https://www.google.com/search?rlz=1C5CHFA_enIT934IT934&sxsrf=ALeKk02KLKvWB64_3Lvw1wkbFa3cinE4uQ:1629309646451&q=The+Tomorrow+War&stick=H4sIAAAAAAAAAFWRvW_UMBiHL0V3HFdAvVZIVReqslS3XD4uccLSSp2QQIiqEmIhauxz0sR2EieKk0zAn8DAwoJgYWCoxIBg4GuCDgwMDAyA2BgQK2JAtFLjHNke-339Pvm9_e7ambE_1rQAFYjjkOhdGhd70wPl-BioqWU7VPJxWcM4CUVJoqxhEtU-FWZxoMyP6VjVdCRQyGW3Rs0shKns5pSkOTMajlTdz02WtvWRYwSVJtmiNgig27AfpKbGKJ25B5XX2gSaY3guNOU8ZCFse_IekwmoI0NtOAQwt2xRz9YHuiH9MQMOJrT1jxKReZEtGeZpIux2no2rDJh5m14qSCkc6e97ni_qtj_KeSC4_D-sWqQAmZAc1lA_NJz184lfSDZEpruG1qSvpsnECuQuLFQmstYTzKhNm830WkVFKulmOTbWoXQPdci8yJFZ-YijwiByd3Di5QhNgHxvwhEtU_k-MzQAgrBs3QHymD3jg3iRqnIetiojwXzGx8Mp14I2KxsFpjDb3UPuUtX5L5tcl75QE7SsIJL3pUNCAORufaBBh1G_YYSDUuVVm0-UJSXC-XfljTK_8OP3l6WVZ8rdJ-8_KfvK4NSVKfWmPLuKFy8MBlsxIVOY78Vs8dzK0mA4hvJgjPcIzdZq3X3x8d6H3o1h5_BDo2ubK_pwy30H7z_6ujFaHJy8lF2O4S4ZbmfDB9PPvzZGS4P-zm4Zs5hWw-L25Obf5z831paP2m-df3p2c_nEame9ox3it57759Wos90_2rlelOy1Mnfn5eO3vV5fWegsKxfn1pXTD7sLO8F0dSemMeexWL2-y_e7c_8AjxXnzA0EAAA&sa=X&ved=2ahUKEwjzh9K1k7vyAhXYt6QKHbDEB5QQ8sMGMCJ6BAgLEB0&biw=1325&bih=752'
}]


app.get('/', (req, res) => {
    res.render('index', { movies: movies })
})

app.listen(PORT, () => {
    console.log('server is running...')
})