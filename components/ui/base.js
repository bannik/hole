import {Component} from 'react';

export default class Base extends Component {

    constructor(props){
        super(props);
        this.bindAllMethods();
    }

    bindMethods(...methods) {
        methods.forEach((method) => {
            if(Reflect.getPrototypeOf(this).hasOwnProperty(method) && typeof this[method] == 'function'){
                this[method] = this[method].bind(this)
            }else{
                throw new Error(`There is no method \'${method}\' in the prototype of class \'${this.constructor.name}\'`);
            }
        });
    }

    //bind to instance all prototype methods that start with '_'
    bindAllMethods(){
        let prototypePropertyNames = Reflect.ownKeys(Reflect.getPrototypeOf(this));

        prototypePropertyNames.filter((method) => {
            return typeof this[method] == 'function' && method.substring(0, 3) == '_handle';
        }).forEach((method) => {
            this[method.substring(1)] = this[method].bind(this);
        });
    }
}
