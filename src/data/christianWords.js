// Christian & Biblical Words Database for Imposterd Game

export const CATEGORIES = [
  { id: 'all', name: 'All Categories', icon: 'Sparkles', color: 'amber' },
  { id: 'ot_heroes', name: 'Old Testament Figures', icon: 'Scroll', color: 'amber' },
  { id: 'nt_figures', name: 'New Testament & Apostles', icon: 'Cross', color: 'blue' },
  { id: 'stories_miracles', name: 'Miracles & Bible Stories', icon: 'Flame', color: 'orange' },
  { id: 'biblical_places', name: 'Holy Places & Cities', icon: 'Landmark', color: 'emerald' },
  { id: 'faith_theology', name: 'Faith, Virtues & Church', icon: 'Heart', color: 'rose' },
  { id: 'artifacts_symbols', name: 'Holy Symbols & Artifacts', icon: 'Shield', color: 'purple' },
  { id: 'parables_books', name: 'Parables & Bible Books', icon: 'BookOpen', color: 'cyan' },
];

export const CHRISTIAN_WORDS = [
  // Old Testament Figures
  {
    word: 'Moses',
    category: 'ot_heroes',
    categoryName: 'Old Testament Figures',
    hint: 'Leader, Exodus, Lawgiver, Red Sea',
    undercoverPair: 'Aaron',
    bibleReference: 'Exodus 3-14',
    description: 'Led the Israelites out of Egypt and received the Ten Commandments on Mount Sinai.'
  },
  {
    word: 'Noah',
    category: 'ot_heroes',
    categoryName: 'Old Testament Figures',
    hint: 'Ark, Animals, Rain, Rainbow',
    undercoverPair: 'Abraham',
    bibleReference: 'Genesis 6-9',
    description: 'Built a massive wooden ark to preserve his family and animals from the great flood.'
  },
  {
    word: 'David',
    category: 'ot_heroes',
    categoryName: 'Old Testament Figures',
    hint: 'Sling, Giant, King, Shepherd, Harp',
    undercoverPair: 'Solomon',
    bibleReference: '1 Samuel 17, Psalms',
    description: 'Shepherd boy who defeated Goliath and became Israel’s greatest king and psalmist.'
  },
  {
    word: 'Abraham',
    category: 'ot_heroes',
    categoryName: 'Old Testament Figures',
    hint: 'Father of Nations, Covenant, Stars, Faith',
    undercoverPair: 'Isaac',
    bibleReference: 'Genesis 12-22',
    description: 'The father of faith, called by God to leave his homeland for the Promised Land.'
  },
  {
    word: 'Joseph',
    category: 'ot_heroes',
    categoryName: 'Old Testament Figures',
    hint: 'Coat of Many Colors, Dreams, Egypt, Brothers',
    undercoverPair: 'Benjamin',
    bibleReference: 'Genesis 37-50',
    description: 'Sold into slavery by his brothers, rose to become prime minister of Egypt.'
  },
  {
    word: 'Elijah',
    category: 'ot_heroes',
    categoryName: 'Old Testament Figures',
    hint: 'Prophet, Fire from Heaven, Chariot, Ravens',
    undercoverPair: 'Elisha',
    bibleReference: '1 Kings 17-19, 2 Kings 2',
    description: 'Challenged the prophets of Baal on Mount Carmel and was taken up in a whirlwind.'
  },
  {
    word: 'Samson',
    category: 'ot_heroes',
    categoryName: 'Old Testament Figures',
    hint: 'Strength, Hair, Lion, Philistines, Delilah',
    undercoverPair: 'Gideon',
    bibleReference: 'Judges 13-16',
    description: 'Judge endowed with supernatural physical strength tied to his Nazirite vow.'
  },
  {
    word: 'Daniel',
    category: 'ot_heroes',
    categoryName: 'Old Testament Figures',
    hint: 'Lions Den, Dreams, Babylon, Prayer',
    undercoverPair: 'Joseph',
    bibleReference: 'Daniel 1-6',
    description: 'Faithful prophet who refused to stop praying and survived the den of hungry lions.'
  },
  {
    word: 'Queen Esther',
    category: 'ot_heroes',
    categoryName: 'Old Testament Figures',
    hint: 'Courage, Palace, Feast, Saved her People',
    undercoverPair: 'Ruth',
    bibleReference: 'Esther 1-10',
    description: 'Jewish queen of Persia who risked her life saying "If I perish, I perish" to save Jews.'
  },
  {
    word: 'Jonah',
    category: 'ot_heroes',
    categoryName: 'Old Testament Figures',
    hint: 'Fish, Belly, Nineveh, Running Away, Storm',
    undercoverPair: 'Job',
    bibleReference: 'Jonah 1-4',
    description: 'Reluctant prophet swallowed by a great fish after fleeing God’s call to Nineveh.'
  },
  {
    word: 'Solomon',
    category: 'ot_heroes',
    categoryName: 'Old Testament Figures',
    hint: 'Wisdom, Temple, Wealth, Proverbs',
    undercoverPair: 'David',
    bibleReference: '1 Kings 3-10',
    description: 'King renowned for supreme wisdom and builder of the magnificent First Temple in Jerusalem.'
  },
  {
    word: 'Gideon',
    category: 'ot_heroes',
    categoryName: 'Old Testament Figures',
    hint: 'Fleece, 300 Men, Torches, Horns',
    undercoverPair: 'Joshua',
    bibleReference: 'Judges 6-8',
    description: 'Led a humble army of 300 men with clay jars, torches, and trumpets to victory.'
  },
  {
    word: 'Joshua',
    category: 'ot_heroes',
    categoryName: 'Old Testament Figures',
    hint: 'Walls of Jericho, Promised Land, Sun Stood Still',
    undercoverPair: 'Caleb',
    bibleReference: 'Joshua 1-6',
    description: 'Successor to Moses who commanded the sun to stand still and conquered Jericho.'
  },

  // New Testament & Apostles
  {
    word: 'Peter',
    category: 'nt_figures',
    categoryName: 'New Testament & Apostles',
    hint: 'Fisher of Men, Rock, Roosters Crow, Keys',
    undercoverPair: 'John',
    bibleReference: 'Matthew 16:18, John 21',
    description: 'Bold disciple who walked on water, denied Jesus three times, and was restored by love.'
  },
  {
    word: 'Paul (Saul of Tarsus)',
    category: 'nt_figures',
    categoryName: 'New Testament & Apostles',
    hint: 'Road to Damascus, Letters, Shipwreck, Missionary',
    undercoverPair: 'Barnabas',
    bibleReference: 'Acts 9, Epistles',
    description: 'Persecutor turned fiery apostle of Christ who penned much of the New Testament.'
  },
  {
    word: 'John the Baptist',
    category: 'nt_figures',
    categoryName: 'New Testament & Apostles',
    hint: 'Jordan River, Locusts, Honey, Camel Hair, Baptize',
    undercoverPair: 'Elijah',
    bibleReference: 'Matthew 3, Luke 1',
    description: 'Voice crying in the wilderness preparing the way of the Lord and baptizing Jesus.'
  },
  {
    word: 'Mary (Mother of Jesus)',
    category: 'nt_figures',
    categoryName: 'New Testament & Apostles',
    hint: 'Manger, Angel Gabriel, Bethlehem, Magnificat',
    undercoverPair: 'Martha',
    bibleReference: 'Luke 1-2',
    description: 'Favored young woman of Nazareth chosen by God to give birth to Jesus Christ.'
  },
  {
    word: 'Judas Iscariot',
    category: 'nt_figures',
    categoryName: 'New Testament & Apostles',
    hint: '30 Silver Coins, Betrayal, Kiss, Garden',
    undercoverPair: 'Thomas',
    bibleReference: 'Matthew 26:14-16',
    description: 'One of the Twelve who betrayed his Teacher in Gethsemane for thirty pieces of silver.'
  },
  {
    word: 'Doubting Thomas',
    category: 'nt_figures',
    categoryName: 'New Testament & Apostles',
    hint: 'Wounds, Hands, Belief, Resurrection, Touch',
    undercoverPair: 'Peter',
    bibleReference: 'John 20:24-29',
    description: 'Apostle who declared he would not believe until seeing the nail marks in Jesus’ hands.'
  },
  {
    word: 'Lazarus',
    category: 'nt_figures',
    categoryName: 'New Testament & Apostles',
    hint: 'Four Days, Tomb, Come Forth, Bethany, Graveclothes',
    undercoverPair: 'Jairus Daughter',
    bibleReference: 'John 11',
    description: 'Friend of Jesus raised from the dead four days after being buried in the tomb.'
  },
  {
    word: 'Zacchaeus',
    category: 'nt_figures',
    categoryName: 'New Testament & Apostles',
    hint: 'Sycamore Tree, Tax Collector, Short Stature, Jericho',
    undercoverPair: 'Matthew',
    bibleReference: 'Luke 19:1-10',
    description: 'Wealthy tax collector who climbed a sycamore tree to see Jesus passing by.'
  },
  {
    word: 'Stephen',
    category: 'nt_figures',
    categoryName: 'New Testament & Apostles',
    hint: 'First Christian Martyr, Stones, Heavenly Vision',
    undercoverPair: 'Timothy',
    bibleReference: 'Acts 6-7',
    description: 'First Christian martyr who forgave his killers as stones were cast at him.'
  },
  {
    word: 'Mary Magdalene',
    category: 'nt_figures',
    categoryName: 'New Testament & Apostles',
    hint: 'Garden, Empty Tomb, Rabboni, Early Morning',
    undercoverPair: 'Mary of Bethany',
    bibleReference: 'John 20:1-18',
    description: 'First witness to encounter the resurrected Christ outside the empty tomb on Sunday morning.'
  },

  // Miracles & Bible Stories
  {
    word: 'Noah’s Ark',
    category: 'stories_miracles',
    categoryName: 'Miracles & Stories',
    hint: 'Pairs of Animals, 40 Days, Flood, Olive Leaf',
    undercoverPair: 'Moses Basket',
    bibleReference: 'Genesis 6-8',
    description: 'The giant wooden vessel guided by God that survived the global flood.'
  },
  {
    word: 'Parting of the Red Sea',
    category: 'stories_miracles',
    categoryName: 'Miracles & Stories',
    hint: 'Walls of Water, Staff, Dry Land, Escape Egypt',
    undercoverPair: 'Jordan River Crossing',
    bibleReference: 'Exodus 14',
    description: 'God divided the waters through Moses so the Israelites could walk across on dry ground.'
  },
  {
    word: 'David and Goliath',
    category: 'stories_miracles',
    categoryName: 'Miracles & Stories',
    hint: 'Five Smooth Stones, Sling, Giant, Valley of Elah',
    undercoverPair: 'Samson and the Lion',
    bibleReference: '1 Samuel 17',
    description: 'Young shepherd trusted in the Lord and toppled the terrifying Philistine warrior with one stone.'
  },
  {
    word: 'Walking on Water',
    category: 'stories_miracles',
    categoryName: 'Miracles & Stories',
    hint: 'Sea of Galilee, Waves, Wind, Sinking, Faith',
    undercoverPair: 'Calming the Storm',
    bibleReference: 'Matthew 14:22-33',
    description: 'Jesus strolled across the stormy waters in the fourth watch of the night; Peter stepped out too.'
  },
  {
    word: 'Feeding of the 5,000',
    category: 'stories_miracles',
    categoryName: 'Miracles & Stories',
    hint: 'Five Loaves, Two Fish, 12 Baskets Left Over',
    undercoverPair: 'The Last Supper',
    bibleReference: 'Matthew 14:13-21',
    description: 'A boy’s small lunch miraculously multiplied to satisfy thousands of hungry listeners.'
  },
  {
    word: 'Daniel in the Lions’ Den',
    category: 'stories_miracles',
    categoryName: 'Miracles & Stories',
    hint: 'Angel shut mouths, Overnight, Persian King, Pit',
    undercoverPair: 'The Fiery Furnace',
    bibleReference: 'Daniel 6',
    description: 'Daniel spent the night unharmed among apex predators because God sent His angel.'
  },
  {
    word: 'The Fiery Furnace',
    category: 'stories_miracles',
    categoryName: 'Miracles & Stories',
    hint: 'Shadrach, Meshach, Abednego, Fourth Man in Fire',
    undercoverPair: 'The Burning Bush',
    bibleReference: 'Daniel 3',
    description: 'Three young Hebrew men thrown into blazing furnace emerged without even smelling like smoke.'
  },
  {
    word: 'The Burning Bush',
    category: 'stories_miracles',
    categoryName: 'Miracles & Stories',
    hint: 'Fire without Burning, Holy Ground, Remove Sandals',
    undercoverPair: 'Pillar of Fire',
    bibleReference: 'Exodus 3',
    description: 'God appeared to Moses in flames of fire from within a bush that did not burn up.'
  },
  {
    word: 'The Resurrection',
    category: 'stories_miracles',
    categoryName: 'Miracles & Stories',
    hint: 'Rolled Stone, Empty Grave, Third Day, Victory',
    undercoverPair: 'The Ascension',
    bibleReference: 'Luke 24, John 20',
    description: 'Jesus conquered death and the grave, rising alive on the third morning.'
  },
  {
    word: 'Walls of Jericho',
    category: 'stories_miracles',
    categoryName: 'Miracles & Stories',
    hint: 'Seven Days Marching, Trumpets, Shout, Collapsed',
    undercoverPair: 'Tower of Babel',
    bibleReference: 'Joshua 6',
    description: 'Israel marched around the fortified city for seven days before shouting and blowing shofars.'
  },
  {
    word: 'Water into Wine',
    category: 'stories_miracles',
    categoryName: 'Miracles & Stories',
    hint: 'Wedding at Cana, Stone Jars, First Miracle',
    undercoverPair: 'Feeding of the 5000',
    bibleReference: 'John 2:1-11',
    description: 'At His mother’s prompting, Jesus turned six jars of washing water into choice celebratory wine.'
  },

  // Biblical Places & Cities
  {
    word: 'Bethlehem',
    category: 'biblical_places',
    categoryName: 'Holy Places & Cities',
    hint: 'City of David, Manger, Star, Nativity',
    undercoverPair: 'Nazareth',
    bibleReference: 'Micah 5:2, Luke 2',
    description: 'Small town in Judea prophesied to be the birthplace of the Messiah King.'
  },
  {
    word: 'Jerusalem',
    category: 'biblical_places',
    categoryName: 'Holy Places & Cities',
    hint: 'Holy City, Mount Zion, Golden Gates, Temple',
    undercoverPair: 'Jericho',
    bibleReference: 'Psalms 122',
    description: 'The City of God, seat of kings David and Solomon, and location of the crucifixion and resurrection.'
  },
  {
    word: 'Garden of Eden',
    category: 'biblical_places',
    categoryName: 'Holy Places & Cities',
    hint: 'Tree of Life, Serpent, Forbidden Fruit, Paradise',
    undercoverPair: 'Garden of Gethsemane',
    bibleReference: 'Genesis 2-3',
    description: 'The pristine original garden paradise created by God for Adam and Eve.'
  },
  {
    word: 'Mount Sinai',
    category: 'biblical_places',
    categoryName: 'Holy Places & Cities',
    hint: 'Cloud, Thunder, Two Stone Tablets, Moses',
    undercoverPair: 'Mount of Olives',
    bibleReference: 'Exodus 19-20',
    description: 'The mountain wrapped in smoke and glory where God spoke the Ten Commandments.'
  },
  {
    word: 'Garden of Gethsemane',
    category: 'biblical_places',
    categoryName: 'Holy Places & Cities',
    hint: 'Olive Trees, Drops of Blood, Prayer, Betrayal',
    undercoverPair: 'Garden of Eden',
    bibleReference: 'Matthew 26:36-46',
    description: 'The garden at the foot of Mount of Olives where Jesus prayed "Not My will, but Yours be done."'
  },
  {
    word: 'River Jordan',
    category: 'biblical_places',
    categoryName: 'Holy Places & Cities',
    hint: 'Baptism, Naaman, John the Baptist, Crossing',
    undercoverPair: 'Red Sea',
    bibleReference: 'Matthew 3:13, 2 Kings 5',
    description: 'Sacred river where the Holy Spirit descended like a dove upon Jesus at His baptism.'
  },
  {
    word: 'Sea of Galilee',
    category: 'biblical_places',
    categoryName: 'Holy Places & Cities',
    hint: 'Fishermen, Storms, Calmed Waters, Boats',
    undercoverPair: 'Dead Sea',
    bibleReference: 'Mark 4:35-41',
    description: 'Freshwater lake where Jesus called Simon and Andrew, walked on water, and rebuked the wind.'
  },
  {
    word: 'Nazareth',
    category: 'biblical_places',
    categoryName: 'Holy Places & Cities',
    hint: 'Boyhood Home, Carpenter, Galilee, Can anything good come from here?',
    undercoverPair: 'Bethlehem',
    bibleReference: 'John 1:46, Luke 4',
    description: 'The humble hillside village where Jesus grew up learning carpentry alongside Joseph.'
  },
  {
    word: 'Nineveh',
    category: 'biblical_places',
    categoryName: 'Holy Places & Cities',
    hint: 'Sackcloth and Ashes, Repentance, Assyria, Jonah',
    undercoverPair: 'Babylon',
    bibleReference: 'Jonah 3',
    description: 'Capital city that repented in sackcloth and ashes following Jonah’s eight-word sermon.'
  },

  // Faith, Virtues & Christian Life
  {
    word: 'Grace',
    category: 'faith_theology',
    categoryName: 'Faith & Theology',
    hint: 'Unmerited Favor, Gift, Not by Works, Saved',
    undercoverPair: 'Mercy',
    bibleReference: 'Ephesians 2:8-9',
    description: 'God’s unearned, undeserved lavish love and favor freely bestowed through Jesus Christ.'
  },
  {
    word: 'Faith',
    category: 'faith_theology',
    categoryName: 'Faith & Theology',
    hint: 'Substance of things hoped for, Evidence unseen, Mustard Seed',
    undercoverPair: 'Hope',
    bibleReference: 'Hebrews 11:1',
    description: 'Confidence in what we hope for and assurance about what we do not see.'
  },
  {
    word: 'The Holy Trinity',
    category: 'faith_theology',
    categoryName: 'Faith & Theology',
    hint: 'Father, Son, Holy Spirit, Three in One',
    undercoverPair: 'Holy Spirit',
    bibleReference: 'Matthew 28:19',
    description: 'One God revealed eternally in three persons: the Father, the Son, and the Holy Spirit.'
  },
  {
    word: 'Baptism',
    category: 'faith_theology',
    categoryName: 'Faith & Theology',
    hint: 'Water, Immersion, New Life, Cleansing, Public Declaration',
    undercoverPair: 'Communion',
    bibleReference: 'Romans 6:3-4',
    description: 'Sacred ordinance symbolizing dying to sin and being raised with Christ into new life.'
  },
  {
    word: 'Holy Communion (Last Supper)',
    category: 'faith_theology',
    categoryName: 'Faith & Theology',
    hint: 'Bread and Cup, Remembrance, Body and Blood',
    undercoverPair: 'Baptism',
    bibleReference: '1 Corinthians 11:23-26',
    description: 'The meal shared in remembrance of Christ’s sacrifice on the cross for our sins.'
  },
  {
    word: 'Fruit of the Spirit',
    category: 'faith_theology',
    categoryName: 'Faith & Theology',
    hint: 'Love, Joy, Peace, Patience, Kindness, Goodness',
    undercoverPair: 'Armor of God',
    bibleReference: 'Galatians 5:22-23',
    description: 'The nine character traits produced in believers by the indwelling Holy Spirit.'
  },
  {
    word: 'Salvation',
    category: 'faith_theology',
    categoryName: 'Faith & Theology',
    hint: 'Deliverance, Cross, Eternal Life, Forgiven',
    undercoverPair: 'Redemption',
    bibleReference: 'Romans 10:9-10',
    description: 'Being saved from sin and spiritual death into eternal fellowship with God.'
  },
  {
    word: 'Forgiveness',
    category: 'faith_theology',
    categoryName: 'Faith & Theology',
    hint: 'Seventy Times Seven, Debt Cancelled, Mercy',
    undercoverPair: 'Grace',
    bibleReference: 'Matthew 18:21-22',
    description: 'Pardoning wrongdoing just as God in Christ freely forgave all our transgressions.'
  },
  {
    word: 'Prayer',
    category: 'faith_theology',
    categoryName: 'Faith & Theology',
    hint: 'Conversation with God, Closet, Petition, Intercession',
    undercoverPair: 'Worship',
    bibleReference: 'Philippians 4:6-7',
    description: 'Direct communion and heartfelt communication between a believer and our Heavenly Father.'
  },
  {
    word: 'Fellowship',
    category: 'faith_theology',
    categoryName: 'Faith & Theology',
    hint: 'Believers together, One Another, Breaking Bread, Unity',
    undercoverPair: 'Worship',
    bibleReference: 'Acts 2:42, 1 John 1:7',
    description: 'Sharing Christian love, encouragement, and community with brothers and sisters in Christ.'
  },

  // Holy Symbols & Artifacts
  {
    word: 'Ark of the Covenant',
    category: 'artifacts_symbols',
    categoryName: 'Symbols & Artifacts',
    hint: 'Cherubim, Pure Gold, Mercy Seat, Ten Commandments',
    undercoverPair: 'Altar of Incense',
    bibleReference: 'Exodus 25:10-22',
    description: 'Sacred gold-plated chest containing the stone tablets, manna jar, and Aaron’s budding rod.'
  },
  {
    word: 'The Old Rugged Cross',
    category: 'artifacts_symbols',
    categoryName: 'Symbols & Artifacts',
    hint: 'Wood, Golgotha, Sacrifice, Atonement, Salvation',
    undercoverPair: 'Crown of Thorns',
    bibleReference: '1 Peter 2:24',
    description: 'The instrument of Christ’s supreme sacrifice where the debt of human sin was cancelled.'
  },
  {
    word: 'Crown of Thorns',
    category: 'artifacts_symbols',
    categoryName: 'Symbols & Artifacts',
    hint: 'Mockery, Soldiers, King of the Jews, Head',
    undercoverPair: 'Purple Robe',
    bibleReference: 'John 19:2',
    description: 'Woven circlet of sharp briers forced onto Jesus’ brow by Roman mockers.'
  },
  {
    word: 'Staff of Moses',
    category: 'artifacts_symbols',
    categoryName: 'Symbols & Artifacts',
    hint: 'Turned to Serpent, Struck the Rock, Parted Sea',
    undercoverPair: 'Aarons Rod',
    bibleReference: 'Exodus 4:2-4, 14:16',
    description: 'The shepherd’s wooden rod that performed wonders across Egypt and the desert wilderness.'
  },
  {
    word: 'Golden Lampstand (Menorah)',
    category: 'artifacts_symbols',
    categoryName: 'Symbols & Artifacts',
    hint: 'Seven Branches, Pure Olive Oil, Holy Place, Light',
    undercoverPair: 'Altar of Incense',
    bibleReference: 'Exodus 25:31-40',
    description: 'Hammered pure gold seven-lamp candelabrum illuminating the sacred Tabernacle.'
  },
  {
    word: 'Manna from Heaven',
    category: 'artifacts_symbols',
    categoryName: 'Symbols & Artifacts',
    hint: 'Morning Dew, Honey Wafers, Daily Bread, Wilderness',
    undercoverPair: 'Quail',
    bibleReference: 'Exodus 16',
    description: 'The miracle sweet bread that settled with the morning dew to feed Israel for forty years.'
  },
  {
    word: 'The Armor of God',
    category: 'artifacts_symbols',
    categoryName: 'Symbols & Artifacts',
    hint: 'Belt of Truth, Shield of Faith, Sword of the Spirit, Helmet',
    undercoverPair: 'Fruit of the Spirit',
    bibleReference: 'Ephesians 6:10-18',
    description: 'Spiritual protection described by Paul to stand firm against every scheme of the adversary.'
  },
  {
    word: 'Dove with Olive Branch',
    category: 'artifacts_symbols',
    categoryName: 'Symbols & Artifacts',
    hint: 'Peace, Noah, Ark, Holy Spirit, Jordan River',
    undercoverPair: 'Rainbow',
    bibleReference: 'Genesis 8:11, Matthew 3:16',
    description: 'Symbol of peace, God’s reassurance, and the gentle manifestation of the Holy Spirit.'
  },
  {
    word: 'The Shofar (Ram’s Horn)',
    category: 'artifacts_symbols',
    categoryName: 'Symbols & Artifacts',
    hint: 'Blast, Jericho, Battle Call, Jubilee, Trumpet',
    undercoverPair: 'Silver Trumpet',
    bibleReference: 'Joshua 6:4-20',
    description: 'Ancient hollowed ram horn blown to herald holy assemblies and spiritual breakthrough.'
  },

  // Parables & Books of the Bible
  {
    word: 'The Prodigal Son',
    category: 'parables_books',
    categoryName: 'Parables & Books',
    hint: 'Fatted Calf, Robe, Ring, Pigs, Inheritance, Loving Father',
    undercoverPair: 'The Good Samaritan',
    bibleReference: 'Luke 15:11-32',
    description: 'Parable of the wandering younger son welcomed home with open arms and joyful celebration.'
  },
  {
    word: 'The Good Samaritan',
    category: 'parables_books',
    categoryName: 'Parables & Books',
    hint: 'Robbed Traveler, Oil and Wine, Innkeeper, Compassion',
    undercoverPair: 'The Prodigal Son',
    bibleReference: 'Luke 10:25-37',
    description: 'Jesus taught that our neighbor is anyone in need, demonstrated by a despised Samaritan.'
  },
  {
    word: 'Book of Genesis',
    category: 'parables_books',
    categoryName: 'Parables & Books',
    hint: 'In the Beginning, Creation, First Book, Eden',
    undercoverPair: 'Book of Exodus',
    bibleReference: 'Genesis 1:1',
    description: 'The book of origins: creation of the heavens and earth, humanity, and God’s covenant.'
  },
  {
    word: 'Book of Revelation',
    category: 'parables_books',
    categoryName: 'Parables & Books',
    hint: 'Patmos, Seven Seals, New Jerusalem, Alpha and Omega',
    undercoverPair: 'Book of Daniel',
    bibleReference: 'Revelation 1-22',
    description: 'Apostle John’s apocalyptic vision revealing Christ triumphant and the new heavens and earth.'
  },
  {
    word: 'The 23rd Psalm',
    category: 'parables_books',
    categoryName: 'Parables & Books',
    hint: 'The Lord is My Shepherd, Green Pastures, Valley of Shadow',
    undercoverPair: 'The Lord’s Prayer',
    bibleReference: 'Psalm 23',
    description: 'Beloved hymn of comfort declaring "The Lord is my shepherd; I shall not want."'
  },
  {
    word: 'The Lord’s Prayer',
    category: 'parables_books',
    categoryName: 'Parables & Books',
    hint: 'Our Father in Heaven, Hallowed be Thy Name, Daily Bread',
    undercoverPair: 'The Beatitudes',
    bibleReference: 'Matthew 6:9-13',
    description: 'The model prayer taught by Jesus to His disciples on how to pray to the Father.'
  }
];

export const DEFAULT_PLAYERS = [
  'Peter',
  'John',
  'Mary',
  'Paul',
  'Esther'
];
