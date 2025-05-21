let rooms = [

    {
        name: "room 1",
        status: false,
        imgLoc: "./images/fanon.png",
        start: "20:49",
        stop: "20:51"
        
    },

    {
        name: "room 2",
        status: true,
        imgLoc: "./images/fanon.png",
        start: "00:00",
        stop: "12:00"
    },

    {
        name: "room 3",
        status: false,
        imgLoc: "./images/fanon.png",
        start: "00:00",
        stop: "12:00"
    },
    {
        name: "room 4",
        status: true,
        imgLoc: "./images/fanon.png",
        start: "00:00",
        stop: "12:00"
    }
]



let roomsContanier = document.getElementById("fans");
let masterSwitchOn = document.querySelector('header button');
let newroom = document.getElementById("newroom");

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
            rooms[index].status = !rooms[index].status;
            render();
        });
    });

    searchSchedule();
}

function addRoom(data){

    if(rooms.push(data)){
        alert("New room added");
        render()
    }

}

function searchSchedule(){

    setInterval(()=>{
       rooms.forEach((room, index) =>{
        let time = `${new Date().getHours()}:${new Date().getMinutes()}`;
        if(room.start == time){
            rooms[index].status = true;
            render();
        }

        if(room.stop == time){
            rooms[index].status = false;
            render();
        }
       });

    }, 10000)

}

newroom.addEventListener('submit', (e)=>{
    e.preventDefault();
    let name = document.getElementById("roomname").value;
    let start = document.getElementById("starttime").value;
    let end = document.getElementById("endtime").value;

    let data = {
        name: name,
        status: false,
        imgLoc: "./images/fanon.png",
        start: start,
        stop: end
    }

    // console.table(data);

    addRoom(data);


})

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
        
        console.log(`${new Date().getHours()}:${new Date().getMinutes()}`)
render();
