export type Category = { slug: string; title: string; emoji: string };
export type Subcategory = { slug: string; title: string };

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: "perros" | "gatos" | "aves";
  subcategory: "adulto" | "cachorro" | "senior" | "raza-pequeña" | "gatito" | "esterilizado" | "otro";
  weight: string;
  image: string;
  tags: Array<"nuevo" | "popular" | "premium" | "destacado" | "oferta">;
};

export const categories: Category[] = [
  { slug: "perros", title: "Perros", emoji: "🐕" },
  { slug: "gatos",  title: "Gatos",  emoji: "🐈" },
];

export const subcategoriesPerro: Subcategory[] = [
  { slug: "todos",       title: "Todos"        },
  { slug: "adulto",      title: "Adulto"       },
  { slug: "cachorro",    title: "Cachorro"     },
  { slug: "senior",      title: "Senior"       },
  { slug: "raza-pequeña",title: "Raza Pequeña" },
];

export const subcategoriesGato: Subcategory[] = [
  { slug: "todos",        title: "Todos"       },
  { slug: "adulto",       title: "Adulto"      },
  { slug: "gatito",       title: "Gatito"      },
  { slug: "esterilizado", title: "Esterilizado"},
];

// Imágenes genéricas por especie
const IMG_PERRO = "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80";
const IMG_GATO  = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80";

// Imágenes reales de marcas (via animania.cl / jumbo.cl)
const IMG_MASTER_DOG   = "https://dojiw2m9tvv09.cloudfront.net/10212/product/M_web-master-dog-carne8162.jpg";
const IMG_DOG_CHOW     = "https://jumbocl.vtexassets.com/arquivos/ids/384650-900-900?width=600&height=600&aspect=true";
const IMG_MASTIN       = "https://dojiw2m9tvv09.cloudfront.net/10212/product/M_web-mastin-pollo5230.jpg";
const IMG_NOMADE       = "https://dojiw2m9tvv09.cloudfront.net/10212/product/M_web-nomade-adulto0800.jpg";
const IMG_FIT          = "https://dojiw2m9tvv09.cloudfront.net/10212/product/M_web-fit-adulto9888.jpg";
const IMG_GUARDIAN     = "https://dojiw2m9tvv09.cloudfront.net/10212/product/M_web-guardian-adulto-nueva-18372.jpg";
const IMG_JOSERA       = "https://dojiw2m9tvv09.cloudfront.net/10212/product/M_joseraregular9961.jpg";
const IMG_CAT_CHOW     = "https://dojiw2m9tvv09.cloudfront.net/10212/product/M_catchowpescadoni1984.jpg";
const IMG_MASTER_CAT   = "https://dojiw2m9tvv09.cloudfront.net/10212/product/M_web-master-cat-carne1013.jpg";
const IMG_SABROCAT     = "https://dojiw2m9tvv09.cloudfront.net/10212/product/M_web-sabrocat1338.jpg";
const IMG_CHAMPION_CAT = "https://dojiw2m9tvv09.cloudfront.net/10212/product/M_web-champion-cat-adulto-carne18977.jpg";

