ServerEvents.recipes((event) => {
    
    const models = [
        {name:"artifacts/mimic", data:6, ingredient: "64x minecraft:apple"},
        {name:"cod", data:6, ingredient: "64x minecraft:apple"},
        {name:"cow", data:6, ingredient: "64x minecraft:apple"},
        {name:"elder_guardian", data:6, ingredient: "64x minecraft:apple"},
        {name:"ender_dragon", data:6, ingredient: "64x minecraft:apple"},
        {name:"enderman", data:6, ingredient: "64x minecraft:apple"},
        {name:"rabbit", data:6, ingredient: "64x minecraft:apple"},
        {name:"shulker", data:6, ingredient: "64x minecraft:apple"},
        {name:"ghast", data:6, ingredient: "64x minecraft:apple"},
        {name:"guardian", data:6, ingredient: "64x minecraft:apple"},
        {name:"creeper", data:6, ingredient: "64x minecraft:apple"},
        {name:"polar_bear", data:6, ingredient: "64x minecraft:apple"},
        {name:"phantom", data:6, ingredient: "64x minecraft:apple"},
        {name:"blaze", data:6, ingredient: "64x minecraft:apple"},
        {name:"glow_squid", data:6, ingredient: "64x minecraft:apple"},
        {name:"evoker", data:6, ingredient: "64x minecraft:apple"},
        {name:"pig", data:6, ingredient: "64x minecraft:apple"},
        {name:"mooshroom", data:6, ingredient: "64x minecraft:apple"},
        {name:"iron_golem", data:6, ingredient: "64x minecraft:apple"},
        {name:"hoglin", data:6, ingredient: "64x minecraft:apple"},
        {name:"drowned", data:6, ingredient: "64x minecraft:apple"},
        {name:"chicken", data:6, ingredient: "64x minecraft:apple"},
        {name:"magma_cube", data:6, ingredient:"64x minecraft:magma_cream"},
        {name:"sheep", data:6, ingredient: "64x minecraft:apple"},
        {name:"skeleton", data:6, ingredient: "64x minecraft:apple"},
        {name:"slime", data:6, ingredient: "64x minecraft:apple"},
        {name:"snow_golem", data:6, ingredient: "64x minecraft:apple"},
        {name:"spider", data:6, ingredient: "64x minecraft:apple"},
        {name:"squid", data:6, ingredient: "64x minecraft:apple"},
        {name:"warden", data:6, ingredient: "64x minecraft:apple"},
        {name:"witch", data:6, ingredient: "64x minecraft:apple"},
        {name:"zombie", data:6, ingredient:"64x minecraft:rotten_flesh"},
        {name:"wither_skeleton", data:6, ingredient: "64x minecraft:apple"},
        {name:"zombified_piglin", data:6, ingredient: "64x minecraft:apple"},
        {name:"wither", data:6, ingredient: "64x minecraft:apple"},
        {name:"thermal/basalz", data:6, ingredient: "64x minecraft:apple"},
        {name:"thermal/blitz", data:6, ingredient: "64x minecraft:apple"},
        {name:"thermal/blizz", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/alpha_yeti", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/kobold", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/minoshroom", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/lich", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/helmet_crab", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/giant", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/carminite_golem", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/skeleton_druid", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/redcap", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/hydra", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/deer", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/death_tome", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/stable_ice_core", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/snow_queen", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/raven", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/naga", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/minotaur", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/goblin", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/fire_beetle", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/towerwood_borer", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/troll", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/ur_ghast", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/winter_wolf", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/wraith", data:6, ingredient: "64x minecraft:apple"},
        {name:"twilightforest/yeti", data:6, ingredient: "64x minecraft:apple"},
        {name:"vindicator", data:6, ingredient: "64x minecraft:apple"}
    ]

    models.forEach(model => {
        event.recipes.mbd2.model_computer()
            .id("mbd2:model_computer/" + model.name)
            .duration(6000)
            .priority(0)
            .inputFE(2048)
            .inputItems(model.ingredient)
            .outputItems(JsonIO.of({
                "count": 1,
                "value": {
                    "type": "forge:nbt",
                    "item": 'hostilenetworks:data_model',
                    "nbt": {data_model:{data: model.data, id:"hostilenetworks:" + model.name}}
                }
            }))
    });
})