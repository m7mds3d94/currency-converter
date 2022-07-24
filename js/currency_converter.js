

// start all variable change html documents
var currency = $(".all_currency")
var allcurrency = $(".all_currency");
var converter = $(".converter");
var Keyword_currency = $(".Keyword_currency")
var resultHTML = $(".convert_EGP");
// =====================================


// all price currency 
var dollar_US = 18.90;
var rial_SA = 4.99;
var euro_FR = 22.21;
var dirham_AED = 5.21;
var rial_OM = 40.70;
var dinar_KW = 65.88;
// =========================

allcurrency.change(convert)
// end function convert currency


// start all functions currency
function Euro() {
var result =  $(this).val() * euro_FR;
resultHTML.text(result.toFixed(2));       
}
function dollar() {
        var result =  $(this).val() * dollar_US;
        resultHTML.text(result.toFixed(2));
}
function riyalSA() {
        var result =  $(this).val() * rial_SA;
        resultHTML.text(result.toFixed(2));
}
function dirhamsAED() {
        var result =  $(this).val() * dirham_AED;
        resultHTML.text(result.toFixed(2));
}
function riyalOM() {
        var result =  $(this).val() * rial_OM;
        resultHTML.text(result.toFixed(2));
}
function dinarKW() {
        var result =  $(this).val() * dinar_KW;
        resultHTML.text(result.toFixed(2));
}
// ===================================================


// start function convert currency

// converter.on("")
function convert() {
                var allcurrencyOption = $(".all_currency option:selected").text();
                converter.removeAttr("disabled")
                converter.val(" ")
                converter.focus()
                converter.css("background","#f7f1e3")
                resultHTML.text("0.0")
                if ($(this).val() == "eur") 
                {
                converter.on("keyup", Euro )
                Keyword_currency.text(allcurrencyOption)
                }
                if ($(this).val() == "us") 
                {
                converter.on("keyup", dollar);
                Keyword_currency.text(allcurrencyOption)
                }
                if ($(this).val() == "sa") 
                {
                converter.on("keyup", riyalSA )  
                Keyword_currency.text(allcurrencyOption)
                }
                if ($(this).val() == "aed")
                {
                converter.on("keyup", dirhamsAED )  
                Keyword_currency.text(allcurrencyOption)
                }
                if ($(this).val() == "oma")
                {
                converter.on("keyup", riyalOM);
                Keyword_currency.text(allcurrencyOption);
                }
                if ($(this).val() == "kuw") 
                {
                converter.on("keyup", dinarKW);  
                Keyword_currency.text(allcurrencyOption);
                }
}
// =============================================================
