ServerEvents.recipes(event => {
  
  function default_items(name) {
    var nugget = 'kubejs:' + name + '_nugget'
    var raw = 'raw_' + 'kubejs:' + name
    var crushed = 'crushed_' + 'kubejs:' + name

    default_plate(name)
    default_rod(name)
    default_smelting(name)
    default_compacting(name)
  }

  function default_plate(name) {
    var plate = 'kubejs:' + name + '_plate'
    var ingot = 'kubejs:' + name + '_ingot'
    event.recipes.create.pressing(plate, ingot)
    event.recipes.thermal.press(plate, ingot)
  }

  function default_rod(name) {
    var ingot = 'kubejs:' + name + '_ingot'
    var rod = 'kubejs:' + name + '_rod'
    event.recipes.farmersdelight.cutting(ingot, '#forge:saws', [('2x ' + rod).toString()])
  }

  function default_smelting(name) {
    var dust = 'kubejs:' + name + '_dust'
    var ingot = 'kubejs:' + name + '_ingot'
    event.recipes.smelting(ingot, dust)
  }

  function default_compacting(name) {
    var nugget = 'kubejs:' + name + '_nugget'
    var ingot = 'kubejs:' + name + '_ingot'
    event.shapeless(
      Item.of(ingot, 1),
      [
        '9x ' + nugget
      ]
    )
    event.shapeless(
      Item.of(nugget, 9),
      [
        '1x ' + ingot
      ]
    )
  }
  //material testing kit
  event.shaped(
      Item.of('kubejs:material_testing_kit', 2),
      [
        'ABA',
        'CDE',
        'AFA'
      ],
      {
        A: '#forge:ingots/iron',
        B: 'minecraft:diorite',
        C: 'minecraft:calcite',
        D: 'minecraft:granite',
        E: 'minecraft:andesite',
        F: 'minecraft:diorite'
      }
  )

  //advanced Material Data Card
  event.shaped(
      Item.of('kubejs:advanced_material_data_card', 1),
      [
        '   ',
        '   ',
        ' A '
      ],
      {
        A: 'kubejs:material_testing_kit'
      }
  )

  //Culinary Material Data Card
  event.shaped(
      Item.of('kubejs:culinary_data_card', 1),
      [
        '   ',
        '   ',
        ' A '
      ],
      {
        A: 'kubejs:advanced_material_data_card'
      }
  )

  //gem Data Card
  event.shaped(
      Item.of('kubejs:gem_data_card', 1),
      [
        '   ',
        '   ',
        ' A '
      ],
      {
        A: 'kubejs:advanced_material_data_card'
      }
  )

  //bloody Data Card
  event.shaped(
      Item.of('kubejs:bloody_data_card', 1),
      [
        '   ',
        '   ',
        ' A '
      ],
      {
        A: 'kubejs:advanced_material_data_card'
      }
  )

  //Twilight Data Card
  event.shaped(
      Item.of('kubejs:twilight_data_card', 1),
      [
        '   ',
        '   ',
        ' A '
      ],
      {
        A: 'kubejs:gem_data_card'
      }
  )

  //Compressed Data Card
  event.shaped(
      Item.of('kubejs:compressed_data_card', 1),
      [
        '   ',
        '   ',
        ' A '
      ],
      {
        A: 'kubejs:advanced_material_data_card'
      }
  )
    
  //Electricity Data Card
  event.shaped(
      Item.of('kubejs:electricity_data_card', 1),
      [
        '   ',
        '   ',
        ' A '
      ],
      {
        A: 'kubejs:advanced_material_data_card'
      }
  )

  //nuclear Data Card
  event.shaped(
      Item.of('kubejs:nuclear_data_card', 1),
      [
        '   ',
        '   ',
        ' A '
      ],
      {
        A: 'kubejs:electricity_data_card'
      }
  )

  //astral Data Card
  event.shaped(
      Item.of('kubejs:astral_data_card', 1),
      [
        '   ',
        '   ',
        ' A '
      ],
      {
        A: 'kubejs:electricity_data_card'
      }
  )

  //storage Data Card
  event.shaped(
      Item.of('kubejs:storage_data_card', 1),
      [
        '   ',
        '   ',
        ' A '
      ],
      {
        A: 'kubejs:advanced_material_data_card'
      }
  )
    
  //EMC Data Card
  event.shaped(
      Item.of('kubejs:emc_data_card', 1),
      [
        '   ',
        '   ',
        ' A '
      ],
      {
        A: 'kubejs:storage_data_card'
      }
  )

  // Overgrown Wood Log
  event.shaped(
      Item.of('kubejs:overgrown_wood_log', 1),
      [
        'BBB',
        'BAB',
        'BBB'
      ],
      {
        A: 'mysticalagriculture:dirt_essence',
        B: '#minecraft:logs'
      }
  )

  // Blood Altar
  event.replaceInput(
    { output: 'bloodmagic:altar' },
    'minecraft:gold_ingot',
    'minecraft:andesite'
  )

  // Sacrificial Knife
  event.remove({ id: 'bloodmagic:sacrificial_dagger'})
  event.shaped(
    Item.of('bloodmagic:sacrificialdagger', 1),
    [
      'A B',
      'AB ',
      'AAA'
    ],
    {
      A: 'minecraft:polished_granite',
      B: 'mysticalagriculture:nether_quartz_essence'
    }
  )
  
  // raw Iron
  event.recipes.bloodmagic.altar('minecraft:raw_iron', 'kubejs:wood_splinter').upgradeLevel(0).altarSyphon(400).consumptionRate(40).drainRate(40)
  
  // Water Wheel
  event.replaceInput(
    { output: 'create:water_wheel' },
    'create:shaft',
    'create:andesite_casing'
  )
  
  // Crushing Wheel
  event.remove({ id: 'create:mechanical_crafting/crushing_wheel'})
  event.shaped(
    Item.of('create:crushing_wheel', 1),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'create:andesite_alloy',
      B: '#minecraft:planks',
      C: 'create:andesite_casing'
    }
  )
  
  // Lapis Dust
  event.remove({ id: 'create:milling/lapis_lazuli'})
  event.recipes.create.milling('thermal:lapis_dust', 'minecraft:lapis_lazuli')
  
  // Coke Bricks
  event.replaceInput(
    { output: 'immersiveengineering:cokebrick' },
    'minecraft:clay_ball',
    'kubejs:blueish_plate'
  )
  
  // Blast Bricks
  event.replaceInput(
    { output: 'immersiveengineering:blastbrick' },
    'minecraft:magma_block',
    'immersiveengineering:cokebrick'
  )
  event.replaceInput(
    { output: 'immersiveengineering:blastbrick' },
    'minecraft:nether_brick',
    '#forge:plates/copper'
  )
  
  // Lapis Lazuli
  event.custom({
    type: 'create:splashing',
    ingredients: [
        { item: 'minecraft:flint' }
    ],
    results: [
        { item: 'minecraft:iron_nugget', chance: 0.6 },
        { item: 'minecraft:lapis_lazuli', chance: 0.4 } 
    ],
    id: 'custom:splashing/flint'
  });

  // Blueish
  event.recipes.create.milling('thermal:iron_dust', '#forge:ingots/iron')
  event.shapeless(
    Item.of('kubejs:blueish_dust', 2),
    [
      '3x thermal:lapis_dust',
      '2x #forge:dusts/iron'
    ]
  )
  default_items('blueish')

  // Yellow
  default_plate('yellow')
  default_rod('yellow')

  
  
  
  // Sulfur
  event.recipes.create.milling('thermal:sulfur_dust', '#forge:coal_coke')

  // Multiblock Tier 1
  event.shaped(
    Item.of('kubejs:frame_tier1', 1),
    [
      'A A',
      ' B ',
      'A A'
    ],
    {
      A: 'kubejs:blueish_rod',
      B: '#forge:ingots/iron',
    }
  )
  event.shaped(
    Item.of('kubejs:multiblock_tier1', 1),
    [
      ' B ',
      'BAB',
      ' B '
    ],
    {
      A: 'kubejs:frame_tier1',
      B: 'kubejs:blueish_plate'
    }
  )
  event.shaped(
    Item.of('mbd2:kinetic_crusher', 1),
    [
      'CBC',
      'BAB',
      'CBC'
    ],
    {
      A: 'minecraft:comparator',
      B: 'kubejs:blueish_plate',
      C: 'kubejs:blueish_rod'
    }
  )
  event.shaped(
    Item.of('mbd2:blast_furnace', 1),
    [
      'CBC',
      'BAB',
      'CBC'
    ],
    {
      A: 'kubejs:multiblock_tier1',
      B: '#forge:ingots/steel',
      C: 'kubejs:blueish_rod'
    }
  )
  event.shaped(
    Item.of('mbd2:kinetic_crusher_block', 1),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'create:andesite_alloy',
      B: '#minecraft:planks',
      C: 'create:andesite_casing'
    }
  )
  event.shaped(
    Item.of('mbd2:item_input_tier1', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:blueish_plate',
      B: 'minecraft:chest'
      
    }
  )
  event.shaped(
    Item.of('mbd2:item_output_tier1', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:blueish_plate',
      B: 'minecraft:hopper'
    }
  )
  event.shaped(
    Item.of('kubejs:coil_tier1', 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:wires/copper',
      B: '#forge:storage_blocks/copper'
    }
  )

  // Multiblock Tier 2
  event.shaped(
    Item.of('kubejs:frame_tier2', 1),
    [
      'A A',
      ' B ',
      'A A'
    ],
    {
      A: 'kubejs:yellow_rod',
      B: 'kubejs:blueish_ingot',
    }
  )
  event.shaped(
    Item.of('kubejs:multiblock_tier2', 1),
    [
      ' B ',
      'BAB',
      ' B '
    ],
    {
      A: 'kubejs:frame_tier2',
      B: 'kubejs:yellow_plate'
    }
  )
  event.shaped(
    Item.of('mbd2:washing_facility', 1),
    [
      'CBC',
      'BAB',
      'CBC'
    ],
    {
      A: 'thermal:machine_frame',
      B: 'kubejs:yellow_plate',
      C: 'kubejs:yellow_rod'
    }
  )
  event.shaped(
    Item.of('mbd2:item_input_tier2', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:yellow_plate',
      B: 'minecraft:chest'
      
    }
  )
  event.shaped(
    Item.of('mbd2:item_output_tier2', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:yellow_plate',
      B: 'minecraft:hopper'
    }
  )
  event.shaped(
    Item.of('mbd2:fluid_input_tier2', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:yellow_plate',
      B: 'minecraft:bucket'
    }
  )
  event.shaped(
    Item.of('mbd2:energy_input_tier2', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:yellow_plate',
      B: 'minecraft:redstone_block'
    }
  )
  
  // motorized frame

  event.shaped(
    Item.of('kubejs:stator', 1),
    [
      'A A',
      'ABA',
      'A A'
    ],
    {
      A: 'kubejs:blueish_plate',
      B: 'kubejs:coil_tier1'
    }
  )

  event.shaped(
    Item.of('kubejs:rotor', 1),
    [
      ' A ',
      'AAA',
      ' A '
    ],
    {
      A: 'kubejs:blueish_rod'
    }
  )

  event.shaped(
    Item.of('kubejs:electric_motor', 1),
    [
      'CCC',
      'BDA',
      'CCC'
    ],
    {
      A: 'kubejs:stator',
      B: 'kubejs:rotor',
      C: '#forge:plates/iron',
      D: 'create:precision_mechanism'
    }
  )
  // Brass F/Tunnel instead of Andesite F/Tunnel
  event.replaceInput(
    { output: 'create:brass_funnel' },
    ['create:brass_ingot',
    'create:electron_tube'],
    'create:andesite_alloy'
  )
  
  event.replaceInput(
    { output: 'create:brass_tunnel' },
    ['create:brass_ingot',
    'create:electron_tube'],
    'create:andesite_alloy'
  )

  // NASA Workbench
  event.replaceInput(
    { output: 'ad_astra:nasa_workbench' },
    'minecraft:redstone_torch',
    '#forge:plates/copper'
  )
  event.replaceInput(
    { output: 'ad_astra:nasa_workbench' },
    'minecraft:crafting_table',
    'pneumaticcraft:printed_circuit_board'
  )
  
  // Cobblestone Generator
  event.shaped(
    Item.of('mbd2:cobblestone_generator_tier1', 1),
    [
      'CCC',
      'ACB',
      'CCC'
    ],
    {
      A: 'minecraft:lava_bucket',
      B: 'minecraft:water_bucket',
      C: 'minecraft:cobblestone'
    }
  )

  event.shaped(
    Item.of('mbd2:drill_mk_i', 1),
    [
      'CBC',
      'BAB',
      'CBC'
    ],
    {
      A: 'thermal:machine_frame',
      B: '#forge:plates/steel',
      C: 'kubejs:yellow_rod'
    }
  )

  // Machine Frame
  event.replaceInput(
    { output: 'thermal:machine_frame' },
    'thermal:tin_gear',
    'kubejs:electric_motor'
  )

  // Steel Casing (Mekanism)
  event.replaceInput(
    { output: 'mekanism:steel_casing' },
    'mekanism:ingot_osmium',
    'thermal:machine_frame'
  )

  // processor binding
  event.replaceInput(
    { output: 'refinedstorage:processor_binding' },
    '#bookshelf:slime_balls',
    'pneumaticcraft:plastic'
  )

  // charger
  event.replaceInput(
    { output: 'ae2:charger' },
    'minecraft:iron_ingot',
    'pneumaticcraft:plastic'
  )

  // inscriber
  event.replaceInput(
    { output: 'ae2:inscriber' },
    'minecraft:iron_ingot',
    'pneumaticcraft:plastic'
  )

  //Philosopher's Stone
  event.remove({ id: 'projecte:philosophers_stone_alt'})
  event.replaceInput(
    { output: 'projecte:philosophers_stone' },
    'minecraft:diamond',
    'bloodmagic:archmagebloodorb'
  )
  event.replaceInput(
    { output: 'projecte:philosophers_stone' },
    'minecraft:glowstone_dust',
    'botania:gaia_ingot'
  )
  event.replaceInput(
    { output: 'projecte:philosophers_stone' },
    'minecraft:redstone',
    'twilightforest:carminite'
  )

  // Alchemical Chest
  event.replaceInput(
    { output: 'projecte:alchemical_chest' },
    'minecraft:diamond',
    'projecte:philosophers_stone'
  )

  // Steel Bore Head

  event.shaped(
    Item.of('kubejs:steel_bore_head', 1),
    [
      'DCD',
      ' A ',
      ' B '
    ],
    {
      A: 'thermal:machine_frame',
      B: 'immersiveengineering:drillhead_steel',
      C: 'immersiveengineering:stick_steel',
      D: 'immersiveengineering:component_iron'
    }
  )

  // Assembler
  event.shaped(
    Item.of('mbd2:assembler', 1),
    [
      'DGE',
      'FAF',
      'CBC'
    ],
    {
      A: 'thermal:machine_frame',
      B: 'pneumaticcraft:plastic',
      C: '#forge:sheetmetals/aluminum',
      D: 'immersiveengineering:slab_sheetmetal_nickel',
      E: 'pneumaticcraft:lubricant_bucket',
      F: 'immersiveengineering:component_steel',
      G: 'immersiveengineering:component_electronic_adv'
    }
  ).replaceIngredient('pneumaticcraft:lubricant_bucket', 'minecraft:bucket') 

  // Flawless Budding Certus Quartz
  event.recipes.bloodmagic.altar('ae2:flawless_budding_quartz', 'ae2:flawed_budding_quartz').upgradeLevel(2).altarSyphon(10000).consumptionRate(500).drainRate(500)

  // Grains of Infinity
  event.recipes.thermal.centrifuge([Item.of('minecraft:stone'), Item.of('enderio:grains_of_infinity').withChance(0.05)], 'minecraft:deepslate')

  // Amethyst
  event.recipes.bloodmagic.altar('minecraft:budding_amethyst', 'minecraft:amethyst_block').upgradeLevel(2).altarSyphon(10000).consumptionRate(500).drainRate(500)
  event.recipes.smelting('minecraft:amethyst_shard', 'apotheosis:rare_material')
  
  // Catericite
  event.recipes.smelting('mekanism:ingot_osmium', 'kubejs:raw_catericite')
  
  // Darthium
  event.recipes.smelting('thermal:nickel_ingot', 'kubejs:raw_darthium')

  // Milothium
  event.recipes.smelting('immersiveengineering:ingot_aluminum', 'kubejs:raw_milothium')

  // Plastic
  event.recipes.thermal.refinery([Fluid.of('pneumaticcraft:plastic', 1000)], Fluid.of('thermal:refined_fuel', 1000))
  event.recipes.thermal.chiller('pneumaticcraft:plastic', [Fluid.of('pneumaticcraft:plastic', 1000)])
  
  // Lubricant
  event.recipes.thermal.refinery([Fluid.of('pneumaticcraft:lubricant', 1000)], Fluid.of('immersiveengineering:biodiesel', 1000))

  
})