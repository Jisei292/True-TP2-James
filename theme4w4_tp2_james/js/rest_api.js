(function(){

    let bouton = document.getElementById('bout_nouvelle')
    let nouvelles = document.querySelector('.nouvelles section')

    window.addEventListener('load', monAjax);

    function monAjax()
{
   let maRequete = new XMLHttpRequest();
   console.log(maRequete)
   maRequete.open('GET', monObjJS.URLDomaine + '/wp-json/wp/v2/posts?per_page=3');
   maRequete.onload = function () {
       console.log(maRequete)
       console.log(maRequete.status + ' - ' + maRequete.responseText )
       if (maRequete.status >= 200 && maRequete.status < 400) {
           let data = JSON.parse(maRequete.responseText);
           console.log(data)
           chaineResultat = ''
           for (const elm of data){
                chaineResultat += '<h2>' + elm.title.rendered + '<h2>'
                chaineResultat += elm.content.rendered
           }
           nouvelles.innerHTML = chaineResultat;
        }
       
       else {
           console.log('La connexion est faite mais il y a une erreur')
       }
   }
   maRequete.onerror = function () {
       console.log("erreur de connexion");
   }
   maRequete.send()
}


/*
traitement Ajout Article De Categorie <<Nouvelle>>
*/

bouton_ajout = document.getElementById('bout-rapide')
bouton_ajout.addEventListener('mousedown', function(){
    console.log('ajout')
    let monArticle = {
        "title" : document.querySelector('.admin-rapid [name="title"]').value,
        "content" : document.querySelector('.admin-rapid [name="content"]').value,
        "status" : "publish",
        "categorie" : [33]

    }

    console.log(JSON.stringify(monArticle))
    let creerArticle = new XMLHttpRequest();

    creerArticle.open("POST", monObjJS.URLDomaine + '/wp-json/wp/v2/posts');
    creerArticle.setRequestHeader("X-WP-Nonce", monObjJS.nonce)
    creerArticle.setRequestHeader("Content-Type", "application/json;charset=UTF8")

    creerArticle.send(JSON.stringify(monArticle)) // transmettre la requete au serveur
    creerArticle.onreadystatechange = function(){
        if (creerArticle.readyState == 4) {
            if (creerArticle.status == 201){
                document.querySelector('.admin-rapid [name="title"]').value = ''
                document.querySelector('.admin-rapid [name="content"]').value = ''
            }
            else{
                alert ('Erreur réessayez - status = ' + creerArticle.status)
            }
        
        }
    }

})

}())	