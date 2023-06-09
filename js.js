const form = document.querySelector("#form");
const pdfGenrateForm = document.querySelector("#pdfGenrateForm");
const fromToForm = document.querySelector("#fromToForm");

const username = document.querySelector("#username");
const address = document.querySelector("#address");
const mob = document.querySelector("#mob");
// const orderid = document.querySelector("#orderid");
const orderDate = document.querySelector("#orderDate");
const orderPrice = document.querySelector("#orderPrice");

const ordertype = document.querySelector("#ordertype");
const qty = document.querySelector("#qty");
const productname = document.querySelector("#productname");

const ftSubBtn = document.querySelector("#ftSubBtn");
const submitBtn = document.querySelector("#submit");

const editFormBtn = document.querySelector("#editFormBtn");
const pdfBtn = document.querySelector("#pdfBtn");

const ftusername = document.querySelector("#ftusername");
const ftaddress = document.querySelector("#ftaddress");
const ftmob = document.querySelector("#ftmob");
const ftqty = document.querySelector("#ftqty");
const ftproductname = document.querySelector("#ftproductname");
const ftorderPrice = document.querySelector("#ftorderPrice");

var formdata = [{}];

function isNumber(evt) {
  if (isNaN(evt.key)) {
    return false;
  }
  if (evt.target.value.length > 9) {
    return false;
  }
  return true;
}

var ele = document.querySelectorAll('#form .form-control');
var ftele = document.querySelectorAll('#fromToForm .form-control');

for (var i = 0; i < ele.length; i++) {
  ele[i].addEventListener('keyup', function (ele) {
    formValidate();
    if (ele.target.value == '') {
      setError(ele.target)
    } else {
      setSuccess(ele.target);
    }
  });
};

function formValidate() {
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].value == '') {
      submitBtn.disabled = true;
      return false
    } else {
      submitBtn.disabled = false;
    }
  }
}

for (var i = 0; i < ftele.length; i++) {
  ftele[i].addEventListener('keyup', function (ftele) {
    formValidate1();
    if (ftele.target.value == '') {
      setError(ftele.target)
    } else {
      setSuccess(ftele.target);
    }
  });
};

function formValidate1() {
  for (var j = 0; j < ftele.length; j++) {
    if (ftele[j].value == '') {
      ftSubBtn.disabled = true;
      return false
    } else {
      ftSubBtn.disabled = false;
    }
  }
}

function setError(element) {
  const parent = element.parentElement;
  if (parent.querySelector('.error').classList.contains('dsp-none')) {
    parent.querySelector('.error').classList.add('dsp-none');
  }
  parent.querySelector('.error').classList.remove('dsp-none');
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.querySelector('.error').classList.contains('dsp-none')) {
    parent.querySelector('.error').classList.remove('dsp-none');
  }
  parent.querySelector('.error').classList.add('dsp-none');
}

function editForm(ele) {
  if (ele.classList.contains('tab1')) {
    username.readOnly = false;
    address.readOnly = false;
    mob.readOnly = false;
    // orderid.readOnly = false;
    orderDate.readOnly = false;
    orderPrice.readOnly = false;
    ordertype.removeAttribute('style');
    qty.readOnly = false;
    productname.readOnly = false;
    submitBtn.classList.remove('d-none');
    editFormBtn.classList.add('d-none');
    pdfBtn.classList.add('d-none');

    pdfGenrateForm.classList.add('d-none');
    form.parentElement.classList.remove('d-none');
    return false;
  } else {
    fromToForm.classList.remove('d-none');
    document.querySelector('#orderManul').classList.add('d-none');
  }
}

function genratePdf(data) {
  pdfGenrateForm.classList.remove('d-none');
  if (data != '') {
    var html = `<div class="form-scroll">
    <div class="pdf-form" id="pdfFormGenrate">
        <div class="brand-name">
            <h2>Womanhood</h2>
            <img src="logo.jpg" alt="" class="formimg" height="50">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-6 border-end border-dark">
                    <p class="f-700 cust-name mt-2 mb-2">TO ,</p>
                    <p class="f-700 cust-name mt-2 mb-2">${data.username}</p>
                    <p class="mb-10 address"><span class="f-700">Address : </span>${data.address}</p>
                    <p class="mb-10"><span class="f-700">Contact : </span>${data.mob}</p>

                </div>
                <div class="col-6">
                    <p class="f-700 mt-3 mb-2">FOR SELLER</p>
                    <div class="row border-bottom border-dark">
                        <div class="col-6">
                            <p class="mb-0">ORDER DATE</p>
                            <p>${data.orderDate}</p>
                        </div>
                    </div>
                    <h5 class="mt-3 mb-3 f-500">${data.ordertype}</h5>
                </div>
            </div>
        </div>
        <table class="table table-bordered border-dark mb-0 table-fixed text-center">
            <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td>${data.productname}</td>
                <td>${data.qty}</td>
                <td><span>Rs.</span>${data.orderPrice}<span>.0</span></td>
            </tr>
        </table>
        <div class="dec">
            <p class="return-text"><span class="f-700">Name : </span>Veena Gediya</p>
            <p class="return-text"><span class="f-700">Return Address : </span>B-15 Om Ganesh CHS No 14, Nilkanth
                Nagar,
                Kandivali West, Mumbai | PIN: 400067</p>
            <p class="mb-0"><span class="f-700">Contact : </span>+91 8657358985</p>
        </div>
    </div>
</div>
<div class="container">
    <div class="row mb-3">
        <div class="col-6">
            <button class="btn btn-success w-100 tab1" onclick="editForm(this)">Edit</button>
        </div>
        <div class="col-6">
            <button class="btn btn-warning w-100" id="downloadPdf">Download</button>
        </div>
    </div>
</div>`
    document.querySelector('#pdfGenrateForm').innerHTML = html;
  }
}

