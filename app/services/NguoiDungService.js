function NguoiDungService() {
  this.layDanhSachNguoiDung = function() {
    return axios({
      url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung",
      method: "GET"
    });
  };

  this.themNguoiDung = function(user) {
    return axios({
      url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung",
      method: "POST",
      data: user
    });
  };

  this.xoaNguoiDung = function(id) {
    return axios({
      url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung/${id}`,
      method: "DELETE"
    });
  };

  this.layThongTinNguoiDung = function(id) {
    return axios({
      url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung/${id}`,
      method: "GET"
    });
  };

  this.capNhatNguoiDung = function(id, user) {
    return axios({
      url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung/${id}`,
      method: "PUT",
      data: user
    });
  };
}
