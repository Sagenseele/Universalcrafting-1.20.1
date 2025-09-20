ServerEvents.recipes(event => {

  const raw_materials = ['#forge:raw_materials/tin', '#forge:raw_materials/silver', '#forge:raw_materials/copper', '#forge:raw_materials/nickel', '#forge:raw_materials/osmium', '#forge:raw_materials/lead', '#forge:raw_materials/uranium', '#forge:raw_materials/gold', '#forge:raw_materials/iron', 'kubejs:raw_catericite', 'kubejs:raw_darthium', 'kubejs:raw_milothium', 'kubejs:raw_ecolinit']
  const dusts = ['thermal:tin_dust', 'thermal:silver_dust', 'thermal:copper_dust', 'thermal:nickel_dust', 'mekanism:dust_osmium', 'thermal:lead_dust', 'immersiveengineering:dust_uranium', 'thermal:gold_dust', 'thermal:iron_dust', 'thermal:tin_dust', 'immersiveengineering:dust_aluminum', 'thermal:nickel_dust', 'mekanism:dust_osmium']


  function level_up_10(list) {
    list.forEach(relic => {
      event.shapeless(
        Item.of(relic),
        [
          Item.of(relic),
          'kubejs:relic_level_up'
        ]).modifyResult((grid, result) => {
          let item = grid.find(relic)
          let nbt_data = item.getNbt()
          if (nbt_data['leveling'] === undefined) { nbt_data['leveling'] = { experience: 0, level: 0, points: 0 } }
          if (nbt_data.leveling['level'] === undefined) { nbt_data['leveling']['level'] = 0; nbt_data['leveling']['points'] = 0 }
          if (nbt_data.leveling.level < 10) {
            nbt_data.leveling.level = nbt_data.leveling.level + 1
            nbt_data.leveling.points = nbt_data.leveling.points + 1
          }
          return result.withNBT(nbt_data)
        })
    })
  }
  level_up_10(['artifacts:snorkel', 'artifacts:villager_hat', 'artifacts:superstitious_hat', 'artifacts:anglers_hat', 'artifacts:lucky_scarf', 'artifacts:scarf_of_invisibility'])

  let relics = Ingredient.of(/^relics:(?!.*(researching|relic_experience))/).itemIds
  level_up_10(relics)

  raw_materials.forEach((raw, index) =>
    manualCrushing(dusts[index], raw)
  )

  function kubejs_items(name) {
    var plate = 'kubejs:' + name + '_plate'
    var ingot = 'kubejs:' + name + '_ingot'
    var rod = 'kubejs:' + name + '_rod'
    var dust = 'kubejs:' + name + '_dust'
    var nugget = 'kubejs:' + name + '_nugget'
    default_plate(plate, ingot)
    default_rod(rod, ingot)
    default_smelting(ingot, dust)
    default_compacting(nugget, ingot)
  }

  function manualCrushing(dust, raw) {
    event.shapeless(
      Item.of(dust, 1),
      [
        Item.of('silentgear:prospector_hammer'),
        raw
      ]
    ).damageIngredient(0).keepIngredient('silentgear:prospector_hammer')
  }
  function kubejs_crushing(name) {
    var crushed = 'kubejs:crushed_' + name
    var raw = 'kubejs:raw_' + name
    event.recipes.thermal.pulverizer(crushed, raw).energy(500)
    event.recipes.create.milling(crushed, raw)
    event.recipes.enderio.sag_milling([crushed], raw);
    mekanism_crusher(crushed, raw)
  }

  function default_crushing(crushed, raw) {
    event.recipes.thermal.pulverizer(crushed, raw).energy(500)
    event.recipes.create.milling(crushed, raw)
    event.recipes.enderio.sag_milling([crushed], raw);
    mekanism_crusher(crushed, raw)
  }

  function default_plate(plate, ingot) {
    event.recipes.create.pressing(plate, ingot)
    event.recipes.thermal.press(plate, ingot)
  }

  function default_rod(rod, ingot) {
    event.recipes.farmersdelight.cutting(ingot, '#forge:saws', [('2x ' + rod).toString()])
  }

  function default_smelting(ingot, dust) {
    event.recipes.smelting(ingot, dust)
  }

  function default_compacting(nugget, ingot) {
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

  function default_2alloys(result, energy, input1, input2) {
    event.recipes.thermal.smelter(result, [input1, input2]).energy(energy)
    event.recipes.enderio.alloy_smelting(result, [input1, input2]).energy(energy)
  }
  function default_3alloys(result, energy, input1, input2, input3) {
    event.recipes.thermal.smelter(result, [input1, input2, input3]).energy(energy)
    event.recipes.enderio.alloy_smelting(result, [input1, input2, input3]).energy(energy)
  }

  function mekanism_crusher(output, input) {
    event.custom(
      {
        type: "mekanism:crushing",
        "input": {
          "ingredient": {
            "item": input
          }
        },
        "output": {
          "item": output
        }
      }
    )
  }

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

  //Bloody Data Card
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

  // Overgrown Wood Log
  // Look for Datapack...

  // Water Wheel
  event.replaceInput(
    { output: 'create:water_wheel' },
    'create:shaft',
    'create:andesite_casing'
  )

  // Mechanical Saw
  event.remove({ id: 'create:crafting/kinetics/mechanical_saw' })


  // Wrench
  event.replaceInput(
    { output: 'create:wrench' },
    '#forge:plates/gold',
    'create:andesite_alloy'
  )

  event.replaceInput(
    { output: 'create:wrench' },
    'create:cogwheel',
    '#forge:rods/wooden'
  )

  // Crushing Wheel
  event.remove({ id: 'create:mechanical_crafting/crushing_wheel' })
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
  event.remove({ id: 'create:milling/lapis_lazuli' })
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

  // Conveyor Belt alternative
  event.shaped(
    Item.of('immersiveengineering:conveyor_basic', 6),
    [
      '   ',
      'AAA',
      'BCB'
    ],
    {
      A: 'create:belt_connector',
      B: '#forge:ingots/iron',
      C: 'minecraft:redstone'
    }
  )

  // Lapis Lazuli
  event.custom({
    type: 'create:splashing',
    ingredients: [
      { item: 'minecraft:flint' }
    ],
    results: [
      { item: 'minecraft:iron_nugget', chance: 0.6 },
      { item: 'minecraft:lapis_lazuli', chance: 0.2 }
    ],
    id: 'custom:splashing/flint'
  });

  // Blueish
  event.recipes.create.milling('thermal:iron_dust', '#forge:ingots/iron')
  event.shapeless(
    Item.of('kubejs:blueish_dust', 5),
    [
      '3x thermal:lapis_dust',
      '2x #forge:dusts/iron'
    ]
  )
  kubejs_items('blueish')

  // sulfeel
  default_plate('kubejs:sulfeel_plate', 'kubejs:sulfeel_ingot')
  default_rod('kubejs:sulfeel_rod', 'kubejs:sulfeel_ingot')
  default_compacting('kubejs:sulfeel_nugget', 'kubejs:sulfeel_ingot')
  default_2alloys('kubejs:sulfeel_ingot', 5000, '#forge:dusts/sulfur', '2x kubejs:blueish_ingot')


  // Turquoise
  kubejs_items('turquoise')

  // Sulfur
  event.recipes.create.milling('thermal:sulfur_dust', '#forge:coal_coke')

  // Multiblock Tier 1
  event.shaped(
    Item.of('kubejs:frame_tier_1', 1),
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
    Item.of('kubejs:multiblock_tier_1', 1),
    [
      ' B ',
      'BAB',
      ' B '
    ],
    {
      A: 'kubejs:frame_tier_1',
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
      A: 'kubejs:multiblock_tier_1',
      B: '#forge:ingots/steel',
      C: 'kubejs:blueish_rod'
    }
  )
  event.shaped(
    Item.of('mbd2:kinetic_crusher_block', 1),
    [
      'BCB',
      'CAC',
      'BCB'
    ],
    {
      A: 'create:crushing_wheel',
      B: '#minecraft:planks',
      C: '#forge:plates/iron'
    }
  )
  event.shaped(
    Item.of('mbd2:item_input_tier_1', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:blueish_plate',
      B: '#forge:chests'

    }
  )
  event.shaped(
    Item.of('mbd2:item_output_tier_1', 1),
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
    Item.of('kubejs:coil_tier_1', 1),
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

  event.shaped(
    Item.of('mbd2:multiplex_hatch_mark_1', 1),
    [
      ' C ',
      ' A ',
      'BBB'
    ],
    {
      A: 'mysticalagriculture:prudentium_ingot_block',
      B: 'kubejs:multiblock_tier_1',
      C: 'ae2:crafting_accelerator'
    }
  )

  // Multiblock Tier 2
  event.shaped(
    Item.of('kubejs:frame_tier_2', 1),
    [
      'A A',
      ' B ',
      'A A'
    ],
    {
      A: 'kubejs:sulfeel_rod',
      B: 'kubejs:blueish_ingot',
    }
  )
  event.shaped(
    Item.of('kubejs:multiblock_tier_2', 1),
    [
      ' B ',
      'BAB',
      ' B '
    ],
    {
      A: 'kubejs:frame_tier_2',
      B: 'kubejs:sulfeel_plate'
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
      A: 'mekanism:steel_casing',
      B: 'kubejs:sulfeel_plate',
      C: 'kubejs:sulfeel_rod'
    }
  )
  event.shaped(
    Item.of('mbd2:item_input_tier_2', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:sulfeel_plate',
      B: 'minecraft:chest'

    }
  )
  event.shaped(
    Item.of('mbd2:item_output_tier_2', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:sulfeel_plate',
      B: 'minecraft:hopper'
    }
  )
  event.shaped(
    Item.of('mbd2:fluid_input_tier_2', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:sulfeel_plate',
      B: 'minecraft:bucket'
    }
  )
  event.shaped(
    Item.of('mbd2:energy_input_tier_2', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:sulfeel_plate',
      B: 'minecraft:redstone_block'
    }
  )

  event.shaped(
    Item.of('mbd2:multiplex_hatch_mark_2', 1),
    [
      ' C ',
      ' A ',
      'BBB'
    ],
    {
      A: 'mysticalagriculture:tertium_ingot_block',
      B: 'kubejs:multiblock_tier_2',
      C: 'ae2:crafting_accelerator'
    }
  )
  // Multiblock Tier 3
  event.recipes.thermal.bottler('kubejs:turquoise_ingot', [Fluid.of('pneumaticcraft:plastic', 50), 'kubejs:sulfeel_ingot'])
  event.shaped(
    Item.of('kubejs:frame_tier_3', 1),
    [
      'A A',
      ' B ',
      'A A'
    ],
    {
      A: 'kubejs:turquoise_rod',
      B: 'kubejs:sulfeel_ingot',
    }
  )
  event.shaped(
    Item.of('kubejs:multiblock_tier_3', 1),
    [
      ' B ',
      'BAB',
      ' B '
    ],
    {
      A: 'kubejs:frame_tier_3',
      B: 'kubejs:turquoise_plate'
    }
  )
  event.shaped(
    Item.of('mbd2:item_input_tier_3', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:turquoise_plate',
      B: 'minecraft:chest'

    }
  )
  event.shaped(
    Item.of('mbd2:item_output_tier_3', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:turquoise_plate',
      B: 'minecraft:hopper'
    }
  )
  event.shaped(
    Item.of('mbd2:fluid_input_tier_3', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:turquoise_plate',
      B: 'minecraft:bucket'
    }
  )
  event.shaped(
    Item.of('mbd2:energy_input_tier_3', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:turquoise_plate',
      B: 'minecraft:redstone_block'
    }
  )

  event.shaped(
    Item.of('mbd2:magnetizer', 1),
    [
      ' B ',
      'CDC',
      'EFG'
    ],
    {
      B: 'kubejs:turquoise_plate',
      C: 'kubejs:coil_tier_1',
      D: 'kubejs:electrical_machine_casing',
      E: 'kubejs:electric_motor',
      F: 'ad_astra:ostrum_block',
      G: 'mekanism:advanced_induction_provider'
    }
  )

  event.shaped(
    Item.of('mbd2:multiplex_hatch_mark_3', 1),
    [
      ' C ',
      ' A ',
      'BBB'
    ],
    {
      A: 'mysticalagriculture:imperium_ingot_block',
      B: 'kubejs:multiblock_tier_3',
      C: 'ae2:crafting_accelerator'
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
      A: 'kubejs:sulfeel_plate',
      B: 'kubejs:coil_tier_1'
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

  // Matter Replicator
  event.shaped(
    Item.of('mbd2:matter_replicator', 1),
    [
      'BBB',
      'ACA',
      'BBB'
    ],
    {
      A: 'bloodmagic:blankslate',
      B: '#forge:stone',
      C: 'create:andesite_casing'
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
      A: 'mekanism:steel_casing',
      B: '#forge:plates/steel',
      C: 'kubejs:sulfeel_rod'
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

  // Redstone Engineering Block
  event.replaceInput(
    { output: 'immersiveengineering:rs_engineering' },
    'minecraft:redstone',
    'thermal:rf_coil'
  )

  // Light Engineering Block
  event.replaceInput(
    { output: 'immersiveengineering:light_engineering' },
    'minecraft:copper_ingot',
    'thermal:machine_frame'
  )

  // Heavy Engineering Block
  event.replaceInput(
    { output: 'immersiveengineering:heavy_engineering' },
    'thermal:electrum_ingot',
    'mekanism:steel_casing'
  )

  // processor binding
  event.replaceInput(
    { output: 'refinedstorage:processor_binding' },
    '#bookshelf:slime_balls',
    'pneumaticcraft:plastic'
  )

  // apotheosis:reforging_table
  event.replaceInput(
    { output: 'apotheosis:reforging_table' },
    'minecraft:netherite_ingot',
    'twilightforest:fiery_block'
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

  // Steel Bore Head
  event.shaped(
    Item.of('kubejs:steel_bore_head', 1),
    [
      'DCD',
      ' A ',
      ' B '
    ],
    {
      A: 'mekanism:steel_casing',
      B: 'immersiveengineering:drillhead_steel',
      C: 'immersiveengineering:stick_steel',
      D: 'immersiveengineering:component_iron'
    }
  )

  // Assembler
  event.shaped(
    Item.of('mbd2:assembler', 1),
    [
      ' D ',
      'BAB',
      'CBC'
    ],
    {
      A: 'immersiveengineering:heavy_engineering',
      B: 'kubejs:turquoise_plate',
      C: '#forge:sheetmetals/aluminum',
      D: 'immersiveengineering:component_electronic_adv'
    }
  ).replaceIngredient('pneumaticcraft:lubricant_bucket', 'minecraft:bucket')

  // Crystal Chamber
  event.shaped(
    Item.of('mbd2:crystal_chamber', 1),
    [
      'DDD',
      'EAE',
      'CBC'
    ],
    {
      A: 'ae2:fluix_pearl',
      B: 'ae2:fluix_block',
      C: 'kubejs:turquoise_plate',
      D: 'ae2:cut_quartz_slab',
      E: 'mekanism:block_osmium'
    }
  )

  // Energy Conduit
  event.remove({ id: "enderio:energy_conduit" })
  event.replaceInput({ input: "enderio:energy_conduit" }, "enderio:energy_conduit", "mekanism:basic_energy_cube")

  // Grains of Infinity
  event.recipes.thermal.centrifuge([Item.of('minecraft:stone'), Item.of('enderio:grains_of_infinity').withChance(0.1)], 'minecraft:deepslate')
  // Amethyst shard
  event.recipes.smelting('minecraft:amethyst_shard', 'apotheosis:rare_material')

  // Milothium
  event.recipes.smelting('thermal:nickel_ingot', 'kubejs:raw_milothium')
  kubejs_crushing('milothium')

  // Darthium
  event.recipes.smelting('immersiveengineering:ingot_aluminum', 'kubejs:raw_darthium')
  kubejs_crushing('darthium')

  // Catericite
  event.recipes.smelting('thermal:tin_ingot', 'kubejs:raw_catericite')
  kubejs_crushing('catericite')

  // Ecolinit
  event.recipes.smelting('mekanism:ingot_osmium', 'kubejs:raw_ecolinit')
  kubejs_crushing('ecolinit')

  // Plastic
  event.recipes.thermal.refinery([Fluid.of('pneumaticcraft:plastic', 1000)], Fluid.of('thermal:refined_fuel', 1000))
  event.recipes.thermal.chiller('pneumaticcraft:plastic', [Fluid.of('pneumaticcraft:plastic', 200)])

  // Lubricant
  event.recipes.thermal.refinery([Fluid.of('pneumaticcraft:lubricant', 1000)], Fluid.of('immersiveengineering:biodiesel', 1000))

  //Mekanism
  // Advanced
  event.remove({ id: 'mekanism:control_circuit/advanced' })

  event.shaped(
    Item.of('mekanism:advanced_control_circuit', 1),
    [
      'ABA'
    ],
    {
      A: 'ad_astra:desh_ingot',
      B: 'mekanism:basic_control_circuit'
    }
  )

  // Elite
  event.remove({ id: 'mekanism:control_circuit/elite' })
  event.recipes.powah.energizing(['mekanism:advanced_control_circuit', 'powah_niotic_crystal_block'], 'mekanism:elite_control_circuit', 50000)

  // Ultimate
  event.replaceInput(
    { output: 'mekanism:ultimate_control_circuit' },
    'mekanism:alloy_atomic',
    'draconicevolution:wyvern_core'
  )
  // Mekanism Advanced Tier Installer
  event.replaceInput(
    { output: 'mekanism:advanced_tier_installer' },
    '#minecraft:planks',
    'kubejs:electrical_machine_casing'
  )

  // Mekanism Heat Generator
  event.replaceInput(
    { output: 'mekanismgenerators:heat_generator' },
    '#forge:ingots/osmium',
    'thermal:machine_frame'
  )

  // Metallurgic Infuser
  event.replaceInput(
    { output: 'mekanism:metallurgic_infuser' },
    '#forge:ingots/osmium',
    'thermal:machine_frame'
  )

  //Ad_Astra
  // Fuel Refinery
  event.replaceInput(
    { output: 'ad_astra:fuel_refinery' },
    'minecraft:furnace',
    'kubejs:electrical_machine_casing'
  )
  // Oxygen Loader
  event.replaceInput(
    { output: 'ad_astra:oxygen_loader' },
    'minecraft:lightning_rod',
    'kubejs:electrical_machine_casing'
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
    'kubejs:electrical_machine_casing'
  )
  // Etrium Ingot
  default_compacting('ad_astra:etrium_nugget', 'ad_astra:etrium_ingot')
  default_plate('ad_astra:etrium_plate', 'ad_astra:etrium_ingot')
  default_plate('ad_astra:etrium_rod', 'ad_astra:etrium_ingot')
  event.shaped(
    Item.of('ad_astra:etrium_factory_block', 64),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'ad_astra:etrium_plate',
      B: 'ad_astra:etrium_ingot'
    }
  )
  event.shaped(
    Item.of('ad_astra:encased_etrium_block', 64),
    [
      'BBB',
      'AAA',
      'BBB'
    ],
    {
      A: 'ad_astra:etrium_plate',
      B: '#forge:ingots/steel'
    }
  )
  event.shaped(
    Item.of('ad_astra:etrium_plateblock', 64),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'ad_astra:etrium_plate',
      B: '#forge:rods/steel'
    }
  )
  event.shaped(
    Item.of('ad_astra:etrium_panel', 64),
    [
      'ABA',
      'BBB',
      'ABA'
    ],
    {
      A: 'ad_astra:etrium_plate',
      B: 'ad_astra:etrium_ingot'
    }
  )
  event.shaped(
    Item.of('ad_astra:etrium_block', 1),
    [
      'BBB',
      'BBB',
      'BBB'
    ],
    {
      B: 'ad_astra:etrium_ingot'
    }
  )

  //Powah

  //ProjectE
  //Philosopher's Stone
  event.remove({ id: 'projecte:philosophers_stone_alt' })
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

  // Energy Collector

  event.replaceInput(
    { output: 'projecte:collector_mk1' },
    'minecraft:furnace',
    'projecte:dm_furnace'
  )


  //Forbidden & Arcanus

  // Deorum
  event.replaceInput(
    { output: 'forbidden_arcanus:deorum_ingot' },
    'minecraft:charcoal',
    'forbidden_arcanus:aurum_log'
  )

  //Thermal
  // Dynamos
  event.replaceInput(
    { output: /thermal:dynamo_.*/ },
    /thermal:.*_gear/,
    'thermal:machine_frame'
  )


  //Solar Flux
  event.stonecutting('8x solarflux:mirror', '1x kubejs:quartz_alloy_block')
  event.replaceInput(
    { output: 'solarflux:sp_2' },
    '#forge:pistons',
    'kubejs:electrical_machine_casing'
  )
  //Misc

  // LOGGER
  //event.forEachRecipe({output: /mysticalagriculture:.*/}, r => {
  //  console.log("recipe", r.json.toString())
  //})
  // Sculk Alloy
  event.remove({ id: 'silentcompat:sculk_alloy_ingot' })
  event.shaped(
    Item.of('silentcompat:sculk_alloy_ingot', 1),
    [
      'AB',
      'CC'
    ],
    {
      A: '#forge:shards/echo',
      B: 'apotheosis:warden_tendril',
      C: '#forge:obsidian'
    }
  )

  //Reliquary
  event.remove({ id: 'reliquary:mob_charm_belt' })

  // BHC
  event.remove({ id: 'bhc:heart_amulet' })
  event.remove({ id: 'bhc:soul_heart_amulet' })

  // Gold Dust
  event.recipes.create.milling('thermal:gold_dust', '#forge:ingots/gold')


  // Tea Leaves
  event.recipes.farmersdelight.cutting('#minecraft:saplings', '#forge:tools/knives', ['1x delightful:green_tea_leaf'])
  event.recipes.farmersdelight.cutting('#forge:tea_leaves', '#forge:shovels', ['1x minecraft:green_dye', Item.of('1x delightful:matcha').withChance(0.4)])

  // Kelp
  event.shaped(
    Item.of('minecraft:kelp', 2),
    [
      'ABA'
    ],
    {
      A: 'mysticalagriculture:dirt_essence',
      B: 'minecraft:green_dye',
    }
  )

  event.shaped(
    Item.of('minecraft:dirt', 12),
    [
      'AA',
      'AA'
    ],
    {
      A: 'mysticalagriculture:dirt_essence'
    }
  )

  // Pipez
  event.remove({ id: 'pipez:basic_upgrade' })
  event.remove({ id: 'pipez:improved_upgrade' })
  event.remove({ id: 'pipez:advanced_upgrade' })
  event.shaped(
    Item.of('pipez:advanced_upgrade', 1),
    [
      'ABA',
      'BCB',
      'ABA',
    ],
    {
      A: 'minecraft:lapis_lazuli',
      B: 'minecraft:paper',
      C: 'kubejs:blueish_ingot'
    }
  )
  // Cardboard
  event.recipes.thermal.press('create:cardboard', 'create:pulp')

  default_3alloys('create:blaze_cake_base', 5000, '#forge:eggs', 'minecraft:sugar', 'create:cinder_flour')
  default_2alloys('kubejs:heat_resistant_glass', 5000, '#forge:glass', '#forge:ingots/gold')

  // Simulation Chamber
  event.replaceInput(
    { output: 'hostilenetworks:sim_chamber' },
    'minecraft:lapis_lazuli',
    'ad_astra:etrium_ingot'
  )

  // Loot Fabricator
  event.replaceInput(
    { output: 'hostilenetworks:loot_fabricator' },
    'minecraft:diamond',
    'ad_astra:desh_ingot'
  )

  // Prediction Matrix
  event.replaceInput(
    { output: 'hostilenetworks:prediction_matrix' },
    'minecraft:clay_ball',
    'ad_astra:calorite_nugget'
  )
  // Flint
  event.shapeless(
    Item.of('minecraft:flint', 1),
    [
      '3x minecraft:gravel'
    ]
  )

  // Draconic Evolution
  event.remove({ id: "draconicevolution:components/draconium_ingot_from_ore" })
  event.remove({ id: "draconicevolution:components/draconium_ingot_from_dust" })
  event.remove({ id: "enderio:smelting/draconicevolution/components/draconium_ingot_from_ore" })
  event.remove({ id: "enderio:smelting/draconicevolution/components/draconium_ingot_from_dust" })
})