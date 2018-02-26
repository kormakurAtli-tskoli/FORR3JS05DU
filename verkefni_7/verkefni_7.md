# Verkefni 7

1. Hvað er callback? Útskýrðu með eigin orðum, komdu með kóðadæmi.
    > Callback fall er fall sem er keyrt um leið og annað fall hefur verið keyrt. Fall er kallað callback fall ef það er sett í annað fall sem argument.
    ```javascript
    $("button").click(function(){
        $("p").hide("slow", function(){
            alert("The paragraph is now hidden");
        });
    });
    ```
2. Hvað er Eventloop? Útskýrðu með eigin orðum.
    > EventLoopið er það sem gerir JavaScript kleift að nota hluti eins og callbacks.
3. Leiðréttu eftirfarandi kóða þannig að hann virki (ekki syntax villa).
    ```javascript
    function checkUsername() {
        var target = e.target;
    }
    var el = document.getElementById('username');
    el.addEventListener('blur', checkUsername, false);
    ```
    > Dæmi:
4. Event flow, Hvað þýðir false í Event Listener?
    ```javascript
    elUsername.addEventListener('blur' , function() {
    checkUsername(5);
    }, false)
    ```
    > False í Event Listener þýðir að það er farið í gegnum þetta í öfugri röð þetta væri true þá myndi þetta vera 1,2,3 en núna þegar þetta er false
þá er þetta 3,2,1 eða bubbling eins og það er kallað
5. Hvað gera eftirfarandi aðgerðir?  
  a. stopPropagation()  
  b. preventDefault()
    > a. stopPropagation() kemur í veg fyrir að click event hoppi upp í parent element.  
    > b. preventDefault() kemur í veg fyrir að hlekkur opni slóð.
6. Quiz  
  a. Þegar notandi hefur smellt á einhvern svarmöguleika þá á viðkomandi svarmöguleiki
að fá rauðan bakgrunnslit. Notaðu Event object og Event Delegation til að ná þessu
fram.   
  b. Touch Events til að velja svarmöguleika.
https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events
