function timeFilter(obj) {
  var date = new Date(parseInt(obj));
//   var year = date.getFullYear();
  var month = (date.getMonth() + 1 + '').padStart(2, '0')
  var day = (date.getDate() + "").padStart(2, '0')
  var hour = (date.getHours() + "").padStart(2, '0');
  var minute = (date.getMinutes() + "").padStart(2, '0');
 
  return `${month}-${day} ${hour}:${minute}`
}
export default timeFilter;
