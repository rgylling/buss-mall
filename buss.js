/*
=========
variables
=========
*/

/*
specific images set to variables and collect the id from DOM
*/
var imageOne = document.getElementById('myImageOne');
var imageTwo = document.getElementById('myImageTwo');
var imageThree = document.getElementById('myImageThree');


var reset = document.getElementById('reset');
var displayButton = document.getElementById('myButton');
var voteMoreButton = document.getElementById('voteMore');
var chart = document.getElementById('chart');
var block = document.getElementById('block');

var myArray = [];

var totalClicks = 0;
var needNumber = 0;

var processClick = true;
var processClickOne = true;



/*
===============
arrays
===============
*/

/* +++++++
make a new object here per image added
*/
myArray[0] = new makeImageObj("beanie", "img/beanie.jpeg");
myArray[1] = new makeImageObj("beer", "img/beer.jpeg");
myArray[2] = new makeImageObj("boot", "img/boot.jpeg");
myArray[3] = new makeImageObj("comb", "img/comb.jpg");
myArray[4] = new makeImageObj("keg", "img/keg.jpg");
myArray[5] = new makeImageObj("oil", "img/oil.jpg");
myArray[6] = new makeImageObj("vans", "img/vans.jpeg");

/*
================
calling functions
================
*/

/*
calling the showRandomImg function with specific images here. Will need
to ammend additional images
*/
showRandomImg(imageOne);
showRandomImg(imageTwo);
showRandomImg(imageThree);

/*
=========
functions
=========
*/

/*
function to count the number of clicks on imageOne specifically
*/
imageOne.onclick = function() {
  var srcValue = imageOne.getAttribute('src');

  for (var i = 0; i < myArray.length; i++) {
    if (srcValue == myArray[i].path) {
      myArray[i].nClicks++;
      console.log(myArray[i].path + " " +myArray[i].nClicks);
    }
  }
}

//function to count the number of clicks on imageTwo specifically
imageTwo.onclick = function() {
  var srcValue = imageTwo.getAttribute('src');

  for (var i = 0; i < myArray.length; i++) {
    if (srcValue == myArray[i].path) {
      myArray[i].nClicks++;
      console.log(myArray[i].path + " " +myArray[i].nClicks);
    }
  }
}

//function to count the number of clicks on imageThree specifically
imageThree.onclick = function() {
  var srcValue = imageThree.getAttribute('src');

  for (var i = 0; i < myArray.length; i++) {
    if (srcValue == myArray[i].path) {
      myArray[i].nClicks++;
      console.log(myArray[i].path + " " +myArray[i].nClicks);
    }
  }
}


//
function imageClicked() {
  if (processClick || processClickOne) {
    totalClicks++;
    needNumber ++;

    //for each addition image add in code to call the image here:
    showRandomImg(imageOne);
    showRandomImg(imageTwo);
    showRandomImg(imageThree);


    if (totalClicks == 16) {
      //code to display hidden button
      displayButton.setAttribute('style','visibility:visible');
      voteMoreButton.setAttribute('style','visibility:visible');
      block.setAttribute('style','visibility:visible');

processClick = false;
    }
    if (needNumber >= 17) {
      displayButton.setAttribute('style','visibility:hidden');
      voteMoreButton.setAttribute('style','visibility:hidden');
      block.setAttribute('style','visibility:hidden');
    }
    if (needNumber == 25) {
      processClickOne = false;
      displayButton.setAttribute('style','visibility:visible');
      block.setAttribute('style','visibility:visible');
      showResults();

    }
  }
}


//constructor function to make new image objects
function makeImageObj(name, path) {
  this.name = name;
  this.path = path;
  this.nShow = 0;
  this.nClicks = 0;
  this.percentage = function () {
    return Math.round((this.nClicks / this.nShow) * 100);
  };

}

/*
random number generation to go through amount of images within
constructors
*/
function randomImageIndex() {
  var result = Math.floor(Math.random() * (myArray.length));
  return result;
}

//function to display random image from list
function showRandomImg(image) {

  //replacing image function
  var n = randomImageIndex();
  image.setAttribute("src", myArray[n].path);
  myArray[n].nShow++;
}

//function to show results
function showResults() {

reset.setAttribute('style','visibility:visible');
displayButton.setAttribute('style','visibility:hidden');
voteMoreButton.setAttribute('style','visibility:hidden');

var buyers = document.getElementById('buyers').getContext('2d');


var buyerData = {
	labels : ["Beanie","Beer Bong","Boot Glass","Comb","Keg","Oil","Vans"],
	datasets : [
		{
			fillColor : "rgba(183,211,231,0.4)",
			strokeColor : "#617E94",
			pointColor : "#fff",
			pointStrokeColor : "#9DB86D",
			data : [myArray[0].nClicks,myArray[1].nClicks,myArray[2].nClicks,myArray[3].nClicks,myArray[4].nClicks,myArray[5].nClicks,myArray[6].nClicks,]
		}
	]
};

new Chart(buyers).Bar(buyerData);
var buyersOne = document.getElementById('buyersOne').getContext('2d');

var buyerDataOne = {
	labels : ["Beanie","Beer Bong","Boot Glass","Comb","Keg","Oil","Vans"],
	datasets : [
		{
			fillColor : "rgba(183,211,231,0.4)",
			strokeColor : "#617E94",
			pointColor : "#fff",
			pointStrokeColor : "#9DB86D",
			data : [myArray[0].percentage(),myArray[1].percentage(),myArray[2].percentage(),myArray[3].percentage(),myArray[4].percentage(),myArray[5].percentage(),myArray[6].percentage()]
		}

	]
};

new Chart(buyersOne).Bar(buyerDataOne);


}



/*
===============
event listeners
===============
*/

/*
addin eventListener per imageNUMBER variables set at the top of the js file
*/
imageOne.addEventListener("click", imageClicked);
imageTwo.addEventListener("click", imageClicked);
imageThree.addEventListener("click", imageClicked);
reset.addEventListener("click", resetThePage);
voteMoreButton.addEventListener("click", imageClicked);
displayButton.addEventListener("click", showResults);

function resetThePage () {
  location.reload();
  window.scrollTo(0, 0);
}
