var snowElements = [];
document.body.style.height = "100vh";
document.body.style.background = "black";
document.body.style.overflow ="hidden";

setInterval(() => {
    
    let spawn = Math.random();
    if(spawn <.01)
        spawnSnow();
    for(i = 0; i < snowElements.length; i++){
        snowElements[i].update();
        if(snowElements[i].remove()){
            snowElements.splice(i,1);
            i--;
        }
    }
}, 1./60. );

function spawnSnow(){
    let snowFlake = document.createElement("div");
    snowElements.push(new SnowParticle(snowFlake));
    document.body.appendChild(snowFlake);
}

class SnowParticle {
    constructor(element) {
        this.element = element;
        this.Yposition = 0.;
        element.style.height = "5px";
        element.style.width = "5px";
        element.style.position = "absolute";
        element.style.top = "0";
        this.xPosition= Math.random() * window.innerWidth;
        element.style.left = this.xPosition+"px";
        element.style.backgroundColor = "white";
        element.style.borderRadius = "50%";
        this.Xdisplacment = 0.;
        this.fallSpeed = .1;
    }

    update() {
        this.Yposition+= this.fallSpeed;
        this.Xdisplacment+=.1;
        this.xPosition += Math.sin(this.Xdisplacment*.1)*.3;
        this.element.style.left =   this.xPosition+"px";
        this.element.style.top = this.Yposition + "px";

        
    }

    remove(){
        if(this.Yposition >= window.innerHeight){
            document.body.removeChild(this.element);
            return true;
        }
        return false;
    }

    
}