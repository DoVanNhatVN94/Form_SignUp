class Validation {
  constructor() {}
  checkEmpty = (value, id, contentID, message) => {
    // trim() xóa dấu khoảng trắng ở đầu và sau đoạn chữ
    if (value.trim() != "") {
      //Nếu hợp lệ
      document.getElementById(contentID).innerHTML = "";
      document.getElementById(contentID).style.display = "none";
      document.getElementById(id).classList.remove("showIcon");
      return true;
    }
    //không hợp lệ
    document.getElementById(contentID).innerHTML = message;
    document.getElementById(contentID).style.display = "block";
    document.getElementById(id).classList.add("showIcon");
    return false;
  };
  checkName = (value, id,contentID, message) => {
    //sỬ DỤNG chuỗi sting khi biểu thức quâ dài => dễ đọc code
    var patternString =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$";
    // chuyển từ string sang RegExp (đối tượng có săn của JS => mới sử dụng được các function tạo sãn của Regexp)
    var pattern = new RegExp(patternString);

    // kiểm tra value có trùng với định dạng do biểu thức quy định ?
    //pattent.test(value) == true
    // test : phương thức của đối tượng RegExp
    if (pattern.test(value)) {
      // đúng định dạng
      document.getElementById(contentID).innerHTML = "";
      document.getElementById(contentID).style.display = "none";
      document.getElementById(id).classList.remove("showIcon");
      return true;
    } else {
      // ko đúng định dạng
      document.getElementById(contentID).innerHTML = message;
      document.getElementById(contentID).style.display = "block";
      document.getElementById(id).classList.add("showIcon");
      return false;
    }
  };

  checkEmail = (value,id,contentID, message) => {
    // Dùng theo chuỗi của biểu thức chính quy (regexp)
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // kiểm tra value có đúng định dạng email ko
    // có thể dùng pattent.test(value)
    if (value.match(pattern)) {
      document.getElementById(contentID).innerHTML = "";
      document.getElementById(contentID).style.display = "none";
      document.getElementById(id).classList.remove("showIcon");
      return true;
    } else {
      // ko đúng định dạng
      document.getElementById(contentID).innerHTML = message;
      document.getElementById(contentID).style.display = "block";
      document.getElementById(id).classList.add("showIcon");
      return false;
    }
  };
  checkPass = (value,id,contentID, message) => {
    var pattent =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;

    if (pattent.test(value)) {
      document.getElementById(contentID).innerHTML = "";
      document.getElementById(contentID).style.display = "none";
      document.getElementById(id).classList.remove("showIcon");
      return true;
    } else {
      // ko đúng định dạng
      document.getElementById(contentID).innerHTML = message;
      document.getElementById(contentID).style.display = "block";
      document.getElementById(id).classList.add("showIcon");
      return false;
    }
  };
}
