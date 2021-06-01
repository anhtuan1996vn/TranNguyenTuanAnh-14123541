$(document).ready(function(){
    $('.nav-hover').hover(function(){
        var subid = $(this).attr("data-id");
        if(subid != undefined){
            var tagSub = document.getElementById(subid);
            console.log(tagSub.style.display);
            if(!tagSub.style.display || tagSub.style.display === 'none')
            {
                tagSub.style.display = "block";
            }else{
                tagSub.style.display = "none";
            }
        }        
    });
    $('.menu-mobile').click(function (e) { 
        var subid = $(this).attr("data-id");
        if(subid != undefined){
            var tagSub = document.getElementById(subid);
            if(!tagSub.style.display || tagSub.style.display === 'none')
            {
                tagSub.style.display = "block";
                $('.chevron-dow-mn').hide();
                $('.chevron-up-mn').show();
            }else{
                tagSub.style.display = "none";
                $('.chevron-dow-mn').show();
                $('.chevron-up-mn').hide();
            }
        }
    });
    $('#ham-th-list').click(function(){
        var tagSub = document.getElementById("menu-mb");
            if(!tagSub.style.display || tagSub.style.display === 'none')
            {
                tagSub.style.display = "block";
            }else{
                tagSub.style.display = "none";
            }
    });
    $('.click-size').click(function(){
        $('.click-size').removeClass('btn-tt-detail-active');
        $(this).addClass('btn-tt-detail-active');
        $('#price-det').html($(this).attr('data-price'));
    });

    $('#login').click(function(){
        var username = $('#username').val();
        var passw = $('#passw').val();
        if(username === '' || username === undefined){
            $('.text-error').show();
            return;
        }
        if(passw === '' || passw === undefined){
            $('.text-error').show();
            return;
        }
        $('.text-error').hide();
        alert("Đăng nhập thành công!");
        location.href = './TrangChu.html'
    });

    $('#register').click(function(){
        var Name = $('#Name').val();
        var ngaysinh = $('#ngaysinh').val();
        var phone = $('#phone').val();
        var gender = $('#gender').val();
        var email = $('#email').val();
        var passw = $('#passw').val();
        var repass = $('#repass').val();
        var address = $('#address').val();
        if(Name === '' || Name === undefined){
            alert("Vui lòng nhập họ tên!");
            return;
        }
        if(ngaysinh === '' || ngaysinh === undefined){
            alert("Vui lòng nhập ngày sinh!");
            return;
        }
        var rex = /^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;
        var phone1 = phone.match(rex);
        if(phone === '' || phone === undefined){
            alert("Vui lòng nhập số điện thoại!");
            return;
        }
        if (!phone1) {
            alert('Vui lòng kiểm tra số điện thoại!');
            return false;
        }
        if(gender === '' || gender === undefined){
            alert("Vui lòng chọn giới tính!");
            return;
        }
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(email === '' || email === undefined){
            alert("Vui lòng nhập email!");
            return;
        }
        if(!regex.test(String(email).toLowerCase())){
            alert("Vui lòng kiểm tra email!");
            return;
        }
        if(passw === '' || passw === undefined){
            alert("Vui lòng nhập mật khẩu!");
            return;
        }
        if($('#passw').val().length < 6){
            alert("Mật khẩu phải lớn hơn 6 ký tự!");
            return;
        }
        if($('#passw').val().length > 15){
            alert("Mật khẩu phải nhỏ hơn 15 ký tự!");
            return;
        }
        if(passw !== repass){
            alert("Mật khẩu nhập lại không đúng!");
            return;
        }
        if(address === '' || address === undefined){
            alert("Vui lòng chọn địa chỉ!");
            return;
        }
        $('.text-error').hide();
        alert("Đăng ký thành công!");
        location.href = './TrangChu.html'
    });

    $('#input1').change(function(){
        var num = $(this).val();
        var price = $(this).attr("data-price");
        var num2 = $('#input2').val();
        var price2 = $('#input2').attr("data-price");
        var ship = $('#ship').html().replace(',','');
        var amont = num * price + num2 * price2;
        var total = parseInt(ship) + parseInt(amont);
        $('#amount').html(numberWithCommas(amont));
        $('#totalamount').html(numberWithCommas(total));
    });
    $('#input2').change(function(){
        var num = $(this).val();
        var price = $(this).attr("data-price");
        var num2 = $('#input1').val();
        var price2 = $('#input1').attr("data-price");
        var ship = $('#ship').html().replace(',','');
        var amont = num * price + num2 * price2;
        var total = parseInt(ship) + parseInt(amont);
        $('#amount').html(numberWithCommas(amont));
        $('#totalamount').html(numberWithCommas(total));
    });
    
    $('#paycod').click(function(){
        var name = $('#name').val();
        var phone = $('#phone').val();
        var Email = $('#Email').val();
        var address = $('#address').val();
        var tinhpop = $('#tinhop').val();
        // var quanhuyen = $('#quanhuyen').val();
        if(name == '' || name == null){
            alert("Vui lòng nhập tên khách hàng!");
            return;
        }
        if(phone == '' || phone == null){
            alert("Vui lòng nhập số điện thoại!");
            return;
        }
        var filterphone = /^([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})$/;
        if(!filterphone.test(phone)){
            alert("Số điện thoại không đúng định dạng!");
            return;
        }
        if(Email == '' || Email == null){
            alert("Vui lòng nhập email!");
            return;
        }
        var rexmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!rexmail.test(Email)){
            alert("Email không đúng định dạng!");
            return;
        }
        
        if(tinhpop === '--Chọn tỉnh thành--'){
            alert("Vui lòng chọn Tỉnh/Thành");
            return;
        }
  
        var rexaddress = /^\\d+\\s+([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)$/
        if(address == '' || address == null){
            alert("Vui lòng nhập địa chỉ!");
            return;
        }
        if(rexaddress.test(address)){
            alert("Địa chỉ không đúng định dạng!");
            return;
        }
        alert("Đặt hàng thành công!");
        location.href = './TrangChu.html';
    });
    $('#payvisa').click(function(){
        var name = $('#name').val();
        var phone = $('#phone').val();
        var Email = $('#Email').val();
        var address = $('#address').val();
        var tinhpop = $('#tinhop').val();
        // var quanhuyen = $('#quanhuyen').val();
        if(name == '' || name == null){
            alert("Vui lòng nhập tên khách hàng!");
            return;
        }
        if(phone == '' || phone == null){
            alert("Vui lòng nhập số điện thoại!");
            return;
        }
        var filterphone = /^([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})$/;
        if(!filterphone.test(phone)){
            alert("Số điện thoại không đúng định dạng!");
            return;
        }
        if(Email == '' || Email == null){
            alert("Vui lòng nhập email!");
            return;
        }
        var rexmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!rexmail.test(Email)){
            alert("Email không đúng định dạng!");
            return;
        }
        
        if(tinhpop === '--Chọn tỉnh thành--'){
            alert("Vui lòng chọn Tỉnh/Thành");
            return;
        }
  
        var rexaddress = /^\\d+\\s+([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)$/
        if(address == '' || address == null){
            alert("Vui lòng nhập địa chỉ!");
            return;
        }
        if(rexaddress.test(address)){
            alert("Địa chỉ không đúng định dạng!");
            return;
        }
        alert("Chuyển sang trang thanh toán!");
        alert("Thanh toán thành công!");
        location.href = './TrangChu.html';
    });
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

