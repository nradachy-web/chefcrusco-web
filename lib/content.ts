/** Real, harvested content. Prices, menus, bios, FAQ, and policies are verbatim
 *  from chefcrusco.com (verified 2026-06-06). Client-facing copy uses no em/en dashes. */

/* ----------------------------- Prix-fixe cuisines ----------------------------- */
export const cuisinePaths = [
  {
    name: "Steak House",
    note: "Live-fire cuts, classic sides, and a clean finish.",
    img: "/photos/food-braised-short-rib.jpg",
    alt: "Braised short rib plated with apple, radish and lemon",
    courses: [
      "Gorgonzola Dates: dates, gorgonzola dolce, smoked almonds, orange blossom honey, citrus",
      "Wedge Salad: cold iceberg, blue cheese dressing, cherry tomatoes, apple smoked bacon, green onions",
      "NY Strips and Chimichurri Butter: pan roasted NY strips, chimichurri compound butter, herb sea salt noisette potatoes, Campari tomato",
      "Apple Tart and Salted Caramel: homemade pate brisee, Granny Smith apples, vanilla bean ice cream, salted caramel, apple crisp",
    ],
  },
  {
    name: "Latin",
    note: "Argentine roots. Arepas, quail, and live fire.",
    img: "/photos/food-matambre.jpg",
    alt: "Matambre Argentino with mustard crema",
    courses: [
      "Arepas con Avocado: handmade corn meal cake, fresh guacamole, cilantro, lime",
      "Shrimp Cocktail Spoons: pan seared Gulf shrimp, tortilla crisp, pineapple, jalapeno, cucumber, cilantro",
      "Quail and Tangerine Chili: Lockhart quail, tangerine and chili glaze, grilled corn, black bean and queso fresco salad",
      "Cuatro Leches: rum infused cake, dulce de leche whipped cream, tres leches cream, toasted coconut and turron crumble",
    ],
  },
  {
    name: "Italian",
    note: "Handmade pastas and regional plates, simple and honest.",
    img: "/photos/food-tortellini.jpg",
    alt: "Fresh tortellini plated",
    courses: [
      "Bruschetta Vierge: crostini, fresh and sun dried tomato, caper, basil, parsley, EVOO",
      "Seasonal Risotto: Italian Arborio rice, Pecorino Romano, seasonal squash, peas, tomato or mushrooms",
      "Sea Bass in Tomato Brodetto: pan roasted filet, yellow tomato broth, charred asparagus, Campari tomato, basil",
      "Zabaglione with Strawberries: warm Marsala custard, orange zest strawberries, amaretto crumble, mint",
    ],
  },
  {
    name: "Spanish Tapas",
    note: "Tapas, paella, and saffron rice.",
    img: "/photos/food-oysters-persillade.jpg",
    alt: "Oysters persillade",
    courses: [
      "Jamon y Melon: Spanish ham, sweet melon, EVOO",
      "Croquettas de Queso: fritters of Spanish sheep's milk cheese, Manchego snow",
      "Paella Valenciana: sofrito and saffron infused Calasparra rice, chorizo, shrimp, mussels, roasted peppers, lemon",
      "Crema Catalana: citrus and cinnamon infused cream, turbinado crust, mixed berries, mint",
    ],
  },
  {
    name: "French Provencal",
    note: "Peppercorns, demi-glace, and the signature lamb.",
    img: "/photos/food-provencal-lamb.jpg",
    alt: "Provencal lamb with demi-glace",
    courses: [
      "Chevre Chaud: baguette crostini, chevre goat cheese, EVOO",
      "Frisee and Apple Salad: frisee, Belgian endive, apple sticks, panko dusted goat cheese, candied walnut, Meyer lemon vinaigrette",
      "Provencal Rack of Lamb: Dijon herb crusted lamb, Madeira reduction, Campari tomato, noisette potatoes and chives",
      "Crepes Suzette: homemade crepes, Grand Marnier and orange sauce, orange supremes",
    ],
  },
];

