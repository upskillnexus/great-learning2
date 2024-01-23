export function formatDate(inputDate) {
    const dateObject = new Date(inputDate);  
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
  
    return formattedDate;
  }
    