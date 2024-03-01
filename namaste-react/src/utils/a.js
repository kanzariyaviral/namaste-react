const day = moment('DD/MM/YYYY').day() === 2 ? true : 'Please select only Tuesday'
function checkvalidation(date){
  const day = moment(date,'DD/MM/YYYY').day()
  const isPrivousDay = moment(date, 'DD/MM/YYYY').isBefore(moment())
  
  if(day == 2){
    return 'Please select only Tuesday';
  }else if(isPrivousDay){
    return 'Date should be after today';
  }else{
    return true;
  }
}

return checkvalidation('30/04/2024')