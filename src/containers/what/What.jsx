import React from "react";
import "./what.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Une Nouvelle Ère d'Internet",
    text: "Le Web3, c'est l'Internet nouvelle génération. Imaginez Internet comme un immense livre d'histoire. Le Web1 était la table des matières, le Web2 était le contenu, mais le Web3 est comme un livre vivant où chaque page peut interagir, changer, et apprendre. Il est alimenté par la technologie de la blockchain, permettant aux utilisateurs de posséder leurs données, d'accéder à des services sans intermédiaires, et de participer activement à la construction de cet univers numérique.",
  },
  {
    title: "Internet de la Confiance",
    text: "Le Web3 c'est l'Internet de la confiance. Au lieu de dépendre de grandes entreprises pour gérer nos informations, le Web3 nous donne le contrôle. Grâce à la blockchain, vos données personnelles sont stockées de manière sécurisée, vous permettant de choisir ce que vous partagez, avec qui, et pour combien de temps. Plus de confidentialité, moins de publicités intrusives, et la possibilité de gagner de la valeur à partir de vos données.",
  },
  {
    title: "La Décentralisation Redéfinie",
    text: "Le Web3, c'est la décentralisation. Dans le Web1 et le Web2, les sociétés technologiques géantes dictaient les règles. Le Web3 renverse ce modèle en utilisant des contrats intelligents et des réseaux décentralisés. Cela signifie que les applications fonctionnent sans un seul point de contrôle, rendant la censure difficile. Vous pouvez être un acteur actif dans la gouvernance des protocoles et des applications que vous utilisez.",
  },
  {
    title: "L'Économie Numérique du Futur",
    text: "Le Web3, c'est l'ère de l'économie numérique nouvelle. Dans le Web3, la propriété numérique devient une réalité. Des biens virtuels aux œuvres d'art numériques, tout peut être possédé et échangé en toute sécurité. De plus, grâce aux jetons cryptographiques, vous pouvez être récompensé pour votre participation à des réseaux, à des jeux, et à des plateformes. En somme, le Web3 transforme Internet en un espace où chaque utilisateur est un acteur principal, où la confiance et la propriété sont valorisées, et où les opportunités numériques abondent.",
  },
];

function What() {
  return (
    <div className="web3wise__what section__padding">
      <div className="web3wise__what-heading">
        <h2>La Révolution Digitale Qui Met le Pouvoir Entre Vos Mains</h2>
      </div>
      <div className="web3wise__what-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}

export default What;
