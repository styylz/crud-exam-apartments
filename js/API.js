const serverURL = "http://localhost:3000";

class API {
  static fetchAparts = (success, failure) => {
    fetch(`${serverURL}/Apartment`)
      .then((res) => res.json())
      .then(success)
      .catch(failure);
  };

  static deleteAparts = (id, success, failure) => {
    fetch(`${serverURL}/Apartment/${id}`, { method: "DELETE" })
      .then(success)
      .catch(failure);
  };
}

/* ->Testing server requests ->

    const showError = (error) => console.error("Error:", error);

    API.fetchAparts((data) => {
      console.log("Initial data is received", data);
      API.deleteAparts(
        "101",
        (data) => {
          console.log(`successfully deleted`, data);
          console.log("successfully updated", data);
          API.fetchAparts(
            (data) => console.log("Received updated data", data),
            showError
          );
        },
        showError
      );
    }, showError);

*/
