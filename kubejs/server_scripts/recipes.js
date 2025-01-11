ServerEvents.recipes(event => {
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
})