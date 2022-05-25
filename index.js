const movies = [
  {
    id: 1,
    title: "Wu Assassins",
    rating: "TV-MA",
    category: "action",
    img_title: "./images/Wu-assassin-title.png",
    thumbnails: "./images/WuAssassin_thumbnail.jpg",
    video: "./videos/Wu_assassin.mp4",
    duration: "1hr 30 min",
    desc: `A warrior chosen as the latest and last Wu Assassin must search for the powers of an ancient triad and restore balance in San Francisco's Chinatown.`,
  },
  {
    id: 2,
    title: "Jumanji",
    rating: "PG",
    category: "action",
    img_title: "./images/Jumanji_title.png",
    thumbnails: "./images/Jumanji_thumbnail.png",
    video: "./videos/Jumanji.mp4",
    duration: "2hr 30 min",
    desc: `When Spencer goes missing, Martha, Bethany and Fridge realize they must go back into jumanji to find him- but something goes wrong.`,
  },
  {
    id: 1,
    title: "Wu Assassins",
    rating: "TV-MA",
    category: "action",
    img_title: "./images/Wu-assassin-title.png",
    thumbnails: "./images/WuAssassin_thumbnail.jpg",
    video: "./videos/Wu_assassin.mp4",
    duration: "1hr 30 min",
    desc: `A warrior chosen as the latest and last Wu Assassin must search for the powers of an ancient triad and restore balance in San Francisco's Chinatown.`,
  },
  {
    id: 2,
    title: "Jumanji",
    rating: "PG",
    category: "action",
    img_title: "./images/Jumanji_title.png",
    thumbnails: "./images/Jumanji_thumbnail.png",
    video: "./videos/Jumanji.mp4",
    duration: "2hr 30 min",
    desc: `When Spencer goes missing, Martha, Bethany and Fridge realize they must go back into jumanji to find him- but something goes wrong.`,
  },
  {
    id: 1,
    title: "Wu Assassins",
    rating: "TV-MA",
    category: "action",
    img_title: "./images/Wu-assassin-title.png",
    thumbnails: "./images/WuAssassin_thumbnail.jpg",
    video: "./videos/Wu_assassin.mp4",
    duration: "1hr 30 min",
    desc: `A warrior chosen as the latest and last Wu Assassin must search for the powers of an ancient triad and restore balance in San Francisco's Chinatown.`,
  },
  {
    id: 2,
    title: "Jumanji",
    rating: "PG",
    category: "action",
    img_title: "./images/Jumanji_title.png",
    thumbnails: "./images/Jumanji_thumbnail.png",
    video: "./videos/Jumanji.mp4",
    duration: "2hr 30 min",
    desc: `When Spencer goes missing, Martha, Bethany and Fridge realize they must go back into jumanji to find him- but something goes wrong.`,
  },
  {
    id: 3,
    title: "Wu Assassins",
    rating: "TV-MA",
    category: "thriller",
    img_title: "./images/Wu-assassin-title.png",
    thumbnails: "./images/WuAssassin_thumbnail.jpg",
    video: "./videos/Wu_assassin.mp4",
    duration: "1hr 30 min",
    desc: `A warrior chosen as the latest and last Wu Assassin must search for the powers of an ancient triad and restore balance in San Francisco's Chinatown.`,
  },
  {
    id: 4,
    title: "Jumanji",
    rating: "PG",
    category: "action",
    img_title: "./images/Jumanji_title.png",
    thumbnails: "./images/Jumanji_thumbnail.png",
    video: "./videos/Jumanji.mp4",
    duration: "2hr 30 min",
    desc: `When Spencer goes missing, Martha, Bethany and Fridge realize they must go back into jumanji to find him- but something goes wrong.`,
  },
  
  {
    id: 13,
    title: "Jumanji",
    rating: "PG",
    category: "adventure",
    img_title: "./images/Jumanji_title.png",
    thumbnails: "./images/Jumanji_thumbnail.png",
    video: "./videos/Jumanji.mp4",
    duration: "1hr 30 min",
    desc: `When Spencer goes missing, Martha, Bethany and Fridge realize they must go back into jumanji to find him- but something goes wrong.`,
  },
  {
    id: 14,
    title: "Jumanji",
    rating: "PG",
    category: "adventure",
    img_title: "./images/Jumanji_title.png",
    thumbnails: "./images/Jumanji_thumbnail.png",
    video: "./videos/Jumanji.mp4",
    duration: "1hr 30 min",
    desc: `When Spencer goes missing, Martha, Bethany and Fridge realize they must go back into jumanji to find him- but something goes wrong.`,
  },
  {
    id: 15,
    title: "Jumanji",
    rating: "PG",
    category: "adventure",
    img_title: "./images/Jumanji_title.png",
    thumbnails: "./images/Jumanji_thumbnail.png",
    video: "./videos/Jumanji.mp4",
    duration: "1hr 30 min",
    desc: `When Spencer goes missing, Martha, Bethany and Fridge realize they must go back into jumanji to find him- but something goes wrong.`,
  },
  
  {
    id: 20,
    title: "Jumanji",
    rating: "PG",
    category: "thriller",
    img_title: "./images/Jumanji_title.png",
    thumbnails: "./images/Jumanji_thumbnail.png",
    video: "./videos/Jumanji.mp4",
    duration: "1hr 30 min",
    desc: `When Spencer goes missing, Martha, Bethany and Fridge realize they must go back into jumanji to find him- but something goes wrong.`,
  },
  {
    id: 21,
    title: "Jumanji",
    rating: "PG",
    category: "thriller",
    img_title: "./images/Jumanji_title.png",
    thumbnails: "./images/Jumanji_thumbnail.png",
    video: "./videos/Jumanji.mp4",
    duration: "1hr 30 min",
    desc: `When Spencer goes missing, Martha, Bethany and Fridge realize they must go back into jumanji to find him- but something goes wrong.`,
  },
  {
    id: 22,
    title: "Jumanji",
    rating: "PG",
    category: "thriller",
    img_title: "./images/Jumanji_title.png",
    thumbnails: "./images/Jumanji_thumbnail.png",
    video: "./videos/Jumanji.mp4",
    duration: "1hr 30 min",
    desc: `When Spencer goes missing, Martha, Bethany and Fridge realize they must go back into jumanji to find him- but something goes wrong.`,
  },


]

