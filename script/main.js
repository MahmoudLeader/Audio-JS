// let Styles = document.styleSheets[0];
//let Styles = document.styleSheets[0].rules[0];#a72d5d
let backCol_btn = document.getElementsByClassName("btn");
// let icon = document.getElementsByClassName("icon");
let title = document.getElementById('title');
// let plye = document.querySelector('.Plye');
let plye = document.getElementById('plye');
let sold = document.getElementById('sold');
let Img = document.getElementById('Img');
let adio = document.createElement('audio');
let bor = document.getElementById('bor');
let file = document.getElementById('file');
let form = document.getElementsByName('getFile');
let card = [];
let dur = 0;
let index = 0;
let Mp3 = [{
  title: "أرض اليمن بركان __ من أقوى زوامل عيسى الليث",
  artist: "عيسى الليث",
  favorite: false,
  path: "mp3/Zamll1.mp3",
  img: "img/i1.png",
  download: true,
  bodyColor: "#000",
  textColor: "#F1641E",
  colorIcon: 'invert(100%)'
},
  {
    title: "أضرب مواقعهم _ جديد زوامل عيسى الليث",
    artist: "عيسى الليث",
    favorite: false,
    path: "mp3/Zamll2.mp3",
    img: "img/i2.png",
    download: true,
    bodyColor: "#fff",
    textColor: "#000",
    colorIcon: 'invert(0)'
  },
  {
    title: "زامل ( كذاب اليمامة عفاش ) _ عيسى الليث",
    artist: "عيسى الليث",
    favorite: false,
    path: "mp3/Zamll3.mp3",
    img: "img/i3.png",
    download: true,
    bodyColor: "#222",
    textColor: "#fff",
    colorIcon: 'invert(100%)'
  },
  {
    title: "زامل حوثي لن يفهمه الا العرب الأقحاح",
    artist: "عيسى الليث",
    favorite: false,
    path: "mp3/Zamll4.mp3",
    img: "img/i4.png",
    download: true,
    bodyColor: "#ccc",
    textColor: "#000",
    colorIcon: 'invert(0)'
  },
  {
    title: "زامل محور الحق _ عيسى الليث",
    artist: "عيسى الليث",
    favorite: false,
    path: "mp3/Zamll5.mp3",
    img: "img/i5.png",
    download: true,
    bodyColor: "#000",
    textColor: "#fff",
    colorIcon: 'invert(100%)'
  },
  {
    title: "زامل جديد l الكيان المؤقت _ عيسى الليث (حصرياً)  ",
    artist: "عيسى الليث",
    favorite: false,
    path: "mp3/Zamll6.mp3",
    img: "img/i6.png",
    download: true,
    bodyColor: "#000",
    textColor: "#fff",
    colorIcon: 'invert(100%)'
  },
  {
    title: "زامل 2020 [ياذيب انا قررت اودع ادياري] أداء سالم المسعودي(MP",
    artist: "سالم المسعودي ",
    favorite: false,
    path: "mp3/Zamll7.mp3",
    img: "img/i7.png",
    download: true,
    bodyColor: "#000",
    textColor: "#fff",
    colorIcon: 'invert(100%)'
  },
  {
    title: "زامل انعلم الي مادرا ونفهم الي مافهم",
    artist: "عيسى الليث ",
    favorite: false,
    path: "mp3/Zamll8.mp3",
    img: "img/i8.png",
    download: true,
    bodyColor: "#555",
    textColor: "#fff",
    colorIcon: 'invert(100%)'
  },
  {
    title: "عيسى الليث - الشهادة كرامة ",
    artist: "عيسى الليث ",
    favorite: false,
    path: "mp3/Zamll9.mp3",
    img: "",
    download: true,
    bodyColor: "#555",
    textColor: "#fff",
    colorIcon: 'invert(100%)'
  },
  {
    title: "عيسى الليث - على العهد يا صماد",
    artist: "عيسى الليث ",
    favorite: false,
    path: "mp3/Zamll10.mp3",
    img: "",
    download: true,
    bodyColor: "#555",
    textColor: "#fff",
    colorIcon: 'invert(100%)'
  }
  ];
  
// function Add Audio to div
function Add_Audio(Audios = null, type = 'all') {
  //console.log(typeof Audio);
  if (Audios == null) {
    Audios = Mp3;
  }
  // console.log(Audio);
  var devs = '';
  document.querySelector('.head h3 span').innerHTML = Audios.length.toString();
  Audios.forEach((Audio,i)=>{
      devs += '<div class="in-show">\
      <p data-index="'+i+'" onclick="PlayAudio(this)">'+Audio.title+'</p>';
      // devs += '<div class="in-show">\
      // <p data-index="'+i+'">'+Audio.title+'</p>\
      // <button class="icon-del" src="icon/icon_list_download_noral.png" data-index="'+i+'"></button>';
    
    devs += '</div>';
  });
  document.querySelector('.box').innerHTML = devs;
  devs = '';
}
//Add_Audio();