/* ----------------------------- Catering tiers (high to low for anchoring) -------- */
export const cateringTiers = [
  { name: "Customer Specific", price: "from 215", unit: "per person", min: "1,600 minimum", courses: "5 to 9 courses", seated: "Plated and seated", note: "Fully bespoke menus, menu dependent. Staff required for 4 or more guests at 25 per hour." },
  { name: "Prix-Fixe", price: "155 to 165", unit: "per person", min: "1,000 minimum", courses: "4 courses", seated: "Plated and seated", note: "Plated, multi-course, fully served, menu dependent. One staff for 4 or more guests at 25 per hour." },
  { name: "Tapas and Grazing", price: "80 to 140", unit: "per person", min: "1,000 minimum", courses: "4 to 7 courses", seated: "Passed, not seated", note: "Passed and stationed small plates, menu dependent. One staff for 4 or more guests at 25 per hour." },
  { name: "Drop-Off", price: "50 to 75", unit: "per person", min: "800 minimum", courses: "Multiple servings", seated: "Food drop off only", note: "Beautiful platters delivered ready to serve, menu dependent. Includes plates, utensils, napkins. Delivery fee is $30 within a 30-mile radius of Austin." },
];
export const cateringFootnote =
  "Staff fee is separate at 25 per hour and covers bartending (TABC certified), set up, food and wine service, and kitchen and plate clean up. A 20 percent gratuity applies to parties of 4 or more.";

/* ----------------------------- Corporate ---------------------------------------- */
export const corporateParty = [
  { name: "Customer Specific", price: "from 215", unit: "per person", min: "1,600 minimum", courses: "5 to 9 courses", seated: "Plated and seated", note: "Fully bespoke menus, menu dependent. Staff required for 4 or more guests at 25 per hour." },
  { name: "Prix-Fixe and Cooking Classes", price: "155 to 165", unit: "per person", min: "1,000 minimum", courses: "4 courses", seated: "Plated and seated", note: "Menu dependent. One staff for 4 or more guests at 25 per hour." },
  { name: "Tapas and Appetizers", price: "80 to 140", unit: "per person", min: "1,000 minimum", courses: "4 to 7 courses", seated: "Not plated, not seated", note: "Menu dependent. One staff for 4 or more guests at 25 per hour." },
  { name: "Drop-Off", price: "50 to 75", unit: "per person", min: "800 minimum", courses: "Multiple servings", seated: "Food drop off only", note: "Menu dependent. Includes plates, utensils, napkins. Delivery fee is $30 within a 30-mile radius of Austin." },
];
export const corporateStaffScope =
  "Staff fee is separate at 25 per hour and covers bartending (TABC certified), set up, food and wine service, and kitchen and plate clean up.";

export const corporateLunch = {
  headline: "Recurring office lunch on a simple subscription.",
  plans: [
    { name: "Monthly Subscription", note: "Month to month, cancel or change anytime." },
    { name: "6 Month Subscription", note: "10 percent off." },
    { name: "12 Month Subscription", note: "20 percent off." },
  ],
  terms: "Pricing depends on lunches per week and lunches per delivery. Includes plates, utensils, napkins. Delivery 25 within 30 miles of Austin. Minimum 15 to 20 employees and 2 lunches per week.",
  features: [
    "Diverse cuisines",
    "Sustainable and balanced serving portions",
    "Gluten free options",
    "Vegetarian options",
    "Salads, mains, and sides",
    "Homemade every day",
    "Healthy and clean eating options",
  ],
};

export const df8Tiers = [
  { tier: "Bronze", dinners: "2 dinners", per: "1,800 per dinner", total: "3,600" },
  { tier: "Silver", dinners: "4 dinners", per: "1,750 per dinner", total: "7,000" },
  { tier: "Gold", dinners: "6 dinners", per: "1,700 per dinner", total: "10,200" },
  { tier: "Platinum", dinners: "8 dinners", per: "1,650 per dinner", total: "13,200" },
];

