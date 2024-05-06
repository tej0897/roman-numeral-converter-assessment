function romanConverter(){
    const input = document.getElementById("number").value;
    console.log(input);
    if(input === ""){
      document.getElementById("output").innerHTML = "Please enter a valid number";
    } else if (input < 1){
    document.getElementById("output").innerHTML = "Please enter a number greater than or equal to 1";
    } else if (input > 3999){
      document.getElementById("output").innerHTML = "Please enter a number less than or equal to 3999";
    } else {
      document.getElementById("output").innerHTML = convert(input);
    }
    }
    
    function convert(num){
       var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      roman = '',
      i; 
      for ( i in lookup ) {
        while ( num >= lookup[i] ) {
          roman += i;
          num -= lookup[i];
        }
      }
        return roman;
    }
    
    document.getElementById("convert-btn").addEventListener("click", romanConverter);
    
