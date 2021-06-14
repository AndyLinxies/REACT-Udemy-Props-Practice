import React from "react";
import Card from "./car_component"
import contacts from "../contacts"
console.log(contacts[0].name);

//Mapping
//On remarque que les 3 cartes on des données repétitives. On peut appeller la fonction map
//contacts.map va servir à faire une boucle dans l'array contact (importé plus haut)
//contact.map(). On appel la fonction map sur l'Array contact, dans les () y met une autre fonction. fonction dans fonction. Fonctionception :) .VOIR LIGNE 20

//Imaginons que cette fonction crée un seul contact (Le pemier, celui de Beyonce)
//Les propriétés reprennent les données de l'array contact SANS toute fois SPECIFIER l'index
//les props sont donnés par rapport au param de la fonction (contact) et non par directement rapport a l'array contactS
//Dans les props il nous faut une key qui doit etre unique pour chaque contact. ici on va choisir l'id (les autres sont deja utilisé sinon ils auraient pu faire l'affaire).Peut etre un string ou un nombre
//La key n'est pas une props a laquelle on peut acceder pour afficher par ex la id. Pour se faire il va falloir creer une autre props avec un nom different et qui a la meme valeur 
function createCard(contact){
  return <Card
  key={contact.id}
  keyvu={contact.id}
  name={contact.name}
  src={contact.imgURL}
  phone= {contact.phone}
  email={contact.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)} {/*Lieu injections des cartes via la boucle map*/}
      {/* <Card 
      name={contacts[0].name} 
      src={contacts[0].imgURL} 
      phone= {contacts[0].phone} 
      email={contacts[0].email} />
      
      <Card 
      name={contacts[1].name} 
      src={contacts[1].imgURL} 
      phone= {contacts[1].phone} 
      email={contacts[1].email} />
      
      <Card 
      name={contacts[2].name} 
      src={contacts[2].imgURL} 
      phone= {contacts[2].phone} 
      email={contacts[2].email} /> */}

    </div>
  );
}

export default App;
