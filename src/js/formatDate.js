const formatDate = (date) => {
    const objDate = new Date(date);
    const day = objDate.getDate();
    const months = ['January', 'February', 'March', 'April', 
        'May','June', 'July', 'August', 
        'September', 'October', 'November', 'December'];
    const month = months[objDate.getMonth()];
    const year = objDate.getFullYear();
    return `${day} ${month} ${year}`;
};

export default formatDate;