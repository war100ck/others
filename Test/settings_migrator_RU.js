const DefaultSettings = {
    "enabled":  true,
    "alerted":  true, // Flashalert
    "notice":   true, // Notice
    "party":   false, // PARTY
    "messager": true, // Message 
    "marker":   true, // Marker
    "itemId":  98260, // Vergos's Head
    "bosses": [
        {huntingZoneId: 10,   templateId:       99, name: "(Остров Серпентис) Божественный грабитель"},
        {huntingZoneId: 4,    templateId:     5011, name: "(Фирмаунт) Бурный канаш"},
        {huntingZoneId: 38,   templateId:       35, name: "(Каньон Сиенна) Nyxarras"},
        {huntingZoneId: 57,   templateId:       33, name: "(Амена-Кватла) Бетсаэль"},
        {huntingZoneId: 51,   templateId:     7011, name: "(Долина пиков) Линифи"},
        {huntingZoneId: 52,   templateId:     9050, name: "(Долина Проклятых) Юнарас Зубастый"},
        {huntingZoneId: 1023, templateId:     3000, name: "(Event) Phantom of Doliwyn"},
        {huntingZoneId: 1023, templateId: 20150805, name: "(Event) Phantom of Doliwyn"},
        {huntingZoneId: 1023, templateId: 88888888, name: "(Event) Treasure Chest"},
        {huntingZoneId: 1023, templateId: 88888889, name: "(Event) Treasure Chest"},
        {huntingZoneId: 1023, templateId:   160341, name: "(Event) Santa"},
        {huntingZoneId: 1023, templateId: 99999997, name: "(Event) Greedy Santa"},
        {huntingZoneId: 1023, templateId: 99999998, name: "(Event) Santa Claus"},
        {huntingZoneId: 1023, templateId: 99999991, name: "(Event) Sinus the Egg Thief"},
        {huntingZoneId: 1023, templateId: 99999992, name: "(Event) Sinus the Egg Thief"},
        {huntingZoneId: 1023, templateId: 99999999, name: "(Event) Sinus the Egg Thief"},
        {huntingZoneId:  183, templateId:     6002, name: "(Event) Airdrop"},
/* ==== Север ======================================================================================== */
        {huntingZoneId:   2, templateId: 1271, name: "[Аркадия]Аркун(Дивный лес)"},
        {huntingZoneId:   3, templateId: 1271, name: "[Аркадия]Аркун(Леса Забвения)"},
        {huntingZoneId:   5, templateId: 1271, name: "[Аркадия]Аркун(Трясина Туванги)"},
        {huntingZoneId:   6, templateId: 1271, name: "[Аркадия]Аркун(Долина титанов)"},
        {huntingZoneId:   7, templateId: 1271, name: "[Аркадия]Аркун(Небесные холмы)"},
        {huntingZoneId:   4, templateId: 1271, name: "[Остгарат]Иторо(Фирмаунт)"},
        {huntingZoneId:   9, templateId: 1271, name: "[Остгарат]Иторо(Долина Вознесения)"},
        {huntingZoneId:  10, templateId: 1271, name: "[Остгарат]Иторо(Остров Серпентис)"},
        {huntingZoneId:  11, templateId: 1271, name: "[Остгарат]Иторо(Изрезанный берег/Грот Пиратов)"},
        {huntingZoneId:  12, templateId: 1271, name: "[Остгарат]Иторо(Остров Мистмур)"},
        {huntingZoneId:  15, templateId: 1271, name: "[Попория]Форета(Утесы Безумия)"},
        {huntingZoneId:  16, templateId: 1271, name: "[Попория]Форета(Долина Клыка)"},
        {huntingZoneId:  17, templateId: 1271, name: "[Попория]Форета(Ущелье Параанон)"},
        {huntingZoneId:  23, templateId: 1271, name: "[Попория]Форета(Озеро слез)"},
        {huntingZoneId:  18, templateId: 1271, name: "[Вал-Ауреум]Виадун(Исполинские развалины)"},
        {huntingZoneId:  19, templateId: 1271, name: "[Вал-Ауреум]Виадун(Вольноземье)"},
        {huntingZoneId:  21, templateId: 1271, name: "[Вал-Ауреум]Виадун(Утес Василисков)"},
        {huntingZoneId:  24, templateId: 1271, name: "[Вал-Ауреум]Виадун(Аурумская дорога)"},
/* ==== Южная шара ======================================================================================== */
        {huntingZoneId:  26, templateId: 1271, name: "[Эссения]Эсат(Блаженное озеро)"},
        {huntingZoneId:  27, templateId: 1271, name: "[Эссения]Эсат(Эссенийский хребет)"},
        {huntingZoneId:  28, templateId: 1271, name: "[Эссения]Эсат(Гибельный лес)"},
        {huntingZoneId:  29, templateId: 1271, name: "[Эссения]Эсат(Извечный лес)"},
        {huntingZoneId:  30, templateId: 1271, name: "[Веритас]Вэлса(Убежище Балдера)"},
		{huntingZoneId:  31, templateId: 1271, name: "[Веритас]Вэлса(Предел Бурь)"},
        {huntingZoneId:  31, templateId: 1271, name: "[Вестония]Сторан(Предел Бурь)"},
        {huntingZoneId:  32, templateId: 1271, name: "[Вестония]Сторан(Гора Тираннас)"},
        {huntingZoneId:  34, templateId: 1271, name: "[Вестония]Сторан(Морозный предел)"},
        {huntingZoneId:  35, templateId: 1271, name: "[Валлениум]Виас(Вирмово ущелье)"},
        {huntingZoneId:  36, templateId: 1271, name: "[Валлениум]Виас(Тор-Эксул)"},
        {huntingZoneId:  38, templateId: 1271, name: "[Валлениум]Виас(Каньон Сиенна)"},
        {huntingZoneId:  40, templateId: 1271, name: "[Вал-Палрада]Ваннева(Зона карантина)"},
        {huntingZoneId:  41, templateId: 1271, name: "[Вал-Палрада]Ваннева(Свирепая долина)"},
/* ==== Северная Шара ======================================================================================== */
        {huntingZoneId:  45, templateId: 1271, name: "[Вал-Тиркай]Лотика(Питомник аргонов)"},
        {huntingZoneId:  47, templateId: 1271, name: "[Вал-Тиркай]Лотика(Лес Тиркай)"},
        {huntingZoneId:  48, templateId: 1271, name: "[Хелкан]Хелкун(Хановарские предместья)"},
        {huntingZoneId:  49, templateId: 1271, name: "[Вал-Кэли]Тезлуар(Аргония)"},
        {huntingZoneId:  50, templateId: 1271, name: "[Вал-Кэли]Тезлуар(Гранаркус)"},
        {huntingZoneId:  51, templateId: 1271, name: "[Лоркада]Лоакун(Долина пиков)"},
        {huntingZoneId:  52, templateId: 1271, name: "[Лоркада]Лоакун(Долина Проклятых)"},
        {huntingZoneId:  54, templateId: 1271, name: "[Силванот]Силвета(Силивуд)"},
        {huntingZoneId:  55, templateId: 1271, name: "[Силванот]Силвета(Дрожащий лес)"},
        {huntingZoneId:  56, templateId: 1271, name: "[Силванот]Силвета(Шепчущие леса)"},
        {huntingZoneId:  57, templateId: 1271, name: "[Силванот]Силвета(Амена-Кватла)"},
/* ===== Северный Арун ======================================================================================= */
        {huntingZoneId: 172, templateId: 1271, name: "[Вал-Орин]Варэку(Дикарский Предел)"},
        {huntingZoneId: 181, templateId: 1271, name: "[Вал-Орин]Варэку(Экс-Прима)"},
        {huntingZoneId: 182, templateId: 1271, name: "[Вал-Орин]Варэку(Долина Источников)"},
        {huntingZoneId: 183, templateId: 1278, name: "[Вал-Орин]Варэку(Окрестности Верхнего Дозора)"},
        {huntingZoneId: 191, templateId: 1271, name: "[Вал-Орин]Варэку(Аркс-Умбра)"},
/* ==== 保護領地 ======================================================================================== */
        {huntingZoneId:  13, templateId: 1271, name: "[Остров Зари]Бардун(Остров Зари)"},
/* ==== 直辖領地 ======================================================================================== */
        {huntingZoneId:  63, templateId: 1278, name: "[Велика]Веракун(Велика)"},
        {huntingZoneId:  72, templateId: 1278, name: "[Аллемантея]Аллума(Аллемантея)"},
        {huntingZoneId:  84, templateId: 1278, name: "[Кайатор]Кай Тера(Кайатор)"},
/* ==== Тайный торговец ======================================================================================== */
        {huntingZoneId:  63, templateId: 1271, name: "Тайный торговец(Питер Бэйл-1)(Велика)"},
        {huntingZoneId:  63, templateId: 1279, name: "Тайный торговец(Питер Бэйл-2)(Велика)"},
        {huntingZoneId:  72, templateId: 1271, name: "Тайный торговец(Хью Моск)(Аллемантея)"},
        {huntingZoneId:  84, templateId: 1271, name: "Тайный торговец(Кейл Лунный свет)(Кайатор)"},
        {huntingZoneId: 183, templateId: 1271, name: "Тайный торговец(Джон Доу)(Окрестности Верхнего Дозора)"},
/* ==== Гоблин, ответственный за доставку ====================================================================================== */
        {huntingZoneId:  63, templateId: 1276, logTime: 0, name: "1-Тайный рынок(Велика)"},
        {huntingZoneId:  63, templateId: 1284,             name: "1-Тайный рынок(Велика)"},
        {huntingZoneId:  84, templateId: 1276, logTime: 0, name: "2-Тайный рынок(Кайатор)"},
        {huntingZoneId:  72, templateId: 1276, logTime: 0, name: "3-Тайный рынок(Аллемантея)"},
        {huntingZoneId: 183, templateId: 1276, logTime: 0, name: "4-Тайный рынок(Окрестности Верхнего Дозора)"},
/* ==== World Boss ======================================================================================== */
        {huntingZoneId:  26, templateId: 5001, logTime: 0, name: "Ортан [ Блаженное озеро в Эссении]"},
        {huntingZoneId:  39, templateId:  501, logTime: 0, name: "Хазар [Зона карантина в Валь-Пальраде]"},
        {huntingZoneId:  51, templateId: 4001, logTime: 0, name: "Кэлос [Долина пиков или Долина Проклятых в Лоркаде]"},
/* ==== Битва за Велику ======================================================================================== */
        {huntingZoneId:  29, templateId: 2001, name: "Ананша(Извечный лес)"},
        {huntingZoneId:  34, templateId: 2002, name: "Фрайгарас(Морозный предел)"},
        {huntingZoneId:  34, templateId: 2003, name: "Сабранак(Морозный предел)"},
        {huntingZoneId: 152, templateId: 2001, name: "Ананша(Битва за Велику)152-2001"},
        {huntingZoneId: 152, templateId: 2002, name: "Фрайгарас(Битва за Велику)152-2002"},
        {huntingZoneId: 152, templateId: 2003, name: "Сабранак(Битва за Велику)152-2003"},
        {huntingZoneId: 152, templateId: 7001, name: "Ананша(Битва за Велику)152-7001"},
        {huntingZoneId: 152, templateId: 7002, name: "Фрайгарас(Битва за Велику)152-7002"},
        {huntingZoneId: 152, templateId: 7003, name: "Сабранак(Битва за Велику)152-7003"},
/* ==== Редкие монстры в окрестностях Экзодора ======================================================================================== */
        {huntingZoneId: 2020, templateId: 1100, name: "Элитный высший дракон-преследователь"},
        {huntingZoneId: 2020, templateId: 1101, name: "Элитный высший дракон-советник"},
        {huntingZoneId: 2020, templateId: 1102, name: "Элитный высший дракон-покоритель"},
        {huntingZoneId: 2020, templateId: 1200, name: "Элитный наг-жрец"},
        {huntingZoneId: 2020, templateId: 1201, name: "Элитный наг-рыцарь"},
        {huntingZoneId: 2020, templateId: 1202, name: "Элитный наг-пристав"},
        {huntingZoneId: 2020, templateId: 1300, name: "Манук"},
        {huntingZoneId: 2020, templateId: 1400, name: "Аксилоп"},
        {huntingZoneId: 2020, templateId: 1500, name: "Джемезис"},
        {huntingZoneId: 2020, templateId: 1600, name: "Взбешенный красный лишайник"},
        {huntingZoneId: 2020, templateId: 1601, name: "Циклоп"},
        {huntingZoneId: 2020, templateId: 1700, name: "Бэкис"}
    ]
};

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
    if (from_ver === undefined) {
        // Migrate legacy config file
        return Object.assign(Object.assign({}, DefaultSettings), settings);
    } else if (from_ver === null) {
        // No config file exists, use default settings
        return DefaultSettings;
    } else {
        // Migrate from older version (using the new system) to latest one
        if (from_ver + 1 < to_ver) { // Recursively upgrade in one-version steps
            settings = MigrateSettings(from_ver, from_ver + 1, settings);
            return MigrateSettings(from_ver + 1, to_ver, settings);
        }
        // If we reach this point it's guaranteed that from_ver === to_ver - 1, so we can implement
        // a switch for each version step that upgrades to the next version. This enables us to
        // upgrade from any version to the latest version without additional effort!
        switch (to_ver) {
            default:
                let oldsettings = settings
                settings = Object.assign(DefaultSettings, {});
                for (let option in oldsettings) {
                    if (option == "bosses") continue
                    if (settings[option]) {
                        settings[option] = oldsettings[option]
                    }
                }
                break;
        }
        return settings;
    }
}
