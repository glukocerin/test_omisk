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
          title: "Évzáró előadások",
          image: "eurhythmics_1",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd"
        },
        {
          title: "Versenyek",
          image: "eurhythmics_1",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd"
        }
      ],
      secondRow: [
        {
          title: "Nyilvános órák",
          image: "eurhythmics_1",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd"
        },
        {
          title: "Mozdulatműhely",
          image: "eurhythmics_1",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd"
        }
      ],
      thirdRow: [
        {
          title: "Nyári táborok",
          image: "eurhythmics_1",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd"
        },
        {
          title: "Omisk Gála",
          image: "eurhythmics_1",
          textBody:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam asdasdelitr, sed diam asdasd elitr, sed diam asdasd elitr, sed diam asdasd"
        }
      ]
    }
  },
  teachers: {
    cards: [
      {
        picture: "julia.png",
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
        picture: "katalin.png",
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
        picture: "krisztina.png",
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
        picture: "edit.png",
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
        picture: "bea.png",
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
        picture: "jenny.png",
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
        picture: "barbara.png",
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
        picture: "eszter.png",
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
        picture: "lilla.png",
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
        picture: "lilla.png",
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
      {
        picture: "reka.png",
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
        picture: "reka.png",
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
        picture: "reka.png",
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
      }
    ]
  }
};

export default pagesConfig;
