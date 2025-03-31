JEIEvents.removeCategories(event => {
  event.remove('twilightforest:uncrafting') //hide uncrafting tab
})

ItemEvents.tooltip(event => {
  event.add(['kubejs:rough_data_card_substrate'], 'Right Click on a grindstone to get polished data card substrate')
  
  event.add(['mbd2:crystal_chamber'], 'The block in the middle of the multiblock decides, which recipe gets processed. Look in the JEI view for more information.')

})