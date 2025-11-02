ServerEvents.recipes(event => {
    // Repair Talisman
    event.remove({ id: 'projecte:repair_talisman' })
    event.remove({ id: 'projecte:repair_talisman_alt' })
    event.custom({
        type: "botania:runic_altar",
        ingredients: [
            { item: "botania:gaia_spreader" },
            { item: "twilightforest:naga_scale" },
            { item: "twilightforest:naga_scale" },
            { item: "bloodmagic:reagentgrowth" },
            { item: "botania:rune_pride" }
        ],
        mana: 100000.0,
        output: { count: 1.0, item: "projecte:repair_talisman" }
    })

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
})

