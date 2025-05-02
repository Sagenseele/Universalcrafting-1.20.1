ServerEvents.recipes(event => {
    // Aurum Sapling
    event.custom({
        type: "botania:petal_apothecary",
        ingredients: [
            { tag: "forge:dusts/gold" },
            { tag: "forge:dusts/gold" },
            { tag: "forge:dusts/gold" },
            { tag: "forge:dusts/gold" },
            { item: "minecraft:golden_apple" }
        ],
        output: { item: "forbidden_arcanus:aurum_sapling" },
        reagent: { tag: "minecraft:saplings" }
    })

    // Gateway
    event.remove({ id: "gateways:emerald_grove" })
    event.custom({
        type: "botania:petal_apothecary",
        ingredients: [
            { tag: "minecraft:flowers" },
            { tag: "minecraft:flowers" },
            { tag: "minecraft:flowers" },
            { tag: "minecraft:flowers" },
            { tag: "minecraft:flowers" },
            { tag: "minecraft:flowers" },
            { tag: "minecraft:flowers" },
            { tag: "minecraft:flowers" }
        ],
        output: { item: "gateways:gate_pearl", "nbt": { gateway: "gateways:emerald_grove" } },
        reagent: { item: "kubejs:simple_gateway_core" }
    })

    // Infused Seashelf
    event.custom({
        type: "botania:elven_trade",
        ingredients: [{ item: "apotheosis:seashelf" }],
        output: [{ item: "apotheosis:infused_seashelf" }]
    })

    // Repair Talisman
    event.remove({ id: 'projecte:repair_talisman' })
    event.remove({ id: 'projecte:repair_talisman_alt' })
    event.custom({
        type: "botania:runic_altar",
        ingredients: [
            { tag: "forge:storage_blocks/steeleaf" },
            { item: "twilightforest:naga_scale" },
            { item: "twilightforest:naga_scale" },
            { item: "bloodmagic:reagentgrowth" },
            { item: "botania:rune_pride" }
        ],
        mana: 40000.0,
        output: { count: 1.0, item: "projecte:repair_talisman" }
    })
})