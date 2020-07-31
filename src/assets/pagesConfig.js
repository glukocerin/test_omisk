const pagesConfig = {
  // ide irhatod a szaros configodat
  landing: {},
  courses: {
    cards: [
      {
        title: "Művészeti torna",
        image: "muveszeti_torna",
        age: "4 év felett",
        districts: "ll., lll., lX., Xll., Xlll.",
        bottomText: "kerületekben",
        backgroundColor: "blue",
        dotColor: "dot-blue",
        link: "eurhythmics"
      },
      {
        title: "Mozdulatművészet",
        image: "mozdulatmuveszet",
        age: "4 év felett",
        districts: "ll., lll., lX., Xll., Xlll.",
        bottomText: "kerületekben",
        backgroundColor: "blue",
        dotColor: "dot-blue",
        link: "callisthenics"
      },
      {
        title: "Pre balett",
        image: "pre_balett",
        age: "4 év felett",
        districts: "ll., lll., lX., Xll., Xlll.",
        bottomText: "kerületekben",
        backgroundColor: "salmon",
        dotColor: "dot-salmon",
        link: "pre_ballet"
      },
      {
        title: "Klasszikus balett",
        image: "klasszikus_balett",
        age: "4 év felett",
        districts: "ll., lll., lX., Xll., Xlll.",
        bottomText: "kerületekben",
        backgroundColor: "salmon",
        dotColor: "dot-salmon",
        link: "ballet"
      },
      {
        title: "Jazz tánc",
        image: "jazz_tanc",
        age: "4 év felett",
        districts: "ll., lll., lX., Xll., Xlll.",
        bottomText: "kerületekben",
        backgroundColor: "green",
        dotColor: "dot-green",
        link: "jazz"
      },
      {
        title: "Modern tánc",
        image: "modern_tanc",
        age: "4 év felett",
        districts: "ll., lll., lX., Xll., Xlll.",
        bottomText: "kerületekben",
        backgroundColor: "green",
        dotColor: "dot-green",
        link: "modern"
      }
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
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
        ],
        isList: true
      },
      {
        title: "Kiknek ajanljuk",
        image: "eurhythmics_1",
        textBody:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
        isList: false
      },
      {
        title: "Kiknek ajanljuk",
        image: "eurhythmics_1",
        textBody:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
        isList: false
      },
      {
        title: "Kiknek ajanljuk",
        image: "eurhythmics_1",
        textBody:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
        isList: false
      }
    ]
  },
  programs: {
    programCards: {
      firstRow: [
        {
          title: "Nyilvános órák",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
          img: "nyilvanos_ora"
        },
        {
          title: "Versenyek",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
          img: "versenyek"
        }
      ],
      secondRow: [
        {
          title: "Évzáró előadások",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
          img: "evzaro_eloadas"
        },
        {
          title: "Omisk gála",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
          img: "gala"
        }
      ],
      thirdRow: [
        {
          title: "Mozdulat műhely",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
          img: "mozdulatmuhely"
        },
        {
          title: "Nyári táborok",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd",
          img: "nyari_tabor"
        }
      ]
    }
  },
  teachers: {
    cards: [
      {
        picture: "pers_julia.jpg",
        name: "Pers Júlia",
        desc:
          "Állami díjas táncpedagógus,\nMűvészi torna edző,\nMűvészeti vezető",
        details:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        education: [
          "Testnevelési Főiskola Edzői szak 1986",
          "Budapesti Műszaki Egyetem Vegyészmérnök, 1982"
        ],
        achievements: [
          "2011 Magyar Köztársaság Érdemkereszt Ezüst fokozat",
          "2010 Táncpedagógus Országos Szövetsége Nívódíja",
          "2006 Berczik Sára Díj",
          "2005 Réti Piroska Balett Pedagógusi Nívódíj"
        ]
      },
      {
        picture: "benis_katalin.jpg",
        name: "Benis Katalin",
        desc:
          "Állami díjas táncpedagógus,\nMűvészi torna edző,\nMűvészeti vezető",
        details:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        education: [
          "Testnevelési Főiskola Edzői szak 1986",
          "Budapesti Műszaki Egyetem Vegyészmérnök, 1982"
        ],
        achievements: [
          "2011 Magyar Köztársaság Érdemkereszt Ezüst fokozat",
          "2010 Táncpedagógus Országos Szövetsége Nívódíja",
          "2006 Berczik Sára Díj",
          "2005 Réti Piroska Balett Pedagógusi Nívódíj"
        ]
      },
      {
        picture: "mady_krisztina.jpg",
        name: "Mády Krisztina",
        desc:
          "Állami díjas táncpedagógus,\nMűvészi torna edző,\nMűvészeti vezető",
        details:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        education: [
          "Testnevelési Főiskola Edzői szak 1986",
          "Budapesti Műszaki Egyetem Vegyészmérnök, 1982"
        ],
        achievements: [
          "2011 Magyar Köztársaság Érdemkereszt Ezüst fokozat",
          "2010 Táncpedagógus Országos Szövetsége Nívódíja",
          "2006 Berczik Sára Díj",
          "2005 Réti Piroska Balett Pedagógusi Nívódíj"
        ]
      },
      {
        picture: "kalocsai_edit.jpg",
        name: "Kalocsai Edit",
        desc:
          "Állami díjas táncpedagógus,\nMűvészi torna edző,\nMűvészeti vezető",
        details:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        education: [
          "Testnevelési Főiskola Edzői szak 1986",
          "Budapesti Műszaki Egyetem Vegyészmérnök, 1982"
        ],
        achievements: [
          "2011 Magyar Köztársaság Érdemkereszt Ezüst fokozat",
          "2010 Táncpedagógus Országos Szövetsége Nívódíja",
          "2006 Berczik Sára Díj",
          "2005 Réti Piroska Balett Pedagógusi Nívódíj"
        ]
      },
      {
        picture: "kovacs_bea.jpg",
        name: "Kovács Bea",
        desc:
          "Állami díjas táncpedagógus,\nMűvészi torna edző,\nMűvészeti vezető",
        details:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        education: [
          "Testnevelési Főiskola Edzői szak 1986",
          "Budapesti Műszaki Egyetem Vegyészmérnök, 1982"
        ],
        achievements: [
          "2011 Magyar Köztársaság Érdemkereszt Ezüst fokozat",
          "2010 Táncpedagógus Országos Szövetsége Nívódíja",
          "2006 Berczik Sára Díj",
          "2005 Réti Piroska Balett Pedagógusi Nívódíj"
        ]
      },
      {
        picture: "empty.jpg",
        name: "P. Ács Vali",
        desc:
          "Állami díjas táncpedagógus,\nMűvészi torna edző,\nMűvészeti vezető",
        details:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        education: [
          "Testnevelési Főiskola Edzői szak 1986",
          "Budapesti Műszaki Egyetem Vegyészmérnök, 1982"
        ],
        achievements: [
          "2011 Magyar Köztársaság Érdemkereszt Ezüst fokozat",
          "2010 Táncpedagógus Országos Szövetsége Nívódíja",
          "2006 Berczik Sára Díj",
          "2005 Réti Piroska Balett Pedagógusi Nívódíj"
        ]
      },
      {
        picture: "csongei_barbi.jpg",
        name: "Csöngei Barbara",
        desc:
          "Állami díjas táncpedagógus,\nMűvészi torna edző,\nMűvészeti vezető",
        details:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        education: [
          "Testnevelési Főiskola Edzői szak 1986",
          "Budapesti Műszaki Egyetem Vegyészmérnök, 1982"
        ],
        achievements: [
          "2011 Magyar Köztársaság Érdemkereszt Ezüst fokozat",
          "2010 Táncpedagógus Országos Szövetsége Nívódíja",
          "2006 Berczik Sára Díj",
          "2005 Réti Piroska Balett Pedagógusi Nívódíj"
        ]
      },
      {
        picture: "solti_eszter.jpg",
        name: "Solti Eszter",
        desc:
          "Állami díjas táncpedagógus,\nMűvészi torna edző,\nMűvészeti vezető",
        details:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        education: [
          "Testnevelési Főiskola Edzői szak 1986",
          "Budapesti Műszaki Egyetem Vegyészmérnök, 1982"
        ],
        achievements: [
          "2011 Magyar Köztársaság Érdemkereszt Ezüst fokozat",
          "2010 Táncpedagógus Országos Szövetsége Nívódíja",
          "2006 Berczik Sára Díj",
          "2005 Réti Piroska Balett Pedagógusi Nívódíj"
        ]
      },
      {
        picture: "lakatos_lilla.jpg",
        name: "Rácz-Lakatos Lilla",
        desc:
          "Állami díjas táncpedagógus,\nMűvészi torna edző,\nMűvészeti vezető",
        details:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        education: [
          "Testnevelési Főiskola Edzői szak 1986",
          "Budapesti Műszaki Egyetem Vegyészmérnök, 1982"
        ],
        achievements: [
          "2011 Magyar Köztársaság Érdemkereszt Ezüst fokozat",
          "2010 Táncpedagógus Országos Szövetsége Nívódíja",
          "2006 Berczik Sára Díj",
          "2005 Réti Piroska Balett Pedagógusi Nívódíj"
        ]
      },
      {
        picture: "rozsa_reka.jpg",
        name: "Rózsa Réka",
        desc:
          "Állami díjas táncpedagógus,\nMűvészi torna edző,\nMűvészeti vezető",
        details:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        education: [
          "Testnevelési Főiskola Edzői szak 1986",
          "Budapesti Műszaki Egyetem Vegyészmérnök, 1982"
        ],
        achievements: [
          "2011 Magyar Köztársaság Érdemkereszt Ezüst fokozat",
          "2010 Táncpedagógus Országos Szövetsége Nívódíja",
          "2006 Berczik Sára Díj",
          "2005 Réti Piroska Balett Pedagógusi Nívódíj"
        ]
      },
      {
        picture: "taylor_eszti.jpg",
        name: "Taylor Esther",
        desc:
          "Állami díjas táncpedagógus,\nMűvészi torna edző,\nMűvészeti vezető",
        details:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        education: [
          "Testnevelési Főiskola Edzői szak 1986",
          "Budapesti Műszaki Egyetem Vegyészmérnök, 1982"
        ],
        achievements: [
          "2011 Magyar Köztársaság Érdemkereszt Ezüst fokozat",
          "2010 Táncpedagógus Országos Szövetsége Nívódíja",
          "2006 Berczik Sára Díj",
          "2005 Réti Piroska Balett Pedagógusi Nívódíj"
        ]
      },
      {
        picture: "david_luca.jpg",
        name: "Dávid Luca",
        desc:
          "Állami díjas táncpedagógus,\nMűvészi torna edző,\nMűvészeti vezető",
        details:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        education: [
          "Testnevelési Főiskola Edzői szak 1986",
          "Budapesti Műszaki Egyetem Vegyészmérnök, 1982"
        ],
        achievements: [
          "2011 Magyar Köztársaság Érdemkereszt Ezüst fokozat",
          "2010 Táncpedagógus Országos Szövetsége Nívódíja",
          "2006 Berczik Sára Díj",
          "2005 Réti Piroska Balett Pedagógusi Nívódíj"
        ]
      },
      {
        picture: "taylor_jennifer.jpg",
        name: "Bozsókiné Taylor Jennifer",
        desc:
          "Állami díjas táncpedagógus,\nMűvészi torna edző,\nMűvészeti vezető",
        details:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        education: [
          "Testnevelési Főiskola Edzői szak 1986",
          "Budapesti Műszaki Egyetem Vegyészmérnök, 1982"
        ],
        achievements: [
          "2011 Magyar Köztársaság Érdemkereszt Ezüst fokozat",
          "2010 Táncpedagógus Országos Szövetsége Nívódíja",
          "2006 Berczik Sára Díj",
          "2005 Réti Piroska Balett Pedagógusi Nívódíj"
        ]
      },
    ]
  },
  actuals: {
    cards: [
      {
        picture: "actual-one.png",
        picture_title: "Felhívás",
        date: "2020. 12. 03.",
        title: "Járvány helyzet",
        text:
          "Tisztelt Szülők! Kedves Növendékeink! A járványügyi vészhelyzet miatt március 16-tól valamennyi helyszínünkön szüneteltetjük a tanítást. A folytatás időpontját sajnos nem tudjuk, ahogyan az iskolák bezárása is határozatlan időre szól. Minden változásról itt és honlapunkon adunk tájékoztatást.",
        details_header:
          "Az Óbuda Mozgásművészeti iskola 6-17 évesek számára szervez napközis tábort két turnusban:",
        details:
          "2020. augusztus 3-7. között a MOMKultban Tanárok: Taylor Jenny, Taylor Esther, Rózsa Réka, Csöngei Barbara, Dávid Luca, Solti Eszter. 2020. augusztus 24-28. között a békásmegyeri Szent József Házban Tanárink: Taylor Jenny, Taylor Esther, Csöngei Barbara, Dávid Luca, Benis Kati, Rácz-Lakatos Lilla, Solti Eszter\n\nKét külön korcsoport számára (6-12; 13-17) egy időpontban, de elkülönülő programmal indítunk tábort a két helyszínünkön, ahol napfényes termek és hatalmas park biztosít kiváló terepet arra, hogy a gyermekek önfeledten, hasznosan töltsék a vakációt, és új barátságokat köthessenek.\n\nAz öt napos program ára 36.000 Ft, de az Óbuda Mozgásművészeti Iskola növendékeinek kedvezményesen 33.000 Ft, amely napi háromszori étkezést tartalmaz és tánc továbbá kézműves foglalkozásokat foglal magába."
      },
      {
        picture: "actual-two.png",
        picture_title: "Program",
        date: "2020. 12. 03.",
        title: "Nyári tábor",
        text:
          "Tisztelt Szülők! Kedves Növendékeink! A járványügyi vészhelyzet miatt március 16-tól valamennyi helyszínünkön szüneteltetjük a tanítást. A folytatás időpontját sajnos nem tudjuk, ahogyan az iskolák bezárása is határozatlan időre szól. Minden változásról itt és honlapunkon adunk tájékoztatást.",
        details_header:
          "Az Óbuda Mozgásművészeti iskola 6-17 évesek számára szervez napközis tábort két turnusban:",
        details:
          "2020. augusztus 3-7. között a MOMKultban Tanárok: Taylor Jenny, Taylor Esther, Rózsa Réka, Csöngei Barbara, Dávid Luca, Solti Eszter. 2020. augusztus 24-28. között a békásmegyeri Szent József Házban Tanárink: Taylor Jenny, Taylor Esther, Csöngei Barbara, Dávid Luca, Benis Kati, Rácz-Lakatos Lilla, Solti Eszter\n\nKét külön korcsoport számára (6-12; 13-17) egy időpontban, de elkülönülő programmal indítunk tábort a két helyszínünkön, ahol napfényes termek és hatalmas park biztosít kiváló terepet arra, hogy a gyermekek önfeledten, hasznosan töltsék a vakációt, és új barátságokat köthessenek.\n\nAz öt napos program ára 36.000 Ft, de az Óbuda Mozgásművészeti Iskola növendékeinek kedvezményesen 33.000 Ft, amely napi háromszori étkezést tartalmaz és tánc továbbá kézműves foglalkozásokat foglal magába."
      },
      {
        picture: "actual-three.png",
        picture_title: "Program",
        date: "2020. 12. 03.",
        title: "Járvány helyzet",
        text:
          "Tisztelt Szülők! Kedves Növendékeink! A járványügyi vészhelyzet miatt március 16-tól valamennyi helyszínünkön szüneteltetjük a tanítást. A folytatás időpontját sajnos nem tudjuk, ahogyan az iskolák bezárása is határozatlan időre szól. Minden változásról itt és honlapunkon adunk tájékoztatást.",
        details_header:
          "Az Óbuda Mozgásművészeti iskola 6-17 évesek számára szervez napközis tábort két turnusban:",
        details:
          "2020. augusztus 3-7. között a MOMKultban Tanárok: Taylor Jenny, Taylor Esther, Rózsa Réka, Csöngei Barbara, Dávid Luca, Solti Eszter. 2020. augusztus 24-28. között a békásmegyeri Szent József Házban Tanárink: Taylor Jenny, Taylor Esther, Csöngei Barbara, Dávid Luca, Benis Kati, Rácz-Lakatos Lilla, Solti Eszter\n\nKét külön korcsoport számára (6-12; 13-17) egy időpontban, de elkülönülő programmal indítunk tábort a két helyszínünkön, ahol napfényes termek és hatalmas park biztosít kiváló terepet arra, hogy a gyermekek önfeledten, hasznosan töltsék a vakációt, és új barátságokat köthessenek.\n\nAz öt napos program ára 36.000 Ft, de az Óbuda Mozgásművészeti Iskola növendékeinek kedvezményesen 33.000 Ft, amely napi háromszori étkezést tartalmaz és tánc továbbá kézműves foglalkozásokat foglal magába."
      }
    ]
  },
  operations: [
    {
      id: 0,
      title: 'Általános tájékoztató a jelentkezés menetéről és az Iskola rendjéről',
      role: 'primary',
      parentId: 0,
      description: '',
    },
    {
      id: 1,
      title: 'csatlakozás év közben',
      role: 'secondary',
      parentId: 0,
      description: 'Iskolánkba szeptemberben lehet beiratkozni, ekkor indulnak el a csoportok . A tanév folyamán is van mód a csatlakozásra a már meglévő csoportokhoz , ha van üres hely.\n\nAz órarendet mindig a beiratkozást követően állítjuk össze növendékeink igényeinek lehetőség szerinti figyelembe vételével. Akik már jártok, azok természetesen eredeti csoportjukkal együtt maradnak, de előfordul, hogy valami miatt az egész csoportnak meg kell változtatni az időpontját. Természetesen az órarend nagy mértékben nem változik egyik évről a másikra, de kis változásokozások mindig vannak.\n\nAz új jelentkezőket pedig életkoruk és tudásszintjük, valamint az időpontra vonatkozó igényük alapján osztjuk be a csoportokba.\n\nA beiratkozás alkalmával a jelentkezők bediktálhatják,hogy milyen időintervallumban tudnának jönni a lehetséges napokon és ennek alapján állítjuk össze a pontos órarendet. A végleges órarendet a beiratkozást követően hirdetjük ki (adatvédelmi okokból nem az interneten, hanem az intézmény bejáratánál kifüggesztett hirdetményben).'
    },
    {
      id: 2,
      title: 'tandíjak, befizetés',
      role: 'secondary',
      parentId: 0,
      description: 'A tandíjak összegét a kurzusok menüpontban találod az aktuális kurzusoknál. A tandíjat 2 havonta kérjük befizetni a helyszínen iskolatitkárunknak az előre meghirdetett napon (erről mindenkit írásban időben tájékoztatunk). Az év eleji befizetéskor másfél havi tandíjat kérünk befizetni, mivel a tanítás szeptember közepén kezdődik. Az év folyamán is, ha hivatalon ünnep vagy a téli szünet miatt 8-nál kevesebb alkalommal van óra, akkor arányosan csökkentjük az arra a hónapra eső tandíjat.'
    },
    {
      id: 3,
      title: 'engedmények',
      role: 'secondary',
      parentId: 0,
      description: 'Testvérek beíratása esetén engedményt adunk a tandíjból, melynek összege: 2000,- FT/Hó/Fő'
    },
    {
      id: 4,
      title: 'hiányzás',
      role: 'secondary',
      parentId: 0,
      description: 'A tandíjból visszatérítést csak huzamosabb idejű és orvosilag igazolt mulasztás esetén tudunk adni. Ha a mulasztott órák száma meghaladja az havi óraszám felét, akkor csak fél havi díjat kell fizetni.'
    },
    {
      id: 5,
      title: 'öltözet',
      role: 'secondary',
      parentId: 0,
      description: 'A kurzusokon célszerű öltözet ( ruha és cipő ) a kurzusaink menüpontban található . A gyermek és iskolás csoportok a nyilvános órákon egyforma öltözetben szerepelnek növendékeink, amit itt a helyszínen lehet megvásárolni a készítőtől. Ára a fazontól függő (4000,- Ft-tól). Az évzáró előadáson általában ugyanez a fellépő, esetleg valami kiegészítővel.\n\nFontos, hogy új növendékeinknek nem kell a beiratkozás után rögtön vásárolni tornadresszt, az egyforma dresszeket is ezért csak október- november táján hozza a készítő, amikor már biztosan beilleszkedtek a csapatba.'
    },
    {
      id: 6,
      title: 'egyéb kiadások',
      role: 'secondary',
      parentId: 0,
      description: 'Egyéb kiadásra csak a színpadi évzáróval kapcsolatban kell számítani, amit az Óbudai Kulturális Központban és a MOM Kulturális Központban rendezünk.'
    },
    {
      id: 7,
      title: 'Tanév rendje, 2020',
      role: 'primary',
      parentId: 7,
      description: 'Beiratkozási időpontok:\nAugusztus 26-szeptember 9.\n\nÓrarend kihirdetése:\nSzeptember 13.\n\nTanév kezdés:\nSzeptember 17.\n\nTéli szünet:\n2019. december 23-től 2020. január 2-ig\n\nTervezett évzáró:\nMOM Kulturális Központ\nJúnius 7.\nÓbudai Kulturális Központ\nJúnius 13.\njúnius 14.'
    },
    {
      id: 8,
      title: 'Tájékoztató kezdő ovis növendékeink szüleinek',
      role: 'primary',
      parentId: 8,
      description: 'A művészi torna órák tananyagát -25 éves tapasztalatunk alapján-úgy állítottuk össze, hogy a gyerekek figyelmét már 4 éves kortól lekösse. Így nem szükséges, hogy a szülők is részt vegyenek az órán, sőt a gyerekek figyelmének fenntartása eredményesebb, ha önállóan „dolgoznak”, ahogy majd az iskolában is kell. A gyerekeknek ez általában nem jelent problémát. Ha először néhányan szokatlannak is érzik, a tanárok könnyen át tudják segíteni őket ezen a kisebb kihíváson. Amennyiben feltétlenül szükséges természetesen átmenetileg a szülői segítségtől sem zárkózunk el, de ezt mindenképpen a tanárokkal kell egyeztetni. Segítséget jelent, ha az első óra előtt otthon megbeszélik, hogy ezen az órán minden kislány egyedül vesz részt, de az anyukák a folyosón várják őket. A gyerekek órai munkájának eredményét a szülők a félévi nyilvános órán illetve a színpadi évzáró előadáson tekinthetik meg.\n\nAz öltözet eleinte bármilyen alkalmas ruha lehet, ami a mozgást nem akadályozza, de később, amikor már beilleszkedtek a gyerekek, egyforma tornadreszt kapnak, amit a bemutatókon, előadáson is viselnek. Váltó cipő már az első alkalommal is szükséges, mert a teremben lévő szőnyegre utcai cipővel nem szabad rálépni. (először esetleg zokni is megteszi, olyan, ami nem csúszik).\n\nKérjük, hogy a gyerekek ne egyenek-igyanak közvetlenül az óra előtt! (A folyadékpótlás természetesen fontos, de a legkisebbeknél az óra közben erre nincs szükség).\n\nAz óráról a tanár engedélye nélkül a gyerekek nem jöhetnek ki, ez alól kivétel, ha mosdóba szeretnének menni. Hogy ez minél ritkábban forduljon elő, kérjük, hogy óra előtt mindig vigyék el a gyerekeket a mosdóba! Kérjük, hogy legyenek tekintettel arra, hogy ha mégis ki kell menni valakinek, akkor legyen ott valaki, aki segíteni tud, mert a tanár nem mehet ki az óráról.\n\nFontosnak tartjuk, hogy a szülők és a tanárok jó kapcsolatban legyenek, nyíltan tudjanak beszélni az esetleges problémáról. Ha bármi észrevétele, kérdése van, forduljon bizalommal a tanár nénihez. Az órák előtt és után nem biztos, hogy van erre elegendő idő, de annyi biztosan van, hogy megbeszéljenek egy alkalmas módot és időt a kapcsolattartásra.\n\nÓbuda Mozgásművészeti Iskola'
    }
  ]
};

export default pagesConfig;
