# Specification

## Étude des concurrents existants

### Concurrents existants

- **Woebot Health**: Woebot Health est un pionnier dans le domaine des chatbots thérapeutiques. Il utilise l'intelligence artificielle pour offrir des thérapies cognitivo-comportementales (TCC) personnalisées. 
Le chatbot est capable de reconnaître les émotions, d'engager des conversations significatives et de fournir des exercices pratiques pour aider les utilisateurs à gérer le stress, l'anxiété et la dépression.

   - Points forts:
    Spécialisation dans la santé mentale
   - Points faibles:
    Peut être moins adapté aux personnes souffrant de troubles mentaux sévères
    Offre peut-être moins de fonctionnalités de suivi médical

- **Youper**: Youper est un chatbot axé sur la santé mentale qui utilise un algorithme d'apprentissage automatique pour adapter les conversations aux besoins individuels de chaque utilisateur. Il se distingue par son approche holistique, en combinant des techniques de méditation, de pleine conscience et de thérapie cognitivo-comportementale.

   - Points forts:
    Approche holistique du bien-être
    Intégration de techniques de relaxation
    Personnalisation avancée

   - Points faibles:
    Peut être moins adapté aux personnes souffrant de troubles mentaux sévères
    Offre peut-être moins de fonctionnalités de suivi médical

- **Florence**: Florence se concentre sur le suivi des maladies chroniques et la gestion des traitements. Il est conçu pour aider les patients à prendre leurs médicaments à l'heure, à suivre leurs symptômes et à communiquer avec leurs médecins. Le chatbot est capable de répondre à des questions sur les traitements, de fournir des rappels personnalisés et d'offrir un soutien émotionnel.
   - Points forts:
    Spécialisation dans la gestion des maladies chroniques
    Intégration avec les dossiers médicaux
    Fonctionnalités de suivi personnalisées

    - Points faibles:
    Peut être moins adapté aux personnes en bonne santé ou souffrant de maladies aiguës
    Offre peut-être moins de fonctionnalités de diagnostic

## Besoins fonctionnels

![Use Case Diagram](C:\Users\ADMIN\OneDrive\Documents\GitHub\MedChat\docs\Conceptions\Use case diagramm.png)




- **Création de conversations**:
  - Autoriser les utilisateurs à démarrer de nouvelles conversations.

- **Historique des conversations**:
  - Stocker l'historique des conversations pour permettre aux utilisateurs de consulter leurs échanges précédents

- **Fonction de recherche**:
  - Mettre en place une fonction de recherche pour retrouver rapidement des informations spécifiques dans les conversations.

- **Partage de fichiers**:
  - Permettre aux utilisateurs de partager des documents, des images ou d'autres fichiers pertinents.

## Besoins non fonctionnels

- **UI/UX**:
* **Interface intuitive et conviviale:** 
    * Navigation fluide et simple d'utilisation.
    * Design clair et agréable, réduisant la fatigue visuelle.
    * Utilisation d'un langage naturel et accessible.
* **Cohérence du design:**
    * Utilisation d'une charte graphique unifiée et harmonieuse.
    * Respect des standards de design et d'ergonomie.
    * Assurer une expérience utilisateur cohérente sur tous les supports (mobile, tablette, ordinateur).
* **Accessibilité:**
    * Adaptation pour les utilisateurs à mobilité réduite (clavier, lecteurs d'écran).
    * Prise en compte des besoins des personnes malvoyantes (contrastes de couleurs, tailles de texte).
    * Respect des normes d'accessibilité (WCAG).

- **Performance**:
* **Temps de chargement rapides:** 
    * Chargement instantané des pages et des éléments.
    * Réactivité immédiate aux interactions de l'utilisateur.
* **Traitement et stockage efficaces des données:**
    * Gestion optimale des données médicales sensibles.
    * Stockage sécurisé et conforme aux réglementations.
    * Minimisation de l'utilisation des ressources système.
* **Scalabilité:**
    * Capacité à gérer un nombre croissant d'utilisateurs et de conversations.
    * Adaptation du système aux pics de demande.
    * Assurer une performance optimale même avec une utilisation intensive.

### Technical Specifications
![Deployment Diagram](C:\Users\ADMIN\OneDrive\Documents\GitHub\MedChat\docs\Conceptions\Deployment digramm.png)

#### Backend

**Framework**: Python Flask
- Architecture API RESTful
- ORM SQLAlchemy pour les interactions avec la base de données

#### Frontend

**Framework**: React.js
- Composants fonctionnels modernes avec hooks
- Design adaptatif pour mobile/desktop

#### Base de données

**PostgreSQL**
- Conception relationnelle de la base de données
- Index pour des requêtes optimisées
- Capacités de recherche plein texte

### Activity Diagram

![Activity Diagram](C:\Users\ADMIN\OneDrive\Documents\GitHub\MedChat\docs\Conceptions\Activity Diagramm.png)

### Sequence Diagram

![Sequence Diagram](C:\Users\ADMIN\OneDrive\Documents\GitHub\MedChat\docs\Conceptions\Sequence Diagramm.png)


Windows Server with:

- Python 12
- NodeJs 22 LTS
- PostgreSQL 16 Server
