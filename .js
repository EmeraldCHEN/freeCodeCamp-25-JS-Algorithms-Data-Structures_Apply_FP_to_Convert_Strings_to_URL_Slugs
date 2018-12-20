// The following code would not use the replace method

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
    
    // Or simply use one line of code as below
    
    // return title.toLowerCase().trim().split(/\W+/).join("-");
}

var winterComing = urlSlug(globalTitle); // Returns "winter-is-coming"



/****** But the code above cannot remove the "_" if any  ********************************/

function urlSlugNoUnderscore(title) {
 
     let slug = title.split(/[\W_]+/g);

     // if  let slug = title.split(/\W/);  -->  slug is an array  has no punctuation but the underscores still remain

     return slug.filter(element => element !== '').join('-').toLowerCase(); 
}
var title = "_Winter Is_ Coming";

urlSlugNoUnderscore(title);  // Returns "winter-is-coming"


/*  \w is a shortcut to match alphanumerics [A-Za-z0-9_] including the underscore character _
    \W is the same as [^A-Za-z0-9_] to match everything but letters & numbers

 Retrieved from
 https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs/
*/
