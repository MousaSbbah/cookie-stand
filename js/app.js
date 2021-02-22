
'use strict';

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const timeArr=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function tableHeader() {
  const tableElement=document.getElementById('sales table');
  const tr1Element=document.createElement('tr');
  tableElement.appendChild(tr1Element);
  let tablehead=document.createElement('th');
  tr1Element.appendChild(tablehead);
  tablehead.textContent = 'shopLocation';
  for (let index = 0; index < timeArr.length; index++) {
    let tablehead=document.createElement('th');
    tr1Element.appendChild(tablehead);
    tablehead.textContent = timeArr[index];
  }
  tablehead=document.createElement('th');
  tr1Element.appendChild(tablehead);
  tablehead.textContent = 'Daily Location Total';
}

function tableFooter(){
  const tableElement=document.getElementById('sales table');
  const trend = document.createElement('tr');
  tableElement.appendChild(trend);
  let tdElement = document.createElement('td');
  trend.appendChild(tdElement);
  tdElement.textContent='Totals';

  for (let index = 0; index <timeArr.length; index++) {
    let perHourTotal=Seattle.salesPerHour[index]+Dubai.salesPerHour[index]+Paris.salesPerHour[index]+Lima.salesPerHour[index]+Tokyo.salesPerHour[index];
    tdElement = document.createElement('td');
    trend.appendChild(tdElement);
    tdElement.textContent=perHourTotal;
  }
  tdElement = document.createElement('td');
  trend.appendChild(tdElement);
  tdElement.textContent=(Dubai.TotalCookies+Lima.TotalCookies+Paris.TotalCookies+Seattle.TotalCookies+Tokyo.TotalCookies);
}
const City = function(shopLocation,minCust,maxCust,avgCookie){
  this.shopLocation = shopLocation;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgCookie=avgCookie;
  this.sales= 0;
  this.salesPerHour = [];
  this.TotalCookies = 0;

};
City.prototype.getSales=function () {
  this.sales= Math.floor(generateRandomNumber(this.minCust,this.maxCust)*this.avgCookie);

};
City.prototype.render=function(){
  const parentElement = document.getElementById('sales table');

  const trElement = document.createElement('tr');
  parentElement.appendChild(trElement);

  let tdElement = document.createElement('td');
  trElement.appendChild(tdElement);
  tdElement.textContent=this.shopLocation;

  for (let index = 0; index <this.salesPerHour.length; index++) {
    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent=this.salesPerHour[index];
  }
  tdElement = document.createElement('td');
  trElement.appendChild(tdElement);
  tdElement.textContent=this.TotalCookies;
};

const Seattle=new City('Paris',23,65,6.3);
const Dubai=new City('Dubai',23,65,6.3);
const Tokyo=new City('Tokyo',23,65,6.3);
const Lima=new City('Lima',23,65,6.3);
const Paris=new City('Paris',23,65,6.3);


for (let index = 0; index < timeArr.length; index++) {
  Dubai.getSales();
  Dubai.salesPerHour.push(Dubai.sales);
  Dubai.TotalCookies += Dubai.sales;
  Seattle.getSales();
  Seattle.TotalCookies += Seattle.sales;
  Seattle.salesPerHour.push(Seattle.sales);
  Tokyo.getSales();
  Tokyo.TotalCookies += Tokyo.sales;
  Tokyo.salesPerHour.push(Tokyo.sales);
  Lima.getSales();
  Lima.TotalCookies += Lima.sales;
  Lima.salesPerHour.push(Lima.sales);
  Paris.getSales();
  Paris.TotalCookies += Paris.sales;
  Paris.salesPerHour.push(Paris.sales);
}

tableHeader();

Seattle.render();
Dubai.render();
Tokyo.render();
Lima.render();
Paris.render();

tableFooter();



