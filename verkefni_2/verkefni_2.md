# Verkefni 2

1. Hvað er ECMAScript?
    > ECMAScript er í rauninni kjarni JavaScript, og einhverra annara tungumála, til dæmis ActionScript og Jscript.
2. Hvað þýðir að JavaScript sé loosely typed tungumál?
    > Það þýðir að hægt sé að búa til breytur án þess að skilgreina þær. Þær verða þá sjálfkrafa `undefined`.
3. Er einhver munur á einföldum og tvöföldum gæsalöppum í JavaScript?
    > Nei, það er engin munur á einföldum og tvöföldum gæsalöppum. Hins vegar, þegar verið er að gera streng sem þarf að innihalda gæsalappir, er gott að nota aðrar gæsalappir en þær sem eru notaðar til þess að afmarka strenginn.
4. Hvað er null og undefined?
    > `NULL` og `undefined` eru gildi sem sýna að ekkert sé til staðar. Bæði `NULL` og `undefined` eru gagnatýpur sem innihalda aðeins sjálft sig, sem sagt `NULL` er eina gildið í `NULL` týpunni, og `undefined` er eina gildið í `undefined` týpunni.
5. Hver er munurinn á == og === í JavaScript?
    > Munurinn er sá að `==` reynir að fá gildin sitthvoru megin til þess að vera það sama, en `===` gerir það ekki.
    > Dæmi:
    ```javascript
    "1" == 1 //Þetta skilar true
    "1" === 1 //Þetta skilar false
    ```
6. Hver er munurinn á let og var? komdu með kóðadæmi sem sýnir muninn.
    > Munurinn er sá að `var` er aðgengilegt fyrir öllu blockinu sem hún er í, en `let` er meira local, og er aðengilegt í enclosing blockinu sem hún er í.
    > Einnig leyfir`let` þér ekki að endurskilgreina breytu sem búið er að skilgreina.
    > Dæmi:
    ```javascript
    function fallA() {
        //x er ekki aðgengilegt hér
        for( let x = 0; x < 5; x++) {
            //x er bara aðgengilegt hér
        }
        //x er ekki aðgengilegt hér
    }
    
    function fallB() {
        //y er aðgengilegt hér
        for( let y = 0; y < 5; y++) {
            //y er aðgengilegt fyrir öllu fallinu
        }
        //y er aðgengilegt hér
    }
    ```
7. Skilgreindu fall á þrjá mismunandi vegu með kóðadæmi; function declarations, function expressions og arrow functions.
    > .
8. Hvað gerir 'use strict'; í EcmaScript? (þarf að googla svar)
    > .
9. Hér er dæmi um “function declaration” og kall á fallið. Afhverju virkar eftirfarandi kóði í JavaScript, útskýrðu? 
    ```javascript
    x(); 
    function x() { 
    console.log('x'); 
    } 
    ```
    > .
10. Í hvaða röð er kóðinn keyrður í raun eftir að þýðandinn (e. interpreter) er búinn að fá hann til sín? Hvað birtir alert(), afhverju? 
    ```javascript
    function foo(){ 
        function bar() { 
            return 3; 
        } 
        return bar();
        function bar() { 
            return 8; 
        } 
    } 
    alert(foo()); 
    ```
    > .
11. Hvað gerist þegar ég gleymi að skilgreina breytu með _var_ eða _let_? Útskýrðu hvað gerist 
    ```javascript
    age = '30';
    console.log(age); 
    ```
    > .
12. Útskýrðu hvað eftirfarandi kóði gerir, hvað gera svigarnir? 
    ```javascript
    (function() { 
        alert('Hello World'); 
    })(); 
    ```
    > .
13. Útskýrðu variable scope.
    > .
14. Hvað er call stack? 
    > .
