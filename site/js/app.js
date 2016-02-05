var c=0;
var projectsShown = false;
var $projects;

$(document).ready(function(){
  setInterval(function(){
  bloopAnimate()

  var h = $(window).scrollTop() + $(window).height();

  if(h > $(document).height()*0.75 && !projectsShown){
    projectsShown = true;
    $('#projects-container').append($projects);
    console.log('loading');
    ga('send', 'event', 'Home', 'load', 'home page projects');
  }

  },500);


  emailInit();


});

  $projects = $('#projects');
  $projects.remove();


var bloopAnimate = function(){
/*
  c+=0.01;
  c%=1;
*/

  var col = HSVtoRGB(Math.random(),1,1);
  $('#bloopsection').css('background','rgb('+[col.r,col.g,col.b].join(',')+')');
}


function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

var emailInit = function(){
  var $a = $('#email');
  var url = "whichlight";
  url+="@";
  url+="gmail";
  url+=".com";
  $a.click(function(){
    ga('send', 'event', 'Home', 'click', 'home page email');
    alert("Looking forward to hearing from you! My email is " + url);
  });
}
