function init(){
	var ctx = document.getElementById('game_canvas').getContext('2d');
    var background_pic = new Image();//Create background picture
    var bird_1 = new Image();//Create bird_1 img
    var bird_2 = new Image();//Create bird_2 img
    
    background_pic.onload = function(){
        ctx.drawImage(background_pic,0,0,256,240,0,0,800,600);//Set the background picture
    };
    background_pic.src = 'duckhunt-background.gif';

    bird_1.onload = function() {
        ctx.drawImage(bird_1,0,115,40,40,250,270,80,80);//Set the first bird
    };
    bird_1.src = 'duckhunt_various_sheet.png';
    
    bird_2.onload = function(){
        ctx.drawImage(bird_2,128,115,40,40,500,120,80,80); //Set the second bird
    };
    bird_2.src = 'duckhunt_various_sheet.png';
}