const browseBtn = document.querySelector(".nav-browse");
const browseMenu = document.querySelector(".link-menu-container");
const accountMenu = document.querySelector(".account-menu")
const accountBtn = document.querySelector(".profile");
const notifBtn = document.querySelector(".fa-bell");
const notifMenu = document.querySelector(".notifications-menu"); 
const searchBtn = document.querySelector(".search");
const searchBar = document.querySelector(".show-search-bar");
const search2Btn = document.querySelector(".search2");
const billboard_video = document.querySelector(".video-playing");
const video_container = document.querySelector(".billboard-video");
const thumbnail = document.querySelector(".billboard-thumbnail");
const playback =document.querySelector('.billboard-playback');
const more_info_btn = document.querySelector(".billboard-more-info");
const info_overlay = document.querySelector(".more-info-overlay");
const more_info = document.querySelector(".more-info-container");
const exit_more_info = document.querySelector(".more-info-video-exit");
const billboard_title = document.querySelector(".billboard-title");
const billboard_thumbnail =document.querySelector(".billboard-thumbnail"); 
const billboard_info = document.querySelector(".billboard-info");
const billboard_rating = document.querySelector(".billboard-rating");
const more_info_video_title = document.querySelector(".more-info-video-title");
const more_info_about = document.querySelector(".more-info-about");
const popup_video = document.querySelector(".more-info-video-playing");
const movie_hover = document.querySelector(".movie-container-hover");
const movie_container = document.querySelector(".movie-container");
const category_title = document.querySelector(".category-title");
const footer_container = document.querySelector(".footer");
const billboard_container = document.querySelector(".billboard-container");



// Show random movie on billboard
const random = Math.floor(Math.random() * movies.length);

