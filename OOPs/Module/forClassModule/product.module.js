export class Product{
    userName;
    Role;
    Error;
    _productName;

    get productName(){
        return this._productName;
    }

    set productName(newName){
        if(this.Role =='admin'){
            this._productName = newName
        } else{
            this.Error=`Hello! ${this.userName}, your role ${this.Role} is not authorized to set product name`;
        }
    }
}