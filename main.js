let seletedCity = document.querySelector("select");
getTime(seletedCity.value)
seletedCity.addEventListener('change',()=>{
    let newCity = seletedCity.value;
    getTime(newCity);
})

let fajr = document.querySelectorAll(".fajr");
let dohur = document.querySelectorAll(".Dhuhr");
let asr = document.querySelectorAll(".asr");
let magrib = document.querySelectorAll(".magrib");
let aisha = document.querySelectorAll(".isha");
let cap = document.querySelector("caption");


function getTime(value){
fetch(`https://prayerstime.hussin22.repl.co/api/${value}`).then((res)=>{
    let data = res.json()
    return data
}).then((data)=>{
    console.log(data)
    
    fajr[0].innerHTML=data.today.Fajr;
    fajr[1].innerHTML=data.tomorrow.Fajr;

    dohur[0].innerHTML=data.today.Dhuhr;
    dohur[1].innerHTML=data.tomorrow.Dhuhr;

    asr[0].innerHTML=data.today.Asr;
    asr[1].innerHTML=data.tomorrow.Asr;

    magrib[0].innerHTML=data.today.Maghrib;
    magrib[1].innerHTML=data.tomorrow.Maghrib;

    aisha[0].innerHTML=data.today["Isha'a"];
    aisha[1].innerHTML=data.tomorrow["Isha'a"];
})
}


// getLocation();

// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition,handlerError)
//     }
//     else{
//         console.error("its not supported")
//     }
// }

// function watchLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.watchPosition(showPosition,handlerError)
//     }
//     else{
//         console.error("its not supported")
//     }
// }
// function handlerError(){
//     let errorStr;
//     switch(error.code){
//         case error.PERMISSION_DENIED:
//             errorStr = "user denied"
//             break;
//             case error.POSITION_UNAVAILABLE:
//                 errorStr="location unavalible"
//                 break;
//                 case error.UNKNOWN_ERROR:
//                     errorStr = "unkown error occured"
//                     break;
//                     default:
//                         errorStr="unknown error occured"
//                         break;
                        
//     }
// }
// function showPosition(position){
//     console.log(`position is ${position.coords.latitude}`)
// }
