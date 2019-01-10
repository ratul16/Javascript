let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan food')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('make sure to offer some vegan options')
} else {
    console.log('Offer up anything on the menue')
}