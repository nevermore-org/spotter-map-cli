import MapInfo from "../../Model/MapInfo";

// last cached 13/12/2021
const TYRIA_MAPS: MapInfo[] = [
  {
    "id": 15,
    "name": "Queensdale",
    "min_level": 1,
    "max_level": 15,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 65, 3, 2, 0],
    "region_id": 4,
    "region_name": "Kryta",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-43008, -27648], [43008, 30720]],
    "continent_rect": [[9856, 11648], [13440, 14080]]
  },
  {
    "id": 17,
    "name": "Harathi Hinterlands",
    "min_level": 35,
    "max_level": 45,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 65, 3, 2, 0],
    "region_id": 4,
    "region_name": "Kryta",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-36864, -33792], [39936, 33792]],
    "continent_rect": [[13440, 9472], [16640, 12288]]
  },
  {
    "id": 18,
    "name": "Divinity's Reach",
    "min_level": 0,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 65, 3, 2, 0],
    "region_id": 4,
    "region_name": "Kryta",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-21504, -21504], [24576, 21504]],
    "continent_rect": [[10240, 9856], [12160, 11648]]
  },
  {
    "id": 19,
    "name": "Plains of Ashford",
    "min_level": 1,
    "max_level": 15,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 2,
    "region_name": "Ascalon",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-49152, -24576], [49152, 24576]],
    "continent_rect": [[25088, 13568], [29184, 15616]]
  },
  {
    "id": 20,
    "name": "Blazeridge Steppes",
    "min_level": 40,
    "max_level": 50,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 2,
    "region_name": "Ascalon",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-24576, -49152], [24576, 49152]],
    "continent_rect": [[29184, 12160], [31232, 16256]]
  },
  {
    "id": 21,
    "name": "Fields of Ruin",
    "min_level": 30,
    "max_level": 40,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 2,
    "region_name": "Ascalon",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-36864, -36864], [36864, 36864]],
    "continent_rect": [[28672, 16256], [31744, 19328]]
  },
  {
    "id": 22,
    "name": "Fireheart Rise",
    "min_level": 60,
    "max_level": 70,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 2,
    "region_name": "Ascalon",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-39936, -33792], [39936, 33792]],
    "continent_rect": [[23808, 8448], [27136, 11264]]
  },
  {
    "id": 23,
    "name": "Kessex Hills",
    "min_level": 15,
    "max_level": 25,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 57, 3, 2, 0],
    "region_id": 4,
    "region_name": "Kryta",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-49152, -24576], [49152, 24576]],
    "continent_rect": [[9344, 14080], [13440, 16128]]
  },
  {
    "id": 24,
    "name": "Gendarran Fields",
    "min_level": 25,
    "max_level": 35,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 4,
    "region_name": "Kryta",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-49152, -24576], [52224, 24576]],
    "continent_rect": [[13440, 12288], [17664, 14336]]
  },
  {
    "id": 25,
    "name": "Iron Marches",
    "min_level": 50,
    "max_level": 60,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 67, 3, 2, 0],
    "region_id": 2,
    "region_name": "Ascalon",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-24576, -49152], [24576, 49152]],
    "continent_rect": [[27136, 9472], [29184, 13568]]
  },
  {
    "id": 26,
    "name": "Dredgehaunt Cliffs",
    "min_level": 40,
    "max_level": 50,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 1,
    "region_name": "Shiverpeak Mountains",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-27648, -36864], [27648, 39936]],
    "continent_rect": [[19456, 14976], [21760, 18176]]
  },
  {
    "id": 27,
    "name": "Lornar's Pass",
    "min_level": 25,
    "max_level": 40,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 1,
    "region_name": "Shiverpeak Mountains",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-21504, -58368], [21504, 58368]],
    "continent_rect": [[17664, 13312], [19456, 18176]]
  },
  {
    "id": 28,
    "name": "Wayfarer Foothills",
    "min_level": 1,
    "max_level": 15,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 58, 2, 0],
    "region_id": 1,
    "region_name": "Shiverpeak Mountains",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-21504, -55296], [21504, 55296]],
    "continent_rect": [[21760, 11264], [23552, 15872]]
  },
  {
    "id": 29,
    "name": "Timberline Falls",
    "min_level": 50,
    "max_level": 60,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 1,
    "region_name": "Shiverpeak Mountains",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-27648, -36864], [27648, 39936]],
    "continent_rect": [[18944, 18176], [21248, 21376]]
  },
  {
    "id": 30,
    "name": "Frostgorge Sound",
    "min_level": 70,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 1,
    "region_name": "Shiverpeak Mountains",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-36864, -36864], [36864, 36864]],
    "continent_rect": [[20736, 8192], [23808, 11264]]
  },
  {
    "id": 31,
    "name": "Snowden Drifts",
    "min_level": 15,
    "max_level": 25,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 1,
    "region_name": "Shiverpeak Mountains",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-49152, -24576], [49152, 24576]],
    "continent_rect": [[17664, 11264], [21760, 13312]]
  },
  {
    "id": 32,
    "name": "Diessa Plateau",
    "min_level": 15,
    "max_level": 25,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 2,
    "region_name": "Ascalon",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-43008, -27648], [43008, 27648]],
    "continent_rect": [[23552, 11264], [27136, 13568]]
  },
  {
    "id": 34,
    "name": "Caledon Forest",
    "min_level": 1,
    "max_level": 15,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 5,
    "region_name": "Tarnished Coast",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-21504, -46080], [24576, 49152]],
    "continent_rect": [[9344, 16128], [11264, 20096]]
  },
  {
    "id": 35,
    "name": "Metrica Province",
    "min_level": 1,
    "max_level": 15,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 56, 3, 2, 0],
    "region_id": 5,
    "region_name": "Tarnished Coast",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-24576, -39936], [27648, 39936]],
    "continent_rect": [[7168, 17152], [9344, 20480]]
  },
  {
    "id": 39,
    "name": "Mount Maelstrom",
    "min_level": 60,
    "max_level": 70,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 5,
    "region_name": "Tarnished Coast",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-46080, -27648], [46080, 30720]],
    "continent_rect": [[17792, 21376], [21632, 23808]]
  },
  {
    "id": 50,
    "name": "Lion's Arch",
    "min_level": 0,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 2, 0, 64, 3, 66],
    "region_id": 4,
    "region_name": "Kryta",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-27648, -18432], [30720, 18432]],
    "continent_rect": [[15232, 14336], [17664, 15872]]
  },
  {
    "id": 51,
    "name": "Straits of Devastation",
    "min_level": 70,
    "max_level": 75,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 3,
    "region_name": "Ruins of Orr",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-39936, -33792], [39936, 33792]],
    "continent_rect": [[14464, 22400], [17792, 25216]]
  },
  {
    "id": 53,
    "name": "Sparkfly Fen",
    "min_level": 55,
    "max_level": 65,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 5,
    "region_name": "Tarnished Coast",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-30720, -39936], [30720, 39936]],
    "continent_rect": [[15232, 19072], [17792, 22400]]
  },
  {
    "id": 54,
    "name": "Brisban Wildlands",
    "min_level": 15,
    "max_level": 25,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 56, 3, 2, 0],
    "region_id": 5,
    "region_name": "Tarnished Coast",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-39936, -30720], [43008, 33792]],
    "continent_rect": [[5888, 14464], [9344, 17152]]
  },
  {
    "id": 62,
    "name": "Cursed Shore",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 3,
    "region_name": "Ruins of Orr",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-24576, -49152], [24576, 49152]],
    "continent_rect": [[10112, 25216], [12160, 29312]]
  },
  {
    "id": 65,
    "name": "Malchor's Leap",
    "min_level": 75,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 3,
    "region_name": "Ruins of Orr",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-49152, -24576], [49152, 24576]],
    "continent_rect": [[10368, 23168], [14464, 25216]]
  },
  {
    "id": 73,
    "name": "Bloodtide Coast",
    "min_level": 45,
    "max_level": 55,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 4,
    "region_name": "Kryta",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-27648, -36864], [30720, 39936]],
    "continent_rect": [[15232, 15872], [17664, 19072]]
  },
  {
    "id": 91,
    "name": "The Grove",
    "min_level": 0,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 5,
    "region_name": "Tarnished Coast",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-15360, -24576], [18432, 24576]],
    "continent_rect": [[9728, 20096], [11136, 22144]]
  },
  {
    "id": 139,
    "name": "Rata Sum",
    "min_level": 0,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 55, 2, 0],
    "region_id": 5,
    "region_name": "Tarnished Coast",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-30720, -30720], [30720, 30720]],
    "continent_rect": [[4608, 19710], [7168, 22270]]
  },
  {
    "id": 218,
    "name": "Black Citadel",
    "min_level": 0,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 2,
    "region_name": "Ascalon",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-18432, -24576], [18432, 24576]],
    "continent_rect": [[23552, 13568], [25088, 15616]]
  },
  {
    "id": 326,
    "name": "Hoelbrak",
    "min_level": 0,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 58, 2, 0],
    "region_id": 1,
    "region_name": "Shiverpeak Mountains",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-27648, -18432], [27648, 21504]],
    "continent_rect": [[19456, 13312], [21760, 14976]]
  },
  {
    "id": 335,
    "name": "Claw Island",
    "min_level": 60,
    "max_level": 60,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 4,
    "region_name": "Kryta",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-18432, -18432], [18432, 18432]],
    "continent_rect": [[13952, 15872], [15488, 17408]]
  },
  {
    "id": 873,
    "name": "Southsun Cove",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 4,
    "region_name": "Kryta",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-30720, -21504], [33792, 21504]],
    "continent_rect": [[11520, 18944], [14208, 20736]]
  },
  {
    "id": 922,
    "name": "Labyrinthine Cliffs",
    "min_level": 1,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1],
    "region_id": 5,
    "region_name": "Tarnished Coast",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-18432, -18432], [18432, 18432]],
    "continent_rect": [[22190, 22264], [23726, 23800]]
  },
  {
    "id": 988,
    "name": "Dry Top",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 11,
    "region_name": "Maguuma Wastes",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-24576, -30720], [24576, 30720]],
    "continent_rect": [[3840, 14592], [5888, 17152]]
  },
  {
    "id": 1015,
    "name": "The Silverwastes",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 11,
    "region_name": "Maguuma Wastes",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-24576, -18432], [24576, 18432]],
    "continent_rect": [[3840, 14208], [5888, 15744]]
  },
  {
    "id": 1041,
    "name": "Dragon's Stand",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 47, 2, 0, 48, 3],
    "region_id": 10,
    "region_name": "Heart of Maguuma",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-36864, -30720], [36864, 33792]],
    "continent_rect": [[1280, 19712], [4352, 22400]]
  },
  {
    "id": 1043,
    "name": "Auric Basin",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 47, 2, 0, 48, 3],
    "region_id": 10,
    "region_name": "Heart of Maguuma",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-24576, -33792], [24576, 33792]],
    "continent_rect": [[512, 16128], [2560, 18944]]
  },
  {
    "id": 1045,
    "name": "Tangled Depths",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 47, 2, 0, 48, 3],
    "region_id": 10,
    "region_name": "Heart of Maguuma",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-39936, -27648], [39936, 27648]],
    "continent_rect": [[2560, 17408], [5888, 19712]]
  },
  {
    "id": 1052,
    "name": "Verdant Brink",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 47, 2, 0, 48, 3],
    "region_id": 10,
    "region_name": "Heart of Maguuma",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-36864, -18432], [39936, 18432]],
    "continent_rect": [[640, 14592], [3840, 16128]]
  },
  {
    "id": 1175,
    "name": "Ember Bay",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 10,
    "region_name": "Heart of Maguuma",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-46080, -46080], [46080, 46080]],
    "continent_rect": [[4606, 27134], [8446, 30974]]
  },
  {
    "id": 1178,
    "name": "Bitterfrost Frontier",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 1,
    "region_name": "Shiverpeak Mountains",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-36864, -18432], [36864, 18432]],
    "continent_rect": [[20736, 6656], [23808, 8192]]
  },
  {
    "id": 1185,
    "name": "Lake Doric",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 4,
    "region_name": "Kryta",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-15360, -30720], [15360, 30720]],
    "continent_rect": [[12160, 9088], [13440, 11648]]
  },
  {
    "id": 1195,
    "name": "Draconis Mons",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 20,
    "region_name": "Ring of Fire",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-46080, -46080], [46080, 46080]],
    "continent_rect": [[1950, 22900], [5790, 26740]]
  },
  {
    "id": 1203,
    "name": "Siren's Landing",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 3,
    "region_name": "Ruins of Orr",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-39936, -15360], [39936, 15360]],
    "continent_rect": [[14234, 25216], [17562, 26496]]
  },
  {
    "id": 1210,
    "name": "Crystal Oasis",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 49, 2, 0],
    "region_id": 12,
    "region_name": "Crystal Desert",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-61440, -30720], [61440, 30720]],
    "continent_rect": [[24488, 25920], [29608, 28480]]
  },
  {
    "id": 1211,
    "name": "Desert Highlands",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 49, 2, 0],
    "region_id": 12,
    "region_name": "Crystal Desert",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-61440, -30720], [61440, 30720]],
    "continent_rect": [[24488, 23360], [29608, 25920]]
  },
  {
    "id": 1215,
    "name": "Windswept Haven",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 49, 2, 0],
    "region_id": 12,
    "region_name": "Crystal Desert",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-15360, -15360], [15360, 15360]],
    "continent_rect": [[31248, 34688], [32528, 35968]]
  },
  {
    "id": 1226,
    "name": "The Desolation",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 49, 2, 0],
    "region_id": 12,
    "region_name": "Crystal Desert",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-43008, -61440], [43008, 61440]],
    "continent_rect": [[25472, 31808], [29056, 36928]]
  },
  {
    "id": 1228,
    "name": "Elon Riverlands",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 49, 2, 0],
    "region_id": 12,
    "region_name": "Crystal Desert",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-43008, -39936], [43008, 43008]],
    "continent_rect": [[25472, 28352], [29056, 31808]]
  },
  {
    "id": 1248,
    "name": "Domain of Vabbi",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 49, 2, 0],
    "region_id": 12,
    "region_name": "Crystal Desert",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-58368, -36864], [58368, 39936]],
    "continent_rect": [[30848, 35968], [35712, 39168]]
  },
  {
    "id": 1263,
    "name": "Domain of Istan",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 12,
    "region_name": "Crystal Desert",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-46080, -46080], [46080, 46080]],
    "continent_rect": [[22550, 43532], [26390, 47372]]
  },
  {
    "id": 1271,
    "name": "Sandswept Isles",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 49, 2, 0],
    "region_id": 12,
    "region_name": "Crystal Desert",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-36864, -52224], [39936, 52224]],
    "continent_rect": [[19226, 39018], [22426, 43370]]
  },
  {
    "id": 1288,
    "name": "Domain of Kourna",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 49, 2, 0],
    "region_id": 12,
    "region_name": "Crystal Desert",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-49152, -55296], [49152, 58368]],
    "continent_rect": [[30856, 43188], [34952, 47924]]
  },
  {
    "id": 1301,
    "name": "Jahai Bluffs",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 49, 2, 0],
    "region_id": 12,
    "region_name": "Crystal Desert",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-49152, -36864], [49152, 39936]],
    "continent_rect": [[30548, 39992], [34644, 43192]]
  },
  {
    "id": 1310,
    "name": "Thunderhead Peaks",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 1,
    "region_name": "Shiverpeak Mountains",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-39936, -43008], [39936, 46080]],
    "continent_rect": [[23052, 18552], [26380, 22264]]
  },
  {
    "id": 1317,
    "name": "Dragonfall",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 49, 2, 0],
    "region_id": 12,
    "region_name": "Crystal Desert",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-39936, -33792], [43008, 33792]],
    "continent_rect": [[11200, 32000], [14656, 34816]]
  },
  {
    "id": 1330,
    "name": "Grothmar Valley",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 2,
    "region_name": "Ascalon",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-36864, -30720], [39936, 30720]],
    "continent_rect": [[26624, 1120], [29824, 3680]]
  },
  {
    "id": 1343,
    "name": "Bjora Marches",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 1,
    "region_name": "Shiverpeak Mountains",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-52224, -24576], [55296, 27648]],
    "continent_rect": [[22143, 588], [26623, 2764]]
  },
  {
    "id": 1370,
    "name": "Eye of the North",
    "min_level": 0,
    "max_level": 0,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 1,
    "region_name": "Shiverpeak Mountains",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-15360, -15360], [15360, 15360]],
    "continent_rect": [[24576, 4864], [25856, 6144]]
  },
  {
    "id": 1371,
    "name": "Drizzlewood Coast",
    "min_level": 80,
    "max_level": 80,
    "default_floor": 1,
    "type": "Public",
    "floors": [1, 3, 2, 0],
    "region_id": 1,
    "region_name": "Shiverpeak Mountains",
    "continent_id": 1,
    "continent_name": "Tyria",
    "map_rect": [[-24576, -52224], [27648, 55296]],
    "continent_rect": [[17360, 1425], [19536, 5905]]
  }
]

export default TYRIA_MAPS;