window.addEventListener("load", function () {
  billboard_title.innerHTML = `<img src=${movies[random].img_title} alt="">`;
  billboard_thumbnail.innerHTML = ` <img src=${movies[random].thumbnails} alt="">`;
  billboard_info.innerHTML = ` <p> ${movies[random].desc}</p>`;
  billboard_rating.innerHTML = `<p>${movies[random].rating}</p>`;
  more_info_video_title.innerHTML = ` <img src=${movies[random].img_title} alt="">`;
  more_info_about.innerHTML = `<p class = "about-text"> ${movies[random].desc}</p>`;
  billboard_video.innerHTML = `<source src=${movies[random].video} type="video/mp4"/>`;
  popup_video.innerHTML = `<source src=${movies[random].video} type="video/mp4"/>`;
  runtask();
  
  const groupedMovies = groupBy(movies, 'category');
  displayMovies(groupedMovies);
  showHoverMovie();
  displayFooter();
  slider();
  
});


function runtask(){
  browseBtn.addEventListener("click", function(){
    if (browseMenu.classList.contains("hide-tool")) {
          browseMenu.classList.remove("hide-tool");
          accountMenu.classList.add('hide-tool');
          notifMenu.classList.add("hide-tool");
        } else {
          browseMenu.classList.add("hide-tool");
        }
  });
  accountBtn.addEventListener("click", function(){
    if (accountMenu.classList.contains("hide-tool")) {
          accountMenu.classList.remove("hide-tool");
          browseMenu.classList.add('hide-tool');
          notifMenu.classList.add("hide-tool");
        } else {
          accountMenu.classList.add("hide-tool");
        }
  });
  
  notifBtn.addEventListener("click", function(){
    if (notifMenu.classList.contains("hide-tool")) {
          notifMenu.classList.remove("hide-tool");
          browseMenu.classList.add('hide-tool');
          accountMenu.classList.add('hide-tool');
        } else {
          notifMenu.classList.add("hide-tool");
        }
  });
  
  // console.log(searchBtn);
  searchBtn.addEventListener("click", function(){
    if (searchBar.classList.contains("hide-tool")) {
          searchBar.classList.remove("hide-tool");
          searchBtn.classList.add("hide-tool");
        } else {
          searchBar.classList.add("hide-tool");
          searchBtn.classList.remove("hide-tool");
        }
  });
  search2Btn.addEventListener("click", function(){
    if (searchBar.classList.contains("hide-tool")) {
          searchBar.classList.remove("hide-tool");
          searchBtn.classList.add("hide-tool");
        } else {
          searchBar.classList.add("hide-tool");
          searchBtn.classList.remove("hide-tool");
        }
  });
  
  // listen to video when ended
  billboard_video.addEventListener("ended", function() {
  // show thumbnail and playback 
    video_container.classList.add("hide-tool");
    thumbnail.classList.remove("hide-tool");
    playback.classList.remove("hide-tool");
    console.log("done playing video")
  });
  
  // listen to the playback button 
  playback.addEventListener("click", function(){
    thumbnail.classList.add("hide-tool");
    playback.classList.add("hide-tool");
    video_container.classList.remove("hide-tool");
    billboard_video.play();
    console.log("playing0video");
  });
  
  // listen to more info button
  more_info_btn.addEventListener("click", function(){
    info_overlay.classList.remove("hide-tool");
    more_info.classList.remove("hide-tool");
    billboard_video.pause();
    console.log("pressing more info");
  });
  // listen to exit btn
  exit_more_info.addEventListener("click", function(){
    info_overlay.classList.add("hide-tool");
    more_info.classList.add("hide-tool");
    billboard_video.play();
  });
}

