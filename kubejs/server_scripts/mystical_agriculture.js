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
    // Inferium Crystal
    squeezer('kubejs:inferium_sludge', 50, 'mysticalagriculture:inferium_essence', 2048)
    event.recipes.thermal.refinery([Fluid.of('kubejs:inferium_enriched_water', 200), '1x kubejs:crystal_inferium'], Fluid.of('kubejs:inferium_sludge', 500))

    // Prudentium Crystal

    //event.remove({type:"mysticalagriculture:infusion"})
    //event.forEachRecipe({ type: "immersiveengineering:squeezer" }, recipe => {
    //    recipe = recipe.json.toString()
    //    console.log(recipe)
    //})
})