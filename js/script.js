var init_x = 0,init_y = 0,end_x=0,end_y = 0;
// var pagination = { 0:"container__one", 1:"container__two" , 2:"container__three"};
var pag=["container__one","container__two","container__three"];
var data=["popup__first","popup__second"];
var circle=["popup_circle-one","popup_circle-two"];
var current = 0;   
var data_index = 0;
var color = "#FF6DA9"; 

function goHome(){
    document.preventDefault;
    console.log("ir a inicio");
    console.log(current);
    visible(current,"none",pag);
    current = 0;
    visible(current,"block",pag);
}
function closing(target){
    document.getElementById("container__four").style.display ="none";
    document.querySelector('.container__division__blocks').style.display="flex";
    document.querySelector('.container__division--heading').style.display="block";
    document.querySelector('.container').style.opacity = 1;

}

function visible(index,visibility_value,element){
    // if(visibility_value != "none" && element[index]=="container__two"){fadein();}
    document.getElementById(element[index]).style.display=visibility_value;
}

function changeDiapo(direction){
    document.preventDefault;//para que no recargue        
    if(direction){
        document.preventDefault;//para que no recargue        
        // var aux = current;
        // current = current+1 < Object.keys(pagination).length ? current + 1 : current;
        // if(current+1 < Object.keys(pagination).length){
        if(current + 1 < pag.length){
            visible(current,"none",pag);
            // document.getElementById(pag[current]).style.display="none";
            current = current+1;
            visible(current,"block",pag);
            // document.getElementById(pag[current]).style.display="block";
        }        
    }
    if(!direction)
    {
        // document.preventDefault;
        if(current - 1 >= 0){
            visible(current,"none",pag);
            current = current-1;
            visible(current,"block",pag);  

        }
    }

}



//the movement is circular
function changeData(direction){
    document.preventDefault;
    var x =  data.length;
    console.log(x);
    if(direction == 1){
        //right    
        
        visible(data_index,"none",data);
        document.getElementById(circle[data_index]).style.background="none";

        data_index = data_index + 1 < x ? data_index + 1 : 0; 
        visible(data_index,"block",data);
        document.getElementById(circle[data_index]).style.background=color;

    }
    if(direction == -1){
        //left
      
        visible(data_index,"none",data);
        document.getElementById(circle[data_index]).style.background="none";
        data_index = data_index - 1 >= 0 ? data_index - 1 : x-1;
        visible(data_index,"block",data);
        document.getElementById(circle[data_index]).style.background=color;

       
    }
    
}

// horizontal sliding
document.addEventListener("mousedown",(e)=>
{ 
    init_x= e.x;
    init_y= e.y;    
    }
)
document.addEventListener("mouseup",(e)=>
{ 
    // console.log('mouseup');
    // console.log(e);
    end_x= e.x;
    end_y= e.y; 
    console.log(e.target)
    // console.log(document.onscroll);
    var move_y = Math.abs(end_y-init_y);
    var move_x = Math.abs(end_x-init_x);

    if(init_x > end_x && (move_x > move_y)){
        // console.log(init_x , end_x,end_y,init_y)
        //rigth = true
        changeDiapo(true);
    }
    //left = false
    
    else if(init_x < end_x && (move_x >move_y)){
        // console.log(init_x , end_x,end_y,init_y)
        changeDiapo(false);
    }

}
)

//Popup
function popup(){
    document.querySelector('.container__division__blocks').style.display="none";
    document.querySelector('.container__division--heading').style.display="none";
    // document.querySelector('.container').style.opacity = 0.5;
    // // document.querySelector('.container').style.opacity = 0.5;
    document.getElementById("container__four").style.display="flex";
    document.getElementById("container__four").style.zIndex=1;
    // document.getElementById("bottle").style.zIndex=2;
    document.getElementById("bottle").style.opacity=1;


    document.querySelector('.container__division__blocks').style.display="none";
    document.querySelector('.container__division--heading').style.display="none";

 

}




function prueba2(current){
    console.log(current);
    console.log(current.id);
    // document.getElementById().id
    console.log("JJAJDJAD");
    console.log(document.getElementById("prueba"));
    var x = document.getElementById("prueba");
    x.classList.remove("prueba-transition-agregar");
    // document.querySelector("container__images").classList.add('prueba-transition-agregar');
    // console.log( document.getElementById("a"));
    // console.log( document.getElementById("a").classList);
    // document.getElementById("a").classList.add('prueba-transition-agregar');
    // console.log( document.getElementById("a").classList);
   //funcion que pinta las figuras de kas dos
}

/**
 * animations
 */

function fadein(){
    console.log("hola");
    // let x =document.querySelector('.container__images1');
    // let x =document.getElementById('prueba'); //fucniona
    console.log(x);
    x.classList.add('fadein');
    console.log("FADEDADADA");
    // clearInterval(time);
    // time=null;
    // return;
}

function diagonal_move(id){
    console.log("hola")
    var pos = 0;
    var x = document.getElementById(id);
    var t = setInterval(move,20);

    function move(){
        // console.log("prueba");
        // console.log(direction);
        if(!direction){
            pos--;
            x.style.left = pos+'px';
            x.style.top = pos+'px';
            // direction = pos==0? true : false;
            // clearInterval(t);
        }
       if(direction){
            // console.log(pos,"++");
            pos++;
            x.style.left = pos+'px';
            x.style.top = pos+'px';

            // direction = pos==50? false : true;

        }
        direction = (pos == 0 || pos == 50)? !direction: direction;

    }
}

/**end animations */






