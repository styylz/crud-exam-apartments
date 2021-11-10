class ApartmentGridComponent {
  constructor() {
    this.state = {
      apartaments: [],
    };
    this.init();
  }

  init = () => {
    this.htmlElement = document.createElement("div");
  };
}
