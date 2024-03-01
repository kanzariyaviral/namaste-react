import { moment } from "moment";
function checkvalidation(date){
  const day = moment(date,'DD/MM/YYYY').day()
  const isPrivousDay = moment(date, 'DD/MM/YYYY').isBefore(moment())
  
  if(day == 2){
    return 'Please select only Tuesday';
  }else if(isPrivousDay){
    return 'Date should be after today and only Tuesday';
  }else{
    return true;
  }
}

return checkvalidation(components.form2.data.datepicker1.value)



(moment(date,'DD/MM/YYYY').day() != 2 || moment(date, 'DD/MM/YYYY').isBefore(moment())? 'Date should be after today and only Tuesday' : true)
{{(moment('05/03/2024', 'DD/MM/YYYY').isBefore(moment()) || moment('05/03/2024','DD/MM/YYYY').day() != 2 ? 'Date should be after today and only Tuesday' : true)}}
// {{components.form2.data.textinput4.value}}
// {{components.form2.data.textinput5.value}}
// {{components.form2.data.textinput6.value}}
// {{components.form2.data.textinput7.value}}
//{{components.form2.data.datepicker1.value}}

// Date should be after today and only Tuesday
// 05/03/2024