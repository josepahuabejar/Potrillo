// El Potrillo Cocina Mexicana — menu, transcribed from the restaurant's printed menu (prices as printed).
// n: name, p: price, d: description
window.MENU = [
 { id: 'aperitivos', name: 'Appetizers & dips', items: [
  { n: 'Guacamole Regional', p: '9.95', d: 'Fresh avocados prepared with cilantro, tomato, and onion. Served with tortilla chips.' },
  { n: 'Guacamole Dip', p: '7.25', d: 'Homemade dip with fresh avocados, tomato, cilantro, and onion. Served with hot tortilla chips.' },
  { n: 'Cheese Dip', p: '6.95', d: 'Spicy melted cheese with jalapeños. Served with hot tortilla chips.' },
  { n: 'Bean & Cheese Dip', p: '7.50', d: 'Homemade beans and cheese dip served with tortilla chips.' },
  { n: 'Spinach Dip', p: '8.75', d: 'Spinach and cheese served with tortilla chips.' },
  { n: 'Chori Dip', p: '10.99', d: 'Cheese dip with Mexican sausage. Served with tortilla chips.' },
  { n: 'Elote Dip', p: '9.50', d: 'Roasted corn, cheese dip, queso fresco, cilantro, topped with pico de gallo.' },
  { n: 'Shrimp Dip', p: '10.75', d: 'Fresh cooked shrimp with cheese dip. Served with toasted bread.' },
  { n: 'Taquitos', p: '12.50', d: 'Four rolled corn tortillas stuffed with chicken, beef, or potatoes, topped with sour cream and pico de gallo.' },
  { n: 'Carne Asada Fries', p: '14.50', d: 'French fries topped with steak, black beans, corn, cilantro, pickled jalapeños, queso fresco, cilantro-lime sauce, and sour cream.' },
  { n: 'Sweet Plantains', p: '8.95', d: 'Eight ripe, sweet plantains fried and served with sour cream.' },
  { n: 'Wings', p: 'MP', d: '6 or 12 wings with chipotle BBQ, buffalo, or mango habanero.' },
  { n: 'El Paisa', p: '12.95', d: 'Chorizo, chicken, shrimp, and pico de gallo with cheese dip. Served with fresh chips.' }
 ]},
 { id: 'sopas', name: 'Soups & salads', items: [
  { n: 'Caldo de Pollo', p: '10.50', d: 'Bowl $10.50 · cup $8.50. Chicken soup with onions, tomatoes, cilantro, avocado, and rice.' },
  { n: 'Tortilla Soup', p: '10.50', d: 'Bowl $10.50 · cup $8.50. Like the chicken soup, with strips of tortilla instead of rice.' },
  { n: 'Chicken & Shrimp Soup', p: '12.99', d: 'Chicken soup with shrimp, onions, tomatoes, cilantro, avocado, and rice.' },
  { n: 'Caldo de Res', p: '14.95', d: 'Slow-simmered beef with corn, potato, and carrots. Served with onions, fresh jalapeños, and white rice.' },
  { n: 'Shrimp Salad', p: '13.99', d: 'Sautéed shrimp, lettuce, tomato, cheese, and pico de gallo.' },
  { n: 'Taco Salad', p: '10.99', d: 'Beef or chicken with lettuce, sour cream, guacamole, tomato, and cheese in a fresh tortilla shell.' },
  { n: 'Fajita Taco Salad', p: '12.95', d: 'Grilled steak or chicken with lettuce, sour cream, guacamole, and pico de gallo.' },
  { n: 'Eli Salad', p: '14.95', d: 'Spring mix, peppers, red onion, cucumber, pineapple, cilantro, queso fresco, crispy tortilla strips. Chicken or steak (shrimp +$3).' },
  { n: "Axel's Salad", p: '15.95', d: 'Spring mix, tomatoes, cucumbers, rice, corn, and black beans with grilled chicken, steak, or shrimp.' },
  { n: 'Burrito Bowl', p: '13.99', d: 'Grilled chicken or steak with lettuce, white rice, black beans, pico de gallo, corn, sour cream, cheese, and avocado.' }
 ]},
 { id: 'parrilla', name: 'On the grill', items: [
  { n: 'Molcajete El Potrillo', p: '25.95', d: 'Grilled steak, chicken, chorizo, cactus, fresh onion, grilled jalapeños, and queso fresco in a traditional molcajete with special sauce, rice, beans, guacamole salad, and tortillas. Add fish +$3.', star: true },
  { n: 'Los Tres Potrillos', p: '21.99', d: 'Thin-sliced steak and chicken breast topped with grilled shrimp, zucchini, onion, and mushroom in creamy chipotle sauce.' },
  { n: 'Cazuelon', p: '19.99', d: 'Chicken, carne asada, chorizo, and grilled onions with cheese dip. Rice, beans, pico de gallo, tortillas.' },
  { n: 'Alambre', p: '17.50', d: 'Grilled chicken or steak with chopped bacon, peppers, onions, shredded cheese, and cheese dip.' },
  { n: 'Carne Asada', p: '19.99', d: 'Thin-sliced grilled steak, grilled onions, chile toreado, guacamole salad, pico de gallo, rice, beans, corn tortillas. With shrimp $27.75.' },
  { n: 'Hibachi', p: '14.99', d: 'Grilled carrots, broccoli, and zucchini over rice with cheese dip and hibachi sauce. Grilled chicken or steak.' },
  { n: 'Chile Verde', p: '16.75', d: 'Tender pork chunks cooked in green salsa. Rice, beans, guacamole salad, pico de gallo, tortillas.' },
  { n: 'Brocheta', p: '17.95', d: 'Grilled chicken and shrimp skewers with onions, peppers, mushrooms, and zucchini.' },
  { n: 'La Costeña', p: '22.99', d: 'Thin-sliced grilled steak with grilled onion, chile toreado, cactus, avocado, pico de gallo, and queso fresco.' },
  { n: 'Steak and Shrimp', p: '27.99', d: 'Steak with shrimp, rice, beans, guacamole salad, and tortillas.' },
  { n: 'Ribeye', p: '25.99', d: 'Juicy ribeye with rice, beans, guacamole salad, and tortillas.' },
  { n: 'Steak Ranchero', p: '26.50', d: 'Ribeye smothered in ranchero salsa. Rice, beans, tortillas.' },
  { n: 'Steak Tampiqueña', p: '26.99', d: 'Ribeye topped with grilled onions and mushrooms. Rice, beans, tortillas.' },
  { n: 'Chipotle Steak', p: '26.50', d: 'Ribeye smothered in chipotle sauce. Rice, beans, guacamole salad, tortillas.' }
 ]},
 { id: 'fajitas', name: 'Fajitas', note: 'With grilled peppers, onions, tomato, lettuce, pico de gallo, sour cream, guacamole, rice, beans, and tortillas.', items: [
  { n: 'Fajitas la Loma', p: '22.50', d: 'Grilled chicken, steak, chorizo, carnitas, bacon, peppers, onions, and tomatoes topped with cheese dip.', star: true },
  { n: 'Chicken Fajitas', p: '18.95', d: 'For two $25.99' },
  { n: 'Steak Fajitas', p: '19.50', d: 'For two $28.99' },
  { n: 'Shrimp Fajitas', p: '21.99', d: 'For two $30.99' },
  { n: 'Mixed Fajitas', p: '19.50', d: 'For two $29.99' },
  { n: 'Texas Fajitas', p: '20.99', d: 'Chicken, steak, and shrimp. For two $32.99' }
 ]},
 { id: 'tacos', name: 'Tacos', items: [
  { n: 'Quesabirria Tacos', p: '17.99', d: 'Three tacos stuffed with birria and Oaxaca cheese, with broth, cucumber, radish, cilantro, and onions. Rice and beans.', star: true },
  { n: 'Tacos de Asada', p: '14.99', d: 'Three corn tortilla tacos with cilantro, onions, and radishes. Carne asada, pollo asado, carnitas, pastor, or a la diabla.' },
  { n: 'Tacos Chupacabras', p: '15.50', d: 'Three tacos, flour or corn, with grilled chicken, steak, chorizo, cilantro, and onions.' },
  { n: '3 Amigos Street Tacos', p: '15.50', d: 'One pork, one steak, one chorizo on corn tortillas with grilled onions, avocado salad, pinto beans, and a grilled jalapeño.' },
  { n: 'BBQ Chicken Tacos', p: '12.95', d: 'Two flour tacos with chicken, spicy mayo, lettuce, red cabbage, and queso fresco.' },
  { n: 'Tacos Carolina', p: '12.95', d: 'Two soft corn tacos with BBQ pork and fresh cilantro.' },
  { n: 'Ensenada Shrimp Tacos', p: '19.50', d: 'Three hand-breaded shrimp tacos with lettuce, sour cream, guacamole, pico de gallo, and cheese.' },
  { n: 'Tacos de Pescado', p: '17.75', d: 'Two flour tortillas with fish, pico de gallo, lettuce, red cabbage, and homemade spicy sauce.' },
  { n: 'Tacos Costa Azul', p: '13.95', d: 'Two soft flour tacos with shrimp, red cabbage, pico de gallo, spicy sauce, and queso fresco.' }
 ]},
 { id: 'burritos', name: 'Burritos & quesadillas', items: [
  { n: 'El Potrillo Burrito', p: '15.50', d: 'Steak, chorizo, rice, and beans topped with chipotle sauce and cheese dip.' },
  { n: 'Durango Burritos', p: '15.99', d: 'Two burritos of grilled steak or chicken with onions, peppers, and tomato, topped with cheese dip and pico de gallo.' },
  { n: 'Burrito Texano', p: '16.50', d: 'Jumbo burrito with grilled steak, chicken, shrimp, onions, peppers, and tomato, topped with cheese dip.' },
  { n: 'Birria Burrito', p: '16.99', d: 'Birria, rice, beans, onions, cilantro, and cheese dip. Served with consomé.' },
  { n: 'Burrito Diabla', p: '14.50', d: 'Two burritos with steak, chorizo, and hot sauce, covered with cheese dip.' },
  { n: 'Burrito Azteca', p: '13.95', d: 'Steak, refried beans, cheese dip, fries, and ancho mayo rolled together.' },
  { n: 'Burrito Supreme', p: '12.99', d: 'Chicken or ground beef with ranchero sauce, lettuce, sour cream, guacamole, cheese, and tomato.' },
  { n: 'California Burrito', p: '13.50', d: 'Grilled chicken, shredded cheese, guacamole, pico de gallo, and fries.' },
  { n: 'Chile Verde Burrito', p: '13.99', d: 'Pork, rice, and refried beans with salsa verde and shredded cheese.' },
  { n: 'Fried Burrito', p: '13.99', d: 'Two fried tortillas with shredded chicken or ground beef, cheese dip, and pico de gallo.' },
  { n: 'Dinner Chimichanga', p: '12.95', d: 'Fried flour tortilla with shredded beef or chicken, cheese dip, and ranchero sauce.' },
  { n: 'Quesadilla Texana', p: '16.99', d: 'Cheese, grilled chicken, steak, shrimp, onions, and peppers.' },
  { n: 'Fajita Quesadilla', p: '14.95', d: 'Cheese, grilled chicken or steak, bell peppers, and onions.' },
  { n: "Ruben's Quesadilla", p: '15.75', d: 'Grilled chicken with grilled onions and mushrooms, sour cream, pico de gallo, and chipotle ranch.' },
  { n: 'Quesadillas', p: '8.50', d: 'Cheese $8.50 · spinach $9.95 · mushroom $10.50 · marinated chicken or ground beef $11.50 · grilled chicken $13.50 · steak $13.75 · shrimp $14.75' }
 ]},
 { id: 'mariscos', name: 'Seafood', items: [
  { n: 'Shrimp Cocktail', p: '18.99', d: 'Fresh shrimp with pico de gallo, avocado, and special tomato sauce.', star: true },
  { n: 'Camarones a la Diabla', p: '19.50', d: 'Grilled shrimp with spicy sauce and onions. Rice, beans, pico de gallo, avocado, tortillas.' },
  { n: 'Camarones al Mojo de Ajo', p: '19.50', d: 'Grilled shrimp in garlic sauce. Rice, beans, guacamole salad, tortillas.' },
  { n: 'Camarones Chipotle', p: '19.50', d: 'Sautéed shrimp with peppers, onions, and chipotle sauce.' },
  { n: 'Camarones Rancheros', p: '19.50', d: 'Shrimp sautéed with peppers, onions, mushrooms, and tomatoes.' },
  { n: 'Camarones Cancun', p: '19.50', d: 'Grilled shrimp with red onion, pineapple, zucchini, and a special cheese blend.' },
  { n: 'Camarones Empanizados', p: '19.50', d: 'Hand-breaded fried shrimp. Rice, beans, guacamole salad, tortillas.' },
  { n: 'Parrillada', p: '24.25', d: 'Grilled shrimp over lettuce, tomatoes, cucumber, oranges, onions, avocado, and lime.' },
  { n: 'Mojarra Frita or al Mojo de Ajo', p: '20.50', d: 'Whole fried queen tilapia with rice, lettuce, pico de gallo, avocado, and tortillas.' },
  { n: 'Mojarra a la Diabla', p: '30.99', d: 'Whole fried tilapia topped with grilled onions, shrimp, and salsa a la diabla.' },
  { n: 'Caldo de Camarón', p: '19.50', d: 'Shrimp soup with vegetables, served with rice and tortillas.' },
  { n: 'Fish and Shrimp', p: '19.50', d: 'Fish filet and grilled shrimp with onions, peppers, and tomato.' },
  { n: 'Pescado Empanizado', p: '19.50', d: 'Breaded fried fish filet with rice, lettuce, guacamole, and pico de gallo.' }
 ]},
 { id: 'enchiladas', name: 'Enchiladas', items: [
  { n: 'Enchiladas de Mole', p: '13.99', d: 'Three chicken enchiladas topped with mole, sour cream, onions, and queso fresco.' },
  { n: 'Enchiladas Verdes', p: '13.95', d: 'Three shredded chicken enchiladas with tomatillo salsa.' },
  { n: "Ellie's Enchiladas", p: '13.99', d: 'Four grilled chicken enchiladas with tomatillo salsa, cheese dip, sour cream, and pico de gallo.' },
  { n: 'Pork Enchiladas', p: '13.99', d: 'Three cheese enchiladas with grilled peppers, onions, and carnitas.' },
  { n: 'Enchiladas Mexicanas', p: '12.50', d: 'Three shredded chicken enchiladas with lettuce, sour cream, and pico de gallo.' },
  { n: 'Enchiladas Supreme', p: '11.99', d: 'One chicken, one beef, one cheese, one bean, with red salsa, cheese dip, lettuce, tomato, and sour cream.' }
 ]},
 { id: 'pollo', name: 'Pollo, pork & tortas', items: [
  { n: 'Pollo Loco', p: '16.99', d: 'Grilled chicken with shrimp, mushrooms, broccoli, grilled onions, and zucchini, topped with cheese dip.' },
  { n: 'Pollo Tropical', p: '16.75', d: 'Two chicken breasts over grilled onions with bacon, pineapple, shredded cheese, and cheese dip.' },
  { n: 'Pollo al Carbon', p: '15.95', d: 'Grilled chicken breast with peppers, onions, and tomato.' },
  { n: 'Pollo Relleno', p: '15.99', d: 'Two grilled chicken breasts stuffed with cheddar, topped with mushrooms and cheese dip.' },
  { n: 'Pollo Chipotle', p: '15.99', d: 'Chicken strips sautéed with peppers, onions, and chipotle sauce.' },
  { n: 'Chori Pollo', p: '15.99', d: 'Grilled chicken breast topped with chorizo and cheese dip.' },
  { n: 'Milanesa de Pollo', p: '16.50', d: 'Hand-breaded chicken breast with rice, beans, guacamole salad, and tortillas.' },
  { n: 'Pollo Ranchero', p: '13.95', d: 'Marinated chicken breast with cheese dip and ranchero sauce.' },
  { n: 'Carnitas', p: '17.99', d: 'Seasoned pork, crispy outside and juicy inside. Guacamole salad, rice, beans, tortillas.' },
  { n: 'Carnitas en Salsa Verde', p: '17.99', d: 'Pork chunks in tomatillo green sauce.' },
  { n: 'Tortas', p: '15.75', d: 'Homemade Mexican bread with beans, lettuce, tomato, onion, pickled jalapeños, avocado, and mayo, with fries. Milanesa, chorizo, carnitas, barbacoa, pollo asado, carne asada, or al pastor.' }
 ]},
 { id: 'arroz', name: 'Arroz con pollo', note: 'Over rice, topped with cheese dip, served with tortillas.', items: [
  { n: 'Arroz Texano', p: '17.50', d: 'Grilled chicken, steak, and shrimp with grilled onions and peppers.' },
  { n: 'Arroz con Camarón', p: '18.95', d: 'Grilled shrimp and zucchini.' },
  { n: 'Arroz con Steak', p: '17.99', d: 'Grilled steak and zucchini.' },
  { n: 'Arroz Diabla', p: '16.50', d: 'Grilled steak and chorizo.' },
  { n: 'ACP Tropical', p: '15.99', d: 'Grilled chicken, bacon, and pineapple.' },
  { n: 'Arroz El Chef', p: '15.99', d: 'Grilled chicken with zucchini, broccoli, onions, tomato, mushrooms, and bell peppers.' },
  { n: 'Arroz con Pollo', p: '15.75', d: 'Sliced grilled chicken strips.' },
  { n: 'Arroz con Chorizo', p: '15.50', d: 'Grilled chicken strips with chorizo.' },
  { n: 'Arroz Southwest', p: '15.75', d: 'Grilled chicken, black beans, and corn, topped with cheese.' }
 ]},
 { id: 'nachos', name: 'Nachos', items: [
  { n: 'Nachos Texanos', p: '18.50', d: 'Grilled shrimp, steak, chicken, onions, peppers, and cheese dip.' },
  { n: 'Shrimp Nachos', p: '16.95', d: 'Grilled shrimp on crispy chips with cheddar and cheese dip.' },
  { n: 'Birria Nachos', p: '15.99', d: 'Birria, grilled onions, pico de gallo, and sour cream, coated with broth and topped with cheese dip.' },
  { n: 'Fajita Nachos', p: '15.75', d: 'Chicken or steak, lettuce, sour cream, guacamole, tomato, peppers, onions, and cheese dip.' },
  { n: 'Nachos Supreme', p: '13.75', d: 'Chicken or beef, refried beans, lettuce, sour cream, guacamole, tomato, and cheese sauce.' },
  { n: 'Grilled Chicken Nachos', p: '13.75', d: 'Grilled chicken, cheddar, fresh jalapeños, and cheese dip.' },
  { n: 'Classic Nachos', p: '7.99', d: 'Cheese or bean $7.99 · beef or chicken $9.95 · beef & beans $10.50 · chicken & beef $11.50' }
 ]},
 { id: 'vegetariano', name: 'Vegetarian', items: [
  { n: 'Fajita Vegetariana', p: '14.99', d: 'Grilled onions, peppers, tomato, broccoli, zucchini, and mushrooms with rice, black beans, guacamole, and tortillas.' },
  { n: 'Arroz Vegetariano', p: '13.95', d: 'Grilled vegetables over rice, topped with cheese dip.' },
  { n: 'Chiles Poblanos', p: '13.75', d: 'Two poblanos stuffed with cheese, fried in egg batter, covered with ranchero sauce.' },
  { n: 'Veggie Burrito', p: '12.99', d: 'Broccoli, zucchini, peppers, onions, black beans, and rice with tomatillo salsa.' },
  { n: 'Spinach Enchiladas', p: '10.95', d: 'Three spinach enchiladas with ranchero sauce, lettuce, sour cream, cheese, and tomato.' },
  { n: 'Veggie Quesadilla', p: '10.95', d: 'Onions, peppers, broccoli, zucchini, tomato, mushrooms, and cheese.' }
 ]},
 { id: 'combos', name: 'Combinations', note: 'Build your own from chimichangas, tacos, tostadas, burritos, chile relleno, enchiladas, and tamales. Steak or grilled chicken +$2, shrimp +$3 per item.', items: [
  { n: 'Pick two favorites', p: '12.99', d: 'Two items with rice and beans.' },
  { n: 'Pick three favorites', p: '13.99', d: 'Three items with rice and beans.' }
 ]},
 { id: 'lunch', name: 'Lunch, 11 am to 3 pm', note: 'Lunch specials are served from 11 am to 3 pm.', items: [
  { n: 'Chimichanga', p: '9.50', d: 'Beef or chicken, cheese dip, and ranchero sauce. Rice, lettuce, sour cream, guacamole.' },
  { n: 'Lunch combination', p: '9.95', d: 'One item $9.95 · two items $10.95, with rice and beans.' },
  { n: 'Fried Burrito', p: '10.25', d: 'Shredded chicken or ground beef, cheese dip, pico de gallo. Rice and beans.' },
  { n: 'Arroz con Pollo', p: '10.50', d: 'Sliced grilled chicken on rice with cheese dip.' },
  { n: 'Quesadilla Rellena', p: '10.50', d: 'Chicken or ground beef with rice, beans, lettuce, sour cream, guacamole, and tomato.' },
  { n: 'Arroz Vegetariano', p: '10.50', d: 'Grilled vegetables over rice with cheese dip.' },
  { n: 'Pollo Ranchero', p: '10.95', d: 'Marinated chicken breast with cheese dip and ranchero sauce.' },
  { n: 'Huevos al Gusto', p: '10.99', d: 'Con chorizo, rancheros, a la mexicana, or divorciados. Rice, beans, tortillas.' },
  { n: 'Arroz con Chorizo', p: '11.50', d: 'Grilled chicken strips with chorizo over rice with cheese dip.' },
  { n: 'Chori Pollo', p: '11.50', d: 'Grilled chicken breast with chorizo and cheese dip.' },
  { n: 'Pollo Relleno', p: '11.50', d: 'Chicken breast stuffed with cheddar, mushrooms, and cheese dip.' },
  { n: 'Burrito Fuego', p: '11.95', d: 'Steak, chorizo, and hot sauce, covered with cheese dip.' },
  { n: 'Lunch fajitas', p: '11.99', d: 'Mixed $11.99 · chicken or steak $12.95 · Texas or shrimp $13.75.' },
  { n: 'Arroz con Steak', p: '12.95', d: 'Grilled steak and zucchini over rice with cheese dip.' },
  { n: 'Arroz con Camarón', p: '12.99', d: 'Grilled shrimp and zucchini over rice with cheese dip.' },
  { n: 'Arroz Texano', p: '13.95', d: 'Chicken, steak, and shrimp over rice with onions, peppers, and cheese dip.' }
 ]},
 { id: 'bebidas', name: 'Drinks', items: [
  { n: 'Aguas frescas', p: '', d: 'Horchata, Jamaica, Piña.' },
  { n: 'Jarritos', p: '', d: 'Tamarindo, Piña.' },
  { n: 'Mexican Coca-Cola', p: '', d: 'In the glass bottle.' },
  { n: 'Fountain drinks', p: '', d: 'Coca-Cola, Diet Coke, Pibb, Fanta, Sprite, Seagram’s ginger ale, Minute Maid lemonade.' },
  { n: 'Margaritas & the bar', p: '', d: 'A full bar, open late on Fridays and Saturdays.' }
 ]}
];
