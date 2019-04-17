class SpiceTradeCard extends Card {

    constructor (requestSpiceList, acquireSpiceList, ...extraArguments){
        super(...extraArguments);
        this._requestSpiceList = requestSpiceList;
        this._acquireSpiceList = acquireSpiceList;
        this._domElement = null;
    }

    get requestSpiceList(){
        return this._requestSpiceList;
    }
    get acquireSpiceList(){
        return this._acquireSpiceList;
    }
    render () {
        const cardElement = $('<div>')
                                .addClass('card spice-trade-card')
                                .on({
                                    'click': this.cardClickHandler
                                })
                                .text('SpiceTradeCard');
        return cardElement;
    
    }


}