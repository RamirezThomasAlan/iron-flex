// Datos de la aplicación
const appData = {
    categories: [
        {
            id: 1,
            name: "Ropa Deportiva",
            description: "Ropa cómoda y funcional para tus entrenamientos",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlJvcGEgRGVwb3J0aXZhIChJbWFnZW4gcmVhbCk8L3RleHQ+PC9zdmc+"
        },
        {
            id: 2,
            name: "Suplementos",
            description: "Complementa tu nutrición para mejores resultados",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlN1cGxlbWVudG9zIChJbWFnZW4gcmVhbCk8L3RleHQ+PC9zdmc+"
        },
        {
            id: 3,
            name: "Accesorios",
            description: "Todo lo que necesitas para complementar tu entrenamiento",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFjY2Vzb3Jpb3MgKEltYWdlbiByZWFsKTwvdGV4dD48L3N2Zz4="
        }
    ],
    products: [
        // Productos para Ropa Deportiva
        {
            id: 1,
            categoryId: 1,
            name: "Camiseta Deportiva",
            description: "Camiseta transpirable para entrenamientos intensos",
            price: 25.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNhbWlzZXRhPC90ZXh0Pjwvc3ZnPg==",
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 2,
            categoryId: 1,
            name: "Pantalón Deportivo",
            description: "Pantalón cómodo y flexible para cualquier actividad",
            price: 35.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlBhbnRhbMOzbjwvdGV4dD48L3N2Zz4=",
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 3,
            categoryId: 1,
            name: "Zapatillas Deportivas",
            description: "Calzado con amortiguación para proteger tus articulaciones",
            price: 79.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlphcGF0aWxsYXM8L3RleHQ+PC9zdmc+",
            sizes: ["38", "39", "40", "41", "42", "43", "44"]
        },
        {
            id: 4,
            categoryId: 1,
            name: "Sudadera con Capucha",
            description: "Abrigo perfecto para entrenar en climas fríos",
            price: 45.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlN1ZGFkZXJhPC90ZXh0Pjwvc3ZnPg==",
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 5,
            categoryId: 1,
            name: "Shorts Deportivos",
            description: "Shorts ligeros y transpirables para máxima movilidad",
            price: 22.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlNob3J0czwvdGV4dD48L3N2Zz4=",
            sizes: ["S", "M", "L", "XL"]
        },
        // Productos para Suplementos
        {
            id: 6,
            categoryId: 2,
            name: "Proteína en Polvo",
            description: "Proteína de suero de leche para recuperación muscular",
            price: 39.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb3Rlw61uYTwvdGV4dD48L3N2Zz4=",
            sizes: ["1kg", "2kg", "5kg"]
        },
        {
            id: 7,
            categoryId: 2,
            name: "Creatina Monohidrato",
            description: "Suplemento para aumentar fuerza y masa muscular",
            price: 24.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNyZWF0aW5hPC90ZXh0Pjwvc3ZnPg==",
            sizes: ["250g", "500g", "1kg"]
        },
        {
            id: 8,
            categoryId: 2,
            name: "BCAA en Tabletas",
            description: "Aminoácidos de cadena ramificada para reducir fatiga",
            price: 19.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJDQUE8L3RleHQ+PC9zdmc+",
            sizes: ["60 tabletas", "120 tabletas", "240 tabletas"]
        },
        {
            id: 9,
            categoryId: 2,
            name: "Pre-entreno",
            description: "Mezcla energética para maximizar tu rendimiento",
            price: 29.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByZS1lbnRyZW5vPC90ZXh0Pjwvc3ZnPg==",
            sizes: ["300g", "600g"]
        },
        {
            id: 10,
            categoryId: 2,
            name: "Multivitamínico",
            description: "Complejo vitamínico para deportistas",
            price: 15.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlZpdGFtaW5hczwvdGV4dD48L3N2Zz4=",
            sizes: ["30 cápsulas", "60 cápsulas", "90 cápsulas"]
        },
        // Productos para Accesorios
        {
            id: 11,
            categoryId: 3,
            name: "Botella Deportiva",
            description: "Botella de 1L con marcador de consumo",
            price: 12.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJvdGVsbGE8L3RleHQ+PC9zdmc+",
            sizes: ["750ml", "1L", "1.5L"]
        },
        {
            id: 12,
            categoryId: 3,
            name: "Toalla Deportiva",
            description: "Toalla absorbente y rápida secado",
            price: 14.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlRvYWxsYTwvdGV4dD48L3N2Zz4=",
            sizes: ["Pequeña", "Mediana", "Grande"]
        },
        {
            id: 13,
            categoryId: 3,
            name: "Bandas de Resistencia",
            description: "Set de 5 bandas con diferentes niveles de resistencia",
            price: 18.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJhbmRhczwvdGV4dD48L3N2Zz4=",
            sizes: ["Set básico", "Set completo"]
        },
        {
            id: 14,
            categoryId: 3,
            name: "Guantes de Gimnasio",
            description: "Protección para las manos al levantar pesas",
            price: 16.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkd1YW50ZXM8L3RleHQ+PC9zdmc+",
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 15,
            categoryId: 3,
            name: "Cinta para Sudor",
            description: "Cinta absorbente para la frente durante el ejercicio",
            price: 8.99,
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNpbnRhPC90ZXh0Pjwvc3ZnPg==",
            sizes: ["Única"]
        }
    ],
    testimonials: [
        {
            name: "María González",
            text: "Iron Flex ha cambiado mi vida. En 6 meses he logrado resultados que no conseguí en años en otros gimnasios. Los entrenadores son excelentes.",
            rating: 5
        },
        {
            name: "Carlos Rodríguez",
            text: "Las instalaciones son de primera calidad y el ambiente es muy motivador. He mejorado mi condición física notablemente desde que me uní.",
            rating: 4
        },
        {
            name: "Ana Martínez",
            text: "Me encanta la variedad de clases grupales. El yoga y el spinning son mis favoritas. El personal siempre está dispuesto a ayudar.",
            rating: 5
        },
        {
            name: "Javier López",
            text: "Como persona ocupada, valoro mucho la flexibilidad de horarios. Puedo entrenar temprano por la mañana o tarde por la noche.",
            rating: 4
        }
    ],
    gallery: [
        {
            id: 1,
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2VuIGRlIGxhIHpvbmEgZGUgY2FyZGlvIChSZW1wbGF6YXIgcG9yIGltYWdlbiByZWFsKTwvdGV4dD48L3N2Zz4=",
            alt: "Zona de cardio"
        },
        {
            id: 2,
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2VuIGRlIGxhIHpvbmEgZGUgcGVzYXMgKFJlbXBsYXphciBwb3IgaW1hZ2VuIHJlYWwpPC90ZXh0Pjwvc3ZnPg==",
            alt: "Zona de pesas"
        },
        {
            id: 3,
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2VuIGRlIGNsYXNlIGRlIHlvZ2EgKFJlbXBsYXphciBwb3IgaW1hZ2VuIHJlYWwpPC90ZXh0Pjwvc3ZnPg==",
            alt: "Clase de yoga"
        },
        {
            id: 4,
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2VuIGRlIGxhIHpvbmEgZGUgZXN0aXJhY2nDs24gKFJlbXBsYXphciBwb3IgaW1hZ2VuIHJlYWwpPC90ZXh0Pjwvc3ZnPg==",
            alt: "Zona de estiramiento"
        },
        {
            id: 5,
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2VuIGRlIGxhIHpvbmEgZGUgZW50cmVuYW1pZW50byBwZXJzb25hbCAoUmVtcGxhemFyIHBvciBpbWFnZW4gcmVhbCk8L3RleHQ+PC9zdmc+",
            alt: "Entrenamiento personal"
        },
        {
            id: 6,
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzc3Nzc3NyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2VuIGRlbCB2ZXN0dWFyaW8gKFJlbXBsYXphciBwb3IgaW1hZ2VuIHJlYWwpPC90ZXh0Pjwvc3ZnPg==",
            alt: "Vestuario"
        }
    ]
};

