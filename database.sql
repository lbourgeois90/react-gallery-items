CREATE TABLE "galleryTable" (
   "id" serial PRIMARY KEY,
   "title" varchar(25),
   "path" varchar(500) not null,
   "description" varchar(500) not null,
	"likes" integer
	);

INSERT INTO "galleryTable"("path", "title", "description", "likes") VALUES('/images/demiguise.png', 'Demiguise', '"The Demiguise is a peaceful, herbivorous creature that can make itself invisible and tell the future which makes it very hard to catch. It is found in the Far East, but only wizards and witches trained in their capture can even see them. It resembles a cross between a sloth and an ape with large, black eyes and long, silky hair." - Harry Potter Fandom Wiki', '3');

INSERT INTO "galleryTable"("path", "title", "description", "likes") VALUES('images/niffler.jpg', 'Niffler','"The Niffler is a British beast. Fluffy, black and long-snouted, this burrowing creature has a predilection for anything glittery. Nifflers are often kept by goblins to burrow deep into the earth for treasure. Though the Niffler is gentle and even affectionate, it can be destructive to belongings and should never be kept in a house. Nifflers live in lairs up to twenty feet below the surface and produce six to eight young in a litter." - Newt Scamander', 6
);
INSERT INTO "galleryTable"("path", "title", "description", "likes") VALUES('images/phoenix.jpg', 'Phoenix','"They can carry immensely heavy loads. Their tears have healing powers. Phoenixes burst into flame when it is time for them to die and are reborn from the ashes." - Albus Dumbledore', 4
);

INSERT INTO "galleryTable"("path", "title", "description", "likes") VALUES('images/dementor.jpg', 'Dementor','"Dementors are among the foulest creatures that walk this earth. They infest the darkest, filthiest places, they glory in decay and despair, they drain peace, hope, and happiness out of the air around them. Even Muggles feel their presence, though they can’t see them." - J.K. Rowling', 15
);

INSERT INTO "galleryTable"("path", "title", "description", "likes") VALUES('images/hippogriff.jpg', 'Hippogriff','"Hippogriffs are flying creatures with the head, wings, and forelegs of a giant eagle and the body (including hind legs and tail) of a horse. Their eyes are orange, while individual hippogriff colors vary as those of mundane horses do, including black, bronze, chestnut, grey, and roan. An adult Hippogriff’s wingspan is approximately 24 feet." - Harry Potter Lexicon', 3
);


INSERT INTO "galleryTable"("path", "title", "description", "likes") VALUES('images/HouseElf.jpg', 'House Elf','"APPEARANCE:
Large heads, long noses and fingers, very short, with bulging, tennis ball eyes and bat-like ears.
MAGIC ABILITIES:
Their own type of magic performed without a wand which includes the ability to apparate, disarm and make objects levitate.
ALLEGIANCE:
Bound to serve one owner unless freed by being given clothes by that owner." - Pottermore', 15
);

INSERT INTO "galleryTable"("path", "title", "description", "likes") VALUES ('images/Norbert.jpg', 'Norbert', '"It resembles the Hungarian Horntail, except for the black ridges on its back, the browner texture in its scales, and its less hostile attitude. It has venomous fangs, and its food of choice is large mammals, including water mammals, which is unusual for a dragon. Its eggs are black, and young Ridgebacks develop the ability to shoot flame earlier than any other breeds (around one to three months). Female Ridgebacks are generally more ferocious than the males" - Harry Potter Fandom Wiki', 1);









