// getting movie array from JSON
let movies = JSON.parse(array);

$(document).ready(function(){
    $("#wrapper").html(""); //emptying wrapper content
    
    let likeCount = new Array(movies.length); 
    // creating containers with movies
    for (let i=0; i < movies.length; i++) {
        likeCount[i] = 0;
        let movie = movies[i];
        $("#wrapper").append(`<div class="content ${movie.genre}">
        <img src="${movie.image}" alt="${movie.title}">
        <div class="info">
        <h3>${movie.title}</h3>
        <p>Genre: ${movie.genre}<br><br>${movie.description}<br><br>
        <button class="like" id="bttn_${i}"><i class="far fa-thumbs-up"></i></button><p id="output_${i}">Likes : ${movies[i].likes}</p>
        </div>`
        );
        // Like button function
        $(`#bttn_${i}`).on("click", function(){
        likeCount[i]++;
        $(`#output_${i}`).text(`Likes : ${likeCount[i]}`);
        return movies[i].likes = likeCount[i];
    }
    );
    }
    // function for sorting the array
    function compared(a,b) {
        if (a.likes < b.likes) return 1;
        else if (a.likes > b.likes) return -1;
        else return 0;
    };

    $("#sort").on("click", function(f) {
        // creating new Array for sorting
        let newArray = movies.slice(0);
        $("#wrapper").text("");
        newArray.sort(compared);
        for (let i=0; i < newArray.length; i++) {
            $("#wrapper").append(`<div class="content ${newArray[i].genre}">
            <img src="${newArray[i].image}" alt="${newArray[i].title}">
            <div class="info">
            <h3>${newArray[i].title}</h3>
            <p>Genre: ${newArray[i].genre}<br><br>${newArray[i].description}<br><br>
            <button class="like" id="bttn_${i}"><i class="far fa-thumbs-up"></i></button><p id="output_${i}">Likes : ${newArray[i].likes}</p>
            </div>`
            ); 
    }
});
});