// Estado de la aplicación
let currentState = {
    cart: [],
    favorites: [],
    currentCategory: null,
    currentTestimonial: 0,
    isDarkMode: false
};

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Ocultar pantalla de carga después de 2 segundos
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('fade-out');
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 500);
    }, 2000);

    // Cargar datos del localStorage
    loadFromLocalStorage();

    // Inicializar componentes
    initCategories();
    initTestimonials();
    initGallery();
    initEventListeners();
    initScrollAnimations();

    // Iniciar auto-play del slider de testimonios
    startTestimonialAutoPlay();
});

// Cargar datos del localStorage
function loadFromLocalStorage() {
    const savedCart = localStorage.getItem('ironFlexCart');
    const savedFavorites = localStorage.getItem('ironFlexFavorites');
    const savedTheme = localStorage.getItem('ironFlexTheme');

    if (savedCart) {
        currentState.cart = JSON.parse(savedCart);
    }

    if (savedFavorites) {
        currentState.favorites = JSON.parse(savedFavorites);
    }

    if (savedTheme === 'dark') {
        toggleDarkMode(true);
    }
}

// Guardar datos en localStorage
function saveToLocalStorage() {
    localStorage.setItem('ironFlexCart', JSON.stringify(currentState.cart));
    localStorage.setItem('ironFlexFavorites', JSON.stringify(currentState.favorites));
    localStorage.setItem('ironFlexTheme', currentState.isDarkMode ? 'dark' : 'light');
}

