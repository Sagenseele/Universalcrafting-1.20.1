ServerEvents.recipes((event) => {

    const sorting1 = [
        { material: "1x kubejs:crushed_darthium"}
    ]
    
    sorting1.forEach(item => {
        event.recipes.mbd2.sorter()
        .id('mbd2:sorter/'+item.material.split(':')[1])
        .duration(60)
        .priority(0)
        .inputItems(item.material)
        .outputItems('1x kubejs:red_dust', '1x thermal:cinnabar_dust')
        .perTick(builder => builder
            .inputStress(128)
        )
        .machineLevel(1)
    })
    
    

    const metals = [
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

    //Kinetic Crusher
    // Crushed --> (?)

    //Processing Resources
    // Kinetic Wiremill

    // Kinetic Crusher

    // Kinetic Sorter


    // Raw Ores
    // Kinetic Melter

    // Kinetic Foundry

    /*metals.forEach(metal => {
        var ingot = 'forge:ingots'+metal.material
        event.recipes.mbd2.foundry()
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

    metals.forEach(metal => {
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

    // Blast Furnace
    event.recipes.mbd2.blast_furnace()
        .id('mbd2:blast_furnace/quartz_alloy_block')
        .duration(200)
        .priority(0)
        .inputItems('4x ae2:certus_quartz_crystal', '4x minecraft:quartz', '1x pneumaticcraft:plastic')
        .outputItems('1x kubejs:quartz_alloy_block')

    // Model Computer
    const models = [
        { name: "artifacts/mimic", data: 30, ingredient: "1x #artifacts:artifacts" },
        { name: "bat", data: 6, ingredient: "8x reliquary:bat_wing" },
        { name: "cod", data: 6, ingredient: "16x minecraft:cod" },
        { name: "cow", data: 6, ingredient: "64x minecraft:leather" },
        { name: "elder_guardian", data: 6, ingredient: "8x forbidden_arcanus:aquatic_dragon_scale" },
        { name: "ender_dragon", data: 6, ingredient: "8x forbidden_arcanus:arcane_dragon_egg" },
        { name: "enderman", data: 6, ingredient: "8x reliquary:nebulous_heart" },
        { name: "rabbit", data: 6, ingredient: "16x minecraft:rabbit_foot" },
        { name: "shulker", data: 6, ingredient: "16x minecraft:shulker_shell" },
        { name: "ghast", data: 6, ingredient: "64x minecraft:ghast_tear" },
        { name: "guardian", data: 6, ingredient: "8x reliquary:guardian_spike" },
        { name: "creeper", data: 6, ingredient: "8x reliquary:catalyzing_gland" },
        { name: "polar_bear", data: 6, ingredient: "64x minecraft:snow_block" },
        { name: "phantom", data: 6, ingredient: "64x minecraft:phantom_membrane" },
        { name: "blaze", data: 6, ingredient: "8x reliquary:molten_core" },
        { name: "glow_squid", data: 6, ingredient: "64x minecraft:glow_ink_sac" },
        { name: "evoker", data: 6, ingredient: "8x minecraft:totem_of_undying" },
        { name: "pig", data: 6, ingredient: "64x minecraft:porkchop" },
        { name: "mooshroom", data: 6, ingredient: "64x minecraft:mycelium" },
        { name: "iron_golem", data: 6, ingredient: "64x minecraft:iron_block" },
        { name: "hoglin", data: 6, ingredient: "64x nethersdelight:hoglin_loin" },
        { name: "drowned", data: 6, ingredient: "64x kubejs:coil_tier_1" },
        { name: "chicken", data: 6, ingredient: "64x minecraft:feather" },
        { name: "magma_cube", data: 6, ingredient: "64x minecraft:magma_cream" },
        { name: "sheep", data: 6, ingredient: "64x minecraft:mutton" },
        { name: "skeleton", data: 6, ingredient: "64x minecraft:bone" },
        { name: "slime", data: 6, ingredient: "64x minecraft:slime_ball" },
        { name: "snow_golem", data: 6, ingredient: "64x minecraft:pumpkin" },
        { name: "spider", data: 6, ingredient: "64x minecraft:fermented_spider_eye" },
        { name: "squid", data: 6, ingredient: "8x reliquary:squid_beak" },
        { name: "warden", data: 6, ingredient: "4x apotheosis:warden_tendril" },
        { name: "witch", data: 6, ingredient: "8x reliquary:witch_hat" },
        { name: "zombie", data: 6, ingredient: "64x minecraft:rotten_flesh" },
        { name: "wither_skeleton", data: 6, ingredient: "16x minecraft:wither_skeleton_skull" },
        { name: "zombified_piglin", data: 6, ingredient: "64x minecraft:gold_block" },
        { name: "wither", data: 6, ingredient: "1x mysticalagriculture:nether_star_seeds" },
        { name: "thermal/basalz", data: 6, ingredient: "32x thermal:basalz_rod" },
        { name: "thermal/blitz", data: 6, ingredient: "32x thermal:blitz_rod" },
        { name: "thermal/blizz", data: 6, ingredient: "32x thermal:blizz_rod" },
        { name: "twilightforest/alpha_yeti", data: 6, ingredient: "16x twilightforest:alpha_yeti_fur" },
        { name: "twilightforest/kobold", data: 6, ingredient: "64x minecraft:candle" },
        { name: "twilightforest/minoshroom", data: 6, ingredient: "8x twilightforest:meef_stroganoff" },
        { name: "twilightforest/lich", data: 6, ingredient: "1x twilightforest:lich_trophy" },
        { name: "twilightforest/helmet_crab", data: 6, ingredient: "32x twilightforest:armor_shard_cluster" },
        { name: "twilightforest/giant", data: 6, ingredient: "16x twilightforest:giant_obsidian" },
        { name: "twilightforest/carminite_golem", data: 6, ingredient: "8x twilightforest:carminite_reactor" },
        { name: "twilightforest/skeleton_druid", data: 6, ingredient: "64x twilightforest:torchberries" },
        { name: "twilightforest/redcap", data: 6, ingredient: "64x minecraft:coal_block" },
        { name: "twilightforest/hydra", data: 6, ingredient: "8x twilightforest:fiery_blood" },
        { name: "twilightforest/deer", data: 6, ingredient: "64x twilightdelight:cooked_venison_rib" },
        { name: "twilightforest/death_tome", data: 6, ingredient: "64x minecraft:bookshelf" },
        { name: "twilightforest/stable_ice_core", data: 6, ingredient: "64x minecraft:blue_ice" },
        { name: "twilightforest/snow_queen", data: 6, ingredient: "64x twilightforest:aurora_block" },
        { name: "twilightforest/raven", data: 6, ingredient: "64x twilightforest:raven_feather" },
        { name: "twilightforest/naga", data: 6, ingredient: "16x twilightforest:naga_scale" },
        { name: "twilightforest/minotaur", data: 6, ingredient: "64x twilightdelight:meef_wrap" },
        { name: "twilightforest/goblin", data: 6, ingredient: "64x twilightforest:knightmetal_ingot" },
        { name: "twilightforest/fire_beetle", data: 6, ingredient: "64x minecraft:gunpowder" },
        { name: "twilightforest/towerwood_borer", data: 6, ingredient: "64x twilightforest:borer_essence" },
        { name: "twilightforest/troll", data: 6, ingredient: "64x twilightforest:magic_beans" },
        { name: "twilightforest/ur_ghast", data: 6, ingredient: "16x twilightforest:fiery_tears" },
        { name: "twilightforest/winter_wolf", data: 6, ingredient: "8x twilightforest:arctic_fur_block" },
        { name: "twilightforest/wraith", data: 6, ingredient: "64x minecraft:glowstone" },
        { name: "twilightforest/yeti", data: 6, ingredient: "64x twilightforest:arctic_fur" },
        { name: "vindicator", data: 6, ingredient: "64x minecraft:emerald" }
    ]

    models.forEach(model => {
        event.recipes.mbd2.model_computer()
            .id("mbd2:model_computer/" + model.name)
            .duration(6000)
            .priority(0)
            .inputFE(2048)
            .inputItems('1x hostilenetworks:blank_data_model', '64x hostilenetworks:prediction_matrix', model.ingredient)
            .outputItems(JsonIO.of({
                "count": 1,
                "value": {
                    "type": "forge:nbt",
                    "item": 'hostilenetworks:data_model',
                    "nbt": { data_model: { data: model.data, id: "hostilenetworks:" + model.name } }
                }
            }))
    });
})