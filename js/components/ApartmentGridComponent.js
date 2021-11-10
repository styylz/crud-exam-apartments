class ApartmentGridComponent {
  constructor() {
    this.state = {
      apartaments: [],
    };
    this.init();
  }

  saveAparts = (apartaments) => {
    this.state = { apartaments };
    this.render();
  };

  showError = (error) => {
    alert(error);
  };

  fetchAparts = () => {
    API.fetchAparts(this.saveAparts, this.showError);
  };

  init = () => {
    this.fetchAparts();
    this.htmlElement = document.createElement("div");

    this.render();
  };

  render = () => {
    if (this.state.apartaments.length === 0) {
      this.htmlElement.innerHTML = "siunčiama🐎";
    } else {
      this.htmlElement.innerHTML = "parsiųsta!";
    }
  };
}