/* ----------------------------- Cooking classes ---------------------------------- */
export const cookingClasses = [
  "Italian: methods and homemade food", "Grilling 101", "Savory and Sweet Tarts",
  "Argentina and Mexico: focus on sauces", "Seafood: themes and techniques", "Seafood: shellfish",
  "Seafood: fish", "French Classics: salads and soups", "Spanish Tapas", "Cooking 101: basics",
  "Sauces 101", "Gnocchi 101", "Seasonal Cooking", "Team Competition",
];

/* ----------------------------- Menus -------------------------------------------- */
/* Tapas + drop-off ingredients verbatim from Carlos's PDFs (Tapas Service Menu,
 * Drop Off Platter Menu), received by email 2026-07-14. */
export const tapasSavory = [
  { name: "Italian Caprese", desc: "cherry tomatoes, bocconcini mozzarella, basil, basil and lemon oil" },
  { name: "Patatas Bravas", desc: "twice cooked russet potatoes, pimenton dipping sauce, garlic chips" },
  { name: "Blue Cheese Endive Cups", desc: "Belgian endive, Point Reyes blue cheese, pears, candied walnuts, lemon EVOO" },
  { name: "Warm Soup Shooters", desc: "roasted root vegetables, chives, toasted pumpernickel croutons" },
  { name: "Gazpacho Shooters", desc: "Campari tomato, pepper, and cucumber cold soup shooters" },
  { name: "Ensaladilla Rusa", desc: "Spanish potato, carrot, and pea salad with homemade mayo, everything cracker" },
  { name: "Jamon Croquettas", desc: "Spanish ham fritters, ham cracklings" },
  { name: "Mozzarella or Manchego Croquettas", desc: "classical cheese fritters, spicy tomato ragu, Pecorino" },
  { name: "Argentine Empanadas", desc: "flaky baked pastries of beef, green olives, green onions, raisins, hard boiled eggs, chimichurri" },
  { name: "Jamon y Queso Empanadas", desc: "flaky baked pastries of ham, provolone cheese, bechamel" },
  { name: "Summer Vegetable Bruschetta", desc: "toast points, grilled asparagus, tomato, feta, lemon EVOO" },
  { name: "Winter Style Bruschetta", desc: "toast points, sauteed Swiss chard, grilled Italian sausage, Pecorino" },
  { name: "Chile Braised Pork Arepas", desc: "chile de arbol and Negro Modelo braised pork, fried corn patties, pickled red onions, crema Mexicana, Cotija cheese, cilantro" },
  { name: "Guacamole Arepas", desc: "fried corn patties, chile and lime guacamole, pickled red onions, crema Mexicana, cilantro" },
  { name: "Tortilla con Chorizo", desc: "squares of potato, caramelized onion, and egg, grilled chorizo, charred tomato" },
  { name: "Alsatian Leek and Bacon Tarts", desc: "phyllo tarts, creamed leeks, bacon lardons" },
  { name: "Gambas al Ajillo", desc: "Spanish style seared shrimp, garlic, lemon, white wine, parsley, pimenton" },
  { name: "Pinchos de Pescado", desc: "skewers of fresh fish, Spanish chorizo, cherry tomato, almond and herb picada" },
  { name: "Ceviche de Pina y Chiles", desc: "fresh fish, pineapple, serrano chile, cucumber, lime, corn crisps" },
  { name: "Crab Cakes and Remoulade", desc: "sofrito and fresh crab, spicy Creole mustard sauce" },
  { name: "Salmon Buckwheat Blinis", desc: "mini buckwheat pancakes, smoked salmon, lemon creme fraiche, dill" },
  { name: "Paella con Vieiras", desc: "sofrito and saffron rice, seared scallop, jamon chips" },
  { name: "Greek Style Lamb", desc: "spiced lamb meatballs, tzatziki sauce, crispy red onions, feta, mint" },
  { name: "Argentine Lamb Lollipops", desc: "grilled rack of lamb chops, chimichurri" },
];
export const tapasSweet = [
  { name: "Berry and Citrus Tarts", desc: "mini tarts, citrus lemon curd, mixed berries, apricot and Grand Marnier glaze" },
  { name: "Palmiers de Nutella", desc: "baked puff pastry rounds, chocolate and hazelnut butter" },
  { name: "Cuatro Leches Bites", desc: "rum infused cake bites, dulce de leche crema, toasted coconut and turron crumble" },
  { name: "Raspberry Semifreddo", desc: "semi soft Italian ice cream, raspberry coulis sauce, amaretti crumble, mint" },
  { name: "Italian Poached Pears", desc: "Sangiovese and vanilla poached pears, mascarpone crema, citrus, mint" },
  { name: "Pionono de Dulce de Leche", desc: "Argentine cake bites, dulce de leche, torched meringue" },
  { name: "Frozen Citrus and Berry Sorbet", desc: "blood orange and strawberries, citrus segments, mint" },
  { name: "Raspberry and Chocolate Truffle Spoons", desc: "Essenza per Colomba chocolate truffle, raspberries, mascarpone sauce, mint" },
  { name: "Crema Catalana", desc: "Spanish creme brulee, citrus and cinnamon infused custard, turbinado sugar crust, berries, mint" },
];
export const dropOffPlatters = [
  { name: "Crudite", desc: "blanched asparagus, celery, carrots, cherry tomatoes, and cucumbers, with 8 oz of green goddess dressing (herbs, anchovies, Dijon mustard, and lemons)", serves: "Serves 10 to 15" },
  { name: "Artisan Cheese", desc: "Pecorino Romano, herbed goat cheese, Gorgonzola dolce, feta, smoked almonds, dried fruits, membrillo paste", serves: "Serves 10 to 15" },
  { name: "Charcuterie", desc: "chorizo Espanola, Genoa salami, country pate, mortadella, mixed olives, cornichons, Dijon mustard, toast points", serves: "Serves 10 to 12" },
  { name: "Seasonal Fruit", desc: "seasonal selection of melons, pineapples, mixed grapes, kiwis, strawberries, and blackberries", serves: "Serves 10 to 15" },
  { name: "Argentine Empanadas", desc: "homemade baked 3 oz pastries, one choice per platter: beef with onions, olives, raisins, egg, and chimichurri; red peppers, onion, tomato, herbs, and mozzarella; or creamy corn, red pepper flakes, and green onions", serves: "Serves 10 to 12" },
  { name: "Gulf Coast Shrimp", desc: "2 lbs of freshly poached Gulf shrimp, fresh cut lemons, with 8 oz of smoked tomato cocktail sauce", serves: "Serves 10 to 15" },
  { name: "Shellfish Cakes", desc: "fresh shellfish of the day, caramelized vegetables, herbs, and crispy panko breading, with 8 oz of spicy remoulade sauce", serves: "Serves 10 to 12" },
  { name: "Texas Beef", desc: "grilled and oven roasted top sirloin or tri tip roast, silver dollar rolls, with 8 oz of ground mustard and lemon horseradish sauce", serves: "Serves 10 to 12" },
  { name: "Cuatro Leches Bites", desc: "bite size tres leches cake, dulce de leche whipped cream, toasted coconut, fresh strawberries", serves: "Serves 10 to 12" },
  { name: "Chocolate Lovers", desc: "chocolate dipped strawberries, triple chocolate Ghirardelli brownies, chocolate ganache dipped madeleine cookies", serves: "Serves 10 to 12" },
];

