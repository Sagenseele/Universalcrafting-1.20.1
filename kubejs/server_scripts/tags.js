ServerEvents.tags('item', event => {
    event.removeAll('twilightforest:portal/activator')
    event.add('twilightforest:portal/activator', 'bloodmagic:lavacrystal')
    event.add('forge:dusts/saltpeter', 'thermal:niter_dust')
    event.add('uc:components/electric_motor', 'create:precision_mechanism')
    event.add('uc:components/electric_motor', 'immersiveengineering:component_electronic')
    event.add('forge:sandstone/venus_sandstone', 'ad_astra:venus_sandstone')

})