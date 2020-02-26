const DefaultSettings = {
    "enabled":  true,
    "alerted":  true, // Bildschirmwarnung
    "notice":   true, // Notiz
    "messager": true, // Nachicht im Chat
    "marker":   true, // Marker über dem Mob
    "itemId":  98260, // Drachenkopf
    "bosses": [
/* ==== South ======================================================================================== */
        {huntingZoneId:   2, templateId: 1271, name: "[Acardia]Arkun(Feenwald)"},
        {huntingZoneId:   3, templateId: 1271, name: "[Acardia]Arkun(Wälder der Vergessenheit)"},
        {huntingZoneId:   5, templateId: 1271, name: "[Acardia]Arkun(Tuwangimorast)"},
        {huntingZoneId:   6, templateId: 1271, name: "[Acardia]Arkun(Tal der Titanen)"},
        {huntingZoneId:   7, templateId: 1271, name: "[Acardia]Arkun(Himmelshügel)"},
        {huntingZoneId:   4, templateId: 1271, name: "[Ostgarath]Ithor(Fyrkuppe)"},
        {huntingZoneId:   9, templateId: 1271, name: "[Ostgarath]Ithor(Geschwungenes Tal)"},
        {huntingZoneId:  10, templateId: 1271, name: "[Ostgarath]Ithor(Schlangeninsel)"},
        {huntingZoneId:  11, templateId: 1271, name: "[Ostgarath]Ithor(Piratengrotte)"},
        {huntingZoneId:  12, templateId: 1271, name: "[Ostgarath]Ithor(Nebelmoorinsel)"},
        {huntingZoneId:  15, templateId: 1271, name: "[Poporia]Poreta(Klippen des Wahnsinns)"},
        {huntingZoneId:  16, templateId: 1271, name: "[Poporia]Poreta(Reißertal)"},
        {huntingZoneId:  17, templateId: 1271, name: "[Poporia]Poreta(Paraanonschlucht)"},
        {huntingZoneId:  23, templateId: 1271, name: "[Poporia]Poreta(See der Tränen)"},
        {huntingZoneId:  18, templateId: 1271, name: "[Val Aureum]Biadung(Kolossale Ruinen)"},
        {huntingZoneId:  19, templateId: 1271, name: "[Val Aureum]Biadung(Freilande)"},
        {huntingZoneId:  21, templateId: 1271, name: "[Val Aureum]Biadung(Basiliskenhang)"},
        {huntingZoneId:  24, templateId: 1271, name: "[Val Aureum]Biadung(Aurumpfad)"},
/* ==== 夏拉南部 ======================================================================================== */
        {huntingZoneId:  26, templateId: 1271, name: "[Essenia]Essart(Essenia)"},
        {huntingZoneId:  27, templateId: 1271, name: "[Essenia]Essart(Essenischer Kamm)"},
        {huntingZoneId:  28, templateId: 1271, name: "[Essenia]Essart(Schandholz)"},
        {huntingZoneId:  29, templateId: 1271, name: "[Essenia]Essart(Zeitlose Wälder)"},
        {huntingZoneId:  30, templateId: 1271, name: "[Veritas]Versa(Balders Zuflucht)"},
        {huntingZoneId:  31, templateId: 1271, name: "[Westonia]Storan(Sturmebene)"},
        {huntingZoneId:  32, templateId: 1271, name: "[Westonia]Storan(Berg Tyrannas)"},
        {huntingZoneId:  34, templateId: 1271, name: "[Westonia]Storan(Frostweiten)"},
        {huntingZoneId:  35, templateId: 1271, name: "[Val Elenium]Biase(Würmlingsklamm)"},
        {huntingZoneId:  36, templateId: 1271, name: "[Val Elenium]Biase(Tor Exsul)"},
        {huntingZoneId:  38, templateId: 1271, name: "[Val Elenium]Biase(Siennaschlucht)"},
        {huntingZoneId:  40, templateId: 1271, name: "[Val Palrada]Paneva(Quarantänezone)"},
        {huntingZoneId:  41, templateId: 1271, name: "[Val Palrada]Paneva(Wildes Tal)"},
/* ==== 夏拉北部 ======================================================================================== */
        {huntingZoneId:  45, templateId: 1271, name: "[Val Tirakai]Lotica(Knechtfeste)"},
        {huntingZoneId:  47, templateId: 1271, name: "[Val Tirakai]Lotica(Unterholz von Tirkai)"},
        {huntingZoneId:  48, templateId: 1271, name: "[Helkan]Herkun(Khanovarfront)"},
        {huntingZoneId:  49, templateId: 1271, name: "[Val Kaeli]Rocanum(Argonea)"},
        {huntingZoneId:  50, templateId: 1271, name: "[Val Kaeli]Rocanum(Granarkus)"},
        {huntingZoneId:  51, templateId: 1271, name: "[Lorcada]Roakun(Tal der Spitzen)"},
        {huntingZoneId:  52, templateId: 1271, name: "[Lorcada]Roakun(Ebene der Verdammten)"},
        {huntingZoneId:  54, templateId: 1271, name: "[Sylvanoth]Silveta(Feendickicht)"},
        {huntingZoneId:  55, templateId: 1271, name: "[Sylvanoth]Silveta(Finsterwald)"},
        {huntingZoneId:  56, templateId: 1271, name: "[Sylvanoth]Silveta(Susurrus Hain)"},
        {huntingZoneId:  57, templateId: 1271, name: "[Sylvanoth]Silveta(Amena Quatla)"},
/* ===== 亚伦北部 ======================================================================================= */
        {huntingZoneId: 172, templateId: 1271, name: "[Val Oriyn]Bareku(Wildlande)"},
        {huntingZoneId: 181, templateId: 1271, name: "[Val Oriyn]Bareku(Ex Prima)"},
        {huntingZoneId: 182, templateId: 1271, name: "[Val Oriyn]Bareku(Tal des Frühlings)"},
        {huntingZoneId: 183, templateId: 1278, name: "[Val Oriyn]Bareku(Höhenwacht)"},
        {huntingZoneId: 191, templateId: 1271, name: "[Val Oriyn]Bareku(Arx Umbra)"},
/* ==== 保護領地 ======================================================================================== */
        {huntingZoneId:  13, templateId: 1271, name: "[Insel der Dämmerung]Bardung(Insel der Dämmerung)"},
/* ==== 直辖領地 ======================================================================================== */
        {huntingZoneId:  63, templateId: 1278, name: "[Hauptstadt]Berakun(Velika)"},
        {huntingZoneId:  72, templateId: 1278, name: "[Hauptstadt]Alluma(Allemantheia)"},
        {huntingZoneId:  84, templateId: 1278, name: "[Hauptstadt]Caidera(Kaiator)"},
/* ==== Geheimhändler ======================================================================================== */
        {huntingZoneId:  63, templateId: 1271, name: "Geheimhändler(Petil-1)"},
        {huntingZoneId:  63, templateId: 1279, name: "Geheimhändler(Petil-2)"},
        {huntingZoneId:  72, templateId: 1271, name: "Geheimhändler(Hyumo)"},
        {huntingZoneId:  84, templateId: 1271, name: "Geheimhändler(Kayle)"},
        {huntingZoneId: 183, templateId: 1271, name: "Geheimhändler(Johndo)"},
/* ==== Lieferanten-Goblin ====================================================================================== */
        {huntingZoneId:  63, templateId: 1276, logTime: 0, name: "1-Lieferanten-Goblin(V)"},
        {huntingZoneId:  63, templateId: 1284,             name: "1-Lieferanten-Goblin(V)"},
        {huntingZoneId:  84, templateId: 1276, logTime: 0, name: "2-Lieferanten-Goblin(K)"},
        {huntingZoneId:  72, templateId: 1276, logTime: 0, name: "3-Lieferanten-Goblin(A)"},
        {huntingZoneId: 183, templateId: 1276, logTime: 0, name: "4-Lieferanten-Goblin(HW)"},
/* ==== 世界BOSS ======================================================================================== */
        {huntingZoneId:  26, templateId: 5001, logTime: 0, name: "Ortan(Heiliges Becken)"},
        {huntingZoneId:  39, templateId:  501, logTime: 0, name: "Hazarr(Arachnaea)"},
        {huntingZoneId:  51, templateId: 4001, logTime: 0, name: "Kelros(Tal der Spitzen)"}
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
