
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const submitBtn= document.getElementById('submitBtn');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');

const datahide=document.querySelector('.middle_layer')

const getInfoo= async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
       city_name.innerText =`Please Enter City Name`;
       datahide.classList.add('data_hide');

    }
else{
    try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=110f2b9ec97d037c60903a1418abba54`
        const response= await fetch(url);
        const data= await response.json();
        const arrData=[data];//convert data in array

        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country} `;
        temp.innerText= `${arrData[0].main.temp}`;
        // temp_status.innerText= arrData[0].weather[0].main;
        const tempMood= arrData[0].weather[0].main;
        //for sunny or cloudy
        if(tempMood =="Clear"){
            temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }
       else if(tempMood =="Clouds"){
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
        }
       else if(tempMood =="Rain"){
            temp_status.innerHTML = "<i class='fas fa-rain' style='color:#a4b0be;'></i>";
        }
        else{
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
        }
        datahide.classList.remove('data_hide');

    }
    catch{
        city_name.innerText =`Please Enter Valid City Name`;
        datahide.classList.add('data_hide');
        // temp.innerText="";
        // temp_status.innerText="";
    }
   
}

}




submitBtn.addEventListener('click',getInfoo)

