ServerEvents.recipes(event => {
    function replace(output, toReplaced, replacer) {
        event.replaceInput(
            { output: output },
            toReplaced,
            replacer
        )
    }
    event.recipes.thermal.bottler('immersiveengineering:plate_duroplast', [Fluid.of('immersiveengineering:phenolic_resin', 250), 'immersiveengineering:mold_plate'])
    replace('thermal:machine_chiller', 'minecraft:packed_ice', 'minecraft:snow_block')
    replace('thermal:machine_chiller', 'thermal:invar_gear', '#forge:gears/lapis')
})