var serice = new Service();

function getEle(id) {
  return document.getElementById(id);
}

var listProducts = [];

function getListProduct() {
  //pending
  getEle("lds-roller").style.display = "block";

  serice
    .getListProductApi()
    .then(function (result) {
      getEle("lds-roller").style.display = "none";
      renderProduct(result.data);
    })
    .catch(function (error) {
      getEle("lds-roller").style.display = "none";
      console.log(error);
    });
}

getListProduct(renderProduct);

// renderProduct();

// GET: lấy data từ server xuống client

// renderProduct
function renderProduct(data) {
  var contentHTML = "";

  for (var i = 0; i < data.length; i++) {
    contentHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${data[i].tenSP}</td>
            <td>${data[i].gia}</td>
            <td>
                <img width="50px" src="./../../assets/img/${data[i].hinhAnh}" alt="${
      data[i].tenSP
    }">
            </td>
            <td>${data[i].moTa}</td>
        </tr>
    `;
  }

  getEle("tblDanhSachSP").innerHTML = contentHTML;
}
