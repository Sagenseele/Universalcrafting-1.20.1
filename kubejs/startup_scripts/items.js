// priority: 0

StartupEvents.registry('item', event => { 
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

    function standard_material(name) {
        var dust = name + '_dust'
        var ingot = name + '_ingot'
        var plate = name + '_plate'
        var rod = name + '_rod'
        var nugget = name + '_nugget'
        event.create(dust).texture('kubejs:item/' + dust)
        event.create(ingot).texture('kubejs:item/' + ingot)
        event.create(plate).texture('kubejs:item/' + plate)
        event.create(rod).texture('kubejs:item/' + rod)
        event.create(nugget).texture('kubejs:item/' + nugget)
    }

    function standard_ore(name) {
        var raw = 'raw_' + name
        var crushed = 'crushed_' + name
        event.create(raw).texture('kubejs:item/' + raw)
        event.create(crushed).texture('kubejs:item/' + crushed)
        standard_material(name)
    }
    
    standard_material('blue')
    standard_material('blueish')
    standard_material('galvanized')
    standard_material('orangeish')
    standard_material('pale_green')
    standard_material('pale_yellow')
    standard_material('red')
    standard_material('redish')
    standard_material('soilent')
    standard_material('turquoise')
    standard_material('yellow')
    
    standard_ore('catericite')
    standard_ore('darthium')
    standard_ore('ecolinit')
    standard_ore('milothium')
    standard_ore('titan')
    standard_ore('mangan')
    standard_ore('cobalt')
    standard_ore('platinum')
    
    event.create('wood_splinter').texture('kubejs:item/wood_splinter')
    event.create('rotor').texture('kubejs:item/rotor')
    event.create('stator').texture('kubejs:item/stator')
    event.create('electric_motor').texture('kubejs:item/electric_motor')

    event.create('crystal_inferium').texture('kubejs:item/crystal_inferium').displayName('Inferium Crystal')
    event.create('crystal_prudentium').texture('kubejs:item/crystal_prudentium').displayName('Prudentium Crystal')
    event.create('crystal_tertium').texture('kubejs:item/crystal_tertium').displayName('Tertium Crystal')
    event.create('crystal_soulless_imperium').texture('kubejs:item/crystal_soulless_imperium').displayName('Soulless Imperium Crystal')
    event.create('crystal_imperium').texture('kubejs:item/crystal_imperium').displayName('Imperium Crystal')
    event.create('crystal_supremium').texture('kubejs:item/crystal_supremium').displayName('Supremium Crystal')
    event.create('crystal_insanium').texture('kubejs:item/crystal_insanium').displayName('Insanium Crystal')
    event.create('solid_supremium').texture('kubejs:item/solid_supremium')
    event.create('trace_element_supremium').texture('kubejs:item/trace_element_supremium').displayName('Supremium Trace Element')
    event.create('advanced_material_data_card').texture('kubejs:item/advanced_material_data_card')
    event.create('bloody_data_card').texture('kubejs:item/bloody_data_card')
    event.create('compressed_data_card').texture('kubejs:item/compressed_data_card')
    event.create('culinary_data_card').texture('kubejs:item/culinary_data_card')
    event.create('electricity_data_card').texture('kubejs:item/electricity_data_card')
    event.create('twilight_data_card').texture('kubejs:item/twilight_data_card')
    event.create('storage_data_card').texture('kubejs:item/storage_data_card')
    event.create('astral_data_card').texture('kubejs:item/astral_data_card')
    event.create('gem_data_card').texture('kubejs:item/gem_data_card')
    event.create('nuclear_data_card').texture('kubejs:item/nuclear_data_card')
    event.create('universal_badge').texture('kubejs:item/universal_badge')
    event.create('rough_data_card_substrate').texture('kubejs:item/rough_data_card_substrate')
    event.create('polished_data_card_substrate').texture('kubejs:item/polished_data_card_substrate')
    event.create('data_card_connector').texture('kubejs:item/data_card_connector')
    event.create('blank_data_card').texture('kubejs:item/blank_data_card')
    event.create('mob_simulation_data').texture('kubejs:item/mob_simulation_data')
    event.create('inert_infinity_token').texture('kubejs:item/inert_infinity_token')
    event.create('infinity_token').texture('kubejs:item/infinity_token')
})