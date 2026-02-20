const SCHOOLS_CONFIG = [
  {
    id: 1,
    coordinates: [48.683313, 71.634684],

    // Основная информация
    name: "Ақселеу Сейдімбек атындағы жалпы білім беретін мектебі",
    fullName:
      "Ұлытау облысы білім басқармасының Жаңаарқа ауданы білім бөлімінің «Ақселеу Сейдімбек атындағы жалпы білім беретін мектебі» КММ",
    yearBuilt: 1981,
    address: "Ә.Оспанова 36 ғимарат",
    phone: "87103026702",
    email: "mektep@seydimbek.edu.kz",

    // Әлеуметтік желілер
    social: {
      instagram: {
        username: "sh_a.seidymbek",
        url: "https://www.instagram.com/sh_a.seidymbek?igsh=ZTQwc2o5ODN4d3Az",
      },
      facebook: {
        url: "https://www.facebook.com/share/1Aw6wbqPg5/",
      },
      telegram: {
        url: null, // null если нет
      },
    },

    // Директор
    director: {
      name: "Аяганова Инкар Муратовна",
      photo: "assets/directors/Аяганова_Инкар_Муратовна.jpg",
    },

    // Статистика
    students: 232,
    teachers: 28,

    // Медиа
    logo: "assets/logos/Логотип_А.Сейдімбек_ЖББМ.jpeg",
    photo: "assets/photos/Мектеп_А.Сейдімбек_ЖББМ.jpeg",
  },
  {
    id: 2,
    coordinates: [49.207904, 70.888449],

    name: "Айнабұлақ негізгі орта мектебі",
    fullName:
      "Ұлытау облысы,Жаңаарқа ауданы,Айнабұлақ ауылы, Достық көшесі 10 үй",
    yearBuilt: 1983,
    address: "Достық көшесі 10 үй",
    phone: "87105951822",
    email: "zhana_ainabulak_sh@mail.ru",

    social: {
      instagram: {
        username: "zhanaarka.ainabulak_nom",
        url: "https://www.instagram.com/zhanaarka.ainabulak_nom?igsh=MTk0dWxva2tndTN4OA%3D%3D&utm_source=qr",
      },
      facebook: { url: "https://www.facebook.com/share/187TotVmvp/%3Fmibextid%3DwwXIfr&ust=1771008540000000&usg=AOvVaw28Zuy0lOYZLlcVR2hPgoHQ&hl=ru" },
      telegram: { url: null },
    },

    director: {
      name: "Cерикбаева Нургуль Болатовна",
      photo: "assets/directors/Cерикбаева_Нургуль_Болатовна.jpg",
    },

    students: 19,
    teachers: 12,

    logo: "assets/logos/Логотип_Айнабұлақ.jpg",
    photo: "assets/photos/Мектеп_Айнабұлақ.jpg",
  },
  {
    id: 3,
    coordinates: [48.71930926808477, 71.7595564503026],

    name: "Ақтайлақ негізгі орта мектебі",
    fullName:
      "«Ақтайлақ негізгі орта мектебі`` КММ",
    yearBuilt: 1954,
    address: "Ұландар 2",
    phone: "87103050018",
    email: "zhana-aktailak@mail.ru",

    social: {
      instagram: {
        username: "aktailak_",
        url: "https://www.instagram.com/aktailak_/",
      },
      facebook: { url: "https://www.facebook.com/share/17jiPDEsiQ/" },
      telegram: { url: null },
    },

    director: {
      name: "Абжанов Асылбек Габдуллаевич",
      photo: "assets/directors/Абжанов_Асылбек_Габдуллаевич.jpg",
    },

    students: 44,
    teachers: 20,

    logo: "assets/logos/Логотип_Ақтайлақ.jpg",
    photo: "assets/photos/Мектеп_Ақтайлақ.jpg",
  },
  {
    id: 4,
    coordinates: [47.741763, 71.441100],

    name: "Ақтау ЖББ мектебі",
    fullName:
      "Ұлытау облысы, Жаңаарқа ауданы, Ақтау ауылы, Ақтау ЖББ мектебі",
    yearBuilt: 1965,
    address: "Тәуелсіздік 1",
    phone: "87105953028",
    email: "mektep@aqtau.edu.kz",

    social: {
      instagram: {
        username: "aktau_miektiebi",
        url: "https://www.instagram.com/aktau_miektiebi?igsh=MXQ0c3lrZ3p0czhzYw==",
      },
      facebook: { url: "https://www.facebook.com/share/1CwisAATM9/" },
      telegram: { url: null },
    },

    director: {
      name: "Арунов Мақсат Ануарович",
      photo: "assets/directors/Арунов_Мақсат_Ануарович.jpg",
    },

    students: 116,
    teachers: 27,

    logo: "assets/logos/Логотип_Ақтау.jpg",
    photo: "assets/photos/Мектеп_Ақтау.jpg",
  },
  {
    id: 5, // уникальный ID, можешь изменить
    coordinates: [48.587200, 71.111743], // координаты пока нет

    name: "Ақтүбек ЖББ мектебі",
    fullName:
        "Ұлытау облысы, Жаңаарқа ауданы, Ақтүбек ауылы, Ақтүбек жалпы білім беретін мектебі",
    yearBuilt: 1986,
    address: "Ақтүбек с/о Байтерек 17",
    phone: "87103025304",
    email: "mektep@aktubek.edu.kz",

    social: {
        instagram: {
        username: "aktubekzhobbm",
        url: "https://www.instagram.com/aktubekzhobbm?igsh=MXJ3MGxiaWZ1bjR5Yw==",
        },
        facebook: { url: "https://www.facebook.com/me/" },
        telegram: { url: null },
    },

    director: {
        name: "Абдикасова Гульмира Советовна",
        photo: "assets/directors/Абдикасова_Гульмира_Советовна.jpg",
    },

    students: 176,
    teachers: 33,

    logo: "assets/logos/Логотип_Ақтүбек.jpg",
    photo: "assets/photos/Мектеп_Ақтүбек.jpg",
  },
  {
    id: 6, // уникальный ID
    coordinates: [48.637725, 71.373458], // координаты пока нет

    name: "Атасу ЖББ мектебі",
    fullName:
        "Ұлытау облысы, Жаңаарқа ауданы, Байдалы Би ауылдық округі, Атасу ауылы, Атасу жалпы білім беретін мектебі",
    yearBuilt: 1993,
    address: "С.Сейфуллин көшесі, 1",
    phone: "87103024589",
    email: "mektep@atasu.edu.kz",

    social: {
        instagram: {
        username: "atasu_jbb_kmm",
        url: "https://www.instagram.com/atasu_jbb_kmm/?hl=ru",
        },
        facebook: { url: "https://www.facebook.com/profile.php?id=100028432027156" },
        telegram: { url: null },
    },

    director: {
        name: "Кенжебаева Сагат Хамитовна",
        photo: "assets/directors/Кенжебаева_Сагат_Хамитовна.jpg",
    },

    students: 150,
    teachers: 28,

    logo: "assets/logos/Логотип_Атасу.jpg",
    photo: "assets/photos/Мектеп_Атасу.jpg",
  },
  {
    id: 7, // уникальный ID
    coordinates: [48.682578, 71.633987], // координаты пока нет

    name: "Бименде Амалбеков Тірек мектебі",
    fullName:
        "Ұлытау облысы, Жаңаарқа ауданы, Бименде Амалбеков атындағы тірек мектебі (ресурстық орталық)",
    yearBuilt: 1964,
    address: "Ә.Оспанова 43",
    phone: "87103028129",
    email: "mektep@amalbekov.edu.kz",

    social: {
        instagram: {
        username: "b_amalbekov_tm",
        url: "https://www.instagram.com/b_amalbekov_tm?igsh=MWNsZDVnaTRocnR3ZA==",
        },
        facebook: { url: "https://www.facebook.com/share/1ASxdQ5oLm/" },
        telegram: { url: "https://t.me/m1311mk" },
    },

    director: {
        name: "Садвакасова Актоты Алпановна",
        photo: "assets/directors/Садвакасова_Актоты_Алпановна.jpg",
    },

    students: 960,
    teachers: 82,

    logo: "assets/logos/Логотип_Бименде_Амалбеков.jpg",
    photo: "assets/photos/Мектеп_Бименде_Амалбеков.jpg",
  },
  {
    id: 8, // уникальный ID
    coordinates: [48.725562, 71.939914], // координаты пока нет

    name: "Бидайық ЖББ мектебі",
    fullName:
        "Ұлытау облысы, Жаңаарқа ауданы, Бидайық ауылы, Бидайық жалпы білім беретін мектебі",
    yearBuilt: 1988,
    address: "Тын 2",
    phone: "87103024701",
    email: "mektep@bidaik.edu.kz",

    social: {
        instagram: {
        username: "bidaiyq_zhbbm",
        url: "https://www.instagram.com/bidaiyq_zhbbm?igsh=MXZoMzRoY3c3Yml0NQ==",
        },
        facebook: { url: "https://www.facebook.com/share/1CVz7RKLtR/?mibextid=wwXIfr" },
        telegram: { url: null },
    },

    director: {
        name: "Оспанов Ергали Тулеубаевич",
        photo: "assets/directors/Оспанов_Ергали_Тулеубаевич.jpg",
    },

    students: 170,
    teachers: 32,

    logo: "assets/logos/Логотип_Бидайық.jpg",
    photo: "assets/photos/Мектеп_Бидайық.jpg",
  },
  {
    id: 9, // уникальный ID
    coordinates: [48.6821172581826, 71.65783647093508], // координаты пока нет

    name: "Еламан Шаханов Тірек мектебі",
    fullName:
        "Ұлытау облысы, Жаңаарқа ауданы, Еламан Шаханов атындағы тірек мектебі (ресурстық орталық)",
    yearBuilt: 1937,
    address: "Абай көшесі 35",
    phone: "77103028108",
    email: "mektep@shahanov.edu.kz",

    social: {
        instagram: {
        username: "school_e_shahanov",
        url: "https://www.instagram.com/school_e_shahanov?utm_source=qr&igsh=MTY5OGxrNTJpczByZg==",
        },
        facebook: { url: "https://www.facebook.com/share/17ubA2bnCZ/" },
        telegram: { url: "+77056580994" },
    },

    director: {
        name: "Байшокенова Салтанат Аманжановна",
        photo: "assets/directors/Байшокенова_Салтанат_Аманжановна.jpg",
    },

    students: 940,
    teachers: 119,

    logo: "assets/logos/Логотип_Еламан_Шаханов.jpg",
    photo: "assets/photos/Мектеп_Еламан_Шаханов.jpg",
  },
  {
    id: 10, // уникальный ID
    coordinates: [48.37090416024523, 70.00021571684776], // координаты пока нет

    name: "Ж.Сәдуақасов ЖББ мектебі",
    fullName:
        "Ұлытау облысы, Жаңаарқа ауданы, Түгіскен ауылы, Ж.Сәдуақасов атындағы жалпы білім беретін мектебі",
    yearBuilt: 1970,
    address: "Ыдырыс Жұмабеков көшесі 18",
    phone: "87103023342",
    email: "mektep@saduaqas.edu.kz",

    social: {
        instagram: {
        username: "zhsaduakasov2023",
        url: "https://www.instagram.com/zhsaduakasov2023?igsh=cTRzcGV5Zmt1MHR5",
        },
        facebook: { url: "https://www.facebook.com/profile.php?id=100033394132439" },
        telegram: { url: null },
    },

    director: {
        name: "Дарибаев Нуржан Мухамеджанович",
        photo: "assets/directors/Дарибаев_Нуржан_Мухамеджанович.jpg",
    },

    students: 419,
    teachers: 59,

    logo: "assets/logos/Логотип_ЖСәдуақасов.jpg",
    photo: "assets/photos/Мектеп_ЖСәдуақасов.jpg",
  },
  {
    id: 11, // уникальный ID
    coordinates: [48.655404, 71.633188], // координаты пока нет

    name: "Жаңаарқа ЖББ мектебі",
    fullName:
        "Ұлытау облысы, Жаңаарқа ауданы, М.Жұмажанов ауылдық округі, Жаңаарқа жалпы білім беретін мектебі",
    yearBuilt: 1970,
    address: "С.Сейфуллин көшесі, 23 ғимарат",
    phone: "87103051183",
    email: "mektep@janaarqa.edu.kz, Zhanaarka_scool@mail.ru",

    social: {
        instagram: {
        username: "zhanaarka_jbbm",
        url: "https://www.instagram.com/zhanaarka_jbbm?igsh=ajN1Z2puZjE1ajk1&utm_source=qr",
        },
        facebook: { url: "https://www.facebook.com/zhanaarka.scool/" },
        telegram: { url: null },
    },

    director: {
        name: "Бимендина Кулшат Жакеновна",
        photo: "assets/directors/Бимендина_Кулшат_Жакеновна.jpg",
    },

    students: 169,
    teachers: 32,

    logo: "assets/logos/Логотип_Жаңаарқа.jpg",
    photo: "assets/photos/Мектеп_Жаңаарқа.jpg",
  },
  {
    id: 12, // уникальный ID
    coordinates: [48.462775, 70.225672], // координаты пока нет

    name: "Жомарт бастауыш мектебі",
    fullName:
        "Ұлытау облысы, Жаңаарқа ауданы, Жомарт ауылы, Жомарт бастауыш мектебі",
    yearBuilt: 2003,
    address: "Жомарт көшесі 4 ғ.",
    phone: "87478557624",
    email: "mektep@jomart.edu.kz",

    social: {
        instagram: {
        username: "zhanaarka_zhomartbm",
        url: "https://www.instagram.com/zhanaarka_zhomartbm?igsh=MXIxMzZxdjIxMXFhOQ%3D%3D&utm_source=qr",
        },
        facebook: { url: null },
        telegram: { url: null },
    },

    director: {
        name: "Канафина Балжан Еркиновна",
        photo: "assets/directors/Канафина_Балжан_Еркиновна.jpg",
    },

    students: 9,
    teachers: 3,

    logo: "assets/logos/Логотип_Жомарт.jpg",
    photo: "assets/photos/Мектеп_Жомарт.jpg",
  },
  {
    id: 13, // уникальный ID
    coordinates: [48.560160, 71.788345], // координаты пока нет

    name: "Көктал ЖББ мектебі",
    fullName:
        "Ұлытау облысы, Жаңаарқа ауданы, Орынбай ауылы, Көктал жалпы білім беретін мектебі",
    yearBuilt: 1986,
    address: "Мектеп көшесі 6",
    phone: "87103052189, +77712750173",
    email: "mektep@koktal.edu.kz",

    social: {
        instagram: {
        username: "kkoktalskayass25",
        url: "https://www.instagram.com/kkoktalskayass25/?hl=ru",
        },
        facebook: { url: "https://www.facebook.com/profile.php?id=100042910489457" },
        telegram: { url: null },
    },

    director: {
        name: "Кунанбаев Жасулан Жантуреевич",
        photo: "assets/directors/Кунанбаев_Жасулан_Жантуреевич.jpg",
    },

    students: 61,
    teachers: 27,

    logo: "assets/logos/Логотип_Көктал.jpg",
    photo: "assets/photos/Мектеп_Көктал.jpg",
  },
  {
    id: 14, // уникальный ID
    coordinates: [48.292923, 69.636161], // координаты пока нет

    name: "Қызылжар ЖББ мектебі",
    fullName:
      "Ұлытау облысы, Жаңаарқа ауданы, Қызылжар ауылы, Қызылжар жалпы білім беретін мектебі",
    yearBuilt: 1961,
    address: "Байдаулетов 1 үй",
    phone: "87103051125",
    email: "mektep@qyzyljar.edu.kz",

    social: {
      instagram: { url: null },
      facebook: { url: "https://www.facebook.com/share/188i4rJ1Fg/" },
      telegram: { url: null },
    },

    director: {
      name: "Каденова Гулим Ошакбаевна",
      photo: "assets/directors/Каденова_Гулим_Ошакбаевна.jpg",
    },

    students: 327,
    teachers: 39,

    logo: "assets/logos/Логотип_Қызылжар.jpg",
    photo: "assets/photos/Мектеп_Қызылжар.jpg",
  },
  {
    id: 15, // уникальный ID
    coordinates: [48.554936, 70.631953], // координаты пока нет

    name: "Манадыр негізгі орта мектебі",
    fullName:
      "Ұлытау облысы, Жаңаарқа ауданы, Актубекский с.о, ст. Манадыр, Манадыр негізгі орта мектебі",
    yearBuilt: 1939,
    address: "Тың көшесі 58",
    phone: "87103051977",
    email: "osh_manadyr@mail.ru",

    social: {
      instagram: { username: "manadyr_nom", url: "https://www.instagram.com/manadyr_nom/" },
      facebook: {
        url: "https://www.facebook.com/share/1Dcd6jGx2x/?mibextid=wwXIfr",
      },
      telegram: { url: null },
    },

    director: {
      name: "Муканов Еркин Салькенович",
      photo: "assets/directors/Муканов_Еркин_Салькенович.jpg",
    },

    students: 93,
    teachers: 18,

    logo: "assets/logos/Логотип_Манадыр.jpg",
    photo: "assets/photos/Мектеп_Манадыр.jpg",
  },
  {
    id: 16, // уникальный ID
    coordinates: [48.648827, 70.371756], // координаты пока нет

    name: "Оспан Әлібаев ЖББ мектебі",
    fullName:
      "Ұлытау облысы, Жаңаарқа ауданы, Ш.Ералиев ауылы, Оспан Әлібаев атындағы жалпы білім беретін мектебі",
    yearBuilt: 1934,
    address: "Ш.Ералиев ауылы",
    phone: "87103029582",
    email: "mektep@alibaev.edu.kz",

    social: {
      instagram: {
        username: "o.alibayev_sh.zhanaarka",
        url: "https://www.instagram.com/o.alibayev_sh.zhanaarka?igsh=eHgwZ3E0ZzE3d3Vv&utm_source=qr",
      },
      facebook: {
        url: "https://www.facebook.com/share/1AcJV1RKpQ/?mibextid=wwXIfr",
      },
      telegram: {
        url: null,
        title: "О.Әлібаев МЕКТЕП",
      },
    },

    director: {
      name: "Алин Досбол Галымович",
      photo: "assets/directors/Алин_Досбол_Галымович.jpg",
    },

    students: 330,
    teachers: 59,

    logo: "assets/logos/Логотип_Оспан_Әлібаев.jpg",
    photo: "assets/photos/Мектеп_Оспан_Әлібаев.jpg",
  },
  {
    id: 17, // уникальный ID
    coordinates: [48.686271, 71.644651], // координаты пока нет

    name: "Оразалы Жұмабеков Тірек мектебі",
    fullName:
      "Ұлытау облысы, Жаңаарқа ауданы, Оразалы Жұмабеков атындағы тірек мектебі (ресурстық орталық)",
    yearBuilt: 1928,
    address: "А.Сейдімбек 60 ү.",
    phone: "77103027542",
    email: "mektep@jumabekov.edu.kz",

    social: {
      instagram: {
        username: "o.zhumabekov_tm",
        url: "https://www.instagram.com/o.zhumabekov_tm/",
      },
      facebook: {
        url: "https://www.facebook.com/profile.php?id=100023186894850",
      },
      telegram: { url: null },
    },

    director: {
      name: "Тургимбеков Айткожа Жексенбекович",
      photo: "assets/directors/Тургимбеков_Айткожа_Жексенбекович.jpg",
    },

    students: 824,
    teachers: 71,

    logo: "assets/logos/Логотип_Оразалы_Жұмабеков.jpg",
    photo: "assets/photos/Мектеп_Оразалы_Жұмабеков.jpg",
  },
  // {
  //   id: 18, // уникальный ID
  //   coordinates: [48.683375, 71.634769], // координаты пока нет

  //   name: "Оқушылар үйі",
  //   fullName:
  //     "Ұлытау облысы, Жаңаарқа ауданы, Оқушылар үйі коммуналдық мемлекеттік қазыналық кәсіпорыны",
  //   yearBuilt: 2021,
  //   address: "А.Оспанова 36-1",
  //   phone: "87103026235",
  //   email: "domshkol_zhanaarka@mail.ru",

  //   social: {
  //     instagram: {
  //       username: "okushilar_uii_zhanaarka",
  //       url: "https://www.instagram.com/okushilar_uii_zhanaarka?utm_source=qr",
  //     },
  //     facebook: {
  //       url: "https://www.facebook.com/profile.php?id=100073614695742",
  //     },
  //     telegram: { url: null },
  //   },

  //   director: {
  //     name: "Тайкенов Дархан Есенбаевич",
  //     photo: "assets/directors/Тайкенов_Дархан_Есенбаевич.jpg",
  //   },

  //   students: 680,
  //   teachers: 19,

  //   logo: "assets/logos/Логотип_Оқушылар_үйі.jpg",
  //   photo: "assets/photos/Мекеме_Оқушылар_үйі.jpg",
  // },
  {
    id: 19, // уникальный ID
    coordinates: [48.680859, 71.649780], // координаты пока нет

    name: "Сәкен Сейфуллин ЖББ мектебі",
    fullName:
      "Ұлытау облысы, Жаңаарқа ауданы, Жаңаарқа кенті, Сәкен Сейфуллин атындағы жалпы білім беретін мектебі",
    yearBuilt: 1954,
    address: "Абай көшесі 15",
    phone: "87103026434",
    email: "sakenseyfullin2020@mail.ru",

    social: {
      instagram: {
        username: "s_seifullin_jbbm",
        url: "https://www.instagram.com/s_seifullin_jbbm?igsh=ZXk0ZmN1ZWtqNGYz",
      },
      facebook: {
        url: "https://www.facebook.com/share/1AL3mgpwWT/",
      },
      telegram: { url: null },
    },

    director: {
      name: "Рахимов Рскали Серикбаевич",
      photo: "assets/directors/Рахимов_Рскали_Серикбаевич.jpg",
    },

    students: 332,
    teachers: 65,

    logo: "assets/logos/Логотип_Сәкен_Сейфуллин.jpg",
    photo: "assets/photos/Мектеп_Сәкен_Сейфуллин.jpg",
  },
  {
    id: 20, // уникальный ID
    coordinates: [48.848796, 71.376503], // координаты пока нет

    name: "Талдыбұлақ ЖББ мектебі",
    fullName:
      "Ұлытау облысы, Жаңаарқа ауданы, Талдыбұлақ ауылы, Талдыбұлақ жалпы білім беретін мектебі",
    yearBuilt: 1933,
    address: "Тәуелсіздік 2",
    phone: "87103025726",
    email: "mektep@tbulaq.edu.kz",

    social: {
      instagram: {
        username: "taldybulak_jbbmektebi",
        url: "https://www.instagram.com/taldybulak_jbbmektebi?igsh=MXMya3Ftc2R6azVsMw==",
      },
      facebook: {
        url: "https://www.facebook.com/share/1DUSpGo9az/",
      },
      telegram: { url: null },
    },

    director: {
      name: "Тоқбергенов Нұрымхан Қазыкенұлы",
      photo: "assets/directors/Тоқбергенов_Нұрымхан_Қазыкенұлы.jpg",
    },

    students: 120,
    teachers: 30,

    logo: "assets/logos/Логотип_Талдыбұлақ.jpg",
    photo: "assets/photos/Мектеп_Талдыбұлақ.jpg",
  },
  {
    id: 21, // уникальный ID
    coordinates: [48.887667, 70.909038], // координаты пока нет

    name: "Ынталы ЖББ мектебі",
    fullName:
      "Ұлытау облысы, Жаңаарқа ауданы, Қараағаш ауылдық округі, Ынталы ауылы, Ынталы жалпы білім беретін мектебі",
    yearBuilt: 1979,
    address: "Бірлік көшесі, 13 ғимарат",
    phone: "87103024117",
    email: "mektep@intaly.edu.kz",

    social: {
      instagram: {
        username: "_intaly1979",
        url: "https://www.instagram.com/p/DHNXdpGN970/?igsh=MTZnM3U1Z3R5MXBlcw==",
      },
      facebook: {
        url: "https://www.facebook.com/share/p/1692TCKVD2/?mibextid=wwXIfr",
      },
      telegram: { url: null },
    },

    director: {
      name: "Шакенова Кулжамал Касеновна",
      photo: "assets/directors/Шакенова_Кулжамал_Касеновна.jpg",
    },

    students: 199,
    teachers: 34,

    logo: "assets/logos/Логотип_Ынталы.jpg",
    photo: "assets/photos/Мектеп_Ынталы.jpg",
  },
  {
    id: 22, // уникальный ID
    coordinates: [48.899916, 71.756931], // координаты пока нет

    name: "Ынтымақ ЖББ мектебі",
    fullName:
      "Ұлытау облысы, Жаңаарқа ауданы, Сәкен Сейфуллин ауылдық округі, Ынтымақ ауылы, Ынтымақ жалпы білім беретін мектебі",
    yearBuilt: 1985,
    address: "Жеңіс көшесі 10",
    phone: "87103024321",
    email: "mektep@yntymaq.edu.kz",

    social: {
      instagram: {
        username: "yntymaq_orta_mektebi",
        url: "https://www.instagram.com/yntymaq_orta_mektebi/"
      },
      facebook: {
        url: "https://www.facebook.com/share/1BsPPYR7GA"
      },
      telegram: { url: null },
    },

    director: {
      name: "Тезекбаева Актоты Аманжоловна",
      photo: "assets/directors/Тезекбаева_Актоты_Аманжоловна.jpg",
    },

    students: 104,
    teachers: 31,

    logo: "assets/logos/Логотип_Ынтымақ.jpg",
    photo: "assets/photos/Мектеп_Ынтымақ.jpg",
  },
  {
    id: 23, // уникальный ID
    coordinates: [48.69413781460318, 71.65868141739287], // координаты пока нет

    name: "№1 мектеп-лицейі",
    fullName:
      "Ұлытау облысы, Жаңаарқа ауданы, №1 мектеп-лицейі",
    yearBuilt: 2022,
    address: "Байдалы би көшесі 11/2",
    phone: "87103027931",
    email: "mektep@1ml.edu.kz",

    social: {
      instagram: {
        username: "1mektep_lyceum_zhanaarka",
        url: "https://www.instagram.com/1mektep_lyceum_zhanaarka/",
      },
      facebook: {
        url: "https://www.facebook.com/share/1ZSAhmUDuZ/",
      },
      telegram: { url: null },
    },

    director: {
      name: "Изтулеуов Даурен Досымович",
      photo: "assets/directors/Изтулеуов_Даурен_Досымович.jpg",
    },

    students: 876,
    teachers: 79,

    logo: "assets/logos/Логотип_№1_мектеп-лицейі.jpg",
    photo: "assets/photos/Мектеп_№1_мектеп-лицейі.jpg",
  },
  {
    id: 24, // уникальный ID
    coordinates: [48.640481, 71.377527], // координаты пока нет

    name: "№135 негізгі орта мектебі",
    fullName:
      "Ұлытау облысы, Жаңаарқа ауданы, №135 негізгі орта мектебі",
    yearBuilt: 1955,
    address: "Бейбітшілік 50",
    phone: "87103050218",
    email: "mektep@135.edu.kz",

    social: {
      instagram: {
        username: "atasu135nom",
        url: "https://www.instagram.com/atasu135nom?igsh=azMwb21wNWtsaDZy",
      },
      facebook: {
        url: "https://www.facebook.com/share/1AgEEobT6D/?mibextid=wwXIfr",
      },
      telegram: { url: null },
    },

    director: {
      name: "Садвакасова Бакытжамал Жолдасбековна",
      photo: "assets/directors/Садвакасова_Бакытжамал_Жолдасбековна.jpg",
    },

    students: 29,
    teachers: 14,

    logo: "assets/logos/Логотип_№135.jpg",
    photo: "assets/photos/Мектеп_№135.jpg",
  },
  {
    id: 25, // уникальный ID
    coordinates: [48.544886, 70.438905], // координаты пока нет

    name: "№140 негізгі орта мектебі",
    fullName:
      "Ұлытау облысы, Жаңаарқа ауданы, с. Ералиев, №140 негізгі орта мектебі",
    yearBuilt: 1954,
    address: "189 рзд, үй 27",
    phone: "87103051978",
    email: "140nm@mail.ru",

    social: {
      instagram: {
        username: "rzd189_mektebi",
        url: "https://www.instagram.com/p/DEcQNVnMPdH/?igsh=bnc2eGlveWxvcDRy",
      },
      facebook: {
        url: "https://www.facebook.com/share/r/1AcXBFzxje/?mibextid=wwXIfr",
      },
      telegram: { url: null },
    },

    director: {
      name: "Құтжанов Ислам Амангелдіұлы",
      photo: "assets/directors/Құтжанов_Ислам_Амангелдіұлы.jpg",
    },

    students: 32,
    teachers: 18,

    logo: "assets/logos/Логотип_№140.jpg",
    photo: "assets/photos/Мектеп_№140.jpg",
  },
  {
    id: 26, // уникальный ID
    coordinates: [47.916701, 69.877044], // координаты пока нет 

    name: "Кенжебай-Самай ЖББ мектебі",
    fullName:
      "Ұлытау облысы, Жаңаарқа ауданы, Кенжебай-Самай ауылы №16, Кенжебай-Самай негізгі орта мектебі",
    yearBuilt: 1973,
    address: "Кенжебай-Самай ауылы №16",
    phone: "87103051107",
    email: null,

    social: {
      instagram: {
        username: "kenzhebay_samay_mekteby75",
        url: "https://www.instagram.com/kenzhebay_samay_mekteby75/",
      },
      facebook: {
        url: "https://www.facebook.com/me/",
      },
      telegram: { url: null },
    },

    director: {
      name: "Торгаев Сейтказы Несипбекович",
      photo: "assets/directors/Торгаев_Сейтказы_Несипбекович.jpg",
    },

    students: 36,
    teachers: 17,

    logo: "assets/logos/Логотип_Кенжебай-Самай.jpg",
    photo: "assets/photos/Мектеп_Кенжебай-Самай.jpg",
  }


















];

// Карта баптаулары
const MAP_CONFIG = {
  center: [48.685862, 71.634471],
  zoom: 12,
  controls: ["zoomControl", "fullscreenControl"],
};
