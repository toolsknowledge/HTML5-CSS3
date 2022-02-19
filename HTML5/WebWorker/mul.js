this.onmessage = function(event){
    if(event.data !=undefined ){
        this.postMessage(event.data.num1 * event.data.num2 );
    }
}