var imageArray = [
     
    "http://sergey-oganesyan.ru/wp-content/uploads/2014/01/1.jpg",        
    "http://sergey-oganesyan.ru/wp-content/uploads/2014/01/2.jpg",        
    "http://sergey-oganesyan.ru/wp-content/uploads/2014/01/3.jpg",        
    "http://sergey-oganesyan.ru/wp-content/uploads/2014/01/4.jpg",        
    "http://sergey-oganesyan.ru/wp-content/uploads/2014/01/5.jpg",        
    "http://sergey-oganesyan.ru/wp-content/uploads/2014/01/6.jpg",        
    "http://sergey-oganesyan.ru/wp-content/uploads/2014/01/7.jpg",        
    "http://sergey-oganesyan.ru/wp-content/uploads/2014/01/8.jpg",        
    "http://sergey-oganesyan.ru/wp-content/uploads/2014/01/9.jpg",        
    "http://sergey-oganesyan.ru/wp-content/uploads/2014/01/10.jpg",                
];
     
window.number = '0';
               
var imageCount = imageArray.length;
                     
function image(num){
     
            
    if(num == 1){        
        if(number < imageCount - 1){
             
            number++;
 
            document.getElementById('images').src = imageArray[number];
            document.getElementById('num_img').innerHTML= number + 1 + '/' + imageCount;
        }
    }                     
    else{ 
         
                  
        if(number > 0){
             
            number--;
            document.getElementById('images').src = imageArray[number];
            document.getElementById('num_img').innerHTML= number + 1 + '/' + imageCount;
        }
    }
}
     
          
function btn_show(){
 
    if(number != 0) document.getElementById('left').style.display='block';
    if(number != imageCount - 1) document.getElementById('right').style.display='block';
}
     
           
function btn_noshow(){
 
    document.getElementById('left').style.display='none';
    document.getElementById('right').style.display='none';
}
         
      
document.write('<img id="images" src="' + imageArray[0] + '">');
