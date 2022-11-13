
const barmenu=document.getElementById('barmenu');
const navbarlist=document.getElementById('navbarlist');
const xmenu=document.getElementById('xmenu');
const cardContainer=document.getElementById('card-container');
const carrito=document.getElementById('carrito');
const carro=document.getElementById('carro');
const xcarro=document.getElementById('xcarro');
const categorias=document.querySelectorAll('.category');
const categoriasContainer=document.querySelector('.navbar-list');
const carritobtn=document.querySelector('.carritobtn');
const anterior=document.getElementById('anterior');
const siguiente=document.getElementById('siguiente');
const actual=document.getElementById('actual');
const paginacion=document.querySelector('.paginacion');
const carritocard=document.querySelector('.carritocard');
const tcarrito=document.querySelector('.tcarrito');
const carrobtn=document.querySelectorAll('.carrobtn');
const total=document.getElementById('total');
const comprar=document.getElementById('comprar');
const vaciar=document.getElementById('vaciar');
const finalizar=document.getElementById('finalizar');

// Setear el array para el carro
let alcarro = JSON.parse(localStorage.getItem("alcarro")) || [];

// Funcion para guardar en el localStorage
const saveLocalStorage = alcarro => {
  localStorage.setItem("alcarro", JSON.stringify(alcarro));
};

const productsdata=[
    {
        id: 1,
        cardImg: './imagenes/accesorio_1.webp',
        name: 'Golden Messi',
        price: 200,
        category: 'Accesorios',
        cantidad:0,
        
      },
      {
        id: 2,
        cardImg: './imagenes/accesorio_2.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Accesorios',
        cantidad:0,
      },
      {
        id: 3,
        cardImg: './imagenes/accesorio_3.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Accesorios',
        cantidad:0,
      },
      {
        id: 4,
        cardImg: './imagenes/accesorio_4.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Accesorios',
        cantidad:0,
      },
      {
        id: 5,
        cardImg: './imagenes/accesorio_5.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Accesorios',
        cantidad:0,
      },
      {
        id: 6,
        cardImg: './imagenes/accesorio_6.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Accesorios',
        cantidad:0,
      },
      {
        id: 7,
        cardImg: './imagenes/accesorio_7.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Accesorios',
        cantidad:0,
      },
      {
        id: 8,
        cardImg: './imagenes/bermuda_1.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Bermudas',
        cantidad:0,
      },
      {
        id: 9,
        cardImg: './imagenes/bermuda_2.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Bermudas',
        cantidad:0,
      },
      {
        id: 10,
        cardImg: './imagenes/bermuda_3.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Bermudas',
        cantidad:0,
      },
      {
        id: 11,
        cardImg: './imagenes/bermuda_4.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Bermudas',
        cantidad:0,
      },
      {
        id: 12,
        cardImg: './imagenes/bermuda_5.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Bermudas',
        cantidad:0,
      },
      {
        id: 13,
        cardImg: './imagenes/bermuda_6.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Bermudas',
        cantidad:0,
      },
      {
        id: 14,
        cardImg: './imagenes/buzo_1.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Buzos',
        cantidad:0,
      },
      {
        id: 15,
        cardImg: './imagenes/buzo_2.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Buzos',
        cantidad:0,
      },
      {
        id: 16,
        cardImg: './imagenes/buzo_3.webp',
        name: 'Golden Messi',
        price: 6.89,
        category:'Buzos',
        cantidad:0,
      },
      {
        id: 17,
        cardImg: './imagenes/buzo_4.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Buzos',
        cantidad:0,
      },
      {
        id: 18,
        cardImg: './imagenes/buzo_5.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Buzos',
        cantidad:0,
      },
      {
        id: 19,
        cardImg: './imagenes/buzo_6.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Buzos',
        cantidad:0,
      },
      {
        id: 20,
        cardImg: './imagenes/remera_1.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Remeras',
        cantidad:0,
      },
      {
        id: 21,
        cardImg: './imagenes/remera_2.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Remeras',
        cantidad:0,
      },
      {
        id: 22,
        cardImg: './imagenes/remera_3.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Remeras',
        cantidad:0,
      },
      {
        id: 23,
        cardImg: './imagenes/remera_4.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Remeras',
        cantidad:0,
      },
      {
        id: 24,
        cardImg: './imagenes/remera_5.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Remeras',
        cantidad:0,
      },
      {
        id: 25,
        cardImg: './imagenes/remera_6.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Remeras',
        cantidad:0,
      },
      {
        id: 26,
        cardImg: './imagenes/zapatillas_1.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Zapatillas',
        cantidad:0,
      },
      {
        id: 27,
        cardImg: './imagenes/zapatillas_2.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Zapatillas',
        cantidad:0,
      },
      {
        id: 28,
        cardImg: './imagenes/zapatillas_3.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Zapatillas',
        cantidad:0,
      },
      {
        id: 29,
        cardImg: './imagenes/zapatillas_4.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Zapatillas',
        cantidad:0,
      },
      {
        id: 30,
        cardImg: './imagenes/zapatillas_5.webp',
        name: 'Golden Messi',
        price: 6.89,
        category: 'Zapatillas',
        cantidad:0,
      },

];
const openmenu =()=>{
    navbarlist.classList.remove('hidden');
    
    

}
const closeMenu =()=>{
    navbarlist.classList.add('hidden');
    
}
const renderCart = cart =>{
    const {id,cardImg , name , price}=cart;
    return`
    <div class="cart">
    <img src="${cardImg}" alt="" />
        <h1>${name}</h1>
        <p>$${price}</p>
        <button class="carritobtn" id="${id}"> AGREGAR AL CARRITO</button>
    </div>`
}
const rendercarts = (cartArray) =>{
    cardContainer.innerHTML =cartArray.map(renderCart).join('');
    // console.log("rendercarts");
    actual.innerHTML=`<p>${productsController.actual}</p>`;
};
const abrircarro=()=>{
carro.classList.remove('hidden');
// console.log("abrir carro");

}
const closecarro=()=>{
    carro.classList.add('hidden');
    // console.log("cerrar arro");
}


