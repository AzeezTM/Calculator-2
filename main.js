
    
    function show(tunji) {
        document.getElementById("text").value += tunji
        document.getElementById("text").style.fontSize = "xx-large"

    }


    //Equal to

    function solve() {
        
        let text = document.getElementById("text")
        //let y = eval(t)

        if (text.value.includes("*")) {
            let x = text.value.split('*')
            text.value = Number(x[0]) * Number(x[1]);
        }
        else if (text.value.includes("+")) {
            let x = text.value.split('+')
            text.value = Number(x[0]) + Number(x[1]);
        }
        else if (text.value.includes("-")) {
            let x = text.value.split('-')
            text.value = Number(x[0]) - Number(x[1]);
        }

        else if (text.value.includes("/")) {
            let x = text.value.split('/')
            text.value = Number(x[0]) / Number(x[1]);
        }
       //text.innerHTML = Number(text.value)*Number(text.value)
        //document.getElementById("text").value = y

        //return (text.innerHTML == "+")
        //text.innerHTML = Number(text.value)+Number(text.value)
          


    } 

    function del() {
        document.getElementById("text").value = ""
    }

    function rem() {
       let m = document.getElementById("text").value
       document.getElementById("text").value = m.slice(0, -1)
    }
    function square() {
        let tm = document.getElementById("text").value
        s = Math.sqrt(tm)
        document.getElementById("text").value = s
        
    }

    function rais() {
       let s = document.getElementById("text").value
       k =  document.getElementById("text").value *= s
       document.getElementById("text").value = k
    
    }

    function per() {
        let p = document.getElementById("text").value
        c = document.getElementById("text").value /= "100"
        document.getElementById("text").value = c 
    }

    let j = document.getElementById("olu")
    let change = true

    function tunji() {
        if (change == true){
            j.innerText = "off"
            j.style.backgroundColor = "blue"
            document.getElementById("text").value =""
            document.getElementById("text").style.visibility = "visible"
            change = false

        }else if(change == false){
            j.innerText = "on"
            j.style.backgroundColor = "green"
            document.getElementById("text").value =""
            document.getElementById("text").style.visibility = 'hidden'
            change = true
            
        }
        
    

    }
