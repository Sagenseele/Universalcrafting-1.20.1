JEIEvents.removeCategories(event => {
  event.remove('twilightforest:uncrafting') //hide uncrafting tab
})

ItemEvents.tooltip(event => {
  event.add(['mbd2:multiplex_hatch_mark_1', 'mbd2:multiplex_hatch_mark_2', 'mbd2:multiplex_hatch_mark_3'], Text.of('Place in Multiblock to add one parallel processing.').aqua())
  event.add(['kubejs:relic_level_up'], Text.of('Craft with a relic to upgrade the relic by one level.').gold())
})