# Instrukce pro tvorbu webu – Kosmetika pod hradem

## Situace

Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

## Cíl

Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

## Úkol

Vytvoř funkční web, který bude obsahovat:
- Strukturovaný komentovaný HTML5 kód s validní sémantikou
- Responzivní design (mobile-first přístup)
- CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
- Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
- CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp
- Základní JavaScript pro interaktivitu (na jemné oživení stránek)
- Dbej na bezpečnost webu (nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)

## Znalosti

- Zajisti rychlé načítání a optimalizovaný výkon
- Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
- Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
- Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu
- Všechny interní odkazy piš bez přípony .html př. /sluzby a ne sluzby.html
- Do .htaccess přidej mod_rewrite pravidla: přesměrování *.html → * (301) a interní obsluhu čistých URL na příslušný .html soubor
- Jako kanonickou (tj. preferovanou) URL webu chci domena.cz a web přesměruj z verze www na bez www
- Přesměrování http→https je řešeno na úrovni hostingu, nepřidávej ho do souboru .htaccess

## Základní SEO

- Strukturuj nadpisy H1–H6
- Přidej meta title a description na každé stránce
- Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
- Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
- Obrázkům dej alt popisky
- Propoj stránky vnitřními odkazy
- Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)

## Optimalizace obrázků

- Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
- Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.

## Vizuální hierarchie a čitelnost

- Jasná typografická hierarchie (nadpisy H1–H6, konzistentní velikosti)
- Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
- Čitelné fonty s českou diakritikou, minimální velikost 16px
- Správné řádkování (line-height 1.5–1.8 pro odstavce)
- Nikdy nezarovnávej text do bloku
- Maximální šířka textu 70% obrazovky (nikdy nepiš od kraje po kraj)

## Layout

