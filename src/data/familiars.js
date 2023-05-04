let familiars = [
    {
        'imageUrl': 'https://undermine.wiki.gg/images/b/b2/Canary.png',
        'itemType': 'Familiar',
        'craftingCost': '-',
        'name': 'Canary',
        'effect': 'Canary is the trusty familiar of the peasant and helps to collect gold',
        'description': 'A miner\'s best friend. In a weird change of pace, this canary seems to outlive the miners it works with.\n',
        'abilities': [
            'The Canary picks up gold for the peasant',
            'Gold picked up by the Canary and the peasant is increased in value',
            'The Canary gains speed and can steal gold from Pilfers'
        ],
        'id': '1',
        'rarity': 'Rare',
    },
    {
        'imageUrl': 'https://undermine.wiki.gg/images/c/c4/Djinn.png',
        'itemType': 'Familiar',
        'craftingCost': '100',
        'name': 'Djinn',
        'effect': 'Djinn is a Familiar of the Peasant and helps find secret rooms',
        'description': 'A cunning ally that sees through deception. Djinn are creatures that make the clouds their home. They are highly intelligent and have a devious sense of humor.',
        'abilities': [
            'The Djinn points out bombable walls for the peasant',
            'The Djinn points out hidden staircases for the peasant',
            'Every few rooms the Djinn will discover a treasure for the player'
        ],
        'id': '2',
        'rarity': 'Rare',
    },
    {
        'name': 'Firebird',
        'id': '3',
        'rarity': 'Common',
        'craftingCost': '-',
        'effect': 'Firebird is the trusty familiar of the peasant which fights enemies with fireballs',
        'description': 'A hot tempered bird. A legendary bird, worshiped as a demigod in the deserts to the far east.',
        'abilities': [
            'The Firebird will occasionally fire fireballs at enemies',
            'Reduces incoming fire damage and both the Firebird and peasant deal increased fire damage',
            'The duration of the ignite effect is increased for enemies'
        ],
        'imageUrl': 'https://undermine.wiki.gg/images/3/39/Firebird.png',
        'itemType': 'Familiar'
    },
    {
        'name': 'Nikko',
        'id': '4',
        'rarity': 'Rare',
        'craftingCost': '80',
        'effect': 'Nikko is a familiar of the peasant that fights enemies.',
        'description': 'A hard punching apeian. Was once a pet to Baba. Nikko escaped, and it is rumored he has been plotting his revenge ever since.',
        'abilities': [
            'Nikko attacks enemies in melee',
            'Increases the chance to critical strike for Nikko and peasant',
            'Critical strikes from Nikko deal damage to all nearby enemies'
        ],
        'imageUrl': 'https://undermine.wiki.gg/images/a/a7/Nikko.png',
        'itemType': 'Familiar'
    },
    {
        'name': "Sol's Phoenix",
        'id': '5',
        'rarity': 'Rare',
        'craftingCost': '90',
        'effect': 'Sol\'s Phoenix is the familiar of the Peasant that heals them when they take damage (roughly 25%)',
        'description': 'A guardian of the weak. An ancient creature that performs a cycle of rebirth once every hundred years.',
        'abilities': [
            'The Phoenix heals the peasant whenever they receive damage',
            'Whenever the Phoenix heals the peasant it applies an immolation effect that burns nearby enemies',
            'The Phoenix will resurrect the peasant once when they fall'
        ],
        'imageUrl': 'https://undermine.wiki.gg/images/2/2e/Sol%27s_Phoenix.png',
        'itemType': 'Familiar'
    },
    {
        'name': 'Sylph',
        'id': '6',
        'rarity': 'Common',
        'craftingCost': '120',
        'effect': 'Sylph is a Familiar of the Peasant and helps with Blessings.',
        'description': 'A blessed creature. Sylphs are elusive creatures. It is rumored that they commune with the gods.',
        'abilities': [
            'The cost of penance at altars is reduced',
            'Altars can be used twice',
            'The peasant receives a second level of a blessing when blessed'
        ],
        'imageUrl': 'https://undermine.wiki.gg/images/f/f4/Sylph.png',
        'itemType': 'Familiar'
    },
    {
        'name': 'Spirit',
        'id': '7',
        'rarity': 'Common',
        'craftingCost': '70',
        'effect': 'Spirit is a familiar of the Peasant and assists in carrying and finding Potions.',
        'description': 'Aged and fermented for eons. A tormented spirit that was found haunting a cask of wine.',
        'abilities': [
            'The peasant gains an additional potion slot',
            'The peasant has the chance to find an additional potion in chests',
            'The Spirit will occasionally drop another potion when a potion is drank'
        ],
        'imageUrl': 'https://undermine.wiki.gg/images/9/97/Spirit.png',
        'itemType': 'Familiar'
    },
    {
        'name': 'Thunderbird',
        'id': '8',
        'rarity': 'Common',
        'craftingCost': '70',
        'effect': 'Thunderbird is the trusty Familiar of the Peasant, which fights enemies with lightning bolts.',
        'description': 'A shockingly short tempered bird. During the rainy season, Thunderbirds bring storms to the highland plateau.',
        'abilities': [
            'The Thunderbird will occasionally fire bolts of lightning at enemies',
            'Reduces incoming lightning damage and both the Thunderbird and peasant deal increased lightning damage',
            'Chained lightning from the peasant and Thunderbird bounce to more targets'
        ],
        'imageUrl': 'https://undermine.wiki.gg/images/3/3d/Thunderbird.png',
        'itemType': 'Familiar'
    },
    {
        'name': 'Chaos Spawn',
        'id': '9',
        'rarity': 'Rare',
        'craftingCost': '200',
        'effect': 'Chaos Spawn is a familiar of the Peasant. At the start of the floor, it gives the player a random effect out of: a random Minor Curse.pngminor curse, a random blessing, revealing the layout of the floor, 80 XP for the familiar, and a random basic item. When it reaches level 3 it spawns Relics for the Peasant when the following conditions are met: Gaining a curse, gaining a blessing, taking damage, healing damage, and entering a secret floor.\n',
        'description': 'A child of the god Arengee. Chaos Spawn do not care for order. They have only one allegiance, and that is to entropy.\n',
        'abilities': [
            'Gain a random favor, or a curse at the beginning of a floor\n',
            'If the first wheel spin results in a curse, spin again\n',
            'Spawns a relic if the peasant gains a curse, gains a blessing, heals damage, receives damage, and enters a secret room on a single floor\n'
        ],
        'imageUrl': 'https://undermine.wiki.gg/images/a/a1/Chaos_Spawn.png',
        'itemType': 'Familiar'
    },
    {
        'name': 'Eidolon',
        'id': '10',
        'rarity': 'Rare',
        'craftingCost': '175',
        'effect': 'Eidolon is the trusty familiar of the peasant and helps with protection.\n',
        'description': 'A haunted suit of armor. One of many fallen soldiers that have not yet made peace. It dons the same armor it wore in life.\n',
        'abilities': [
            'Converts a portion of the peasants maximum health to two armor points\n',
            'Enemies have a chance of dropping armor shards\n',
            'Creates a devastating explosion when an armor point is lost\n'
        ],
        'imageUrl': 'https://undermine.wiki.gg/images/1/1d/Eidolon.png',
        'itemType': 'Familiar'
    },
    {
        'name': 'Lesser Demon',
        'id': '11',
        'rarity': 'Rare',
        'craftingCost': '150',
        'effect': 'Lesser Demon is a familiar that eats one of the Peasant\'s curses after defeating a certain amount of enemies. It is obtained by completing a run in the Othermine and cannot be found as a schematic.\n',
        'description': 'Looks up to greater demons. Lesser demons lack the immense power of their greater cousins, but don\'t make the mistake of thinking they\'re toothless.\n',
        'abilities': [
            'Removes a curse after defeating enemies and stores it for later\n',
            'Attacks enemies with a deadly beam that scales in size for each eaten curse\n',
            'Dark Light scales in damage for each eaten curse and penetrates enemies and objects\n'
        ],
        'imageUrl': 'https://undermine.wiki.gg/images/b/bf/Lesser_Demon.png',
        'itemType': 'Familiar',
    },
    {
        'name': 'Murderous Queen',
        'id': '12',
        'rarity': 'Rare',
        'craftingCost': '250',
        'effect': 'Murderous Queen is the trusty Familiar of the Peasant, which fights enemies with poison stingers.\n',
        'description': "A viciously defensive companion that isn't afraid to sting. The corruption of the bog turned bee against bee in a devastating civil war. The queen now sits upon a lonely throne.\n",
        'abilities': [
            'The queen will occasionally sting enemies\n',
            'The Queen will sometimes create a Drop of Honey, a powerful healing blessing\n',
            'Drop of Honey increases poison damage inflicted by the peasant or queen\n'
        ],
        'imageUrl': 'https://undermine.wiki.gg/images/d/dd/Murderous_Queen.png',
        'itemType': 'Familiar'
    },
    {
        'name': 'Pale Likeness',
        'id': '13',
        'rarity': 'Legendary',
        'craftingCost': '-',
        'effect': 'Pale Likeness is a Familiar that can be chosen by the Peasant, which causes chaos.',
        'description': 'A small piece of Din. One mustn\'t worry about the small things, but it\'s hard to ignore them when they\'re this annoying.\n',
        'abilities': [
            'Causes trouble\n',
            'Causes even more trouble\n',
            'Causes the maximum amount of trouble!\n'
        ],
        'imageUrl': 'https://undermine.wiki.gg/images/e/e6/Pale_Likeness.png',
        'itemType': 'Familiar'
    }
]
export default familiars;