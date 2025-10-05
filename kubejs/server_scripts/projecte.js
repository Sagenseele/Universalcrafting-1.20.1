ServerEvents.recipes(event => {
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

