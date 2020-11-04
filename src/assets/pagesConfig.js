const pagesConfig = {
  // ide irhatod a szaros configodat
  landing: {
    youtube_links: [
      {
        text: "Művészi torna",
        link: "https://www.youtube-nocookie.com/embed/SpyVXQnwS8M?autoplay=1",
      },
      {
        text: "Mozdulatművészet",
        link: "https://www.youtube-nocookie.com/embed/raGYvLAL1s4?autoplay=1",
      },
      {
        text: "Modern tánc",
        link: "https://www.youtube-nocookie.com/embed/RWOz4Koekas?autoplay=1",
      },
    ],
    list_courses: {
      title: "Milyen kurzusaink vannak?",
      list: [
        {
          text: "Művészi torna",
          link: "eurhythmics",
        },
        {
          text: "Mozdulatművészet",
          link: "callisthenics",
        },
        {
          text: "Modern tánc",
          link: "modern",
        },
        {
          text: "Jazz tánc",
          link: "jazz",
        },
        {
          text: "Klasszikus balett",
          link: "ballet",
        },
        {
          text: "Pre balett / EN",
          link: "pre_ballet",
        },
      ],
    },
    list_what_we_do: {
      title: "És az órákon kívül...",
      list: [
        {
          text: "Évzáró előadások",
          link: "speech_day",
        },
        {
          text: "Országos versenyek",
          link: "competitions",
        },
        {
          text: "Nyilvános órák",
          link: "public_class",
        },
        {
          text: "OMISK Gála",
          link: "omisk",
        },
        {
          text: "OMISK Mozdulatműhely",
          link: "callisthenics",
        },
        {
          text: "Nyári táborok",
          link: "camp",
        },
      ],
    },
  },
  courses: {
    pages: {
      eurhythmics: {
        opt: {
          courseName: "Művészi torna",
          color: "blue",
          img: "muveszetitorna",
        },
        info: {
          cost: {
            name: "Tandíj",
            occasions: ["Heti 2 x 45 perc", "Heti 2 x 60 perc"],
            prices: ["10000-10300 Ft / hó", "11000-11300 Ft / hó"],
          },
          discount: {
            name: "Kedvezmény",
            sibling: ["2 testvér esetén", "3 testvér esetén"],
            prices: ["2000.- /hó/fő", "3000.- /hó/fő"],
          },
          ages: {
            name: "Korosztály",
            ageGroup: ["4 éves kortól", "korcsoportonként"],
          },
        },
        places: [
          {
            name: "Virányosi Közösségi Ház",
            address: "XII. ker. Szarvas Gábor út 8/c",
            appointments: ["Kedd", "Csütörtök"],
          },
          {
            name: "Szarvas Gábor Közösségi Tér",
            address: "XII. Szarvas Gábor út 8/c",
            appointments: ["Hétfő", "kedd", "Szerda", "Csütörtök"],
          },
          {
            name: "Óbudai Kulturális Központ",
            address: "III. San Marco út 81",
            appointments: ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Pentek"],
          },
          {
            name: "MOM Kulturális Központ",
            address: "XII. ker. Csörsz út 18",
            appointments: ["Hétfő", "Csütörtök"],
          },
          {
            name: "Békásmegyeri Közösségi Ház",
            address: "III. Csobánka tér 5",
            appointments: ["Kedd", "Csütörtök", "Péntek"],
          },
          {
            name: "Józsefvárosi Galéria és Rendezvény Központ",
            address: "VIII. József krt. 70",
            appointments: ["Szerda"],
          },
          {
            name: "VII. ker. Táncstúdió",
            address: "VII. Wesselényi u. 41",
            appointments: ["Hétfő", "Szerda", "Péntek"],
          },
        ],
        forWhom: {
          title: "Neked ajánljuk, ha…",
          img: "pages/muveszetitorna/1.jpg",
          description: [
            "szeretnél szép testtartást, és ügyesebben mozogni.",
            "olyan mozgást keresel, ami akkor is hasznodra válik, ha végül nem a táncnál hanem az úszásnál kötsz ki.",
            "óvodásként kiváncsi vagy, milyen lesz majd az iskolában egy 45 perces tanóra.",
          ],
        },
        aboutCourse: {
          title: "Mi a művészi torna?",
          img: "pages/muveszetitorna/2.jpg",
          description:
            "Művészi torna tanfolyamunk alapja Berczik Sára esztétikus testképző és mozgásfejlesztő technikája. A módszer lényege a tudatos mozgásra nevelés, ami bármilyen későbbi mozgástanulást könnyebbé tesz. A legkisebbek számára is jól érthető és értelmezhető, így hosszabb távon is leköti a figyelmüket. A gyakorlatok összeállításának meghatározó szempontja az esztétikus rendezettség. A koreográfiákhoz használt klasszikus zene fogékonnyá teszi a gyerekeket a társművészetekre. Nem kell hozzá speciális adottság, a helyesen végzett, szép mozdulatok mindenkinek sikerélményt adnak.",
        },
        whenStart: {
          title: "Mikor tudom elkezdeni?",
          img: "pages/muveszetitorna/3.jpg",
          description:
            "Iskolánk képzési rendszere 4 éves korban kezdődik művészi tornával. A tudatos mozgás elsajátítása – ami folyamatos gondolkodásra és koncentrációra késztet – leghamarabb ebben az életkorban lehetséges. Később  is el lehet kezdeni, mindenki az életkorának megfelelő csoportba kerül, ahol a tanárok segítenek bekapcsolódni a tanulásba.  A művészi torna szerves folytatása a mozdulatművészet, amelyben már nagyobb hangsúlyt kap a tánc és a kreativitás. Iskolás kortól  más műfajok is választhatók, amelyekhez a művészi torna ugyanúgy kiváló alapot ad.",
        },
        structure: {
          title: "Hogyan épül fel az óra?",
          img: "pages/muveszetitorna/4.jpg",
          description:
            "A Berczik-módszer a mozgást alapelemeire bontja, különböző testrészeink mozdulatait egymástól függetlenítve tanítja, majd illeszti össze. Az órák koncentrikusan épülnek egymásra, ismételve, elmélyítve és bővítve a megtanult mozgásanyagot. Rendszeresen használunk kéziszereket (például labda, karika, szalag), amik nemcsak változatossá teszik az órát, de segítik a mozgástanulást  és ügyessé tesznek.Az óvodásoknál kiemelt szerepe van a tartásjavító gyakorlatoknak, mivel  erre az életkorra esik a testtartás beidegződése.  Fontosnak tartjuk az igényes zeneválasztást,  mind a koreográfiák, mind a tréning kisérőjeként.",
        },
      },
      callisthenics: {
        opt: {
          courseName: "Mozdulatművészet",
          color: "blue",
          img: "mozdulatmuveszet",
        },
        info: {
          cost: {
            name: "Tandíj",
            occasions: ["Heti 2 x 60 perc", "Heti 2 x 90 perc"],
            prices: ["11000-11300 Ft / hó", "12800-14700 Ft / hó"],
          },
          discount: {
            name: "Kedvezmény",
            sibling: ["2 testvér esetén", "3 testvér esetén"],
            prices: ["2000.- /hó/fő", "3000.- /hó/fő"],
          },
          ages: {
            name: "Korosztály",
            ageGroup: ["10 éves kortól", "korcsoportonként"],
          },
        },
        places: [
          {
            name: "Virányosi Közösségi Ház",
            address: "XII. ker. Szarvas Gábor út 8/c",
            appointments: ["Kedd", "Csütörtök"],
          },
          {
            name: "Óbudai Kulturális Központ",
            address: "III. San Marco út 81",
            appointments: ["Hétfő", "Kedd","Szerda","Péntek"],
          },
          {
            name: "MOM Kulturális Központ",
            address: "XII. ker. Csörsz út 18",
            appointments: ["Hétfő", "Csütörtök"],
          },
          {
            name: "Békásmegyeri Közösségi Ház",
            address: "III. Csobánka tér 5",
            appointments: ["Kedd", "Csütörtök", "Péntek"],
          },
          {
            name: "Józsefvárosi Galéria és Rendezvény Központ",
            address: "VIII. József krt. 70",
            appointments: ["Szerda"],
          },
          {
            name: "VII. ker. Táncstúdió",
            address: "VII. Wesselényi u. 41",
            appointments: ["Szerda", "Péntek"],
          },
          {
            name: "Szarvas Gábor Közösségi Tér",
            address: "XII. Szarvas Gábor út 8/c",
            appointments: ["Hétfő", "kedd", "Szerda", "Csütörtök"],
          },
        ],
        forWhom: {
          title: "Neked ajánljuk, ha...",
          img: "pages/mozdulatmuveszet/1.jpg",
          description: [
            "a mozgást nem utánozni, hanem tanulni szeretnéd.",
            "nyitott vagy egy finom, harmonikus mozgásformára.",
            "szereted a klasszikus és kortárs zenét.",
            "szeretsz másokkal közösen alkotni, szeretnél egy állandó közösség tagja lenni.",
          ],
        },
        aboutCourse: {
          title: "Mi a mozdulatművészet?",
          img: "pages/mozdulatmuveszet/2.jpg",
          description:
            "Az általunk tanított mozdulatművészet a gimnasztika precizitására épülő – de annál szabadabb –, a zenével szoros összhangban létrejövő táncstílus. Magában foglalja a klasszikus balett és a különböző modern technikák alapelemeit, megtartva azt az alapvető szellemiséget, amely a test természetes adottságaihoz illeszkedő esztétikus és kifejező mozgást keresi. A koreográfiát a zenével szoros összhangban készítjük el, így zene és tánc egymás hatását erősítik: még szebbnek látjuk a táncot és jobban megértjük a zenét.",
        },
        whenStart: {
          title: "Hogyan tudok csatlakozni?",
          img: "pages/mozdulatmuveszet/3.jpg",
          description:
            "Kurzusunk a művészi torna szerves folytatásának tekinthetők, így ebben a műfajban nincsenek teljesen kezdő tanfolyamaink.  A kifejező mozgás egyre nagyobb hangsúlyt kap az ovisok és kisiskolások óráin, és 10 éves kor környékén már mozdulatművészetet tanul, aki korábban művészi tornára iratkozott be. Ennek ellenére menet közben is lehet csatlakozni. Előny, ha rendelkezel valamilyen táncos előképzettséggel, de ha nem, akkor is megpróbálhatod az életkorodnak megfelelő csoportban. Nem kell hozzá speciális adottság, tanáraink majd segítenek a felzárkózásban.",
        },
        structure: {
          title: "Hogyan épül fel az óra?",
          img: "pages/mozdulatmuveszet/4.jpg",
          description:
            "A legtöbb műfajhoz hasonlóan az óra tréningből és koreográfiatanulásból áll. A tréningezéssel   elsajátítjuk a mozdulatművészet formanyelvét és   megszerezzük azokat a készségelemeket, amik alkalmassá tesznek  a koreográfiák előadásra. A mozdulatművészet kifejező mozdulatokból építkezik, a táncokat műhelymunkaszerűen készítjük el. Tanítványaink kreatívan vesznek részt az alkotómunka minden fázisában  a koncepció kialakításától és  a zenekiválasztásától  a mozdulatok megalkotásán keresztül a produkció színpadra állításáig.",
        },
      },
      preBallet: {
        opt: {
          courseName: "Pre balett",
          color: "pink",
          img: "prebalett",
        },
        info: {
          cost: {
            name: "Cost",
            occasions: ["Weekly 1x45 perc"],
            prices: ["10300 Ft/month"],
          },
          discount: {
            name: "Discounts",
            sibling: ["For 2 siblings", "For 3 siblings"],
            prices: ["2000.- /month/person", "3000.- /month/person"],
          },
          ages: {
            name: "Age group",
            ageGroup: ["4-6 years"],
          },
        },
        places: [
          {
            name: "Óbudai Kulturális Központ",
            address: "III. San Marco út 81",
            appointments: ["Jelenleg nincsen aktuális időpontunk."],
          },
        ],
        forWhom: {
          title: "We suggest this for you...",
          img: "pages/preballet/1.jpg",
          description: [
            "If you would like to learn dance playfully",
            "If you would like to learn English this way as well",
            "If it would be good to learn English and dance at the same time",
            "If you would like to make new friends",
          ],
        },
        aboutCourse: {
          title: "What is pre-ballet?",
          img: "pages/preballet/2.jpg",
          description:
            "Pre-Ballet is an introduction to the very basics of dance.  Usually in ballet the routines are done in standing position, we make it easier and start in a seated position. The repeated commands during the recurring training actions make easier to incorporate them into childres' vocabulary in a native way.  We hope that children will discover creative expression, and experience the fun of dance during these classes!",
        },
        whenStart: {
          title: "At what age can you start?",
          img: "pages/preballet/3.jpg",
          description:
            "The classes are for ages 4-6. Our teacher Esther, who speaks native English demonstrates everything to the students. So it is not a problem if your child is still new to English. After the age of six, you can continue in one of our gymnastics classes.",
        },
        structure: {
          title: "What do we do during class?",
          img: "pages/preballet/4.jpg",
          description:
            "We start every class with a few walking exercises, skips, ect. Then we continue with our gymnastics routines, and some jumps. Finally we usually have a short game, and we finish our class with stretches. During the class we encourage children to only speak in English. We learn a few basic words in the beginning that they can use, and later on several dance related expressions. While we dance, the children repeat all the instructions given by the teacher, and this makes learning easy and fun!",
        },
      },
      modern: {
        opt: {
          courseName: "Modern tánc",
          color: "green",
          img: "modern",
        },
        info: {
          cost: {
            name: "Tandíj",
            occasions: ["Heti 2 x 60 perc", "Heti 3 x 60 perc", "Heti 1 x 90 perc"],
            prices: ["11000-11300 Ft / hó", "19100 Ft / hó", "7350 Ft / hó"],
          },
          discount: {
            name: "Kedvezmény",
            sibling: ["2 testvér esetén", "3 testvér esetén"],
            prices: ["2000.- /hó/fő", "3000.- /hó/fő"],
          },
          ages: {
            name: "Korosztály",
            ageGroup: ["8 éves kortól", "korcsoportonként"],
          },
        },
        places: [
          {
            name: "Óbudai Kulturális Központ",
            address: "III. San Marco út 81",
            appointments: ["Hétfő", "Szerda"],
          },
          {
            name: "Békásmegyeri Közösségi Ház",
            address: "III. Csobánka tér 5",
            appointments: ["Kedd", "Csütörtök"],
          },
          {
            name: "MOM Kulturális Központ",
            address: "XII. ker. Csörsz út 18",
            appointments: ["Hétfő", "Péntek"],
          },
          {
            name: "VII. ker. Táncstúdió",
            address: "VII. Wesselényi u. 41",
            appointments: ["Hétfő"],
          },
        ],
        forWhom: {
          title: "Neked ajánljuk, ha...",
          img: "pages/modern/1.jpg",
          description: [
            "…elmúltál 10 éves, szereted a kihívásokat.",
            "…van táncos előképzettséged, vagy eddig valahol huzamosabb ideig sportoltál.",
            "…készen állsz a kemény munkára, amiért látványos fejlődésben lesz részed.",
            "…olyan tudást szeretnél, amivel más tánckurzusokon is bátran az első sorban állhatsz."
          ],
        },
        aboutCourse: {
          title: "Mi a modern tánc?",
          img: "pages/modern/2.jpg",
          description:
            "Ellenerők keresése, dinamikai váltások, feszítettség és elengedés összhangja. –  Ezáltal válik a modern tánc izgalmas és szemet gyönyörködtető műfajjá a színpadon, ezekre kell ráérezni tanítványainknak az órák során. Bár a klasszikus balett alapjaira épül, annak szabály rendszerével szembe megy: a természetes mozgáson alapul, használja a gravitációt, a mozdulatokat belülről indítja. Nem elsősorban a forma, hanem a mozdulat fizikai valósága által válik kifejezővé. A régebbi jazztánchoz képest a folyamatosságon, folyékonyságon, puhaságon van a hangsúly.",
        },
        whenStart: {
          title: "Mikor tudom elkezdeni?",
          img: "pages/modern/3.jpg",
          description:
            "A modern tánc elsajátítása magasabb szintű tudatosságot igényel, amelyre 10 éves koruk környékén érnek meg a gyerekek. Azoknak, akik még nem érték el ezt az életkort, de már alig várják, hogy el tudják kezdeni az órákat, 8 éves kortól előkészítő csoportot indítunk. Ez nem előfeltétele a későbbi jelentkezésnek, hiszen nagyon jó előképzettséget jelent a művész torna, a klasszikus balett, de nem kizáró tényező az sem, ha valamilyen sportról váltanál.",
        },
        structure: {
          title: "Hogyan épül fel az óra?",
          img: "pages/modern/4.jpg",
          description:
            "Az óra alapos bemelegítéssel indul, majd ezt követi a tréning, melynek fő célja a formanyelv technikai elemeinek elsajátítása. Ennek a mozgásnak lényege a testközpontból és a törzsből elnyújtott hosszú mozdulatok és dinamikai váltások alkalmazása. Ennek elsajátítása elmélyült és kitartó gyakorlást igényel, hosszú távon növeli a testtudatot és önfegyelemre tanít. A tréning  tetőtől talpig átmozgatja és formálja a testet. Az óra második felében a koreográfia gyakorlása következik, amely a tréning során megtanult kombinációkból  épül fel.",
        },
      },
      jazz: {
        opt: {
          courseName: "Jazztánc",
          color: "green",
          img: "jazz",
        },
        info: {
          cost: {
            name: "Tandíj",
            occasions: ["Heti 2 x 60 perc"],
            prices: ["11300 Ft / hó"],
          },
          discount: {
            name: "Kedvezmény",
            sibling: ["2 testvér esetén", "3 testvér esetén"],
            prices: ["2000.- /hó/fő", "3000.- /hó/fő"],
          },
          ages: {
            name: "Korosztály",
            ageGroup: ["7 éves kortól", "korcsoportonként"],
          },
        },
        places: [
          {
            name: "Óbudai Kulturális Központ",
            address: "III. San Marco út 81",
            appointments: ["Hétfő", "Csütörtök"],
          },
        ],
        forWhom: {
          title: "Neked ajánljuk, ha...",
          img: "pages/jazz/1.jpg",
          description: [
            "egy könnyed, laza, látványos műfajt keresel.",
            "szereted a modern, pörgős zenéket.",
            "suli után jó társaságban, tánccal szeretnéd leadni a felgyülemlett stresszt.",
            "szeretnéd jobban megismerni a tested határait.",
          ],
        },
        aboutCourse: {
          title: "Mi a jazztánc?",
          img: "pages/jazz/2.jpg",
          description:
            "A jazztánc az Amerikai Egyesült Államokból, New Orleansból származik, az afro-amerikaiak autentikus táncában gyökerezik. A jazz zenével együtt fejlődött, kiegészült a balett és a modern tánc elemeivel. Jellegzetessége az izolációs technika, az egyes testrészek egymástól független mozgatása. A mozgásközpontjai: fej-nyak, vállak, mellkas, medence, a kezek és a lábak. A mozgás lényege a “policentrikusság”, ez azt jelenti, hogy legalább kettő – a fentebb említett – mozgásközpont egymástól függetlenül mozog. Felszabadult, látványos táncstílus.",
        },
        whenStart: {
          title: "Mikor tudom elkezdeni?",
          img: "pages/jazz/3.jpg",
          description:
            "Iskolás kortól javasoljuk, mivel a szükséges koordinációs képesség csak ekkor alakul ki. A művészi torna ehhez a stílushoz is kiváló alapot ad, de a jelentkezéshez az is elég, ha valamilyen műfajban táncoltál vagy sportoltál már.",
        },
        structure: {
          title: "Hogyan épül fel az óra?",
          img: "pages/jazz/4.jpg",
          description:
            "Az órák első felében tréningezünk mai, divatos  zenére.  Egymást követik az izolációs, erősítő és koordinációt fejlesztő gyakorlatok.  Kezdőknél a tréning még csak izolációs majd koordinációs gyakorlatokat tartalmaz. Haladóknál a modern balett elemei is bekerülnek a tananyagba. Majdnem minden típusú mozgás engedélyezett. Hosszú, nyújtott testvonalat, diagonális feszességet és hosszú egyensúlyi helyzeteket használ, és a felsőtestet teszi mindannak középpontjává, ami a testtel történik. Az óra második része a már megtanult technikai elemeket tartalmazó koreográfiák tanulásával telik.",
        },
      },
      ballet: {
        opt: {
          courseName: "Klasszikus balett",
          color: "pink",
          img: "balett",
        },
        info: {
          cost: {
            name: "Tandíj",
            occasions: ["Heti 2 x 60 perc"],
            prices: ["11000-11300 Ft / hó"],
          },
          discount: {
            name: "Kedvezmény",
            sibling: ["2 testvér esetén", "3 testvér esetén"],
            prices: ["2000.- /hó/fő", "3000.- /hó/fő"],
          },
          ages: {
            name: "Korosztály",
            ageGroup: ["6 éves kortól", "korcsoportonként"],
          },
        },
        places: [
          {
            name: "Óbudai Kulturális Központ",
            address: "III. San Marco út 81",
            appointments: ["Hétfő", "Csütörtök"],
          },
          {
            name: "Békásmegyeri Közösségi Ház",
            address: "III. Csobánka tér 5",
            appointments: ["Kedd", "Szerda", "Csütörtök"],
          },
          {
            name: "VII. ker. Táncstúdió",
            address: "VII. Wesselényi u. 41",
            appointments: ["Szerda"],
          },
        ],
        forWhom: {
          title: "Neked ajánljuk, ha...",
          img: "pages/ballet/1.jpg",
          description: [
            "kecses, finom, légies mozgásformát keresel.",
            "nem ijedsz meg a kemény munkától.",
            "kitartó, szorgalmas és elszánt vagy.",
            "mindig is tudni akartad, milyen egy igazi balett óra.",
          ],
        },
        aboutCourse: {
          title: "Mi a klasszikus balett?",
          img: "pages/ballet/2.jpg",
          description:
            "A klasszikus balett a tánc akadémikus formanyelve. A táncművészeti ágazatok közül a leginkább kidolgozott, évszázadok folyamán kikristályosodott rendszer. Elemei a legtöbb tánc stílusban felbukkannak, ezért a balett tanulása nagy segítséget jelent bármilyen más műfaj elsajátításához is. A mozdulatok helyes elvégzését szigorú szabályrendszer írja le, amit megtanulni csak kitartó gyakorlással lehet.",
        },
        whenStart: {
          title: "Mikor tudom  elkezdeni?",
          img: "pages/ballet/3.jpg",
          description:
            "A balettgyakorlatok nagy önfegyelmet és koncentrációt igényelnek, fizikai terhelhetőséget kívánnak.  A művészi torna jó előkészítés óvodás korban, mert a gimnasztika különböző tehermentesített helyzetekben készíti elő a később állásban elvégzendő feladatokat.  Iskolás kortól előképzettség nélkül is lehet jelentkezni.",
        },
        structure: {
          title: "Hogyan épül fel az óra?",
          img: "pages/ballet/4.jpg",
          description:
            "A balett metodikáját Vaganova, orosz balettmester írta le, a tréning során az ő rendszerét követjük. Óráinkon klasszikus kísérőzenét használunk. A rövid bemelegítést követően először rúd-, majd középgyakorlatok következnek, a második évtől kezdve már elmozdulunk a térben, ugrásokat és forgásokat is tanulunk. A tréning során  fejlődik a koordinációs készség és javul  a testtartás. A gyakorlatok precíz elvégzése önfegyelemre tanít. Az órák befejező részében kerül sor a rövid koreográfiák gyakorlására.",
        },
      },
    },
    cards: [
      {
        title: "Művészi torna",
        image: "muveszi_torna",
        bg_mobile: "turquoise",
        age: "",
        districts: "III.,VII., VIII., XI., XII. kerületek",
        bottomText: "kerületekben",
        backgroundColor: "turquoise",
        dotColor: "dot-blue",
        link: "eurhythmics",
      },
      {
        title: "Mozdulatművészet",
        image: "mozdulatmuveszet",
        bg_mobile: "yellow",
        age: "",
        districts: "III., VIII., XI., XII. kerületek",
        bottomText: "kerületekben",
        backgroundColor: "blue",
        dotColor: "dot-blue",
        link: "callisthenics",
      },
      {
        title: "Klasszikus balett",
        image: "klasszikus_balett",
        bg_mobile: "pink",
        age: "",
        districts: "III., VII., XII. kerület",
        bottomText: "kerületekben",
        backgroundColor: "salmon",
        dotColor: "dot-salmon",
        link: "ballet",
      },
      {
        title: "Jazztánc",
        image: "jazz_tanc",
        bg_mobile: "blue",
        age: "",
        districts: "III. kerület",
        bottomText: "kerületekben",
        backgroundColor: "green",
        dotColor: "dot-green",
        link: "jazz",
      },
      {
        title: "Modern tánc",
        image: "modern_tanc",
        bg_mobile: "pink",
        age: "",
        districts: "III.,VII., VIII., XII. kerületek    ",
        bottomText: "kerületekben",
        backgroundColor: "green",
        dotColor: "dot-green",
        link: "modern",
      },
      {
        title: "Pre balett",
        image: "pre_ballet",
        bg_mobile: "turquoise",
        age: "",
        districts: "III. kerület",
        bottomText: "kerületekben",
        backgroundColor: "salmon",
        dotColor: "dot-salmon",
        link: "pre_ballet",
      },
    ],
    cardDetails: [
      {
        title: "Kiknek ajanljuk",
        image: "eurhythmics_1",
        textBody: [
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        ],
        isList: true,
      },
      {
        title: "Kiknek ajanljuk",
        image: "eurhythmics_1",
        textBody:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
        isList: false,
      },
      {
        title: "Kiknek ajanljuk",
        image: "eurhythmics_1",
        textBody:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
        isList: false,
      },
      {
        title: "Kiknek ajanljuk",
        image: "eurhythmics_1",
        textBody:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
        isList: false,
      },
    ],
  },
  programs: {
    programCards: {
      firstRow: [
        {
          title: "Nyilvános órák",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
          img: "nyilvanos_ora",
          link: "public_class",
        },
        {
          title: "Versenyek",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
          img: "versenyek",
          link: "competitions",
        },
      ],
      secondRow: [
        {
          title: "Évzáró előadások",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
          img: "evzaro_eloadas",
          link: "speech_day",
        },
        {
          title: "Omisk gála",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
          img: "gala",
          link: "omisk",
        },
      ],
      thirdRow: [
        {
          title: "Mozdulat műhely",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
          img: "mozdulatmuhely",
          link: "callisthenics",
        },
        {
          title: "Nyári táborok",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
          img: "nyari_tabor",
          link: "camp",
        },
      ],
    },
    programPage: {
      speechDay: {
        title: "Évzáró előadások",
        headerImg: "evzaro_eloadas",
        videoImg: "evzaroeloadas/evzaro_eloadasok_bg",
        detailsOne:
          "A tanévet mindig színpadi előadással zárjuk a MOM Kulturális Központ és az Óbudai Kulturális Központ színháztermében. 1990  óta hagyomány, hogy az előadásokon minden tanítványunk fellép a kezdő óvodásoktól a felnőtt versenyző csoportokig.",
        detailsTwo:
          "A program betekintést enged iskolánk munkájába, bemutatva az iskolán belül választható műfajokat, felfedve a fejlődés távlatait. A szereplők egyben nézők is: a kisebbek lelkesen figyelik, hogy mit fognak később tanulni, a nagyok pedig nosztalgiával emlékeznek a kezdetekre. A koreográfiákat a tanáraink állítják össze – nagyobbaknál mindez több hónapos műhelymunka eredménye, amelyben tanítványaink is évről évre egyre több szerepet kapnak. A korcsoportok, műfajok és stílusok összehangolásával mindig változatos, pergő műsort állítunk össze, amely az évek alatt igazi családi programmá vált.",
        videos: [
          {
            year: 2014,
            link: "https://www.youtube.com/embed/EpXIMRe-Pa8?autoplay=1",
          },
          {
            year: 2015,
            link: "https://www.youtube.com/embed/4mJMxl06y2A?autoplay=1",
          },
          {
            year: 2016,
            link: "https://www.youtube.com/embed/_6e-0eF4Ngs?autoplay=1",
          },
          {
            year: 2017,
            link: "https://www.youtube.com/embed/WriWLXRNMg8?autoplay=1",
          },
          {
            year: 2018,
            link: "https://www.youtube.com/embed/o6rBmIiLpyM?autoplay=1",
          },
          {
            year: 2019,
            link: "https://www.youtube.com/embed/yYoEu4vGvm4?autoplay=1",
          },
        ],
        gallery: [
          "evzaroeloadas/evzaro_eloadasok_1",
          "evzaroeloadas/evzaro_eloadasok_2",
        ],
      },
      competitions: {
        title: "Versenyek",
        headerImg: "versenyek",
        videoImg: "versenyek/bg",
        detailsOne:
          "Egyes csoportjaink versenyeken is részt vesznek, ami keményebb munkával, nagyobb elkötelezettséggel jár. Ez kicsit több, mint a szabadidősport, mert rendszeres megmérettetést jelent, de nem igényel olyan sok időt és energia ráfordítást, mint a versenysport. Mivel ebben az esetben jóval több a fellépés, versenyző csoportjainkat  magabiztosabb színpadi jelenlét, közös célok mentén kialakult összetartó közösség jellemzi.",
        detailsTwo:
          "A táncművészeti fesztiválok nagyrészt tavasszal kerülnek megrendezésre. A versenyekre minden évben egyedi koreográfiák készülnek, amelynek létrehozása izgalmas feladat, igazi alkotómunka, amelyben mindenki részt vesz.  8-9 éves korban kezdünk versenyezni azokkal a csoportokkal, ahol úgy látjuk, hogy erre mindenkinek van igénye, szívesen fektetnek ebbe több energiát, mint amit a heti két alkalom megkövetel.",
        detailsThree:
          "A szakma legnívósabb tánc és művészi gimnasztika versenyein 2001 óta veszünk részt csapatainkkal kíváló eredménnyel (link eredményeinkre)",
        detailsFour:
          "A Táncpedagógusok Országos Szövetsége által szervezett Országos Táncművészeti Fesztiválon elért kiváló eredményeink elismeréseképpen a Szövetség a Kiváló Együttes Díj Ezüst Fokozatát (2005), majd Arany Fokozatát (2010) adományozta iskolánknak.",
        events: [
          {
            date: "2020. 12. 03.",
            title: "Verseny",
            body:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          },
          {
            date: "2020. 12. 03.",
            title: "Verseny",
            body:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
          },
        ],
        videos: [
          {
            year: 2012,
            link: "https://www.youtube.com/embed/QrbvIg_-uPY?autoplay=1",
            title: 'Átalakulat'
          },
          {
            year: 2020,
            link: "https://www.youtube.com/embed/Ddsqpqpbq8s?autoplay=1",
            title: 'Vihar'
          },
          {
            year: 2011,
            link: "https://www.youtube.com/embed/8PVBx5od9Ec?autoplay=1",
            title: 'Akvárium'
          },
          {
            year: 2019,
            link: "https://www.youtube.com/embed/xHR0W2TGKNo?autoplay=1",
            title: 'Egy Idegen Bolygón'
          },
          {
            year: 2013,
            link: "https://www.youtube.com/embed/_qWPElwMwcE?autoplay=1",
            title: 'Tücsökzene'
          },
          {
            year: 2013,
            link: "https://www.youtube.com/embed/DkH1A4W-Qow?autoplay=1",
            title: 'Echo'
          },
          {
            year: 2013,
            link: "https://www.youtube.com/embed/793_DkVGXOY?autoplay=1",
            title: 'Szivárványos'
          },
          {
            year: 2013,
            link: "https://www.youtube.com/embed/m4HyWKk4K1g?autoplay=1",
            title: 'Lélekvándorlás'
          },
          {
            year: 2013,
            link: "https://www.youtube.com/embed/W_2ZFuBCu7g?autoplay=1",
            title: 'Concerto 1'
          },
        ],
        gallery: ["versenyek/1", "versenyek/2"],
      },
      omisk: {
        title: "Omisk Gála",
        headerImg: "omisk_gala",
        videoImg: "gala/bg",
        detailsOne:
          "2015 óta évente megrendezzük az Omisk Gálát. Míg az évzáró előadásainkon kivétel nélkül minden csoport megmutathatja magát, az iskola gáláján műfajtól függetlenül – 10 éves kor feletti – haladó növendékeink léphetnek fel a megelőző év legsikeresebb koreográfiáival. Gálánkat  ezért mindig a második félév elején rendezzük, mielőtt csoportjaink elkezdenének készülni az évzáró előadásra.",
        detailsTwo:
          "Előadásainkat kifejezetten ajánljuk a nem versenyző csoportjaink tagjainak, mert a műsorszámok motiválóak a hétköznapi munkafolyamatokban is – az itt fellépő csoportok az órák során már egyfajta alkotóműhelyként működnek. Az Omisk Gála nagyon jó lehetőség versenyző csapatainknak, hogy színpadi rutinjukat növeljék, kisebbek pedig remek alkalom arra, hogy elejétől a végéig meg tudjanak nézni egy előadást, hiszen az évzárókon – mivel ők maguk is szerepelnek – erre nincs lehetőségük.",
        videos: [
          {
            year: 2020,
            link: "https://www.youtube.com/embed/DTEJ5kXAPUs?autoplay=1",
            title: 'Keretek között'
          },
          {
            year: 2019,
            link: "https://www.youtube.com/embed/Uqh4xDiO8lc?autoplay=1",
            title: 'Láva'
          },
          {
            year: 2019,
            link: "https://www.youtube.com/embed/BOMn9NIIyMQ?autoplay=1",
            title: 'Békakánon'
          },
          {
            year: 2020,
            link: "https://www.youtube.com/embed/Kwb1w8gYX8c?autoplay=1",
            title: 'Kánon'
          },
          {
            year: 2019,
            link: "https://www.youtube.com/embed/2xI0TSMQtYc?autoplay=1",
            title: 'Szárnypróba'
          },
          {
            year: 2020,
            link: "https://www.youtube.com/embed/OSftLMD7e38?autoplay=1",
            title: 'Emlékül'
          },
          {
            year: 2020,
            link: "https://www.youtube.com/embed/JPeTCtEbW5M?autoplay=1",
            title: 'Nevezd székfoglaló játéknak!'
          },
          {
            year: 2020,
            link: "https://www.youtube.com/embed/yKctVIZ2z9U?autoplay=1",
            title: 'Concerto 1-2-3'
          },
        ],
        gallery: ["gala/1", "gala/2"],
      },
      publicClass: {
        title: "Nyilvános órák",
        videoImg: "nyilvanosora/bg",
        headerImg: "nyilvanos_ora",
        detailsOne:
          "A tanév folyamán egy alkalommal megmutatjuk az érdeklődőknek, hogy mit tanulunk az órákon. Év közben a foglalkozások zárt ajtók mögött folynak, a legkisebbek is önállóan, szülők nélkül vesznek részt az órán. Az óvodásoknál, kisiskolásoknál a szülők igénylik, és mi is fontosnak tartjuk megmutatni, hogy tanítványaink mennyit fejlődtek az év folyamán. Ezért félévkor kinyitjuk az ajtókat, és növendékeink hozzátartozói valamint az érdeklődők végignézhetnek egy teljes foglalkozást.",
        detailsTwo:
          "Az első félév mindig az alapozással telik, az órák nagyobb részében, olykor teljes időtartamban tréningezünk növendékeinkkel. Ennek a folyamatnak a vége a legmegfelelőbb időpont arra, hogy óvodás és iskolás csoportjaink bemutassák az addig tanultakat.",
        detailsThree:
          "A második félévben már egyre nagyobb hangsúlyt kap a koreográfiák tanulása, amelyeket az évzáró előadásokon mutatnak be a csoportjaink.",
        videos: [
          {
            year: 2017,
            link: "https://www.youtube.com/embed/4SPgJV2Pc7c?autoplay=1",
          },
        ],
        gallery: ["nyilvanosora/1", "nyilvanosora/2"],
      },
      callisthenics: {
        title: "Mozdulatműhely",
        headerImg: "mozdulatmuhely",
        videoImg: "mozdulatmuhely/bg",
        detailsOne:
          "Az Omisk Mozdulatműhely az iskola felnőtt növendékeiből alakult együttes, amelynek tagjai számára a tánc több mint hobbi – bár hivatásukat az élet különböző területein képzelik el. Van köztük gyógytornász és építész hallgató, moderntánc-pedagógus, tanítónő, rekreációs szakember, bölcsész és van, aki még csak gimnazista. De egy közös pont biztosan van bennük: a tánc szeretete.",
        detailsTwo:
          "Pers Júlia készítette az OMISK Mozdulatműhely első egész estés színpadi produkcióját, MIKÉP – Miro képei táncban elbeszélve (2016). A darabban Miro játékos, absztrakt képei elevenednek meg a 20. század elején párhuzamosan fejlődő avantgárd képzőművészet és mozdulatművészet találkozásával. A jelmezeket Dávid Luca tervei alapján Joób Adrienne készítette. A produkciót a Nemzeti Kulturális Alap támogatta. Tánc és zene kapcsolatával foglalkozik a Mozdulatra hangolva (2018) című előadásunk. A hang testet ölt a táncban, a test zenét komponál a mozdulatok sorával. A darab az OMISK Mozdulatműhely és a Koizé Énekegyüttes közös produkciója. A koreográfiát Rácz-Lakatos Lilla készítette.",
        videos: [
          {
            year: 2016,
            link: "https://www.youtube.com/embed/rKBmBZxAej4?autoplay=1",
          },
        ],
        gallery: ["mozdulatmuhely/1", "mozdulatmuhely/2"],
      },
      camp: {
        title: "Nyári táborok",
        headerImg: "nyari_tabor",
        videoImg: "taborok/bg",
        detailsOne:
          "Iskolánk 2017 óta nyári napközis táborral várja iskoláskorú növendékeit. A táborban tanítványaink mellett külső jelentkezők is részt vehetnek. Programunk kiváló alkalom arra, hogy a gyermekek és fiatalok önfeledten, aktív pihenéssel töltsék a vakációt, egyúttal  továbbfejlesszék tánc tudásukat. A jelentkezők korcsoport és tudásszint szerint vesznek részt szabad táncon, improvizációs és koreográfia órákon, kéziszeres gimnasztikán. A turnusokat péntek délutáni előadással zárjuk, amelyen növendékeink bemutathatják, mennyi mindent tanultak a közösen eltöltött hét alatt.",
        detailsTwo:
          "A tábor helyszíne a MOM Kulturális Központ és az Óbuda Kulturális Központ, amelyek felújított, napfényes termei és korszerű játszóteres parkja tökéletes terepet nyújtanak a közös munkához és pihenéshez egyaránt. A nyári táborok kulcsfontosságúak iskolánk közösségének alakulásában. Tanítványaink közelebb kerülhetnek egymáshoz és jobban megismerhetik tanárainkat is.",
        videos: [
          {
            year: 2016,
            link: "https://www.youtube.com/embed/q2eUUTYWTI4?autoplay=1",
          },
          {
            year: 2016,
            link: "https://www.youtube.com/embed/P6pkAmEuqQo?autoplay=1",
          },
          {
            year: 2016,
            link: "https://www.youtube.com/embed/Qo_hQJgNgXk?autoplay=1",
          },
        ],
        gallery: ["taborok/1", "taborok/2"],
      },
    },
  },
  teachers: {
    cards: [
      {
        picture: "pers_julia.jpg",
        name: "Pers Júlia",
        desc:
          "Állami díjas táncpedagógus,\nMűvészi torna edző,\nMűvészeti vezető",
        details:
          "Állami Balett Intézetben (ma Táncművészeti Egyetem) kezdtem el táncot tanulni, majd egyesületben ritmikus sportgimnasztikáztam. Édesanyám, P. Ács Vali balettmester révén egészen fiatalon kapcsolatba kerültem a tanítással. Sokáig kerestem egy  stílust, ami igazán közel áll hozzám  és ezt a Berczik Sára módszerében találtam meg. Nem elsősorban a technika nehézségi foka fogott meg, hanem az, hogy a mozdulatok  mennyire kifejezőek. 5 éven keresztül az ő asszisztenseként dolgoztam a Fővárosi Pedagógiai Intézet továbbképző tanfolyamán. 1990-ben megalapítottam az Óbuda Mozgásművészeti Iskolát, amit azóta is vezetek. Kezdetben művészi tornát tanítottunk, azóta sok egyéb műfaj is helyett kapott az iskolában, de az alapelvek – tudatosság, zeneiség, kreativitás – nem változtak.",
        education: [
          "Testnevelési Főiskola (ma Testnevelési Egyetem), ritmikusgimnasztika-edző",
          "Budapesti Műszaki Egyetem, vegyészmérnök",
        ],
        achievements: [
          "2011 Magyar Köztársaság Érdemkereszt Ezüst Fokozat",
          "2010 Táncpedagógusok Országos Szövetsége Nívódíja",
          "2016 Berczik Sára Díj",
          "2015 Réti Piroska Balett Pedagógusi Nívódíj",
        ],
        courses: ["művészi torna, mozdulatművészet"],
        hasActionPicture: true,
      },
      {
        picture: "benis_katalin.jpg",
        name: "Benis Katalin",
        desc: "Nívódíjas táncpedagógus,\nMűvészitorna-edző",
        details:
          "Óvodás koromban engem is a szüleim írattak be művészi tornázni. Kisiskolásként már tagja voltam a Spartacus ritmikussportgimnasztika-szakosztályának, majd később a válogatott keretnek is, így lettem Berczik Sára tanítványa. A Testnevelési Főiskola edzői szakán ismerkedtem meg Pers Júliával – iskolánk művészeti vezetőjével. 1992-ben lettem az OMISK művészi torna tanára, ezzel egy időben Berczik Sára asszisztenseként dolgoztam. 2007 óta rendszeresen veszünk részt tanítványaimmal országos versenyeken és fesztiválokon.",
        education: [
          "Testnevelési Főiskola (ma Testnevelési Egyetem), ritmikusgimnasztika-edző",
        ],
        achievements: [
          "2009 Berczik Sára Díj",
          "2015 Táncpedagógusok Országos Szövetsége Nívódíj",
        ],
        courses: ["művészi torna, mozdulatművészet"],
        hasActionPicture: true,
      },
      {
        picture: "mady_krisztina.jpg",
        name: "Mády Krisztina",
        desc: "Nívódíjas táncpedagógus",
        details:
          "Hároméves koromban kezdtem művészi tornázni, húsz éven át tanultam Berczik Sári nénitől és Szollás Erzsébettől. Nagyszüleim és édesanyám sport iránti szeretete és igénye indított arra, hogy hivatásomként a művészi torna oktatását válasszam. Az Óbuda Mozgásművészeti Iskolában 1998 óta tanítok művészi tornát és mozdulatművészetet, amelyet csak másik hivatásom – három gyermekem nevelése – szakított meg hosszabb-rövidebb időre.",
        education: [
          "Testnevelési Egyetem, testnevelő és ritmikus gimnasztika edzői szak",
          "Szegedi Juhász Gyula Tanárképző Főiskola, francia nyelvtanár szak",
        ],
        achievements: [
          "2012 Berczik Sára Díj",
          "2017 Táncpedagógusok Országos Szövetsége Nívódíj",
        ],
        courses: ["művészi torna, mozdulatművészet"],
        hasActionPicture: false,
      },
      {
        picture: "kalocsai_edit.jpg",
        name: "Kalocsai Edit",
        desc: "Állami-díjas balettmester",
        details:
          "Táncos pályafutásomat a győri Kisfaludy Színháznál kezdtem. A gyermekem megszületése után az Állami Balettintézet pedagógus tagozatán végeztem klasszikus balett tanszakon, 1980- ban. Külföldi és hazai mesterek jazztánc- és kortárstánc-kurzusán sajátítottam el a modern technikákat.  1990-ben Gyöngyösön művészeti iskolát hoztam létre, ahol klasszikus balettet tanítottam. 2009-től a Kispesti Alapfokú Művészeti Iskola igazgatóhelyetteseként dolgoztam. Az Óbuda Mozgásművészeti Iskolában 1996 óta klasszikus balett és modern jazz órákat tartok.",
        education: [
          "Állami Balett Intézet (ma Táncművészeti Egyetem), klasszikusbalett-pedagógus",
        ],
        achievements: [
          "1992 Réti Piroska Balett Pedagógusi Nívódíj",
          "1998 Táncpedagógusok Országos Szövetsége Balettpedagógus Nívódíj",
          "2006 Gyöngyös Város Kultúrájáért Kitüntetés",
          "2006 Magyar Köztársasági Ezüst Érdemkereszt",
        ],
        courses: ["klasszikus balett, jazztánc"],
        hasActionPicture: false,
      },
      {
        picture: "kovacs_bea.jpg",
        name: "Kovács Bea",
        desc: "Berczik-díjas művészitorna-edző",
        details:
          "Gyerekkoromban kezdtem művészi tornázni Berczik Sára iskolájában, majd éveken át ritmikus sportgimnasztika versenyző voltam. 2001 óta tanítok az Óbuda Mozgásművészeti iskolában művészi tornát, elsősorban Sári néni módszerét követve.",
        education: [
          "ELTE, testnevelés-biológia szakos tanár",
          "Táncpedagógusok Országos Szövetsége, modern- kortárs tánc csoportvezetői képzés",
        ],
        achievements: ["2014 Berczik Sára Díj"],
        courses: ["művészi torna, mozdulatművészet"],
        hasActionPicture: true,
      },
      {
        picture: "csongei_barbi.jpg",
        name: "Csöngei Barbara",
        desc: "táncpedagógus",
        details:
          "Ötévesen művészi tornát, majd klasszikus balettet tanultam – a Pannon Várszínház táncosa voltam. Húszévesen elvégeztem a Táncpedagógusok Országos Szövetsége modern tánc oktatói tanfolyamát, és a Bailart színházi táncos képzését, majd Földi Béla ELIT képzésére jártam, és az Inversedance tagja lettem. Mindig is fontos volt számomra a fegyelmezett, kitartó munka, tanítványaimat is arra ösztönzöm. 2013 óta tanítok klasszikus balettet és modern táncot az iskolában. Csoportjaim rendszeresen vesznek részt országos táncversenyeken.",
        education: [
          "ELTE TÓK, óvodapedagógus ",
          "Táncpedagógusok Országos Szövetsége, modern- kortárs tánc csoportvezetői képzés",
        ],
        achievements: [],
        courses: ["modern tánc, klasszikus balett"],
        hasActionPicture: true,
      },
      {
        picture: "solti_eszter.jpg",
        name: "Solti Eszter",
        desc: "táncpedagógus",
        details:
          "Négyéves koromban kezdtem művészi tornázni Pers Júlia növendékeként. A közösség tagjává váltam, a tánc hobbi volt, egészen egyetemista koromig, amikor eljött a felismerés, hogy tanárként is tagja szeretnék lenni az iskolának. Résztvevője voltam a Bethlen Dance Workshopnak 2016-ban, majd 2017-től a Budapest Táncszínház Elite Tréning Programjába nyertem felvételt. 2012 óta vagyok az iskola tanára, óráimon szeretném átadni tanítványaimnak mindazt, amit számomra jelent a tánc. Fontosnak tartom, hogy növendékeim kialakítsák saját önkifejezési módjukat.",
        education: [
          "ELTE, szociálpedagógia és neveléstudomány",
          "Táncpedagógusok Országos Szövetsége, modern- kortárs tánc csoportvezetői képzés",
        ],
        achievements: [],
        courses: ["modern tánc, művészi torna, mozdulatművészet"],
        hasActionPicture: true,
      },
      {
        picture: "lakatos_lilla.jpg",
        name: "Rácz-Lakatos Lilla",
        desc: "táncpedagógus",
        details:
          "A tánc felszabadít és kikapcsol. Először művészi tornára jártam, később balettot, mozdulatművészetet, modern, majd kortárs táncot tanultam. 2012 óta tanítok az OMISK-ban, növendékeim sikereket érnek el az országos versenyeken. 2016-ban részt vettem az OMISK Mozdulatműhely első projektjében, két évvel később pedig színpadra állíthattuk első darabomat. A táncórának saját tere és ideje van. Ha belépek egy órára, minden problémámat leteszem arra az időre, akkor csak az számít, ami ott történik. Ezt az élményt szeretném továbbadni tanítványaimnak is. ",
        education: [
          "Schola Europa Akadémia, médiamoderátor",
          "Pázmány Péter Katolikus Egyetem, magyartanár",
          "Táncpedagógusok Országos Szövetsége, modern- kortárs tánc csoportvezetői képzés",
        ],
        achievements: [],
        courses: ["művészi torna, mozdulatművészet"],
        hasActionPicture: true,
      },
      {
        picture: "rozsa_reka.jpg",
        name: "Markolt-Rózsa Réka",
        desc: "táncpedagógus",
        details:
          "Négyévesen kezdtem művészi tornázni. Egy óvodai barátnőm beszélt rá – ő hamar abbahagyta, de nekem egy életre szóló meghívást jelentett. Hosszú évekig szertornáztam, és mai napig szívesen próbálok ki más sportágakat, de sosem tudta egy sem kiváltani a mozdulatművészetet. A tánc az életem szerves részévé vált, egy olyan önkifejezési és fejlődési lehetőséggé, amiben a harmónián túl szoros baráti kapcsolatokra is leltem. Hivatásomnak érzem közel vinni a fiatalokat azokhoz az élményekhez, és átadni nekik az értékeket, amiket én is megtapasztalhattam a táncművészet kapcsán.",
        education: [
          "KRE, tanító",
          "AVKF, mentálhigiénés kapcsolat-és közösségfejlesztő",
          "Táncpedagógusok Országos Szövetsége, modern- kortárs tánc csoportvezető",
        ],
        achievements: [],
        courses: ["művészi torna, mozdulatművészet"],
        hasActionPicture: true,
      },
      {
        picture: "taylor_eszti.jpg",
        name: "Taylor Esther",
        desc: "táncpedagógus",
        details:
          "Négyéves koromban írattak be a szüleim Pers Júliához. Nagyon tetszett, hogy az órák nemcsak a táncról, hanem a kreativitásról is szóltak. Szerettem volna tovább adni a gyerekeknek, amit  a művészi torna adott nekem. Ezért végeztem el egyetem mellett a Táncpedagógusok Országos Szövetségének képzését 2018-ban. 2019 óta tanítok művészi tornát, és mivel kétnyelvű családban nőttem fel, így angol nyelven is tartok órákat. Számomra nagyon fontos a sport, úgy gondolom, hogy gyermekkorban kell elkezdeni a rendszeres mozgást, és erre tökéletes a művészi torna.",
        education: [
          "Táncpedagógusok Országos Szövetsége, modern- kortárs tánc csoportvezetői képzés",
          "Testnevelési Egyetem, testnevelő-gyógytestnevelő-egészségfejlesztő tanár",
        ],
        achievements: [],
        courses: ["művészi torna, mozdulatművészet, pre-balett"],
        hasActionPicture: true,
      },
      {
        picture: "david_luca.jpg",
        name: "Dávid Luca",
        desc: "látványtervező, művésztanár",
        details:
          "Óvodás koromban kezdtem művészi tornázni az Óbuda Mozgásművészeti Iskolában. Ez a hely a második otthonommá vált. Húsz éven át tanulhattam Pers Júlia szárnyai alatt, egy kivételesen kreatív és tehetséges táncosokból álló csapatban. Az Omisk Mozdulatműhely, Miró képei táncban elbeszélve című előadásában látványtervezőként és táncosként is részt vehettem. Egy éven át tanultam különböző testtudati technikákról és azoknak a gyerekekkel való alkalmazási lehetőségeiről. 2015 óta óta önkénteskesem a Bátor Tábor alapítványnál,  és három éve vagyok kézműves szakértő. Jelenleg egy alternatív iskola hálózatban tanulásszervezőként és művésztanárként tanítok és tanulok együtt a gyerekekkel. Az Omisk nyári táboraiban szabadtánc és barkács foglalkozást tartok a gyerekeknek. Fő célom, hogy teret adjak a gyerekeknek a szabad alkotásra és önkifejezésre.",
        education: ["Magyar Képzőművészeti Egyetem, látványtervező"],
        achievements: [],
        courses: [],
        hasActionPicture: true,
      },
      {
        picture: "taylor_jennifer.jpg",
        name: "Bozsókiné Taylor Jennifer",
        desc: "táncpedagógus",
        details:
          "Kilencéves koromban kezdtem művészi tornázni az Óbuda Mozgásművészeti Iskolában, ahol 15 éven keresztül voltam Pers Júlia tanítványa. Szüleim elsősorban azért írattak be, mert úgy látták, hogy nem jó a tartásom. Itt nagyon megszerettem a táncot, ezért a tanítóképzővel párhuzamosan elvégeztem a Táncpedagógusok Országos Szövetsége modern tánc oktatói képzését, ahol más műfajokkal is megismerkedtem. 2012 óta tanítok művészi tornát és mozdulatművészetet, tanítványaimmal részt veszünk az országos táncversenyeken is.",
        education: [
          "ELTE, tanító szak",
          "Táncpedagógusok Országos Szövetsége, modern- kortárs tánc csoportvezetői képzés",
        ],
        achievements: [],
        courses: ["művészi torna, mozdulatművészet"],
        hasActionPicture: true,
      },
    ],
  },
  blog: {
    cards: [
      {
        picture: "entry-two.jpg",
        picture_title: "Berczik módszer",
        date: "2020. 09. 18.",
        title: "A Berczik módszerről",
        index: "berczik",
        text:
          "Az OMISK-ot ezelőtt 30 évvel azért alapítottuk, hogy a Berczik technikát tanítsuk gyerekeknek. Ahogy tanítványaink  nőttek, velük együtt fejlődött  az iskola is. Sok más műfaj is helyet kapott, de ma is a Berczik-technikát tartjuk a legfontosabb kiindulási pontnak. Az OMISK-ba jelentkező óvodások most is ezzel kezdenek nálunk.\n\nA gyermek életének alapeleme a mozgás. Önként és örömmel csinál mindent, ami közel áll természetes mozgás igényéhez és ez megalapozza szellemi-fizikai fejlődését.  A Berczik módszer ebből az ösztönös mozgásból indul ki és alakítja tudatossá. Így az órai gyakorlatok mindig az életkornak megfelelőek, a tudatosság pedig biztos alapokra helyez bármilyen későbbi mozgástanulást.\n\nAz órákon mindig arra törekszünk, hogy már a legkisebbek is értsék, amit csinálnak . A mozgást nem utánozni kell a gyerekeknek, hanem tanulni. Ha tudják, hogy mikor végzik helyesen, akkor nagyobb örömet okoz, ha ez sikerül nekik. A sikerélmény pedig további tanulásra ösztönzi a gyereket, így a figyelmük hosszú időn keresztül fenntartható.\n\nA Berczik módszer fontos  alapelve a mozdulatok elemekre bontása és  azok egymástól független kidolgozása, ami ezért pontosságra is nevel. Alkalmazza a sokirányú ráhatás elvét is, ami ugyanannak a testképző feladatnak a különböző testhelyzetekben történő végrehajtását jelenti. Az állandóan változó helyzetek segítik a tudás elmélyítését azáltal, hogy nem válik rutinná a gyakorlás. A Berczik gimnasztika nem kíván speciális fizikai adottságokat, az adott testi lehetőségeken belül mindenkit fejleszt, így mindenkinek sikerélményt ad.\nA  Berczik-technika nem egy szigorú, zárt rendszer, bármilyen mozgás megengedett, ami esztétikus. Ez nem mond ellent a precizitásra való törekvésnek, mert minden újító mozdulatnak pontosan leírhatónak, ezáltal reprodukálhatónak kell lenni. A fenti keretek között végzett gyakorlás  felébreszti a gyerekekben az alkotás iránti vágyat és maguk is kreatívan bekapcsolódnak a munkába\n\nA Berczik gimnasztika szívesen használ eszközöket, ezeknek kettős funkciója van. A kéziszer egyrészt, a test meghosszabbításaként segit megérteni, vizualizálni az irányokat, síkokat. Ugyanakkor változatosabbá teszi a gimnasztikát és mivel bármilyek eszköz használata megengedett, újabb teret nyit az alkotó fantáziának.\n\nA Berczik-technikán alapuló koreográfiákban a zene nemcsak kisérőeleme a táncnak, hanem annak tartalmát is kiemeli. Ha a koreográfiát a zenével szoros összhangban készítjük el, akkor a zene és a tánc egymás hatását erősítik. Még szebbnek látjuk a táncot és jobban megértjük a zenét. Ezért lett iskolánk mottója:  Mozgásba hozzuk a zenét.\n\nPers Júlia",
      },
      {
        picture: "entry-one.jpg",
        picture_title: "Tájékoztató",
        date: "2020. 09. 17.",
        title: "COVID tájékoztató",
        index: "covid",
        text:
          "Iskolánkban az alábbi óvintézkedéseket hoztuk mindannyiunk érdekében:\n\n<ol><li className='number'>A csoportok elkülönülve öltözködnek, mindenki mindig csak a saját csapattársaival együtt. Az első foglalkozáson kiírjuk , illetve a tanárok is elmondják, hogy melyik öltözőt használják ezentúl a csoportok.</li><li className='number'>Kérjük, hogy aki teheti, otthon vegye fel a tornadresszet , hogy  minél kevesebben  és minél rövidebb ideig használják az öltözőt!</li><li className='number'>A tanárok maszkot viselnek, ha közel mennek a gyerekekhez.  A közös helyiségekben iskolás kortól kötelező a maszk viselése.  Az órákon a gyerekek maguk döntik el, hogy viselik-e a maszkot.</li><li className='number'>A termek folyamatos szellőztetéséről gondoskodunk. Ha az időjárás miatt az ablakok állandó nyitvatartása nem lehetséges, akkor az órák között alaposan kiszellőztetünk.</li><li className='number'>A terembe belépés előtt és kilépés után felhívjuk a figyelmet a kézfertőtlenítő használatára és/vagy az alapos kézmosásra. A tanároknál is van kézfertőtlenítő és az órák között a rudakat fertőtlenítő kendővel áttörlik.</li><li className='number'>Készülünk az online tanításra is többféle módon is.Ennek részleteit hamarosan közzétesszük.</li><li className='number'>Mulasztás esetén kérjük, hogy tájékoztassák iskolánkat és betegség után orvosi igazolást kérünk most mindenkitől !  Covid fertőzés esetén gyors értesítést kérünk, hogy a csoport többi tagját tájékoztatni tudjuk!</li></ol>Köszönjük szépen a fentiek betartását. Bízunk abban, ezzel is hozzájárulunk ahhoz, hogy minél hamarabb visszatérhessünk a  megszokott életünkhöz!",
      },
      {
        picture: "entry-three.jpg",
        picture_title: "Nyári tábor",
        date: "2020. 08. 10.",
        title: "Ha nyár, akkor OMISK tábor!",
        text:
          "Első turnusunk véget ért, de nincs ok aggodalomra, augusztus utolsó hetében jön a második felvonás.\n\nA kezdeti érdeklődésre alapozva idén már harmadszor ifjúsági turnust is indítottunk. Bár ők a gyermek korosztálytól elkülönítve, magasabb óraszámban táncolhatnak a tábor alatt, mégis vannak olyan időszakok, amikor közösen tölthetik az időt. Öröm látni, hogy idősebb növendékeink milyen gondoskodással, szeretettel fordulnak a kisebbek felé. Az a közösség, ami ilyenkor épül, nem csak egy nyárra érvényes. Ha lemaradtál az augusztusi jelentkezésről, ne búsulj. Várunk jövőre! …addig is pedig még sok dolgunk van szeptembertől.",
      },
      {
        picture: "entry-four.jpg",
        picture_title: "Program",
        date: "2020. 06. 08.",
        title: "Omisk tábor",
        text:
          "Az Óbuda Mozgásművészeti iskola 6-17 évesek számára szervez napközis tábort két turnusban:\n\n<ul><li>2020. augusztus 3-7. között a MOMKultban Tanárok: Taylor Jenny, Taylor Esther, Rózsa Réka, Csöngei Barbara, Dávid Luca, Solti Eszter</li><li>2020. augusztus 24-28. között a békásmegyeri Szent József Házban Tanárink: Taylor Jenny, Taylor Esther, Csöngei Barbara, Dávid Luca, Benis Kati, Rácz-Lakatos Lilla, Solti Eszter</li></ul>\n\nKét külön korcsoport számára (6-12; 13-17) egy időpontban, de elkülönülő programmal indítunk tábort a két helyszínünkön, ahol napfényes termek és hatalmas park biztosít kiváló terepet arra, hogy a gyermekek önfeledten, hasznosan töltsék a vakációt, és új barátságokat köthessenek.\n\nAz öt napos program ára 36.000 Ft, de az Óbuda Mozgásművészeti Iskola növendékeinek kedvezményesen 33.000 Ft, amely napi háromszori étkezést tartalmaz és tánc továbbá kézműves foglalkozásokat foglal magába.\n\nOnline kérdőív kitöltése után jelentkezésetek a tábor teljes árának átutalása után válik véglegessé, fizetési határidő július 10!\n\nA befizetésről jelentkezést követő visszaigazoló e-mailünkben küldünk további tájékoztatást.\n\nIdén a vírus okozta rendkívüli helyzet miatt a tábor menetrendje némileg eltér a korábbi években megszokottól. Ezzel kapcsolatos információkat részletesen a tábor előtti hetekben küldjük. Természetesen a mindenkori higiéniás feltételeknek megfelelően járunk el.\n<strong>Gyermek turnus programja:</strong>\nA tábor minden reggel 9-kor kezdődik, érkezni 8 órától lehet, reggeli tornával és csapatépítéssel kezdjük a programot. A nap során a gyerekeknek művészi torna és kéziszer órákat tartunk, koreográfiákat tanulnak valamint szabad tánc és kézműves foglalkozásokon vesznek részt. Délután nyújtással zárjuk 16:30-kor a programot. A hetet pedig egy nyilvános bemutatóval fejezzük be.\n<strong>Ifjúsági turnus programja:</strong>\nKülönböző típusú órákon vesznek részt: mozdulatművészet és modern technikai alapok, kéziszer, előadói és improvizációs készségek fejlesztése, koreográfiatanulás, nyújtás. A délelőtt során két foglalkozás lesz, közte tízórai szünet, ebéd után kis pihenés és kézműves foglalkozás után egy hosszabb órával és nyújtással fejezzük be a napot. A foglalkozások minden nap 9 órától 16:30-ig tartanak.\nTovábbi információkkal a tábor indulása előtt jelentkezünk, addig is bármilyen kérdéssel kapcsolatban keress nyugodtan az elérhetőségeinken.\n\nReméljük, velünk tartotok nyári programjainkon!",
      },
      {
        picture: "entry-five.jpg",
        picture_title: "Versenyek",
        date: "2020. 05. 12.",
        title: "I. Országos Online Szólótánc Verseny ",
        text:
          "A hagyományos országos táncversenyek a rendkívüli helyzet miatt idén tavasszal elmaradtak. A Táncpedagógusok Országos Szövetsége viszont új versenyt hirdetett, hogy a résztvevőknek ki se kelljen mozdulniuk otthonról. Az I. Országos Online Szólótánc Versenyen iskolánk tizenegy növendéke indult – Bajnok Luca, Banadics Linda, Banadics Villő, Bánkuti Lili, Buday Virág, Kisfaludy Emese, Matlári Nóra, Sájer Adél, Szilágyi Csenge, Tomka Dorottya és Tóth Adrienn. A versenyzőknek megadott zenére kellett önálló koreográfiát készíteni, felvenni videóra, és elküldeni a zsűrinek értékelésre.\n\nBüszkék vagyunk rá, hogy növendékeink bár konzultálhattak tanáraikkal, mindannyian önállóan, kreatív módon oldották meg a feladatot – legtöbben most készítették el első koreográfiájukat.\n\nBánkuti Lili produkcióját a zsűri külön dicséretben részesítette. Gratulálunk!\n\n\nNövendékeink koreográfiáiból összefoglaló itt: <a href='https://www.youtube.com/watch?v=aJbXdmSIkjk' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=aJbXdmSIkjk</a>",
      },
      {
        picture: "entry-six.jpg",
        picture_title: "Gála",
        date: "2020. 02. 25.",
        title: "Gála",
        text:
          "Régi produkciók új köntösben – Nosztalgiázhattunk is a 2020-as OMISK Gálán\n\nMűfaji változatosság, zenei sokszínűség. Ahogy megszokhattuk, az idei és elmúlt évek legsikeresebb koreográfiái kerültek színpadra február 22-én, az Óbudai Kulturális Központban. Az aktuális versenykoreográfiákon felül viszont több régi, klasszikus produkció új szereposztásban, jelenlegi tanítványainkkal került bemutatásra, az egykori előadók – ma már feleségek, anyukák – pedig a közönség soraiból nosztalgiázhattak. Vendégeinknek köszönjük az érdeklődést, növendékeinknek pedig gratulálunk!",
      },
      {
        picture: "entry-seven.jpg",
        picture_title: "Gála",
        date: "2020. 01. 10.",
        title: "OMISK klasszikusok a színpadon",
        text:
          "Vannak olyan koreográfiák, amiket lehetetlen megunni. A sok új, versenyre készült produkció mellett ezeket az örök klasszikusokat is újranézheted a 2020-as OMISK Gálán. Haladó növendékeink az elmúlt évek legsikeresebb koreográfiáit mutatják be gálaműsorunkon. Várunk szeretettel!\n\nJegyek előjegyezhetők iskolatitkárunknál.",
      },
      {
        picture: "entry-eight.jpg",
        picture_title: "Verseny",
        date: "2019. 12. 01.",
        title: "Adventi Művészi Gimnasztika Gála - Törökbálint",
        text:
          "December 1-én  harmadik alkalommal vettünk részt Művészi Gimnasztika Szövetség hagyományos versenyén. Nagyon jól szerepeltünk, minden csapatunk  arany minősítést szerzett és  az összesített legmagasabb pontszámot is mi kaptuk.\n\n<strong>KÁNON</strong> – arany minősítés – koreográfia Pers Júlia – serdülő – művészi gimnasztika szabadon\n\nDétári Borbála, Marton Dóra, Matlári Júlia, Matlári Nóra, Mihályi Jázmin, Munkácsi Alíz, Munkácsi Réka, Pék Laura, Sata Emese, Takács Réka\n\n<strong>ÖRDÖGLAKAT</strong> – arany minősítés – koreográfia Pers Júlia – ifjúsági – művészi gimnasztika szabadon\n\nBanadics Dorottya, Bazsa Edina, Duca Anasztázia, Kiss Emília, Márkus Hanna, Sájer Adél, Stoffán Virág, Tatár Dorottya, Tóth Adrienn, Tóth Petra Lilla\n\n<strong>OLVADÁS</strong> – arany minősítés – koreográfia Mády Krisztina – ifjúsági – labda kéziszer\n\nBajnok Luca, Finta Kincső, Horányi Róza, Horváth Luca, Illényi Johanna, Ilyés Hanna, Imre Dorottya, Márkus Adél, Nagy Lilla, Werner Júlia, Werner Mária, Zombori Márta\n\n<strong>KÉT VÍZ KÖZÖTT</strong> – arany minősítés – koreográfia Mády Krisztina – felnőtt – szalag kéziszer\n\nBartók Natália, Csillag Emese, Ecseri Katalin, Jakabffy Lili, Márkus Réka, Somfai Réka",
      },
    ],
  },
  operations: [
    {
      id: 0,
      title: "Általános tájékoztató iskolánk működéséről",
      role: "primary",
      parentId: 0,
      description: "",
    },
    {
      id: 1,
      title: "Az órák rendje",
      role: "secondary",
      parentId: 0,
      description:
        "Hetente 2 (esetenként 3) alkalommal tartunk órákat , melyek időtartama az óvodásoknak 45 perc, iskolás kortól 60 vagy 90 perc.\nAz aktuális órarendet a tanév elején állítjuk össze a beiratkozáson történő egyeztetés után és szeptember közepén hirdetjük ki. A tanév rendjével az iskolai tanításhoz igazodunk, de ősszel és tavasszal nem tartunk szünetet.\nA Kurzusaink menüpont alatt a kurzusok leírásánál  megtalálod azt, hogy az egyes helyszíneken mely napokon tartunk órákat. Ha a pontos időpontokra vagy kiváncsi vagy azt szeretnéd megtudni, hogy van-e még szabad hely a választott kurzuson, akkor vedd fel a kapcsolatot irodánkkal!",
    },
    {
      id: 2,
      title: "Programok",
      role: "secondary",
      parentId: 0,
      description:
        "Az első félév végén decemberben vagy januárban nyilvános bemutató  órákat tartunk az addig tanultakból.\nJúnius elején a  tanévet ünnepélyes vizsgaelőadással zárjuk  az Óbudai Kulturális Központ és a MOM Kulturális Központ szinpadán.\nTavasszal haladó növendékeink országos táncversenyeken vehetnek részt.\nNyáron tánctábor szervezünk a MOM Kulturális Központban és a békásmegyeri Szent József Házban.",
    },
    {
      id: 3,
      title: "Tandíj",
      role: "secondary",
      parentId: 0,
      description:
        "A tandíj összege a helyszíntől és a foglalkozások időtartamától függően 10.000 - 14.700 Ft/hónap heti 2 vagy 3  alkalomra. A pontos összeget a Kurzusok menűpont almenűiben  találod a hasznos információk között.\nA tandíjat 2 havonta kérjük befizetni a helyszínen iskolatitkárunknak, Mikusik Mártának  az előre meghirdetett napon (erről mindenkit írásban időben tájékoztatunk).\nTestvérek beíratása esetén engedményt adunk a tandíjból, melynek összege: 2000,- Ft/hó/fő\n Az aktuális tandíjat mindig a megtartott órák alapján számítjuk ki, tehát  ha hivatalos ünnep vagy  szünet miatt 8-nál kevesebb alkalommal van óra, akkor arányosan csökkentjük az arra a hónapra eső tandíjat.\nNéhány alkalmas hiányzást pótolni lehet egy párhuzamos csoport óráján. Huzamosabb idejű és orvosilag igazolt mulasztás esetén  a tandíjból visszatérítést tudunk adni. Erre vonatkozó igényt az iskola vezetőjének címzett e-mailben kérjük bejelenteni ( pers.julia@omisk.hu )! Ha a mulasztott órák száma meghaladja az havi óraszám felét, akkor fél hónapi díjat jóváírunk  a következő befizetéskor.\nÁtmenetileg lehet heti 1 alkalommal is  járni, ebben az esetben a tandíjból 30% kedvezményt adunk. Hosszabb távon ezt nem javasoljuk, mert a tananyaggal minden órán haladunk. Különösen a második félévben jelent problémát, amikor a koreográfiákat tanuljuk.",
    },
    {
      id: 4,
      title: "Öltözet, felszerelés",
      role: "secondary",
      parentId: 0,
      description:
        "A gyakorlóruha a mozgást nem akadályozó praktikus, kényelmes viselet legyen! A cipő műfajonként különböző lehet, ezt célszerű tanárainkkal megbeszélni.\nGyermek és serdülő  csoportjaink a nyilvános órákon már egyforma öltözetben szerepelnek és ezt viselik az évzárón is. Ezeket a ruhákat és ifjúsági és felnőtt csapataink fellépő ruháit   hagyományosan Joób Adrienne jelmeztervező és kivitelező  készíti csoportjainknak.\nA művészi tornán használt kéziszereket - az ugrókötelek kivételével - iskolánk biztosítja.",
    },
    {
      id: 5,
      title: "Tanév rendje,  2020/21",
      role: "primary",
      parentId: 5,
      description:
        "Beiratkozás: augusztus 26. - szeptember 9.\n\nÓrarend kihirdetés: szeptember 15. \n\nA tanítás első napja: szeptember 17.\n\nA tanítás utolsó napja: július 15.\n\nTéli szünet :  2020. december 22. – 2021. január 4.\n\nNyilvános órák: 2020. december - 2021. január\n\nÉvzáró előadás: Június 6 ( MOM Kulturális Központ )\n                            Június 12-13 ( Óbudai Kulturális Központ )",
    },
    {
      id: 6,
      title: "Tájékoztató kezdő óvodás növendékeink szüleinek",
      role: "primary",
      parentId: 6,
      description:
        "A művészi torna órák tananyagát - 25 éves tapasztalatunk alapján - úgy állítottuk össze, hogy a gyerekek figyelmét már 4 éves kortól lekösse. Így nem szükséges, hogy a szülők is részt vegyenek az órán, sőt a gyerekek figyelmének fenntartása eredményesebb, ha önállóan „dolgoznak”, ahogy majd az iskolában is kell. A gyerekeknek ez általában nem jelent problémát. Ha először néhányan szokatlannak is érzik, a tanárok könnyen át tudják segíteni őket ezen a kisebb kihíváson. Amennyiben feltétlenül szükséges természetesen átmenetileg a szülői segítségtől sem zárkózunk el, de ezt mindenképpen a tanárokkal kell egyeztetni. Segítséget jelent, ha az első óra előtt otthon megbeszélik, hogy ezen az órán minden kislány egyedül vesz részt, de az anyukák a folyosón várják őket. A gyerekek órai munkájának eredményét a szülők a félévi nyilvános órán illetve a színpadi évzáró előadáson tekinthetik meg.\nAz öltözet eleinte bármilyen alkalmas ruha lehet, ami a mozgást nem akadályozza, de később, amikor már beilleszkedtek a gyerekek, egyforma tornadreszt kapnak, amit a bemutatókon, előadáson is viselnek. Váltócipő már az első alkalommal is szükséges, mert a teremben lévő szőnyegre utcai cipővel nem szabad rálépni. (először esetleg zokni is megteszi, olyan, ami nem csúszik).\nKérjük, hogy a gyerekek ne egyenek-igyanak közvetlenül az óra előtt! (A folyadékpótlás természetesen fontos, de a legkisebbeknél az óra közben erre nincs szükség).\nAz óráról csak a tanár engedélyével jöhetnek ki a gyerekek. Mosdóba  természetesen azonnal kimehetnek, de  oda már nem tudjuk elkísérni őket.   Hogy ez minél ritkábban forduljon elő, kérjük, hogy óra előtt mindig vigyék el a gyerekeket a mosdóba!\nFontosnak tartjuk, hogy a szülők és a tanárok jó kapcsolatban legyenek, nyíltan tudjanak beszélni az esetleges problémáról. Ha bármi észrevétele, kérdése van, forduljon bizalommal a tanár nénihez. Az órák előtt és után nem biztos, hogy van erre elegendő idő, de annyi biztosan van, hogy megbeszéljenek egy alkalmas módot és időt a kapcsolattartásra.",
    },
  ],
  enrollment: {
    columns: [
      {
        title: "Év elején szeretnék beiratkozni!",
        text:
          "Augusztus végén és szeptember elején valamennyi helyszinünkön beiratkozást tartunk. A végleges órarendet ezt követően állítjuk össze a jelentkezők életkora, tudásszintje és az időpontra vonatkozó igények figyelembe vételével. Kérjük ezért, hogy a beiratkozásnál jelezzék, hogy a helyszínen megjelölt tanítási napokon mi a legkorábbi időpont, amikor a foglalkozásra tudnak jönni, illetve mi a legkésőbbi  időpont, ami még alkalmas volna. \n\nA régi csoportok természetesen együtt maradnak és az ő időpontjukat igyekszünk nem változtatni, ha ezt külön nem kérik. \n\nA fennmaradó helyekre év közben is lehet jelentkezni, de az előmenetel szempontjából mindenképpen előnyösebb a szeptemberi kezdés.",
        button_text: "Beiratkozás időpontok",
        link: 'https://docs.google.com/document/d/18Tc7Y06IOJwaNVtdSuo-q6kUYe9DDnz5Q1VXinKArTU',
      },
      {
        title: "Év közben is tudok csatlakozni?",
        text:
          "Igen, a tanév folyamán is lehet csatlakozni, ha találunk olyan csoportot, amely életkorod, tudásszinted szerint megfelelő  és a létszám is lehetővé teszi. Mikusik Márta iskolatitkárunkkal vedd fel a kapcsolatot telefonon vagy e-mailben, ha jelentkezni szeretnél! Ő tájékoztat pontos  órarendünkről és arról, hogy melyek azok a csoportok, amelyekhez csatlakozni tudsz.\nA Kurzusaink menüpont alatt, az órák leírásánál megtalálod azt, hogy az egyes helyszíneken  mely napokon tartunk órákat.",
        button_text: "Érdeklődöm",
        link: 'contact'
      },
    ],
  },
  contact: {
    gyik: [
      {
        question: "Pontosan 4 éves kortól lehet beiratkozni?",
        answer:
          "A legnagyobb kihívás ilyen kicsi korban, hogy 45 percig folyamatosan figyelni kell az óráinkon. Nem egyformán fejlődnek a gyerekek, ezért előfordulhat, hogy valaki már korábban megérett a feladatra. Több évtizedes tapasztalatunk alapján 3,5 éves kor alatt nem érdemes még beiratkozni.",
      },
      {
        question: "Van felvételi?",
        answer:
          "Nincs. Tanfolyamainkhoz nem kell semmilyen speciális adottság. A tanév folyamán kiderül, hogy növendékeink megszeretik-e a választott mozgásformát. Ha idősebb tanítványaink más stílusra vágynak, lehetőség van iskolánkon belül műfajt váltani.",
      },
      {
        question: "Hogyan tudjuk eldönteni, hogy melyik műfajt válasszuk?",
        answer:
          "A kurzusaink menüpontban megtalálhatók a nálunk tanított műfajok, és az is, hogy kiknek ajánljuk őket. A beiratkozás még nem véglegesíti a választott műfajt. Ha néhány hét után úgy érzed, valami más stílust tanulnál inkább, lehetőséged van váltani iskolánkon belül.",
      },
      {
        question: "Fiúk jöhetnek? ",
        answer:
          "Igen, de mivel nagyon kevés fiú iratkozik be, ezért 1-2 kivétellel iskolánkba lányok járnak.",
      },
      {
        question: "Lehet csak heti egyszer járni?",
        answer:
          "Átmenetileg igen, de az órák egymásra épülnek, növendékünk azt tapasztalhatja, hogy a többiek ügyesebben, gyorsabban haladnak az anyag elsajátításával – nem meglepő, hiszen ebben az esetben pontosan kétszer annyi lehetőségük van erre –, így hosszú távon kudarcélményhez vezethet, és elveheti az amúgy tehetséges, szorgalmas gyermekek önbizalmát. Ha valaki mégis így dönt, számukra a tandíjból 30% kedvezményt tudunk adni.",
      },
      {
        question: "Miért kell egyenruhát vásárolni?",
        answer:
          "Iskolánkban minden csoportnak egyenruhája van. Tanítványaink a nyilvános órákon és évzáró előadásokon ezekben a dresszekben lépnek fel. Mi azonban tanév közben is szorgalmazzuk az egyforma ruhák viselését, mert azon felül, hogy dresszek esetében tanáraink jobban látják a korrigálandó hibákat, fokozza növendékeink összetartozás érzését, így erősíti a közösséget.",
      },
      {
        question: "Miben jöjjek órára, amíg nincs meg a csoport egyenruhája?",
        answer:
          "Egy testhez simuló felső, cicanadrág és – nem csúszós – pamutzokni minden műfajhoz tökéletes választás. Gyakorlócipőt azelőtt nem érdemes beszerezni, hogy a tanárral egyeztetnénk, mert tanáraink a különböző műfajoktól függően más színt és kialakítást preferálnak.",
      },
      {
        question: "Mikor kell új egyenruhát vásárolni?",
        answer:
          "A dresszeket évente-kétévente cseréljük. A döntés tanárainké, de sok minden befolyásolja: az elmúlt év óta mennyit nőttek a gyerekek, hány új gyermek érkezett a csoportba, milyen állapotban vannak a meglévő ruhák. Versenyzős csapatainknak a koreográfiához illő ruhát készíttetünk, így az ő esetükben többnyire minden koreográfiához új ruha kell.",
      },
      {
        question: "Szülők bejöhetnek az órákra?",
        answer:
          "Iskolánkban a szülők  nem jönnek be az órákra. Így tudjuk biztosítani, hogy növendékeink  elsősorban a tanárra és a feladatokra figyeljenek.  A kezdőknél érdemes ezt az első óra előtt, otthon megbeszélni a gyerekekkel.  Biztonságot ad a kicsiknek, ha az első alkalmak alatt a szülők a helyszínen várakoznak, igaz, hogy nem bent, de a közelben vannak, ha mosdóba kell menni, el tudják kísérni őket. Egyes esetekben, amikor valaki több próbálkozás után sem mer egyedül bejönni az órára, tanáraink – belátásuk szerint – tehetnek kivételt, néhány órára beengedhetik a szülőt.",
      },
      {
        question: "Milyen napokon vannak az órák? Van órarend?",
        answer:
          "Az órarendet minden évben a beiratkozás függvényében állítjuk össze, ezzel tudjuk biztosítani, hogy mindenki saját korosztályában és saját szintjén tanulhasson tovább. Az, hogy mely órák milyen napokon lesznek, ezért biztosan csak beiratkozás után derül ki. A tanév közben csatlakozók számára, az adott évre kialakult órarendről iskolatitkárunk tud bővebb tájékoztatást adni.",
      },
      {
        question: "Egy ismerősöm már OMISK-os, járhatok vele egy csoportba?",
        answer:
          "Nincs akadálya, beiratkozásnál figyelembe vesszük az ilyen jellegű kéréseket, ha az élekor és  a tudásszint megfelelő.",
      },
      {
        question: "Milyen hosszúak az órák?",
        answer:
          "Az órák életkortól függően óvodásoknak 45, iskolásoknak 60 vagy 90 percesek.",
      },
      {
        question: "Mennyibe kerülnek az órák?",
        answer:
          "A tanfolyamok díja helyszíntől, műfajtól és az órák hosszától függően változik. Árainkat a kurzusaink menüpontnál találod a választott műfajnál.",
      },
      {
        question:
          "Mi a helyzet betegség, hiányzás esetén? Pótlásra van lehetőség?",
        answer:
          "A tandíjból visszatérítést csak huzamosabb idejű és orvos által igazolt mulasztás esetén tudunk adni. Ha a mulasztott órák száma meghaladja a havi óraszám felét, félhavi díjat számolunk csak fel. Pótlásra azonos műfajban, hasonló korcsoportban van lehetőség – az időpontokról iskolatitkárunk, Mikusik Márta  tud bővebb információt adni.",
      },
      {
        question: "Szabadidős tevékenység vagy versenysport?",
        answer:
          "Alapvetően szabadidős tevékenység. Azok számára, akik komolyabban szeretnének a választott műfajjal foglalkozni, versenyzős csoportjainkban biztosítunk fejlődést és több fellépési lehetőséget. Ez azonban bár több munkát és elkötelezettséget igényel, nem kívánja növendékeink minden szabadidejét – a heti 2-3 óra mellett évi 2-5 táncművészeti fesztivált és versenyt jelent, így nem hasonlítható a versenysportokhoz.",
      },
      {
        question: "Milyen fellépési lehetőségek vannak?",
        answer:
          "Minden növendékünknek biztosítunk évi egy fellépési lehetőséget az évzáró előadáson. Ezen felül idősebb, haladó növendékeink korográfiáiból állítjuk össze az éves OMISK Gála műsorát. Aki ennél többre vágyik, kipróbálhatja magát versenyzős csoportjainkban, ami évi 2-5 extra fellépést jelent. Ezek közé tartoznak – a teljesség igénye nélkül – az Országos Táncművészeti Fesztiválok, a Berczik Sára Emlékverseny, a Tánc-kiállítás, a balatonfüredi Sirály Táncfesztivál és az Országos Táncjáték Fesztivál.",
      },
      {
        question: "Hány fő jár egy csoportba?",
        answer: "Csoportjaink általában 15 fővel indulnak.",
      },
      {
        question:
          "Mi a különbség a ritmikus gimnasztika és a művészi torna között?",
        answer:
          "Mindkettőnek közös az alapja, melyet Berczi Sára alakított ki, de a  ritmikus gimnasztika a versenysport irányába ment el, míg a művészi torna elsősorban szabadidős tevékenység maradt . A művészi torna ugyanakkor  fejlesztő hatású, kiváló alapot a különböző táncműfajokhoz. Míg a ritmikus gimnasztika bizonyos adottságokat kíván, a művészi torna mindenkinek sikerélményt ad.",
      },
      {
        question:
          "A kislányom balettra akar járni, de még túl kicsi a baletthoz. Biztosan tetszeni fog neki a művészi torna?",
        answer:
          "Az óvodásoknak meghirdetett balett mindig csak  előkészítést jelent  – térbeli tájékozódás és ritmusérzék fejlesztése, testtudat kialakítása alapvetően gimnasztikus gyakorlatokkal. Mindezt magában foglalja művészi torna kurzusunk azzal az extrával, hogy a Berczik-technikán alapul, ezért a baletthez szükséges erősítések és lazítások mellett erősíti a törzsizmokat is, és kéziszerekkel fejleszti a koordinációt.",
      },
      {
        question:
          "A gyermekem nagyon mozgékony, lefárasztja majd a művészi torna?",
        answer:
          "Aki precízen és odafigyeléssel hajtja végre a feladatokat, biztosan elfárad az óra végére. Ez persze nem jelenti azt, hogy a gyerekek ne igényelnének adott esetben egy kiadós rohangálást óra után – a kettőnek teljesen más a funkciója. Az óra megadott keretek között folyik, sok energiát igényel, erősítéssel, nyújtással, pulzusemelő gyakorlatokkal, de mindez akkor, és úgy, ahogy a tanár kéri. Az önfeledt szaladgálást viszont semmilyen irányított tevékenység nem pótolhatja.",
      },
      {
        question: "Élő zene van az órák alatt?",
        answer:
          "Nem, az órákat kísérő zene lejátszóról megy. Műfajhoz és korosztályhoz illő gondosan összeállított lejátszási listával készülünk az órákra.",
      },
      {
        question: "Mikortól használnak kéziszert az órákon?",
        answer:
          "Már második évfolyamtól, azaz 5-6 éves kortól lehetőség van különböző kéziszerek használatára, erről minden csoportnál tanáraink döntenek megítélésük szerint.",
      },
      {
        question:
          "Eddig művészi tornára jártam, de valami dinamikusabbat szeretnék.",
        answer:
          "A jazztánc pörgős, dinamikus, csajos műfaj. Bővebb információ a kurzusaink menüpontban található róla.",
      },
      {
        question: "Hogy néz ki egy óra?",
        answer:
          "Az órák műfajtól függetlenül tréningből, kombináció- és koreográfiatanulásból, nyújtásból állnak.",
      },
      {
        question: "Hány tanár van az órán?",
        answer:
          "Minden órát egy tanár vezet. Előfordulhat, hogy egy csoportot két tanár tanít, de ebben az esetben a hét egyik napján egyikőjük, a másik alkalmon másikuk tartja a foglalkozást.",
      },
      {
        question: "Mi a különbség a modern tánc és a jazztánc között?",
        answer:
          "Modern tánc tanfolyamunk Matt Mattox technikájára és a balett alapjaira épül, míg a jazztánc legkarakteresebb vonása a jazz nélkülözhetetlen könnyedsége és lazasága.",
      },
      {
        question: "Melyik kurzusra hány évesen lehet beiratkozni?",
        answer:
          "A kurusaink menüpontban minden műfajnál megtalálható a javasolt alsó korhatár.",
      },
    ],
  },
};

export default pagesConfig;