// Inicializar categorías
function initCategories() {
    const categoriesContainer = document.querySelector('.categories');
    
    appData.categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card fade-in';
        categoryCard.innerHTML = `
            <div class="category-img">
                <img src="${category.image}" alt="${category.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="category-content">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                <button class="btn btn-primary" onclick="showProducts(${category.id})">Ver Productos</button>
            </div>
        `;
        categoriesContainer.appendChild(categoryCard);
    });
}

// Mostrar productos de una categoría
function showProducts(categoryId) {
    const category = appData.categories.find(cat => cat.id === categoryId);
    const products = appData.products.filter(product => product.categoryId === categoryId);
    
    document.getElementById('products-title').textContent = `Productos - ${category.name}`;
    
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in';
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="product-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="openProductModal(${product.id})">Ver Detalles</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    document.getElementById('categories-section').style.display = 'none';
    document.getElementById('products-section').style.display = 'block';
    
    currentState.currentCategory = categoryId;
    
    // Scroll suave a la sección de productos
    scrollToSection('products-section');
}

// Volver a categorías
function goBackToCategories() {
    document.getElementById('products-section').style.display = 'none';
    document.getElementById('categories-section').style.display = 'block';
    scrollToSection('categories-section');
}

// Abrir modal de producto
function openProductModal(productId) {
    const product = appData.products.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('product-modal-title').textContent = product.name;
    
    const modalContent = document.getElementById('product-modal-content');
    modalContent.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div class="product-img" style="height: 250px;">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <p>${product.description}</p>
            <div class="product-price" style="font-size: 1.5rem;">$${product.price}</div>
            
            ${product.sizes ? `
            <div class="form-group">
                <label for="product-size">Talle:</label>
                <select id="product-size" class="form-control">
                    ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                </select>
            </div>
            ` : ''}
            
            <div class="form-group">
                <label for="product-quantity">Cantidad:</label>
                <input type="number" id="product-quantity" class="form-control" value="1" min="1">
            </div>
            
            <button class="btn btn-primary" onclick="addToCart(${product.id})" style="width: 100%;">Agregar al Carrito</button>
        </div>
    `;
    
    openModal('product-modal');
}

// Agregar producto al carrito
function addToCart(productId) {
    const product = appData.products.find(p => p.id === productId);
    if (!product) return;
    
    const sizeSelect = document.getElementById('product-size');
    const quantityInput = document.getElementById('product-quantity');
    
    const size = sizeSelect ? sizeSelect.value : 'Única';
    const quantity = parseInt(quantityInput.value) || 1;
    
    // Verificar si el producto ya está en el carrito
    const existingItemIndex = currentState.cart.findIndex(item => 
        item.productId === productId && item.size === size
    );
    
    if (existingItemIndex !== -1) {
        // Actualizar cantidad si ya existe
        currentState.cart[existingItemIndex].quantity += quantity;
    } else {
        // Agregar nuevo item al carrito
        currentState.cart.push({
            productId,
            name: product.name,
            price: product.price,
            size,
            quantity,
            image: product.image
        });
    }
    
    saveToLocalStorage();
    closeModal('product-modal');
    showToast('Producto agregado al carrito');
}

// Abrir modal del carrito
function openCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    if (currentState.cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center;">Tu carrito está vacío</p>';
        document.getElementById('cart-total').textContent = 'Total: $0';
    } else {
        let total = 0;
        
        currentState.cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Talle: ${item.size} | Cantidad: ${item.quantity}</p>
                    <p>$${item.price} x ${item.quantity} = $${itemTotal.toFixed(2)}</p>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="updateCartItemQuantity(${index}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartItemQuantity(${index}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Eliminar</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
    }
    
    openModal('cart-modal');
}

// Actualizar cantidad de un item en el carrito
function updateCartItemQuantity(index, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(index);
        return;
    }
    
    currentState.cart[index].quantity = newQuantity;
    saveToLocalStorage();
    openCart(); // Recargar el carrito para mostrar los cambios
}

// Eliminar item del carrito
function removeFromCart(index) {
    currentState.cart.splice(index, 1);
    saveToLocalStorage();
    openCart(); // Recargar el carrito para mostrar los cambios
    showToast('Producto eliminado del carrito');
}

// Finalizar compra
function checkout() {
    if (currentState.cart.length === 0) {
        showToast('Tu carrito está vacío');
        return;
    }
    
    // Simular proceso de compra
    showConfirmation('¡Compra exitosa!', 'Tu pedido ha sido procesado correctamente. Recibirás un correo de confirmación.');
    
    // Limpiar carrito
    currentState.cart = [];
    saveToLocalStorage();
    
    closeModal('cart-modal');
}

// Inicializar testimonios
function initTestimonials() {
    const testimonialsContainer = document.getElementById('testimonials-container');
    
    appData.testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial';
        testimonialElement.innerHTML = `
            <div class="testimonial-rating">
                ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">- ${testimonial.name}</p>
        `;
        testimonialsContainer.appendChild(testimonialElement);
    });
    
    updateTestimonialPosition();
}

// Actualizar posición del slider de testimonios
function updateTestimonialPosition() {
    const container = document.getElementById('testimonials-container');
    container.style.transform = `translateX(-${currentState.currentTestimonial * 100}%)`;
}

// Cambiar testimonio
function changeTestimonial(direction) {
    const totalTestimonials = appData.testimonials.length;
    currentState.currentTestimonial = (currentState.currentTestimonial + direction + totalTestimonials) % totalTestimonials;
    updateTestimonialPosition();
}

// Auto-play del slider de testimonios
function startTestimonialAutoPlay() {
    setInterval(() => {
        changeTestimonial(1);
    }, 5000);
}

// Inicializar galería
function initGallery() {
    const galleryContainer = document.getElementById('gallery');
    
    appData.gallery.forEach((image, index) => {
        const isFavorited = currentState.favorites.includes(image.id);
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" class="gallery-img">
            <div class="gallery-overlay">
                <div class="gallery-actions">
                    <button class="gallery-btn ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite(${image.id}, this)">
                        ${isFavorited ? '❤️' : '🤍'}
                    </button>
                    <button class="gallery-btn" onclick="shareImage(${index})">
                        📤
                    </button>
                    <button class="gallery-btn" onclick="openGalleryModal(${index})">
                        👁️
                    </button>
                </div>
            </div>
        `;
        galleryContainer.appendChild(galleryItem);
    });
}

