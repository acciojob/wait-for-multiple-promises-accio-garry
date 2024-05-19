let startTime1 = Date.now();


let p1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let endTime = Date.now();
		let timeTaken = endTime - startTime1;
		resolve(timeTaken);
		
	},Math.random() * 2000 + 1000)
	
})
let startTime2 = Date.now();

let p2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let endTime = Date.now();
		let timeTaken = endTime - startTime2;
		resolve(timeTaken);
		
	},Math.random() * 2000 + 2000)
	
})

let startTime3 = Date.now();

let p3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let endTime = Date.now();
		let timeTaken = endTime - startTime3;
		resolve(timeTaken);
		
	},Math.random() * 2000 + 3000)
	
})

let startTime = Date.now();

Promise.all([p1, p2, p3]).then((times) => {
    document.getElementById("promise-1").innerHTML = times[0] / 1000; // divide by 1000 to convert ms to s
    document.getElementById("promise-2").innerHTML = times[1] / 1000; 
    document.getElementById("promise-3").innerHTML = times[2] / 1000; 
     let loadingRow = document.getElementById("loading");
     loadingRow.parentNode.removeChild(loadingRow);
    let endTime = Date.now();
    let totalTime = endTime - startTime; // calculate total time
    document.getElementById("total").innerHTML = totalTime / 1000; // display total time
	 
});
 
