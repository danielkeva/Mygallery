'use strict';
var gProjs = createProjs();

function getProjsToDisplay() {
    return gProjs;
}

function createProjs() {
    var projs = [
        createProj(
            'minesweeper',
            'Minesweeper',
            'Minesweeper v2',
            'Classic Minesweeper game with extra new features.',
            ['Matrixes', 'Board Games']),

        createProj(
            'touchNums',
            'Touch Nums',
            'Race against the clock',
            'A fun game in which the user press the numbers in the correct order as fast as possible',
            ['numbers', 'arcade']),

        createProj(
            'bookShop',
            'Books Shop',
            'Shop Stock Managment',
            'Shop owner books\'s stock managment - interface',
            ['CRUD', 'MVC']),


        createProj(
            'inPicture',
            'In Picture',
            'Rick And Morty',
            'Rick And Morty trivia game',
            ['trivia', 'Rick And Morty']),

        createProj(
            'pacman',
            'Pacman',
            'Pacman v2',
            'The famous Pacman game with extra new features',
            ['Matrixes', 'board games', 'arcade']),
    ]
    return projs
}

function createProj(id, name, title, desc, labels) {
    var proj = {
        id: id,
        name: name,
        title: title,
        desc: desc,
        gitUrl: `https://danielkeva.github.io/${id}/`,
        url: `img/portfolio/${id}.png`,
        date: Date.now(),
        labels: labels
    }
    return proj
}

function getProjById(projId) {
    return gProjs.find(proj => proj.id === projId)
}

function formatDate(timeStamp) {
    var time = new Date(timeStamp)
    var times = time.toString().split(' ');
    var fixedTime = '';
    fixedTime += times[2] + ' ';
    fixedTime += times[1] + ' ';
    fixedTime += times[3] + ' ';
    return fixedTime
}