function genrateFtPdf(data) {
  fromToForm.classList.add('d-none');
  if (data != '') {
    var html = `<div class="container mt-5">
    <div class="scroll mt-5" id="ftpdfgenrate">
    <div class="orderForm">
        <div class="p-4">
        <img src="./img/logo.jpg" alt="" class="logo">
            <b class="mb-2 d-block fttitle">TO,</b>
            <div class="row">
                <div class="col-2">Name:</div>
                <div class="col-10 mb-2 pl-0">${data.ftusername}</div>
                <div class="col-2">Address:</div>
                <div class="col-10 mb-2 pl-0">
                    <p class="ftaddress">${data.ftaddress}</p>
                </div>
                <div class="col-2">Mobile:</div>
                <div class="col-10 pl-0">+91 ${data.ftmob}</div>
            </div>

            <b class="mt-5 mb-2 d-block fttitle">FROM,</b>
            <div class="row">
                <div class="col-2">Name:</div>
                <div class="col-10 mb-2 pl-0">Veena Gediya [Womanhood]</div>
                <div class="col-2">Address:</div>
                <div class="col-10 mb-2 pl-0">
                    <p style="width:300px">B-15 Om Ganesh CHS No 14, Nilkanth Nagar, 
                        Kandivali (W), Mumbai, Maharashtra 400067</p>
                </div>
                <div class="col-2">Mobile:</div>
                <div class="col-10 pl-0">+91 8657358985</div>
            </div>

        </div>
        <table class="table table-bordered border-dark mt- mb-0 table-fixed text-center">
          <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Amount</th>
          </tr>
          <tr>
              <td>${data.ftproductname}</td>
              <td>${data.ftqty}</td>
              <td><span>Rs.</span>${data.ftorderPrice}<span>.0</span></td>
          </tr>
          </table>
    </div>
</div>
<div class="container">
    <div class="row mt-3">
        <div class="col-6">
            <button class="btn btn-success w-100 tab2" onclick="editForm(this)">Edit</button>
        </div>
        <div class="col-6">
            <button class="btn btn-warning w-100" id="ftpdfBtn">Download</button>
        </div>
    </div>
</div>
    </div>`
    document.querySelector('#orderManul').innerHTML = html;
  }
}

function afterSubmit(e) {
  if (e.target.getAttribute('id') == 'form') {
    username.readOnly = true;
    address.readOnly = true;
    mob.readOnly = true;
    // orderid.readOnly = true;
    orderDate.readOnly = true;
    orderPrice.readOnly = true;
    ordertype.style.pointerEvents = 'none';
    ordertype.style.background = '#e9ecef';
    qty.readOnly = true;
    productname.readOnly = true;

    submitBtn.classList.add('d-none');
    editFormBtn.classList.remove('d-none');
    pdfBtn.classList.remove('d-none');
  }
}

document.querySelectorAll('#form,#fromToForm').forEach(function (event) {
  event.addEventListener('submit', function (e) {
    e.preventDefault();
    if (e.target.getAttribute('id') == 'form') {
      afterSubmit(e);
    }
    document.querySelectorAll('#form .form-control,#form .dropdown-value,#fromToForm .form-control').forEach(function (ele) {
      formdata[ele.name] = ele.value;
    });
    if (e.target.getAttribute('id') == 'fromToForm') {
      fromToForm.classList.add('d-none');
      document.querySelector('#orderManul').classList.remove('d-none');
      genrateFtPdf(formdata);
      document.getElementById('ftpdfBtn').addEventListener('click', function () {
        const element = document.getElementById('ftpdfgenrate');
        html2pdf().from(element).save(ftusername.value);
      });
    }
  })
})

document.querySelector('#pdfBtn').addEventListener('click', function () {
  form.parentElement.classList.add('d-none');
  pdfGenrateForm.classList.remove('d-none');
  genratePdf(formdata);

  document.getElementById('downloadPdf').addEventListener('click', function () {
    const element = document.getElementById('pdfFormGenrate');
    html2pdf().from(element).save(username.value);
  });
});


// tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  var btnTarget = el.currentTarget;
  var country = btnTarget.dataset.country;

  tabContent.forEach(function (el) {
    el.classList.remove("active");
  });

  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  });

  document.querySelector("#" + country).classList.add("active");

  btnTarget.classList.add("active");
}

{/*        <div class="col-6">
                            <p class="mb-0">ORDER ID</p>
                            <p>${data.orderid}</p>
                        </div> */}