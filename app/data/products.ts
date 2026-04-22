export type Product = {
  slug: string;
  name: string;
  price: string;
  sold?: boolean;
  category?: string;
  size?: string;
  description?: string;
  heroImage: string;
  backImage: string;
  detailImages: string[];
  measurements?: {
    pitToPit?: string;
    shoulder?: string;
    sleeve?: string;
    backLength?: string;
    waist?: string;
    rise?: string;
    inseam?: string;
    hem?: string;
  };
  objectStudy?: {
    title: string;
    text: string;
  };
};

export const products: Product[] = [
  {
    slug: "unissued-raf-flight-jacket",
    name: "Unissued RAF Flight Jacket",
    price: "£3,000",
    sold: false,
    category: "Outerwear",
    size: "4",
    description:
      "An original 1950s RAF Ventile flight parka in rare un-issued condition, made in Britain as a hard-wearing cold-weather outer layer for Royal Air Force use.",
    heroImage: "https://storage.googleapis.com/curated-assets/raf_converted.avif",
    backImage: "https://storage.googleapis.com/curated-assets/raf/rafhood_converted.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/raf/raflabel_converted.avif",
      "https://storage.googleapis.com/curated-assets/raf/historicalRAF.avif",
      "https://storage.googleapis.com/curated-assets/raf/rafzip_converted.avif",
      "https://storage.googleapis.com/curated-assets/raf/rafbelt_converted.avif",
      "https://storage.googleapis.com/curated-assets/raf/rafhoodup_converted.avif",
    ],
    measurements: {
      pitToPit: "21 in",
      shoulder: "18 in",
      sleeve: "24 in",
      backLength: "30 in",
    },
    objectStudy: {
  title: "Military function, preserved in rare condition.",
  text: `This is the kind of military piece that sits at the intersection of function, textile history, and collecting. The real draw here is the Ventile: a densely woven cotton developed in Britain during the Second World War to improve survival in extreme conditions, particularly for aircrew exposed to cold water and harsh weather. Its reputation came from the way the fabric swells when wet, creating weather resistance without synthetic coatings. That origin story is a large part of why original Ventile garments remain so respected today.

What makes this example especially strong is the condition. Unissued military outerwear has a completely different feel to field-worn examples: sharper structure, cleaner lines, fuller colour, and a purity of fabric that’s hard to find in militaria. Ventile itself also ages beautifully. Unlike modern technical fabrics, it carries wear with character rather than failure.

That means a piece like this can be worn hard and still retain the qualities that made it famous in the first place. In perfect, unissued condition, though, it is also one of those garments that feels almost archival. It works as a collector’s piece, but it is equally convincing in a wardrobe built around old military, workwear, or understated outerwear. This is not just a vintage parka. It is a preserved example of British fabric innovation and mid-century military design at a very high level.`,
},
  },
  {
    slug: "british-denison-smock",
    name: "British Denison Smock",
    price: "£1,250",
    sold: false,
    category: "Outerwear",
    size: "L",
    description:
      "A classic Denison Smock in great condition, showing honest repairs and wear that deepen the character of one of military history’s most iconic camouflage garments.",
    heroImage: "https://storage.googleapis.com/curated-assets/smock/Smockopen_converted.avif",
    backImage: "https://storage.googleapis.com/curated-assets/smock/Smockback.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/smock/DSCF0346_converted.avif",
      "https://storage.googleapis.com/curated-assets/smock/Denison_converted.avif",
      "https://storage.googleapis.com/curated-assets/smock/DSCF0347_converted.avif",
      "https://storage.googleapis.com/curated-assets/smock/Smockclose_converted.avif",
      "https://storage.googleapis.com/curated-assets/smock/stuntMan_converted.avif",
      "https://storage.googleapis.com/curated-assets/smock/DSCF0348_converted.avif",
      "https://storage.googleapis.com/curated-assets/smock/DSCF0350_converted.avif",
      "https://storage.googleapis.com/curated-assets/smock/smock_converted.avif",
      "https://storage.googleapis.com/curated-assets/smock/DSCF0352_converted.avif",
    ],
    measurements: {
      pitToPit: "22 in",
      shoulder: "19 in",
      sleeve: "25 in",
      backLength: "27 in",
    },
    objectStudy: {
  title: "One of the defining garments in military camouflage history.",
  text: `Few military garments carry the weight of the Denison Smock. Originally designed for British airborne forces and intended to be worn over battledress, it became one of the most recognisable combat smocks of the twentieth century. The long tailpiece, generous cut, and distinctive brushstroke camouflage were all rooted in function, designed to stabilise the garment during parachute descent and break up the wearer’s outline in the field.

What makes a Denison especially compelling is that no two wear the same way. The pattern itself has a painterly quality that feels far removed from later mass-issued camouflage, and the repairs on this one only deepen that effect. Darning and period wear do not diminish a garment like this; they become part of its language. On a piece originally designed for service, repair feels completely natural.

In great condition, with visible mending, this example keeps the balance that serious buyers usually want. It still presents strongly, but it has enough evidence of life to avoid feeling sterile. It is exactly this mixture of history, design intelligence, and honest wear that keeps the Denison one of the most collectible military garments ever made.`,
},
  },
  {
    slug: "Eddie-Bauer-puffer-jacket",
    name: "1980s Eddie Bauer Down Puffer Jacket (Made in USA)",
    price: "£450",
    sold: false,
    category: "Outerwear",
    size: "32",
    description:
      "A 1980s Eddie Bauer down puffer made in the USA, preserved in excellent condition with a wool-trimmed detachablehood and strong old American outdoor appeal.",
    heroImage: "https://storage.googleapis.com/curated-assets/eddie/frontEDDIEBAUER-1_converted.avif",
    backImage: "https://storage.googleapis.com/curated-assets/eddie/backEDDIEBAUER-6_converted.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/eddie/EDDIEBAUER-8_converted.avif",
      "https://storage.googleapis.com/curated-assets/eddie/EDDIEBAUER-7_converted.avif",
      "https://storage.googleapis.com/curated-assets/eddie/EDDIEBAUER-5_converted.avif",
      "https://storage.googleapis.com/curated-assets/eddie/EDDIEBAUER-4_converted.avif",
      "https://storage.googleapis.com/curated-assets/eddie/EDDIEBAUER-3_converted.avif",
      "https://storage.googleapis.com/curated-assets/eddie/EDDIEBAUER-2_converted.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
    objectStudy: {
  title: "Old American outdoor design, preserved with unusual clarity.",
  text: `Vintage Eddie Bauer outerwear has become increasingly appreciated because it comes from a period when American outdoor clothing still felt deeply material-driven: practical, robust, and not yet over-designed. This jacket captures that especially well. The proportions are generous without feeling bulky, the blue tone has a strong period feel, and the wool-trimmed hood gives it an added sense of richness.

Although Eddie Bauer’s expedition history includes famous outerwear like the Kara Koram Parka, it is best not to overstate the model name unless the garment is clearly labelled as such. Even without making that claim, this piece stands firmly in that heritage. It reflects the era when Eddie Bauer’s identity was strongly tied to down outerwear and serious cold-weather design.

What makes this example especially desirable is the condition. Many vintage puffers survive with issues: flat insulation, damage, or tired fabric. This one avoids that. In perfect condition, it keeps the visual authority of old American outdoor clothing while still being genuinely easy to wear now. It has pedigree, preservation, and that quiet confidence that great vintage outerwear always carries.`,
},
  },
  {
    slug: "45rpm-japanese-selvedge-denim-soft-fade",
    name: "45RPM Japanese Selvedge Denim soft fade",
    price: "£930",
    sold: true,
    category: "Denim",
    size: "34",
    description:
      "A beautifully faded pair of 45RPM selvedge denim with soft texture, natural wear, and the understated depth that defines early Japanese denim at its best.",
    heroImage: "https://storage.googleapis.com/curated-assets/45RPM2/front45RPM2-1_converted.avif",
    backImage: "https://storage.googleapis.com/curated-assets/45RPM2/back45RPM2-2_converted.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-9_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-8_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-6_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-5_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-4_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-3_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-2_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-22_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-21_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-20_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-19_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-18_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-17_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-16_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-15_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-14_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-13_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-12_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-11_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM2/45RPM2-10_converted.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
    objectStudy: {
  title: "Soft fade, quiet depth, and early Japanese denim sensibility.",
  text: `45RPM occupies a special place in Japanese denim. It is one of the labels associated with the early rise of Japanese craft-led denim culture, known less for aggressive repro styling and more for texture, softness, and a quieter kind of sophistication. The brand helped define a side of Japanese denim that values fabric character as much as historical reference.

This pair feels especially strong because the wear has settled so naturally. The fading is convincing rather than forced, and the distressing reads as the outcome of long use rather than styling. Good denim wear is really about rhythm: where the fabric has thinned, where the indigo has broken, and how the whole pair still holds together visually. This one has that balance.

There is also something very 45RPM about softer, more nuanced denim. Rather than shouting through contrast alone, the jeans develop a kind of ease. The fabric relaxes, the drape improves, and the overall impression becomes more elegant than overt. This is a pair for someone who understands that the best denim does not always need to be loud to feel exceptional.`,
},
  },
  {
    slug: "45rpm-japanese-selvedge-denim-hard-fade",
    name: "45rpm Japanese Selvedge Denim hard fade",
    price: "£1,050",
    sold: true,
    category: "Denim",
    size: "32",
    description:
      "A rugged pair of 45RPM selvedge denim with stronger contrast, heavier distressing, and a sharper fade pattern that gives the fabric real presence.",
    heroImage: "https://storage.googleapis.com/curated-assets/45RPM1/Front45rpm.avif",
    backImage: "https://storage.googleapis.com/curated-assets/45RPM1/back45rpm.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-9_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-8_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-7_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-6_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-5_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-4_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-3_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-21_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-20_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-19_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-18_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-17_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-16_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-15_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-14_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-13_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-12_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-11_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-10_converted.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
    objectStudy: {
  title: "A harder fade with more visible life in the cloth.",
  text: `Where the other 45RPM pair feels softer and more settled, this one has a stronger, more rugged personality. The appeal here is the higher contrast: more visible abrasion, more obvious break-in, and a more worked-in feel across the leg. It still carries the thoughtful Japanese denim sensibility the brand is known for, but the presentation is sharper and more immediate.

On a pair like this, distressing becomes part of the composition. Fray, edge wear, puckering, and tonal variation all combine to create a more graphic look. Some vintage denim feels nostalgic; this feels active. It still has energy in it, which gives it a very different kind of presence from softer fade patterns.

45RPM has always been appreciated for its textile intelligence, and this pair shows that through wear. When a well-made selvedge fabric is used hard over time, it reveals the quality of the yarn, weave, and dye process. The indigo does not just disappear; it breaks gradually, leaving behind a far more interesting surface than ordinary denim. This pair has that kind of depth.`,
},
  },
  {
    slug: "KAPITAL-selvedge-denim",
    name: "Kapital Distressed Selvedge Denim",
    price: "£980",
    sold: true,
    category: "Denim",
    size: "32",
    description:
      "A minimally faded and distressed pair of Kapital selvedge denim, balancing Japanese denim craft with the brand’s unmistakable ease, texture, and slightly off-centre character.",
    heroImage: "https://storage.googleapis.com/curated-assets/KAPITAL/frontKAPTIAL-1_converted.avif",
    backImage: "https://storage.googleapis.com/curated-assets/KAPITAL/backKAPTIAL-2_converted.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-9_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-8_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-6_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-5_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-4_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-3_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-16_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-15_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-14_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-13_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-12_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-11_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-10_converted.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
    objectStudy: {
  title: "Kapital’s eccentricity grounded in serious denim craft.",
  text: `Kapital became one of the most recognisable names in Japanese denim by refusing to treat denim as just a reproduction exercise. Although rooted in the same wider culture that elevated Japanese selvedge to global prestige, Kapital developed a voice of its own: playful, irreverent, and deeply informed by textile knowledge rather than strict imitation alone.

That is why Kapital pieces age so well visually. Even when they are straightforward by the brand’s standards, there is usually something in the cut, fabric, or finish that feels slightly off-centre in the best way. On this pair, the fading and distressing do most of the talking. The wear gives the denim movement and irregularity, which suits Kapital particularly well because the brand has always been comfortable with personality and imperfection.

The best older Japanese denim tends to reveal more the longer you look at it. This pair has that quality. You notice the broad appeal first: Subtle fade, good texture, convincing age. Then the smaller details begin to matter more: the way the fabric collapses, where the indigo has held, and how the distressing interacts with the rest of the leg. It is expressive, easy to wear, and unmistakably Kapital.`,
},
  },
  {
    slug: "evisu-selvedge-denim",
    name: "Vintage Evis Era Evisu Selvedge Denim",
    price: "£980",
    sold: true,
    category: "Denim",
    size: "32",
    description:
      "A faded vintage pair from Evis-era Evisu, prized for its early label, strong selvedge pedigree, and the kind of wear that gives old Japanese denim real depth.",
    heroImage: "https://storage.googleapis.com/curated-assets/EVISU/frontEVISU-1_converted.avif",
    backImage: "https://storage.googleapis.com/curated-assets/EVISU/backEVISU-2_converted.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-9_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-8_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-7_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-6_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-5_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-4_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-3_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-19_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-18_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-17_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-16_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-15_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-14_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-13_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-12_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-11_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-10_converted.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
    objectStudy: {
  title: "Early Evis-era denim with collector appeal and real wear.",
  text: `Older Evisu is one of the key names in Japanese denim collecting, and an early pair from the Evis-era only adds to that appeal. Before the brand became fully global and highly recognisable through louder signatures, it had a slightly rawer energy that many collectors still prefer. A tag that simply reads Evis places this pair closer to that earlier period.

What makes this one especially good is that it avoids feeling too pristine. Evisu denim often looks best once the fabric has settled and the indigo has broken properly. The fading and distressing here give the jeans depth, which suits a label so tied to denim culture rather than simple fashion branding. It feels closer to the purpose of the cloth.

There is also something pleasing about Evisu’s balance between reverence and boldness. The brand draws from old construction methods and selvedge traditions, but it never feels timid. On a worn pair like this, that tension resolves beautifully. The louder associations fall away, and what remains is simply strong Japanese denim with age, texture, and provenance. This is the kind of pair that works for both collectors and people who just want genuinely good old denim.`,
},
  },
  {
    slug: "LEVI'S-big-e-made-in-usa-denim-8",
    name: "Big E Levi’s 501 Made in USA Factory Code 8",
    price: "£940",
    sold: true,
    category: "Denim",
    size: "32",
    description:
      "A faded Big E Levi’s 501 made in the USA, with factory code 8 hardware and the balanced wear that makes vintage 501s endlessly collectable.",
    heroImage: "https://storage.googleapis.com/curated-assets/LEVISBIGE2/frontLEVISBIGE2-1_converted.avif",
    backImage: "https://storage.googleapis.com/curated-assets/LEVISBIGE2/backLEVISBIGE2-2_converted.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-9_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-8_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-7_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-6_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-5_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-4_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-3_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-17_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-16_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-15_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-14_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-13_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-12_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-11_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE2/LEVISBIGE2-10_converted.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
    objectStudy: {
  title: "An American icon, made personal through wear and detail.",
  text: `There are few garments as foundational as a vintage Levi’s 501. The Big E tab remains one of the clearest and most dearest markers in Levi’s history, instantly placing a pair within an earlier and more collectible period of production. That detail alone carries real weight, but what makes a pair memorable is usually the wear.

This example stands out through balance. The fading and distressing give it the kind of vintage authority people look for in a 501 without pushing it too far into costume. The strength of the model has always been its simplicity: straight leg, balanced rise, no unnecessary detail. When a pair wears properly, that simplicity becomes the whole point.

The factory code 8 stamped button adds another layer for those who appreciate production detail. With vintage Levi’s, these small specifics are part of the charm. They make each pair feel more individual inside such a well-known model. This one has exactly the kind of honest wear and easy confidence that makes a good 501 feel permanent rather than nostalgic.`,
},
  },
  {
    slug: "LEVI'S-big-e-made-in-usa-denim-4",
    name: "Big E Levi’s 501 Made in USA Factory Code 4",
    price: "£940",
    sold: true,
    category: "Denim",
    size: "32",
    description:
      "A more rugged Big E Levi’s 501 made in the USA, with factory code 4 hardware, heavier wear, and a tougher, more broken-in vintage character.",
    heroImage: "https://storage.googleapis.com/curated-assets/LEVISBIGE1/frontLEVISBIGE1-1_converted.avif",
    backImage: "https://storage.googleapis.com/curated-assets/LEVISBIGE1/backLEVISBIGE1-2_converted.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/LEVISBIGE1/LEVISBIGE1-9_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE1/LEVISBIGE1-8_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE1/LEVISBIGE1-7_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE1/LEVISBIGE1-6_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE1/LEVISBIGE1-5_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE1/LEVISBIGE1-4_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE1/LEVISBIGE1-3_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE1/LEVISBIGE1-15_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE1/LEVISBIGE1-14_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE1/LEVISBIGE1-13_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE1/LEVISBIGE1-12_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE1/LEVISBIGE1-11_converted.avif",
      "https://storage.googleapis.com/curated-assets/LEVISBIGE1/LEVISBIGE1-10_converted.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
    objectStudy: {
  title: "A rougher Big E 501 with a more lived-in edge.",
  text: `Like the other pair, this one carries the core appeal of a true Big E 501: American-made, earlier-era Levi’s, and one of the purest jean silhouettes ever produced. But where one pair leans more balanced and composed, this one feels rougher and more visibly broken down. The fade has more tension in it, with a stronger sense of abrasion and use.

That difference matters because not all vintage 501s speak in the same way. Some feel clean and timeless; others feel as though they have been dragged through a life. This pair belongs to the second group. The distressing gives it atmosphere, but it still feels grounded rather than theatrical. It reads as honest denim history, not decoration.

The factory code 4 stamped button gives the pair another level of specificity. These are the small details that seasoned denim buyers always notice, and they help distinguish one strong pair from another in the wider world of vintage Levi’s. This one offers the familiar authority of a Big E 501, but with a slightly familiar, more lived-in mood.`,
},
  },
  {
    slug: "APC-selvedge-denim-faded-wash",
    name: "A.P.C. Selvedge Denim Faded",
    price: "£300",
    sold: true,
    category: "Denim",
    size: "32",
    description:
      "A faded pair of A.P.C. selvedge denim with clean lines, softened structure, and the quiet, understated wear that suits the label’s minimal approach perfectly.",
    heroImage: "https://storage.googleapis.com/curated-assets/APCFADED/frontAPCFADED-1_converted.avif",
    backImage: "https://storage.googleapis.com/curated-assets/APCFADED/backAPCFADED-2_converted.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/APCFADED/APCFADED-9_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCFADED/APCFADED-8_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCFADED/APCFADED-7_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCFADED/APCFADED-6_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCFADED/APCFADED-5_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCFADED/APCFADED-4_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCFADED/APCFADED-3_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCFADED/APCFADED-15_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCFADED/APCFADED-14_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCFADED/APCFADED-13_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCFADED/APCFADED-12_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCFADED/APCFADED-11_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCFADED/APCFADED-10_converted.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
    objectStudy: {
  title: "A.P.C. at its best: restrained, faded, and easy to live with.",
  text: `A.P.C. built its reputation on doing denim without noise. The label’s selvedge jeans are rooted in Japanese fabric and classic five-pocket construction, but the real strength lies in the restraint: clean lines, minimal branding, and an emphasis on fabric and fit over decoration. That clarity is exactly what made A.P.C. so important.

This faded pair shows what happens when that discipline softens properly. The indigo has opened up, the structure has relaxed, and the jeans have moved from rigid minimalism into something easier and more personal. The wear is present, but it does not overwhelm the pair. Instead, it gives the denim depth while preserving the calm identity of the brand.

Compared with more overtly heritage-led Japanese labels, A.P.C. tends to appeal to people who want selvedge denim without the performance of selvedge denim. That is what makes a faded pair like this so useful. You get the beauty of time and fabric, but in a cleaner, more understated register. It is the kind of old denim that still feels completely relevant.`,
},
  },
  {
    slug: "APC-selvedge-denim-minimal-wash",
    name: "A.P.C. Selvedge Denim Minimal Wash",
    price: "£300",
    sold: true,
    category: "Denim",
    size: "32",
    description:
      "A minimally washed pair of A.P.C. selvedge denim with deep indigo retention, sharp structure, and the crisp simplicity that made the brand a modern classic.",
    heroImage: "https://storage.googleapis.com/curated-assets/APCNEW/frontAPCDC-1_converted.avif",
    backImage: "https://storage.googleapis.com/curated-assets/APCNEW/backAPCDC-2_converted.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/APCNEW/APCDC-9_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCNEW/APCDC-8_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCNEW/APCDC-7_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCNEW/APCDC-6_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCNEW/APCDC-5_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCNEW/APCDC-4_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCNEW/APCDC-3_converted.avif",
      "https://storage.googleapis.com/curated-assets/APCNEW/APCDC-10_converted.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
    objectStudy: {
  title: "Dark, structured, and close to the original intention.",
  text: `If the faded A.P.C. pair shows the afterlife of the brand, this one shows the starting point. The appeal of minimally washed A.P.C. denim lies in its clarity: deep indigo retention, sharp structure, and a cleaner overall read that stays close to the original design language. It feels disciplined in the best way.

Because the washing is minimal, the fabric still holds much of its original strength. The seams look sharper, the tone remains richer, and the pair leaves room for the next owner to shape it further. For many buyers, this is the ideal point to buy older selvedge: old enough to have substance, not so worn that all the story has already been written.

What sets A.P.C. apart is that it never depended on overt vintage signalling. No loud branding, no reproduction theatre, no unnecessary flourish. Just good denim, good cut, and time. That makes a pair like this especially versatile. It sits just as easily with tailoring and knitwear as it does with workwear or military pieces. It is discreet, serious, and easy to trust.`,
},
  },
];