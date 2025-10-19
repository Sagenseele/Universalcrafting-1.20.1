ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "catalyst": {
                "item": "draconicevolution:reactor_core"
            },
            "ingredients": [
                {
                    "item": "mekanism:ultimate_induction_provider"
                },
                {
                    "tag": "forge:storage_blocks/prescient_crystal"
                }
            ],
            "result": {
                "item": "mbd2:gods_forge"
            },
            "tier": "CHAOTIC",
            "total_energy": 500000000
        }
    )

    event.replaceInput(
        { output: 'draconicevolution:draconium_core' },
        'minecraft:diamond',
        'powah:crystal_nitro'
    )
})