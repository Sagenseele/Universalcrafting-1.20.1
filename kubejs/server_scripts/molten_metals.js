ServerEvents.recipes(event => {
    const liquid_metal = [
        { material: "iron" },
        { material: "copper" },
        { material: "gold" },
        { material: "netherite" },
        { material: "dash" },
        { material: "ostrum" },
        { material: "calorite" },
        { material: "neptunium" },
        { material: "hellforged" },
        { material: "manasteel" },
        { material: "terrasteel" },
        { material: "elementium" },
        { material: "zinc" },
        { material: "brass" },
        { material: "awakened_draconium" },
        { material: "draconium" },
        { material: "blutonium" },
        { material: "cyanite" },
        { material: "magentite" },
        { material: "graphite" },
        { material: "ludicrite" },
        { material: "ridiculite" },
        { material: "inanite" },
        { material: "insanite" },
        { material: "deorum" },
        { material: "obsidian" },
        { material: "refined_obsidian" },
        { material: "refined_glowstone" },
        { material: "osmium" },
        { material: "iesnium" },
        { material: "steel_energized" },
        { material: "ironwood" },
        { material: "steeleaf" },
        { material: "knightmetal" },
        { material: "fiery" },
        { material: "tin" },
        { material: "lead" },
        { material: "silver" },
        { material: "nickel" },
        { material: "steel" },
        { material: "rose_gold" },
        { material: "bronze" },
        { material: "electrum" },
        { material: "invar" },
        { material: "constantan" },
        { material: "signalum" },
        { material: "lumium" },
        { material: "enderium" },
        { material: "midnight_iron" },
        { material: "dark_chocolate" },
        { material: "sculk_alloy" },
        { material: "bunny_steel" },
        { material: "capsid_alloy" },
        { material: "plasteel" },
        { material: "source_steel" },
        { material: "arcmetal" },
        { material: "solarmetal" },
        { material: "voidmetal" },
        { material: "crimson_iron" },
        { material: "crimson_steel" },
        { material: "blaze_gold" },
        { material: "azure_silver" },
        { material: "azure_electrum" },
        { material: "tyrian_steel" },
        { material: "black_iron" },
        { material: "redstone" },
        { material: "enhanced_redstone" },
        { material: "ender" },
        { material: "enhanced_ender" },
        { material: "crystaltine" },
        { material: "the_ultimate" },
        { material: "copper_alloy" },
        { material: "energetic_alloy" },
        { material: "vibrant_alloy" },
        { material: "redstone_alloy" },
        { material: "conductive_alloy" },
        { material: "pulsating_alloy" },
        { material: "dark_steel" },
        { material: "soularium" },
        { material: "end_steel" },
        { material: "blue" },
        { material: "blueish" },
        { material: "galvanized" },
        { material: "orangeish" },
        { material: "pale_green" },
        { material: "pale_yellow" },
        { material: "red" },
        { material: "redish" },
        { material: "soilent" },
        { material: "turquoise" },
        { material: "yellow" },
        { material: "titan" },
        { material: "mangan" },
        { material: "cobalt" },
        { material: "platinum" },
    ]

    /*liquid_metal.forEach(metal => {
        var ingot = 'forge:ingots'+metal.material
        event.recipes.mbd2.solidifier()
            .id("mbd2:casting/" + metal.material)
            .duration(160)
            .priority(0)
            .inputFE(1024)
            .inputItems(Fluid.of('kubejs:molten'+metal.material, 144))
            .outputItems(JsonIO.of({
                "count": 1,
                "value": {
                    "type": "item",
                    "item": ingot
                }
            }))
    });

    liquid_metal.forEach(metal => {
        var ingot = 'forge:ingots'+metal.material
        event.recipes.mbd2.solidifier()
            .id("mbd2:casting/" + metal.material)
            .duration(160)
            .priority(0)
            .inputFE(1024)
            .inputItems(Fluid.of('kubejs:molten'+metal.material, 144))
            .outputItems(JsonIO.of({
                "count": 1,
                "value": {
                    "type": "item",
                    "item": ingot
                }
            }))
    });*/
    event.recipes.mbd2.blast_furnace()
        .id('mbd2:blast_furnace/quartz_alloy_block')
        .duration(200)
        .priority(0)
        .inputItems('4x ae2:certus_quartz_crystal', '4x minecraft:quartz', '1x pneumaticcraft:plastic')
        .outputItems('1x kubejs:quartz_alloy_block')
})