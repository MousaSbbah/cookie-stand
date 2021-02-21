'use strict';

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let timeArr=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

const Seattle = {
  shopLocation: 'Seattle',
  minCust : 23,
  maxCust :65,
  avgCookie : 6.3,
  sales: 0,
  salesPerHour : [],
  TotalCookies : 0,
  getSales :function(){
    this.sales= Math.floor(generateRandomNumber(this.minCust,this.maxCust)*this.avgCookie);

  },
  render : function() {
    const parentElement = document.getElementById('Shops Sales');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.shopLocation;


    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i = 0; i <timeArr.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${timeArr[i]} : ${this.salesPerHour[i] } Cookies . `;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ${this.TotalCookies} cookies.`;
  },
};






const Tokyo = {
  shopLocation : 'Tokyo',
  minCust : 3,
  maxCust :25,
  TotalCookies : 0,
  avgCookie : 1.2,
  sales: 0,
  salesPerHour : [],
  getSales :function(){
    this.sales= Math.floor(generateRandomNumber(this.minCust,this.maxCust)*this.avgCookie);
  },
  render : function() {
    const parentElement = document.getElementById('Shops Sales');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.shopLocation;


    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i = 0; i <timeArr.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${timeArr[i]} : ${this.salesPerHour[i] } Cookies . `;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ${this.TotalCookies} cookies.`;
  }
};

const Dubai = {
  shopLocation:'Dubai',
  minCust : 11,
  maxCust :38,
  TotalCookies : 0,
  avgCookie : 3.7,
  sales: 0,
  salesPerHour : [],
  getSales :function(){
    this.sales= Math.floor(generateRandomNumber(this.minCust,this.maxCust)*this.avgCookie);
  },
  render : function() {
    const parentElement = document.getElementById('Shops Sales');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.shopLocation;


    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i = 0; i <timeArr.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${timeArr[i]} : ${this.salesPerHour[i] } Cookies . `;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ${this.TotalCookies} cookies.`;
  }
};

const Paris = {
  shopLocation:'Paris',
  minCust : 20,
  maxCust :38,
  avgCookie : 2.3,
  TotalCookies : 0,
  sales: 0,
  salesPerHour : [],
  getSales :function(){
    this.sales= Math.floor(generateRandomNumber(this.minCust,this.maxCust)*this.avgCookie);
  },
  render : function() {
    const parentElement = document.getElementById('Shops Sales');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.shopLocation;


    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i = 0; i <timeArr.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${timeArr[i]} : ${this.salesPerHour[i] } Cookies . `;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ${this.TotalCookies} cookies.`;
  },

};

const Lima = {
  shopLocation:'Lima',
  minCust : 2,
  maxCust :16,
  avgCookie : 4.6,
  TotalCookies : 0,
  sales: 0,
  salesPerHour : [],
  getSales :function(){
    this.sales= Math.floor(generateRandomNumber(this.minCust,this.maxCust)*this.avgCookie);
  },
  render : function() {
    const parentElement = document.getElementById('Shops Sales');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.shopLocation;


    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i = 0; i <timeArr.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${timeArr[i]} : ${this.salesPerHour[i] } Cookies . `;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ${this.TotalCookies} cookies.`;
  },

};


for (let index = 0; index < 14; index++) {
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


Seattle.render();
Dubai.render();
Tokyo.render();
Lima.render();
Paris.render();