- Šířku celého webu dej na 85% obrazovky
- Jasné oddělení sekcí a obsahových celků
- Pokud mám v sekci 4 karty/boxy – dej je po dvou na řádek (ne 3+1)
- Vyvážené použití bílého prostoru (white space)
- Intuitivní navigace – logo na střed, hamburger menu na mobilu vpravo
- Dej si záležet na patičce webu
- U prvku accordion (př. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, tak je rozděl do dvou sloupců
- Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
- Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
- Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

## Obsah

- Stručné a srozumitelné texty
- Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
- Vizuální prvky podporující obsah (ikony, obrázky, grafika)
- Logické uspořádání informací (nejdůležitější nahoře)
- Chybová stránka (místo „404" dej ikonu `<wa-icon name="face-frown" variant="regular"></wa-icon>`) a přidej ji na web pomocí příkazu v souboru .htaccess: `ErrorDocument 404 /404.html`
- Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

## Konzistence

- Jednotný styl tlačítek, karet a komponent
- Stejný padding/margin napříč podobnými elementy
- Stejné zaoblení prvků
- Konzistentní ikonografie (používej Font Awesome, ne emotikony)
- Stíny karet pouze velmi jemné
- Jednotný projev značky (brand voice)
- Konzistentní použití barev napříč celým webem
- Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

## Barevná paleta

- Omezený počet barev (2–3 hlavní + neutrální)
- Primární barva pro CTA (call-to-action) tlačítka
- Neutrální jemné barvy pro pozadí
- Pro text #333333
- Brand barvy (HEX):
  - Primární: `#f4e7e8`
  - Sekundární: `#c6b3af`
  - Tlačítka: `#aa506e`
  - Pozadí: `#ffffff`
  - Text: `#333333`

## Fonty

- Nadpisy: **Aboreto**
- Obsah: **Abhaya Libre**

## Struktura

- Jednostránkový web
- Položky menu:
  - Služby
  - Ceník
  - Dárkové poukazy
  - Galerie
  - Recenze
  - O mně
  - Objednat se
  - Kontakt

## Design

Vytvoř moderní mobile-first web: použít můžeš trendy jako souměrný bento grid layout se zaoblenými rohy, barevné gradienty, glass efekt, micro-animace na hover a scroll efekty či 3D prvky.

### Moderní design

- **Layout:** Používej souměrný Bento grid
- **Barvy:** Jemné gradienty, plynulé přechody
- **Prvky:** Zaoblené rohy (border-radius 16–24px), jemné stíny, 3D prvky
- **Glass efekt:** Skleněný efekt v pozadí karet (glassmorphism)
- **Animace:** Mikro interakce na hover, jemné scroll animace

## Obrázky

Na webu použij fotky (přílohy), které najdeš ve složce:
- `Obrazky/Hlavni` – pro Hlavní stranu (hero sekce atd.)
- `Obrazky/Proc_ja` – pro sekci Proč právě já
- `Obrazky/Sluzby` – pro sekci Služby
- `Obrazky/Darkova_poukazy` – pro sekci Dárkové poukazy
- `Obrazky/Galerie` – pro sekci Galerie
- `Obrazky/Recenze` – pro sekci Recenze
- `Obrazky/Dana_Janousova` – pro stránku O mně a Patičku

## Videa

Na webu použij video, které najdeš ve složce `Videa/Video`.

---

## Texty pro jednotlivé sekce

Drž se jich doslova a nic neměň ani nepřidávej.

### Hero sekce

> Péče o sebe není výdaj — je to investice
>
> Kosmetika pod hradem

---

### Proč právě já?

**Péče na míru**
Každá pleť je jiná, a proto ke každému klientovi přistupuji osobně. Společně najdeme tu nejlepší péči právě pro Vás.

**Místo pro odpočinek**
U mě nejde jen o kosmetiku, ale o pocit klidu a uvolnění. Chci, abyste se cítili příjemně od chvíle, kdy vstoupíte, až po tu, kdy odcházíte.

**Profesionální přístup**
Pracuji výhradně s kvalitními, ověřenými produkty, aby Vaše pleť dostávala tu nejmodernější a nejúčinnější péči.

---

### Služby

**Kosmetické ošetření**
Trápí vás problematická pleť se sklony k akné a chcete ji konečně dostat pod kontrolu? Nebo si toužíte dopřát pravidelnou dávku péče o sebe s kvalitní přírodní kosmetikou?

**Maderoterapie**
Trápí vás celulitida? Řekněte jí sbohem pomocí maderoterapie! Tato speciální masážní technika pomocí dřevěných válečků aktivuje lymfu a viditelně vyhlazuje pokožku.

**Masáž obličeje, krku a dekoltu**
Hledáte způsob, jak zlepšit vzhled pleti a uvolnit napětí? Vyzkoušejte masáž kombinací relaxace a přirozené liftingové péče, která rozjasní vaši tvář a navodí pocit vnitřní harmonie.

**Epilace obličeje**
Toužíte po hladké pleti bez nežádoucích chloupků? Dopřejte si šetrnou epilaci obličeje, která zanechá vaši pokožku jemnou, čistou a rozzářenou. Cítit se krásně může být tak jednoduché.

---

### Ceník

#### Kosmetické ošetření podle potřeby pleti

| Služba | Cena | Délka |
|---|---|---|
| Kosmetické ošetření podle potřeby pleti | 649 Kč | 60 min |
| Čisticí ošetření dle pleti (bez masáže) | 899 Kč | 90 min |
| Čisticí ošetření s limetkou | 899 Kč | 90 min |
| Zklidňující ošetření s heřmánkem | 899 Kč | 90 min |
| Hydratační ošetření s malinou | 899 Kč | 90 min |
| Projasňující a detoxikační ošetření s mrkví | 899 Kč | 90 min |
| Vyhlazující a energizující ošetření s mimosou | 999 Kč | 90 min |
| Protivrásková a zpevňující péče s kosatcem | 1499 Kč | – |
| Chemický peeling dle typu pleti | – | – |

#### Doplňkové kosmetické služby

| Služba | Cena |
|---|---|
| Úprava obočí a barvení řas (samostatně) | 300 Kč |
| Úprava obočí a barvení řas (během kosmetického ošetření) | 250 Kč |
| Odstranění nežádoucích chloupků z obličeje | od 100 Kč |
| Maderoterapie pleti (během kosmetického ošetření) | od 999 Kč |
| Lash lifting řas | 700 Kč |
| Maderoterapie těla | 750 Kč / 60 min |
| Mezoterapie dle typu pleti | 1799 Kč |
| Kosmetický ozonizer (dle rozsahu) | od 100 Kč |

*Masáž je v ceně každého kosmetického ošetření, kromě čisticího ošetření.*

---

### Dárkové poukazy

**Darujte krásu a relax**

**Na jaké služby lze poukaz využít?**
- Kosmetické ošetření
- Maderoterapie
- Masáž obličeje, krku a dekoltu
- Epilace obličeje

**Jak poukaz získat?**
Stačí zavolat na telefonní číslo +420 725 816 813 a já vám poukaz připravím. Poté si ho můžete vyzvednout u mě v salonu.

---

### Recenze

**Co o mně říkají klienti?**

> **Míša Galiová**
> „Byla jsem na maderoterapii. Velmi milý přístup paní Dany. Odcházela jsem spokojená a nadšená. Chodím opakovaně, vidím výsledky a už i mé okolí si všímá. Doporučuji."

> **Andrea Maršálková**
> „Chodím už několik měsíců a pokaždé jsem moc spokojená. Milý a profesionální přístup. Moc doporučuji."

> **Barbora Michajlov**
> „Paní Dana je velmi milá, profesionální a během ošetření vytváří krásně příjemnou atmosféru. Takže jsem se cítila jako v luxusním wellness."

> **Pavlína Vondrová**
> „Moc krásné prostředí, paní kosmetička je moc šikovná, milá. S výsledkem jsem naprosto spokojená. Byla jsem edukovaná, co používat na pleť, jaký mám typ pleti, dostala jsem cenné rady, jak o svou pleť pečovat. Určitě budu chodit pravidelně. Moc děkuji za krásnou péči."

---

### O mně

Jmenuji se Dana Janoušová a mou vášní je péče o pleť, krása a spokojenost mých klientů. Kosmetice se věnuji už řadu let a stále mě baví sledovat, jak i malé změny v péči dokážou udělat velký rozdíl – nejen na pleti, ale i na sebevědomí.

Ve své práci používám kvalitní a šetrné produkty značky Dr Renaud, které respektují přirozené potřeby pokožky. Každé ošetření je pro mě nejen kosmetickým, ale i relaxačním rituálem – chvílí, kdy můžete vypnout, zpomalit a dopřát si péči, kterou si zasloužíte.

Mým cílem je, abyste z mého salonu odcházeli nejen s krásnější pletí, ale i s dobrým pocitem, klidem a úsměvem.

---

### Objednat se

**Chcete se objednat?**

Svůj termín si můžete zarezervovat na telefonním čísle +420 725 816 813 v pracovní den od 8:00 do 16:00.

Budu se na vás těšit v mém salonu.

---

### Kontakt

**Dana Janoušová**
Kosmetika pod hradem
Kamýk 65, 41201
Dana.Ltm@seznam.cz
+420 725 816 813

IČO: 05583900, zapsaná v Živnostenském rejstříku od 6. 1. 2022 na městském úřadě v Litoměřicích
