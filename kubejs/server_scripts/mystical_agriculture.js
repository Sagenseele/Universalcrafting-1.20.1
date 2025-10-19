ServerEvents.recipes((event) => {
    /**
     * @param {String} result - Result IIngredient
     * @param {String} input - Input IIngredient
     * @param {Array} ingArray - Input Array with IIngredients
    */
    function infusion(result, input, ingredientsArray) {
        var inputs = []
        ingredientsArray.forEach(item => {
            inputs.push({ "item": item.toString() })
        })
        var recipe = {
            "type": "mysticalagriculture:infusion",
            "input": {
                "item": input.toString()
            },
            "ingredients": inputs,
            "result": {
                "item": result.toString()
            }
        }
        console.log(recipe)
        event.custom(recipe)
    }
    function squeezer(output, output_amount, input, energy) {
        event.custom({
            type: "immersiveengineering:squeezer",
            "energy": energy,
            "fluid": {
                "amount": output_amount,
                "fluid": output
            },
            "input": { "item": input }
        })
    }

    function mixer(fluid_output, fluid_output_amount, fluid_input, fluid_input_amount, item_inputs, energy) {
        var inputs = []
        item_inputs.forEach(item => {
            inputs.push({ "item": item.toString() })
        })
        var recipe = {
            "type": "immersiveengineering:mixer",
            "energy": energy,
            "fluid": {
                "amount": fluid_input_amount,
                "tag": fluid_input.toString()
            },
            "inputs": inputs,
            "result": {
                "amount": fluid_output_amount,
                "fluid": fluid_output.toString()
            }
        }
        event.custom(recipe)
    }

    // Inert Infinity Token
    infusion("kubejs:inert_infinity_token", "draconicevolution:chaotic_core", ["projecte:rm_furnace", "draconicevolution:chaotic_capacitor", "apotheosis:ender_library", "solarflux:sp_de.chaotic", "ae2:cell_component_256k", "bloodmagic:archmagebloodorb"])

    // Inferium Crystal
    squeezer('kubejs:inferium_sludge', 50, 'mysticalagriculture:inferium_essence', 2048)
    event.recipes.thermal.refinery([Fluid.of('kubejs:inferium_enriched_water', 200), '1x kubejs:crystal_inferium'], Fluid.of('kubejs:inferium_sludge', 500))

    // Prudentium Crystal
    mixer('kubejs:prudiferium_solution', 100, 'forge:fluid/inferium_enriched_water', 50, ['mysticalagriculture:prudentium_essence', 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:prudentium_essence'], 2048)
    event.recipes.thermal.chiller('kubejs:crystal_prudentium', [Fluid.of('kubejs:prudiferium_solution', 250)])

    //Salt Mixer (?)
    //mods.nuclearcraft.salt_mixer.addRecipe([<liquid:water_prudentium> * 500, <liquid:water_inferium> * 500, <liquid:solution_prudiferium> * 1000]);
   
    // Tertium Crystal
    

    // Superium Crystal

    // Supremium Crystal

    // Insanium Crystal

    // Infusion Zeug
    event.replaceInput(
        { output: 'mysticalagriculture:infusion_altar' },
        'minecraft:gold_ingot',
        'kubejs:crystal_inferium'
    )
    event.replaceInput(
        { output: 'mysticalagriculture:infusion_pedestal' },
        'minecraft:gold_ingot',
        'kubejs:crystal_inferium'
    )
    event.replaceInput(
        { output: 'mysticalagriculture:awakening_altar' },
        'minecraft:gold_ingot',
        'kubejs:crystal_inferium'
    )
    event.replaceInput(
        { output: 'mysticalagriculture:awakening_pedestal' },
        'minecraft:gold_ingot',
        'kubejs:crystal_inferium'
    )
    event.replaceInput(
        { output: 'mysticalagriculture:essence_vessel' },
        'minecraft:gold_ingot',
        'kubejs:crystal_inferium'
    )

    event.remove({ id: "biomancy:crafting/despoil_sickle"})
    infusion("biomancy:despoil_sickle","kubejs:dark_spiritual_core", ["minecraft:rotten_flesh","minecraft:porkchop","minecraft:rotten_flesh","minecraft:beef","minecraft:rotten_flesh","minecraft:mutton","minecraft:rotten_flesh","minecraft:chicken"])
    infusion("kubejs:dark_spiritual_core", "kubejs:simple_spiritual_core", ["bloodmagic:reinforcedslate","minecraft:black_candle","bloodmagic:reinforcedslate","minecraft:red_candle","bloodmagic:reinforcedslate","minecraft:black_candle","bloodmagic:reinforcedslate","minecraft:red_candle"])
})