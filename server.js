const express = require('express');
const app = new express();
app.use(express.static(__dirname + "/public"));
root_dir = __dirname + "/views"
app.get('/', function(request, response) {
    response.sendFile('home.html', { root: root_dir });
});
app.get('/about', function(request, response) {
    response.sendFile('about.html', { root: root_dir });
});
app.get('/contribute', function(request, response) {
    response.sendFile('contribute.html', { root: root_dir });
});
app.get('/crime', function(request, response) {
    response.sendFile('crime.html', { root: root_dir });
});
app.get('/datasets', function(request, response) {
    response.sendFile('datasets.html', { root: root_dir });
});
app.get('/education', function(request, response) {
    response.sendFile('education.html', { root: root_dir });
});
app.get('/entertainment', function(request, response) {
    response.sendFile('entertainment.html', { root: root_dir });
});
app.get('/environment', function(request, response) {
    response.sendFile('environment.html', { root: root_dir });
});
app.get('/health', function(request, response) {
    response.sendFile('health.html', { root: root_dir });
});
app.get('/indicators', function(request, response) {
    response.sendFile('indicators.html', { root: root_dir });
});
app.get('/others', function(request, response) {
    response.sendFile('others.html', { root: root_dir });
});

app.get('/upload', function(request, response) {
    response.sendFile('upload.html', { root: root_dir });
});



app.listen(process.env.PORT || 3000);