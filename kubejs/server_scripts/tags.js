ServerEvents.tags('item', event => {
    event.removeAll('twilightforest:portal/activator')
    event.add('twilightforest:portal/activator', 'bloodmagic:lavacrystal')
    event.add('forge:dusts/saltpeter', 'thermal:niter_dust')
})