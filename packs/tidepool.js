window.COZY_PACKS=window.COZY_PACKS||{};
window.COZY_PACKS.tidepool={
 id:"tidepool",name:"Tidepool Almanac",version:1,
 view:{width:560,height:280,haze:"~",notes:["The coast is only mist and rumor.","A shoreline is beginning to take shape.","The tide has started giving up its secrets.","This coast has become a very peculiar neighborhood.","The tidepool feels thoroughly documented."]},
 shelf:{capacity:12,columns:6,slotHeight:110},
 bookStyle:{spine:"#4d7d83",text:"#f4fbf8",offer:"#456a75"},
 books:[
 {id:"crabs",title:"A Polite Introduction to Crabs of Rank",text:"Blue crabs along this coast insist upon tiny crowns and a surprisingly rigid order of precedence.",facts:["species:crowned_crab"]},
 {id:"lighthouse",title:"The Lighthouse That Blinks Twice",text:"A striped lighthouse offshore flashes twice whenever the fog rolls in.",facts:["place:lighthouse"]},
 {id:"kelp",title:"Kelp Gardening for the Chronically Damp",text:"Long forests of kelp are carefully tended in the shallows.",facts:["flora:kelp_forest"]},
 {id:"boats",title:"Small Boats, Large Opinions",text:"Bright little fishing boats crowd the bay, each painted to be recognizable from absurd distances.",facts:["place:fishing_boats"]},
 {id:"octopus",title:"Eight Arms, No Appointment",text:"A purple octopus runs a tiny stall near the waterline and is apparently always open.",facts:["species:shop_octopus"]},
 {id:"pearls",title:"Pearls and Other Things Best Found Accidentally",text:"The local oysters occasionally produce luminous pearls after moonrise.",facts:["nature:moon_pearls"]},
 {id:"gulls",title:"A Legal Defense of Sandwich Theft",text:"The gulls have developed elaborate arguments concerning unattended lunches.",facts:["creature:gulls"]},
 {id:"fog",title:"Fog: A Practical Guide to Misplacing the Horizon",text:"Sea fog arrives quickly and turns the whole coast silver.",facts:["weather:sea_fog"]},
 {id:"music",title:"Songs for Low Tide and Questionable Accordions",text:"Low tide is traditionally accompanied by music from the docks.",facts:["culture:dock_music"]},
 {id:"shells",title:"The Shell Collector's Guide to Leaving Some Behind",text:"Pink spiral shells gather in bright bands along the beach.",facts:["nature:pink_shells"]},
 {id:"tea",title:"Saltwater Tea and Why It Was a Mistake",text:"A cheerful seaside tea stand serves everything except its notorious original recipe.",facts:["place:tea_stand"]},
 {id:"moon",title:"When the Moon Pulls the Furniture Around",text:"Exceptionally high tides leave curious arrangements of driftwood along the shore.",facts:["nature:high_tide"]}
 ],
 worldObjects:[
 {fact:"flora:kelp_forest",className:"tide-kelp",content:"🌿　🌿　🌿"},
 {fact:"place:lighthouse",className:"tide-light",content:"🗼✨"},
 {fact:"species:crowned_crab",className:"tide-crab",content:"🦀👑　🦀"},
 {fact:"place:fishing_boats",className:"tide-boats",content:"⛵　🚤"},
 {fact:"species:shop_octopus",className:"tide-octopus",content:"🐙"},
 {fact:"nature:moon_pearls",className:"tide-pearls",content:"⚪ ✨ ⚪"},
 {fact:"creature:gulls",className:"tide-gulls",content:"🐦　🥪　🐦"},
 {fact:"weather:sea_fog",className:"tide-fog",content:"〰️　〰️　〰️"},
 {fact:"culture:dock_music",className:"tide-music",content:"🎵 🪗 🎶"},
 {fact:"nature:pink_shells",className:"tide-shells",content:"🐚　🐚"},
 {fact:"place:tea_stand",className:"tide-tea",content:"☕⛱️"},
 {fact:"nature:high_tide",className:"tide-tide",content:"🌊　🪵　🌊"}
 ]};