//funcion para dividir el array de productos

const splitProducts =size=>{
  let divideProducts=[];
  for (i=0; i<productsdata.length; i += size){
    divideProducts.push(productsdata.slice(i,i + size));
  }
  return divideProducts;
}

const productsController = {
  dividedProducts: splitProducts(6),
  // nextProductsIndex: 1,
  actual:1,
  // beforeProductsIndex: 0,
  productsLimit: splitProducts(6).length,
};
// console.log(productsController);
//filtrar productos
const filtrar = (e) => {
  // console.log(e.target.dataset.category);
  const categoriaselect=e.target.dataset.category;
  // console.log(categoriaselect);
  if(!categoriaselect){
    paginacion.classList.remove('hidden');
  // rendercarts(productsdata);
  productsController.actual=1;
  rendercarts(productsController.dividedProducts[0]);
  closeMenu();
  

  }
  else{
    let filtrado = productsdata.filter(p => p.category === categoriaselect)

  //   // console.log(e.target.dataset.category);
  //  let filtrado= [];
  //   for (let i=0;i<productsdata.length;i++){
  //     if(productsdata[i].category===categoriaselect){
  //       filtrado.push(productsdata[i]);
  //       // console.log(filtrado);
  //            }
  //     // console.log(filtrado); 
  //   }
  //     //  console.log(filtrado); 
  paginacion.classList.add('hidden');
  rendercarts(filtrado);
  closeMenu();
  
  }
  
};

const subirPagina =()=>{
  // console.log(productsController);
 if(productsController.actual!=productsController.productsLimit)
{
// productsController.nextProductsIndex ++;
productsController.actual ++;
// productsController.beforeProductsIndex ++;
rendercarts(productsController.dividedProducts[productsController.actual-1]);
  
    
}

}
const bajarPagina =()=>{   
  
if(productsController.actual!=1)
{
  // productsController.nextProductsIndex --;
  productsController.actual --;
  // productsController.beforeProductsIndex --;
  rendercarts(productsController.dividedProducts[productsController.actual-1]);
    
}
}
// --------------carrito------------


