// Fictional concept stores. None of these are real businesses or past clients.
export const stores = [
  {
    slug: "marlow-bead-co",
    name: "Marlow Bead Co.",
    motif: "beads",
    tagline: "Hand-strung jewelry and loose beads from a small-town studio",
    announcement: "Free shipping on orders over $60 · Ships in 2 business days",
    freeShip: 60,
    font: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
    theme: { bg: "#fbf6ef", ink: "#2b2118", muted: "#74655a", accent: "#b4532a", accentInk: "#ffffff", card: "#ffffff", line: "#e6dccf", soft: "#f3e9dc" },
    hero: { eyebrow: "New this week", title: "Jewelry strung by hand, one bead at a time", text: "Trade beads, stone and brass, made into pieces you will not find twice. Every order is packed in the studio and shipped within two business days." },
    story: { title: "A bead shop you can walk into", text: "Marlow started as a single display case in the back of a craft store. Today it is a working studio with a bench by the window, classes on Saturdays and a wall of loose strands. The online shop carries the same pieces that sit in the case out front." },
    demonstrates: ["One clear H1 per page with category tiles as H2s", "Shipping and returns answered on the product page", "Share image and product schema on every product", "Three-photo gallery instead of a single shot"],
    optionName: "Length",
    options: ["16 in", "18 in", "20 in"],
    products: [
      { handle: "trade-bead-necklace", title: "Trade Bead Necklace", price: 28, colors: ["#b4532a", "#1f6f78", "#f2c14e"], blurb: "Recycled glass trade beads on waxed cord.", desc: "Bright recycled-glass trade beads, strung on waxed cotton cord with a brass hook clasp. Colours vary a little from strand to strand, which is the point.", specs: ["Recycled glass, brass clasp", "Bead size 8–12 mm", "Made to the length you pick"] },
      { handle: "brass-dragonfly-earrings", title: "Brass Dragonfly Earrings", price: 22, colors: ["#c79a3b", "#7a5c1e", "#e9d8a6"], blurb: "Stamped brass on hypoallergenic hooks.", desc: "Lightweight stamped brass dragonflies on nickel-free ear wires. They weigh less than a paperclip each.", specs: ["Raw brass, nickel-free hooks", "Drop length 45 mm", "Polishing cloth included"] },
      { handle: "flower-agate-set", title: "Flower Agate Set", price: 46, colors: ["#d8a7b1", "#8e6c8a", "#f6e7e4"], blurb: "Matching bracelet and earrings in flower agate.", desc: "A stretch bracelet and matching drop earrings in soft pink flower agate. Sold as a set and boxed ready to give.", specs: ["Natural flower agate", "Bracelet fits 6.5–7.5 in wrists", "Gift boxed"] },
      { handle: "prehnite-wrap-necklace", title: "Prehnite Wrap Necklace", price: 38, colors: ["#8fb996", "#4a7c59", "#e8f1e4"], blurb: "Wire-wrapped prehnite on a fine chain.", desc: "A single pale green prehnite stone, wire-wrapped by hand and hung on a fine plated chain.", specs: ["Prehnite, plated brass chain", "Stone about 20 mm", "Each wrap is unique"] },
      { handle: "czech-glass-strand", title: "Czech Glass Strand", price: 9, colors: ["#3d5a80", "#98c1d9", "#ee6c4d"], blurb: "Loose 6 mm fire-polished beads, 50 per strand.", desc: "Fire-polished Czech glass beads for your own projects. Fifty beads to a strand, temporarily strung.", specs: ["6 mm faceted rounds", "50 beads per strand", "Hole size 1 mm"] },
      { handle: "leather-wrap-bracelet", title: "Leather Wrap Bracelet", price: 34, colors: ["#6b4226", "#d9a441", "#2b2118"], blurb: "Triple wrap with brass and stone beads.", desc: "Three wraps of soft leather cord edged with brass and stone beads, closed with a button and two loops for fit.", specs: ["Vegetable-tanned leather", "Wraps three times", "Two closure loops"] }
    ],
    reviews: [
      { name: "Dana R.", stars: 5, text: "Colours are even better in person and it arrived in three days." },
      { name: "Priya S.", stars: 5, text: "Bought the 18 inch and it sits exactly where I wanted it." },
      { name: "Mel T.", stars: 4, text: "Lovely piece. The clasp took a minute to get used to." }
    ]
  },
  {
    slug: "fernhollow-yarn",
    name: "Fernhollow Yarn",
    motif: "yarn",
    tagline: "Indie-dyed yarn from a small flock farm",
    announcement: "Free shipping over $120 · Dyed to order skeins ship in 5–7 days",
    freeShip: 120,
    font: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    theme: { bg: "#f4f6f1", ink: "#1f2a24", muted: "#5f6f66", accent: "#2f6b4f", accentInk: "#ffffff", card: "#ffffff", line: "#dbe3da", soft: "#e7eee6" },
    hero: { eyebrow: "Autumn dye lot", title: "Farm-raised wool, dyed in small pots", text: "Merino, alpaca and tweed bases dyed a few skeins at a time. Pick a weight, pick a colourway, and we will tell you exactly when it ships." },
    story: { title: "From the pasture to the dye pot", text: "The flock is forty sheep and six alpacas. Fleece goes to a regional mill, comes back as yarn, and gets dyed in the farmhouse kitchen. Each colourway page lists the base, yardage and care so you can plan a project without emailing to ask." },
    demonstrates: ["Yardage, weight and care in a consistent spec table", "Clear in-stock vs dyed-to-order shipping times", "Product photos with descriptive alt text", "Free-shipping progress in the cart"],
    optionName: "Weight",
    options: ["Fingering", "DK", "Worsted"],
    products: [
      { handle: "dream-dk-merino", title: "Dream DK Merino", price: 27, colors: ["#6a5acd", "#b8a9e8", "#ece8fa"], blurb: "Soft merino–nylon blend in dusk purples.", desc: "A superwash merino and nylon blend with a tight twist, dyed in layered purples. Good for socks, shawls and anything worn next to skin.", specs: ["80% merino, 20% nylon", "231 yd / 100 g", "Machine wash cool, dry flat"] },
      { handle: "crimson-tweed", title: "Crimson Tweed", price: 29, colors: ["#9b2226", "#e9c46a", "#f7e9e9"], blurb: "Deep red with flecks of gold and cream.", desc: "A rustic tweed base in deep crimson, with neps of gold and cream that show up as you knit.", specs: ["85% wool, 15% tweed nep", "218 yd / 100 g", "Hand wash, dry flat"] },
      { handle: "farm-alpaca-natural", title: "Farm Alpaca Natural", price: 32, colors: ["#b08968", "#e6ccb2", "#f5ebe0"], blurb: "Undyed alpaca from our own herd.", desc: "Undyed, minimally processed alpaca in the natural fawn of the animals it came from. Drapey and very warm.", specs: ["100% alpaca", "190 yd / 100 g", "Hand wash only"] },
      { handle: "moss-worsted", title: "Moss Worsted", price: 26, colors: ["#606c38", "#a3b18a", "#eef1e4"], blurb: "Workhorse worsted in layered greens.", desc: "A sturdy three-ply worsted in mossy greens. It holds cables well and softens with washing.", specs: ["100% wool", "200 yd / 100 g", "Hand wash, dry flat"] },
      { handle: "tidepool-sock", title: "Tidepool Sock", price: 28, colors: ["#0a9396", "#94d2bd", "#e9f5f3"], blurb: "Speckled teal on a sock base.", desc: "Teal and seafoam speckles on a hard-wearing sock base. One skein makes a pair of adult socks.", specs: ["75% merino, 25% nylon", "437 yd / 100 g", "Machine wash cool"] },
      { handle: "mini-skein-set", title: "Mini Skein Set", price: 36, colors: ["#e76f51", "#2a9d8f", "#f4a261"], blurb: "Five 20 g minis in a coordinated fade.", desc: "Five 20 g mini skeins dyed as a fade, for colourwork, stripes or a scrappy shawl.", specs: ["80% merino, 20% nylon", "5 × 87 yd", "Machine wash cool"] }
    ],
    reviews: [
      { name: "Katherine B.", stars: 5, text: "The yardage and care details were right there, so I ordered without a single question." },
      { name: "Jo M.", stars: 5, text: "Dyed-to-order arrived a day earlier than the page said." },
      { name: "Anika P.", stars: 4, text: "Colour is slightly deeper than my screen showed. Beautiful yarn." }
    ]
  },
  {
    slug: "patchwork-and-pine",
    name: "Patchwork & Pine",
    motif: "quilt",
    tagline: "Quilting fabric, precuts and longarm services",
    announcement: "Flat $5 shipping · Free over $75 · Orders before 2 pm ship today",
    freeShip: 75,
    font: "'Trebuchet MS', 'Segoe UI', Verdana, sans-serif",
    theme: { bg: "#fdf8f3", ink: "#22304a", muted: "#63708a", accent: "#c8553d", accentInk: "#ffffff", card: "#ffffff", line: "#e8dfd6", soft: "#f4ebe1" },
    hero: { eyebrow: "Just arrived", title: "Fresh bolts, precuts and kits for your next quilt", text: "New collections every week from the designers you follow. Yardage is cut to order and precuts are listed with exactly what is in the pack." },
    story: { title: "An online-only shop run by quilters", text: "No storefront, no minimums and no mystery about what you are getting. Each listing says what the cut is, how many pieces are in a pack and which collection it belongs to. Longarm quilting is edge-to-edge with a two-week turnaround." },
    demonstrates: ["Large, sharp product images that hold up to zoom", "New-arrival grid that stays fast with a big catalogue", "Pack contents and cut size in every listing", "Homepage headings in a proper outline"],
    optionName: "Cut",
    options: ["Fat quarter", "Half yard", "One yard"],
    products: [
      { handle: "ladybug-meadow-layer-pack", title: "Ladybug Meadow Layer Pack", price: 44, colors: ["#c8553d", "#f2cc8f", "#3d405b"], blurb: "42 ten-inch squares from the full collection.", desc: "Forty-two 10 inch squares covering every print in the Ladybug Meadow collection, with at least one of each.", specs: ["42 × 10 in squares", "100% cotton", "Pinked edges"] },
      { handle: "golden-hour-yardage", title: "Golden Hour Yardage", price: 13, colors: ["#e09f3e", "#fff3b0", "#9e2a2b"], blurb: "Warm mustard blender, cut to order.", desc: "A tone-on-tone mustard blender that works as a background or binding. Cut continuously if you order more than one unit.", specs: ["44 in wide", "100% cotton", "Cut to order"] },
      { handle: "pine-ridge-quilt-kit", title: "Pine Ridge Quilt Kit", price: 96, colors: ["#386641", "#a7c957", "#f2e8cf"], blurb: "Throw-size kit with pattern and binding.", desc: "Everything for the top and binding of a 60 × 72 inch throw, including the printed pattern. Backing is sold separately.", specs: ["Finished size 60 × 72 in", "Pattern included", "Confident beginner"] },
      { handle: "made-this-label-panel", title: "Made This Label Panel", price: 9, colors: ["#22304a", "#e07a5f", "#f4f1de"], blurb: "24 sew-in quilt labels on one panel.", desc: "A printed panel of 24 quilt labels in assorted sizes, ready to cut out and stitch to the back of your quilts.", specs: ["Panel 24 × 44 in", "24 labels", "100% cotton"] },
      { handle: "cotton-thread-set", title: "Cotton Thread Set", price: 24, colors: ["#577590", "#f9c74f", "#f94144"], blurb: "Six 50 wt spools in piecing neutrals.", desc: "Six spools of 50 weight cotton thread in the neutrals quilters reach for most, in a storage box.", specs: ["6 × 220 yd spools", "50 wt long-staple cotton", "Low lint"] },
      { handle: "charm-pack-sampler", title: "Charm Pack Sampler", price: 12, colors: ["#81b29a", "#f2cc8f", "#e07a5f"], blurb: "42 five-inch squares, mixed prints.", desc: "Forty-two 5 inch squares in a mix of florals, dots and stripes. A low-cost way to try a new pattern.", specs: ["42 × 5 in squares", "100% cotton", "Mixed collections"] }
    ],
    reviews: [
      { name: "Lorraine H.", stars: 5, text: "I could zoom in and actually see the print scale before buying." },
      { name: "Beth C.", stars: 5, text: "Ordered at noon, shipped the same day, and the cut was generous." },
      { name: "Sam W.", stars: 4, text: "Great kit. I would have liked a backing suggestion on the page." }
    ]
  },
  {
    slug: "hangar-41-models",
    name: "Hangar 41 Models",
    motif: "model",
    tagline: "Diecast aircraft and armour for collectors",
    announcement: "Double-boxed shipping on every model · Pre-orders charged when they ship",
    freeShip: 150,
    font: "'Arial Narrow', 'Roboto Condensed', 'Segoe UI', Arial, sans-serif",
    theme: { bg: "#14181d", ink: "#eef1f4", muted: "#9aa5b1", accent: "#f2a33a", accentInk: "#14181d", card: "#1d232a", line: "#2c343d", soft: "#1a2027" },
    hero: { eyebrow: "New releases", title: "Historically accurate diecast, packed like it matters", text: "Aircraft and armour in 1/72 and 1/48 from the makers collectors trust. Scale, maker and stock status are on every listing, and every model ships double-boxed." },
    story: { title: "Built for collectors who know the difference", text: "Listings lead with what collectors filter by: scale, manufacturer, unit markings and whether it is in stock or on pre-order. Photos load quickly even on a phone, and the catalogue stays easy to browse past a thousand models." },
    demonstrates: ["Scale, maker and stock status shown as structured specs", "Light catalogue pages with no layout shift while they load", "No outdated script libraries; under 10 KB of JavaScript", "Pre-order and shipping terms beside the buy button"],
    optionName: "Scale",
    options: ["1/72", "1/48"],
    products: [
      { handle: "p51d-mustang", title: "P-51D Mustang “Old Crow”", price: 84, colors: ["#aeb7c0", "#f2a33a", "#c1121f"], blurb: "357th Fighter Group, 1944 markings.", desc: "Diecast P-51D in the markings of the 357th Fighter Group, with optional-position landing gear and a display stand.", specs: ["Diecast metal with plastic parts", "Wingspan 15.4 cm in 1/72", "Stand and pilot figure included"] },
      { handle: "spitfire-mk-ix", title: "Spitfire Mk IX", price: 79, colors: ["#5b6b4a", "#7d6b4f", "#e9e3d0"], blurb: "Day fighter scheme with invasion stripes.", desc: "Spitfire Mk IX in grey and green day fighter camouflage with invasion stripes, engraved panel lines and a rotating propeller.", specs: ["Diecast metal", "Wingspan 15.6 cm in 1/72", "Gear up or down"] },
      { handle: "f4u-corsair", title: "F4U-1A Corsair", price: 88, colors: ["#274c77", "#a3cef1", "#e7ecef"], blurb: "Tri-colour Pacific scheme, VF-17.", desc: "The bent-wing Corsair in tri-colour Pacific camouflage with VF-17 markings and a sliding canopy.", specs: ["Diecast metal", "Wingspan 17.3 cm in 1/72", "Sliding canopy"] },
      { handle: "bf109g-6", title: "Bf 109G-6", price: 76, colors: ["#8d99ae", "#edf2f4", "#ffb703"], blurb: "Mottled grey with yellow theatre band.", desc: "Bf 109G-6 in mottled grey camouflage with a yellow theatre band and drop tank.", specs: ["Diecast metal", "Wingspan 13.8 cm in 1/72", "Drop tank included"] },
      { handle: "a6m-zero", title: "A6M2 Zero", price: 74, colors: ["#d9d9d9", "#bc4749", "#6c757d"], blurb: "Carrier-based light grey scheme.", desc: "A6M2 Zero in overall light grey with carrier tail codes, a detailed cockpit and a display stand.", specs: ["Diecast metal", "Wingspan 16.7 cm in 1/72", "Stand included"] },
      { handle: "p47d-thunderbolt", title: "P-47D Thunderbolt", price: 92, colors: ["#c0c5ce", "#1d3557", "#e63946"], blurb: "Natural metal razorback with nose art.", desc: "Natural metal P-47D razorback with a chequered cowl, nose art and under-wing ordnance.", specs: ["Diecast metal", "Wingspan 17.2 cm in 1/72", "Ordnance set included"] }
    ],
    reviews: [
      { name: "Greg L.", stars: 5, text: "Double boxed and not a mark on it. Markings are spot on." },
      { name: "Tom A.", stars: 5, text: "Finally a shop where I can see the scale and maker without opening every listing." },
      { name: "Rick D.", stars: 4, text: "Pre-order shipped the week it was promised." }
    ]
  }
];
