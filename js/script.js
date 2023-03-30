function changeBackground() {
  
  document.querySelectorAll("*").forEach(el => el.style.color = "white");
  document.querySelectorAll("h1").forEach(el => el.style.color = "yellow");
  document.querySelectorAll("h2").forEach(el => el.style.color = "orange");
  document.querySelectorAll("label").forEach(el => el.style.color = "#dfdfdf");
  document.querySelectorAll(".select-bigger").forEach(el => el.style.color = "#faf2df");
  
  if (document.body.style.backgroundImage === 'url("media/background2.jpg")') {
    location.reload();
  }
  
  var body = document.getElementsByTagName("body")[0];

  body.style.backgroundImage = "url('media/background2.jpg')";
}