function Service() {
  this.getListProductApi = function () {
    // Promise
    // - Pending (chờ)
    // - Resolve (thành công)
    // - Reject (thất bại)

    return axios({
      url: "https://62bc4dd66b1401736cf762be.mockapi.io/api/products",
      method: "GET",
    });
  };
}
