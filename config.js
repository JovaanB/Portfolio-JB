module.exports = {
  pathPrefix: "",
  siteUrl: "https://jovanbienvenu.com",
  siteTitle: "Jovan Bienvenu",
  siteDescription: "Portfolio - JB - développeur web",
  author: "Jovan Bienvenu",
  postsForArchivePage: 3,
  defaultLanguage: "fr",
  disqusScript:
    process.env.DISQUS_SCRIPT || "https://rolwinreevan.disqus.com/embed.js",
  pages: {
    home: "/",
    blog: "blog",
    contact: "contact",
    resume: "resume",
    tag: "tags",
  },
  social: {
    github: "https://github.com/JovaanB",
    facebook: "https://www.facebook.com/jovan.bienvenu.7",
    instagram: "https://www.instagram.com/jovaanc",
    rss: "/rss.xml",
  },
  contactFormUrl:
    process.env.CONTACT_FORM_ENDPOINT ||
    "https://getform.io/f/74233965-ddc6-40fe-9cdc-4deadd4cf5a6",
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || "",
  tags: {
    javascript: {
      name: "javascript",
      description:
        "JavaScript est un langage de programmation orienté objet utilisé parallèlement à HTML et CSS pour donner des fonctionnalités aux pages web.",
      color: "#f0da50",
    },
    nodejs: {
      name: "Node.js",
      description:
        "Node.js est un outil permettant d'exécuter JavaScript dans divers environnements.",
      color: "#90c53f",
    },
    rxjs: {
      name: "RxJS",
      description:
        "RxJS est une bibliothèque de programmation réactive utilisant Observables, pour des opérations asynchrones.",
      color: "#eb428e",
    },
    typescript: {
      name: "typescript",
      description:
        "TypeScript est un sur-ensemble typé de JavaScript qui se compile en JavaScript simple.",
      color: "#257acc",
    },
    reactjs: {
      name: "reactjs",
      description:
        "React est une bibliothèque JavaScript open source utilisée pour la conception d'interfaces utilisateur.",
      color: "#61dbfa",
    },
    gatsby: {
      name: "Gatsby.js",
      description:
        "Un framework construit sur ReactJS pour générer une application web à pages statiques.",
      color: "#6f309f",
    },
    html: {
      name: "HTML",
      description:
        "Un langage de balisage qui alimente le web. Tous les sites web utilisent le langage HTML pour structurer le contenu.",
      color: "#dd3431",
    },
    css: {
      name: "css",
      description:
        "Le CSS est utilisé pour styliser l'élément HTML et pour donner un aspect très fantaisiste à l'application web.",
      color: "#43ace0",
    },
    python: {
      name: "python",
      description:
        "Un langage de programmation d'usage général qui est largement utilisé pour le développement de diverses applications.",
      color: "#f9c646",
    },
  },
}
