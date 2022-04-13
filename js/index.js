
dot_click();

// 點點換圖
function dot_click(){
    var dot = document.getElementsByClassName('dot');
    for(let i = 0; i < dot.length; i++){
        dot[i].addEventListener('click', function(e){
            //換點點
            document.getElementsByClassName('dot_now')[0].setAttribute('class', 'dot');
            this.setAttribute('class', 'dot_now');
            //換圖片，換連結
            var index = this.dataset.index;
            var pic = document.getElementsByClassName('kv1')[0];
            if(index == "1"){
                pic.style.backgroundImage='url(./img/slider1.jpg)';
            }else if(index == "2"){
                pic.style.backgroundImage='url(./img/slider2.jpg)';
            }else{
                pic.style.backgroundImage='url(./img/slider3.jpg)';
            }
        });
    }

}
    