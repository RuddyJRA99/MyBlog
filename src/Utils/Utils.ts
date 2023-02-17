export function dateFormat(date: string){
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const _MS_PER_HOUR = 1000 * 60 * 60;
    const _MS_PER_MINUTES = 1000 * 60;
    let text = undefined;
    let diferent = new Date().getTime() - parseInt(date);

    let days = Math.floor(diferent/_MS_PER_DAY);
    if(days > 0){
        return `hace ${days} ${days>1?'dias':'dia'}`
    }

    let hours = Math.floor(diferent/_MS_PER_HOUR);
    if(hours > 0){
        return `hace ${hours} ${hours>1?'horas':'hora'}`
    }

    let minutes = Math.floor(diferent/_MS_PER_MINUTES);
    if(minutes > 0){
        return `hace ${minutes} ${minutes>1?'minutos':'minuto'}`
    }
    return 'hace unos segundos'
}