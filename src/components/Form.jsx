import React, { useEffect, useRef, useState } from "react";

import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { data } from "../data.js";

const wilayaCommuneInfo = [
  {
    id: "",
    name: "",
    com: "",
  },
  {
    id: 1,
    name: "Adrar",
    com1: "Adrar",
    com2: "Akabli",
    com3: "Aoulef",
    com4: "Bouda",
    com5: "Fenoughil",
    com6: "In Zghmir",
    com7: "Ouled Ahmed Timmi",
    com8: "Reggane ",
    com9: "Sali",
    com10: "Sebaa",
    com11: "Tamantit",
    com12: "Tamest",
    com13: "Tit",
    com14: "Tsabit",
    com15: "Zaouiet Kounta",
  },
  {
    id: 2,
    name: "Chlef",
    com1: "Chlef",
    com2: "Abou El Hassan",
    com3: "Ain Merane",
    com4: "Benairia",
    com5: "Beni Bouattab",
    com6: "Beni Haoua",
    com7: "Beni Rached",
    com8: "Boukadir ",
    com9: "Bouzeghaia",
    com10: "Breira",
    com11: "Chettia",
    com12: "Dahra",
    com13: "El Hadjadj",
    com14: "El Karimia",
    com15: "El Marsa",
    com16: "Harchoun",
    com17: "Herenfa",
    com18: "Labiod Medjadja",
    com19: "Moussadek",
    com20: "Oued Fodda",
    com21: "Oued Goussine",
    com22: "Oued Sly",
    com23: "Ouled Abbes",
    com24: "Ouled Ben Abdelkader",
    com25: "Ouled Fares",
    com26: "Oum Drou",
    com27: "Sendjas",
    com28: "Sidi Abderrahmane",
    com29: "Sidi Akkacha",
    com30: "Sobha",
    com31: "Tadjena",
    com32: "Talassa",
    com33: "Taougrite",
    com34: "Tenes",
    com35: "Zeboudja",
  },
  {
    id: 3,
    name: "Laghouat",
    com1: "Aflou",
    com2: "Ain Mahdi",
    com3: "Ain Sidi Ali",
    com4: "Beidha",
    com5: "Benacer Benchohra",
    com6: "Brida ",
    com7: "El Assafia",
    com8: "El Ghicha",
    com9: "El Haouaita",
    com10: "Gueltat Sidi Saad",
    com11: "Hadj Mechri",
    com12: "Hassi Delaa",
    com13: "Hassi R'mel",
    com14: "Kheneg",
    com15: "Ksar El Hirane",
    com16: "Laghouat ",
    com17: "Oued M'zi",
    com18: "Oued Morra",
    com19: "Sebgag ",
    com20: "Sidi Bouzid ",
    com21: "Sidi Makhlouf",
    com22: "Tadjemout",
    com23: "Tadjrouna",
    com24: "Taouiala",
  },
  {
    id: 4,
    name: "Oum El Bouaghi ",
    com1: "Ain Babouche",
    com2: "Ain Beida ",
    com3: "Ain Diss",
    com4: "Ain Fekroune",
    com5: "Ain Kercha",
    com6: "Ain M'lila",
    com7: "Ain Zitoun",
    com8: "Behir Chergui",
    com9: "Berriche",
    com10: "Bir Chouhada",
    com11: "Dhala",
    com12: "El Amiria",
    com13: "El Belala",
    com14: "El Djazia",
    com15: "El Fedjoudj Boughrara Sa",
    com16: "El Harmilia",
    com17: "Fkirina ",
    com18: "Hanchir Toumghani ",
    com19: "Ksar Sbahi",
    com20: "Meskiana",
    com21: "Oued Nini",
    com22: "Ouled Gacem",
    com23: "Ouled Hamla ",
    com24: "Ouled Zouai ",
    com25: "Oum El Bouaghi ",
    com26: "Rahia ",
    com27: "Sigus",
    com28: "Souk Naamane",
    com29: "Zorg",
  },
  {
    id: 5,
    name: "Batna",
    com1: "",
    com2: "Ain Djasser",
    com3: "Ain Touta ",
    com4: "Ain Yagout",
    com5: "Arris",
    com6: "Azil Abedelkader",
    com7: "Barika",
    com8: "Batna",
    com9: "Beni Foudhala El Hakania",
    com10: "Bitam",
    com11: "Boulhilat",
    com12: "Boumagueur",
    com13: "Boumia",
    com14: "Bouzina",
    com15: "Chemora",
    com16: "Chir",
    com17: "Djerma",
    com18: "Djezzar",
    com19: "El Hassi",
    com20: "El Madher",
    com21: "Fesdis",
    com22: "Foum Toub ",
    com23: "Ghassira ",
    com24: "Gosbat",
    com25: "Guigba",
    com26: "Hidoussa",
    com27: "Ichmoul ",
    com28: "Inoughissen",
    com29: "Kimmel",
    com30: "Ksar Bellezma",
    com31: "Larbaa",
    com32: "Lazrou",
    com33: "Lemsane",
    com34: "M Doukal",
    com35: "Maafa",
    com36: "Menaa",
    com37: "Merouana",
    com38: "N Gaous",
    com39: "Oued Chaaba",
    com40: "Oued El Ma",
    com41: "Oued Taga",
    com42: "Ouled Ammar",
    com43: "Ouled Aouf",
    com44: "Ouled Fade",
    com45: "Ouled Sellem",
    com46: "Ouled Si Slimane",
    com47: "Ouyoun El Assafir",
    com48: "Rahbat",
    com49: "Ras El Aioun",
    com50: "Sefiane",
    com51: "Seggana",
    com52: "Seriana",
    com53: "T Kout",
    com54: "Talkhamt",
    com55: "Taxlent",
    com56: "Tazoult",
    com57: "Teniet El Abed",
    com58: "Tighanimine",
    com59: "Tigharghar",
    com60: "Tilatou",
    com61: "Timgad",
    com62: "Zanet El Beida",
  },
  {
    id: 6,
    name: "Bejaia",
    com1: "Adekar",
    com2: "Ait R'zine",
    com3: "Ait Smail",
    com4: "Akbou",
    com5: "Akfadou",
    com6: "Amalou",
    com7: "Amizour",
    com8: "Aokas",
    com9: "Barbacha",
    com10: "Bejaia",
    com11: "Beni Dejllil",
    com12: "Beni K'sila",
    com13: "Beni Mallikeche",
    com14: "Benimaouche",
    com15: "Boudjellil",
    com16: "Bouhamza",
    com17: "Boukhelifa",
    com18: "Chellata",
    com19: "Chemini",
    com20: "Darghina",
    com21: "Dra El Caid",
    com22: "El Kseur",
    com23: "Fenaia Il Maten",
    com24: "Feraoun",
    com25: "Ighil Ali",
    com26: "Ighram",
    com27: "Kendira",
    com28: "Kherrata",
    com29: "Leflaye",
    com30: "M'cisna",
    com31: "Melbou",
    com32: "Oued Ghir",
    com33: "Ouzellaguene",
    com34: "Seddouk",
    com35: "Sidi Aich",
    com36: "Sidi Ayad",
    com37: "Smaoun",
    com38: "Souk El Tenine",
    com39: "Souk Oufella",
    com40: "Tala Hamza",
    com41: "Tamokra",
    com42: "Tamridjet",
    com43: "Taourit Ighil",
    com44: "Taskriout",
    com45: "Tazmalt",
    com46: "Tibane",
    com47: "Tichy",
    com48: "Tifra",
    com49: "Timezrit",
    com50: "Tinebdar",
    com51: "Tizi N'berber",
    com52: "Toudja",
  },
  {
    id: 7,
    name: "Biskra",
    com1: "Ain Naga",
    com2: "Ain Zaatout",
    com3: "Biskra",
    com4: "Bordj Ben Azzouz",
    com5: "Bouchagroun",
    com6: "Branis",
    com7: "Chetma",
    com8: "Djemorah",
    com9: "El Feidh",
    com10: "El Ghrous",
    com11: "El Hadjab",
    com12: "El Haouch",
    com13: "El Kantara",
    com14: "El Outaya",
    com15: "Foughala",
    com16: "Khenguet Sidi Nadji",
    com17: "Lichana",
    com18: "Lioua",
    com19: "M'chouneche",
    com20: "M'lili",
    com21: "Mekhadma",
    com22: "Meziraa",
    com23: "Oumache",
    com24: "Ourlal ",
    com25: "Sidi Okba",
    com26: "Tolga",
    com27: "Zeribet El Oued",
  },
  {
    id: 8,
    name: "Bechar",
    com1: "Abadla",
    com2: "Bechar",
    com3: "Beni Ounif",
    com4: "Boukais",
    com5: "Erg Ferradj",
    com6: "Kenadsa",
    com7: "Lahmar",
    com8: "Mechraa H.boumediene",
    com9: "Meridja",
    com10: "Mogheul",
    com11: "Taghit",
  },
  {
    id: 9,
    name: "Blida",
    com1: "Ain Romana",
    com2: "Beni Mered",
    com3: "Beni Tamou",
    com4: "Benkhelil ",
    com5: "Blida",
    com6: "Bouarfa",
    com7: "Boufarik",
    com8: "Bougara",
    com9: "Bouinan",
    com10: "Chebli",
    com11: "Chiffa",
    com12: "Chrea",
    com13: "Djebabra",
    com14: "El Affroun",
    com15: "Guerrouaou",
    com16: "Hammam Melouane",
    com17: "Larbaa",
    com18: "Meftah",
    com19: "Mouzaia",
    com20: "Oued Djer",
    com21: "Oued El Alleug",
    com22: "Ouled Slama",
    com23: "Ouled Yaich",
    com24: "Souhane",
    com25: "Souma",
  },
  {
    id: 10,
    name: "Bouira",
    com1: "Aghbalou",
    com2: "Ahl El Ksar",
    com3: "Ain Bessem ",
    com4: "Ain El Hadjar",
    com5: "Ain Laloui",
    com6: "Ain Turk",
    com7: "Ait Laaziz",
    com8: "Aomar",
    com9: "Bechloul",
    com10: "Bir Ghbalou",
    com11: "Bordj Okhriss",
    com12: "Bouderbala",
    com13: "Bouira",
    com14: "Boukram",
    com15: "Chorfa",
    com16: "Dechmia",
    com17: "Dirah",
    com18: "Djebahia",
    com19: "El Adjiba",
    com20: "El Asnam",
    com21: "El Hachimia",
    com22: "El Hakimia ",
    com23: "El Khabouzia",
    com24: "El Mokrani ",
    com25: "Guerrouma",
    com26: "Hadjera Zerga",
    com27: "Haizer",
    com29: "Hanif",
    com28: "Kadiria",
    com30: "Lakhdaria",
    com31: "M Chedallah",
    com32: "Maala",
    com33: "Mamora",
    com34: "Mezdour",
    com35: "Oued El Berdi",
    com36: "Ouled Rached",
    com37: "Raouraoua",
    com38: "Ridane",
    com39: "Saharidj",
    com40: "Souk El Khemis",
    com41: "Sour El Ghozlane",
    com42: "Taghzout",
    com43: "Taguedite",
    com44: "Taourirt",
    com45: "Z'barbar",
  },
  {
    id: 11,
    name: "Tamanrasset",
    com1: "Abalessa",
    com2: "Ain Amgue",
    com3: "Idles",
    com4: "Tamanrasset",
    com5: "Tazrouk",
  },
  {
    id: 12,
    name: "Tebessa",
    com1: "Ain Zerga",
    com2: "Bedjene",
    com3: "Bekkaria",
    com4: "Bir Dheheb",
    com5: "Bir El Ater",
    com6: "Bir Mokkadem",
    com7: "Boukhadra",
    com8: "Boulhaf Dyr",
    com9: "Cheria",
    com10: "El Aouinet",
    com11: "El Houidjbet",
    com12: "El Kouif",
    com13: "El Malabiod",
    com14: "El Meridj",
    com15: "El Mezeraa",
    com16: "El Ogla",
    com17: "El Ogla El Malha",
    com18: "Ferkane",
    com19: "Guorriguer",
    com20: "Hammamet",
    com21: "Morssot",
    com22: "Negrine",
    com23: "Ouenza",
    com24: "Oum Ali",
    com25: "Saf Saf El Ouesra",
    com26: "Stah Guentis",
    com27: "Tebessa",
    com28: "Telidjen",
  },
  {
    id: 13,
    name: "Tlemcen",
    com1: "Ain Fettah ",
    com2: "Ain Fezza",
    com3: "Ain Ghoraba",
    com4: "Ain Kebira",
    com5: "Ain Nehala",
    com6: "Ain Tallout",
    com7: "Ain Youcef",
    com8: "Amieur",
    com9: "Azails",
    com10: "Bab El Assa",
    com11: "Beni Bahdel",
    com12: "Beni Boussaid",
    com13: "Beni Khaled",
    com14: "Beni Mester",
    com15: "Beni Ouarsous",
    com16: "Beni Smiel",
    com17: "Beni Snous",
    com18: "Bensekrane",
    com19: "Bouhlou",
    com20: "Bouihi",
    com21: "Chetouane",
    com22: "Dar Yaghmouracene",
    com23: "Djebala",
    com24: "El Aricha",
    com25: "El Fehoul",
    com26: "El Gor",
    com27: "Fellaoucene",
    com28: "Ghazaouet",
    com29: "Hammam Boughrara",
    com30: "Hennaya",
    com100: "Honaine",
    com101: "Maghnia",
    com102: "Mansourah",
    com103: "Marsa Ben M'hidi",
    com104: "Msirda Fouaga",
    com105: "Nedroma",
    com106: "Oued Chouly",
    com107: "Ouled Mimoun",
    com108: "Ouled Riyah",
    com109: "Remchi",
    com110: "Sabra",
    com111: "Sebbaa Chioukh",
    com112: "Sebdou",
    com113: "Sidi Abdelli ",
    com114: "Sidi Djilali",
    com115: "Sidi Medjahed",
    com1116: "Souahlia",
    com117: "Souani",
    com118: "Souk Tleta",
    com119: "Terny Beni Hediel",
    com120: "Tianet",
    com122: "Tlemcen",
    com123: "Zenata",
  },
  {
    id: 14,
    name: "Tiaret",
    com1: "Ain Bouchekif ",
    com2: "Ain Deheb",
    com3: "Ain El Hadid",
    com4: "Ain Kermes",
    com5: "Ain Zarit",
    com6: "Bougara",
    com7: "Chehaima",
    com8: "Dahmouni",
    com9: "Djebilet Rosfa",
    com10: "Djillali Ben Amar",
    com11: "Faidja",
    com12: "Frenda",
    com13: "Guertoufa",
    com14: "Hamadia",
    com15: "Ksar Chellala",
    com16: "Madna",
    com17: "Mahdia",
    com18: "Mechraa Safa",
    com19: "Medrissa",
    com20: "Medroussa",
    com21: "Meghila",
    com22: "Mellakou",
    com23: "Nadorah",
    com24: "Naima",
    com25: "Oued Lilli ",
    com26: "Rahouia",
    com27: "Rechaiga",
    com28: "Sebaine",
    com29: "Sebt",
    com30: "Serghine",
    com31: "Si Abdelghani",
    com32: "Sidi Abderrahmane",
    com33: "Sidi Ali Mellal",
    com34: "Sidi Bakhti",
    com35: "Sidi Hosni",
    com36: "Sougueur",
    com37: "Tagdemt",
    com38: "Takhemaret",
    com39: "Tiaret",
    com40: "Tidda",
    com41: "Tousnina",
    com42: "Zmalet El Emir Abdelkade",
  },
  {
    id: 15,
    name: "Tizi Ouzou",
    com1: "Abi Youcef",
    com2: "Aghribs",
    com3: "Agouni Gueghrane",
    com4: "Ain El Hammam",
    com5: "Ain Zaouia",
    com6: "Ait Aggouacha",
    com7: "Ait Bouaddou",
    com8: "Ait Boumehdi",
    com9: "Ait Chafaa",
    com10: "Ait Khellili ",
    com11: "Ait Mahmoud ",
    com12: "Ait Oumalou",
    com13: "Ait Toudert",
    com14: "Ait Yahia",
    com15: "Ait Yahia Moussa",
    com16: "Akbil",
    com17: "Akerrou",
    com18: "Assi Youcef",
    com19: "Azazga ",
    com21: "Azeffoun",
    com22: "Beni Aissi ",
    com23: "Beni Douala ",
    com24: "Beni Yenni",
    com25: "Beni Zikki",
    com26: "Beni Zmenzer",
    com27: "Boghni",
    com28: "Boudjima",
    com29: "Bounouh",
    com30: "Bouzeguene",
    com31: "Djebel Aissa Mimoun",
    com32: "Draa Ben Khedda",
    com33: "Draa El Mizan",
    com34: "Freha",
    com35: "Frikat",
    com36: "Iboudrarene",
    com37: "Idjeur",
    com38: "Iferhounene",
    com39: "Ifigha",
    com40: "Iflissen",
    com41: "Illilten",
    com42: "Illoula Oumalou",
    com43: "Imsouhal",
    com44: "Irdjen",
    com45: "Larba Nath Irathen",
    com46: "Larbaa Nath Irathen",
    com47: "M'kira ",
    com48: "Maatkas",
    com49: "Makouda",
    com50: "Mechtras",
    com51: "Mekla",
    com52: "Mizrana",
    com53: "Ouacif",
    com54: "Ouadhias",
    com55: "Ouaguenoune",
    com56: "Sidi Naamane",
    com57: "Souamaa",
    com58: "Souk El Thenine",
    com59: "Tadmait",
    com60: "Tigzirt",
    com61: "Timizart",
    com62: "Tirmitine",
    com63: "Tizi Ghenif",
    com64: "Tizi N'tleta",
    com65: "Tizi Ouzou",
    com66: "Tizi Rached",
    com67: "Yakourene",
    com68: "Yatafene",
    com69: "Zekri",
  },
  {
    id: 16,
    name: "Alger",
    com1: "Ain Benian",
    com2: "Ain Taya",
    com3: "Alger",
    com4: "Bab El Oued",
    com5: "Bab Ezzouar",
    com6: "Baba Hesen",
    com7: "Bachedjerah",
    com8: "Bains Romains",
    com9: "Baraki",
    com10: "Ben Aknoun",
    com11: "Beni Messous",
    com12: "Bir Mourad Rais",
    com13: "Bir Touta",
    com14: "Birkhadem",
    com15: "Bologhine Ibnou Ziri",
    com16: "Bordj El Bahri",
    com17: "Bordj El Kiffan",
    com18: "Bourouba",
    com19: "Bouzareah",
    com20: "Casbah",
    com21: "Cheraga",
    com22: "Dar El Beida",
    com23: "Dely Ibrahim",
    com24: "Djasr Kasentina",
    com25: "Douira",
    com26: "Draria",
    com27: "El Achour",
    com28: "El Biar",
    com29: "El Harrach",
    com30: "El Madania",
    com31: "El Magharia",
    com32: "El Merssa",
    com33: "El Mouradia",
    com34: "Herraoua ",
    com35: "Hussein Dey",
    com36: "Hydra",
    com37: "Kheraisia",
    com38: "Kouba",
    com39: "Les Eucalyptus",
    com40: "Maalma",
    com41: "Mohamed Belouzdad",
    com42: "Mohammadia",
    com43: "Oued Koriche",
    com44: "Oued Smar",
    com45: "Ouled Chebel",
    com46: "Ouled Fayet",
    com47: "Rahmania",
    com48: "Rais Hamidou",
    com49: "Reghaia",
    com50: "Rouiba",
    com51: "Sehaoula",
    com52: "Setaouali",
    com53: "Sidi M'hamed",
    com54: "Sidi Moussa",
    com55: "Souidania",
    com56: "Tessala El Merdja",
    com57: "Zeralda",
  },
  {
    id: 17,
    name: "Djelfa",
    com1: "Ain Chouhada ",
    com2: "Ain El Ibel",
    com3: "Ain Fekka",
    com4: "Ain Maabed",
    com5: "Ain Oussera",
    com6: "Amourah",
    com7: "Benhar",
    com8: "Benyagoub",
    com9: "Birine",
    com10: "Bouira Lahdab",
    com11: "Charef",
    com12: "Dar Chioukh",
    com13: "Deldoul",
    com14: "Djelfa",
    com15: "Douis",
    com16: "El Guedid",
    com17: "El Idrissia",
    com18: "El Khemis",
    com19: "Faidh El Botma",
    com20: "Guernini",
    com21: "Guettara",
    com22: "Had Sahary",
    com23: "Hassi Bahbah",
    com24: "Hassi El Euch",
    com25: "Hassi Fedoul",
    com26: "M Liliha",
    com27: "Messaad",
    com28: "Moudjebara",
    com29: "Oum Laadham",
    com30: "Sed Rahal",
    com31: "Selmana",
    com32: "Sidi Baizid ",
    com33: "Sidi Ladjel",
    com34: "Tadmit",
    com35: "Zaafrane",
    com36: "Zaccar",
  },
  {
    id: 18,
    name: "Jijel ",
    com1: "Bordj Tahar",
    com2: "Boudria Beniyadjis",
    com3: "Bouraoui Belhadef",
    com4: "Boussif Ouled Askeur",
    com5: "Chahna",
    com6: "Chekfa",
    com7: "Djemaa Beni Habibi",
    com8: "Djimla",
    com9: "El Ancer",
    com10: "El Aouana",
    com11: "El Kennar Nouchfi",
    com12: "El Milia",
    com13: "Emir Abdelkader",
    com14: "Erraguene",
    com15: "Ghebala",
    com16: "Jijel",
    com17: "Khiri Oued Adjoul",
    com18: "Kouas",
    com19: "Oudjana",
    com20: "Ouled Rabah",
    com21: "Ouled Yahia Khadrouch",
    com22: "Selma Benziada",
    com23: "Settara",
    com24: "Sidi Abdelaziz",
    com25: "Sidi Marouf",
    com26: "Taher",
    com27: "Texena",
    com28: "Ziama Mansouria",
  },
  {
    id: 19,
    name: "Setif",
    com1: "Ain Abessa",
    com2: "Ain Arnat",
    com3: "Ain Azel",
    com4: "Ain El Kebira",
    com5: "Ain Lahdjar",
    com6: "Ain Legradj",
    com7: "Ain Oulmane",
    com8: "Ain Roua",
    com9: "Ain Sebt",
    com10: "Ait Naoual Mezada",
    com11: "Ait Tizi",
    com12: "Amoucha",
    com13: "Babor",
    com14: "Bazer Sakra",
    com15: "Beidha Bordj",
    com16: "Bellaa",
    com17: "Beni Aziz",
    com18: "Beni Chebana",
    com19: "Beni Fouda",
    com20: "Beni Mouhli",
    com21: "Beni Ouartilane",
    com22: "Beni Oussine",
    com23: "Bir El Arch",
    com24: "Bir Haddada",
    com25: "Bouandas",
    com26: "Bougaa",
    com27: "Bousselam",
    com28: "Boutaleb",
    com29: "Dehamcha",
    com30: "Djemila",
    com31: "Draa Kebila",
    com32: "El Eulma",
    com33: "El Ouldja",
    com34: "El Ouricia",
    com35: "Guellal",
    com36: "Guelta Zerka",
    com37: "Guenzet",
    com38: "Guidjel",
    com39: "Hamam Soukhna",
    com40: "Hamma",
    com41: "Hammam Guergour",
    com42: "Harbil",
    com43: "Ksar El Abtal",
    com44: "Maaouia",
    com45: "Maouaklane",
    com46: "Mezloug",
    com47: "Oued El Barad",
    com48: "Ouled Addouane",
    com49: "Ouled Sabor",
    com50: "Ouled Si Ahmed",
    com51: "Ouled Tebben",
    com52: "Rosfa",
    com53: "Salah Bey",
    com54: "Serdj El Ghoul",
    com55: "Setif",
    com56: "Tachouda",
    com57: "Tala Ifacene",
    com58: "Taya",
    com59: "Tella",
    com60: "Tizi N'bechar",
  },
  {
    id: 20,
    name: "Saida",
    com1: "Ain El Hadjar",
    com2: "Ain Sekhouna",
    com3: "Ain Soltane",
    com4: "Doui Thabet",
    com5: "El Hassasna",
    com6: "Hounet",
    com7: "Maamora",
    com8: "Moulay Larbi",
    com9: "Ouled Brahim",
    com10: "Ouled Khaled",
    com11: "Saida",
    com12: "Sidi Ahmed",
    com13: "Sidi Amar",
    com14: "Sidi Boubekeur",
    com15: "Tircine",
    com16: "Youb",
  },
  {
    id: 21,
    name: "Skikda",
    com1: "Ain Bouziane",
    com2: "Ain Charchar",
    com3: "Ain Kechera",
    com4: "Ain Zouit",
    com5: "Azzaba",
    com6: "Bekkouche Lakhdar",
    com7: "Ben Azzouz",
    com8: "Beni Bechir",
    com9: "Beni Oulbane",
    com10: "Beni Zid",
    com11: "Bin El Ouiden",
    com12: "Bouchetata",
    com13: "Cheraia",
    com14: "Collo",
    com15: "Djendel Saadi Mohamed",
    com16: "El Arrouch",
    com17: "El Ghedir",
    com18: "El Hadaiek",
    com19: "El Marsa",
    com20: "Emjez Edchich",
    com21: "Es Sebt",
    com22: "Filfila",
    com23: "Hamadi Krouma",
    com24: "Kanoua",
    com25: "Kerkera",
    com26: "Khenag Mayoum",
    com27: "Oued Zhour",
    com28: "Ouldja Boulbalout",
    com29: "Ouled Attia",
    com30: "Ouled Habbeba",
    com31: "Oum Toub",
    com32: "Ramdane Djamel",
    com33: "Salah Bouchaour",
    com34: "Sidi Mezghiche",
    com35: "Skikda",
    com36: "Tamalous",
    com37: "Zerdezas",
    com38: "Zitouna",
  },
  {
    id: 22,
    name: "Sidi Bel Abbes ",
    com1: "Ain Adden",
    com2: "Ain El Berd",
    com3: "Ain Kada",
    com4: "Ain Thrid",
    com5: "Ain Tindamine",
    com6: "Amarnas",
    com7: "Badredine El Mokrani",
    com8: "Belarbi",
    com9: "Ben Badis",
    com10: "Benachiba Chelia",
    com11: "Bir El Hammam",
    com12: "Boudjebaa El Bordj",
    com13: "Boukhanafis",
    com14: "Chetouane Belaila",
    com15: "Dhaya",
    com16: "El Hacaiba",
    com17: "Hassi Dahou",
    com18: "Hassi Zahana",
    com19: "Lamtar",
    com20: "M'cid",
    com21: "Makedra",
    com22: "Marhoum",
    com23: "Merine",
    com24: "Mezaourou",
    com25: "Mostefa Ben Brahim",
    com26: "Moulay Slissen",
    com27: "Oued Sebaa",
    com28: "Oued Sefioun",
    com29: "Oued Taourira",
    com30: "Ras El Ma",
    com31: "Redjem Demouche",
    com32: "Sehala Thaoura",
    com33: "Sfissef",
    com34: "Sidi Ali Benyoub",
    com35: "Sidi Ali Boussidi",
    com36: "Sidi Bel Abbes",
    com37: "Sidi Brahim",
    com38: "Sidi Chaib",
    com39: "Sidi Dahou Zairs",
    com40: "Sidi Hamadouche",
    com41: "Sidi Khaled",
    com42: "Sidi Lahcene",
    com43: "Sidi Yacoub",
    com44: "Tabia",
    com45: "Tafissour",
    com46: "Taoudmout",
    com47: "Teghalimet",
    com48: "Telagh",
    com49: "Tenira",
    com50: "Tessala",
    com51: "Tilmouni",
    com52: "Zerouala",
  },
  {
    id: 24,
    name: "Guelma",
    com1: "Ain Ben Beida",
    com2: "Ain Hessania",
    com3: "Ain Larbi",
    com4: "Ain Makhlouf",
    com5: "Ain Reggada",
    com6: "Belkheir",
    com7: "Ben Djarah",
    com8: "Beni Mezline",
    com9: "Bordj Sabat",
    com10: "Bou Hachana",
    com11: "Bou Hamdane",
    com12: "Bouati Mahmoud",
    com13: "Bouchegouf",
    com14: "Bouhamra Ahmed",
    com15: "Dahouara",
    com16: "Djeballah Khemissi",
    com17: "El Fedjoudj",
    com18: "Guelaat Bou Sbaa",
    com19: "Guelma",
    com20: "Hamam Debagh",
    com21: "Hammam N'bail",
    com22: "Heliopolis",
    com23: "Khezara",
    com24: "Medjez Amar",
    com25: "Medjez Sfa",
    com26: "Nechmaya",
    com27: "Oued Cheham",
    com28: "Oued Fragha",
    com29: "Oued Zenati",
    com30: "Ras El Agba",
    com31: "Roknia",
    com32: "Sellaoua Announa",
    com33: "Sidi Sandel",
    com34: "Tamlouka",
  },
  {
    id: 23,
    name: "Annaba",
    com1: "Ain Berda",
    com2: "Annaba",
    com3: "Berrahel",
    com4: "Chetaibi",
    com5: "Cheurfa",
    com6: "El Bouni",
    com7: "El Hadjar",
    com8: "Eulma",
    com9: "Oued El Aneb",
    com10: "Seraidi",
    com11: "Sidi Amar",
    com12: "Treat",
  },
  {
    id: 25,
    name: "Constantine",
    com1: "Ain Abid",
    com2: "Ain Smara",
    com3: "Ben Badis",
    com4: "Beni Hamidene",
    com5: "Constantine",
    com6: "Didouche Mourad",
    com7: "El Khroub",
    com8: "Hamma Bouziane",
    com9: "Ibn Ziad",
    com10: "Messaoud Boujeriou",
    com11: "Ouled Rahmouni",
    com12: "Zighoud Youcef",
  },
  {
    id: 26,
    name: "Medea",
    com1: "Ain Boucif",
    com2: "Ain Ouksir",
    com3: "Aissaouia",
    com4: "Aziz",
    com5: "Baata",
    com6: "Ben Chicao",
    com7: "Beni Slimane",
    com8: "Berrouaghia",
    com9: "Bir Ben Laabed",
    com10: "Boghar",
    com11: "Bouaiche",
    com12: "Bouaichoune",
    com13: "Bouchrahil",
    com14: "Boughzoul",
    com15: "Bouskene",
    com16: "Chabounia",
    com17: "Chelalet El Adhaoura",
    com18: "Cheniguel",
    com19: "Damiat",
    com20: "Derrag",
    com21: "Deux Bassins",
    com22: "Djouab",
    com23: "Draa Essamar",
    com24: "El Azizia",
    com25: "El Guelbelkebir",
    com26: "El Hamdania",
    com27: "El Omaria",
    com28: "El Ouinet",
    com29: "Hannacha",
    com30: "Kef Lakhdar",
    com31: "Khams Djouamaa",
    com32: "Ksar El Boukhari",
    com33: "Maghraoua",
    com34: "Medea",
    com35: "Medjebar",
    com36: "Meftaha",
    com37: "Mezerana",
    com38: "Mihoub",
    com39: "Ouamri",
    com40: "Oued Harbil",
    com41: "Ouled Antar",
    com42: "Ouled Bouachra",
    com43: "Ouled Brahim",
    com44: "Ouled Deid",
    com45: "Ouled Hellal",
    com46: "Ouled Maaref",
    com47: "Oum El Djellil",
    com48: "Ouzera",
    com49: "Rebaia",
    com50: "Saneg",
    com51: "Sedraya",
    com52: "Seghouane",
    com53: "Si Mahdjoub",
    com54: "Sidi Demed",
    com55: "Sidi Naamane",
    com56: "Sidi Rabie",
    com57: "Sidi Zahar",
    com58: "Sidi Ziane",
    com59: "Souagui",
    com60: "Tablat",
    com61: "Tafraout",
    com62: "Tamesguida",
    com63: "Tletat Ed Douair",
    com64: "Zoubiria",
  },
  {
    id: 27,
    name: "Mostaganem",
    com1: "Achaacha",
    com2: "Ain Boudinar",
    com3: "Ain Nouissy",
    com4: "Ain Sidi Cherif",
    com5: "Ain Tedles",
    com6: "Benabdelmalek Ramdane",
    com7: "Bouguirat",
    com8: "Fornaka",
    com9: "Hadjadj",
    com10: "Hassi Mameche",
    com11: "Hassiane",
    com12: "Khadra",
    com13: "Kheir Eddine",
    com14: "Mansourah",
    com15: "Mazagran",
    com16: "Mesra",
    com17: "Mostaganem",
    com18: "Nekmaria",
    com19: "Oued El Kheir",
    com20: "Ouled Boughalem",
    com21: "Ouled Maalah",
    com22: "Safsaf",
    com23: "Sayada",
    com24: "Sidi Ali",
    com25: "Sidi Belaattar",
    com26: "Sidi Lakhdar",
    com27: "Sirat",
    com28: "Souaflia",
    com29: "Sour",
    com30: "Stidia",
    com31: "Tazgait",
    com32: "Touahria",
  },
  {
    id: 28,
    name: "M'sila",
    com1: "Ain El Hadjel",
    com2: "Ain El Melh",
    com3: "Ain Fares",
    com4: "Ain Khadra",
    com5: "Ain Rich",
    com6: "Belaiba",
    com7: "Ben Srour",
    com8: "Beni Ilmane",
    com9: "Benzouh",
    com10: "Berhoum",
    com11: "Bir Foda",
    com12: "Bou Saada",
    com13: "Bouti Sayeh",
    com14: "Chellal",
    com15: "Dehahna",
    com16: "Djebel Messaad",
    com17: "El Hamel",
    com18: "El Houamed",
    com19: "Hammam Dalaa",
    com20: "Khettouti Sed El Jir",
    com21: "Khoubana",
    com22: "M'cif",
    com23: "M'sila",
    com24: "M'tarfa",
    com25: "Maadid",
    com26: "Maarif",
    com27: "Magra",
    com28: "Medjedel",
    com29: "Menaa",
    com30: "Mohamed Boudiaf",
    com31: "Ouanougha",
    com32: "Ouled Addi Guebala",
    com33: "Ouled Derradj",
    com34: "Ouled Madhi",
    com35: "Ouled Mansour",
    com36: "Ouled Sidi Brahim",
    com37: "Ouled Slimane",
    com38: "Oulteme",
    com39: "Sidi Aissa",
    com40: "Sidi Ameur",
    com41: "Sidi Hadjeres",
    com42: "Sidi M'hamed",
    com43: "Slim",
    com44: "Souamaa",
    com45: "Tamsa",
    com46: "Tarmount",
    com47: "Zarzour",
  },
  {
    id: 29,
    name: "Mascara",
    com1: "Ain Fares",
    com2: "Ain Fekan",
    com3: "Ain Ferah",
    com4: "Ain Frass",
    com5: "Alaimia",
    com6: "Aouf",
    com7: "Benian",
    com8: "Bou Henni",
    com9: "Bouhanifia",
    com10: "Chorfa",
    com11: "El Bordj",
    com12: "El Gaada",
    com13: "El Ghomri",
    com14: "El Gueitena",
    com15: "El Hachem",
    com16: "El Keurt",
    com17: "El Mamounia",
    com18: "El Menaouer",
    com19: "Ferraguig",
    com20: "Froha",
    com21: "Gharrous",
    com22: "Ghriss",
    com23: "Guerdjoum",
    com24: "Hacine",
    com25: "Khalouia",
    com26: "Makhda",
    com27: "Maoussa",
    com28: "Mascara",
    com29: "Matemore",
    com30: "Mocta Douz",
    com31: "Mohammadia",
    com32: "Nesmot",
    com33: "Oggaz",
    com34: "Oued El Abtal",
    com35: "Oued Taria",
    com36: "Ras El Ain Amirouche",
    com37: "Sedjerara",
    com38: "Sehailia",
    com39: "Sidi Abdeldjebar",
    com40: "Sidi Abdelmoumene",
    com41: "Sidi Boussaid",
    com42: "Sidi Kada",
    com43: "Sig",
    com44: "Tighennif",
    com45: "Tizi",
    com46: "Zahana",
    com47: "Zelamta",
  },
  {
    id: 30,
    name: "Ouargla",
    com1: "Ain Beida",
    com2: "Hassi Ben Abdellah",
    com3: "Hassi Messaoud",
    com4: "N'goussa",
    com5: "Ouargla",
    com6: "Rouissat",
    com7: "Sidi Khouiled",
  },
  {
    id: 31,
    name: "Oran",
    com1: "Ain Biya",
    com2: "Ain Kerma",
    com3: "Ain Turk",
    com4: "Arzew",
    com5: "Ben Freha",
    com6: "Bethioua",
    com7: "Bir El Djir",
    com8: "Boufatis",
    com9: "Bousfer",
    com10: "Boutlelis",
    com11: "El Ancar",
    com12: "El Braya",
    com13: "El Kerma",
    com14: "Es Senia",
    com15: "Gdyel",
    com16: "Hassi Ben Okba",
    com17: "Hassi Bounif",
    com18: "Hassi Mefsoukh",
    com19: "Marsat El Hadjadj",
    com20: "Mers El Kebir",
    com21: "Messerghin",
    com22: "Oran",
    com23: "Oued Tlelat",
    com24: "Sidi Ben Yebka",
    com25: "Sidi Chami",
    com26: "Tafraoui",
  },
  {
    id: 32,
    name: "El Bayadh",
    com1: "Ain El Orak ",
    com2: "Arbaouat",
    com3: "Boualem",
    com4: "Bougtoub",
    com5: "Boussemghoun",
    com6: "Brezina",
    com7: "Cheguig",
    com8: "Chellala",
    com9: "El Bayadh",
    com10: "El Biodh Sidi Cheikh",
    com11: "El Bnoud",
    com12: "El Kheither",
    com13: "El Mehara",
    com14: "Ghassoul",
    com15: "Kef El Ahmar",
    com16: "Krakda",
    com17: "Rogassa",
    com18: "Sidi Ameur",
    com19: "Sidi Slimane",
    com20: "Sidi Tifour",
    com21: "Stitten",
    com22: "Tousmouline",
  },
  {
    id: 33,
    name: "Illizi",
    com1: "Debdeb",
    com2: "Illizi",
    com3: "In Amenas",
    com4: "Bordj Omar Driss",
  },
  {
    id: 34,
    name: "Bordj Bou Arreridj ",
    com1: "Ain Taghrout",
    com2: "Ain Tesra",
    com3: "Belimour",
    com4: "Ben Daoud",
    com5: "Bir Kasdali",
    com6: "Bordj Bou Arreridj",
    com7: "Bordj Ghdir",
    com8: "Bordj Zemora",
    com9: "Colla",
    com10: "Djaafra",
    com11: "El Ach",
    com12: "El Achir",
    com13: "El Anseur",
    com14: "El Hamadia",
    com15: "El M'hir",
    com16: "El Main",
    com17: "Ghilassa",
    com18: "Haraza",
    com19: "Hasnaoua",
    com20: "Khelil",
    com21: "Ksour",
    com22: "Mansoura",
    com23: "Medjana",
    com24: "Ouled Brahem",
    com25: "Ouled Dahmane",
    com26: "Ouled Sidi Brahim",
    com27: "Rabta",
    com28: "Ras El Oued",
    com29: "Sidi Embarek",
    com30: "Tafreg",
    com31: "Taglait",
    com32: "Teniet En Nasr",
    com33: "Tesmart",
    com34: "Tixter",
  },
  {
    id: 35,
    name: "Boumerdes",
    com1: "Ain Taghrout",
    com2: "Ain Tesra",
    com3: "Belimour",
    com4: "Ben Daoud",
    com5: "Bir Kasdali",
    com6: "Bordj Bou Arreridj",
    com7: "Bordj Ghdir",
    com8: "Bordj Zemora",
    com9: "Colla",
    com10: "Djaafra",
    com11: "El Ach",
    com12: "El Achir",
    com13: "El Anseur",
    com14: "El Hamadia",
    com15: "El M'hir",
    com16: "El Main",
    com17: "Ghilassa",
    com18: "Haraza",
    com19: "Hasnaoua",
    com20: "Khelil",
    com21: "Ksour",
    com22: "Mansoura",
    com23: "Medjana",
    com24: "Ouled Brahem",
    com25: "Ouled Dahmane",
    com26: "Ouled Sidi Brahim",
    com27: "Rabta",
    com28: "Ras El Oued",
    com29: "Sidi Embarek",
    com30: "Tafreg",
    com31: "Taglait",
    com32: "Teniet En Nasr",
    com33: "Tesmart",
    com34: "Tixter",
  },
  {
    id: 36,
    name: "El Tarf",
    com1: "Ain El Assel",
    com2: "Ain Kerma",
    com3: "Asfour",
    com4: "Ben M Hidi",
    com5: "Berrihane",
    com6: "Besbes",
    com7: "Bougous",
    com8: "Bouhadjar",
    com9: "Bouteldja",
    com10: "Chebaita Mokhtar",
    com11: "Chefia",
    com12: "Chihani",
    com13: "Drean",
    com14: "Echatt",
    com15: "El Aioun",
    com16: "El Kala",
    com17: "El Tarf",
    com18: "Hammam Beni Salah",
    com19: "Lac Des Oiseaux",
    com20: "Oued Zitoun",
    com21: "Raml Souk",
    com22: "Souarekh",
    com23: "Zerizer",
    com24: "Zitouna",
  },
  {
    id: 37,
    name: "Tindouf",
    com1: "Oum El Assel",
    com2: "Tindouf",
  },
  {
    id: 38,
    name: "Tissemsilt",
    com1: "Ammari",
    com2: "Beni Chaib",
    com3: "Beni Lahcene",
    com4: "Bordj Bounaama",
    com5: "Bordj El Emir Abdelkader",
    com6: "Bou Caid",
    com7: "Khemisti",
    com8: "Larbaa",
    com9: "Lardjem",
    com10: "Layoune",
    com11: "Lazharia",
    com12: "Maacem",
    com13: "Melaab",
    com14: "Ouled Bessem",
    com15: "Sidi Abed",
    com16: "Sidi Boutouchent",
    com17: "Sidi Lantri",
    com18: "Sidi Slimane",
    com19: "Tamellalet",
    com20: "Theniet El Had",
    com21: "Tissemsilt",
    com22: "Youssoufia",
  },
  {
    id: 39,
    name: "El Oued",
    com1: "Bayadha",
    com2: "Ben Guecha",
    com3: "Debila",
    com4: "Douar El Maa",
    com5: "El Ogla",
    com6: "El Oued",
    com7: "Guemar",
    com8: "Hamraia",
    com9: "Hassani Abdelkrim",
    com10: "Hassi Khalifa",
    com11: "Kouinine",
    com12: "Magrane",
    com13: "Mih Ouansa",
    com14: "Nakhla",
    com15: "Oued El Alenda",
    com16: "Ourmes",
    com17: "Reguiba",
    com18: "Robbah",
    com19: "Sidi Aoun",
    com20: "Taghzout",
    com21: "Taleb Larbi",
    com22: "Trifaoui",
  },
  {
    id: 40,
    name: "Khenchela",
    com1: "Ain Touila",
    com2: "Babar",
    com3: "Baghai",
    com4: "Bouhmama",
    com5: "Chelia",
    com6: "Cherchar",
    com7: "Djellal",
    com8: "El Hamma",
    com9: "El Mahmal",
    com10: "El Oueldja",
    com11: "Ensigha",
    com12: "Kais",
    com13: "Khenchela",
    com14: "Khirane",
    com15: "M'sara",
    com16: "M'toussa",
    com17: "Ouled Rechache",
    com18: "Remila",
    com19: "Tamza",
    com20: "Taouzianat",
    com21: "Yabous",
  },
  {
    id: 41,
    name: "Souk Ahras",
    com1: "Ain Soltane",
    com2: "Ain Zana",
    com3: "Bir Bouhouche",
    com4: "Drea",
    com5: "Haddada",
    com6: "Hanencha",
    com7: "Khedara",
    com8: "Khemissa",
    com9: "M'daourouche",
    com10: "Machroha",
    com11: "Merahna",
    com12: "Oued Kebrit",
    com13: "Ouled Driss",
    com14: "Ouled Moumen",
    com15: "Oum El Adhaim",
    com16: "Quillen",
    com17: "Ragouba",
    com18: "Safel El Ouiden",
    com19: "Sedrata",
    com20: "Sidi Fredj",
    com21: "Souk Ahras",
    com22: "Taoura",
    com23: "Terraguelt",
    com24: "Tiffech",
    com25: "Zaarouria",
    com26: "Zouabi",
  },
  {
    id: 42,
    name: "Tipaza",
    com1: "Aghbal",
    com2: "Ahmer El Ain",
    com3: "Ain Tagourait",
    com4: "Attatba",
    com5: "Beni Mileuk",
    com6: "Bou Haroun",
    com7: "Bou Ismail",
    com8: "Bourkika",
    com9: "Chaiba",
    com10: "Cherchell",
    com11: "Damous",
    com12: "Douaouda",
    com13: "Fouka",
    com14: "Gouraya",
    com15: "Hadjout",
    com16: "Hadjret Ennous",
    com17: "Khemisti",
    com18: "Kolea",
    com19: "Larhat",
    com20: "Menaceur",
    com21: "Merad",
    com22: "Messelmoun",
    com23: "Nador",
    com24: "Sidi Amar",
    com25: "Sidi Ghiles",
    com26: "Sidi Rached",
    com27: "Sidi Semiane",
    com28: "Tipaza",
  },
  {
    id: 43,
    name: "Mila",
    com1: "Ahmed Rachedi",
    com2: "Ain Beida Harriche",
    com3: "Ain Mellouk",
    com4: "Ain Tine",
    com5: "Amira Arres",
    com6: "Benyahia Abderrahmane",
    com7: "Bouhatem",
    com8: "Chelghoum Laid",
    com9: "Chigara",
    com10: "Derrahi Bousselah",
    com11: "El Mechira",
    com12: "Elayadi Barbes",
    com13: "Ferdjioua",
    com14: "Grarem Gouga",
    com15: "Hamala",
    com16: "Mila",
    com17: "Minar Zarza",
    com18: "Oued Athmenia",
    com19: "Oued Endja",
    com20: "Oued Seguen",
    com21: "Ouled Khalouf",
    com22: "Rouached",
    com23: "Sidi Khelifa",
    com24: "Sidi Merouane",
    com25: "Tadjenanet",
    com26: "Tassadane Haddada",
    com27: "Teleghma",
    com28: "Terrai Bainem",
    com29: "Tessala",
    com30: "Tiberguent",
    com31: "Yahia Beniguecha",
    com32: "Zeghaia",
  },
  {
    id: 44,
    name: "Ain Defla",
    com1: "Ain Benian",
    com2: "Ain Bouyahia",
    com3: "Ain Defla",
    com4: "Ain Lechiakh",
    com5: "Ain Soltane",
    com6: "Ain Tork",
    com7: "Arib",
    com8: "Barbouche",
    com9: "Bathia",
    com10: "Belaas",
    com11: "Ben Allal",
    com12: "Bir Ould Khelifa",
    com13: "Bordj Emir Khaled",
    com14: "Boumedfaa",
    com15: "Bourached",
    com16: "Djelida",
    com17: "Djemaa Ouled Cheikh",
    com18: "Djendel",
    com19: "El Abadia",
    com20: "El Amra",
    com21: "El Attaf",
    com22: "El Maine",
    com23: "Hammam Righa",
    com24: "Hassania",
    com25: "Hoceinia",
    com26: "Khemis Miliana",
    com27: "Mekhatria",
    com28: "Miliana",
    com29: "Oued Chorfa",
    com30: "Oued Djemaa",
    com31: "Rouina",
    com32: "Sidi Lakhdar",
    com33: "Tacheta Zegagha",
    com34: "Tarik Ibn Ziad",
    com35: "Tiberkanine",
    com36: "Zeddine",
  },
  {
    id: 45,
    name: "Naama",
    com1: "Ain Ben Khelil",
    com2: "Ain Safra",
    com3: "Assela",
    com4: "Djeniane Bourzeg",
    com5: "El Biod",
    com6: "Kasdir",
    com7: "Makman Ben Amer",
    com8: "Mecheria",
    com9: "Moghrar",
    com10: "Naama",
    com11: "Sfissifa",
    com12: "Tiout",
  },
  {
    id: 46,
    name: "Ain Temouchent",
    com1: "Aghlal",
    com2: "Ain El Arbaa",
    com3: "Ain Kihal",
    com4: "Ain Temouchent",
    com5: "Ain Tolba",
    com6: "Aoubellil",
    com7: "Beni Saf",
    com8: "Bouzedjar",
    com9: "Chaabat El Ham",
    com10: "Chentouf",
    com11: "El Amria",
    com12: "El Malah",
    com13: "El Messaid",
    com14: "Emir Abdelkader",
    com15: "Hammam Bouhadjar",
    com16: "Hassasna",
    com17: "Hassi El Ghella",
    com18: "Oued Berkeche",
    com19: "Oued Sebbah",
    com20: "Ouled Boudjemaa",
    com21: "Ouled Kihal",
    com22: "Oulhaca El Gheraba",
    com23: "Sidi Ben Adda",
    com24: "Sidi Boumediene",
    com25: "Sidi Ouriache",
    com26: "Sidi Safi",
    com27: "Tamzoura",
    com28: "Terga",
  },
  {
    id: 47,
    name: "Ghardaia",
    com1: "Berriane",
    com2: "Bounoura",
    com3: "Dhayet Bendhahoua",
    com4: "El Atteuf",
    com5: "El Guerrara",
    com6: "Ghardaia",
    com7: "Mansoura",
    com8: "Metlili",
    com9: "Sebseb",
    com10: "Zelfana",
  },
  {
    id: 48,
    name: "Relizane",
    com1: "Ain Rahma",
    com2: "Ain Tarek",
    com3: "Ammi Moussa",
    com4: "Belaassel Bouzagza",
    com5: "Bendaoud",
    com6: "Beni Dergoun",
    com7: "Beni Zentis",
    com8: "Dar Ben Abdelah",
    com9: "Djidiouia",
    com10: "El Guettar",
    com11: "El H'madna",
    com12: "El Hassi",
    com13: "El Matmar",
    com14: "El Ouldja",
    com15: "Had Echkalla",
    com16: "Hamri",
    com17: "Kalaa",
    com18: "Lahlef",
    com19: "Mazouna",
    com20: "Mediouna",
    com21: "Mendes",
    com22: "Merdja Sidi Abed",
    com23: "Ouarizane",
    com24: "Oued El Djemaa",
    com25: "Oued Essalem",
    com26: "Oued Rhiou",
    com27: "Ouled Aiche",
    com28: "Ouled Sidi Mihoub",
    com29: "Ramka",
    com30: "Relizane",
    com31: "Sidi Khettab",
    com32: "Sidi Lazreg",
    com33: "Sidi M'hamed Benali",
    com34: "Sidi M'hamed Benaouda",
    com35: "Sidi Saada",
    com36: "Souk El Had",
    com37: "Yellel",
    com38: "Zemmoura",
  },
  {
    id: 49,
    name: "Timimoun",
    com1: "Aougrout",
    com2: "Charouine",
    com3: "Deldoul",
    com4: "Ksar Kaddour",
    com5: "Metarfa",
    com6: "Ouled Aissa",
    com7: "Ouled Said",
    com8: "Talmine",
    com9: "Timimoun",
    com10: "Tinerkouk",
  },
  {
    id: 50,
    name: "Bordj Badji Mokhtar",
    com1: "Bordj Badji Mokhtar",
    com2: "Timiaouine",
  },
  {
    id: 51,
    name: "Ouled Djellal",
    com1: "Besbes",
    com2: "Chaiba",
    com3: "Doucen",
    com4: "Ouled Djellal",
    com5: "Ras El Miad",
    com7: "Sidi Khaled",
  },
  {
    id: 52,
    name: "Beni Abbes",
    com1: "Beni Abbes",
    com2: "Beni Ikhlef",
    com3: "El Ouata",
    com4: "Igli",
    com5: "Kerzaz",
    com6: "Ksabi",
    com7: "Ouled Khoudir",
    com8: "Tabelbala",
    com9: "Tamtert",
    com10: "Timoudi",
  },
  {
    id: 53,
    name: "In Salah",
    com1: "In Salah",
    com2: "Foggaret Azzaouia ",
    com3: "In Ghar",
  },
  {
    id: 54,
    name: "In Guezzam",
    com1: "In Guezzam",
    com2: "Tin Zouatine",
  },
  {
    id: 55,
    name: "Touggourt",
    com1: "Benaceur",
    com2: "Blidet Amor",
    com3: "El Alia",
    com4: "El Hadjira",
    com5: "Megarine",
    com6: "Mnaguer",
    com7: "Nezla",
    com8: "Sidi Slimane",
    com9: "Taibet",
    com10: "Tebesbest",
    com11: "Temacine",
    com12: "Touggourt",
    com13: "Zaouia El Abidia",
  },
  {
    id: 56,
    name: "Djanet",
    com1: "Djanet",
    com2: "Bordj El Haouasse",
  },
  {
    id: 57,
    name: "El M'ghair",
    com1: "Djamaa",
    com2: "El M'ghair",
    com3: "Mrara",
    com4: "Oum Touyour",
    com5: "Sidi Amrane",
    com6: "Sidi Khelil",
    com7: "Still",
    com8: "Tenedla",
  },
  {
    id: 58,
    name: "El Meniaa",
    com1: "El Meniaa",
    com2: "Hassi Fehal",
    com3: "Hassi Gara",
  },
];

