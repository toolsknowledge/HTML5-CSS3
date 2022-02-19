this.onmessage = function(event){
    if(event.data !=undefined ){
        let res = event.data.num1+event.data.num2;
        this.postMessage(res);
    }
}