/* ----------------------------- 555 Program -------------------------------------- */
export const fiveFiveFive = {
  hook: ["Tired of thinking about what to cook?", "Exhausted from your weekly grocery shopping?", "Overwhelmed with daily cooking and cleaning?"],
  promise: "No meal planning. No grocery stores. No cooking or cleaning. Incredible meals.",
  structure: "5 proteins, 5 side dishes, 5 pound minimum order.",
  proteins: [
    { name: "Beef Steak", desc: "Pan seared, EVOO, salt and pepper", price: "35 per pound" },
    { name: "Grilled Chicken Breasts", desc: "Simply grilled", price: "25 per pound" },
    { name: "Pan Roasted Salmon", desc: "Fresh, pan roasted", price: "25 per pound" },
    { name: "Pork Medallion", desc: "Tender pork medallion", price: "25 per pound" },
    { name: "Braised and Seared Pulled Pork", desc: "Paprika, cumin, oregano, salt and pepper", price: "25 per pound" },
  ],
  sides: [
    { name: "White Rice", desc: "Steamed white jasmine", price: "25 per pound" },
    { name: "Seasonal Vegetables", desc: "Grilled zucchini, summer squash, portobello, carrots, onions and peppers", price: "25 per pound" },
    { name: "Root Vegetables", desc: "Oven roasted carrots, parsnips, potato, turnips and sweet potato", price: "25 per pound" },
    { name: "Mashed Potatoes", desc: "Red skinned potatoes, cream, butter, salt and pepper", price: "25 per pound" },
  ],
  faqs: [
    { q: "What is the minimum order?", a: "Five pounds. You can always order more, and many customers do." },
    { q: "Where do I pick up?", a: "Wingman Kitchens, inside Springdale General, 1023 Springdale Rd, on Tuesdays between 4 and 5pm." },
    { q: "Is the food frozen?", a: "No. Everything is cooked fresh and ready to reheat, never frozen." },
    { q: "Can I mix and match proteins and sides?", a: "Yes, mix and match however you like." },
    { q: "How far does a pound go?", a: "One pound typically feeds 2 to 3 people in one sitting. Five pounds feeds up to 4 people across 2 to 3 sittings." },
  ],
};

/* ----------------------------- Team (full verbatim bios) ------------------------ */
export const team = [
  { name: "Carlos Crusco", headshot: "/photos/team/carlos.jpg", role: "Chef and Owner", bio: "Growing up with Argentine parents of Italian and Spanish heritage, Chef Crusco developed a wealth of knowledge, practice, and opportunities for culinary travels throughout South America and Europe. His training includes The Escoffier Cooking School in Paris and cooking with Maria Affinita in S. Agata, Italy. Cooking demonstrations include Le Cordon Bleu, Central Market, the Texas Beef Council, and the Buffalo Gap Food and Wine Festival with world renowned Chef Francis Mallmann. Over the last decade and a half he has grown his private chef business into a full residential and corporate catering company, specializing in unique culinary experiences at home and the office." },
  { name: "Leah Eshelman", headshot: "/photos/team/leah.jpg", role: "Chef", bio: "A Pennsylvania native, Leah moved to Austin in 2011 to attend a health supportive cooking program at The Natural Epicurean Academy of Culinary Arts. She developed her craft across several Austin establishments practicing pastry and catering, teaching cooking classes, and providing personal chef services. She keeps her cooking fresh and flavorful with citrus, herbs, and seasonal vegetables, and loves seeing clients enjoy a thoughtfully prepared meal." },
  { name: "Derek Burress", headshot: "/photos/team/derek.jpg", role: "Chef", bio: "Born and raised in Austin, Derek spent four years in the Marines before being accepted into the Le Cordon Bleu Culinary Arts Program, where he found his passion for food. He sharpened his craft at some of Austin's best restaurants including Vespaio, the Roaring Fork, and the Fairmont, then moved to private chef work to create a more one on one experience. Being from Texas, smoking meats is one of his favorites." },
  { name: "Jacob Rebolloso", headshot: "/photos/team/jacob.jpg", role: "Server and Bartender", bio: "Originally from San Antonio, Jacob moved to Austin in 2020. With over 20 years of experience, he has a passion for creating memorable dining experiences, with a background in serving, bartending, and catering at prestigious venues such as The Whim, The Arlo, and Austin Country Club." },
  { name: "Josephine Ashford", headshot: "/photos/team/josephine.jpg", role: "Server", bio: "Josephine brings a wealth of experience from healthcare, wellness, and people care to her role. Her commitment to delivering exceptional service with warmth and genuine friendliness aligns perfectly with the team's dedication to unforgettable culinary experiences grounded in culture and approachability." },
  { name: "Madison Pilkington", headshot: "/photos/team/madison.png", role: "Server", bio: "Born in Austin and shaped by the flavors of Hawaii and New Mexico, with travels from Peru to Ireland to Vietnam, Madison brings warmth and a personal touch to every event. With over 20 years in the service industry as a restaurant and events manager, she takes pride in ensuring every detail is thoughtfully executed." },
  { name: "Joanne Tait", headshot: "/photos/team/joanne.jpg", role: "Server", bio: "Originally from the D.C. area, Joanne moved to Austin in 2007 to study and practice Traditional East Asian Medicine. As an herbalist, acupuncturist, and yoga teacher she is passionate about health and serving others, a combination of strengths she brings to every event." },
  { name: "Talitha Newman", headshot: "/photos/team/talitha.jpeg", role: "Server", bio: "Talitha has over 25 years as a residential and commercial realtor in Austin and curates monthly art shows at BFG Gallery. She has managed restaurants and coffee shops and co-owned a beloved local spot for 8 years. The private events let her return to her roots in hospitality." },
  { name: "Sara Duzinski", headshot: "/photos/team/sara.png", role: "Server", bio: "Sara is a public health professional with a special passion for food and wine. With a background in anthropology and studio art, she enjoys the colors, textures, and synthesis of well prepared, slow food, and its power to celebrate culture and community." },
  { name: "Michael Connolly", headshot: "/photos/team/michael.jpg", role: "Server", bio: "Michael is an experienced server and event manager with 20 years in hospitality, specializing in large events and intimate private dinners. Originally from Texas, he spent two decades in Los Angeles and brings a refined sense of hospitality to each event." },
  { name: "Alexa Heras", headshot: "/photos/team/alexa.jpg", role: "Server", bio: "Alexa grew up in a traditional Mexican family that started their own taco restaurant in El Paso. A bilingual nutritionist with a degree in Human Nutrition and Dietetics, she brings a love of food, culture, and making every experience positive, educational, and fun." },
];

export const eliteClients = ["NBA player JJ Redick", "Golf Masters Champion Patrick Reed", "Classical violinist Anne Akiko Meyers"];

/* ----------------------------- Press -------------------------------------------- */
export const pressItems = [
  { outlet: "Fox 7 Austin", title: "Live cooking segment: alfajores and dulce de leche", url: "https://www.fox7austin.com/video/1432550" },
  { outlet: "Fox 7 Austin", title: "Live cooking segment: empanadas with chimichurri", url: "https://www.fox7austin.com/video/1432483" },
  { outlet: "Founding Austin", title: "Pairing Wines With Food", url: "https://foundingaustin.com/2023/10/pairing-wines-with-food/" },
  { outlet: "Austin Fit Magazine", title: "How to Cook Like a Professional Chef", url: "https://www.austinfitmagazine.com/November-2022/how-to-cook-like-a-professional-chef/" },
  { outlet: "J. Lohr", title: "World of Pairings cookbook", url: "https://assets.jlohr.com/general_files/WorldOfPairingsCookbook_Final-011122.pdf" },
  { outlet: "Austin Culture Map", title: "Personal chef Carlos Crusco brings dining out in", url: "https://austin.culturemap.com/news/restaurants-bars/08-19-12-20-25-chef-carlos-crusco-brings-dining-out-in/" },
  { outlet: "Austin Food Magazine", title: "Dinner De Los Muertos Food and Wine Event", url: "https://austinfoodmagazine.com/dinner-de-los-muertos-food-wine-event/" },
  { outlet: "Austin Food Magazine", title: "Chef Carlos Crusco and his popular empanada recipe", url: "https://austinfoodmagazine.com/chef-carlos-cruzco-his-popular-empanada-recipe/" },
  { outlet: "Voyage Austin", title: "Exploring Life and Business with Carlos Crusco", url: "http://voyageaustin.com/interview/exploring-life-business-with-carlos-crusco-of-chef-crusco-catering/" },
  { outlet: "Austin Food Blogger Alliance", title: "Argentinian tapas paired with fine Texas wine", url: "https://austinfoodbloggers.org/events/past-events/" },
  { outlet: "Houston Press", title: "The 12th Annual Sugar Land Wine and Food Affair", url: "https://www.houstonpress.com/restaurants/coming-soon-the-12th-annual-sugar-land-wine-and-food-affair-6437955" },
  { outlet: "My So-Called Fabulous Podcast", title: "Guest appearance", url: "https://share.transistor.fm/s/edf819dd" },
];

export const trustedBy = [
  "The Austin Winery", "Partners in Building", "Texas Beef Council", "Mandarin Design Lab",
  "Key Concierge", "Club One Concierge", "Fox 7 Austin", "Founding Austin", "Austin Fit Magazine",
  "Austin Culture Map", "Austin Food Magazine", "Austin Food Blogger Alliance", "Houston Press", "J. Lohr Wines",
];

/* ----------------------------- FAQ (verbatim answers) --------------------------- */
export const faqs = [
  { q: "Why hire Chef Crusco Catering?", a: "Read our reviews and you will get a great idea why customers hire us. What sets us apart is our strive for excellence, creating unforgettable food experiences, treating customers with respect, and ultimately making them feel like a guest at their own dinner party." },
  { q: "What kinds of events do you cater?", a: "We cater all types of events: dinner parties, intimate weddings and rehearsal dinners, all corporate events, tapas parties, cooking classes, and really almost any type of social gathering." },
  { q: "What size of events can you cater?", a: "We do smaller dinners from 6 to 30 people as well as larger parties of up to 200 people." },
  { q: "Which chef will come to do our dinner?", a: "We have three (Chef Carlos, Leah, and Derek) who will make your event fun and entertaining. The chef on site is based on availability, expertise, and scheduling. Rest assured that whoever does the dinner, it will be an amazing and unforgettable experience." },
  { q: "What are your services and prices?", a: "We offer four service levels: Drop Off, Tapas, Prix-Fixe, and Customer Specific. Each explains what it includes and the price ranges, which vary and depend on guest count, types of food, and the number of courses." },
  { q: "How do I book Chef Crusco Catering?", a: "Tell us about your event and choose your service level. Once we receive your request we ask for a 25 percent deposit to finalize your reservation. The deposit is then applied to the final balance." },
  { q: "When is the final balance due?", a: "The final payment and balance is due on the day of the event. We kindly ask that you make payment before staff arrives so they can execute the dinner." },
  { q: "Can you provide alcohol for my event?", a: "Not directly right now, but you can purchase incredible local wines at The Austin Winery through us at a nice discount. We also work with a local full service beverage company, and our TABC certified servers and bartenders can pour any alcohol of your choice." },
  { q: "What is your guest count guarantee?", a: "Your guest count guarantee is due 2 weeks prior to the event. We will do our best to accommodate increases if possible. All clients are charged for the guest count provided 2 weeks out regardless of the actual number in attendance." },
  { q: "Do you use our plates, stemware, and glassware?", a: "Yes. Most of the time we use your plates, glasses, utensils, and linens. For larger events we also offer rentals." },
  { q: "Can you handle event rentals?", a: "Definitely. As a full service catering company we can provide rentals including plate ware, stemware, glassware, linens, chairs, and tables. Rentals are handled as a separate fee." },
  { q: "When does staff arrive?", a: "For small dinners under 15, staff arrives 1.5 to 2 hours prior. For larger events, 2.5 to 3 hours prior. For events above 75 to 100 people, count on 4 to 5 hours in advance. We take pride in making sure everything is smooth." },
  { q: "How long do dinner events last?", a: "Depending on guest count and the number of courses, dinners usually run 2 to 3 hours. You can plan on staff being on site anywhere from 5 to 8 hours in total." },
  { q: "How many staff do you require?", a: "We aim for a 1 to 9 server to guest ratio. Dinners with fewer than 10 guests require one server, and dinners with 10 to 19 guests require two servers." },
  { q: "What are your terms and conditions?", a: "A 25 percent non-refundable deposit reserves your date and is credited to your final balance. The balance is due in full on the day of the event. QuickBooks ACH transfer is free, credit card adds a 3.5 percent fee. Sales tax applies unless you are a 501(c)(3). Guest count guarantee is due 2 weeks prior. A 20 percent gratuity applies to parties of 4 or more. A 100 dollar cleaning fee applies if appliance, countertop, or refrigeration cleaning is required on arrival." },
];

