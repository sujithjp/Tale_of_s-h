var love = setInterval(function () {
  var r_size = Math.floor(Math.random() * 65) + 10;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_time = Math.floor(Math.random() * 5) + 5;

  $('.bg_heart').append(
    "<div class='heart' style='width:" + r_size +
    "px;height:" + r_size +
    "px;left:" + r_left +
    "%;background:pink;animation:love " + r_time + "s ease'></div>"
  );
}, 500);

var i = 0;
var txt1 = "This story is about a boy who had no interest in love at all, until he slowly fell in love with a girl without realizing it. What started as simple moments and conversations gradually turned into strong feelings. Because of her, his life began to change. He started taking his studies seriously, worked on improving himself, learned extra skills, and focused on building a good future. His goal became clear to get a stable job, grow in life, and become someone worthy of standing beside her one day. This story shows how love gave him motivation, direction, and a new purpose in life.";
var speed = 1;

function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == '<')
      document.getElementById("text1").innerHTML += "<br>";
    else
      document.getElementById("text1").innerHTML += txt1.charAt(i);

    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