const sumarcantidad = (idproduc)=>{
  if(alcarro.some(p=>p.id==idproduc)){
    alcarro.find(p=>p.id==idproduc).cantidad++;

  }
  else{
  const aux=[];
     alcarro.push(productsdata.find(p => p.id == idproduc));
     alcarro.find(p=>p.id==idproduc).cantidad=1;
  }
  // console.log(alcarro);
  rendercarro(alcarro);

}
const sacardelcarro=(idproduc)=>{
  alcarro=alcarro.filter(p=>p.id!=idproduc);
  rendercarro(alcarro);
}
const descontarcantidad=(idproduc)=>{

  if(alcarro.find(p=>p.id==idproduc).cantidad===1){
    if(window.confirm("¿Desea elimiar este producto?")){
    sacardelcarro(idproduc);
    }
  }
  else{
    alcarro.find(p=>p.id==idproduc).cantidad--;
  }

  rendercarro(alcarro);
}

const addProduct =(e)=>{
  if (!e.target.classList.contains("carritobtn")) return;
    if( window.confirm("¿Desea agregar este producto?")){
  const idproduc= e.target.id;
  
  sumarcantidad(idproduc);
  checkCartState();
}
}
// -----------render carrito
const rendercarrocart = cart =>{
  const {id,cardImg , name , price, cantidad}=cart;
  return`
  
  <tr>
   <td><img src="${cardImg}" alt="" /></td>
   <td>$${price}</td>
   <td ><button class="carrobtn" data-carrobtn="masproduct" id="${id}">+</button>${cantidad}<button class="carrobtn" data-carrobtn="menosproduct" id="${id}">-</button> </td>
   <td>$${price*cantidad}</td>
   <td>  <i class="fa-solid fa-trash-can carrobtn" data-carrobtn="deletebtn" id="${id}"></i></td> 
   </tr>
   
  `
}

const rendercarro =(p)=>{
  tcarrito.innerHTML=p.map(rendercarrocart).join('');
}

const carrobtns =(e)=>{
  
  if(!e.target.classList.contains("carrobtn"))return;
  
   if(e.target.dataset.carrobtn==="masproduct"){
    
    
     sumarcantidad(e.target.id);
    
  //   console.log(e.target.dataset.carritobtn);

   }
   if(e.target.dataset.carrobtn==="menosproduct"){
    
    
     descontarcantidad(e.target.id);
    
   }
  if(e.target.dataset.carrobtn==="deletebtn"){
    if(window.confirm("¿Desea elimiar este producto?")){
    sacardelcarro(e.target.id);
  }}
  checkCartState();
}

const totalcarro=()=>{
  return alcarro.reduce((acc, cur) => acc + Number(cur.price) * cur.cantidad, 0);
}
const showTotal = () => {
  total.innerHTML = `<h3>TOTAL      $${totalcarro().toFixed(2)} </h3>`;
};
const estadocarro =()=>{
  if(alcarro.length==0){
    finalizar.classList.add('sinElementos');
    

  }
  else{
    finalizar.classList.remove('sinElementos');
  }
  
}
const checkCartState = () => {
  showTotal();
  saveLocalStorage(alcarro);
  rendercarro(alcarro);
  estadocarro();
}
const completeCartAction = (confirmMsg, successMsg) => {
  if (!alcarro.length) return;
  if (window.confirm(confirmMsg)) {
   alcarro=[];
   alert(successMsg);
   checkCartState();
  }
};
const comprarcarro = () => {
  completeCartAction("¿Desea completar su compra?", "¡Gracias por su compra!");
};

const vaciarcarro = () => {
  completeCartAction(
    "¿Desea vaciar el carrito?",
    "No hay productos en el carrito"
  );
};

const init=()=>{
barmenu.addEventListener("click",openmenu);
xmenu.addEventListener("click",closeMenu);
rendercarts(productsController.dividedProducts[0]);
carrito.addEventListener("click",abrircarro);
xcarro.addEventListener("click",closecarro);
categoriasContainer.addEventListener("click",filtrar);
 
carro.addEventListener("click",carrobtns);
siguiente.addEventListener("click",subirPagina);
anterior.addEventListener("click",bajarPagina);
cardContainer.addEventListener("click",addProduct);
//document.addEventListener("DOMContentLoaded", showTotal);
//document.addEventListener("DOMContentLoaded", rendercarro(alcarro));
comprar.addEventListener("click", comprarcarro);
vaciar.addEventListener("click", vaciarcarro);
checkCartState ();
}

init();
// console.log(productsController);