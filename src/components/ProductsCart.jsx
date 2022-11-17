export let productsCart = [];

export function agregarCarrito(
    id,
    nombre,
    categoria,
    precio,
    descripcion,
    cantdisp,
    cantvent,
    imagen,
    estado
) {
    let data = localStorage.getItem("productsCart");
    if (data) {
        productsCart = JSON.parse(data);
    }

    if (!productsCart.find((productsCart) => productsCart._id === id)) {
        productsCart.push({
            _id: id,
            nombre: nombre,
            categoria: categoria,
            precio: precio,
            descripcion: descripcion,
            cantdisp: cantdisp,
            cantvent: cantvent,
            imagen: imagen,
            estado: estado,
        });
    } else {
        for (let i = 0; i < productsCart.length; i++) {
            if (id === productsCart[i]._id) {
                productsCart[i].cantvent = cantvent;
            }
        }
    }
    localStorage.setItem("productsCart", JSON.stringify(productsCart));
}

export function eliminarCarrito(id) {
    productsCart = JSON.parse(localStorage.getItem("productsCart"));
    console.log(productsCart);
    for (let i = 0; i < productsCart.length; i++) {
        if (id === productsCart[i]._id) {
            productsCart.splice(i, 1);
        }
    }
    localStorage.setItem("productsCart", JSON.stringify(productsCart));
    console.log(productsCart);
}