const wilayaInfo = wilayaCommuneInfo.map((item) => {
  const { id, name } = item;
  return { id, name };
});

export default function Form({ id }) {
  const sendNotification = async (newOrder) => {
    const url = `https://api.telegram.org/bot${"7808946507:AAH0OwNAaL15AAsouO602jhC8qHHU7PcWbE"}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: 5591540987,
          text: `
<b>${newOrder.msg}</b>

`,
          parse_mode: "HTML",
        }),
      });

      if (response.ok) {
        console.log("Notification sent successfully!");
      } else {
        console.error("Failed to send notification:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  const [btnDisebled, setBtnDisebled] = useState(false);

  const [purchaise, setPurchaise] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("0777651022");
  const [wilaya, setWilaya] = useState("");
  const [adress, setAdress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [modelColr, setModelColr] = useState("");
  const [modelSize, setModelSize] = useState("");
  const [fakeBtn, setFakeBtn] = useState(false);
  const [correctNumber, setCorrectNumber] = useState(false);
  const phoneInput = useRef(null);

  const { clr, size, price, delevery } = data.filter(
    (item) => item.id === id
  )[0];

  const communeInfo = Object.values(
    wilayaCommuneInfo.filter((item) => item.name === wilaya)[0]
  );

  const handleModel = (e) => {
    e.target.classList.toggle("valid");
  };
  const isMakeOrder = JSON.parse(localStorage.getItem("makeOrder"));

  useEffect(() => {
    if (isMakeOrder) {
      if (isMakeOrder.expire < new Date().getTime()) {
        localStorage.removeItem("makeOrder");
      }
    }
    if (isMakeOrder?.value === 1) {
      setTimeout(() => {
        setPurchaise(true);
        window.scrollTo({
          top: 500,
          behavior: "smooth", // Smooth scrolling animation
        });
      }, 1200);
      return;
    }
  }, [isMakeOrder]);
  useEffect(() => {
    if (
      wilaya === "Adrar" ||
      wilaya === "Bechar" ||
      wilaya === "Tamanrasset" ||
      wilaya === "Illizi" ||
      wilaya === "Tindouf" ||
      wilaya === "Timimoun" ||
      wilaya === "Bordj Badji Mokhtar" ||
      wilaya === "Beni Abbes" ||
      wilaya === "In Salah" ||
      wilaya === "In Guezzam" ||
      wilaya === "Touggourt" ||
      wilaya === "Djanet" ||
      wilaya === "El Meniaa"
    ) {
      setFakeBtn(true);
    }
  }, [wilaya]);

  useEffect(() => {
    const regex = /^[5-7]\d{8}$/;
    if (!regex.test(phone.slice(1))) {
      setCorrectNumber(true);
      window.scrollTo({
        top: 500,
        behavior: "smooth", // Smooth scrolling animation
      });
      setBtnDisebled(true);
      document.querySelector('input[placeholder="رقم الهاتف"]').focus();
    } else {
      setBtnDisebled(false);
      setCorrectNumber(false);
    }
  }, [phone]);

  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    setBtnDisebled(true);

    try {
      const data = new FormData();
      data.append(
        "date",
        `${new Date().getDate()}/${
          new Date().getMonth() + 1
        } - ${new Date().getHours()}H : ${new Date().getMinutes()}M`
      );
      data.append("product", document.getElementById("title")?.innerHTML);
      data.append("name", name);
      data.append("phone", `${phone}`);
      data.append("wilaya", wilaya);
      data.append("adress", adress);
      data.append("quantity", quantity.toString());
      data.append("model", `${modelColr} / ${modelSize}`);
      data.append("prix", `${price} / ${delevery} / ${price + delevery}`);

      await fetch(
        "https://script.google.com/macros/s/AKfycby3CcCeV5zO6gz9LHK2IobBelVoUv_10w6RM8t2S6hHNfNLMKeqdfaHkfF6xG8xH-b7/exec",
        {
          method: "POST",
          body: data,
        }
      );

      setBtnDisebled(false);

      setPurchaise(true);
      window.scrollTo({
        top: 500,
        behavior: "smooth", // Smooth scrolling animation
      });
      const newOrder = {
        msg: `*New Order Received!* ${price + delevery}`,
      };

      localStorage.setItem(
        "makeOrder",
        JSON.stringify({
          value: 1,
          expire: new Date().getTime() + 15 * 60 * 60 * 1000,
        })
      );

      sendNotification(newOrder);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(window.location.href[window.location.href.length - 1]);

  return (
    <Box>
      {purchaise ? (
        <Box margin={"50px 0"}>
          <Typography sx={{ fontSize: "32px", textAlign: "center" }}>
            لقد تم تقديم طلبك بنجاح سيتم الاتصال بك قريبا لتأكيد طلبيتك
          </Typography>
          <Typography sx={{ fontSize: "32px", textAlign: "center" }}>
            شكرا لك
          </Typography>
        </Box>
      ) : fakeBtn ? (
        <Box margin={"50px 0"}>
          <Typography sx={{ fontSize: "32px", textAlign: "center" }}>
            {` غير متوفر الآن ${wilaya}  التوصيل لولايتك `}
          </Typography>
          <Typography sx={{ fontSize: "32px", textAlign: "center" }}>
            نرجوا المعذرة و شكرا
          </Typography>
        </Box>
      ) : (
        <form
          style={{
            border: "3px rgba(107, 107, 224, 0.623) solid",
            borderRadius: "8px",
            padding: "7px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
          onSubmit={handleSubmitOrder}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <TextField
              required
              sx={{
                width: "49%",
                marginBottom: "10px",
                "@media(max-width:700px)": {
                  width: "100%",
                },
              }}
              placeholder={"الاسم الكامل"}
              label={"الاسم الكامل"}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              ref={phoneInput}
              required
              type="number"
              sx={{
                width: "49%",
                marginBottom: "10px",
                "@media(max-width:700px)": {
                  width: "100%",
                },
              }}
              placeholder={"رقم الهاتف"}
              label={"رقم الهاتف"}
              onChange={(e) => setPhone(e.target.value)}
            />
            {correctNumber ? (
              <Typography
                sx={{
                  marginTop: "-10px",
                  textAlign: "center",
                  width: "60%",
                  color: "red",
                  marginBottom: "15px",
                }}
              >
                أدخل رقم هاتف صحيح{" "}
              </Typography>
            ) : (
              ""
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <FormControl fullWidth sx={{ marginBottom: "15px" }}>
              <InputLabel>{"الولاية"}</InputLabel>
              <Select
                sx={{ direction: "ltr" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={wilaya}
                label="Wilaya"
                onChange={(e) => setWilaya(e.target.value)}
              >
                {wilayaInfo.slice(1).map((item, index) => {
                  return (
                    <MenuItem
                      required
                      sx={{ direction: "ltr" }}
                      key={index}
                      value={item.name}
                    >
                      {item.id} - {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>{"البلدية"}</InputLabel>
              <Select
                sx={{ direction: "ltr" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={adress}
                label="Commune"
                onChange={(e) => setAdress(e.target.value)}
              >
                {communeInfo.slice(2).map((item, index) => {
                  return (
                    <MenuItem
                      sx={{ direction: "ltr" }}
                      key={index}
                      value={item}
                    >
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              padding: "15px",
              marginTop: "12px",
              marginBottom: "12px",
              width: "100%",
              backgroundColor: "#dbeafe",
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                direction: "rtl",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                {"سعر المنتج"}
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                {price} دج
              </Typography>
            </Box>
            <Box
              sx={{
                direction: "rtl",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                {"الكمية"}
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                {quantity}
              </Typography>
            </Box>
            <Box
              sx={{
                direction: "rtl",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                {"سعر التوصيل"}
              </Typography>
              <Typography
                id="priceDelevery"
                sx={{ fontWeight: "bold", fontSize: "22px" }}
              >
                {quantity === 1 ? delevery : 0} دج
              </Typography>
            </Box>
            <Box
              sx={{
                direction: "rtl",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                {"المجموع"}
              </Typography>
              <Typography
                id="total"
                sx={{ fontWeight: "bold", fontSize: "22px" }}
              >
                {quantity === 1
                  ? +quantity * price + delevery
                  : +quantity * price}{" "}
                دج
              </Typography>
            </Box>
          </Box>
          <Box
            flexDirection={"row"}
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2px",
            }}
          >
            {clr.map((item) => (
              <>
                <Box
                  onClick={(e) => {
                    handleModel(e);
                    setModelColr(item);
                  }}
                  sx={{
                    //backgroundColor: "#f5f5dc",
                    width: "fit-content",
                    height: "40px",
                    marginRight: "4px",
                    border: "1px red solid",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    padding: "20px 10px",
                    borderRadius: "12px",
                  }}
                >
                  {item}
                </Box>
              </>
            ))}
            {/* <Box
              onClick={(e) => {
                handleModel(e);
                setModelColr("Noir");
              }}
              sx={{
                //backgroundColor: "#f5f5dc",
                width: "fit-content",
                height: "40px",
                marginRight: "4px",
                border: "1px red solid",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                padding: "20px 30px",
                borderRadius: "12px",
                position: "relative",
                "&::after": {
                  content: "'🔥 الأكثر طلبا'",
                  width: "100%",
                  position: "absolute",
                  bottom: "-28px",
                  scale: "1",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "14px",
                  color: "red",
                  animation: "scaleAnim 0.5s infinite alternate",
                  transformOrigin: "center",
                  "@keyframes scaleAnim": {
                    from: {
                      scale: "1",
                    },
                    to: {
                      scale: "1.1",
                    },
                  },
                },
              }}
            >
              Noir
            </Box>*/}

            {/* <Box
              onClick={(e) => {
                handleModel(e);
                setModelColr("Marron");
              }}
              sx={{
                //backgroundColor: "#f5f5dc",
                width: "fit-content",
                height: "40px",
                marginRight: "4px",
                border: "1px red solid",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                padding: "20px 30px",
                borderRadius: "12px",
              }}
            >
              Marron
            </Box>*/}
          </Box>

          <Box
            flexDirection={"row"}
            sx={{
              marginTop: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2px",
            }}
          >
            {size.map((item) => {
              return (
                <>
                  <Box
                    onClick={(e) => {
                      handleModel(e);
                      setModelSize(item);
                    }}
                    sx={{
                      //backgroundColor: "#f5f5dc",
                      width: "fit-content",
                      height: "50px",
                      marginRight: "4px",
                      border: "1px red solid",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                      padding: "8px 13px",
                      borderRadius: "12px",
                    }}
                  >
                    {item}
                  </Box>
                </>
              );
            })}
            {/*<Box
              onClick={(e) => {
                handleModel(e);
                setModelSize("42");
              }}
              sx={{
                //backgroundColor: "#f5f5dc",
                width: "50px",
                height: "50px",
                marginRight: "4px",
                border: "1px red solid",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                padding: "20px 30px",
                borderRadius: "12px",
              }}
            >
              42
            </Box>

            <Box
              onClick={(e) => {
                handleModel(e);
                setModelSize("44");
              }}
              sx={{
                //backgroundColor: "#f5f5dc",
                width: "50px",
                height: "50px",
                marginRight: "4px",
                border: "1px red solid",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                padding: "20px 30px",
                borderRadius: "12px",
              }}
            >
              44
            </Box>
            <Box
              onClick={(e) => {
                handleModel(e);
                setModelSize("46");
              }}
              sx={{
                //backgroundColor: "#f5f5dc",
                width: "50px",
                height: "50px",
                marginRight: "4px",
                border: "1px red solid",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                padding: "20px 30px",
                borderRadius: "12px",
              }}
            >
              46
            </Box>
            <Box
              onClick={(e) => {
                handleModel(e);
                setModelSize("48");
              }}
              sx={{
                //backgroundColor: "#f5f5dc",
                width: "50px",
                height: "50px",
                marginRight: "4px",
                border: "1px red solid",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                padding: "20px 30px",
                borderRadius: "12px",
              }}
            >
              48
            </Box>*/}
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              disabled={btnDisebled}
              sx={{
                fontWeight: "bold",
                width: "55%",
                margin: "8px 2px",
                color: "#000",
                backgroundColor: "#dbeafe",
                "&:hover": {
                  backgroundColor: "#dbeafe",
                },
              }}
              variant="contained"
              type="submit"
            >
              {"اشتري الان"}
            </Button>
            <Box
              sx={{
                width: "45%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "15px ",
                padding: "15px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  color: "#000",
                  backgroundColor: "#dbeafe",
                  "&:hover": {
                    backgroundColor: "#dbeafe",
                  },
                  marginTop: "0px",
                  padding: "8px 15px",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>{quantity}</Typography>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  onClick={() => {
                    if (quantity === 1) {
                      setQuantity(quantity);
                    } else {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </Typography>
              </Button>
            </Box>
          </Box>
        </form>
      )}
    </Box>
  );
}
