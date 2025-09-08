ServerEvents.recipes(event => {
    // raw Iron
    event.recipes.bloodmagic.altar('minecraft:raw_iron', 'kubejs:wood_splinter').upgradeLevel(0).altarSyphon(400).consumptionRate(40).drainRate(5)

    // Lava Reagent
    event.remove({id: 'bloodmagic:alchemytable/reagent_lava'})
    event.recipes.bloodmagic.alchemytable(
        '1x bloodmagic:reagentlava',
        ['occultism:datura', 'minecraft:redstone', '#forge:cobblestone', '#forge:storage_blocks/coal']
    ).syphon(1000).ticks(200).upgradeLevel(1)

    // Sacrificial Knife
    event.remove({ id: 'bloodmagic:sacrificial_dagger' })
    event.shaped(
        Item.of('bloodmagic:sacrificialdagger', 1),
        [
            'A B',
            'AB ',
            'AAA'
        ],
        {
            A: 'minecraft:polished_granite',
            B: 'mysticalagriculture:nether_quartz_essence'
        }
    )

    // Blood Altar
    event.replaceInput(
        { output: 'bloodmagic:altar' },
        'minecraft:gold_ingot',
        'minecraft:andesite'
    )
    // Weak Blood Orb
    event.remove({ id: 'bloodmagic:altar/weakbloodorb' })
    event.recipes.bloodmagic.altar('bloodmagic:weakbloodorb', 'kubejs:simple_gateway_core').upgradeLevel(0).altarSyphon(2000).consumptionRate(100).drainRate(0)

    // Amethyst
    event.recipes.bloodmagic.altar('minecraft:budding_amethyst', 'minecraft:amethyst_block').upgradeLevel(2).altarSyphon(10000).consumptionRate(500).drainRate(50)

    // Flawless Budding Certus Quartz
    event.recipes.bloodmagic.altar('ae2:flawless_budding_quartz', 'ae2:flawed_budding_quartz').upgradeLevel(2).altarSyphon(10000).consumptionRate(500).drainRate(50)

    // Weak Activation Crystal
    event.remove({ id: 'bloodmagic:weak_activation_crystal' })
    event.recipes.bloodmagic.altar('bloodmagic:activationcrystalweak', 'bloodmagic:lavacrystal').upgradeLevel(1).altarSyphon(10000).consumptionRate(20).drainRate(5)

    // Fire Inscription Tool
    event.remove({ id: 'bloodmagic:altar/fire_tool' })
    event.recipes.bloodmagic.altar('bloodmagic:firescribetool', 'twilightforest:torchberries').upgradeLevel(1).altarSyphon(1000).consumptionRate(5).drainRate(5)

    // Earth Inscription Tool
    event.remove({ id: 'bloodmagic:altar/earth_tool' })
    event.recipes.bloodmagic.altar('bloodmagic:earthscribetool', '#twilightforest:logs').upgradeLevel(1).altarSyphon(1000).consumptionRate(5).drainRate(5)

    // Air Inscription Tool
    event.remove({ id: 'bloodmagic:altar/air_tool' })
    event.recipes.bloodmagic.altar('bloodmagic:airscribetool', 'twilightforest:firefly').upgradeLevel(1).altarSyphon(1000).consumptionRate(5).drainRate(5)

    // Water Inscription Tool
    event.remove({ id: 'bloodmagic:altar/water_tool' })
    event.recipes.bloodmagic.altar('bloodmagic:waterscribetool', '#forge:storage_blocks/lapis').upgradeLevel(1).altarSyphon(1000).consumptionRate(5).drainRate(5)

    // Simple Gateway Core
    event.recipes.bloodmagic.altar('kubejs:simple_gateway_core', 'create:andesite_alloy').upgradeLevel(0).altarSyphon(2000).consumptionRate(5).drainRate(5)

    // FA Test Tube
    event.recipes.bloodmagic.altar(Item.of('forbidden_arcanus:blood_test_tube', '{Blood:3000}'),'forbidden_arcanus:test_tube').upgradeLevel(0).altarSyphon(3000).consumptionRate(150).drainRate(5)

})