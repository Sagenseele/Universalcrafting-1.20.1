// priority: 0

// Visit the wiki for more info - https://kubejs.com/

StartupEvents.registry('item', event => {
    event.create('basic_material_data_card').texture('kubejs:item/basic_material_data_card')
    event.create('advanced_material_data_card').texture('kubejs:item/advanced_material_data_card')
    event.create('compressed_data_card').texture('kubejs:item/compressed_data_card')
    event.create('culinary_data_card').texture('kubejs:item/culinary_data_card')
    event.create('electricity_data_card').texture('kubejs:item/electricity_data_card')
    event.create('twilight_data_card').texture('kubejs:item/twilight_data_card')
    event.create('storage_data_card').texture('kubejs:item/storage_data_card')
    event.create('astral_data_card').texture('kubejs:item/astral_data_card')
    event.create('mob_simulation_data').texture('kubejs:item/mob_simulation_data')
    event.create('gem_data_card').texture('kubejs:item/gem_data_card')
    event.create('nuclear_data_card').texture('kubejs:item/nuclear_data_card')
    event.create('emc_data_card').texture('kubejs:item/emc_data_card')
    event.create('inert_infinity_token').texture('kubejs:item/inert_infinity_token')
    event.create('infinity_token').texture('kubejs:item/infinity_token')

    event.create('nutrient_pulp').texture('kubejs:item/nutrient_pulp')
    event.create('nutrient_bar').food(food => {
        food
        .hunger(8)
        .saturation(16)
        .alwaysEdible()
        .fastToEat()
    }).texture('kubejs:item/nutrient_bar')
    event.create('cake_amalgamation').food(food => {
        food
        .hunger(12)
        .saturation(24)
        .alwaysEdible()
    }).texture('kubejs:item/cake_amalgamation')
    event.create('crystal_inferium').texture('kubejs:item/crystal_inferium')
    event.create('crystal_prudentium').texture('kubejs:item/crystal_prudentium')
    event.create('crystal_tertium').texture('kubejs:item/crystal_tertium')
    event.create('crystal_soulless_imperium').texture('kubejs:item/crystal_soulless_imperium')
    event.create('crystal_imperium').texture('kubejs:item/crystal_imperium')
    event.create('crystal_supremium').texture('kubejs:item/crystal_supremium')
    event.create('crystal_insanium').texture('kubejs:item/crystal_insanium')
    event.create('solid_supremium').texture('kubejs:item/solid_supremium')
    event.create('trace_element_supremium').texture('kubejs:item/trace_element_supremium')
})