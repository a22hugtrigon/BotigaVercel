const data={
    "productos": [
      {
        "id": 1,
        "imagen": "https://nude-project.com/cdn/shop/products/oreganobrown2_a5f97284-1bdd-4f79-a59e-35635c6b44fd.png?v=1677173272",
        "nombre": "Producto 1",
        "desc": "Descripción del Producto 1",
        "precio": 19.99,
        "cantidad":0

      },
      {
        "id": 2,
        "imagen": "https://fakegodsbrand.com/cdn/shop/products/ZIPPERDEL_1024x1024.png?v=1679416355",
        "nombre": "Producto 2",
        "desc": "Descripción del Producto 2",
        "precio": 29.99,
        "cantidad":0

      },
      {
        "id": 3,
        "imagen": "https://fakegodsbrand.com/cdn/shop/products/hoodiedelante.jpg?v=1658417448",
        "nombre": "Producto 3",
        "desc": "Descripción del Producto 3",
        "precio": 14.99,
        "cantidad":0

      },
      {
        "id": 4,
        "imagen": "https://fakegodsbrand.com/cdn/shop/products/HOODCREAMDET.png?v=1679417250",
        "nombre": "Producto 4",
        "desc": "Descripción del Producto 4",
        "precio": 24.99,
        "cantidad":0

      },
      {
        "id": 5,
        "imagen": "https://fakegodsbrand.com/cdn/shop/files/hoodgrisoscurodet_1024x1024.png?v=1695219950",
        "nombre": "Producto 5",
        "desc": "Descripción del Producto 5",
        "precio": 9.99,
        "cantidad":0

      },
      {
        "id": 6,
        "imagen": "https://fakegodsbrand.com/cdn/shop/products/HOODMONOCHROMEMARRONDEL_1024x1024.png?v=1679482073",
        "nombre": "Producto 6",
        "desc": "Descripción del Producto 6",
        "precio": 34.99,
        "cantidad":0

      },
      {
        "id": 7,
        "imagen": "https://fakegodsbrand.com/cdn/shop/products/HOODNEGRADET_2e8f9faf-2d14-4e68-9930-6f0b668d5528.png?v=1679482239",
        "nombre": "Producto 7",
        "desc": "Descripción del Producto 7",
        "precio": 17.99,
        "cantidad":0

      },
      {
        "id": 8,
        "imagen": "https://fakegodsbrand.com/cdn/shop/files/hoodnegradet_59428008-594f-49b8-bb43-174bd8269a62_1024x1024.png?v=1695219956",
        "nombre": "Producto 8",
        "desc": "Descripción del Producto 8",
        "precio": 12.99,
        "cantidad":0

      },
      {
        "id": 9,
        "imagen": "https://fakegodsbrand.com/cdn/shop/files/caminaranjadel_1024x1024.png?v=1684856307",
        "nombre": "Producto 9",
        "desc": "Descripción del Producto 9",
        "precio": 39.99,
        "cantidad":0

      },
      {
        "id": 10,
        "imagen": "https://fakegodsbrand.com/cdn/shop/files/camisadetroja_1024x1024.png?v=1688573193",
        "nombre": "Producto 10",
        "desc": "Descripción del Producto 10",
        "precio": 22.99,
        "cantidad":0

      },
      {
        "id": 11,
        "imagen": "https://fakegodsbrand.com/cdn/shop/files/camisadet_1024x1024.png?v=1693414536",
        "nombre": "Producto 11",
        "desc": "Descripción del Producto 11",
        "precio": 15.99,
        "cantidad":0

      },
      {
        "id": 12,
        "imagen": "https://fakegodsbrand.com/cdn/shop/files/camiazuldet_0b53c6e4-e2b3-4298-bf85-4b23d6e79791_1024x1024.png?v=1693414542",
        "nombre": "Producto 12",
        "desc": "Descripción del Producto 12",
        "precio": 27.99,
        "cantidad":0

      },
      {
        "id": 13,
        "imagen": "https://fakegodsbrand.com/cdn/shop/files/camimarrondet_1024x1024.png?v=1689423079",
        "nombre": "Producto 13",
        "desc": "Descripción del Producto 13",
        "precio": 10.99,
        "cantidad":0

      },
      {
        "id": 14,
        "imagen": "https://cld.accentuate.io/7508916371617/1679048304729/TOPS_0000s_0000s_0163_NOT-SORRY-GREY-2-copia.png?v=1679048304729&options=&transform=resize=160",
        "nombre": "Producto 14",
        "desc": "Descripción del Producto 14",
        "precio": 32.99,
        "cantidad":0

      },
      {
        "id": 15,
        "imagen": "https://cld.accentuate.io/7508916502689/1679048513752/TOPS_0000s_0000s_0164_NOT-SORRY-CREMAdetras-1_1800x1800_ff186e14-7cc4-44f5-967a-51218126d3d4-copia.png?v=1679048513752&options=&transform=resize=160",
        "nombre": "Producto 15",
        "desc": "Descripción del Producto 15",
        "precio": 19.99,
        "cantidad":0

      },
      {
        "id": 16,
        "imagen": "https://cld.accentuate.io/8370401935684/1684749665666/OLD-SPORT-TEE-WHITE-back.png?v=1684749665666&options=&transform=resize=160",
        "nombre": "Producto 16",
        "desc": "Descripción del Producto 16",
        "precio": 44.99,
        "cantidad":0

      },
      {
        "id": 17,
        "imagen": "https://vanidad.es/images/carpeta_gestor/archivos/2023/03/14/vanidad_padre_4.png",
        "nombre": "Producto 17",
        "desc": "Descripción del Producto 17",
        "precio": 21.99,
        "cantidad":0

      },
      {
        "id": 18,
        "imagen": "https://nude-project.com/cdn/shop/products/varsityblue1_8552c832-1a4c-408e-b862-0ec393e57e3d_600x.png?v=1678292713",
        "nombre": "Producto 18",
        "desc": "Descripción del Producto 18",
        "precio": 16.99,
        "cantidad":0
      }
    
    ]
  }
  
export async function getProductos(){
   
    return data.productos;
}
