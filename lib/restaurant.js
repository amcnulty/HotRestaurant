function Restaurant() {
    this.tables = [];
    this.waitList = [];
}

Restaurant.prototype.addParty = function(data) {
    if (this.tables.length < 5) {
        this.addToTables(data);
    }
    else {
        this.addToWaitList(data);
    }
}

Restaurant.prototype.addToTables = function(party) {
    this.tables.push(party);
}

Restaurant.prototype.addToWaitList = function(party) {
    this.waitList.push(party);
}

Restaurant.prototype.getTables = function() {
    return this.tables;
}

Restaurant.prototype.getWaitList = function() {
    return this.waitList;
}

Restaurant.prototype.clearFields = function() {
    this.tables = [];
    this.waitList = [];
}

module.exports = Restaurant;