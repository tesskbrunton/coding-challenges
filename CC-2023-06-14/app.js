// Description:

// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

//     Terrible: tip 0%
//     Poor: tip 5%
//     Good: tip 10%
//     Great: tip 15%
//     Excellent: tip 20%

// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

//     "Rating not recognised" in Javascript, Python and Ruby...
//     ...or null in Java
//     ...or -1 in C#

// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
  let lowercaseRating = rating.toLowerCase()
  if (rating === 'terrible') {
    return 0;
  } else if (lowercaseRating === 'poor') {
    return Math.ceil((5 / 100) * amount);
  } else if (lowercaseRating === 'good') {
    return Math.ceil((10 / 100) * amount);
  } else if (lowercaseRating === 'great') {
    return Math.ceil((15 / 100) * amount);
  } else if (lowercaseRating === 'excellent') {
    return Math.ceil((20 / 100) * amount);
  }else{
    return "Rating not recognised"
  }
}