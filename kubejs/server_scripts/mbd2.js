ServerEvents.recipes((event) => {

    function assembler(output, input) {
        event.recipes.mbd2.assembler()
            .id("mbd2:assembler/")
            .duration(20)
            .priority(0)
            .perTick(builder => builder
                .inputFE(512)
            )
            .inputFluids('pneumaticcraft:lubricant 10')
            .inputItems(input)
            .outputItems(output)
    }

    assembler('3x kubejs:darkium_rod', 'kubejs:darkium_ingot')

    // Interfaces
    event.shaped(Item.of('mbd2:me_interface_tier_1', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'kubejs:lapiron_plate',
            B: '#ae2:interface'
        }
    )
    event.shaped(Item.of('mbd2:me_interface_tier_2', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'kubejs:sulfeel_plate',
            B: '#ae2:interface'
        }
    )
    event.shaped(Item.of('mbd2:me_interface_tier_3', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'kubejs:turquoise_plate',
            B: '#ae2:interface'
        }
    )
    // Egg Incubator
    event.shaped(
        Item.of('mbd2:egg_incubator', 1),
        [
            ' D ',
            'CBC',
            ' A '
        ],
        {
            A: 'mob_grinding_utils:saw',
            B: 'minecraft:spawner',
            C: 'bloodmagic:dislocationrune',
            D: 'forbidden_arcanus:rune_block'
        }
    )

    // Infuser
    event.recipes.mbd2.infuser()
        .id("mbd2:infuser/infused/crystal_imperium")
        .duration(200)
        .priority(0)
        .perTick(builder => builder
            .inputFE(2048)
        )
        .inputItems("kubejs:crystal_soulless_imperium")
        .outputItems("1x kubejs:crystal_imperium")
        .addDataString("infused", "Infused")

    event.recipes.mbd2.infuser()
        .id("mbd2:infuser/livingrock")
        .duration(200)
        .priority(0)
        .perTick(builder => builder
            .inputFE(2048)
        )
        .inputItems("4x botania:white_petal", "64x minecraft:stone")
        .outputItems("64x botania:livingrock")

    event.recipes.mbd2.infuser()
        .id("mbd2:infuser/livingwood")
        .duration(200)
        .priority(0)
        .perTick(builder => builder
            .inputFE(2048)
        )
        .inputItems("4x botania:white_petal", "64x #twilightforest:logs")
        .outputItems("64x botania:livingwood_log")

    event.shaped(
        Item.of('mbd2:infuser', 1),
        [
            '   ',
            'CBC',
            ' A '
        ],
        {
            A: 'ad_astra:etrium_block',
            B: 'powah:niotic_crystal_block',
            C: 'mekanism:elite_control_circuit'
        }
    )

    // Crystal Chamber
    event.shaped(
        Item.of('mbd2:crystal_chamber', 1),
        [
            'DDD',
            'EAE',
            'CBC'
        ],
        {
            A: 'ae2:fluix_pearl',
            B: 'ae2:fluix_block',
            C: 'kubejs:turquoise_plate',
            D: 'ae2:cut_quartz_slab',
            E: 'mekanism:block_osmium'
        }
    )

    // Crystal Cutter
    event.shaped(
        Item.of('mbd2:crystal_cutter', 1),
        [
            ' D ',
            'EAE',
            'CBC'
        ],
        {
            A: 'ae2:fluix_pearl',
            B: 'hostilenetworks:sim_chamber',
            C: 'kubejs:electrical_machine_casing',
            D: 'minecraft:stonecutter',
            E: 'mekanism:block_osmium'
        }
    )

    // Model Computation Facility
    event.shaped(
        Item.of('mbd2:model_computer', 1),
        [
            '   ',
            'EAE',
            'CBC'
        ],
        {
            A: 'ae2:fluix_pearl',
            B: 'ae2:fluix_block',
            C: 'kubejs:turquoise_plate',
            E: 'mekanism:elite_control_circuit'
        }
    )

    event.shaped(
        Item.of('mbd2:asteroid_catcher', 1),
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: "minecraft:sticky_piston",
            B: "thermal:enderium_gear",
            C: "mekanism:elite_control_circuit",
            D: "powah:energized_steel_block",
            E: "thermal:diamond_gear"
        }
    )

    // Blast Furnace
    event.recipes.mbd2.blast_furnace()
        .id('mbd2:blast_furnace/quartz_alloy_block')
        .duration(200)
        .priority(0)
        .inputItems('4x ae2:certus_quartz_crystal', '4x minecraft:quartz', '1x pneumaticcraft:plastic')
        .outputItems('1x kubejs:quartz_alloy_block')

    // Matter Replicator
    const meds = [
        { input: "#uc:med/tier2", catalyst: "mysticalagriculture:dye_agglomeratio", output: "mysticalagriculture:dye_essence" },
        { input: "#uc:med/tier2", catalyst: "mysticalagriculture:nature_agglomeratio", output: "mysticalagriculture:nature_essence" },
        { input: "#uc:med/tier2", catalyst: "#forge:storage_blocks/coal_coke", output: "mysticalagriculture:coal_essence" },
        { input: "#uc:med/tier2", catalyst: "minecraft:honey_block", output: "mysticalagriculture:honey_essence" },
        { input: "#uc:med/tier2", catalyst: "#forge:treated_wood", output: "mysticalagriculture:wood_essence" },
        { input: "#uc:med/tier3", catalyst: "#forge:storage_blocks/saltpeter", output: "mysticalagriculture:saltpeter_essence" },
        { input: "#uc:med/tier3", catalyst: "#forge:storage_blocks/sulfur", output: "mysticalagriculture:sulfur_essence" },
        { input: "#uc:med/tier3", catalyst: "mysticalagriculture:nether_agglomeratio", output: "mysticalagriculture:nether_essence" },
        { input: "#uc:med/tier3", catalyst: "#forge:storage_blocks/grains_of_infinity", output: "mysticalagriculture:grains_of_infinity_essence" },
        { input: "#uc:med/tier3", catalyst: "mysticalagriculture:fire_essence", output: "mysticalagriculture:fire_essence" },
        { input: "#uc:med/tier3", catalyst: "#c:quartz_blocks", output: "mysticalagriculture:nether_quartz_essence" },
        { input: "#uc:med/tier4", catalyst: "mysticalagriculture:mystical_flower_agglomeratio", output: "mysticalagriculture:mystical_flower_essence" },
        { input: "#uc:med/tier4", catalyst: "#forge:storage_blocks/steeleaf", output: "mysticalagriculture:steeleaf_essence" },
        { input: "#uc:med/tier4", catalyst: "#forge:storage_blocks/ironwood", output: "mysticalagriculture:ironwood_essence" },
        { input: "#uc:med/tier4", catalyst: "minecraft:experience_bottle", output: "mysticalagriculture:experience_essence" },
        { input: "#uc:med/tier5", catalyst: "kubejs:coil_tier_1", output: "mysticalagriculture:copper_essence" },
        { input: "#uc:med/tier5", catalyst: "solarflux:photovoltaic_cell_2", output: "mysticalagriculture:lapis_lazuli_essence" },
        { input: "#uc:med/tier5", catalyst: "mysticalagriculture:prismarine_agglomeratio", output: "mysticalagriculture:prismarine_essence" },
        { input: "#uc:med/tier5", catalyst: "minecraft:enchanted_golden_apple", output: "mysticalagriculture:gold_essence" },
        { input: "#uc:med/tier5", catalyst: "ironfurnaces:augment_factory", output: "mysticalagriculture:iron_essence" },
        { input: "#uc:med/tier5", catalyst: "#forge:storage_blocks/diamond", output: "mysticalagriculture:diamond_essence" },
        { input: "kubejs:transcendental_matter_extraction_device", catalyst: "bloodmagic:blankrune", output: "bloodmagic:blankslate" },
        { input: "kubejs:floralized_matter_extraction_device", catalyst: "#forge:storage_blocks/mana_diamond", output: "botania:mana_diamond" },
        { input: "kubejs:floralized_matter_extraction_device", catalyst: "botania:manaweave_cloth", output: "botania:mana_string" },
        { input: "kubejs:floralized_matter_extraction_device", catalyst: "botania:runic_altar", output: "botania:mana_pearl" },
        { input: "kubejs:floralized_matter_extraction_device", catalyst: "#forge:storage_blocks/manasteel", output: "mysticalagriculture:manasteel_essence" },
        { input: "kubejs:digital_matter_extraction_device", catalyst: "ae2:calculation_processor", output: "mysticalagriculture:certus_quartz_essence" },
        { input: "kubejs:digital_matter_extraction_device", catalyst: "ae2:quartz_glass", output: "mysticalagriculture:silicon_essence" }
    ]

    meds.forEach(med => {
        event.recipes.mbd2.matter_replicator()
            .id("mbd2:matter_replicator/" + med.output.split(':')[1])
            .duration(100)
            .priority(0)
            .chance(0.0, builder => builder.inputItems("1x " + med.catalyst, "1x " + med.input))
            .outputItems("1x " + med.output)
    });

    // Model Computer
    const models = [
        { name: "artifacts/mimic", data: 30, ingredient: "1x #artifacts:artifacts" },
        { name: "bat", data: 6, ingredient: "8x reliquary:bat_wing" },
        { name: "cod", data: 6, ingredient: "16x minecraft:cod" },
        { name: "cow", data: 6, ingredient: "64x minecraft:leather" },
        { name: "elder_guardian", data: 6, ingredient: "8x forbidden_arcanus:aquatic_dragon_scale" },
        { name: "ender_dragon", data: 6, ingredient: "1x forbidden_arcanus:arcane_dragon_egg" },
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
        { name: "warden", data: 6, ingredient: "4x silentcompat:sculk_alloy_ingot" },
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
            .inputItems('1x kubejs:machine_learning_processor', '64x hostilenetworks:prediction_matrix', model.ingredient)
            .biome("ad_astra:orbit")
            .outputItems(JsonIO.of({
                "count": 1,
                "value": {
                    "type": "forge:nbt",
                    "item": 'hostilenetworks:data_model',
                    "nbt": { data_model: { data: model.data, id: "hostilenetworks:" + model.name } }
                }
            }))
    });

    // Crystal Cutter
    event.recipes.mbd2.crystal_cutter()
        .id("mbd2:crystal_cutter/ae2_printed_machine_learning_processor")
        .duration(60)
        .priority(0)
        .inputFE(2048)
        .inputFluids("water 2000")
        .inputItems("ae2:cell_component_64k", "1x kubejs:mob_simulation_data", "1x hostilenetworks:blank_data_model")
        .outputItems("1x kubejs:printed_machine_learning_processor")

    event.recipes.mbd2.crystal_cutter()
        .id("mbd2:crystal_cutter/rs_printed_machine_learning_processor")
        .duration(60)
        .priority(0)
        .inputFE(2048)
        .inputFluids("water 2000")
        .inputItems("refinedstorage:64k_storage_part", "1x kubejs:mob_simulation_data", "1x hostilenetworks:blank_data_model")
        .outputItems("1x kubejs:printed_machine_learning_processor")

    event.recipes.mbd2.crystal_cutter()
        .id("mbd2:crystal_cutter/cryogenium")
        .duration(200)
        .priority(0)
        .inputFE(2048)
        .inputFluids("water 2000")
        .inputItems("1x kubejs:raw_cryogenium", "8x ad_astra:ice_shard", "1x minecraft:blue_ice")
        .outputItems("1x kubejs:cryogenium")

    // Asteroid Catcher
    event.recipes.mbd2.asteroid_catcher()
        .id("mbd2:asteroid_catcher/asteroids")
        .duration(200)
        .priority(0)
        .biome("ad_astra:orbit")
        .perTick(builder => builder
            .inputFluids("ad_astra:cryo_fuel 1")
            .inputFE(512)
        )
        .chance(0.555, builder => builder
            .outputItems("kubejs:carbon_asteroid")
        )
        .chance(0.225, builder => builder
            .outputItems("kubejs:frigid_asteroid")
        )
        .chance(0.175, builder => builder
            .outputItems("kubejs:occult_asteroid")
        )
        .chance(0.045, builder => builder
            .outputItems("kubejs:twinkling_asteroid")
        )
})

