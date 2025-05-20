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
let masterSwitchOn = document.querySelector('header button');

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
}


masterSwitchOn.addEventListener('click', ()=>{
    let status = (masterSwitchOn.id == "mswitchon");

    rooms.forEach((room) =>{
        room.status = status;
    });

    if (status) {
        masterSwitchOn.innerText = "Turn off all fans";
        masterSwitchOn.id = "mswitchoff";
    } else {
        masterSwitchOn.innerText = "Turn on all fans";
        masterSwitchOn.id = "mswitchon";
    }

    render();
});

render();
