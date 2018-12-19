
var globalTitle = "    Winter     Is Coming";

function urlSlug(title) {
    let arr = [];
    let regex1 = /[A-Z]/;
    let regex2 = /\s/;
    for(let i = 0; (i-1) < title.length; i++){
        arr.push(title[i]);
        if(regex1.test(arr[i]) === true && regex2.test(arr[i-1]) === true){
            arr.splice((i-1),1,'-');
        }
    } 
    let slug1 = [];
    let slug2 = [];
    for(let j = 0; j < arr.length; j++){
       if(arr[j] != " "){
          slug1.push(arr[j]);
       }
    }
    slug1 = slug1.join('').toLowerCase();
    slug2 = slug1.slice(1);

    return (slug1[0] == "-" ?  slug2:  slug1);  
}

var winterComing = urlSlug(globalTitle); // Returns "winter-is-coming"






// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs/
