export abstract class Potion {
    private _id: number;
    private _description: string;
    private _type: string;
    private _quantity: number;
    private _flavor: string;
    private _principalEffect: string;
    private _sideEffects: string;
    private _howToUse: string;
    private _ingredients: string;
    private _price: number;
    private _stock: number;


    constructor(
        id: number,
        description: string,
        type: string,
        quantity: number,
        flavor: string,
        principalEffect: string,
        sideEffects: string,
        howToUse: string,
        ingredients: string,
        price: number,
        stock: number,
    ) {
        this._id = id;
        this._description = description;
        this._type = type;
        this._quantity = quantity;
        this._flavor = flavor;
        this._principalEffect = principalEffect;
        this._sideEffects = sideEffects;
        this._howToUse = howToUse;
        this._ingredients = ingredients;
        this._price = price;
        this._stock = stock;
    }

    public get id() {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get description() {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public get type() {
        return this._type;
    }

    public set type(type: string) {
        this._type = type;
    }

    public get quantity() {
        return this._quantity;
    }

    public set quantity(quantity: number) {
        this._quantity = quantity;
    }

    public get flavor() {
        return this._flavor;
    }

    public set flavor(flavor: string) {
        this._flavor = flavor;
    }

    public get principalEffect() {
        return this._principalEffect;
    }

    public set principalEffect(principalEffect: string) {
        this._principalEffect = principalEffect;
    }

    public get sideEffects() {
        return this._sideEffects;
    }

    public set sideEffects(sideEffects: string) {
        this._sideEffects = sideEffects;
    }

    public get howToUse() {
        return this._howToUse;
    }

    public set howToUse(howToUse: string) {
        this._howToUse = howToUse;
    }

    public get ingredients() {
        return this._ingredients;
    }

    public set ingredients(ingredients: string) {
        this._ingredients = ingredients;
    }

    public get price() {
        return this._price;
    }

    public set price(price: number) {
        this._price = price;
    }

    public get stock() {
        return this._stock;
    }

    public set stock(stock: number) {
        this._stock = stock;
    }    
}