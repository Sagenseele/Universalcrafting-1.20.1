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
        reagent: { item: "kubejs:simple_spiritual_core" }
    })

    event.custom({
        type: "botania:petal_apothecary",
        ingredients: [
            { item: "botania:rune_pride" },
            { item: "botania:rune_greed" },
            { item: "botania:rune_mana" },
            { item: "bloodmagic:etherealslate" },
            { item: "industrialforegoing:laser_lens15" },
            { tag: "forge:ingots/sculk_alloy" }
        ],
        output: { item: "botania:black_lotus" },
        reagent: { item: "kubejs:dark_spiritual_core" }
    })
    

    // Rune
    event.custom({
        type: "botania:runic_altar",
        ingredients: [
            { item: "botania:rune_mana" },
            { item: "bloodmagic:blankslate" },
            { item: "bloodmagic:blankslate" },
            { item: "bloodmagic:blankslate" },
            { item: "bloodmagic:blankslate" }
        ],
        mana: 2000.0,
        output: { count: 4.0, item: "forbidden_arcanus:rune" }
    })
})