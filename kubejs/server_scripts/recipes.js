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
  event.recipes.bloodmagic.altar('minecraft:raw_iron', 'kubejs:wood_splinter').upgradeLevel(0).altarSyphon(900).consumptionRate(90).drainRate(90)
  
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
        { item: 'minecraft:lapis_lazuli', chance: 0.8 } // 100% chance
    ],
    id: 'custom:splashing/gravel'
  });

  // Blueish
  event.recipes.create.milling('thermal:iron_dust', '#forge:ingots/iron')
  event.shapeless(
    Item.of('kubejs:dust_blueish', 2),
    [
      '3x #forge:dusts/iron',
      '2x thermal:lapis_dust'
    ]
  )
  event.smelting('kubejs:ingot_blueish', 'kubejs:dust_blueish')
  defaultPlates('kubejs:plate_blueish', 'kubejs:ingot_blueish')
  event.shapeless(
    Item.of('kubejs:dust_blueish', 2),
    [
      '3x #forge:dusts/iron',
      '2x thermal:lapis_dust'
    ]
  )
  defaultRods('kubejs:rod_blueish', 'kubejs:ingot_blueish')
  
  
  
  // Sulfur
  event.recipes.create.milling('thermal:sulfur_dust', 'immersiveengineering:coal_coke')

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
      A: 'minecraft:chest',
      B: 'kubejs:plate_blueish'
      
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
      A: 'minecraft:hopper',
      B: 'kubejs:plate_blueish'
    }
  )
  
  

})