// Abrir modal de galería
function openGalleryModal(imageIndex) {
    const modalContent = document.getElementById('gallery-modal-content');
    const image = appData.gallery[imageIndex];
    const isFavorited = currentState.favorites.includes(image.id);
    
    modalContent.innerHTML = `
        <div style="position: relative;">
            <img src="${image.src}" alt="${image.alt}" style="width: 100%; border-radius: 10px;">
            <div style="position: absolute; bottom: 15px; right: 15px; display: flex; gap: 10px;">
                <button class="gallery-btn ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite(${image.id}, this)">
                    ${isFavorited ? '❤️' : '🤍'}
                </button>
                <button class="gallery-btn" onclick="shareImage(${imageIndex})">
                    📤
                </button>
            </div>
            <div style="position: absolute; top: 15px; left: 15px; right: 15px; display: flex; justify-content: space-between;">
                <button class="gallery-btn" onclick="changeGalleryImage(${imageIndex - 1})" ${imageIndex === 0 ? 'disabled' : ''}>
                    ❮
                </button>
                <button class="gallery-btn" onclick="changeGalleryImage(${imageIndex + 1})" ${imageIndex === appData.gallery.length - 1 ? 'disabled' : ''}>
                    ❯
                </button>
            </div>
        </div>
        <p style="text-align: center; margin-top: 1rem;">${image.alt}</p>
    `;
    
    openModal('gallery-modal');
}

// Cambiar imagen en el modal de galería
function changeGalleryImage(newIndex) {
    if (newIndex < 0 || newIndex >= appData.gallery.length) return;
    openGalleryModal(newIndex);
}

// Alternar favorito
function toggleFavorite(imageId, button) {
    const index = currentState.favorites.indexOf(imageId);
    
    if (index === -1) {
        // Agregar a favoritos
        currentState.favorites.push(imageId);
        button.classList.add('favorited');
        button.innerHTML = '❤️';
        showToast('Agregado a favoritos');
    } else {
        // Quitar de favoritos
        currentState.favorites.splice(index, 1);
        button.classList.remove('favorited');
        button.innerHTML = '🤍';
        showToast('Eliminado de favoritos');
    }
    
    saveToLocalStorage();
}

