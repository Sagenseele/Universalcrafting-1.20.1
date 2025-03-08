ServerEvents.recipes(event => {
  
  function defaultPlates(plate, ingot) {
    event.recipes.create.pressing(plate, ingot)
  }

  function defaultRods(rod, ingot) {
    event.recipes.farmersdelight.cutting(ingot, '#forge:saws', [('2x ' + rod).toString()])
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
    'kubejs:plate_blueish'
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
    Item.of('kubejs:dust_blueish', 2),
    [
      '3x thermal:lapis_dust',
      '2x #forge:dusts/iron'
    ]
  )
  event.smelting('kubejs:ingot_blueish', 'kubejs:dust_blueish')
  defaultPlates('kubejs:plate_blueish', 'kubejs:ingot_blueish')
  defaultRods('kubejs:rod_blueish', 'kubejs:ingot_blueish')
  defaultPlates('kubejs:plate_yellow', 'kubejs:ingot_yellow')
  defaultRods('kubejs:rod_yellow', 'kubejs:ingot_yellow')
  
  
  
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
      A: 'kubejs:rod_blueish',
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
      B: 'kubejs:plate_blueish'
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
      B: 'kubejs:plate_blueish',
      C: 'kubejs:rod_blueish'
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
      C: 'kubejs:rod_blueish'
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
      A: 'kubejs:plate_blueish',
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
      A: 'kubejs:plate_blueish',
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
      A: 'kubejs:rod_yellow',
      B: 'kubejs:ingot_blueish',
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
      B: 'kubejs:plate_yellow'
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
      B: 'kubejs:plate_yellow',
      C: 'kubejs:rod_yellow'
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
      A: 'kubejs:plate_yellow',
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
      A: 'kubejs:plate_yellow',
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
      A: 'kubejs:plate_yellow',
      B: 'minecraft:bucket'
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
      A: 'kubejs:plate_blueish',
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
      A: 'kubejs:rod_blueish'
    }
  )

  event.shaped(
    Item.of('kubejs:electric_motor', 1),
    [
      'CAC',
      'CDC',
      'CBC'
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
      B: 'kubejs:plate_yellow',
      C: 'kubejs:rod_yellow'
    }
  )

  // Machine Frame
  event.replaceInput(
    { output: 'thermal:machine_frame' },
    'thermal:tin_gear',
    'kubejs:electric_motor'
  )

  // metallurgic infuser
  event.replaceInput(
    { output: 'mekanism:metallurgic_infuser' },
    'mekanism:ingot_osmium',
    'thermal:machine_frame'
  )
})