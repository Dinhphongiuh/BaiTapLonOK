const btnAddCart = document.querySelectorAll(".btn.home-product-item-add");

let count = 0;

btnAddCart.forEach(function(button, index)
{
    button.addEventListener("click", function(event)
    {
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector(".home-product-item__img");
        
        var style = window.getComputedStyle(productImg);
        var bac = style.backgroundImage;
        console.log(bac);

        var startIndex = bac.indexOf('/img');
        var endIndex = bac.lastIndexOf('"');
        var rs = bac.substring(startIndex, endIndex);
        console.log(rs);

        console.log(productImg);
        
        var namePro = product.querySelector(".home-product-item__name").innerText;
        console.log(namePro)

        var productPrice = product.querySelector(".home-product-item__price-current").innerText;
        console.log(productPrice)


        addcart(productPrice, namePro, rs)
    });
});
function addcart(productPrice, namePro, rs)
{
    var addli = document.createElement("li.header__cart-item");
    // addli.classList.add("header__cart-item");
    var trcontent = '<li class="header__cart-item"> <img src="..'+rs+'" alt="" class="header__cart-img"><div class="header__cart-item-info"><div class="header__cart-item-head"><h5 class="header__cart-item-name">'+ namePro +'</h5><div class="header__cart-item-price-wrap"><span class="header__cart-item-price">'+ productPrice +'</span><span class="header__cart-item-multiply">x</span><span class="header__cart-item-qnt">1</span></div></div><div class="header__cart-item-body"><span class="header__cart-item-description">Size: xs</span><span class="header__cart-item-remove">Xoá</span></div></div></li>';
    addli.innerHTML = trcontent;

    var ulSp = document.querySelector(".header__cart-list-item");
    ulSp.append(addli);
    // alert("Sản phẩm đã được thêm");

    count = count + 1;
    let dem = count.toString();
    

    var productCount = document.querySelector(".header__cart-notice");
    productCount.textContent = dem;

    
    var remove = addli.querySelector(".header__cart-item-remove");
    remove.addEventListener("click", function()
    {
        addli.remove();
        count = count - 1;
        let dem = count.toString();
        productCount.textContent = dem;
        // alert("đã xoá sản phẩm khỏi giỏ hàng");
    });
}
