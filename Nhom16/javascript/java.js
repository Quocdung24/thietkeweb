function hien(id)
{
    
        var element = document.getElementById(id);
         element.style.display = "block";
 
    
}
function an(id)
{
    var element = document.getElementById(id);
    element.style.display = "none";
}   
function click0(id)
{
    var acc = document.getElementById(id);
    acc.style.display = acc.style.display === "block" ? "none" : "block";
}
function click1(id) {
    var acc1 = document.getElementById(id);
    acc1.style.display = acc1.style.display === "none" ? "block" : "none";
}
function click3(className)
{
    var acc=document.getElementsByClassName(className);
    acc.style.display="none";
}
    
    function alert1()
    {
        alert(" Thông tin bạn tìm có vẻ đang được cập nhật nên tạm thời không thể truy cập");
    }
    function alert2()
    {
        alert("Bạn đã cần đăng nhập để xem thông tin cá nhân")
    }
    function viet()
    {
        document.getElementById("searchan").innerHTML="Tìm Kiếm Tại Đây";
    }
    let slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }


   
 
    

  
