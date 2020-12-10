function loadGallery() {
  // console.log(gallery);

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "gallery.json", true);

  xhr.onload = function () {
    console.log(xhr.status);
    if (this.status === 200) {
      const galleryObjs = JSON.parse(this.responseText);
      //let output = '';

      var obj = JSON.stringify(this.responseText);
      console.log(obj);

      console.log(galleryObjs.galleryarr[0]);

      // console.log(galleryObjs[0].url); //correct

      let output1 = `<img src="${galleryObjs.galleryarr[0].url}" >`;
      console.log(output1);

      let arr = JSON.parse(localStorage.getItem("gallerydata"));

      // console.log(arr.galleryarr);
      console.log(arr.galleryarr[0].url + "hello");
      console.log(arr.galleryarr.length + "=length");

      arr.galleryarr.forEach(function (arrObj) {
        // var newObj = document.createElement("img");
        // var tNode = document.createTextNode("nextImage");

        // newObj.appendChild(tNode);
        // newObj.src = arrObj.url;
        // newObj.style.height = "380px";
        // newObj.id = "images";
        // newObj.onclick = "openThisCard(event)";
        var text =
          "<div class='card' style='margin:16px'> <img onclick='openThisCard(event)' src='" +
          arrObj.url +
          "' alt='Card image cap' style='height: 380px; width: 300px'></div>";
        $(text).appendTo("#galleryAd");
        var text =
          "<div class='card' style='margin:16px'> <img src='" +
          arrObj.url +
          "' alt='Card image cap' style='height: 380px; width: 300px'></div>";
        $(text).appendTo("#gallery");
        // console.log($(text));
        // console.log(newObj);
        // $(newObj).appendTo("#gallery");
        // document.getElementById("gallery").appendChild(newObj);
      });

      // galleryObjs.forEach(function(galleryObj) {
      //     output += `
      //     <ul>
      //         <li>name: ${galleryObj.name}</li>
      //         <li>url: ${galleryObj.url}</li>
      //         <li>info: ${galleryObj.info}</li>
      //         <li>date: ${galleryObj.date}</li>
      //     </ul
      // `;
      // });

      //localStorage.setItem(galleryObj);
      //console.log(galleryObj);

      //document.getElementById('galleryJson').innerHTML = output;
      // document.getElementById('photo1').src = galleryObjs.galleryarr[0].url;
      // document.getElementById('photo2').src = galleryObjs.galleryarr[1].url;
      // document.getElementById('photo3').src = galleryObjs.galleryarr[2].url;
    }
  };
  xhr.send();
}
//  let temp = document.querySelector("#jsonFormat");
// temp.addEventListener("click",loadGallery);

let name = "Sachin Tendulkar";
const data = {
  name: "Sachin Tendulkar",
  url:
    "https://i.ndtvimg.com/i/2018-03/sachin-tendulkar-facebook_806x605_41522254726.jpg",
  info: "GOAT",
  uploaded_date: "10/12/2020",
};
//deleteImage();
//loadGallery();

//getJson();

// function getJson() {
//     fetch('gallery.json')
//         .then(function(res) {
//             return res.json();
//         })
//         .then(function(data) {
//             console.log("inside getJson()")
//             console.log(data);
//         })
//         .catch(function(err) {
//             console.log(err);
//         });
// }

// function getJson() {

//     fetch('gallery.json')
//         .then(res => res.json())
//         .then(data => {
//             console.log("inside getJson()")
//             console.log(data);
//         })
//         .catch(err => console.log(err));
// }

// function getJson() {

//     return new Promise((resolve,reject) => {

//     fetch('gallery.json')
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err));
//     });
// }

// getJson()
//     .then( data => console.log(data))
//     .catch(err => console.log(err));

// async function getJson() {

//     const response  = await fetch('gallery.json');

//     const resData = await response.json();
//     return resData;
// }

// getJson()
//     .then( data => console.log(data))
//     .catch(err => console.log(err));

const data1 = {
  name: "Sachin Tendulkar",
  url:
    "https://i.ndtvimg.com/i/2018-03/sachin-tendulkar-facebook_806x605_41522254726.jpg",
  info: "GOAT",
  uploaded_date: "10/12/2020",
};

