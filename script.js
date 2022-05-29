    let divs = document.querySelectorAll(".arr")

    function give_array(len){
        for (let i = 0; i < len; i++) {
            divs[i].style.height = Math.floor(Math.random()*300) + "px";
        }
    }
    give_array(divs.length)


    async function sort(){
        let h1,h2;
        for(let i = 0; i < divs.length-1; i++){

            for(let j=0;j <= divs.length - i - 2; j++){

            divs[j].style.background = 'blue';divs[j+1].style.background = 'blue';

                if(parseInt(divs[j].style.height) > parseInt(divs[j+1].style.height)){
                    [divs[j].style.height, divs[j+1].style.height] = [divs[j+1].style.height , divs[j].style.height] 
                    divs[j].style.background = "red"
                    divs[j+1].style.background = "red"
                    await wait(20);
                }
                divs[j].style.background = 'cyan';
    
                divs[j+1].style.background = 'cyan';
            }
            divs[divs.length-1-i].style.background = 'green';
            
        }
        divs[0].style.background = 'green';
    }
    
function wait(milisecs){
    return new Promise(resolve => {
        setTimeout(()=> resolve(''),milisecs)
    })
}
