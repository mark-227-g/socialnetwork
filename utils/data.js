const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];
  
  const words = [
      'lorem',
      'imsum',
      'dolor',
      'sit',
      'amet',
      'consectetur',
      'adipiscing',
      'elit',
      'curabitur',
      'vel',
      'hendrerit',
      'libero',
      'eleifend',
      'blandit',
      'nunc',
      'ornare',
      'odio',
      'ut',
      'orci',
      'gravida',
      'imperdiet',
      'nullam',
      'purus',
      'lacinia',
      'a',
      'pretium',
      'quis',
  ];
  
  const reactions = [
    'Doc',
    'Grumpy',
    'Happy',
    'Sleepy',
    'Bashful',
    'Sneezy',
    'Dopey',
  ];
  
  const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
  
  const genRandomWord = () => `${words[genRandomIndex(words)]}`;
  const genRandomReaction = () => `${reactions[genRandomIndex(reactions)]}`;
  
  // Gets a random full name
  const genRandomName = () =>
    `${names[genRandomIndex(names)]} ${names[genRandomIndex(names)]}`;

  const genRandomSentence = (int) => {
    let sentence='';
    for (let i = 0; i < int; i++) {
      sentence += ` ${genRandomWord()}`;
    }
    return sentence
  };

  module.exports={
   genRandomName,
   genRandomWord,
   genRandomReaction,
   genRandomSentence,
   genRandomIndex
  };
  
  
  