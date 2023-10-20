import { getProductos } from "./communicationManager.js";
import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3.0.0/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            message: 'Hello Vue',
            divActual: 'portada',
            productos: [],
            carrito: [],
            userEmail: '',
            userName: ''
        };
    },
    methods: {
        cambiarDiv(id) {
            this.divActual = id;
        }, 
        mostrarDiv(id) {
            this.divActual = id;
        },
        mostrar(id) {
            return this.divActual === id;
        },
        estatActiu(id) {
            if (id == this.divActual) {
                return true;
            } else {
                return false;

            }
        },
        agregarAlCarrito(producto) {
            const productInCart = this.carrito.find(item => item.id === producto.id);

            if (productInCart) {
                productInCart.cantidad += 1;
            } else {
                this.carrito.push({
                    ...producto,
                    cantidad: 1
                });
            }
            localStorage.setItem('carro', JSON.stringify(this.carrito));

        },
        eliminarDelCarrito(index) {
            this.carrito.splice(index, 1);
            localStorage.setItem('carro', JSON.stringify(this.carrito));

        },
        calcularTotal() {
            let total = 0;
            for (let producto of this.carrito) {
                Math.round(total += producto.precio * producto.cantidad);
            }
            return total;
        },
        guardarInformacion() {
            if (this.userEmail && this.userName) {
                localStorage.setItem('userEmail', this.userEmail);
                localStorage.setItem('userName', this.userName);
            }

        },
    },
    created() {
        this.userEmail = localStorage.getItem('userEmail') || '';
        this.userName = localStorage.getItem('userName') || '';
        const StoreCarrito = localStorage.getItem('carro');

        if (StoreCarrito) {
            this.carrito = JSON.parse(StoreCarrito);
        }

        getProductos().then(productos => {
            this.productos = productos;
        }).catch(error => {
            console.error("Error al obtener datos:", error);
        });

    },
}).mount('#app');