// putData(data);

function putData(data) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "gallery.json", true);

  xhr.onload = function () {
    console.log(xhr.status);
    if (this.status === 200) {
      const galleryObjs = JSON.parse(this.responseText);
      //let output = '';
      galleryObjs.galleryarr.push(data);

      data = JSON.stringify(galleryObjs);

      localStorage.setItem("gallerydata", JSON.stringify(galleryObjs));

      console.log(galleryObjs);

      //let output1 = `<img src="${galleryObjs.galleryarr[3].url}" >`;

      //console.log(output1);

      // var newObj = document.createElement("img");
      // var tNode = document.createTextNode("nextImage");

      // newObj.appendChild(tNode);

      // document.getElementById("gallery").appendChild(newObj);

      // newObj.src = galleryObjs.galleryarr[3].url;
      // newObj.style.height = "380px";

      let arr = JSON.parse(localStorage.getItem("gallerydata"));

      console.log(arr.galleryarr[0]);

      // galleryObjs .galleryarr.push(data1);

      // //data = JSON.stringify(galleryObjs);

      // localStorage.setItem("gallerydata",JSON.stringify(galleryObjs));

      // console.log(galleryObjs);

      // output1 = `<img src="${galleryObjs.galleryarr[4].url}" >`;

      // console.log(output1);

      // var newObj1 = document.createElement('img');
      // var tNode1 = document.createTextNode("nextImage");

      // newObj1.appendChild(tNode1);

      // document.getElementById("gallery").appendChild(newObj1);

      // newObj1.src = galleryObjs.galleryarr[4].url;
      // newObj1.style.height = "380px";
    }
  };
  xhr.send();
}

// postJson(data)
//     .then( data => console.log(data))
//     .catch(err => console.log(err));

// async function postJson(data) {

//         const response  = await fetch('gallery.json', {
//             method: 'POST',
//             body: JSON.stringify(data)
//         });

//         const resData = await response.json();
//         return resData;
// }

function deleteImage() {
  let arr = JSON.parse(localStorage.getItem("gallerydata"));

  console.log(arr.galleryarr[3]);
  // console.log(name);

  let index = $("arr.gallery.arr[0]");

  //let index = arr.galleryarr.indexOf(data);

  console.log("index=" + index);

  // if (index > -1) {
  //     arr.galleryarr.splice(index, 1);
  // }
  //localStorage.setItem("gallerydata",JSON.stringify(arr));
}

let gallery = document.getElementById("gallery");

// childNode = gallery.children;

// console.log(childNode.innerHTML);

// console.log(gallery.children);

window.onload = function () {
  loadGallery();
};

function childElements() {
  var galleryChild = document.getElementsByTagName("img");

  // console.log(img);
  console.log(galleryChild);
  console.log(galleryChild.parent());
  console.log(galleryChild[0]);
}
var galleryChild = document.getElementsByTagName("img");
var temp = galleryChild;
// console.log(temp.HTMLCollection);
document.write(galleryChild.length);
// console.log(img);
// console.log(galleryChild[1].innerHTML);

// let imgs = document.getElementsByTagName("li");
// console.log(imgs[1]);

// var imgs = document.getElementById("images");
// console.log(imgs);

function setData(index) {
  let jsonObject = JSON.parse(localStorage.getItem("gallerydata"));
  console.log("jsonobject" + jsonObject.galleryarr);
  console.log(jsonObject.galleryarr[index]);
  // console.log(colIndex+' '+rowIndex);
  // let clickedElementIndex = rowIndex * 3 + colIndex;
  localStorage.setItem(
    "current_item",
    JSON.stringify(jsonObject.galleryarr[index])
  );
  localStorage.setItem("current_item_index", "" + index);
}

function deleteImage() {
  let jsonObject = JSON.parse(localStorage.getItem("gallerydata"));
  let galleryDataArray = jsonObject.galleryarr;
  let index = localStorage.getItem("current_item_index");

  let modifiedJsonObject = jsonObject.galleryarr.splice(index, 1);
  // remove(galleryDataArray, index);
  console.log(modifiedJsonObject);
  console.log(jsonObject.galleryarr);
  localStorage.setItem("gallerydata", JSON.stringify(jsonObject));
}

