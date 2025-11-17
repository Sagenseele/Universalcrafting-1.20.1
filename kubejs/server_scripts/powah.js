ServerEvents.recipes(event => {
    event.replaceInput(
        { output: 'powah:dielectric_paste' },
        'minecraft:clay_ball',
        'bigreactors:verderium_bucket'
    )

    event.replaceInput(
        { output: /powah:energizing_.*/ },
        "powah:dielectric_casing",
        'kubejs:machine_learning_processor'
    )

    event.replaceInput(
        { id: /powah:.*/},
        "minecraft:redstone",
        "extendedcrafting:redstone_ingot"
    )

    event.replaceInput(
        { id: /powah:.*/},
        "minecraft:redstone_block",
        "extendedcrafting:redstone_ingot_block"
    )
})