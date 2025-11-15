// priority: 0

StartupEvents.registry('item', event => {

    // Rename Kubejs/Multiblocked2
    Platform.mods.kubejs.name = 'Universal Crafting'
    Platform.mods.mbd2.name = 'Universal Crafting'

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

    function raw(name) {
        var raw = 'raw_' + name
        event.create(raw).texture('kubejs:item/' + raw).tag("forge:raw_materials/" + name)
    }
    function crushed(name) {
        var crushed = 'crushed_' + name
        event.create(crushed).texture('kubejs:item/' + crushed).tag("forge:crushed_raw_materials/" + name)
    }
    function ingot(name) {
        var ingot = name + '_ingot'
        event.create(ingot).texture('kubejs:item/' + ingot).tag("forge:ingots/" + name)
    }
    function plate(name) {
        var plate = name + '_plate'
        event.create(plate).texture('kubejs:item/' + plate).tag("forge:plates/" + name)
    }
    function rod(name) {
        var rod = name + '_rod'
        event.create(rod).texture('kubejs:item/' + rod).tag("forge:rods/" + name)
    }
    function dust(name) {
        var dust = name + '_dust'
        event.create(dust).texture('kubejs:item/' + dust).tag("forge:dusts/" + name)
    }
    function nugget(name) {
        var nugget = name + '_nugget'
        event.create(nugget).texture('kubejs:item/' + nugget).tag("forge:nuggets/" + name)
    }

    function standard_material(name) {
        dust(name)
        nugget(name)
        ingot(name)
        plate(name)
        rod(name)
    }

    function intermediate_ore(name) {
        raw(name)
        crushed(name)
        dust(name)
    }

    function standard_ore(name) {
        raw(name)
        crushed(name)
        standard_material(name)

    }

    event.create('simple_matter_extraction_device').tag("uc:med/tier1")
    event.create('reinforced_matter_extraction_device').tag("uc:med/tier1").tag("uc:med/tier2")
    event.create('hellish_matter_extraction_device').tag("uc:med/tier1").tag("uc:med/tier2").tag("uc:med/tier3")
    event.create('magical_matter_extraction_device').tag("uc:med/tier1").tag("uc:med/tier2").tag("uc:med/tier3").tag("uc:med/tier4")
    event.create('overloaded_matter_extraction_device').tag("uc:med/tier1").tag("uc:med/tier2").tag("uc:med/tier3").tag("uc:med/tier4").tag("uc:med/tier5")
    event.create('transcendental_matter_extraction_device').tag("uc:med/tier1").tag("uc:med/tier2").tag("uc:med/tier3").tag("uc:med/tier4").tag("uc:med/tier5").tag("uc:med/tier6")
    event.create('floralized_matter_extraction_device').tag("uc:med/tier1").tag("uc:med/tier2").tag("uc:med/tier3").tag("uc:med/tier4").tag("uc:med/tier5").tag("uc:med/tier6")
    event.create('digital_matter_extraction_device').tag("uc:med/tier1").tag("uc:med/tier2").tag("uc:med/tier3").tag("uc:med/tier4").tag("uc:med/tier5").tag("uc:med/tier6")
    event.create('universal_matter_extraction_device').tag("uc:med/tier1").tag("uc:med/tier2").tag("uc:med/tier3").tag("uc:med/tier4").tag("uc:med/tier5").tag("uc:med/tier6").tag("uc:med/tier7")
    event.create('simple_spiritual_core')
    event.create('dark_spiritual_core')
    event.create('spectral_spiritual_core')

    event.create('carbon_asteroid')
    event.create('frigid_asteroid')
    event.create('occult_asteroid')
    event.create('twinkling_asteroid')
    event.create('carbon_asteroid_chunk')
    event.create('frigid_asteroid_chunk')
    event.create('occult_asteroid_chunk')
    event.create('twinkling_asteroid_chunk')
    event.create('cryogenium')
    event.create('etherium')
    
    raw('cryogenium')
    raw('etherium')

    standard_material('blue')
    standard_material('lapiron')
    standard_material('galvanized')
    standard_material('orangeish')
    standard_material('pale_green')
    standard_material('pale_yellow')
    standard_material('redish')
    standard_material('soilent')
    standard_material('turquoise')
    standard_material('sulfeel')
    
    standard_ore('darkium')

    intermediate_ore('catericite')
    intermediate_ore('darthium')
    intermediate_ore('ecolinit')
    intermediate_ore('milothium')

    crushed('antimatter')
    ingot('antimatter')

    ingot('infinitum')

    event.create('wood_splinter').texture('kubejs:item/wood_splinter')
    event.create('rotor').texture('kubejs:item/rotor')
    event.create('stator').texture('kubejs:item/stator')
    event.create('electric_motor').texture('kubejs:item/electric_motor')

    event.create('probe_mk_i').texture('kubejs:item/probe_mk_i').displayName('Probe MK I')
    event.create('probe_mk_ii').texture('kubejs:item/probe_mk_ii').displayName('Probe MK II')
    
    event.create('printed_machine_learning_processor').texture('kubejs:item/printed_machine_learning_processor')
    event.create('machine_learning_processor').texture('kubejs:item/machine_learning_processor')

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
    event.create('fleshy_data_card').texture('kubejs:item/fleshy_data_card')
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
    event.create('relic_level_up').rarity('epic').texture('kubejs:item/relic_level_up')
})