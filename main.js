// varibols
let start_btn = document.querySelector(".play-start"),
    intro_sec = document.querySelector(".intro-sec"),
    play_sec = document.querySelector(".play-sec"),
    select_btn = document.querySelector(".select-btn"),
    select_modul = document.querySelector(".select-modul"),
    select_modul_items = document.querySelectorAll(".select-modul-items"),
    you_hand_img = document.getElementById("you-hand-img"),
    lap_hand_img = document.getElementById("lap-hand-img"),
    play_btn = document.querySelector(".play-btn"),
    lap_hand = document.querySelector(".lap-hand"),
    counter_you_num = document.querySelector(".counter-you-num"),
    counter_lap_num = document.querySelector(".counter-lap-num"),
    follow_my = document.querySelector(".follow-my"),
    you_select_src,
    lap_select_src,
    you_counter = 0,
    lap_counter = 0;

// you and lap objects
let you_obj = {
    myselect: "rock"
}
let lap_obj = {
    lapselect: "rock"
}


let select_items = [
    {
        on_select: "cuter",
        on_select_src: "image/cuter.png"
    },
    {
        on_select: "paper",
        on_select_src: "image/paper.png"
    },
    {
        on_select: "rock",
        on_select_src: "image/rock.png"
    }, {
        on_select: "cuter",
        on_select_src: "image/cuter.png"
    },
    {
        on_select: "paper",
        on_select_src: "image/paper.png"
    },
    {
        on_select: "rock",
        on_select_src: "image/rock.png"
    }
];

// show play section function
start_btn.onclick = () => {
    intro_sec.classList.add("d-none");
    play_sec.classList.remove("d-none");
    follow_my.style.display = "flex";
}

// select card function
select_btn.onclick = () => {
    select_modul.classList.remove("d-none");
}

for (let i_1 in select_modul_items) {
    select_modul_items[i_1].onclick = () => {
        let you_select = select_modul_items[i_1].getAttribute("select-items");
        you_select_src = select_modul_items[i_1].src;
        a = select_modul_items[i_1];

        select_modul.classList.add("d-none");
        you_obj.myselect = you_select;
    }
}

// play game function
let play_animaed = () => { // add and remove animation class on image 
    you_hand_img.classList.add("run-anim-you");
    lap_hand_img.classList.add("run-anim-lap");

    setTimeout(() => {
        you_hand_img.classList.remove("run-anim-you");
        lap_hand_img.classList.remove("run-anim-lap");
    }, 2100);
}

let lap_select_random = () => { // lap select random function
    let random_num = Math.floor(Math.random() * select_items.length);
    lap_select_src = select_items[random_num].on_select_src;
    lap_obj.lapselect = select_items[random_num].on_select;
}

let calender = (you_p, lap_p) => {
    if (you_p === lap_p) {
        // no think!
        you_counter = you_counter;
        lap_counter = lap_counter;
    } else if (you_p == "rock" && lap_p == "cuter") {
        you_counter++;
    } else if (you_p == "rock" && lap_p == "paper") {
        lap_counter++;
    } else if (you_p == "cuter" && lap_p == "rock") {
        lap_counter++;
    } else if (you_p == "cuter" && lap_p == "paper") {
        you_counter++;
    } else if (you_p == "paper" && lap_p == "rock") {
        you_counter++;
    } else if (you_p == "paper" && lap_p == "cuter") {
        lap_counter++;
    }
    // console.log(you_counter, lap_counter);
}

play_btn.onclick = () => {
    you_hand_img.src = "image/rock.png";
    lap_hand_img.src = "image/rock.png";
    play_animaed();

    lap_select_random();

    // print calender
    setTimeout(() => {

        you_select_src != undefined ? true : you_select_src = "image/rock.png";
        you_hand_img.src = you_select_src;
        lap_hand_img.src = lap_select_src;

        calender(you_obj.myselect, lap_obj.lapselect);

        counter_you_num.textContent = you_counter;
        counter_lap_num.textContent = lap_counter;
    }, 1500);
}

