var lp = Math.random();
var lp= lp*100;
var lp=Math.floor(lp);










var button = document.querySelector("#btn")
var scoreBoard=document.querySelector("h1");

button.addEventListener('click', function(){
    
    scoreBoard.innerHTML=(lp)
    if(lp>50){
        scoreBoard.innerHTML=('Congratulations 🎉 your love percentage is ' + lp + " % ")
    }else{
        scoreBoard.innerHTML=("oooops 😕 your love percentage is " + lp + " % ")
    }
    var name=document.querySelector('.person-name')
    var crush=document.querySelector(".lover-name");


    const information1 ={
        userName:name.value
    }
    const information2={
        crush:crush.value
    }
    const couple = Object.assign(information1,information2)
    console.log(couple)
    

})





