import React, {Component} from 'react';

export const DataContext = React.createContext();

class DataProvider extends Component {

    state = {
        products : {
            Mens: [
                {
                    "uid": 1,
                    "title": "mens1",
                    "src": "mens1.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 10,
                    "genre": "mens",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 2,
                    "title": "mens2",
                    "src": "mens2.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 12,
                    "genre": "mens",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 3,
                    "title": "mens3",
                    "src": "mens3.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 16,
                    "genre": "mens",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 4,
                    "title": "mens4",
                    "src": "mens4.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 24,
                    "genre": "mens",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 5,
                    "title": "mens5",
                    "src": "mens5.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 8,
                    "genre": "mens",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 6,
                    "title": "mens6",
                    "src": "mens6.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 42,
                    "genre": "mens",
                    "count": 1,
                    "addedToCart": false
                }
            ],
            Womens: [
                {
                    "uid": 7,
                    "title": "womens1",
                    "src": "womens1.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 26,
                    "genre": "womens",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 8,
                    "title": "womens2",
                    "src": "womens2.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 22,
                    "genre": "womens",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 9,
                    "title": "womens3",
                    "src": "womens3.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 43,
                    "genre": "womens",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 10,
                    "title": "womens4",
                    "src": "womens4.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 54,
                    "genre": "womens",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 11,
                    "title": "womens5",
                    "src": "womens5.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 28,
                    "genre": "womens",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 12,
                    "title": "womens6",
                    "src": "womens6.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 16,
                    "genre": "womens",
                    "count": 1,
                    "addedToCart": false
                }
            ],
            Childrens: [
                {
                    "uid": 13,
                    "title": "children1",
                    "src": "children1.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 64,
                    "genre": "children",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 14,
                    "title": "children2",
                    "src": "children2.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 100,
                    "genre": "children",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 15,
                    "title": "children3",
                    "src": "children3.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 53,
                    "genre": "children",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 16,
                    "title": "children4",
                    "src": "children4.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 47,
                    "genre": "children",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 17,
                    "title": "children5",
                    "src": "children5.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 140,
                    "genre": "children",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 18,
                    "title": "children6",
                    "src": "children6.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 25,
                    "genre": "children",
                    "count": 1,
                    "addedToCart": false
                }
            ],
            Books: [
                {
                    "uid": 19,
                    "title": "book1",
                    "src": "book1.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 64,
                    "downloadlink": "../books/book1.pdf",
                    "genre": "book",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 20,
                    "title": "book2",
                    "src": "book2.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 64,
                    "downloadlink": "../books/book2.pdf",
                    "genre": "book",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 21,
                    "title": "book3",
                    "src": "book3.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 64,
                    "downloadlink": "../books/book3.pdf",
                    "genre": "book",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 22,
                    "title": "book4",
                    "src": "book4.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 64,
                    "downloadlink": "../books/book4.pdf",
                    "genre": "book",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 23,
                    "title": "book5",
                    "src": "book5.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 64,
                    "downloadlink": "../books/book5.pdf",
                    "genre": "book",
                    "count": 1,
                    "addedToCart": false
                },
                {
                    "uid": 24,
                    "title": "book6",
                    "src": "book6.png",
                    "description": "Excepteur sint occaecat cupidatat non proident",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "price": 64,
                    "downloadlink": "../books/book6.pdf",
                    "genre": "book",
                    "count": 1,
                    "addedToCart": false
                }
            ]
        },
        cart: [],
        total : 0
    };

    addCart = (title, genre) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item.title !== title
        })

        if(check){
            var data="";
            if (genre=="mens"){
                data = products.Mens.filter(product =>{
                    product.addedToCart = true;
                    return product.title === title
                })
            }else if (genre=="womens"){
                data = products.Womens.filter(product =>{
                    product.addedToCart = true;
                    return product.title === title
                })
            }else if (genre=="children"){
                data = products.Childrens.filter(product =>{
                    product.addedToCart = true;
                    return product.title === title
                })
            }else if (genre=="book"){
                data = products.Books.filter(product =>{
                    product.addedToCart = true;
                    return product.title === title
                })
            }
            console.log(data);
            this.setState({cart: [...cart,...data]})
        }else{
            alert("This product is already added in the cart")
        }
    };

    addedToCart = (title) => {
        const {cart} = this.state;
        const check = cart.every(item =>{
            return item.title !== title
        })
        return check
    };

    clearCart = () => {
        if(window.confirm("Do you want to place the order?")){
            this.setState({cart: []})
            this.getTotal();  
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.uid === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.uid === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = title =>{
        if(window.confirm("Confirm Delete?")){
            const {products, cart} = this.state;
            cart.forEach((item, index) =>{
                if(item.title === title){
                    cart.splice(index, 1);
                    if (item.genre=="mens"){
                        products.Mens.filter(product =>{
                            product.addedToCart = false;
                        })
                    }else if (item.genre=="womens"){
                        products.Womens.filter(product =>{
                            product.addedToCart = false;
                        })
                    }else if (item.genre=="children"){
                        products.Childrens.filter(product =>{
                            product.addedToCart = false;
                        })
                    }else if (item.genre=="book"){
                        products.Books.filter(product =>{
                            product.addedToCart = false;
                        })
                    }
                }
            })
            this.setState({cart: cart});
            this.getTotal();  
        } 
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal,clearCart,addedToCart} = this;
        return (
            <DataContext.Provider value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal,clearCart,addedToCart}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default DataProvider;

