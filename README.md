
![GitHub Logo](/img/logo-motel_belgrade.png)
# motelBELGRADE - website

### Website za motel sa restoranom u Beogrdu sa rezervacijom soba.
Zamišljeno je da to bude mali, moderan motel za domaće i strance, u centru grada, sa odličnim internetom, dobrim restoranom pogodnim za organizovanje ručkova i poslovnih sastanka do 40 ljudi.

# Website se sastoji iz nekoliko stranica:

 -HOME strane, ili u html-u nazvane motel.html .

 Koja počinje sa scrolll navbarom, koji jasno pokazuje gde smo kako skrolujemo i klikom može tačno da se ode na željenu sekciju strane,
 sekcije same strne su:

 -home

 -smeštaj

 -restoran

 -aktivnosti

 -recenzije

 -rezervacija

 -kontakt

 -galerija

 Htela sam da se korisnik uvek vraća na home stranu, tako da i ako postoje posebne strane za smeštaj, restoran, aktivnosti i galeriju,
 na koje moze da ode da se informiše više o motelu, nisam htela previše da "luta" već da ga uvek vraćam na početnu stranu,
 gde može rezervisati sobe i dobiti sve korisne informacije. Ostale strane služe da mu pokažu više o onome što ga zanima ali da mu u isto vreme ne odvlače pažnju.
 Sama sekcija rezerviši se na dugme "rezerviši" proširuje tako što se otvara forma za rezervarciju.
 Forma je validirana.
 Recenzije su iskustva gostiju hotela, a kontakt je footer u koji sam stavilila kontakt podatke samog motela.

 -Na strane SMEŠTAJ, RESTORAN i AKTIVNOSTI se dolazi klikom na dugme "saznaj više".
 Navbar na njima  u sebi ima link ka home stranici, kontakt koji je ustvari footer sa kontakt podacima i link ka galeriji odakle korisnik može još da se ode na posebnu strnicu galerija da pogleda još slika.
 Stranice sadrže dotatni tekst o samom smeštaju, restoranu i Beogradu, ali i carusel koji samostalno menja slike na 3 sec, ali isto tako korisnik može da menja slike brzinom koja njemu odgovara.
 Na stranici aktivnosti su linkovane znamenitosti Beograda tako da ako zanima korisnika može da poseti te sajtove.
 Sve tri strane imaju zasebne html-ove pod nazivom posebna_strana_smeštaj.html, posebna_strana_restoran.html, posebna_strana_aktivnosti.html .

 -Strana galerija takođe ima zaseban html, galerija.html.
 Ona je dinamički urađena i poziva slike iz db.json-a. Na svaku sliku se može dodatno kliknuti i tada se otvara modal sa tom slikom.
 I na ovoj stanici je forsiran povratak na home stranu, pored toga sadrži još kontakt podatke motela.

 Site je responzivan.


# tehnike koje su korišćene u projektu
Pored HTML-a, CSS-a i JS kojima su izgrađene i stilizovane stranice koristila sam Bootstrap framework za lakše stilizovanje sajta, pored toga sam uključila Axsios zbog asinhronih funkcija i jQuery.

 # Dodatne tehnike 
    -npm
    -json-server

 # Struktura projekta
      MOTEL_FINAL
       img
       src
         css
            galerija.css
            main.css
            motel.css
 
         js
            galerija.js
            main.js
            validacija.js

         galerija.html

       motel.html  
       posebna_strana_aktivnosti.html
       posebna_strana_restoran.html
       posebna_strana_smestaj.html


 # Validacija Projekta
 Projekat je prošao html validaciju, css validaciju i proveru grešaka u konzoli


 # Pokretanje projekta
   
 Da bi se pokrenuo projekat potrebno je u terminalu VS Code ukucati :
 1. komandu npm install, u slučaju da je već instaliran preskočiti ovaj korak
 2. instalirati json server- ako već nije instaliran preko npm i json-server, u slučaju da je već instaliran preskočiti ovaj korak
 3. ukucati komandu npm run server
 4. otvoriti u browser-u html stranicu motel.html
 

