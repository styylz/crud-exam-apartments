class ApartmentGridComponent {
  constructor() {
    this.state = {
      apartaments: [],
      loading: false,
    };
    this.init();
  }

  saveAparts = (apartaments) => {
    this.state = { apartaments, loading: false };
    this.render();
  };

  deleteApartment = id => API.deleteAparts(id, this.fetchAparts, this.showError)

  showError = (error) => {
    console.error(error);
  };

  fetchAparts = () => {
    API.fetchAparts(this.saveAparts, this.showError);
  };

  wrapChild = (htmlElement) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-xs-12 col-sm-6 col-lg-4 col-xl-3';
    wrapper.append(htmlElement);
    return wrapper;
  }

  init = () => {
    this.state.loading = true;
    setTimeout(this.fetchAparts, 1000);
    this.htmlElement = document.createElement("div");
    this.htmlElement.className = 'row g-3'

    this.render();
  };

  render = () => {
    const { loading, apartaments } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = `<div class ="text-center"><img src="assets/loading.gif " /> </div>`;
    } else if (apartaments.length > 0) {
      this.htmlElement.innerHTML = ''
      const aparts = apartaments.map(({ id, ...apartsProps }) => new ApartmentCardComponent({
        ...apartsProps,
        onDelete: () => this.deleteApartment(id)
          }))
          .map(component => component.htmlElement)
          .map(this.wrapChild)

      this.htmlElement.append(...aparts)
    } else {
      this.htmlElement.innerHTML = '<img src="assets/noItems.svg">';
    }
  };
}
