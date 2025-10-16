ServerEvents.recipes(event => {

    // Steel Casing (Mekanism)
    event.replaceInput(
        { output: 'mekanism:steel_casing' },
        'mekanism:ingot_osmium',
        'thermal:machine_frame'
    )

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
    event.recipes.powah.energizing(['kubejs:machine_learning_processor', 'mekanism:advanced_control_circuit', 'kubejs:machine_learning_processor'], 'mekanism:elite_control_circuit', 100000)

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

    event.replaceInput(
        { output: 'mekanismgenerators:wind_generator' },
        '#forge:ingots/osmium',
        'thermal:machine_frame'
    )
})