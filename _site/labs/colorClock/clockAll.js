
    // gradient 만드는 function
    function gradient(startColor, endColor, steps) {
             var start = {
                     'Hex'   : startColor,
                     'R'     : parseInt(startColor.slice(1,3), 16),
                     'G'     : parseInt(startColor.slice(3,5), 16),
                     'B'     : parseInt(startColor.slice(5,7), 16)
             }
             var end = {
                     'Hex'   : endColor,
                     'R'     : parseInt(endColor.slice(1,3), 16),
                     'G'     : parseInt(endColor.slice(3,5), 16),
                     'B'     : parseInt(endColor.slice(5,7), 16)
             }
             diffR = end['R'] - start['R'];
             diffG = end['G'] - start['G'];
             diffB = end['B'] - start['B'];

             stepsHex  = new Array();
             stepsR    = new Array();
             stepsG    = new Array();
             stepsB    = new Array();

             for(var i = 0; i <= steps; i++) {
                     stepsR[i] = start['R'] + ((diffR / steps) * i);
                     stepsG[i] = start['G'] + ((diffG / steps) * i);
                     stepsB[i] = start['B'] + ((diffB / steps) * i);
                     stepsHex[i] = '#' + Math.round(stepsR[i]).toString(16) + '' + Math.round(stepsG[i]).toString(16) + '' + Math.round(stepsB[i]).toString(16);
             }
             return stepsHex;
         }
        //  random gradient 만들기
              function randomRgbaString () {
                var r = Math.floor(Math.random() * 255)
                var g = Math.floor(Math.random() * 255)
                var b = Math.floor(Math.random() * 255)
                // let a = alpha
                return [r,g,b]
              }
       
              
          let colorss = [];
          for (let i = 0; i < 10; i++) colorss.push(randomRgbaString());
       
          // 그라디언트 set interval 맞춰서 뿌려주기
              var step = 0;
              //color table indices for: 
              // current color left
              // next color left
              // current color right
              // next color right
              var colorIndices = [0,1,2,3];
              
              //transition speed
              var gradientSpeed = 0.005;
              
              function updateGradient()
              {
                
                if ( $===undefined ) return;
                
              var c0_0 = colorss[colorIndices[0]];
              
              var c0_1 = colorss[colorIndices[1]];
              var c1_0 = colorss[colorIndices[2]];
              var c1_1 = colorss[colorIndices[3]];
              
              var istep = 1 - step;
              
              var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
              
              var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
              var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
              var color1 = "rgb("+r1+","+g1+","+b1+")";
             
              var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
              var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
              var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
              var color2 = "rgb("+r2+","+g2+","+b2+")";
                var clockBorder = document.querySelector('.clock-border');
                var clockFill = document.querySelector('.clock-fill');
               clockBorder.style.background = "linear-gradient(to right, " + color1 + "," + color2 + ")" ;
               clockBorder.style.backgroundOrigin = "border-box";
               clockFill.style.background = "linear-gradient(to right, " + color1 + "," + color2 + ")" ;
               clockFill.style.backgroundOrigin = "border-box";
                //  .css({
                //   borderImage: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
                
                step += gradientSpeed;
                if ( step >= 1 )
                {
                  step %= 1;
                  colorIndices[0] = colorIndices[1];
                  colorIndices[2] = colorIndices[3];
                  
                  //pick two new target color indices
                  //do not pick the same as the current one
                  colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colorss.length - 1))) % colorss.length;
                  colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colorss.length - 1))) % colorss.length;
                  
                }
              }
              
              setInterval(updateGradient,30);

              // fill/border tab 작동하기
              $(document).ready(function () {

                var previousActiveTabIndex = 0;
            
                $(".tab-link").on('click', function () {
            
                  $('ul.tabs li').removeClass('currentTab');
                  $(this).addClass('currentTab');
                  // tweenmax 삽질기록
                  // TweenMax.to(line, 0.6, {
                  //   x: 80,
                  //   delay: 0.05,
                  //   ease: Power4.easeOut,
                  // });
                  
                    var tabClicked = $(this).data("tab-index");
            
                    if(tabClicked != previousActiveTabIndex) {
            
                        $("#clockAll .clock").each(function () {
            
                            if($(this).data("tab-index") == tabClicked) {
            
                                $(".clock").hide();
                                $(this).show();
                                previousActiveTabIndex = $(this).data("tab-index");
                                return; }
                              });
                            }
                        });
                    });