// show movie when hover at the movies 
function showHoverMovie(){
  const image_movie = document.querySelectorAll(".image-category");
  for(let i = 0; i<image_movie.length; i++){
    // const rect = element.getBoundingClientRect();
    image_movie[i].addEventListener("mouseover", function(e){
      const rect = image_movie[i].getBoundingClientRect();
      console.log(rect.left);
      console.log(rect.top);
      console.log(image_movie);
      movie_hover.style.left = rect.left+ "px";
      movie_hover.style.top = (rect.top+ 433) + "px";
      movie_hover.classList.remove("hide-tool");
      const movie_id = e.currentTarget.dataset.id; 
      console.log(e.currentTarget.dataset.id);
      // map through movies and find which has same id then display it on the movie hover. 
      let display_movie_hover = movies.map(function(item){
        if(movie_id == item.id){
          return `<div class="movie-hover-video">
          <video autoplay class="movie-video">
              <source src=${item.video} type="video/mp4">
          </video>
      </div>
      <div class="movie-hover-play">
          <i class="fa-solid fa-play"></i>
      </div>
      <div class="movie-hover-addList">
          <i class="fa-solid fa-plus"></i>
      </div>
      <div class="movie-hover-removeList">
          <i class="fa-solid fa-minus"></i>
      </div>
      <div class="movie-hover-info">
          <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div class="movie-hover-stat1">
          <p class="match-style">98% Match</p>
          <p class="rating-style">${item.rating}</p>
          <p class="duration-style">${item.duration}</p>
      </div>
      <div class="movie-hover-stat2">
          <p>${item.category}</p>
      </div>`;
        }
      });
      display_movie_hover = display_movie_hover.join("");
      movie_hover.innerHTML = display_movie_hover;
      console.log(display_movie_hover); 
      movie_hover.addEventListener("mouseout", function(){
      // console.log(movie_hover_video);
      const movie_hover_video = document.querySelector(".movie-video");
      movie_hover_video.pause();
      movie_hover.classList.add("hide-tool");
      });
    });
  }
}

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
     const key = obj[property];
     if (!acc[key]) {
        acc[key] = [];
     }
     // Add object to list for given key's value
     acc[key].push(obj);
     return acc;
  }, {});
}

function displayMovies(movie){

  // change title and add movies in the section 
  const movie_keys = Object.keys(movie); 
  const movie_values = Object.values(movie);

  let result = [];
  for(let i = 0; i<movie_keys.length; i++){
    result.push(`<div class="movie-category">
    <p class = "category-title">${movie_keys[i]}</p>
    <div class="category-selection">
    `);//push buttons in movie container

    for(let j = 0; j<movie_values[i].length; j++){
      result.push(`<img src=${movie_values[i][j].thumbnails} alt="" class="image-category" data-id = ${movie_values[i][j].id}>`);      
    }
    
    result.push(`</div>
    <button type = "button" class = "prev" > 
    <i class="fa-solid fa-chevron-left" ></i>
</button>
<!-- next  -->
<button type = "button" class="next" >
    <i class="fa-solid fa-chevron-right "></i>
</button>
        </div>`);
  }
  // console.log(result);
  result = result.join("");
  // console.log(result);
  movie_container.innerHTML = result; //maybe put in movie container
}

function displayFooter(){
  const rect_movie_container = movie_container.getBoundingClientRect();
  const rect_billboard_container = billboard_container.getBoundingClientRect()
  footer_container.style.top =  rect_movie_container.height + rect_billboard_container.height + "px";
}



function slider(){
  const next_btn = document.querySelectorAll(".next");
  const prev_btn = document.querySelectorAll(".prev");
  const movie_category = document.querySelectorAll(".movie-category");

  for(let i = 0; i<movie_category.length; i++){
    const movie_category_size = movie_category[i].getBoundingClientRect();
    next_btn[i].style.right = (movie_category_size.right - movie_category_size.width)+ "px";
    next_btn[i].style.top = (movie_category_size.top-866) + "px";
    prev_btn[i].style.left = (movie_category_size.right - movie_category_size.width-46)+ "px";
    prev_btn[i].style.top = (movie_category_size.top-866) + "px";

    console.log(movie_category_size);
  }
  
 

  Array.from(next_btn).forEach(b=>{
    b.addEventListener("click", function(){
    let elm = this.parentElement.children[1]; 
    let item = elm.getElementsByClassName("image-category");
    elm.append(item[0]);
  });
});

Array.from(prev_btn).forEach(b=>{
  b.addEventListener("click", function(){
  let elmp = this.parentElement.children[1]; 
  let item = elmp.getElementsByClassName("image-category");
  elmp.prepend(item[item.length-1]);
});
  
});
}