// Get Audio In Storing
function File_Reader(file, n) {
  var reader = new FileReader();
  reader.onload = function(event) {
    //console.log(event);
    let newDataAudio = {
      title: n.slice(0, n.lastIndexOf('.')),
      artist: n.slice(0, n.lastIndexOf('.')),
      path: event.target.result,
      img: "",
      bodyColor: "#000",
      textColor: "#fff",
      colorIcon : "invert(100%)",
      favorite: false,
      download: true
    };
    Mp3.push(newDataAudio);
  };
  reader.readAsDataURL(file);
  //reader.readAsText(files[i]);
}
// function Get Audio from Memory
function CreateAudio(event) {
  let files = event.target.files;
  // console.log(event);
  for (let i = 0; i < files.length && files.length != 0; i++) {
    File_Reader(files[i], files[i].name);
    // console.log(files[i]);
  }
  setTimeout(Add_Audio, 2000);
  // DataPro[DataPro.length]=newDataPro;
}
// function Get Time The Audio
function time_mp3(duration, t = 'd') {
  if (t == 'd') {
    dur = duration;
  }
  let scund = 0,
  time = 0;
  for (let i = 0; scund < duration; i++) {
    scund = 60 * ++time;
  }
  //t = a*--m;
  scund -= 60;
  --time;
  scund = duration - scund;
  // console.log('0'+time+':'+scund);
  if (scund > 59) {
    time=+time+1;
    scund = "0";
  }
  if (time < 10) {
    time = '0'+time;
  }
  if (scund < 10) {
    scund = '0'+scund;
  }
  return time+':'+scund;
}

function Nav(Audio){
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata(
      {
        //title: 'Zamll1.mp3',
        title: Audio.title,
        artist: Audio.artist,
        album: 'mp3',
        artwork: [{
          src: Audio.img, sizes: '96x96', type: 'image/png'
        },
          {
            src: Audio.img, sizes: '128x128', type: 'image/png'
          },
          {
            src: Audio.img, sizes: '192x192', type: 'image/png'
          },
          {
            src: Audio.img, sizes: '256x256', type: 'image/png'
          },
          {
            src: Audio.img, sizes: '384x384', type: 'image/png'
          },
          {
            src: Audio.img, sizes: '512x512', type: 'image/png'
          }]
      }
    );
          console.log(navigator.mediaSession.metadata );
  }

}

// Started Audio
function start_aidio(i, Audios=null) {
  if(Audios===null){
    Audios = Mp3;
  }
  if (Audios[i].img == "") {
    Audios[i].img = "img/default_album_pic.png";
  }
  // Img.src = (Audios[i].img != "") ? Audios[i].img: "img/default_album_pic.png";
  Img.src = Audios[i].img;
  title.innerHTML = Audios[i].title;
  adio.src = Audios[i].path;
  document.querySelector('.Artist').innerHTML = Audios[i].artist;
  Favorites();
  setTimeout(() => {
    document.getElementById('duration').innerHTML = time_mp3(Math.round(adio.duration), 'd');
  }, 500);
  Nav(Audios[i]);
}
//start_aidio(index);

// function plye Audio
function plye_Mp3() {
  adio.play();
  adio.currentTime = sold.value;
  plye.src = "icon/pause.png";
  // plye.innerHTML = "&#10073;&#10073;";
  //plye.innerHTML = "&#10074;&#10074;";
  bor.style.animation = 'bor 1s linear infinite running';
}

