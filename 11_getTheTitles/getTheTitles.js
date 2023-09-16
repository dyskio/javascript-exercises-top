const getTheTitles = function(books) {
    let titles = [];

    books.forEach(obj => {
        titles.push(obj.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;