export const products: Product[] = [
  // ─────────────────────────────────────────────
  // PERROS — MASTER DOG
  // ─────────────────────────────────────────────
  { id:"p-md-01", name:"Master Dog Adulto Carne",              brand:"Master Dog", category:"perros", subcategory:"adulto",       weight:"18 kg",   image:IMG_MASTER_DOG, tags:["popular"] },
  { id:"p-md-02", name:"Master Dog Adulto Pollo",              brand:"Master Dog", category:"perros", subcategory:"adulto",       weight:"18 kg",   image:"https://static.wixstatic.com/media/3b9c32_598cd4fd04fd4f45a777d0dbc7c29dd3~mv2.png/v1/fit/w_500,h_500,q_90/file.png", tags:[] },
  { id:"p-md-03", name:"Master Dog Adulto Raza Pequeña Carne", brand:"Master Dog", category:"perros", subcategory:"raza-pequeña", weight:"18 kg",   image:"https://www.befoods.cl/cdn/shop/files/e9a5baea-c033-4779-9f8f-07b5bf36e1ee.jpg?v=1753706564", tags:[] },
  { id:"p-md-04", name:"Master Dog Senior Carne",              brand:"Master Dog", category:"perros", subcategory:"senior",       weight:"18 kg",   image:"https://www.distribuidoralira.cl/wp-content/uploads/2025/03/MASTERDOG-SENIOR_1_RAZA_GRANDE-2.jpg", tags:[] },
  { id:"p-md-05", name:"Master Dog Senior",                    brand:"Master Dog", category:"perros", subcategory:"senior",       weight:"18 kg",   image:"https://www.distribuidoralira.cl/wp-content/uploads/2025/03/MASTERDOG-SENIOR_1_RAZA_GRANDE-2.jpg", tags:[] },
  { id:"p-md-06", name:"Master Dog Cachorro",                  brand:"Master Dog", category:"perros", subcategory:"cachorro",     weight:"18 kg",   image:"https://www.distribuidoralira.cl/wp-content/uploads/2025/03/MASTER_DOG_CACHORRO_RAZA_MEDIANA_1.jpg", tags:[] },
  { id:"p-md-07", name:"Master Dog Raza Pequeña",              brand:"Master Dog", category:"perros", subcategory:"raza-pequeña", weight:"8 kg",    image:"https://fullerton.cl/wp-content/uploads/2019/05/MASTER-DOG-ADULTO-RAZA-PEQUE%C3%91A-X-8-KG.jpg", tags:[] },
  { id:"p-md-08", name:"Master Dog Cachorro",                  brand:"Master Dog", category:"perros", subcategory:"cachorro",     weight:"8 kg",    image:"https://fullerton.cl/wp-content/uploads/2019/04/M.Dog-Cachorros-Razas-Medianas-8kg_resize-1.jpg", tags:[] },
  { id:"p-md-09", name:"Master Dog Senior",                    brand:"Master Dog", category:"perros", subcategory:"senior",       weight:"8 kg",    image:"https://fullerton.cl/wp-content/uploads/2019/04/MASTER-DOG-SENIOR-X-8-KG.jpg", tags:[] },
  { id:"p-md-10", name:"Master Dog Al Granel",                 brand:"Master Dog", category:"perros", subcategory:"adulto",       weight:"A granel", image:IMG_MASTER_DOG, tags:[] },

  // PERROS — CHAMPION DOG
  { id:"p-cd-01", name:"Champion Dog Adulto Carne",            brand:"Champion Dog", category:"perros", subcategory:"adulto",       weight:"18 kg", image:"https://fullerton.cl/wp-content/uploads/2020/12/CC-18k-500x500.jpg", tags:["destacado"] },
  { id:"p-cd-02", name:"Champion Dog Cachorro Carne y Leche",  brand:"Champion Dog", category:"perros", subcategory:"cachorro",     weight:"18 kg", image:"https://cdnx.jumpseller.com/la-mascota/image/58557608/Champion_Cachorro__1_.png?1734983841", tags:[] },
  { id:"p-cd-03", name:"Champion Dog Senior Carne",            brand:"Champion Dog", category:"perros", subcategory:"senior",       weight:"18 kg", image:"https://www.befoods.cl/cdn/shop/files/5_04130dc9-3c38-4c6f-86c1-4e284ad4bf7c.png?v=1753707207", tags:[] },
  { id:"p-cd-04", name:"Champion Dog Adulto Raza Pequeña",     brand:"Champion Dog", category:"perros", subcategory:"raza-pequeña", weight:"18 kg", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-Qcw1EB3t59klmBGC3POIKazSbtrinul0fGrRHXMHA&s=10", tags:[] },

  // PERROS — SABROKAN
  { id:"p-sk-01", name:"Sabrokan Adulto Carne",   brand:"Sabrokan", category:"perros", subcategory:"adulto",   weight:"25 kg", image:"https://i0.wp.com/petfoodcartagena.cl/wp-content/uploads/2023/08/img_1207.png?fit=1000%2C1000&ssl=1", tags:["popular"] },
  { id:"p-sk-02", name:"Sabrokan Adulto Carne",   brand:"Sabrokan", category:"perros", subcategory:"adulto",   weight:"18 kg", image:"/products/sabrokan.jpg", tags:[] },
  { id:"p-sk-03", name:"Sabrokan Adulto",         brand:"Sabrokan", category:"perros", subcategory:"adulto",   weight:"9 kg",  image:"https://unimarc.vtexassets.com/arquivos/ids/258025/000000000000959678-UN-01.jpg?v=639131780117470000", tags:[] },
  { id:"p-sk-04", name:"Sabrokan Cachorro",       brand:"Sabrokan", category:"perros", subcategory:"cachorro", weight:"8 kg",  image:"https://http2.mlstatic.com/D_NQ_NP_931605-MLC75049037010_032024-O.webp", tags:[] },

  // PERROS — MASTÍN
  { id:"p-mt-01", name:"Mastín Adulto",            brand:"Mastín", category:"perros", subcategory:"adulto",       weight:"22 kg", image:IMG_MASTIN, tags:[] },
  { id:"p-mt-02", name:"Mastín Senior",            brand:"Mastín", category:"perros", subcategory:"senior",       weight:"20 kg", image:"https://www.distribuidoralira.cl/wp-content/uploads/2025/03/mastinsenior22-kg.jpg", tags:[] },
  { id:"p-mt-03", name:"Mastín Cachorro",          brand:"Mastín", category:"perros", subcategory:"cachorro",     weight:"15 kg", image:"https://cdnx.jumpseller.com/pet-bj/image/12968418/resize/810/810?1652276741", tags:[] },
  { id:"p-mt-04", name:"Mastín Adulto Raza Peq.",  brand:"Mastín", category:"perros", subcategory:"raza-pequeña", weight:"10 kg", image:"https://cdnx.jumpseller.com/pet-bj/image/73671236/mastin_20rz_20peq.jpeg?1771883729", tags:[] },

  // PERROS — NOMADE
  { id:"p-nm-01", name:"Nomade Adulto Carne",           brand:"Nomade", category:"perros", subcategory:"adulto",       weight:"20 kg",    image:"https://www.clubdeperrosygatos.cl/wp-content/uploads/2024/01/Nomade-Perro-Adulto-20kg.webp", tags:[] },
  { id:"p-nm-02", name:"Nomade Adulto Al Granel",       brand:"Nomade", category:"perros", subcategory:"adulto",       weight:"A granel", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJdgXwQ5NBs6vsRIknQm8B6-gZ6WGF09wzj87JLYDMGHpqs4UxcgjMPAE&s=10", tags:[] },
  { id:"p-nm-03", name:"Nomade Adulto Raza Pequeña",    brand:"Nomade", category:"perros", subcategory:"raza-pequeña", weight:"10 kg",    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rKwCkpicAAPjb4opR6JLas4HWFixBwOHlUJTffhEjS-D235OQqDDsGYQ&s=10", tags:[] },
  { id:"p-nm-04", name:"Nomade Cachorro",               brand:"Nomade", category:"perros", subcategory:"cachorro",     weight:"10 kg",    image:"https://cdnx.jumpseller.com/mazcolovers/image/65258185/Nuevo-NOMADE_Cachorro-1.png?1752125032", tags:[] },

  // PERROS — FIT
  { id:"p-ft-01", name:"Fit Adulto Carne",               brand:"Fit", category:"perros", subcategory:"adulto",       weight:"20 kg", image:"https://www.tusmascotas.cl/wp-content/uploads/2025/01/Fit-Formula-20-kg-OK.png", tags:[] },
  { id:"p-ft-02", name:"Fit Adulto Raza Pequeña",        brand:"Fit", category:"perros", subcategory:"raza-pequeña", weight:"10 kg", image:"https://www.distribuidoralira.cl/wp-content/uploads/2025/03/FF-ADULTO-RP-10-Kg-002-scaled-1.jpg", tags:[] },
  { id:"p-ft-03", name:"Fit Senior Raza Pequeña",        brand:"Fit", category:"perros", subcategory:"senior",       weight:"10 kg", image:"https://www.distribuidoralira.cl/wp-content/uploads/2025/03/FF-SENIOR-RP-10-Kg-002-scaled-1.jpg", tags:[] },
  { id:"p-ft-04", name:"Fit Cachorro",                   brand:"Fit", category:"perros", subcategory:"cachorro",     weight:"10 kg", image:"https://www.distribuidoralira.cl/wp-content/uploads/2025/03/FF-CACHORRO-10-Kg-scaled-1.jpg", tags:[] },
  { id:"p-ft-05", name:"Fit Senior Raza Med-Grande",     brand:"Fit", category:"perros", subcategory:"senior",       weight:"20 kg", image:"https://www.distribuidoralira.cl/wp-content/uploads/2025/03/FF-SENIOR-20-Kg-scaled.jpg", tags:[] },

  // PERROS — ALFA
  { id:"p-al-01", name:"Alfa Premium Raza Med-Grande",   brand:"Alfa", category:"perros", subcategory:"adulto",       weight:"20 kg", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTra_KOcZMmLrIkLXrBXscTmsIT62le43hcAvNrXjyXjg&s=10", tags:["premium"] },
  { id:"p-al-02", name:"Alfa Dog Raza Med-Grande",       brand:"Alfa", category:"perros", subcategory:"adulto",       weight:"25 kg", image:"https://peton-line.cl/wp-content/uploads/2023/01/ALFA-DOG-TRADICIONAL-25-KG.png", tags:[] },
  { id:"p-al-03", name:"Alfa Adulto Raza Pequeña",       brand:"Alfa", category:"perros", subcategory:"raza-pequeña", weight:"10 kg", image:"https://www.labodeguitaonline.cl/wp-content/uploads/2019/08/25.png", tags:[] },
  { id:"p-al-04", name:"Alfa Senior Raza Pequeña",       brand:"Alfa", category:"perros", subcategory:"senior",       weight:"10 kg", image:"https://cdnx.jumpseller.com/todo-para-su-mascota/image/77210508/X_71579704984.jpg?1780082008", tags:[] },
  { id:"p-al-05", name:"Alfa Cachorro Raza Pequeña",     brand:"Alfa", category:"perros", subcategory:"cachorro",     weight:"10 kg", image:"https://petvet.cl/cdn/shop/files/alfa-dog-premium-cachorro-razas-pequenas-759908.jpg?v=1717247170", tags:[] },
  { id:"p-al-06", name:"Alfa Dog Adulto",                brand:"Alfa", category:"perros", subcategory:"adulto",       weight:"3 kg",  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflYbhp0ffGG4qUezb6DbwuIrPlukigsczSZZn7nFY4A&s=10", tags:[] },
  { id:"p-al-07", name:"Alfa Dog Adulto Raza Pequeña",   brand:"Alfa", category:"perros", subcategory:"raza-pequeña", weight:"3 kg",  image:"https://cdnx.jumpseller.com/espacio-pet1/image/61455551/resize/640/640?1742249548", tags:[] },
  { id:"p-al-08", name:"Alfa Dog Cachorro Raza Pequeña", brand:"Alfa", category:"perros", subcategory:"cachorro",     weight:"3 kg",  image:"https://cdnx.jumpseller.com/espacio-pet1/image/61533022/1000086896.jpg?1742387696", tags:[] },

  // PERROS — DOG CHOW
  { id:"p-dc-01", name:"Dog Chow Adulto Carne Med-Grande",  brand:"Dog Chow", category:"perros", subcategory:"adulto",       weight:"19.5 kg", image:"https://puntomascotas.cl/24707/dog-chow-adulto-razas-medianas-grandes-195kg-.jpg", tags:[] },
  { id:"p-dc-02", name:"Dog Chow Adulto Raza Pequeña",      brand:"Dog Chow", category:"perros", subcategory:"raza-pequeña", weight:"19.5 kg", image:"https://zyz.cl/cdn/shop/files/P000119.jpg?v=1717702201&width=840", tags:[] },
  { id:"p-dc-03", name:"Dog Chow Longevo",                  brand:"Dog Chow", category:"perros", subcategory:"senior",       weight:"15 kg",   image:"https://cdnx.jumpseller.com/don-pachon/image/63796580/Longevidad.png?1748235481", tags:[] },
  { id:"p-dc-04", name:"Dog Chow Cachorro Raza Pequeña",    brand:"Dog Chow", category:"perros", subcategory:"cachorro",     weight:"19.5 kg", image:"https://www.distribuidoralira.cl/wp-content/uploads/2025/07/dog-chow-cachorro-mini1-600x600.jpg", tags:[] },
  { id:"p-dc-05", name:"Dog Chow Cachorro Med-Grande",      brand:"Dog Chow", category:"perros", subcategory:"cachorro",     weight:"19.5 kg", image:"https://www.distribuidoralira.cl/wp-content/uploads/2025/09/Dog_Chow_Cachorro_Mediana-Grande.jpg", tags:[] },
  { id:"p-dc-06", name:"Dog Chow Adulto Med-Grande",        brand:"Dog Chow", category:"perros", subcategory:"adulto",       weight:"8 kg",    image:"https://cdnx.jumpseller.com/pet-bj/image/12270962/7613035950597.png?1652458651", tags:[] },
  { id:"p-dc-07", name:"Dog Chow Adulto Raza Pequeña",      brand:"Dog Chow", category:"perros", subcategory:"raza-pequeña", weight:"3 kg",    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87jOLdrDv7v4m72KcbnheuRWMtYzHKXJP3IcMEW60TOvq540DjjgmRPY&s=10", tags:[] },
  { id:"p-dc-08", name:"Dog Chow Longevo",                  brand:"Dog Chow", category:"perros", subcategory:"senior",       weight:"3 kg",    image:"https://fullerton.cl/wp-content/uploads/2021/12/Dog-Chow-adultos-7-Longevidad.jpg", tags:[] },
  { id:"p-dc-09", name:"Dog Chow Cachorro Med-Grande",      brand:"Dog Chow", category:"perros", subcategory:"cachorro",     weight:"3 kg",    image:"https://cdnx.jumpseller.com/pet-bj/image/14008695/DC1.png?1653401138", tags:[] },
  { id:"p-dc-10", name:"Dog Chow Cachorro Raza Pequeña",    brand:"Dog Chow", category:"perros", subcategory:"cachorro",     weight:"3 kg",    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKhnq15WZm7oXAbZkUbTSav7Da9JqlOUVRiYCO6l_c8w&s=10", tags:[] },
  { id:"p-dc-11", name:"Dog Chow Longevo",                  brand:"Dog Chow", category:"perros", subcategory:"senior",       weight:"8 kg",    image:"https://fullerton.cl/wp-content/uploads/2021/12/Dog-Chow-adultos-7-Longevidad.jpg", tags:[] },

  // PERROS — EXCELLENT
  { id:"p-ex-01", name:"Excellent Fórmula",         brand:"Excellent", category:"perros", subcategory:"adulto",   weight:"15 kg", image:"https://http2.mlstatic.com/D_NQ_NP_897098-MLU75722442018_042024-O.webp", tags:[] },
  { id:"p-ex-02", name:"Excellent Pollo y Arroz",   brand:"Excellent", category:"perros", subcategory:"adulto",   weight:"15 kg", image:"https://petvet.cl/cdn/shop/files/purina-excellent-perro-adulto-pollo-arroz-15kg-924865.jpg?v=1714234087", tags:[] },
  { id:"p-ex-03", name:"Excellent Puppy",           brand:"Excellent", category:"perros", subcategory:"cachorro", weight:"12 kg", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtdmJSK2dDP_VCcSDmF8vo_3vthL0-UwpGfzUlUquNL4Z9vlwPGWKgU8&s=10", tags:[] },
  { id:"p-ex-04", name:"Excellent Sensitive Salmón",brand:"Excellent", category:"perros", subcategory:"adulto",   weight:"12 kg", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSq5g-JiuEr3aow1ANQtHaigSnCtsKYkMH0IxKF8CIUiy4hGWhOSDF4-w&s=10", tags:[] },

  // PERROS — JOSERA
  { id:"p-jo-01", name:"Josera Cachorro",   brand:"Josera", category:"perros", subcategory:"cachorro", weight:"18 kg", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLkJjIexkBvpqL-DuuxmeIcbbKXHQcrgQi9fjNBnRPUg&s=10", tags:["premium"] },
  { id:"p-jo-02", name:"Josera Dog Adulto", brand:"Josera", category:"perros", subcategory:"adulto",   weight:"18 kg", image:"https://petvet.cl/cdn/shop/files/josera-josidog-active-18kg-568393_grande.png?v=1714140822", tags:["premium"] },
  { id:"p-jo-03", name:"Josera Festival",   brand:"Josera", category:"perros", subcategory:"adulto",   weight:"12 kg", image:"https://www.distribuidoralira.cl/wp-content/uploads/2025/07/765.webp", tags:[] },

  // PERROS — OTROS
  { id:"p-ba-01", name:"Bávaro Wok",              brand:"Bávaro",    category:"perros", subcategory:"adulto",   weight:"18 kg", image:"https://comogatosyperros.cl/wp-content/uploads/2024/07/Bavaro-work-18kg.png", tags:[] },
  { id:"p-mn-01", name:"Montañez Adulto Carne",   brand:"Montañez",  category:"perros", subcategory:"adulto",   weight:"20 kg", image:"https://entrehuevosyquesos.cl/contenido/uploads/2025/04/70128.webp", tags:[] },
  { id:"p-can-01",name:"Can Adulto Carne",         brand:"Can",       category:"perros", subcategory:"adulto",   weight:"18 kg", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpH5bEpAzJPRerw0LkIHJh4NtzEANJbR9N_ZZAtOugbXcLL-S4SosZYgE&s=10", tags:[] },
  { id:"p-can-02",name:"Can Adulto Cordero",       brand:"Can",       category:"perros", subcategory:"adulto",   weight:"18 kg", image:"https://cdnx.jumpseller.com/family-pets/image/50968106/canadcordero.png?1737468526", tags:[] },
  { id:"p-can-03",name:"Can Cachorro",             brand:"Can",       category:"perros", subcategory:"cachorro", weight:"18 kg", image:"https://cdnx.jumpseller.com/la-mascota/image/58714058/Can_Cachorro.png?1735581858", tags:[] },
  { id:"p-gu-01", name:"Guardián Adulto",          brand:"Guardián",  category:"perros", subcategory:"adulto",   weight:"22 kg", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdtBCQ6w_1fHoXVehiChfPOUEl7fgGgmjjAE5dsA8uQ&s=10", tags:[] },
  { id:"p-gu-02", name:"Guardián Cachorro",        brand:"Guardián",  category:"perros", subcategory:"cachorro", weight:"18 kg", image:"https://cdnx.jumpseller.com/alo-mascotas/image/67573253/resize/1079/1079?1774322049", tags:[] },
  { id:"p-gu-03", name:"Guardián Cachorro",        brand:"Guardián",  category:"perros", subcategory:"cachorro", weight:"8 kg",  image:"https://cdnx.jumpseller.com/family-pets/image/57702582/thumb/1920/1920?1732832770", tags:[] },
  { id:"p-hi-01", name:"Himalaya Adulto Carne",    brand:"Himalaya",  category:"perros", subcategory:"adulto",   weight:"18 kg", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPfH7E9kXfks0VO812BhO8DB5yuOJ4aTSHox-AxbS0A&s=10", tags:[] },
  { id:"p-hi-02", name:"Himalaya Cachorro",        brand:"Himalaya",  category:"perros", subcategory:"cachorro", weight:"18 kg", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQEAy4HSXm2RFXOn13Cew8Xsi--DtnwtekPvWwJ08Nw&s=10", tags:[] },
  { id:"p-hi-03", name:"Himalaya Adulto Carne",    brand:"Himalaya",  category:"perros", subcategory:"adulto",   weight:"10 kg", image:"https://acdn-us.mitiendanube.com/stores/006/864/648/products/fotos-pagina-web-alimentos-1-88fd6763d5827561bd17692627140821-1024-1024.webp", tags:[] },
  { id:"p-hi-04", name:"Himalaya Cachorro",        brand:"Himalaya",  category:"perros", subcategory:"cachorro", weight:"10 kg", image:"https://redpet.cl/wp-content/uploads/2024/12/382-HIMALAYA-FOODS-CACHORRO-18KG.png", tags:[] },
  { id:"p-rg-01", name:"Regal Pet Carne",          brand:"Regal Pet", category:"perros", subcategory:"adulto",   weight:"20 kg", image:"https://zyz.cl/cdn/shop/files/250800.webp?v=1752589754&width=957", tags:[] },
  { id:"p-pg-01", name:"Pedigree Adulto",          brand:"Pedigree",  category:"perros", subcategory:"adulto",   weight:"21 kg", image:"/products/pedigree.jpg", tags:["popular"] },
  { id:"p-pg-02", name:"Pedigree Adulto Raza Peq.",brand:"Pedigree",  category:"perros", subcategory:"raza-pequeña", weight:"21 kg", image:"https://www.distribuidoralira.cl/wp-content/uploads/2025/03/PEDIGREERAZAPEQUENA-1.jpg", tags:[] },
  { id:"p-pg-03", name:"Pedigree Cachorro",        brand:"Pedigree",  category:"perros", subcategory:"cachorro", weight:"21 kg", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5AhMN3v_0nT2RYOwLOboe54tA9r5EIAlIj9O_CN4hnTQg7cTPxICiPw&s=10", tags:[] },
  { id:"p-pg-04", name:"Pedigree Cachorro",        brand:"Pedigree",  category:"perros", subcategory:"cachorro", weight:"15 kg", image:"https://santaisabel.vtexassets.com/arquivos/ids/294614/Alimento-Perro-Cachorro-Pedigree-Carne-Pollo-y-Cereales-15-kg.jpg?v=638240042386070000", tags:[] },

  // ─────────────────────────────────────────────
  // GATOS — CAT CHOW
  // ─────────────────────────────────────────────
  { id:"g-cc-01", name:"Cat Chow Gatitos",  brand:"Cat Chow", category:"gatos", subcategory:"gatito",  weight:"8 kg",    image:IMG_CAT_CHOW, tags:[] },
  { id:"g-cc-02", name:"Cat Chow Gatito",   brand:"Cat Chow", category:"gatos", subcategory:"gatito",  weight:"3 kg",    image:IMG_CAT_CHOW, tags:[] },
  { id:"g-cc-03", name:"Cat Chow Pescado",  brand:"Cat Chow", category:"gatos", subcategory:"adulto",  weight:"19.5 kg", image:IMG_CAT_CHOW, tags:[] },
  { id:"g-cc-04", name:"Cat Chow Pescado",  brand:"Cat Chow", category:"gatos", subcategory:"adulto",  weight:"8 kg",    image:IMG_CAT_CHOW, tags:[] },
  { id:"g-cc-05", name:"Cat Chow Pescado",  brand:"Cat Chow", category:"gatos", subcategory:"adulto",  weight:"3 kg",    image:IMG_CAT_CHOW, tags:[] },

  // GATOS — COSHITO
  { id:"g-co-01", name:"Coshito Salmón", brand:"Coshito", category:"gatos", subcategory:"adulto", weight:"20 kg", image:IMG_GATO, tags:[] },
  { id:"g-co-02", name:"Coshito Salmón", brand:"Coshito", category:"gatos", subcategory:"adulto", weight:"8 kg",  image:IMG_GATO, tags:[] },

  // GATOS — EXCELLENT
  { id:"g-ex-01", name:"Excellent Gato Esterilizado", brand:"Excellent", category:"gatos", subcategory:"esterilizado", weight:"7.5 kg", image:IMG_GATO, tags:[] },
  { id:"g-ex-02", name:"Excellent Gato Urinary",      brand:"Excellent", category:"gatos", subcategory:"esterilizado", weight:"7.5 kg", image:IMG_GATO, tags:[] },

  // GATOS — FIT / FULL CAT / HIMALAYA / MASKOCAT
  { id:"g-ft-01", name:"Fit Gato",      brand:"Fit",      category:"gatos", subcategory:"adulto", weight:"10 kg", image:IMG_FIT, tags:[] },
  { id:"g-fc-01", name:"Full Cat",      brand:"Full Cat", category:"gatos", subcategory:"adulto", weight:"10 kg", image:IMG_GATO, tags:[] },
  { id:"g-fc-02", name:"Full Cat",      brand:"Full Cat", category:"gatos", subcategory:"adulto", weight:"25 kg", image:IMG_GATO, tags:[] },
  { id:"g-hm-01", name:"Himalaya Cat",  brand:"Himalaya", category:"gatos", subcategory:"adulto", weight:"10 kg", image:IMG_GATO, tags:[] },
  { id:"g-mk-01", name:"Maskocat",      brand:"Maskocat", category:"gatos", subcategory:"adulto", weight:"25 kg", image:IMG_GATO, tags:[] },
  { id:"g-mk-02", name:"Maskocat",      brand:"Maskocat", category:"gatos", subcategory:"adulto", weight:"10 kg", image:IMG_GATO, tags:[] },

  // GATOS — MASTER CAT
  { id:"g-mc-01", name:"Master Cat Carne",   brand:"Master Cat", category:"gatos", subcategory:"adulto", weight:"20 kg", image:IMG_MASTER_CAT, tags:["popular"] },
  { id:"g-mc-02", name:"Master Cat Gatito",  brand:"Master Cat", category:"gatos", subcategory:"gatito", weight:"20 kg", image:IMG_MASTER_CAT, tags:[] },
  { id:"g-mc-03", name:"Master Cat Pollo",   brand:"Master Cat", category:"gatos", subcategory:"adulto", weight:"20 kg", image:IMG_MASTER_CAT, tags:[] },
  { id:"g-mc-04", name:"Master Cat Relleno", brand:"Master Cat", category:"gatos", subcategory:"adulto", weight:"20 kg", image:IMG_MASTER_CAT, tags:[] },
  { id:"g-mc-05", name:"Master Cat Salmón",  brand:"Master Cat", category:"gatos", subcategory:"adulto", weight:"20 kg", image:IMG_MASTER_CAT, tags:[] },

  // GATOS — NOMADE / ONE
  { id:"g-nm-01", name:"Nomade Gato",              brand:"Nomade", category:"gatos", subcategory:"adulto", weight:"10 kg", image:IMG_NOMADE, tags:[] },
  { id:"g-on-01", name:"One Gatito",               brand:"One",    category:"gatos", subcategory:"gatito", weight:"2 kg",  image:IMG_GATO, tags:[] },
  { id:"g-on-02", name:"One Gato Pollo y Salmón",  brand:"One",    category:"gatos", subcategory:"adulto", weight:"2 kg",  image:IMG_GATO, tags:[] },

  // GATOS — POEMA CAT
  { id:"g-po-01", name:"Poema Cat Esteril Salmón",          brand:"Poema Cat", category:"gatos", subcategory:"esterilizado", weight:"7 kg", image:IMG_GATO, tags:[] },
  { id:"g-po-02", name:"Poema Cat Urinary y Esteril Salmón",brand:"Poema Cat", category:"gatos", subcategory:"esterilizado", weight:"7 kg", image:IMG_GATO, tags:[] },

  // GATOS — PRO PLAN CAT
  { id:"g-pp-01", name:"Pro Plan Cat Adulto",            brand:"Pro Plan", category:"gatos", subcategory:"adulto",       weight:"7.5 kg", image:"/products/pro-plan.jpg", tags:["premium"] },
  { id:"g-pp-02", name:"Pro Plan Cat Kitten",            brand:"Pro Plan", category:"gatos", subcategory:"gatito",       weight:"7.5 kg", image:"/products/pro-plan.jpg", tags:[] },
  { id:"g-pp-03", name:"Pro Plan Cat Kitten",            brand:"Pro Plan", category:"gatos", subcategory:"gatito",       weight:"1 kg",   image:"/products/pro-plan.jpg", tags:[] },
  { id:"g-pp-04", name:"Pro Plan Cat Esterilizado Salmón",brand:"Pro Plan", category:"gatos", subcategory:"esterilizado", weight:"7.5 kg", image:"/products/pro-plan.jpg", tags:[] },
  { id:"g-pp-05", name:"Pro Plan Cat Urinary Pollo",     brand:"Pro Plan", category:"gatos", subcategory:"esterilizado", weight:"7.5 kg", image:"/products/pro-plan.jpg", tags:[] },

  // GATOS — ROYAL CANIN
  { id:"g-rc-01", name:"Royal Canin Cat Urinary S/O", brand:"Royal Canin", category:"gatos", subcategory:"esterilizado", weight:"1.5 kg", image:IMG_GATO, tags:["premium"] },

  // GATOS — SABROCAT
  { id:"g-sc-01", name:"Sabrocat Pollo", brand:"Sabrocat", category:"gatos", subcategory:"adulto", weight:"20 kg", image:IMG_SABROCAT, tags:[] },
  { id:"g-sc-02", name:"Sabrocat Pollo", brand:"Sabrocat", category:"gatos", subcategory:"adulto", weight:"8 kg",  image:IMG_SABROCAT, tags:[] },

  // GATOS — LEONARDO CAT
  { id:"g-lc-01", name:"Leonardo Cat Adulto Duck",       brand:"Leonardo Cat", category:"gatos", subcategory:"adulto",       weight:"1.8 kg", image:IMG_GATO, tags:[] },
  { id:"g-lc-02", name:"Leonardo Cat Adulto Salmón",     brand:"Leonardo Cat", category:"gatos", subcategory:"adulto",       weight:"1.8 kg", image:IMG_GATO, tags:[] },
  { id:"g-lc-03", name:"Leonardo Cat Kitten",            brand:"Leonardo Cat", category:"gatos", subcategory:"gatito",       weight:"1.8 kg", image:IMG_GATO, tags:[] },
  { id:"g-lc-04", name:"Leonardo Cat Esterilizado Light",brand:"Leonardo Cat", category:"gatos", subcategory:"esterilizado", weight:"1.8 kg", image:IMG_GATO, tags:[] },

  // GATOS — LIVE
  { id:"g-lv-01", name:"Live Adulto Carne",        brand:"Live", category:"gatos", subcategory:"adulto", weight:"15 kg", image:IMG_GATO, tags:[] },
  { id:"g-lv-02", name:"Live Adulto Salmón y Atún",brand:"Live", category:"gatos", subcategory:"adulto", weight:"15 kg", image:IMG_GATO, tags:[] },

  // GATOS — TRIGANO / WHISKAS / CHAMPION CAT
  { id:"g-tr-01", name:"Trigano Gato",           brand:"Trigano",      category:"gatos", subcategory:"adulto", weight:"10 kg", image:IMG_GATO, tags:[] },
  { id:"g-wh-01", name:"Whiskas Carne",           brand:"Whiskas",      category:"gatos", subcategory:"adulto", weight:"10 kg", image:"/products/whiskas.jpg", tags:["popular"] },
  { id:"g-wh-02", name:"Whiskas Gatitos",         brand:"Whiskas",      category:"gatos", subcategory:"gatito", weight:"10 kg", image:"/products/whiskas.jpg", tags:[] },
  { id:"g-wh-03", name:"Whiskas Pescado",         brand:"Whiskas",      category:"gatos", subcategory:"adulto", weight:"10 kg", image:"/products/whiskas.jpg", tags:[] },
  { id:"g-wh-04", name:"Whiskas Pollo y Leche",   brand:"Whiskas",      category:"gatos", subcategory:"adulto", weight:"10 kg", image:"/products/whiskas.jpg", tags:[] },
  { id:"g-chc-01",name:"Champion Cat Carne",      brand:"Champion Cat", category:"gatos", subcategory:"adulto", weight:"20 kg", image:IMG_CHAMPION_CAT, tags:[] },
  { id:"g-chc-02",name:"Champion Cat Gatito",     brand:"Champion Cat", category:"gatos", subcategory:"gatito", weight:"20 kg", image:IMG_CHAMPION_CAT, tags:[] },
  { id:"g-chc-03",name:"Champion Cat Pescado",    brand:"Champion Cat", category:"gatos", subcategory:"adulto", weight:"20 kg", image:IMG_CHAMPION_CAT, tags:[] },
  { id:"g-chc-04",name:"Champion Cat Pollo",      brand:"Champion Cat", category:"gatos", subcategory:"adulto", weight:"20 kg", image:IMG_CHAMPION_CAT, tags:[] },
];
