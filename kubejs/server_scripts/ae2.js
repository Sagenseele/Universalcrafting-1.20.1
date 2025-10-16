ServerEvents.recipes(event => {
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "kubejs:printed_machine_learning_processor"
            },
            "middle": {
                "item": "minecraft:redstone"
            },
            "top": {
                "item": "ae2:printed_silicon"
            }
        },
        "mode": "press",
        "result": {
            "item": "kubejs:machine_learning_processor"
        }
    })

    // charger
    event.replaceInput(
        { output: 'ae2:charger' },
        'minecraft:iron_ingot',
        'pneumaticcraft:plastic'
    )

    // inscriber
    event.replaceInput(
        { output: 'ae2:inscriber' },
        'minecraft:iron_ingot',
        'pneumaticcraft:plastic'
    )
})