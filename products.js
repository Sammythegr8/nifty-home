/* ============================================================================
   ALL PRODUCTS LIVE HERE. To add a product, copy one block, paste it at the
   end of the list (before the final ];), and change the text between quotes.
   Keep the commas and quote marks. "slug" is the page name: lowercase words
   joined by hyphens, no spaces, and different for every product.
   Pin link for a product:  product.html?p=<slug>
   To hide a product from the main page (its own page still works), add
   hide: true, right after its slug line. Delete that line to show it again.
   ============================================================================ */
/* HOLIDAY MODE: set on:false after Christmas to go back to the normal look. */
window.SEASON={on:false,pill:"Holiday gift guide",title:"Gifts they <em>didn’t know</em> they needed.",lead:"Small, clever gifts that fix everyday annoyances: stocking stuffers, Secret Santa picks and last-minute presents. Every one was $20 or under when I picked it.",note:"Prices and delivery dates change a lot at this time of year, so check Amazon for today’s price and the delivery date before you order."};
window.PRODUCTS = [
{
  slug: "water-leak-alarm", gift: "A practical gift for anyone with a washing machine, dishwasher or basement.", icon: "💧", img: "images/water-leak-alarm.jpg", alt: "Illustrative photo of a small white leak sensor on the floor beside a washing machine", art: '<svg viewBox="0 0 120 120" fill="none" stroke-linecap="round" stroke-linejoin="round" role="img" aria-hidden="true"><rect x="26" y="74" width="68" height="20" rx="10" fill="var(--accent)"/><circle cx="46" cy="84" r="3" fill="var(--surface)"/><circle cx="60" cy="84" r="3" fill="var(--surface)"/><circle cx="74" cy="84" r="3" fill="var(--surface)"/><path d="M60 16c10 14 16 22 16 31a16 16 0 0 1-32 0c0-9 6-17 16-31z" fill="var(--surface)" stroke="var(--accent)" stroke-width="4"/><path d="M12 106q8-8 16 0t16 0 16 0 16 0 16 0 16 0" stroke="var(--accent)" stroke-width="4" opacity=".5"/></svg>', name: "Water leak alarm",
  line: "Screams the moment a washer or sink starts leaking, before the floor is ruined.",
  link: "https://amzn.to/4siqWwI",
  about: "Most water damage starts small: a slow drip behind the washing machine, a loose hose under the sink, a water heater that has started to seep. Because these usually happen out of sight, they can run for days before anyone notices. A water leak alarm is a small sensor that sits on the floor and sounds an alert when it touches water.",
  how: "Instead of finding a soaked cabinet or warped flooring later, you hear the alarm as soon as water appears. You can turn off the supply, mop up and fix the cause while the damage is still small.",
  tips: ["Put it flat on the floor next to the likeliest source, such as the base of the washer or under the sink.", "Test it when it arrives by touching the sensor points with a damp cloth, so you know it works.", "If it runs on batteries, check them every few months. A dead sensor protects nothing."],
  who: "Anyone with a washing machine, dishwasher, water heater or basement, and anyone who is often away from home.",
  check: ["Check how it is powered and how loud the alarm is in the listing.", "Look at whether it is a single sensor or a set, and where you would place each one."],
  faq: [["Does it stop the leak?", "No. It only alerts you, so you still need to turn the water off and fix the cause."], ["Where is it most useful?", "Anywhere water lines run out of sight: under sinks, behind washers and dishwashers, near water heaters and in basements."]]
},
{
  slug: "wall-mounted-mail-holder", gift: "A tidy housewarming or new-home gift.", icon: "📬", img: "images/wall-mounted-mail-holder.jpg", alt: "Illustrative photo of a rustic wooden wall-mounted mail holder with hooks and a small drawer", ill: "Illustrative image · colour may differ", art: '<svg viewBox="0 0 120 120" fill="none" stroke-linecap="round" stroke-linejoin="round" role="img" aria-hidden="true"><rect x="32" y="22" width="36" height="44" rx="4" fill="var(--accent)" opacity=".5"/><rect x="52" y="14" width="36" height="48" rx="4" fill="var(--accent)"/><path d="M52 22l18 13 18-13" stroke="var(--surface)" stroke-width="3"/><path d="M22 54h76v34a8 8 0 0 1-8 8H30a8 8 0 0 1-8-8z" fill="var(--surface)" stroke="var(--accent)" stroke-width="4"/><circle cx="60" cy="72" r="4" fill="var(--accent)"/></svg>', name: "Wall-mounted mail holder",
  line: "Gives mail, keys and loose papers a spot on the wall, so they stop piling up on the counter.",
  link: "https://amzn.to/4yqPTr7",
  about: "Mail, school letters, receipts and keys tend to land on the first flat surface people reach. Within a few days that spot has become a pile. A wall-mounted holder gives them a fixed place, up off the counter.",
  how: "Things kept at eye level on the wall are harder to lose, and the counter or table underneath stays clear for what it is meant for. It also makes the entryway look tidier with very little effort.",
  tips: ["Mount it near the door you use most, so mail goes straight in when you walk in.", "Sort it once a week. A holder only works if the pile does not grow back.", "Check that the mounting method suits your wall, especially if you rent."],
  who: "Households with a busy entryway, kitchen counter or hallway table, and anyone who is tired of searching for letters.",
  check: ["Check the size and how many items it holds.", "Check whether it mounts with screws or adhesive, and whether that suits your wall."],
  faq: [["Will it damage my wall?", "That depends on the mounting. Screws leave small holes, and adhesive types can mark paint if removed carelessly, so follow the listing's instructions."], ["Is it only for mail?", "No. Many people also use these for notes and small everyday items, depending on the design."]]
},
{
  slug: "silicone-drain-hair-catcher", gift: "A funny-but-useful stocking stuffer.", icon: "🚿", img: "images/silicone-drain-hair-catcher.jpg", alt: "Illustrative photo of a round grey silicone drain cover on a shower floor", art: '<svg viewBox="0 0 120 120" fill="none" stroke-linecap="round" stroke-linejoin="round" role="img" aria-hidden="true"><circle cx="60" cy="60" r="42" fill="var(--surface)" stroke="var(--accent)" stroke-width="4"/><circle cx="60" cy="60" r="28" stroke="var(--accent)" stroke-width="3" opacity=".6"/><circle cx="60" cy="60" r="8" fill="var(--accent)"/><g fill="var(--accent)"><circle cx="78" cy="60" r="3.5"/><circle cx="69" cy="75.6" r="3.5"/><circle cx="51" cy="75.6" r="3.5"/><circle cx="42" cy="60" r="3.5"/><circle cx="51" cy="44.4" r="3.5"/><circle cx="69" cy="44.4" r="3.5"/></g></svg>', name: "Silicone drain hair catcher",
  line: "Catches the hair before it becomes a clog you have to fish out.",
  link: "https://amzn.to/4BjqWR0",
  about: "Hair is one of the most common reasons shower and tub drains slow down. It collects below the drain and mats together with soap until the water barely moves. A silicone drain catcher sits over or in the drain and catches hair before it gets that far.",
  how: "Clearing it takes a few seconds: lift it out, drop the hair in the bin, rinse it and put it back. That is easier than pulling a clump out of the pipe later or reaching for harsh drain cleaner.",
  tips: ["Empty it after each shower, or every few showers, so water keeps flowing.", "Rinse it with warm soapy water now and then to stop soap film building up.", "Treat it as prevention. It will not clear a clog that is already deep in the pipe."],
  who: "Anyone with long hair, a shared bathroom, or a shower or tub that drains slowly.",
  check: ["Check the drain size and style it is made for, such as flat or pop-up.", "Look at the listing's photos to see how it sits in the drain."],
  faq: [["Will it fit any drain?", "Not always. Drains come in different sizes and styles, so compare the measurements in the listing with your own."], ["Does it catch every hair?", "It catches most of it, but not all, so emptying it regularly still matters."]]
},
{
  slug: "mini-waffle-maker", gift: "A fun gift for students, kids and breakfast lovers.", icon: "🧇", img: "images/mini-waffle-maker.jpg", alt: "Illustrative photo of a mini waffle maker with a waffle and berries on a kitchen counter", art: '<svg viewBox="0 0 120 120" fill="none" stroke-linecap="round" stroke-linejoin="round" role="img" aria-hidden="true"><rect x="26" y="38" width="68" height="64" rx="14" fill="var(--surface)" stroke="var(--accent)" stroke-width="4"/><path d="M26 59h68M26 80h68M48 38v64M72 38v64" stroke="var(--accent)" stroke-width="3" opacity=".6"/><path d="M46 28q-5-7 0-14M60 28q-5-7 0-14M74 28q-5-7 0-14" stroke="var(--accent)" stroke-width="4"/></svg>', name: "Mini waffle maker",
  line: "A pocket-sized waffle in minutes, with almost no mess to clean up afterwards.",
  link: "https://amzn.to/4yU6K6O",
  about: "A mini waffle maker makes one small waffle at a time. It is compact enough for a small kitchen, a dorm or a shelf, and it heats a small plate instead of a big iron.",
  how: "That means a quick breakfast or snack without much equipment or cleanup, and a fun way to get kids interested in cooking. Some people also use them for other batters or small portions, such as hash browns.",
  tips: ["Lightly grease or spray the plates if the instructions say to, even on nonstick surfaces.", "Do not overfill it. Batter spreads when you close the lid.", "Let it cool, then wipe the plates with a damp cloth, and avoid metal utensils on a nonstick surface."],
  who: "Students, small households, kids who like to help in the kitchen, and anyone short on counter space.",
  check: ["Check the size, power cord length and where you would store it.", "Read the care notes for the nonstick surface."],
  faq: [["Can I use pancake mix?", "Many people do, but a batter made for waffles often browns better. Follow the product's instructions."], ["Is it hard to clean?", "Small plates are usually wiped clean once cool, but check the care notes for your model."]]
},
{
  slug: "door-draft-stopper", hide: true, gift: "A cosy gift for anyone with a chilly room.", icon: "🚪", img: "images/door-draft-stopper.jpg", alt: "Illustrative photo of a draft stopper along the bottom of a door", art: '<svg viewBox="0 0 120 120" fill="none" stroke-linecap="round" stroke-linejoin="round" role="img" aria-hidden="true"><rect x="30" y="12" width="60" height="88" rx="4" fill="var(--surface)" stroke="var(--accent)" stroke-width="4"/><circle cx="80" cy="58" r="4" fill="var(--accent)"/><rect x="22" y="98" width="76" height="14" rx="7" fill="var(--accent)"/></svg>', name: "Door draft stopper",
  line: "Seals the gap under a door to keep out cold drafts, noise and dust.",
  link: "https://amzn.to/4ywcH96",
  about: "A gap under a door lets in cold air in winter and heat in summer, plus noise and dust. You often feel it as a draft around your feet. A door draft stopper is a strip or seal that fills that gap.",
  how: "Closing the gap helps the room hold its temperature and can make it quieter, without any building work. Most types are a simple add-on rather than a permanent change to the door.",
  tips: ["Measure the gap and the width of the door before ordering.", "If it uses adhesive, clean the door surface first so it sticks properly.", "Make sure it does not stop the door opening fully or catch on a rug."],
  who: "Rooms with a noticeable gap under the door, such as a bedroom, front door or home office.",
  check: ["Check the width range and whether it can be trimmed or adjusted.", "Check how it attaches to the door."],
  faq: [["Will it fit my door?", "Most are sold in set widths, and some can be adjusted, so compare the listing with your measurements."], ["Will it mark my floor?", "Usually the seal sits against the door, not the floor, but a rough edge could mark soft flooring, so check how it is designed."]]
},
{
  slug: "outdoor-motion-sensor-light-bulb", hide: true, gift: "A handy gift for a porch, garage or side door.", icon: "💡", img: "images/outdoor-motion-sensor-light-bulb.jpg", alt: "Illustrative photo of a lit outdoor wall light beside a front door at dusk", art: '<svg viewBox="0 0 120 120" fill="none" stroke-linecap="round" stroke-linejoin="round" role="img" aria-hidden="true"><path d="M60 16a28 28 0 0 0-15 51v9h30v-9A28 28 0 0 0 60 16z" fill="var(--surface)" stroke="var(--accent)" stroke-width="4"/><rect x="45" y="80" width="30" height="9" rx="4" fill="var(--accent)"/><rect x="50" y="92" width="20" height="9" rx="4" fill="var(--accent)"/><path d="M16 38l-9-4M104 38l9-4M24 14l6 6M96 14l-6 6M60 3v5" stroke="var(--accent)" stroke-width="4"/></svg>', name: "Outdoor motion-sensor light bulb",
  line: "A bulb that lights up on its own when it senses movement, so the porch or garage is lit when you need it.",
  link: "https://amzn.to/4z3AgXZ",
  about: "A porch, garage or side path that is dark when you arrive home is a small daily annoyance, and sometimes a safety problem. An outdoor motion-sensor bulb lights up when it detects movement, so there is light when you need it without leaving one on all night.",
  how: "It goes into an existing light fitting, so there is no new wiring to do. Because it only comes on when something moves, you do not have to hunt for a switch with your hands full.",
  tips: ["Check that the fitting is covered or sheltered if the bulb is not rated for direct rain.", "Point the sensor towards where people walk, not at a busy street, so it does not trigger constantly.", "Test it after dark once fitted to check the range and sensitivity."],
  who: "Anyone with a porch, side door, garage or path that gets dark.",
  check: ["Check that the base type and size match your fitting.", "Read the listing for the sensor range and weather rating."],
  faq: [["Will it work in any fitting?", "It has to match the socket type and size, so check the base and any fitting limits in the listing."], ["Does it work in daylight?", "Many motion bulbs only light up in the dark, but that depends on the model, so check the listing."]]
},
{
  slug: "alarm-clock-for-heavy-sleepers", hide: true, gift: "For the person who always sleeps through their alarm.", icon: "⏰", img: "images/alarm-clock-for-heavy-sleepers.jpg", alt: "Illustrative photo of a digital alarm clock on a bedside table", art: '<svg viewBox="0 0 120 120" fill="none" stroke-linecap="round" stroke-linejoin="round" role="img" aria-hidden="true"><circle cx="30" cy="30" r="13" fill="var(--accent)"/><circle cx="90" cy="30" r="13" fill="var(--accent)"/><circle cx="60" cy="66" r="36" fill="var(--surface)" stroke="var(--accent)" stroke-width="4"/><path d="M60 66V44M60 66l15 9" stroke="var(--accent)" stroke-width="5"/><circle cx="60" cy="66" r="4" fill="var(--accent)"/><path d="M40 102l-8 10M80 102l8 10" stroke="var(--accent)" stroke-width="4"/></svg>', name: "Alarm clock for heavy sleepers",
  line: "A bedside digital alarm clock made for people who sleep through everything else.",
  link: "https://amzn.to/4speP12",
  about: "If you sleep deeply, a phone alarm is easy to ignore or switch off while half asleep. An alarm clock made for heavy sleepers aims to be harder to sleep through, with a louder sound or extra wake-up features.",
  how: "Put it across the room and you have to get up to turn it off, which makes oversleeping less likely. Keeping it separate from your phone also means you are not tempted to scroll before you are properly awake.",
  tips: ["Place it across the room so you have to stand up.", "Test the sound the first night, not on the morning you cannot be late.", "Use it as a backup to your phone alarm rather than relying on a single alarm."],
  who: "Deep sleepers, shift workers, students, and anyone who has slept through an alarm before.",
  check: ["Check the listing for volume levels and any extra wake-up features.", "Check whether it plugs in or uses batteries, and how bright the display is at night."],
  faq: [["Is it loud enough for me?", "Volume varies by model and by how deeply you sleep, so read the listing and recent reviews from other heavy sleepers."], ["Can I use it for shift work?", "Many people do, but check how many alarms it supports and how it handles weekday settings."]]
},
{
  slug: "stainless-steel-squeegee", gift: "A stocking stuffer for the shower-glass perfectionist.", icon: "🪟", img: "images/stainless-steel-squeegee.jpg", alt: "Illustrative photo of a stainless steel squeegee hanging on a glass shower door", art: '<svg viewBox="0 0 120 120" fill="none" stroke-linecap="round" stroke-linejoin="round" role="img" aria-hidden="true"><rect x="14" y="14" width="92" height="92" rx="8" fill="var(--surface)" stroke="var(--accent)" stroke-width="4"/><g fill="var(--accent)" opacity=".35"><circle cx="30" cy="30" r="4"/><circle cx="88" cy="26" r="3"/><circle cx="44" cy="46" r="3"/><circle cx="76" cy="44" r="4"/></g><rect x="52" y="30" width="16" height="36" rx="8" fill="var(--accent)"/><rect x="26" y="62" width="68" height="13" rx="6.5" fill="var(--accent)"/></svg>', name: "Stainless steel squeegee",
  line: "Wipes shower glass, tiles and mirrors dry in seconds, so water spots don’t build up.",
  link: "https://amzn.to/3TOibxN",
  about: "Glass shower doors, tiles and mirrors show every water spot. Water left to dry in the air turns into limescale and soap scum, which takes more scrubbing later. A squeegee pulls the water off in one pass.",
  how: "Ten to twenty seconds after a shower stops the spots forming, so the glass stays clearer and you clean less often. A model with a hook can hang in the shower so it is always to hand.",
  tips: ["Start at the top and pull downwards in overlapping strokes.", "Wipe the blade on a towel between strokes for a streak-free finish.", "Hang it somewhere dry so the blade stays in good condition."],
  who: "Anyone with glass shower doors, tiled walls or mirrors, especially in hard-water areas.",
  check: ["Check the blade width and material in the listing.", "Check how it hangs, and whether that works with your shower."],
  faq: [["Is it only for shower glass?", "It also works on mirrors, tiles and other smooth surfaces, as long as the surface is not delicate."], ["Does it replace cleaning?", "No. It slows build-up, but you will still need to clean the shower now and then."]]
},
{
  slug: "magnetic-chore-chart", hide: true, gift: "A gift for busy parents.", icon: "✅", img: "images/magnetic-chore-chart.jpg", alt: "Illustrative photo of a magnetic chore chart with coloured magnets on a fridge", art: '<svg viewBox="0 0 120 120" fill="none" stroke-linecap="round" stroke-linejoin="round" role="img" aria-hidden="true"><rect x="20" y="12" width="80" height="96" rx="10" fill="var(--surface)" stroke="var(--accent)" stroke-width="4"/><g stroke="var(--accent)" stroke-width="3"><rect x="32" y="28" width="15" height="15" rx="3"/><rect x="32" y="54" width="15" height="15" rx="3"/><rect x="32" y="80" width="15" height="15" rx="3"/><path d="M56 36h32M56 62h32M56 88h32" stroke-width="4" opacity=".6"/></g><path d="M34 36l4 4 7-9M34 62l4 4 7-9" stroke="var(--accent)" stroke-width="4"/></svg>', name: "Magnetic chore chart",
  line: "Keeps the family’s chores in plain sight on the fridge, so the kids can see what’s left to do.",
  link: "https://amzn.to/4dL6P4o",
  about: "Chores are easy to forget and easy to argue about. A magnetic dry-erase chart on the fridge puts the list where everyone passes several times a day, so nothing depends on someone remembering.",
  how: "Because it wipes clean, you can change the tasks each week and tick things off as they are done, so children can see what is left. There is no app or login, so it works for any age.",
  tips: ["Keep the list short and specific, like \"feed the dog\" rather than \"help out\".", "Let children tick or move their own tasks so they feel ownership.", "Reset it on the same day each week so it becomes a habit."],
  who: "Parents and busy households that share chores.",
  check: ["Check magnet strength in the reviews, since some fridges hold magnets less well.", "A marker is included. Check the listing for the board size and whether an eraser comes with it."],
  faq: [["Will it stick to my fridge?", "Most fridges are magnetic, but some stainless steel finishes are not, so test a magnet on yours first."], ["Does it come with a marker?", "Yes, the listing includes a marker. Check the listing for anything else that comes with it."]]
},
{
  slug: "pet-hair-remover-roller", hide: true, gift: "A gift for any dog or cat owner.", icon: "🐕", img: "images/pet-hair-remover-roller.jpg", alt: "Illustrative photo of a pet hair roller on a sofa next to a golden retriever", art: '<svg viewBox="0 0 120 120" fill="none" stroke-linecap="round" stroke-linejoin="round" role="img" aria-hidden="true"><rect x="16" y="22" width="68" height="32" rx="11" fill="var(--accent)"/><path d="M34 22v32M50 22v32M66 22v32" stroke="var(--surface)" stroke-width="3" opacity=".7"/><path d="M84 38h12a8 8 0 0 1 8 8v26" stroke="var(--accent)" stroke-width="6"/><rect x="98" y="70" width="12" height="30" rx="6" fill="var(--accent)"/><g fill="var(--accent)" opacity=".5"><circle cx="44" cy="96" r="9"/><circle cx="29" cy="86" r="4"/><circle cx="40" cy="79" r="4"/><circle cx="52" cy="79" r="4"/><circle cx="62" cy="86" r="4"/></g></svg>', name: "Pet hair remover roller",
  line: "Lifts pet hair and lint off sofas, bedding and clothes in just a few passes.",
  link: "https://amzn.to/3U8opZe",
  about: "Pet hair clings to sofas, bedding, car seats and clothes, and brushing often just moves it around. A pet hair remover roller is designed to lift hair and lint from fabric surfaces.",
  how: "Rolling it over a surface takes the hair off in a few passes, so you can tidy up quickly before guests arrive or before you leave the house.",
  tips: ["Work in one direction rather than back and forth.", "Empty or clean the roller as it fills so it keeps picking up.", "Test it on a small patch of delicate or loosely woven fabric first."],
  who: "Dog and cat owners, and anyone who shares a sofa with a shedding pet.",
  check: ["Check the listing to see whether it is reusable or needs refills.", "Check the size and whether it suits furniture, clothes or both."],
  faq: [["Does it work on all fabrics?", "It tends to work best on smooth, tightly woven fabric, so test it on delicate or loose weaves first."], ["How do I clean it?", "That depends on the design. Some types are emptied and others use sticky sheets, so check the listing."]]
}
];
