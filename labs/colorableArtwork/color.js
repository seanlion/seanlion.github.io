var background = document.querySelector('.background'),
    dots = document.querySelectorAll('.dot'),
    r1 = document.querySelector('#red1'),
    g1 = document.querySelector('#green1'),
    b1 = document.querySelector('#blue1'),
    r2 = document.querySelector('#red2'),
    g2 = document.querySelector('#green2'),
    b2 = document.querySelector('#blue2'),
    r_out1 = document.querySelector('#r_out1'),
    g_out1 = document.querySelector('#g_out1'),
    b_out1 = document.querySelector('#b_out1'),
    r_out2 = document.querySelector('#r_out2'),
    g_out2 = document.querySelector('#g_out2'),
    b_out2 = document.querySelector('#b_out2'),
    hex1 = document.querySelector('#hex1');
    hex2 = document.querySelector('#hex2');


function setColor(){
      var r_hex1 = parseInt(r1.value, 10).toString(16),
          g_hex1 = parseInt(g1.value, 10).toString(16),
          b_hex1 = parseInt(b1.value, 10).toString(16),
          r_hex2 = parseInt(r2.value, 10).toString(16),
          g_hex2 = parseInt(g2.value, 10).toString(16),
          b_hex2 = parseInt(b2.value, 10).toString(16)
          hex1 = "#" + pad(r_hex1) + pad(g_hex1) + pad(b_hex1);
          hex2 = "#" + pad(r_hex2) + pad(g_hex2) + pad(b_hex2);
      background.style.backgroundColor = hex1; 
      dots.forEach(dot => dot.style.backgroundColor = hex2);
      // dot[0].style.backgroundColor = hex2;
      
      hex1.value = hex1;
      hex2.value = hex2;
    }
    
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
      g_out.value1 = g1.value;
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