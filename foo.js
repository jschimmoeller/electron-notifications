var path = require('path');
var options = [
  {
    title: "Basic Notification",
    body: "Short message part",
    onclick: function(){
      console.log('>>> clicked ', arguments)
    },
    onerror: function(){
      console.log('>>> error', arguments)
    },
    onshow: function(){
      console.log('>>> show ', arguments)
    }
  },
  {
    title: "Content-Image Notification",
    body: "Short message plus a custom content image",
    icon: path.join(__dirname, 'icon.png'),
    onclick: function(){
      console.log('>>> clicked ', arguments)
    },
    onerror: function(){
      console.log('>>> error', arguments)
    },
    onshow: function(){
      console.log('>>> show ', arguments)
    }
  }
]

function doNotify(evt) {
  if (evt.srcElement.id == "basic") {
    var v = new Notification(options[0].title, options[0]);
    v.onclick =  function(){
      console.log('>>> clicked ', arguments)
    };
    v.onerror = function(){
      console.log('>>> error', arguments)
    } ;

    v.onshow = function(){
      console.log('>>> show ', arguments)
    };
    
    console.log(v);

  }
  else if (evt.srcElement.id == "image") {
    new Notification(options[1].title, options[1]);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("basic").addEventListener("click", doNotify);
  document.getElementById("image").addEventListener("click", doNotify);
})
