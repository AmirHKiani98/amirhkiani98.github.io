var skillBars = $(".skill-bar");
for (let index = 0; index < skillBars.length; index++) {
  const element = $(skillBars[index]);
  percent = element.data("percent");
  element.css("width", percent + "%");
}
$(document).ready(function () {});

// Splide Music
// $.ajax({
//   type: "POST",
//   url: "../php/getMusic.php",
//   dataType: "json",
//   success: function (response) {
//     let music = response;
//     let composed = music.composed;
//     let arranged = music.arranged;
//     composed.forEach((element) => {
//       let html = makeMusicCard(element.address, "Composed", element.name);
//       $("#ul-music").append($(html));
//     });
//     arranged.forEach((element) => {
//       let html = makeMusicCard(element.address, "Composed", element.name);
//       $("#ul-music").append($(html));
//     });
    
//   },
//   error: function (error) {
//     console.log(error.responseText);
//   },
// });
new Splide("#splide-music", {
      type: "slide",
      rewind: true,
      focus: "center",
      trimSpace: false,
      arrows: false,
      perPage: 4,
      gap: "1rem",
      breakpoints: {
        1024: {
          perPage: 3,
          trimSpace: false,
          arrows: false,
        },
        767: {
          perPage: 2,
          trimSpace: false,
          arrows: false,
        },
        640: {
          perPage: 1,
          trimSpace: false,
          arrows: false,
        },
      },
    }).mount();

    $("audio").on("play", function () {
      $("audio")
        .not(this)
        .each(function (index, audio) {
          audio.pause();
        });
    });
// function makeMusicCard(address, type, name) {
//   return `
//     <li class="splide__slide">
//         <div class="card" style="width:100%">
//             <img class="card-img-top" src="${address}/image.png" alt="Card image cap">
//             <div class="card-body">
//                 <h5 class="card-title">${name}</h5>
//                 <p style="font-size:10px" class="text-muted">${type}</p>
//                 <div class="d-flex justify-content-center">
//                     <audio controls preload='none'>
//                         <source src="${address}/music.mp3" type="audio/mpeg">
//                     </audio>
//                 </div>
//             </div>
//         </div>
//     </li>
//     `;
// }

// // Splide Projects

// $.ajax({
//   type: "POST",
//   url: "../php/getProjects.php",
//   dataType: "json",
//   success: function (response) {

//     response.forEach((element) => {
//       $("#ul-projects").append(
//         getProjectHTML(
//           element.projectName,
//           element.programming_language,
//           element.relative_time,
//           element.color,
//           element.caption
//         )
//       );
//     });
//     new Splide("#splide-projects", {
//       type: "slide",
//       rewind: true,
//       focus: "center",
//       trimSpace: false,
//       arrows: false,
//       perPage: 4,
//       gap: "1rem",
//       breakpoints: {
//         1024: {
//           perPage: 3,
//           trimSpace: false,
//           arrows: false,
//         },
//         767: {
//           perPage: 2,
//           trimSpace: false,
//           arrows: false,
//         },
//         640: {
//           perPage: 1,
//           trimSpace: false,
//           arrows: false,
//         },
//       },
//     }).mount();
//   },
//   error: function (error) {
//     console.log(error.responseText);
//   },
// });

// function getProjectHTML(
//   projectName,
//   programming_language,
//   relative_time,
//   color,
//   caption
// ) {
//   return `<li class="splide__slide">
//         <div class="card h-100" style="width: 100%;">
//             <div class="card-body d-flex flex-column justify-content-between">
//                 <h5 class="card-title" style="font-weight: bolder;"><a href="https://github.com/AmirHKiani98/${projectName}">${projectName}</a></h5>
//                 <p class="card-text" style="font-size: 14px;">${caption}</p>
//                 <div class="d-flex flex-row justify-content-between" id="project-detail">
//                     <div class="d-flex justify-content-center align-items-center">
//                         <div style="border-radius: 100%; width: 10px; height: 10px; ${color};"></div>
//                         <p class="m-2" style="font-size:12px">${programming_language}</p>
//                     </div>
//                     <div class="d-flex justify-content-between align-items-center">
//                         <p class="m-2" style="font-size: 11px;">Last update ${relative_time}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </li>`;
// }
