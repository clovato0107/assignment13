console.log("Scripts js is running...");

// Fetch JS Docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const link_endpoint_url = "http://localhost:3000/name";

//GET API function - gets the link data from db.json
async function getData() {
  console.log("Getting link data...");

  //Try to run this code
  try {
    const response = await fetch(link_endpoint_url);
    const data = await response.json();
    console.log("This is my data:", data);
    showData(data);
  } catch (error) {
    console.error(error);
  }
}

function showData(data) {
  let card_Container = document.getElementById("cardContainer");
  console.log("This is my card container:", card_Container);

  // let myCard = "";

  for (let index = 0; index < data.length; index++) {
    let card = document.createElement('div');
    let name = document.createElement('div')
    let delBut = document.createElement('button')
    let image = document.createElement('img');

    image.src = data[index].link;
    name.innerHTML = data[index].name;
    delBut.innerText = 'Delete';
    delBut.addEventListener('click', () => {
      console.log('del', data[index].name)
      
      //run whatever dele function you have
    })
    // console.log("index:", index, "data:", data[index]);

    card.append(image,name,delBut)

    // myCard += `
    //     <div class="card my-4 mx-4" style="width: 18rem">
    //       <img
    //         class="card-img-top"
    //         src=${data[index].link}  alt=${data[index].name}
    //       />
    //       <div class="card-body">
    //         <h5 class="card-title">${data[index].name}</h5>
    //         <p class="card-text">
    //           ${data[index].comments}
    //         </p>
    //         <button id="delete"  class="btn btn-primary">delete</button>
    //       </div>
    //     </div>
    //   `;
    $("#cardContainer").append(card);
  }

}
// delete function
getData();

const fetchDelete = async () => {
  console.log("delete button Horayy!");
  // try {
  //   let response = await fetch(link_endpoint_url + "/" + name, {
  //     method: "DELETE",
  //   });
  //   let data = await response.json();
  //   console.log(data); // Do something with the data here!
  // } catch (error) {
  //   console.error("Error:", error);
  // }
};

$("#delete").on("click", function () {
  console.log("Whew it worked. ");
});

// post function
const fetchPost = async () => {
  try {
    let response = await fetch(link_endpoint_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify("object you are posting"),
    });
    let data = await response.json();
    console.log(data); // Do something with the data here!
  } catch (error) {
    console.error("Error:", error);
  }
};

var button = document.getElementById("submitButton");
console.log(button)
button.addEventListener("click", function (event) {
  alert(event.target);
});
