ServerEvents.recipes((event) => {
    // Model Computer
    const models = [
        {name:"artifacts/mimic", data:30, ingredient: "1x #artifacts:artifacts"},
        {name:"bat", data:6, ingredient: "8x reliquary:bat_wing"},
        {name:"cod", data:6, ingredient: "16x minecraft:cod"},
        {name:"cow", data:6, ingredient: "64x minecraft:leather"},
        {name:"elder_guardian", data:6, ingredient: "8x forbidden_arcanus:aquatic_dragon_scale"},
        {name:"ender_dragon", data:6, ingredient: "8x forbidden_arcanus:arcane_dragon_egg"},
        {name:"enderman", data:6, ingredient: "8x reliquary:nebulous_heart"},
        {name:"rabbit", data:6, ingredient: "16x minecraft:rabbit_foot"},
        {name:"shulker", data:6, ingredient: "16x minecraft:shulker_shell"},
        {name:"ghast", data:6, ingredient: "64x minecraft:ghast_tear"},
        {name:"guardian", data:6, ingredient: "8x reliquary:guardian_spike"},
        {name:"creeper", data:6, ingredient: "8x reliquary:catalyzing_gland"},
        {name:"polar_bear", data:6, ingredient: "64x minecraft:snow_block"},
        {name:"phantom", data:6, ingredient: "64x minecraft:phantom_membrane"},
        {name:"blaze", data:6, ingredient: "8x reliquary:molten_core"},
        {name:"glow_squid", data:6, ingredient: "64x minecraft:glow_ink_sac"},
        {name:"evoker", data:6, ingredient: "8x minecraft:totem_of_undying"},
        {name:"pig", data:6, ingredient: "64x minecraft:porkchop"},
        {name:"mooshroom", data:6, ingredient: "64x minecraft:mycelium"},
        {name:"iron_golem", data:6, ingredient: "64x minecraft:iron_block"},
        {name:"hoglin", data:6, ingredient: "64x nethersdelight:hoglin_loin"},
        {name:"drowned", data:6, ingredient: "64x kubejs:coil_tier_1"},
        {name:"chicken", data:6, ingredient: "64x minecraft:feather"},
        {name:"magma_cube", data:6, ingredient:"64x minecraft:magma_cream"},
        {name:"sheep", data:6, ingredient: "64x minecraft:mutton"},
        {name:"skeleton", data:6, ingredient: "64x minecraft:bone"},
        {name:"slime", data:6, ingredient: "64x minecraft:slime_ball"},
        {name:"snow_golem", data:6, ingredient: "64x minecraft:pumpkin"},
        {name:"spider", data:6, ingredient: "64x minecraft:fermented_spider_eye"},
        {name:"squid", data:6, ingredient: "8x reliquary:squid_beak"},
        {name:"warden", data:6, ingredient: "4x apotheosis:warden_tendril"},
        {name:"witch", data:6, ingredient: "8x reliquary:witch_hat"},
        {name:"zombie", data:6, ingredient:"64x minecraft:rotten_flesh"},
        {name:"wither_skeleton", data:6, ingredient: "16x minecraft:wither_skeleton_skull"},
        {name:"zombified_piglin", data:6, ingredient: "64x minecraft:gold_block"},
        {name:"wither", data:6, ingredient: "1x mysticalagriculture:nether_star_seeds"},
        {name:"thermal/basalz", data:6, ingredient: "32x thermal:basalz_rod"},
        {name:"thermal/blitz", data:6, ingredient: "32x thermal:blitz_rod"},
        {name:"thermal/blizz", data:6, ingredient: "32x thermal:blizz_rod"},
        {name:"twilightforest/alpha_yeti", data:6, ingredient: "16x twilightforest:alpha_yeti_fur"},
        {name:"twilightforest/kobold", data:6, ingredient: "64x minecraft:candle"},
        {name:"twilightforest/minoshroom", data:6, ingredient: "8x twilightforest:meef_stroganoff"},
        {name:"twilightforest/lich", data:6, ingredient: "1x twilightforest:lich_trophy"},
        {name:"twilightforest/helmet_crab", data:6, ingredient: "32x twilightforest:armor_shard_cluster"},
        {name:"twilightforest/giant", data:6, ingredient: "16x twilightforest:giant_obsidian"},
        {name:"twilightforest/carminite_golem", data:6, ingredient: "8x twilightforest:carminite_reactor"},
        {name:"twilightforest/skeleton_druid", data:6, ingredient: "64x twilightforest:torchberries"},
        {name:"twilightforest/redcap", data:6, ingredient: "64x minecraft:coal_block"},
        {name:"twilightforest/hydra", data:6, ingredient: "8x twilightforest:fiery_blood"},
        {name:"twilightforest/deer", data:6, ingredient: "64x twilightdelight:cooked_venison_rib"},
        {name:"twilightforest/death_tome", data:6, ingredient: "64x minecraft:bookshelf"},
        {name:"twilightforest/stable_ice_core", data:6, ingredient: "64x minecraft:blue_ice"},
        {name:"twilightforest/snow_queen", data:6, ingredient: "64x twilightforest:aurora_block"},
        {name:"twilightforest/raven", data:6, ingredient: "64x twilightforest:raven_feather"},
        {name:"twilightforest/naga", data:6, ingredient: "16x twilightforest:naga_scale"},
        {name:"twilightforest/minotaur", data:6, ingredient: "64x twilightdelight:meef_wrap"},
        {name:"twilightforest/goblin", data:6, ingredient: "64x twilightforest:knightmetal_ingot"},
        {name:"twilightforest/fire_beetle", data:6, ingredient: "64x minecraft:gunpowder"},
        {name:"twilightforest/towerwood_borer", data:6, ingredient: "64x twilightforest:borer_essence"},
        {name:"twilightforest/troll", data:6, ingredient: "64x twilightforest:magic_beans"},
        {name:"twilightforest/ur_ghast", data:6, ingredient: "16x twilightforest:fiery_tears"},
        {name:"twilightforest/winter_wolf", data:6, ingredient: "8x twilightforest:arctic_fur_block"},
        {name:"twilightforest/wraith", data:6, ingredient: "64x minecraft:glowstone"},
        {name:"twilightforest/yeti", data:6, ingredient: "64x twilightforest:arctic_fur"},
        {name:"vindicator", data:6, ingredient: "64x minecraft:emerald"}
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
                    "nbt": {data_model:{data: model.data, id:"hostilenetworks:" + model.name}}
                }
            }))
    });

    event.recipes.mbd2.blast_furnace()
        .id('mbd2:blast_furnace/quartz_alloy_block')
        .duration(200)
        .priority(0)
        .inputItems('4x ae2:certus_quartz_crystal', '4x minecraft:quartz', '1x pneumaticcraft:plastic')
        .outputItems('1x kubejs:quartz_alloy_block')
})