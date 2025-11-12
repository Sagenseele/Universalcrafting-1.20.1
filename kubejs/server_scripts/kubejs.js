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

    event.shaped(
        Item.of('kubejs:reinforced_matter_extraction_device', 1),
        [
            'AAA',
            'ACB',
            'AAA'
        ],
        {
            A: '#forge:plates/obsidian',
            B: 'immersiveengineering:component_electronic_adv',
            C: 'kubejs:simple_matter_extraction_device'
        }
    )

    event.shaped(
        Item.of('kubejs:hellish_matter_extraction_device', 1),
        [
            'BAB',
            'ACA',
            'BAB'
        ],
        {
            A: 'ae2:engineering_processor',
            B: 'mninecraft:blaze_rod',
            C: 'kubejs:reinforced_matter_extraction_device'
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