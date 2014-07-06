districtList = {
  "D01": "Boat Quay / Raffles Place / Marina",
  "D02": "Chinatown / Tanjong Pagar",
  "D03": "Alexandra / Commonwealth",
  "D04": "Harbourfront / Telok Blangah",
  "D05": "Buona Vista / West Coast / Clementi New Town",
  "D06": "City Hall / Clarke Quay",
  "D07": "Beach Road / Bugis / Rochor",
  "D08": "Farrer Park / Serangoon Rd",
  "D09": "Orchard / River Valley",
  "D10": "Tanglin / Holland",
  "D11": "Newton / Novena",
  "D12": "Balestier / Toa Payoh",
  "D13": "Macpherson / Potong Pasir",
  "D14": "Eunos / Geylang / Paya Lebar",
  "D15": "East Coast / Marine Parade",
  "D16": "Bedok / Upper East Coast",
  "D17": "Changi Airport / Changi Village",
  "D18": "Pasir Ris / Tampines",
  "D19": "Hougang / Punggol / Sengkang",
  "D20": "Ang Mo Kio / Bishan / Thomson",
  "D21": "Clementi Park / Upper Bukit Timah",
  "D22": "Boon Lay / Jurong / Tuas",
  "D23": "Bukit Batok / Bukit Panjang",
  "D24": "Choa Chu Kang / Tengah",
  "D25": "Admiralty / Woodlands",
  "D26": "Mandai / Upper Thomson",
  "D27": "Sembawang / Yishun",
  "D28": "Seletar / Yio Chu Kang"
};

mrtList = {
  "NS": {
    "NS1" : "Jurong East",
    "NS2" : "Bukit Batok",
    "NS3" : "Bukit Gombak",
    "NS4" : "Choa Chu Kang",
    "NS5" : "Yew Tee",
    "NS7" : "Kranji",
    "NS8" : "Marsiling",
    "NS9" : "Woodlands",
    "NS10": "Admiralty",
    "NS11": "Sembawang",
    "NS13": "Yishun",
    "NS14": "Khatib",
    "NS15": "Yio Chu Kang",
    "NS16": "Ang Mo Kio",
    "NS17": "Bishan",
    "NS18": "Braddle",
    "NS19": "Toa Payoh",
    "NS20": "Novena",
    "NS21": "Newton",
    "NS22": "Orchard",
    "NS23": "Somerset",
    "NS24": "Dhoby Ghaut",
    "NS25": "City Hall",
    "NS26": "Raffles Place",
    "NS27": "Marina Bay"
  },

  "EW": {
    "EW1" : "Pasir Ris",
    "EW2" : "Tampines",
    "EW3" : "Simei",
    "EW4" : "Tanah Merah",
    "EW5" : "Bedok",
    "EW6" : "Kembangan",
    "EW7" : "Eunos",
    "EW8" : "Paya Lebar",
    "EW9" : "Aljunied",
    "EW10": "Kallang",
    "EW11": "Lavendar",
    "EW12": "Bugis",
    "EW13": "City Hall",
    "EW14": "Raffles Place",
    "EW15": "Tanjong Pagar",
    "EW16": "Outram Park",
    "EW17": "Tiong Bahru",
    "EW18": "Redhill",
    "EW19": "Queenstown",
    "EW20": "Commonwealth",
    "EW21": "Buona Vista",
    "EW22": "Dover",
    "EW23": "Clementi",
    "EW24": "Jurong East",
    "EW25": "Chinese Garden",
    "EW26": "Lakeside",
    "EW27": "Boon Lay",
    "EW28": "Pioneer",
    "EW29": "Joo Koon"
  },

  "NE": {
    "NE1" : "HarbourFront",
    "NE3" : "Outram Park",
    "NE4" : "Chinatown",
    "NE5" : "Clarke Quay",
    "NE6" : "Dhoby Ghaut",
    "NE7" : "Little India",
    "NE8" : "Farrer Park",
    "NE9" : "Boon Keng",
    "NE10": "Potong Pasir",
    "NE11": "Woodleigh",
    "NE12": "Serangoon",
    "NE13": "Kovan",
    "NE14": "Hougang",
    "NE15": "Buangkok",
    "NE16": "Sengkang",
    "NE17": "Punggol"
  },

  "CC": {
    "CC1" : "Dhoby Ghaut",
    "CC2" : "Bras Basah",
    "CC3" : "Esplanade",
    "CC4" : "Promenade",
    "CC5" : "Nicoll Highway",
    "CC6" : "Stadium",
    "CC7" : "Mountbatten",
    "CC8" : "Dakota",
    "CC9" : "Paya Lebar",
    "CC10": "MacPherson",
    "CC11": "Tai Seng",
    "CC12": "Bartley",
    "CC13": "Serangoon",
    "CC14": "Lorong Chuan",
    "CC15": "Bishan",
    "CC16": "Marymount",
    "CC17": "Caldecott",
    "CC18": "Bukit Brown",
    "CC19": "Botanic Gardens",
    "CC20": "Farrer Road",
    "CC21": "Holland Village",
    "CC22": "Buona Vista",
    "CC23": "One-North",
    "CC24": "Kent Ridge",
    "CC25": "Haw Par Villa",
    "CC26": "Pasir Panjang",
    "CC27": "Labrador Park",
    "CC28": "Telok Blangah",
    "CC29": "HarbourFront"
  },

  "DT": {
    "DT14": "Bugis",
    "DT15": "Promenade",
    "DT16": "Bayfront",
    "DT17": "Downtown",
    "DT18": "Telok Ayer",
    "DT19": "Chinatown"
  }
};

config = {
  'getDistrict': function(){
    return districtList;
  },

  'getMRT': function(){
    return mrtList;
  }
};

module.exports = config;
