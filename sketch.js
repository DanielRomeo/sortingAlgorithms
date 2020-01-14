'use strict'; 

var values = [];
var w = 10;

// button variables:
const startButton = $('#startButton');
const generateButton = $('#generateButton');

var e = document.getElementById("algorithm");
//
//e.change(generatepipes());


function setup() {
	var cnv = createCanvas(windowWidth , 500);
	values.length = 90;
	for(let i = 0; i < values.length; i++){
		values[i] = random(height);
	}

	// when generate button is clicked:
	var generatepipes = function(){
		var cnv = createCanvas(windowWidth , 500);
		values.length = 90;
		for(let i = 0; i < values.length; i++){
			values[i] = random(height);
		}
	}

	$('#algorithm').on('change', function(){
		generatepipes();
	})

	generateButton.on('click', function(){
		generatepipes();
	});

	frameRate(5000000000);

	// on button click::::
	startButton.on('click', function(){

		var algorithm = e.options[e.selectedIndex].value;	
		console.log(`You selected the algo called ${algorithm}`);

		// check which algorithm has been selected:	
		if(algorithm == 'bubblesort'){
			bubblesort(values, 0, values.length);
			console.log("running")
		}else if(algorithm == 'selectionsort'){
			selectionsort(values, 0, values.length);
		}else if(algorithm == 'insertionsort'){
			insertionsort(values, 0, values.length);
		}else if(algorithm == 'heapsort'){
			heapsort(values, 0, values.length);
		}else if(algorithm == 'quicksort'){
			quicksort(values, 0, values.length);
		}

		this.disabled = true;
		this.innerHTML = "Running...";
	});	
}



function windowResized() {
  resizeCanvas(windowWidth, 300);
}



function draw() {
	background(209); /// color
	stroke(0);
	//fill();


	for(let i = 0; i < values.length; i++){
		rect(i * w, height-values[i],4, values[i]);
	}
}

async function swap(arr, a, b){
	await sleep(0.005);
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}



function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}
	
// algorithms: --------- 
// -------------------------------------------------------------------------------------

// bubble sort algorith:
async function bubblesort(){
	for(let i = 0; i < values.length; i++){
		for(let j = 0; j< values.length -1; j++){
			let a = values[j];
			let b = values[j+1];

			if(a > b){
				await swap(values,j, j+1);
			}
		}
	}
	startButton.prop('disabled', false);
	startButton.html("Start Algorithm");
}

//selection sort algorith:
async function selectionsort(){

	console.log('selection has started');

	for (let i = 0; i < values.length; i++) {

		let low = i;

		for (var j = i + 1; j < values.length; j++) {
			
			if(values[j] < values[low]){
				low = j	;
			}
		}

		if(values[i] > values[low]){

			await swap(values, i, low);
		}
	}
	startButton.prop('disabled', false);
	startButton.html("Start Algorithm");
}

async function insertionsort(){
	console.log('insertion has started');

	for (let i = 1; i < values.length; i++) 
    { 
        let j = i; 
        
        while (j > 0 && values[j] <  values[j -1]) 
        { 
           	await swap(values, j, j - 1);
        	
        	j--;
        }    
    } 
	startButton.prop('disabled', false);
	startButton.html("Start Algorithm");
}


// -------------------------------------------------------------------------