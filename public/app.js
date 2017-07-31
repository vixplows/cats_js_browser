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
  var li3 = document.createElement('li');
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

var app = function(){
 addCat("Bodger", "Mice", "http://www.catadoption.co.uk/wp-content/uploads/2013/07/ea4c22547edfcf6b06c5c0bec38e3800.jpg");
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