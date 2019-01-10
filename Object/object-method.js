let restaurant = {
    name: 'Buger lab',
    guestCapcity: 75,
    guestCount: 0,
    checkAvilability: function(partySize){
        let seatsLeft = this.guestCapcity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize
        console.log(this.guestCount)
    },
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize
        console.log(this.guestCount)
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvilability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvilability(4))