// function puase Audio
function pause_Mp3() {
  adio.pause();
  sold.value = adio.currentTime;
  plye.src = "icon/play.png";
  // plye.innerHTML = "&#9654;";
  //bor.style.animationPlayState = 'paused';
  bor.style.animation = 'bo 1s linear infinite paused';
}
// function Plye Audio
function Plye_Audio() {
  if (adio.paused === true) {
    plye_Mp3();
  } else {
    pause_Mp3();
  }
}
// function next Audio
function Next() {
  //bor.style.animation = 'g 1s linear infinite paused';
  if (index == Mp3.length -1) {
    index = 0;
  } else {
    index++;
  }
  // Next();
  sold.value = 0;
  start_aidio(index);
  plye_Mp3();
}
// function back Audio
function Back() {
  if (index == 0) {
    index = Mp3.length -1;
  } else {
    index--;
  }
  sold.value = 0;
  start_aidio(index);
  plye_Mp3();
}
// function Loop
function Loop(btn) {
  if (adio.loop === false) {
    adio.loop = true;
    btn.src = "icon/repeat.png";
  } else {
    adio.loop = false;
    btn.src = "icon/loop.png";
  }
}
// function volume
function Volume(btn) {
  if (adio.muted == false) {
    adio.muted = true;
    // document.getElementById("volume").src = "icon/ic_volume_mute_normal.png";
    btn.src = "icon/ic_volume_mute_normal.png";
  } else {
    adio.muted = false;
    btn.src = "icon/ic_resume_volume_normal.png";
  }
}

function inp() {
  //vo = adio.duration * (sold.value / 100);
  adio.currentTime = sold.value;
  //cc=sold.value;//.toFixd();
  sold.value = adio.currentTime;
}

// function show The Audio
function show_Audio() {
  document.querySelector('.show').style.transform = 'scaleY(1)';
  document.querySelector('.contenet').style["pointer-events"] = 'none';
  // window.screen.orientation.unlock();
}
// function hidden The Audio
function headen() {
  document.querySelector('.show').style.transform = 'scaleY(0)';
  document.querySelector('.contenet').style["pointer-events"] = 'auto';
}
// function hidden The info Audio
function show_option_audio() {
  //console.log(document.querySelector('.option-audio').style);
  if ((document.querySelector('.option-audio').style.transform == "scale(1)")) {
    document.querySelector('.option-audio').style.setProperty('transform', 'scale(0)');
    // document.querySelector('.option-audio').style['transform'] = 'scale(1)';
  } else {
    document.querySelector('.option-audio').style.setProperty('transform', 'scale(1)');
    // document.querySelector('.option-audio').style['transform'] = 'scale(0)';
  }
}
// Run Audio onclick Her
function PlayAudio(item) {
  //console.log(item);
  if (item.attributes) {
    if (item.hasAttribute("data-index")) {
      index = +item.getAttribute("data-index");
      //index = +item.dataset.index;
      sold.value = 0;
      start_aidio(index);
      // adio.play();
      plye_Mp3();
    }
  }

}
// This For Add Add To Favorites
function AddFavorites() {
  if (Mp3[index].favorite === true) {
    Mp3[index].favorite = false;
  } else {
    Mp3[index].favorite = true;
  }
  Favorites();
}

function Favorites() {
  // console.log(document.getElementById('Frt').classList);
  if (Mp3[index].favorite === true) {
    document.getElementById('Frt').innerHTML = '&#11088;';
    document.getElementById('Frt').classList.add('F');
    // document.getElementById('Frt').src = 'icon/icon_collect_selected.png';
  } else {
    document.getElementById('Frt').classList.remove('F');
    document.getElementById('Frt').innerHTML = '&#10025;';
    //document.getElementById('Frt').style['font-size'] = '20px';
    //document.getElementById('Frt').src = 'icon/grid_icon_collect.png';
  }
}

// Show All Audio
function show_All() {
  Add_Audio(Mp3);
  show_Audio();
}
adio.addEventListener("pause",pause_Mp3);
// function Radio
setInterval(()=> {
  if (adio.ended == true) {
    Next();
  }
  // if (adio.pause == true) {
  //   pause_Mp3();
  // }
  sold.max = Math.round(adio.duration);
  sold.value = Math.round(adio.currentTime);
  document.getElementById('current').innerHTML = (sold.value == 0) ?'00:00': time_mp3(+sold.value, 'c');
}, 1000);

//this range
sold.onchange = inp;
plye.onclick = Plye_Audio;

window.onload = function() {
  //GetStorage();
  Add_Audio(Mp3);
  start_aidio(index,Mp3);
  inp();
};

document.getElementById('AddAudio').addEventListener('change', CreateAudio);

if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', function() {
    // كود لتشغيل الوسائط
    plye_Mp3();
  });
  navigator.mediaSession.setActionHandler('pause', function() {
    // كود لإيقاف الوسائط
    pause_Mp3();
  });

  navigator.mediaSession.setActionHandler('previoustrack', function() {
    // كود لتشغيل المقطع السابق
    Back();
  });

  //console.log(navigator.mediaSession.setActionHandler().value());
  navigator.mediaSession.setActionHandler('nexttrack', function() {
    // كود لتشغيل المقطع التالي
    Next();
  });
}
