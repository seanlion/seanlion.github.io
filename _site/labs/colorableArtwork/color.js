const background = document.querySelector('.background');
const  dots = document.querySelectorAll('.dot');
const r1 = document.querySelector('#red1');
const  g1 = document.querySelector('#green1');
const  b1 = document.querySelector('#blue1');
const  r2 = document.querySelector('#red2');
const  g2 = document.querySelector('#green2');
const b2 = document.querySelector('#blue2');
const r_out1 = document.querySelector('#r_out1');
const  g_out1 = document.querySelector('#g_out1');
const  b_out1 = document.querySelector('#b_out1');
const  r_out2 = document.querySelector('#r_out2');
const  g_out2 = document.querySelector('#g_out2');
const  b_out2 = document.querySelector('#b_out2');
const hex_output1 = document.querySelector('#hex1');
const  hex_output2 = document.querySelector('#hex2');


function setColor(){
      var r_hex1 = parseInt(r1.value, 10).toString(16);
      var g_hex1 = parseInt(g1.value, 10).toString(16);
      var b_hex1 = parseInt(b1.value, 10).toString(16);
      var r_hex2 = parseInt(r2.value, 10).toString(16);
      var g_hex2 = parseInt(g2.value, 10).toString(16);
      var b_hex2 = parseInt(b2.value, 10).toString(16);
      var hex1 = "#" + pad(r_hex1) + pad(g_hex1) + pad(b_hex1);
      var hex2 = "#" + pad(r_hex2) + pad(g_hex2) + pad(b_hex2);
      background.style.backgroundColor = hex1; 
      dots.forEach(dot => dot.style.backgroundColor = hex2);
      hex_output1.value = hex1;
      hex_output2.value = hex2;
      console.log(hex1);
      console.log(hex2);
      // output tag를 안쓰고 다른 걸 쓰면 innerHTML을 해줘야 한다.
      // hex_output1.innerHTML = hex1;
    }
    // 각각의 rgb값들이 10의자리가 안나올때 0을 더해준다.
    function pad(n){
      return (n.length<2) ? "0"+n : n;
    }
    
    r1.addEventListener('change', function() {
      setColor();
      r_out1.value = r1.value;
    }, false);
    
    r1.addEventListener('input', function() {
      setColor();
      r_out1.value = r1.value;
    }, false);
    
    g1.addEventListener('change', function() {
      setColor();
      g_out1.value = g1.value;
    }, false);
    
    g1.addEventListener('input', function() {
      setColor();
      g_out1.value1 = g1.value;
    }, false);
    
    b1.addEventListener('change', function() {
      setColor();
      b_out1.value = b1.value;
    }, false);
    
    b1.addEventListener('input', function() {
      setColor();
      b_out1.value = b1.value;
    }, false);

    // 2번째 colorset 변경
    r2.addEventListener('change', function() {
      setColor();
      r_out2.value = r2.value;
    }, false);
    
    r2.addEventListener('input', function() {
      setColor();
      r_out2.value = r2.value;
    }, false);
    
    g2.addEventListener('change', function() {
      setColor();
      g_out2.value = g2.value;
    }, false);
    
    g2.addEventListener('input', function() {
      setColor();
      g_out2.value = g2.value;
    }, false);
    
    b2.addEventListener('change', function() {
      setColor();
      b_out2.value = b2.value;
    }, false);
    
    b2.addEventListener('input', function() {
      setColor();
      b_out2.value = b2.value;
    }, false);