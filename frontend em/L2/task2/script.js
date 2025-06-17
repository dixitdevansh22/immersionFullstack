const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
const container = document.getElementById('container');

const tempUrl = 'https://dummyjson.com/products/search?q='

btn.addEventListener('click',()=>{
    if(inp.value!=""){
        const URL = tempUrl+inp.value;
        fetch(URL)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                // console.log(data.products)
                for(let product of data.products){
                    console.log(product)
                    const productElem = document.createElement('div');
                    
                    const h3 = document.createElement('h3');
                    h3.innerText = product.title;

                    const img = document.createElement('img');
                    img.setAttribute('src',product.images[0])
                    img.style.width = "200px";

                    const para = document.createElement('p');
                    para.innerText = product.price

                    productElem.append(h3)
                    productElem.append(img)
                    productElem.append(para)
                    productElem.style.border = "2px solid black"
                    container.append(productElem)
                }
            })
    }
    
        
})