JEIEvents.removeCategories(event => {
  event.remove('twilightforest:uncrafting') //hide uncrafting tab
})

ItemEvents.tooltip(event => {
  event.add(['mbd2:multiplex_hatch_mark_1', 'mbd2:multiplex_hatch_mark_2', 'mbd2:multiplex_hatch_mark_3'], Text.of('Place in Multiblock to add one parallel processing.').aqua())
  event.add(['kubejs:relic_level_up'], Text.of('Craft with a relic to upgrade the relic by one level.').gold())
  event.add(['mbd2:gods_forge'], Text.of('[WIP] The recipes in this machine have a base energy cost and a base recipe time seen in JEI. The energy cost increases by 0.5% per tick. If the consumption reaches 2^31 FE/tick, the recipe will be canceled. For every Factor of 10 above 100.000.000 RF in the Energy Storage, the time will be divided by the Factor + 1 at the start of the recipe. E.g. 1.000.000.000 Energy halves the time required for the recipe, 10.000.000.000 cut it into thirds, etc..'))
})