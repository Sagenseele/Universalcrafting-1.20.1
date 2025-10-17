ServerEvents.recipes(event => {
    event.replaceInput(
        { output: 'hostilenetworks:loot_fabricator' },
        'minecraft:obsidian',
        'kubejs:electrical_machine_casing'
    )

    event.replaceInput(
        { output: 'hostilenetworks:sim_chamber' },
        'minecraft:obsidian',
        'kubejs:electrical_machine_casing'
    )
    
    event.replaceInput(
        { output: 'hostilenetworks:blank_data_model' },
        'minecraft:gold_ingot',
        'ad_astra:ostrum_ingot'
    )
})