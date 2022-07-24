


<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="stylesheet" href="css/currency_converter.css">
<link rel="shortcut icon" href="css/convert.png" type="image/x-icon"> 
</head>

<body>

<div class="main">
<div class="main_conveter">
    <div class="currency">


        <h4>Choose Country Currency</h4>
        <select  name="change_currency" id="select_cur" class="all_currency">
            <option value="choose" disabled selected hidden>Choose Currency</option>
            <option value="us">Dollar.US</option>
            <option value="sa">Riyal.SA</option>
            <option value="eur">French.Euro</option>
            <option value="aed">Dirhams.AED</option>
            <option value="oma">Riyal.Oman</option>
            <option value="kuw">Kuwait.Dinar</option>
        </select>
    </div>

        <div class="currency_conveter">
            <div class="input-currency">
                <input type="number" name="converter" class="converter" disabled>
                <h3 class="Keyword_currency"></h3>
            </div>
           <div class="egpresult">
            <h3 class="convert_EGP">0.0</h3>
            <h3 class="convert_EGPKeyword">EGP</h3>
           </div>
           
         
        </div>
    
    
  
</div>

</div>


<script src="js/jquery-3.6.0.min.js"></script>
<script src="js/currency_converter.js"></script>
</body>
</html>
