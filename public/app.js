var addCat = function(name, food, imageUrl) {
  var ul = createCat();
  var li1 = createName(name);
  var li2 = createFaveFood(food);
  var li3 = createImage(imageUrl);

  appendElements(ul, li1, li2, li3);
};

var createCat = function() {
  var ul = document.createElement('ul');
  ul.classList.add('cat');
  return ul;
};

var createName = function(name) {
  var li1 = document.createElement('li');
  li1.innerText = "Name: " + name;
  return li1;
};

var createFaveFood = function(food) {
  var li2 = document.createElement('li');
  li2.innerText = "Favourite food: " + food;
  return li2;
};

var createImage = function(imageUrl) {
  var li3 = document.createElement('li.no-bullet');
  var img = document.createElement('img');
  img.style.width = "500px";
  img.src = imageUrl;
  li3.appendChild(img);
  return li3;
};

var appendElements = function(ul, li1, li2, li3) {
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  var cats = document.querySelector('#cats');
  cats.appendChild(ul);
};

var catArray = [
  { name: "Boba",
    food: "Sock fluff",
    imageUrl:
    "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg" },
  { name: "Barnaby",
    food: "Tuna",
    imageUrl: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"
   },
   { name: "Max",
     food: "Whiskas Temptations",
     imageUrl: " http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
   },
   { name: "Bodger",
     food: "Mice",
     imageUrl: "http://www.catadoption.co.uk/wp-content/uploads/2013/07/ea4c22547edfcf6b06c5c0bec38e3800.jpg" },
];

var addCatArray = function(catArray) {
  for (cat of catArray) {
    addCat(cat.name, cat.food, cat.imageUrl);
  };
}

var app = function(){
  addCatArray(catArray);
 // addCat("Bodger", "Mice", "http://www.catadoption.co.uk/wp-content/uploads/2013/07/ea4c22547edfcf6b06c5c0bec38e3800.jpg");
};


  window.addEventListener('load', app);


  // var ul = document.createElement('ul');
  // ul.classList.add('cat');

  // var li1 = document.createElement('li');
  // li1.innerText = "Name: Sophie";

  // var li2 = document.createElement('li');
  // li2.innerText = "Favourite food: Chicken";
  
  // var li3 = document.createElement('li');
  // var image = document.createElement('img');
  // image.style.width = "500px";
  // image.src = "https://s-media-cache-ak0.pinimg.com/736x/62/1b/98/621b98767ec0c7aadaacf87ed0f1cc69.jpg";

// // need to add ensure the added image is also linked to class="no-bullet"

  // li3.appendChild(image);
  // ul.appendChild(li1);
  // ul.appendChild(li2);
  // ul.appendChild(li3);

//   var cats = document.querySelector('#cats');
//   cats.appendChild(ul);