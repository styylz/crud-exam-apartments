class ApartmentCardComponent {
  static USD_EUR = 1.16;
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement("article");

    console.log(props);
    this.init();
  }

  currConverted = (curr, amount) => {
    let convertedPrice;

    switch (curr) {
      case "$":
        convertedPrice = Math.round(amount * ApartmentCardComponent.USD_EUR)
        break;
      case "€":
        return amount;
    }
    return convertedPrice
  };

  formatTitle = (title) => title[0].toUpperCase() + title.slice(1, title.length).toLowerCase();

  init = () => {
    const { type, owner, roomCount, squares, address, price, imgSrc } = this.props;

    const adressFormated = `${address.street}-${address.number} ${address.city} ${address.country}`

    this.htmlElement.className = "card p-3 shadow-sm";
    this.htmlElement.innerHTML = `
    <div class="card">
    <img class="card-img-top" src="${imgSrc}">
    <div class="card-body">
      <h5 class="card-title text-center">${this.formatTitle(type)}</h5>
      <div>
        <p>Room Count: ${roomCount}</p>
        <p>Squares: ${squares}</p>
      </div>
      <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad alias,
      </p>
      <div>
         <p>Name: ${owner.fullname} </p>
         <p>Email: ${owner.email} </p>
         <p>Phone: ${owner.phone} </p>
       </div>

       <p><strong>Address:</strong> ${adressFormated}<p>
       <p>Price: ${this.currConverted(price.currency, price.amount)} € </p>

  </div>

  </div>
  `

  };
}


/*
<h2 class="h4 mb-1">${title}</h2>
    <h3 class="h5 text-muted">${type}</h3>
    <ul>
      <li>
        <strong>price</strong>:
        <span>${price} €</span>
      </li>
      <li>
        <strong>location</strong>:
        <span>${itemAddress}</span>
      </li>
    </ul>
    <h3 class="h5 text-muted">Owner</h3>
    <ul>
      <li>
        <strong>full name</strong>:
        <span>${fullname}</span>
      </li>
      <li>
        <strong>mobile</strong>:
        <span>${mobile}</span>
      </li>
      <li>
        <strong>address</strong>:
        <span>${address}</span>
      </li>
      <li>
        <strong>email</strong>:
        <span>${email}</span>
      </li>
    </ul>
    <button class="btn btn-danger btn-sm position-absolute top-0 end-0 mt-3 me-3">✕</button>`;
*/