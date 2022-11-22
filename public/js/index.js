const submitBtn=document.getElementById('submitBtn');
const cityName= document.getElementById('cityName');
const temp_status= document.getElementById('temp_status');
const temp= document.getElementById('temp');
const datahide=document.querySelector('.middle_layer')

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal=== ""){
        city_name.innerText=`Input field empty`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=a8893db6d6beeb8d63bd1f8387e2583e&units=metric`;
        const response = await fetch(url);
        const data= await response.json();
        const arrData=[data];

        temp.innerText=arrData[0].main.temp;
        // temp_status.innerText=arrData[0].weather[0].main;
        city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
        const tempicon=arrData[0].weather[0].main
        // console.log(tempicon);

            //condition to check sunny or cloudy
        if (tempicon == "Sunny") {
            temp_status.innerHTML = '<i class="fa-solid fa-sun"></i>';
          } else if (tempicon == "Clouds") {
            temp_status.innerHTML = '<i class="fa-solid fa-cloud"></i>';
          } else if (tempicon == "Rain") {
            temp_status.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
          }else if (tempicon == "Thunderstorm") {
            temp_status.innerHTML = '<i class="fa-solid fa-cloud-bolt"></i>';
          }else if (tempicon == "Haze") {
            temp_status.innerHTML = '<i class="fa-solid fa-smog"></i>';
          }else if (tempicon == "Clear") {
            temp_status.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
          }else {
            temp_status.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
          }

          datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText=`Invalid city name`;
            datahide.classList.add('data_hide');
        }        
    }
}
submitBtn.addEventListener('click',getInfo);