//popup tim kiem 
let popup = document.getElementById('popup')

function openPopup(){
  popup.classList.add('open-popup')
}

function closePopup(){
  popup.classList.remove('open-popup')
}
//xu ly them vao gio hang 
const btn=document.querySelectorAll("button")
//kiem tra xem selec đúng chưa
//console(btn)
btn.forEach(function(button,index)
{
    button.addEventListener("click",function(event){{
        var a=event.target //khi click vao se cho phan tu do 
        var product=a.parentElement //Khi click vao se lay ca the ben ngoai 
        //Lay thong tin 
        var productImg=product.querySelector("img").src
       
        var productName=product.querySelector("H1").innerText
        var productPrice=product.querySelector("span").innerText
        //console.log(productImg,productName,productPrice)
        //hamf themn vao gio 
        addCart(productImg,productName,productPrice)
    }})
})
function addCart(productImg,productName,productPrice){
    var add = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    var found = false;

    for (var i = 0; i < cartItem.length; i++) {
        var test = cartItem[i].querySelector(".id").innerHTML;
        if (test === productName) {
            var inputElement = cartItem[i].querySelector("input");
            var currentValue = parseInt(inputElement.value);
            inputElement.value = currentValue + 1;
            found = true;
            break;
        }
    }
           
    
    if (!found) {
        var trcontent = '<tr><td style="display:flex;align-items: center;"><img style="width:70px" src="' + productImg + '" alt=""><span class="id">' + productName + '</span></td><td><p><span>' + productPrice + '</span><sup>đ</sup></p></td><td ><input style="width:30px;outline:none" type="number" value="1" min="1"></td><td style="cursor:pointer">Xóa</td></tr>';
        add.innerHTML = trcontent;
        var cartTable = document.querySelector("tbody");
        cartTable.append(add);
    }

    cartToTal();
        

    
}

// Tính tông sd vong lap , di vao tu tbody ->tr ->lap 
function cartToTal(){
   
    var cartItem=document.querySelectorAll("tbody tr")
    var sum=0;
    var total=0
    //console.log(cartItem.length)
    for(var i=0;i<cartItem.length;i++){
        // console.log(i)
        var inputvalue=cartItem[i].querySelector("input").value

        //console.log(inputvalue)
        var productPrice=cartItem[i].querySelector("span").innerText

        total=inputvalue*productPrice*1000000
        //
        sum=sum+total
        //console.log(sum)
    
    }
    //Thay vào 
    var tong=document.querySelector(".price span")
    //console.log(tong)
    tong.innerHTML=sum
}
//============Xóa Sản Phẩm================//
///==== ẩn hiện  giỏ hàng 
const cartIcon = document.querySelector('.cart-icon');
const closeIcon = document.querySelector('.x');

const cart = document.querySelector('.cart');


cartIcon.addEventListener('click', function() {
    cart.style.right = "0";
});


closeIcon.addEventListener('click', function() {
    cart.style.right = "-100%";
});
//===các dòng sp
var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }