// Spanish translations for the El Potrillo site. English lives in index.html / menu.js / app.js;
// anything missing here simply stays in English. Dish names that are already Spanish are left alone.
window.ES = {
 // exact text (or attribute) match: English -> Spanish
 ui: {
  'Skip to content': 'Saltar al contenido', 'El Potrillo, back to top': 'El Potrillo, volver arriba', 'Main': 'Principal',
  'Menu': 'Menú', 'Visit': 'Visítanos', 'Call': 'Llamar', 'Order online': 'Ordena en línea', 'Call (336) 350-7021': 'Llamar al (336) 350-7021',
  'Open menu': 'Abrir menú', 'Close menu': 'Cerrar menú', 'Quick actions': 'Acciones rápidas',
  'A Mexican kitchen and bar on South Church Street in Burlington. Molcajetes, birria tacos, fajitas and margaritas.': 'Cocina y bar mexicano en South Church Street, en Burlington. Molcajetes, tacos de birria, fajitas y margaritas.',
  'Tuesday to Thursday, Sunday': 'Martes a jueves, domingo', 'Friday and Saturday': 'Viernes y sábado', '11 am to 10 pm': '11 am a 10 pm', '11 am to 1:30 am': '11 am a 1:30 am',
  'See the menu': 'Ver el menú', 'Scroll to walk up': 'Desplázate para acercarte',
  'Dine in and out front': 'Comer adentro o afuera', 'Takeout': 'Para llevar', 'Catering': 'Banquetes', 'Full bar': 'Bar completo', 'Lunch from $9.50': 'Almuerzo desde $9.50',
  'From the kitchen': 'De la cocina', 'The house plates': 'Los platos de la casa', 'Scroll, drag or use the arrows to turn the table.': 'Desplázate, arrastra o usa las flechas para girar la mesa.',
  'House plates': 'Platos de la casa', 'Previous plate': 'Plato anterior', 'Next plate': 'Plato siguiente',
  'Lunch specials · 11 am to 3 pm': 'Especiales de almuerzo · 11 am a 3 pm', 'Lunch from': 'Almuerzo desde',
  'Chimichangas, fajitas, rice plates and combinations at lunch prices, served from 11 am to 3 pm.': 'Chimichangas, fajitas, platos con arroz y combinaciones a precio de almuerzo, de 11 am a 3 pm.',
  'Lunch combination, one item': 'Combinación de almuerzo, un platillo', 'Lunch fajitas': 'Fajitas de almuerzo', 'from $11.99': 'desde $11.99',
  'Full menu, prices as printed': 'Menú completo, precios como están impresos', 'Search the menu': 'Buscar en el menú', 'Search: birria, shrimp, mole…': 'Buscar: birria, camarón, mole…',
  'Hungry now? Order pickup or delivery online, no phone call needed.': '¿Hambre? Ordena para recoger o a domicilio en línea, sin llamar por teléfono.', 'Menu sections': 'Secciones del menú',
  'Consuming raw or undercooked eggs, meats, or other ingredients may increase the risk of foodborne illness, especially for individuals with certain medical conditions. ★ marks a house favorite.': 'Consumir huevos, carnes u otros ingredientes crudos o poco cocidos puede aumentar el riesgo de enfermedades transmitidas por alimentos, en especial para personas con ciertas condiciones médicas. ★ marca un favorito de la casa.',
  'The bar': 'El bar', 'A full bar under the paintings and the star tiles. On Fridays and Saturdays it stays open until 1:30 am.': 'Un bar completo bajo los cuadros y los azulejos de estrella. Los viernes y sábados sigue abierto hasta la 1:30 am.',
  'Mexican Coca-Cola': 'Coca-Cola mexicana', 'In the glass bottle': 'En botella de vidrio', 'On the rocks or frozen': 'En las rocas o frappé',
  'Three margaritas with sugared rims, orange and lime, and a frozen piña drink with whipped cream on the granite bar': 'Tres margaritas con borde de azúcar, naranja y limón, y una bebida helada de piña con crema batida sobre la barra de granito',
  'Find us': 'Encuéntranos', 'Tuesday': 'Martes', 'Wednesday': 'Miércoles', 'Thursday': 'Jueves', 'Friday': 'Viernes', 'Saturday': 'Sábado', 'Sunday': 'Domingo', 'Monday': 'Lunes', 'Closed': 'Cerrado',
  'Get directions': 'Cómo llegar', 'Directions to the restaurant': 'Cómo llegar al restaurante',
  "El Potrillo's storefront on South Church Street: the horse sign over a green awning, with tables out front": 'La fachada de El Potrillo en South Church Street: el letrero del caballo sobre un toldo verde, con mesas al frente',
  'Dine in, tables out front, or takeout.': 'Comer adentro, en las mesas al frente, o para llevar.', 'Order pickup online': 'Ordena para recoger en línea', 'or call ahead. Feeding a group?': 'o llama con anticipación. ¿Para un grupo?', 'Order catering on ezCater': 'Pide banquetes en ezCater',
  'Back to top': 'Volver arriba',
  'How would you like to order?': '¿Cómo te gustaría ordenar?', 'Pickup or delivery': 'Para recoger o a domicilio', 'Call us': 'Llámanos', '(336) 350-7021, pickup ready when you arrive': '(336) 350-7021, tu pedido listo al llegar',
  'Prefer not to call?': '¿Prefieres no llamar?', "Leave your number and we'll call you": 'Deja tu número y te llamamos', 'Orders for groups, via ezCater': 'Pedidos para grupos, por ezCater',
  'Your name': 'Tu nombre', 'Phone number': 'Número de teléfono', 'What would you like? (optional)': '¿Qué te gustaría? (opcional)', 'Request a call back': 'Pedir que te llamemos', 'Close': 'Cerrar'
 },
 msg: {
  sending: 'Enviando…', thanks: '¡Gracias! Te llamaremos en breve.', fail: 'Lo sentimos, no se envió. Por favor llama al (336) 350-7021.',
  dish: 'platillo', dishes: 'platillos', fav: '★ favorito de la casa', market: 'Precio de mercado',
  empty: t => `Nada en el menú coincide con “${t}”. Prueba camarón, steak, birria o vegetariano.`,
  open: u => `Abierto ahora · hasta ${u}`, closedToday: 'Cerrado hoy · abre el martes a las 11 am', opensToday: 'Abre hoy a las 11 am', closedNow: 'Cerrado ahora · abre mañana a las 11 am',
  intro: 'Los molcajetes llegan a la mesa en su piedra. Los tacos de birria vienen con su caldo, las fajitas aún chisporroteando, el cóctel de camarón frío y brillante con limón. Y los viernes y sábados el bar sirve margaritas hasta la 1:30 de la mañana.',
  title: 'El Potrillo Cocina Mexicana · Burlington, NC'
 },
 plates: [
  { name: 'Molcajete El Potrillo', price: '$25.95', desc: 'Bistec a la parrilla, pollo, chorizo, nopales, jalapeños asados y queso fresco, servido en la piedra con arroz, frijoles y tortillas.', alt: 'Molcajete El Potrillo en un tazón de piedra volcánica con bistec, pollo, camarón, nopales, cilantro y queso fresco' },
  { name: 'Tacos de quesabirria y de asada', price: 'desde $14.99', desc: 'Tacos de quesabirria con su caldo, $17.99. Tacos de asada en maíz con cilantro y cebolla, $14.99.', alt: 'Un taco rojo de quesabirria junto a dos tacos de carne asada con cilantro y cebolla, limones y un jalapeño asado' },
  { name: 'Mariscos', price: 'desde $18.99', desc: 'Cóctel de camarón, parrillada con naranjas y pepino, camarones a la diabla y mojarra frita entera.', alt: 'Camarón picado con tomate, cebolla y cilantro en un plato blanco rodeado de naranja, limón y pepino, con aguacate encima' },
  { name: 'Camarones', price: 'desde $19.50', desc: 'Camarones a la parrilla a la diabla, al mojo de ajo, chipotle, rancheros o estilo Cancún, con arroz, frijoles, aguacate y pico de gallo.', alt: 'Camarones a la parrilla con arroz rojo, frijoles refritos con queso, aguacate en rebanadas, pico de gallo y limón en un plato azul' },
  { name: 'Margaritas', price: 'en el bar', desc: 'Bordes con sal, naranja y limón, en las rocas o frappé. Hasta la 1:30 am los viernes y sábados.', alt: 'Tres margaritas y una bebida helada de piña en la barra de granito' },
  { name: 'Tres leches', price: 'de postre', desc: 'Pastel empapado en leche bajo crema batida, una fresa y un hilo de chocolate.', alt: 'Un cuadro de pastel de tres leches con crema batida y una fresa en un plato blanco con chocolate' }
 ],
 // menu: category id -> { name, note, items: [[name|'' (keep), description], ...] } in the same order as menu.js
 menu: {
  aperitivos: { name: 'Botanas y dips', items: [
   ['', 'Aguacate fresco preparado con cilantro, tomate y cebolla. Con totopos.'],
   ['Dip de guacamole', 'Dip casero con aguacate fresco, tomate, cilantro y cebolla. Con totopos calientes.'],
   ['Dip de queso', 'Queso derretido picante con jalapeños. Con totopos calientes.'],
   ['Dip de frijol y queso', 'Dip casero de frijoles y queso con totopos.'],
   ['Dip de espinaca', 'Espinaca y queso con totopos.'],
   ['Dip de chorizo', 'Dip de queso con chorizo mexicano. Con totopos.'],
   ['Dip de elote', 'Elote asado, dip de queso, queso fresco y cilantro, con pico de gallo encima.'],
   ['Dip de camarón', 'Camarón fresco cocido con dip de queso. Con pan tostado.'],
   ['', 'Cuatro tortillas de maíz enrolladas, rellenas de pollo, res o papa, con crema y pico de gallo.'],
   ['Papas con carne asada', 'Papas fritas con bistec, frijol negro, elote, cilantro, jalapeños en escabeche, queso fresco, salsa de cilantro y limón, y crema.'],
   ['Plátanos fritos', 'Ocho plátanos maduros y dulces, fritos, con crema.'],
   ['Alitas', '6 o 12 alitas con BBQ chipotle, búfalo o mango habanero.'],
   ['', 'Chorizo, pollo, camarón y pico de gallo con dip de queso. Con totopos frescos.']
  ]},
  sopas: { name: 'Sopas y ensaladas', items: [
   ['', 'Tazón $10.50 · taza $8.50. Caldo de pollo con cebolla, tomate, cilantro, aguacate y arroz.'],
   ['Sopa de tortilla', 'Tazón $10.50 · taza $8.50. Como el caldo de pollo, con tiras de tortilla en lugar de arroz.'],
   ['Sopa de pollo y camarón', 'Caldo de pollo con camarón, cebolla, tomate, cilantro, aguacate y arroz.'],
   ['', 'Res cocida a fuego lento con elote, papa y zanahoria. Con cebolla, jalapeños frescos y arroz blanco.'],
   ['Ensalada de camarón', 'Camarón salteado, lechuga, tomate, queso y pico de gallo.'],
   ['Ensalada taco', 'Res o pollo con lechuga, crema, guacamole, tomate y queso en una concha de tortilla fresca.'],
   ['Ensalada taco de fajita', 'Bistec o pollo a la parrilla con lechuga, crema, guacamole y pico de gallo.'],
   ['Ensalada Eli', 'Lechugas mixtas, pimientos, cebolla morada, pepino, piña, cilantro, queso fresco y tiras de tortilla crujientes. Pollo o bistec (camarón +$3).'],
   ['Ensalada de Axel', 'Lechugas mixtas, tomate, pepino, arroz, elote y frijol negro con pollo, bistec o camarón a la parrilla.'],
   ['', 'Pollo o bistec a la parrilla con lechuga, arroz blanco, frijol negro, pico de gallo, elote, crema, queso y aguacate.']
  ]},
  parrilla: { name: 'De la parrilla', items: [
   ['', 'Bistec, pollo, chorizo, nopales, cebolla fresca, jalapeños asados y queso fresco en un molcajete tradicional con salsa especial, arroz, frijoles, ensalada de guacamole y tortillas. Agrega pescado +$3.'],
   ['', 'Bistec delgado y pechuga de pollo cubiertos con camarón a la parrilla, calabacita, cebolla y champiñón en salsa cremosa de chipotle.'],
   ['', 'Pollo, carne asada, chorizo y cebolla asada con dip de queso. Arroz, frijoles, pico de gallo y tortillas.'],
   ['', 'Pollo o bistec a la parrilla con tocino picado, pimientos, cebolla, queso rallado y dip de queso.'],
   ['', 'Bistec delgado a la parrilla, cebolla asada, chile toreado, ensalada de guacamole, pico de gallo, arroz, frijoles y tortillas de maíz. Con camarón $27.75.'],
   ['', 'Zanahoria, brócoli y calabacita a la parrilla sobre arroz con dip de queso y salsa hibachi. Pollo o bistec a la parrilla.'],
   ['', 'Trozos tiernos de cerdo cocidos en salsa verde. Arroz, frijoles, ensalada de guacamole, pico de gallo y tortillas.'],
   ['', 'Brochetas de pollo y camarón a la parrilla con cebolla, pimientos, champiñones y calabacita.'],
   ['', 'Bistec delgado a la parrilla con cebolla asada, chile toreado, nopales, aguacate, pico de gallo y queso fresco.'],
   ['Bistec con camarón', 'Bistec con camarón, arroz, frijoles, ensalada de guacamole y tortillas.'],
   ['', 'Ribeye jugoso con arroz, frijoles, ensalada de guacamole y tortillas.'],
   ['Bistec ranchero', 'Ribeye bañado en salsa ranchera. Arroz, frijoles y tortillas.'],
   ['Bistec tampiqueña', 'Ribeye con cebolla asada y champiñones. Arroz, frijoles y tortillas.'],
   ['Bistec chipotle', 'Ribeye bañado en salsa chipotle. Arroz, frijoles, ensalada de guacamole y tortillas.']
  ]},
  fajitas: { name: 'Fajitas', note: 'Con pimientos y cebolla asados, tomate, lechuga, pico de gallo, crema, guacamole, arroz, frijoles y tortillas.', items: [
   ['', 'Pollo, bistec, chorizo, carnitas, tocino, pimientos, cebolla y tomate a la parrilla con dip de queso.'],
   ['Fajitas de pollo', 'Para dos $25.99'], ['Fajitas de bistec', 'Para dos $28.99'], ['Fajitas de camarón', 'Para dos $30.99'], ['Fajitas mixtas', 'Para dos $29.99'],
   ['Fajitas Texas', 'Pollo, bistec y camarón. Para dos $32.99']
  ]},
  tacos: { name: 'Tacos', items: [
   ['Tacos de quesabirria', 'Tres tacos rellenos de birria y queso Oaxaca, con caldo, pepino, rábano, cilantro y cebolla. Arroz y frijoles.'],
   ['', 'Tres tacos en tortilla de maíz con cilantro, cebolla y rábanos. Carne asada, pollo asado, carnitas, pastor o a la diabla.'],
   ['', 'Tres tacos, de harina o maíz, con pollo a la parrilla, bistec, chorizo, cilantro y cebolla.'],
   ['Tacos callejeros 3 Amigos', 'Uno de cerdo, uno de bistec y uno de chorizo en tortillas de maíz con cebolla asada, ensalada de aguacate, frijoles pintos y un jalapeño asado.'],
   ['Tacos de pollo BBQ', 'Dos tacos de harina con pollo, mayonesa picante, lechuga, col morada y queso fresco.'],
   ['', 'Dos tacos suaves de maíz con cerdo BBQ y cilantro fresco.'],
   ['Tacos de camarón Ensenada', 'Tres tacos de camarón empanizado a mano con lechuga, crema, guacamole, pico de gallo y queso.'],
   ['', 'Dos tortillas de harina con pescado, pico de gallo, lechuga, col morada y salsa picante casera.'],
   ['', 'Dos tacos suaves de harina con camarón, col morada, pico de gallo, salsa picante y queso fresco.']
  ]},
  burritos: { name: 'Burritos y quesadillas', items: [
   ['Burrito El Potrillo', 'Bistec, chorizo, arroz y frijoles con salsa chipotle y dip de queso.'],
   ['Burritos Durango', 'Dos burritos de bistec o pollo a la parrilla con cebolla, pimientos y tomate, con dip de queso y pico de gallo.'],
   ['', 'Burrito jumbo con bistec, pollo, camarón, cebolla, pimientos y tomate a la parrilla, con dip de queso.'],
   ['Burrito de birria', 'Birria, arroz, frijoles, cebolla, cilantro y dip de queso. Con consomé.'],
   ['', 'Dos burritos con bistec, chorizo y salsa picante, cubiertos de dip de queso.'],
   ['', 'Bistec, frijoles refritos, dip de queso, papas fritas y mayonesa de ancho, todo enrollado.'],
   ['', 'Pollo o carne molida con salsa ranchera, lechuga, crema, guacamole, queso y tomate.'],
   ['Burrito California', 'Pollo a la parrilla, queso rallado, guacamole, pico de gallo y papas fritas.'],
   ['Burrito de chile verde', 'Cerdo, arroz y frijoles refritos con salsa verde y queso rallado.'],
   ['Burrito frito', 'Dos tortillas fritas con pollo deshebrado o carne molida, dip de queso y pico de gallo.'],
   ['Chimichanga de cena', 'Tortilla de harina frita con res o pollo deshebrado, dip de queso y salsa ranchera.'],
   ['', 'Queso, pollo, bistec y camarón a la parrilla, cebolla y pimientos.'],
   ['Quesadilla de fajita', 'Queso, pollo o bistec a la parrilla, pimientos y cebolla.'],
   ['Quesadilla de Rubén', 'Pollo a la parrilla con cebolla asada y champiñones, crema, pico de gallo y ranch de chipotle.'],
   ['', 'Queso $8.50 · espinaca $9.95 · champiñón $10.50 · pollo marinado o carne molida $11.50 · pollo a la parrilla $13.50 · bistec $13.75 · camarón $14.75']
  ]},
  mariscos: { name: 'Mariscos', items: [
   ['Cóctel de camarón', 'Camarón fresco con pico de gallo, aguacate y salsa especial de tomate.'],
   ['', 'Camarones a la parrilla con salsa picante y cebolla. Arroz, frijoles, pico de gallo, aguacate y tortillas.'],
   ['', 'Camarones a la parrilla en salsa de ajo. Arroz, frijoles, ensalada de guacamole y tortillas.'],
   ['', 'Camarones salteados con pimientos, cebolla y salsa chipotle.'],
   ['', 'Camarones salteados con pimientos, cebolla, champiñones y tomate.'],
   ['', 'Camarones a la parrilla con cebolla morada, piña, calabacita y una mezcla especial de quesos.'],
   ['', 'Camarones fritos empanizados a mano. Arroz, frijoles, ensalada de guacamole y tortillas.'],
   ['', 'Camarones a la parrilla sobre lechuga, tomate, pepino, naranja, cebolla, aguacate y limón.'],
   ['Mojarra frita o al mojo de ajo', 'Tilapia reina entera frita con arroz, lechuga, pico de gallo, aguacate y tortillas.'],
   ['', 'Tilapia entera frita con cebolla asada, camarones y salsa a la diabla.'],
   ['', 'Sopa de camarón con verduras, con arroz y tortillas.'],
   ['Pescado y camarón', 'Filete de pescado y camarón a la parrilla con cebolla, pimientos y tomate.'],
   ['', 'Filete de pescado empanizado y frito con arroz, lechuga, guacamole y pico de gallo.']
  ]},
  enchiladas: { name: 'Enchiladas', items: [
   ['', 'Tres enchiladas de pollo con mole, crema, cebolla y queso fresco.'],
   ['', 'Tres enchiladas de pollo deshebrado con salsa de tomatillo.'],
   ['Enchiladas de Ellie', 'Cuatro enchiladas de pollo a la parrilla con salsa de tomatillo, dip de queso, crema y pico de gallo.'],
   ['Enchiladas de cerdo', 'Tres enchiladas de queso con pimientos y cebolla asados y carnitas.'],
   ['', 'Tres enchiladas de pollo deshebrado con lechuga, crema y pico de gallo.'],
   ['Enchiladas Supreme', 'Una de pollo, una de res, una de queso y una de frijol, con salsa roja, dip de queso, lechuga, tomate y crema.']
  ]},
  pollo: { name: 'Pollo, cerdo y tortas', items: [
   ['', 'Pollo a la parrilla con camarón, champiñones, brócoli, cebolla asada y calabacita, con dip de queso.'],
   ['', 'Dos pechugas de pollo sobre cebolla asada con tocino, piña, queso rallado y dip de queso.'],
   ['', 'Pechuga de pollo a la parrilla con pimientos, cebolla y tomate.'],
   ['', 'Dos pechugas de pollo a la parrilla rellenas de cheddar, con champiñones y dip de queso.'],
   ['', 'Tiras de pollo salteadas con pimientos, cebolla y salsa chipotle.'],
   ['', 'Pechuga de pollo a la parrilla con chorizo y dip de queso.'],
   ['', 'Pechuga de pollo empanizada a mano con arroz, frijoles, ensalada de guacamole y tortillas.'],
   ['', 'Pechuga de pollo marinada con dip de queso y salsa ranchera.'],
   ['', 'Cerdo sazonado, crujiente por fuera y jugoso por dentro. Ensalada de guacamole, arroz, frijoles y tortillas.'],
   ['', 'Trozos de cerdo en salsa verde de tomatillo.'],
   ['', 'Pan mexicano casero con frijoles, lechuga, tomate, cebolla, jalapeños en escabeche, aguacate y mayonesa, con papas fritas. Milanesa, chorizo, carnitas, barbacoa, pollo asado, carne asada o al pastor.']
  ]},
  arroz: { name: 'Arroz con pollo', note: 'Sobre arroz, con dip de queso encima, con tortillas.', items: [
   ['', 'Pollo, bistec y camarón a la parrilla con cebolla y pimientos asados.'],
   ['', 'Camarón y calabacita a la parrilla.'],
   ['', 'Bistec y calabacita a la parrilla.'],
   ['', 'Bistec y chorizo a la parrilla.'],
   ['', 'Pollo a la parrilla, tocino y piña.'],
   ['Arroz El Chef', 'Pollo a la parrilla con calabacita, brócoli, cebolla, tomate, champiñones y pimientos.'],
   ['', 'Tiras de pollo a la parrilla en rebanadas.'],
   ['', 'Tiras de pollo a la parrilla con chorizo.'],
   ['', 'Pollo a la parrilla, frijol negro y elote, con queso encima.']
  ]},
  nachos: { name: 'Nachos', items: [
   ['', 'Camarón, bistec y pollo a la parrilla, cebolla, pimientos y dip de queso.'],
   ['Nachos de camarón', 'Camarón a la parrilla sobre totopos crujientes con cheddar y dip de queso.'],
   ['Nachos de birria', 'Birria, cebolla asada, pico de gallo y crema, bañados en caldo y con dip de queso encima.'],
   ['Nachos de fajita', 'Pollo o bistec, lechuga, crema, guacamole, tomate, pimientos, cebolla y dip de queso.'],
   ['', 'Pollo o res, frijoles refritos, lechuga, crema, guacamole, tomate y salsa de queso.'],
   ['Nachos de pollo a la parrilla', 'Pollo a la parrilla, cheddar, jalapeños frescos y dip de queso.'],
   ['Nachos clásicos', 'Queso o frijol $7.99 · res o pollo $9.95 · res y frijol $10.50 · pollo y res $11.50']
  ]},
  vegetariano: { name: 'Vegetariano', items: [
   ['', 'Cebolla, pimientos, tomate, brócoli, calabacita y champiñones a la parrilla con arroz, frijol negro, guacamole y tortillas.'],
   ['', 'Verduras a la parrilla sobre arroz, con dip de queso encima.'],
   ['', 'Dos chiles poblanos rellenos de queso, capeados y fritos, cubiertos de salsa ranchera.'],
   ['Burrito vegetariano', 'Brócoli, calabacita, pimientos, cebolla, frijol negro y arroz con salsa de tomatillo.'],
   ['Enchiladas de espinaca', 'Tres enchiladas de espinaca con salsa ranchera, lechuga, crema, queso y tomate.'],
   ['Quesadilla vegetariana', 'Cebolla, pimientos, brócoli, calabacita, tomate, champiñones y queso.']
  ]},
  combos: { name: 'Combinaciones', note: 'Arma la tuya con chimichangas, tacos, tostadas, burritos, chile relleno, enchiladas y tamales. Bistec o pollo a la parrilla +$2, camarón +$3 por platillo.', items: [
   ['Elige dos favoritos', 'Dos platillos con arroz y frijoles.'], ['Elige tres favoritos', 'Tres platillos con arroz y frijoles.']
  ]},
  lunch: { name: 'Almuerzo, 11 am a 3 pm', note: 'Los especiales de almuerzo se sirven de 11 am a 3 pm.', items: [
   ['', 'Res o pollo, dip de queso y salsa ranchera. Arroz, lechuga, crema y guacamole.'],
   ['Combinación de almuerzo', 'Un platillo $9.95 · dos platillos $10.95, con arroz y frijoles.'],
   ['Burrito frito', 'Pollo deshebrado o carne molida, dip de queso, pico de gallo. Arroz y frijoles.'],
   ['', 'Pollo a la parrilla en rebanadas sobre arroz con dip de queso.'],
   ['', 'Pollo o carne molida con arroz, frijoles, lechuga, crema, guacamole y tomate.'],
   ['', 'Verduras a la parrilla sobre arroz con dip de queso.'],
   ['', 'Pechuga de pollo marinada con dip de queso y salsa ranchera.'],
   ['', 'Con chorizo, rancheros, a la mexicana o divorciados. Arroz, frijoles y tortillas.'],
   ['', 'Tiras de pollo a la parrilla con chorizo sobre arroz con dip de queso.'],
   ['', 'Pechuga de pollo a la parrilla con chorizo y dip de queso.'],
   ['', 'Pechuga de pollo rellena de cheddar, con champiñones y dip de queso.'],
   ['', 'Bistec, chorizo y salsa picante, cubiertos de dip de queso.'],
   ['Fajitas de almuerzo', 'Mixtas $11.99 · pollo o bistec $12.95 · Texas o camarón $13.75.'],
   ['', 'Bistec y calabacita a la parrilla sobre arroz con dip de queso.'],
   ['', 'Camarón y calabacita a la parrilla sobre arroz con dip de queso.'],
   ['', 'Pollo, bistec y camarón sobre arroz con cebolla, pimientos y dip de queso.']
  ]},
  bebidas: { name: 'Bebidas', items: [
   ['', 'Horchata, Jamaica, Piña.'], ['', 'Tamarindo, Piña.'], ['Coca-Cola mexicana', 'En botella de vidrio.'],
   ['Refrescos de fuente', 'Coca-Cola, Coca-Cola Light, Pibb, Fanta, Sprite, ginger ale Seagram’s, limonada Minute Maid.'],
   ['Margaritas y el bar', 'Bar completo, abierto hasta tarde los viernes y sábados.']
  ]}
 }
};
