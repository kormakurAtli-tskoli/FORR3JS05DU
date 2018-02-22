# Verkefni 7

1. Hvað er callback? Útskýrðu með eigin orðum, komdu með kóðadæmi.
    > .
2. Hvað er Eventloop? Útskýrðu með eigin orðum.
    > .
3. Leiðréttu eftirfarandi kóða þannig að hann virki (ekki syntax villa).
    ```javascript
    function checkUsername() {
    var target = e.target;
    }
    var el = document.getElementById('username');
    el.addEventListener('blur', checkUsername, false);
    ```
    > .
4. Event flow, Hvað þýðir false í Event Listener?
    ```javascript
    elUsername.addEventListener('blur' , function() {
    checkUsername(5);
    }, false)
    ```
    > .
5. Hvað gera eftirfarandi aðgerðir?  
  a. stopPropagation()  
  b. preventDefault()
    > .
6. Quiz  
  a. Þegar notandi hefur smellt á einhvern svarmöguleika þá á viðkomandi svarmöguleiki
að fá rauðan bakgrunnslit. Notaðu Event object og Event Delegation til að ná þessu
fram.   
  b. Touch Events til að velja svarmöguleika.
https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events