/* ----------------------------- Terms (good to know) ----------------------------- */
export const terms = [
  "A 25 percent non-refundable deposit reserves your date and is credited to your final balance.",
  "The balance is due in full on the day of the event. QuickBooks ACH transfer is free, credit card adds a 3.5 percent convenience fee.",
  "If you are not a 501(c)(3), applicable sales tax is added to the final bill.",
  "Guest count guarantee is due 2 weeks prior. You are charged for the full guaranteed count regardless of actual attendance.",
  "A 20 percent gratuity is added for parties of 4 or more guests.",
  "A 100 dollar cleaning fee applies if any appliance, countertop, or refrigeration cleaning is required on arrival.",
];

/* ----------------------------- Wine and Beverages ------------------------------- */
export const austinWinery = {
  hero: "Wine is an accompaniment to good company and great food.",
  body: "Founded in May of 2014 by Ross, Cooper, and Matt, The Austin Winery is a pioneering team and the first to establish a full production, grape to glass urban winery in Austin. Chef Crusco Catering is proud to be an Ambassador for The Austin Winery and offers their world class wines and a diverse array of varietals for any discerning palate.",
  testimonial: { quote: "We have worked with Carlos and Chef Crusco Catering on countless dinners, classes, and events. In fact, Carlos catered our launch party when we first started. His use of our wine in food preparations elevates and transforms the wine in a magical way. We are trusted allies and ambassadors for one another because we share a common view of food, wine, and companionship.", name: "Ross, CEO and Founder, The Austin Winery" },
  pairing: "Browse the wines to help pair with your dinner menu, then visit The Austin Winery to see their varietals and purchase high quality wines. Remember to enter the code Carlos when checking out.",
  url: "https://www.theaustinwinery.com",
  code: "Carlos",
};

export const miximMenus = [
  { name: "Steakhouse Classics", pairs: "Steak House", drinks: ["Old Fashioned: bourbon, bitters, simple syrup", "Espresso Martini: vodka, coffee liqueur, cold brew", "Paper Plane: bourbon, Amaro Nonino, Aperol, lemon", "Dirty Vodka Martini: vodka, olive brine", "Margarita: tequila, orange liqueur, lime"] },
  { name: "Weekend in France", pairs: "French Provencal", drinks: ["Bordeaux Sour: bourbon, lemon, simple syrup, red wine", "Last Word: gin, maraschino liqueur, green Chartreuse, lime", "French Negroni: gin, Lillet Blanc, Suze", "Butterfly Kiss: gin or vodka, elderflower, Lillet Blanc, lemon", "Ruby: vodka, Aperol, elderflower, grapefruit, lemon"] },
  { name: "Italian Nights", pairs: "Italian", drinks: ["Negroni: gin, Campari, sweet vermouth", "Espresso Martini: vodka, coffee liqueur, cold brew", "Italicus Margarita: tequila, Italicus, lime", "Pomegranate Martini: vodka or gin, pomegranate, lemon", "Amaretto Sour: bourbon, amaretto, lemon, bitters"] },
  { name: "Streets of Spain", pairs: "Spanish Tapas", drinks: ["Carajillo: Licor 43, cold brew", "Spanish G and T: gin, tonic, cucumber, orange, rosemary", "Spanish Sangria: red wine, orange liqueur, orange juice, fruit", "Gin Sour: gin, lemon, simple syrup", "Margarita: tequila, orange liqueur, lime"] },
  { name: "Tour of Latin America", pairs: "Latin", drinks: ["Pisco Sour: pisco, lemon, simple syrup, bitters", "Ancho Paloma: tequila or mezcal, ancho chili liqueur, grapefruit, lime", "Mojito: rum or tequila, mint, simple syrup, soda", "Oaxacan Fire Breather: mezcal, yellow Chartreuse, ancho chili liqueur, orgeat, lime", "Passionfruit Margarita: tequila, orange liqueur, passionfruit, lime"] },
];
export const miximUrl = "https://mixim.bar/events";
