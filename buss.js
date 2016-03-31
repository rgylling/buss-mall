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
variables capturing the paragraph slots
for textContent addition on show results
*/

/*
variables for paragraph elements to be added per
image and add paragraph elements within html
*/
var paraZero = document.getElementById('paraZero');
var paraOne = document.getElementById('paraOne');
var paraTwo = document.getElementById('paraTwo');
var paraThree = document.getElementById('paraThree');
var paraFour = document.getElementById('paraFour');
var paraFive = document.getElementById('paraFive');
var paraSix = document.getElementById('paraSix');
var paraSeven = document.getElementById('paraSeven');

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
  /*
  console.log(totalClicks + " this is working yes?");
  paraZero.textContent = "the total number of clicks : " + totalClicks;
  // ++++++++++
  //add in paraNum.textContent per paragraph element position within HTML DOM

  paraOne.textContent = "the number of times the beanie was clicked on: " + myArray[0].nClicks + " times and the image was shown : " + myArray[0].nShow + " times.";
  paraTwo.textContent = "the number of times the beer bong was clicked on: " + myArray[1].nClicks + " times and the image was shown : " + myArray[1].nShow + " times.";
  paraThree.textContent = "the number of times the boot cup was clicked on: " + myArray[2].nClicks + " times and the image was shown : " + myArray[2].nShow + " times.";
paraFour.textContent = "the number of times comb was clicked on: " + myArray[3].nClicks + " times and the image was shown : " + myArray[3].nShow + " times.";
paraFive.textContent = "the number of times keg was clicked on: " + myArray[4].nClicks + " times and the image was shown : " + myArray[4].nShow + " times.";
paraSix.textContent = "the number of times oil was clicked on: " + myArray[5].nClicks + " times and the image was shown : " + myArray[5].nShow + " times.";
paraSeven.textContent = "the number of times vans was clicked on: " + myArray[6].nClicks + " times and the image was shown : " + myArray[6].nShow + " times." + myArray[6].percentage();
*/
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

var imageOneCounter = 0;

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


/*
var buyers = document.getElementById('buyers').getContext('2d');


var buyerData = {
	labels : ["Vans","Comb","Oil","Beer Bong","Boot","Keg","Vans"],
	datasets : [
		{
			fillColor : "rgba(183,211,231,0.4)",
			strokeColor : "#617E94",
			pointColor : "#fff",
			pointStrokeColor : "#9DB86D",
			data : [myArray[0].nClicks,myArray[0].nClicks,myArray[0].nClicks]
		}
	]
};

new Chart(buyers).Bar(buyerData);
*/
