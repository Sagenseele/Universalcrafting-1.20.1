ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:simple_matter_extraction_device', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#forge:plates/copper',
            B: 'kubejs:electric_motor'
        }
    )

    // Steel Bore Head
    event.shaped(
        Item.of('kubejs:steel_bore_head', 1),
        [
            'DCD',
            ' A ',
            ' B '
        ],
        {
            A: 'mekanism:steel_casing',
            B: 'immersiveengineering:drillhead_steel',
            C: 'immersiveengineering:stick_steel',
            D: 'immersiveengineering:component_iron'
        }
    )

})