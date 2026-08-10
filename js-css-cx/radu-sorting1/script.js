const n=40;
const array=[];

let audioCtx=null;

init();

function init(){
    for(let i=0;i<n;i++){
        array[i]=Math.random();
    }
    showBars();
}

function play(){
    const swaps=bubbleSort([...array]);
    animate(swaps);
}

function animate(swaps){
    if(swaps.length==0){
        showBars();
        return;
    }
    const [i,j]=swaps.shift(0);
    [array[i],array[j]]=[array[j],array[i]];
    showBars([i,j]);
    playNote(200+array[i]*500);
    playNote(200+array[j]*500);

    setTimeout(function(){
        animate(swaps);
    },30);
}

function quickSort(array) {
   const swaps = [];

   function partition(low, high) {
       const pivot = array[high];
       let i = low - 1;

       for (let j = low; j < high; j++) {
           if (array[j] < pivot) {
               i++;
               swaps.push([i, j]);
               [array[i], array[j]] = [array[j], array[i]];
           }
       }

       swaps.push([i + 1, high]);
       [array[i + 1], array[high]] = [array[high], array[i + 1]];
       return i + 1;
   }

   function quickSortRecursive(low, high) {
       if (low < high) {
           const partitionIndex = partition(low, high);
           quickSortRecursive(low, partitionIndex - 1);
           quickSortRecursive(partitionIndex + 1, high);
       }
   }

   quickSortRecursive(0, array.length - 1);
   return swaps;
}

function insertionSort(array) {
   const swaps = [];

   for (let i = 1; i < array.length; i++) {
       let currentIndex = i;

       while (currentIndex > 0 && array[currentIndex - 1] > array[currentIndex]) {
           swaps.push([currentIndex - 1, currentIndex]);
           [array[currentIndex - 1], array[currentIndex]] = [array[currentIndex], array[currentIndex - 1]];
           currentIndex--;
       }
   }

   return swaps;
}

function bubbleSort(array){
    const swaps=[];
    do{
        var swapped=false;
        for(let i=1;i<array.length;i++){
            if(array[i-1]>array[i]){
                swaps.push([i-1,i]);
                swapped=true;
                [array[i-1],array[i]]=[array[i],array[i-1]];
            }
        }
    }while(swapped);
    return swaps;
}

function showBars(indices){
    container.innerHTML="";
    for(let i=0;i<array.length;i++){
        const bar=document.createElement("div");
        bar.style.height=array[i]*100+"%";
        bar.classList.add("bar");
        if(indices && indices.includes(i)){
            bar.style.backgroundColor="red";
        }
        container.appendChild(bar);
    }   
}

function playNote(freq){
    if(audioCtx==null){
        audioCtx=new(
            AudioContext || 
            webkitAudioContext || 
            window.webkitAudioContext
        )();
    }
    const dur=0.1;
    const osc=audioCtx.createOscillator();
    osc.frequency.value=freq;
    osc.start();
    osc.stop(audioCtx.currentTime+dur);
    const node=audioCtx.createGain();
    node.gain.value=0.1;
    node.gain.linearRampToValueAtTime(
        0, audioCtx.currentTime+dur
    );
    osc.connect(node);
    node.connect(audioCtx.destination);
}