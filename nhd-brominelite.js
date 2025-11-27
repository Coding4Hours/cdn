  /*
  README!!!!
 mmmmmm    mmmmmmmm     mm     mmmmm     mmm  mmm  mmmmmmmm     mm        mm        mm        mm        mm        mm    
 ##""""##  ##""""""    ####    ##"""##   ###  ###  ##""""""     ##        ##        ##        ##        ##        ##    
 ##    ##  ##          ####    ##    ##  ########  ##           ##        ##        ##        ##        ##        ##    
 #######   #######    ##  ##   ##    ##  ## ## ##  #######      ##        ##        ##        ##        ##        ##    
 ##  "##m  ##         ######   ##    ##  ## "" ##  ##           ""        ""        ""        ""        ""        ""    
 ##    ##  ##mmmmmm  m##  ##m  ##mmm##   ##    ##  ##mmmmmm     mm        mm        mm        mm        mm        mm    
 ""    """ """"""""  ""    ""  """""     ""    ""  """"""""     ""        ""        ""        ""        ""        ""    

                                                                                                                                                                                                                                              
replace file with the file you want all_i_one.html, games.html, or proxy.html
*/

  const file = "games.html"


  document.addEventListener("keydown", function(event) {
      if (event.key === "r") {
          document.open();
  try {
      fetch(`https://cdn.jsdelivr.net/gh/Bromine-labs/BromineLite@main/${file}?t=` + Date.now())
          .then(response => response.text())
          .then(html => {
              document.write(html);

              document.querySelectorAll('script').forEach(oldScript => {
                  const newScript = document.createElement('script');
                  if (oldScript.src) {
                      newScript.src = oldScript.src;
                  } else {
                      newScript.textContent = oldScript.textContent;
                  }
                  document.body.appendChild(newScript);
              });
          });
  } catch (error) {
      console.error('error:', error);
  }
        document.close();
      }
  });
