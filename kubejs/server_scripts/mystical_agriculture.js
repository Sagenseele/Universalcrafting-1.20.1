ServerEvents.recipes((event) => {

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
            inputs.push({"item": item.toString()})
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
        console.log(recipe)
        event.custom(recipe)
    }
    // Inferium Crystal
    squeezer('kubejs:inferium_sludge', 50, 'mysticalagriculture:inferium_essence', 2048)
    event.recipes.thermal.refinery([Fluid.of('kubejs:inferium_enriched_water', 200), '1x kubejs:crystal_inferium'], Fluid.of('kubejs:inferium_sludge', 500))
    
    // Prudentium Crystal
    //(<liquid:solution_prudentium> * 100, <liquid:water> * 100, [<ore:essencePrudentium>, <ore:essencePrudentium>, <ore:essencePrudentium>, <ore:essencePrudentium>], 2048);
    mixer('kubejs:prudentium_solution', 100, 'minecraft:water', 100, ['mysticalagriculture:prudentium_essence', 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:prudentium_essence'], 2048)
    event.recipes.thermal.chiller('kubejs:crystal_prudentium', [Fluid.of('kubejs:prudentium_solution', 250)])

    //<mysticalagriculture:crafting:1> % 5, <liquid:solution_prudentium> * 250
    event.recipes.thermal.refinery([Fluid.of('kubejs:inferium_enriched_water', 200), Item.of('1x kubejs:crystal_inferium').withChance(0.05)], Fluid.of('kubejs:inferium_sludge', 500))
    
    // Crystallizer (?)
    //mods.nuclearcraft.crystallizer.addRecipe([<liquid:water_prudentium> * 200, <mysticalagriculture:crafting:1>]);    
    event.recipes.thermal.chiller('mysticalagriculture:prudentium_essence', [Fluid.of('kubejs:prudentium_enriched_water', 200)])

    //Salt Mixer (?)
    //mods.nuclearcraft.salt_mixer.addRecipe([<liquid:water_prudentium> * 500, <liquid:water_inferium> * 500, <liquid:solution_prudiferium> * 1000]);

    
    //event.remove({type:"mysticalagriculture:infusion"})
    //event.forEachRecipe({ type: "immersiveengineering:squeezer" }, recipe => {
    //    recipe = recipe.json.toString()
    //    console.log(recipe)
    //})

    // Tertium Crystal

    // Superium Crystal

    // Supremium Crystal

    // Insanium Crystal
})