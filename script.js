let rooms = [

    {
        name: "room 1",
        status: false,
        imgLoc: "./images/fanon.png",
        swich: function(){
            this.status = !this.status;
            
        }
    },

    {
        name: "room 2",
        status: true,
        imgLoc: "./images/fanon.png",
        swich: function(){
            this.status = !this.status
        }
    },

    {
        name: "room 3",
        status: false,
        imgLoc: "./images/fanon.png",
        swich: function(){
            this.status = !this.status
        }
    },
    {
        name: "room 4",
        status: true,
        imgLoc: "./images/fanon.png",
        swich: function(){
            this.status = !this.status
        }
    }
]

let roomsContanier = document.getElementById("fans");
let masterSwitchOn = document.getElementById("mswitchon");
let masterSwitchOff = document.getElementById("mswitchoff");


const render = ()=>{
    let fans = ``;

    rooms.forEach((room, index) =>{
    fans += `
        <div class="fan" style="background: url(./images/fan${(room.status) ? "on.gif" : "off.png"});
    background-position: right center;
    background-repeat: no-repeat;
    background-size: auto 100%;">
            <h5>${room.name}</h5>
            <p>Status: <span>${(room.status) ? "on" : "off"}</span></p>
            <button class="buttons" data-index="${index}">turn <span>${(room.status) ? "off" : "on"}</span></button>
        </div>
    `;
    });


    roomsContanier.innerHTML = fans;
    document.querySelectorAll('.buttons').forEach((button) =>{

        button.addEventListener('click', ()=>{
            const index = button.dataset.index;
            rooms[index].swich();
            render();
        });
    
        
    });

    masterSwitchOn.addEventListener('click', ()=>{
        

        rooms.forEach((room) =>{
            
            room.status = true;
        })
        
        masterSwitchOn.classList.replace("mswitchon", "mswitchoff");
        render();
    })

    masterSwitchOff.addEventListener('click', ()=>{
        

        rooms.forEach((room) =>{
            
            room.status = true;
        })
        
        masterSwitchOff.classList.replace("mswitchoff","mswitchon");
        
        masterSwitchOff.innerText = "Turn off all funs";

        render();
    })
}

render();

