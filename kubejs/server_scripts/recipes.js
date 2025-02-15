ServerEvents.recipes(event => {
  
  function defaultPlates(plate, ingot) {
    event.recipes.create.pressing(plate, ingot)
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
        A: 'minecraft:iron_ingot',
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

  // Iron Nugget
  event.recipes.bloodmagic.altar('minecraft:iron_nugget', 'kubejs:wood_splinter').upgradeLevel(0).altarSyphon(100).consumptionRate(10).drainRate(10)

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
    'kubejs:plate_blueish'
  )
  
  // Blueish
  event.recipes.create.milling('thermal:iron_dust', 'minecraft:iron_ingot')
  event.shapeless(
    Item.of('kubejs:dust_blueish', 2),
    [
      '3x #forge:dusts/iron',
      '2x thermal:lapis_dust'
    ]
  )
  event.smelting('kubejs:ingot_blueish', 'kubejs:dust_blueish')
  defaultPlates('kubejs:plate_blueish', 'kubejs:ingot_blueish')
})