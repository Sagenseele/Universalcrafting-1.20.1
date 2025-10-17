ServerEvents.recipes(event => {
    event.replaceInput(
        { output: 'bigreactors:basic_reactorcontroller' },
        'minecraft:diamond',
        'kubejs:electrical_machine_casing'
    )

    event.replaceInput(
        { output: 'bigreactors:fluidizercontroller' },
        'minecraft:emerald',
        'kubejs:electrical_machine_casing'
    )
    
    event.replaceInput(
        { output: 'bigreactors:basic_reactorcasing' },
        'minecraft:sand',
        'ad_astra:ostrum_ingot'
    )

    event.replaceInput(
        { output: 'bigreactors:basic_turbinecasing' },
        'minecraft:redstone_block',
        'powah:niotic_crystal_block'
    )
})