// Compartir imagen
function shareImage(imageIndex) {
    const image = appData.gallery[imageIndex];
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'Iron Flex - Gimnasio',
            text: `Mira esta imagen de Iron Flex: ${image.alt}`,
            url: url
        })
        .then(() => showToast('Imagen compartida'))
        .catch(err => console.log('Error al compartir:', err));
    } else {
        // Fallback: copiar enlace al portapapeles
        navigator.clipboard.writeText(url)
            .then(() => showToast('Enlace copiado al portapapeles'))
            .catch(err => {
                // Fallback más básico
                const textArea = document.createElement('textarea');
                textArea.value = url;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showToast('Enlace copiado al portapapeles');
            });
    }
}

// Suscribirse a un plan
function subscribeToPlan(planName) {
    showConfirmation(
        '¡Suscripción exitosa!', 
        `Te has suscrito al plan ${planName}. Recibirás un correo con los detalles de tu membresía.`
    );
}

// Enviar formulario de contacto
function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subscribe = document.getElementById('subscribe').checked;
    
    // Validaciones básicas
    if (!name || !email || !message) {
        showToast('Por favor, completa todos los campos obligatorios');
        return;
    }
    
    if (!isValidEmail(email)) {
        showToast('Por favor, ingresa un email válido');
        return;
    }
    
    // Simular envío del formulario
    showConfirmation(
        '¡Mensaje enviado!', 
        'Gracias por contactarnos. Te responderemos a la brevedad.'
    );
    
    // Guardar en localStorage (simulación)
    const contacts = JSON.parse(localStorage.getItem('ironFlexContacts') || '[]');
    contacts.push({
        name,
        email,
        message,
        date: new Date().toISOString()
    });
    localStorage.setItem('ironFlexContacts', JSON.stringify(contacts));
    
    // Mostrar confirmación de suscripción si está marcada
    if (subscribe) {
        setTimeout(() => {
            showToast(`Te has suscrito a nuestras promociones con el email: ${email}`);
        }, 1000);
    }
    
    // Limpiar formulario
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('subscribe').checked = false;
}

// Validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Alternar modo oscuro/claro
function toggleDarkMode(forceState = null) {
    if (forceState !== null) {
        currentState.isDarkMode = forceState;
    } else {
        currentState.isDarkMode = !currentState.isDarkMode;
    }
    
    if (currentState.isDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-toggle').textContent = '🌙';
    }
    
    saveToLocalStorage();
}

// Scroll suave a sección
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Abrir modal
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

// Cerrar modal
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Mostrar confirmación
function showConfirmation(title, message) {
    document.getElementById('confirmation-title').textContent = title;
    document.getElementById('confirmation-message').textContent = message;
    openModal('confirmation-modal');
}

// Mostrar toast
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Inicializar event listeners
function initEventListeners() {
    // Toggle del menú móvil
    document.getElementById('mobile-menu-btn').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });
    
    // Toggle del tema
    document.getElementById('theme-toggle').addEventListener('click', function() {
        toggleDarkMode();
    });
    
    // Botón de WhatsApp
    document.getElementById('whatsapp-float').addEventListener('click', function() {
        const message = encodeURIComponent('Hola, vengo de tu landing page y me gustaria contratar tu servicio de Fiverr por $10');
        window.open(`https://wa.me/5491173619142?text=${message}`, '_blank');
    });
    
    // Tooltip global
    document.addEventListener('mousemove', function(e) {
        const tooltip = document.querySelector('.tooltip');
        
        // Mostrar tooltip en elementos con data-tooltip
        const target = e.target;
        if (target.hasAttribute('data-tooltip')) {
            tooltip.textContent = target.getAttribute('data-tooltip');
            tooltip.classList.add('show');
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY + 10 + 'px';
        } else {
            tooltip.classList.remove('show');
        }
        
        // Tooltip especial para el botón de WhatsApp
        if (target.closest('#whatsapp-float')) {
            tooltip.textContent = 'Queres comprar una pagina como esta?';
            tooltip.classList.add('show');
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY - 40 + 'px';
        }
    });
    
    // Controles del slider de testimonios
    document.getElementById('prev-testimonial').addEventListener('click', function() {
        changeTestimonial(-1);
    });
    
    document.getElementById('next-testimonial').addEventListener('click', function() {
        changeTestimonial(1);
    });
    
    // Cerrar modales al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });
}

// Inicializar animaciones al hacer scroll
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}