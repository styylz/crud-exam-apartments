class ApartmentCardComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement("article");

    console.log(props);
    this.init();
  }

  init = () => {
    this.htmlElement.className = "card p-3 shadow-sm";
    this.htmlElement.innerHTML = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
    <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
    </div>`


  };
}