// let editImg = document.getElementById("editImg");
function onEdit() {
  let arr = JSON.parse(localStorage.getItem("gallerydata"));
  let index = localStorage.getItem("current_item_index");

  document.getElementById("editImg").src = arr.galleryarr[index].url;

  console.log(arr.galleryarr[index].url);
  // console.log(arr.galleryarr);
  // console.log(arr.galleryarr[0].url + "hello");
}


let today = () => {
	let today = new Date();
	let dd = today.getDate();
	let mm = today.getMonth() + 1;
	let yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	let date = dd + '/' + mm + '/' + yyyy;
	return date;
}

let isEmpty = (value) => {
	return (null == value) || (value == "");
}

let onlySpaces = (value) => {
	for (let i = 0; i < value.length; i++) {
		if (value[i] != ' ') return false;
	}
	return true;
}

let validateNewData = () => {
	let imageName = document.getElementById("imageName").value;
	let imageUrl = document.getElementById("imageUrl").value;
	let imageInfo = document.getElementById("imageInfo").value;
	let imageUploadeDate = document.getElementById("imageUploadeDate").value;
	let nameRegex = /^[A-Za-z0-9 ]{3,20}$/;
	let urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)/;
	let errors = [];
	if (isEmpty(imageName) || onlySpaces(imageName) || !nameRegex.test(imageName)) {
		errors[errors.length] = "Please Enter Valid Name";
	}
	if (!urlRegex.test(imageUrl)) {
		errors[errors.length] = "Please Enter Valid Url";
	}
	if (isEmpty(imageInfo)) {
		errors[errors.length] = "Please Enter Some Information About the Image";
	}
	if (isEmpty(imageUploadeDate) || imageUploadeDate !== today()) {
		errors[errors.length] = "Please Enter Todays Date";
	}
	if (errors.length > 0) {
		reportErrors(errors);
		return false;
	}
	return true;
}

function reportErrors(errors) {
	var msg = "Please Enter Valid Data...\n";
	for (var i = 0; i < errors.length; i++) {
		var numError = i + 1;
		msg += "\n" + numError + ". " + errors[i];
	}
	alert(msg);
}

function addNewImage() {
	if (!validateNewData()) return false
	let imageName = document.getElementById("imageName").value;
	let imageUrl = document.getElementById("imageUrl").value;
	let imageInfo = document.getElementById("imageInfo").value;
	let imageUploadeDate = document.getElementById("imageUploadeDate").value;
	let newImageObject = { "name": imageName, "url": imageUrl, "info": imageInfo, "uploaded_date": imageUploadeDate };
	let item = localStorage.getItem("gallerydata");
	let jsonObject = JSON.parse(item);
  jsonObject.galleryarr.push(newImageObject);
  // data = JSON.stringify(galleryObjs);
	localStorage.setItem("gallerydata", JSON.stringify(jsonObject));
	return true;
}

function getData() {
	let item = localStorage.getItem("current_item");
	let sentData = JSON.parse(item);
	let imageName = sentData.name;
	let imageUrl = sentData.url;
	let imageInfo = sentData.info;
	let imageUploadedDate = sentData.uploaded_date;
	// document.getElementById("img").src = imageUrl;
	document.getElementById("imageName").value = imageName;
	document.getElementById("imageUrl").value = imageUrl;
	document.getElementById("imageInfo").value = imageInfo;
	document.getElementById("imageUploadeDate").value = imageUploadedDate;

}

function saveData() {
	if (!validateNewData()) return false;
	let jsonObject = JSON.parse(localStorage.getItem("gallerydata"));
	let index = localStorage.getItem('current_item_index');
	let imageName = document.getElementById("imageName").value;
	let imageUrl = document.getElementById("imageUrl").value;
	let imageInfo = document.getElementById("imageInfo").value;
	let imageUploadeDate = document.getElementById("imageUploadeDate").value;
	let newItem = { "name": imageName, "url": imageUrl, "info": imageInfo, "uploaded_date": imageUploadeDate };
	jsonObject.galleryarr[index] = newItem;
	localStorage.setItem("gallerydata", JSON.stringify(jsonObject));
	return true;
}
