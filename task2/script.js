var l=1;
function expandGrid(){
    var container = document.getElementById("griid");
    if(l==1)
    {
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/Kovai_Cora_Cotton"><img class="saree" src="cotton.jpeg" alt="cotton"><div class="tover"><br>COTTON</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Chanderi_sari"><img class="saree" src="chanderisilk2.jpeg" alt="chanderi_silk"><div class="tover"><br>CHANDERI_SILK</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Chiffon"><img class="saree" src="chiffon2.jpeg" alt="CHIFFON"><div class="tover"><br>CHIFFON</div></a></div>';
        l+=1;
    }
 
   
    else
    {
        alert('More Content will be added Soon. Stay Tuned:)');
    }
}
function sub(){
    alert('Form Sent')
}