MBDRecipeTypeEvents.onRecipeUI("mbd2:infuser", event => {
    console.log(event)
    console.log("Test")
    const mbdEvent = event.event;
    const { recipe, root } = mbdEvent;
    console.log("RECIPE " + recipe)
    console.log('ROOT ' + root)
})

MBDMachineEvents.onBeforeRecipeModify('mbd2:matter_replicator', (event) => {
    const mbdEvent = event.event;
    const { machine, recipe } = mbdEvent;

    let itemTrait = machine.getTraitByName("upgrade_card");
    if (itemTrait == null) return;
    let storage = itemTrait.storage;
    let upgradeCount = storage.getStackInSlot(0).count;
    let parallelRecipe = machine.applyParallel(recipe, upgradeCount);
    let copyRecipe = parallelRecipe.copy();

    mbdEvent.setRecipe(copyRecipe);
});
// Infuser
MBDMachineEvents.onBeforeRecipeModify('mbd2:infuser', (event) => {

    var test = Math.random();
    var item = "";
    switch (true) {
        case (test < 0.2):
            item = "1x bloodmagic:vengefulcrystal";
            break;
        case (test < 0.4):
            item = "1x bloodmagic:corrosivecrystal";
            break;
        case (test < 0.6):
            item = "1x bloodmagic:destructivecrystal";
            break;
        case (test < 0.8):
            item = "1x bloodmagic:steadfastcrystal";
            break;
        case (test >= 0.8):
            item = "1x bloodmagic:defaultcrystal";
            break;
    }
    const mbdEvent = event.getEvent();
    const { machine, recipe } = mbdEvent;

    if ((/^(?!mbd2:infuser\/infused).*/).test(recipe.getId())) return
    //if(xyz nicht vorhanden) {machine.setWaiting} else {}
    let builder = recipe.toBuilder();
    builder.inputItems(item)
    let newRecipe = builder.buildMBDRecipe();
    mbdEvent.setRecipe(newRecipe);
});

// Forge of the Infinity
MBDMachineEvents.onRecipeWorking('mbd2:gods_forge', event => {
    const mbdEvent = event.getEvent();
    const { machine, recipe, progress } = mbdEvent;
    let multiplier = 1.01
    let cM = new ContentModifier(multiplier, 0)
    let newRecipe = recipe.copy(cM)
    mbdEvent.setRecipe(newRecipe)
    //let newRecipe = builder.buildMBDRecipe();
    //let multiplier = 1.01**progress
    //let newRecipe = recipe.toBuilder()
    //let copyRecipe = newRecipe.copy()

})