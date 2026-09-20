window.COZY_PACKS=window.COZY_PACKS||{};
window.COZY_PACKS.starter={
 id:"starter",name:"Starter Valley",version:1,
 view:{width:560,height:280,haze:"?",notes:["You know almost nothing about this place.","The view is mostly possibility.","Shapes and habits are beginning to emerge.","The valley is becoming wonderfully specific.","This little world feels known. The shelf is complete."]},
 shelf:{capacity:12,columns:6,slotHeight:110},
 bookStyle:{spine:"#a85f4b",text:"#fff7df",offer:"#825445"},
 books:[
 {id:"mumbles",title:"A Brief and Mostly Accurate Account of Mumbles",text:"Small mossy folk called Mumbles inhabit the nearby woods. They are sociable, round, and difficult to hurry.",facts:["species:mumble"]},
 {id:"homes",title:"On the Architectural Merits of Very Large Mushrooms",text:"The local people hollow out enormous mushrooms and make remarkably snug homes beneath their caps.",facts:["place:mushroom_homes"]},
 {id:"hats",title:"Red Hats: A Serious Cultural Inquiry",text:"Among Mumbles, a red hat is everyday wear. Going bareheaded is considered either brave or forgetful.",facts:["mumble.clothing:red_hat"]},
 {id:"moonberries",title:"Moonberries, Lanterns, and Other Excellent Excuses",text:"Once each season the valley glows with lanterns for the Moonberry Festival.",facts:["culture:moonberry_festival"]},
 {id:"snail",title:"Why the Mail Is Late, Again",text:"Local post is carried by enormous but conscientious snails.",facts:["creature:mail_snail"]},
 {id:"tea",title:"Seventeen Teas and One That Is Probably Soup",text:"Tea stalls are common gathering places. The seventeenth tea remains controversial.",facts:["culture:tea_stall"]},
 {id:"trees",title:"Trees That Hum When Nobody Is Asking",text:"Blue-barked trees hum softly at dusk, apparently without needing an audience.",facts:["flora:humming_trees"]},
 {id:"bridge",title:"A Pedestrian's Complaint About Tiny Bridges",text:"Little arched bridges cross the valley streams. They are picturesque and inconveniently numerous.",facts:["place:tiny_bridges"]},
 {id:"birds",title:"The Unnecessarily Judgmental Birds of the Western Vale",text:"Plump violet birds watch passersby with what observers insist is disapproval.",facts:["creature:judgment_bird"]},
 {id:"weather",title:"An Optimist's Guide to Drizzle",text:"A silver drizzle visits often enough that locals barely acknowledge it.",facts:["weather:silver_drizzle"]},
 {id:"bells",title:"Who Keeps Ringing Those Little Bells?",text:"Wind-bells hang from branches to mark paths through the woods.",facts:["culture:path_bells"]},
 {id:"bakery",title:"Crumbs: A Regional History",text:"Warm round loaves are baked in communal stone ovens near the village.",facts:["place:bakery"]}
 ],
 worldObjects:[
 {fact:"flora:humming_trees",className:"trees",content:"♩ 🌳 ♪ 🌳"},
 {fact:"place:mushroom_homes",className:"homes",content:"🍄　🍄"},
 {fact:"place:tiny_bridges",className:"bridge",content:"⌒"},
 {fact:"species:mumble",className:"mumbles",content:"🟢　🟢",variants:[{requires:"mumble.clothing:red_hat",content:"🔴　🔴"}]},
 {fact:"creature:mail_snail",className:"snail",content:"🐌✉️"},
 {fact:"creature:judgment_bird",className:"birds",content:"🐦　🐦"},
 {fact:"culture:tea_stall",className:"tea",content:"☕"},
 {fact:"culture:moonberry_festival",className:"lanterns",content:"🏮 ✨ 🏮"},
 {fact:"culture:path_bells",className:"bells",content:"🔔　🔔"},
 {fact:"place:bakery",className:"bakery",content:"🥖"},
 {fact:"weather:silver_drizzle",className:"rain",content:"╱　╱　╱　╱　╱"}
 ]};