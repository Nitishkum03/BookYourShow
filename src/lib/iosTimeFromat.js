import { DiGit } from "react-icons/di";

const iosTimeFormate = (dateTime) => {
    const date = new Date(dateTime);
    const localTime = date.toLocaleTimeString('en-us',{
        hour : '2-digit',
        minute:'2-digit',
        hour12 : true,
    })
    return localTime;
}
export default iosTimeFormate;