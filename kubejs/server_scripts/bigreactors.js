ServerEvents.recipes(event => {

    function replace(output, toReplaced, replacer) {
        event.replaceInput(
            { output: output },
            toReplaced,
            replacer
        )
    }
    replace('bigreactors:basic_reactorcontroller', 'minecraft:diamond', 'kubejs:electrical_machine_casing')
    replace('bigreactors:fluidizercontroller', 'minecraft:emerald', 'kubejs:electrical_machine_casing')
    replace('bigreactors:basic_reactorcasing', 'minecraft:sand', 'ad_astra:ostrum_ingot')
    replace('bigreactors:basic_turbinecasing', 'minecraft:redstone_block', 'powah:niotic_crystal_block')
    replace('bigreactors:fluidizercasing', 'minecraft:water_bucket', 'bigreactors:basic_reactorcasing')

})