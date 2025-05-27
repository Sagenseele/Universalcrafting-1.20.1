StartupEvents.registry('fluid', event => {

    function thickFluid(name, color) {
        event.create(name).thickTexture(color)
    }
    function thinFluid(name, color=0xffffff) {
        event.create(name).thinTexture(color)
    }

    thickFluid('liquid_chaos', 0x1f1f1f)
    thickFluid('liquid_glass', 0xbdbdbd)
    thickFluid('inferium_sludge', 0x4f8001)
    thickFluid('tertium_sludge', 0x705401)
    thickFluid('impertium_concentrate', 0x0270b5)
    thinFluid('inferium_enriched_water',0x75bd02)
    thinFluid('prudentium_enriched_water',0x32a852)
    thinFluid('tertium_enriched_water',0xb58802)
    thinFluid('imperium_enriched_water',0x0000ff)
    thinFluid('prudentium_solution',0x00c965)
    thinFluid('prudiferium_solution',0x224811)
    thinFluid('impertium_solution',0x5b4481)
    thinFluid('prosperity_enriched_water',0xcfcfcf)
    thinFluid('nitric_prosperity_solution',0xf5b0b0)
    thinFluid('acidic_imperium_solution',0x306bc9)
})