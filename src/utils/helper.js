export const formatNumber = (value)=>{
    return Math.round(value*1000)/1000;
}

export const numberFormatting = (value) =>{
    if(value === '' || value === '00') return '0';
    let arr = value.split('');
    if(arr[0] === '0' && arr[1] !== '.' && arr[1] !== undefined){
        value = value.replace(/^0+/, "")
    }
    return value;
}