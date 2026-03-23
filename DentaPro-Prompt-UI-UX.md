# DentaPro — Prompt UI/UX Complet

## Contexte du Projet

Tu es le designer UI/UX principal de **DentaPro**, une plateforme cloud de gestion de cabinet dentaire destinée au marché marocain. Le produit est vendu en **licence unique** (12 000 – 25 000 DH) avec des interventions facturées à la carte. Chaque client (cabinet dentaire) dispose de **son propre nom de domaine** (ex: cabinet-karim.ma, clinique-sourire.ma).

Le produit a **deux faces** sur le même domaine :

1. **Site Vitrine Prestige** (public) — un site ultra-cinématique pour les cabinets haut de gamme, avec vidéo de fond, animations au scroll, parallaxe multi-couches. C'est la première impression du patient.
2. **Dashboard de Gestion** (privé, derrière /login) — l'outil quotidien du dentiste et de son équipe pour gérer patients, RDV, stock, facturation et finances.

---

## Identité Visuelle — Système de Thème par IA

Chaque cabinet a une identité visuelle **unique**, générée automatiquement par IA. Le client envoie son logo + des photos de son cabinet → Claude Vision analyse les couleurs dominantes, l'ambiance (moderne, luxueux, chaleureux, clinique), la luminosité → génère un thème complet (16 couleurs, border radius, style de cartes, densité, style de sidebar).

### Ce que ça implique pour le design :
- **Aucune couleur n'est fixe.** Tout passe par des CSS variables (--primary, --secondary, --accent, --background, --foreground, etc.)
- Le design doit **fonctionner avec n'importe quelle palette** : bleu teal, vert forêt, violet royal, rose, slate, ou même un thème sombre complet
- Chaque composant doit être testé visuellement avec au moins un thème clair et un thème sombre
- Le logo du client apparaît dans : sidebar du dashboard, en-tête du site vitrine, PDF des factures/devis, page de login
- Les couleurs du thème s'appliquent partout : dashboard, site vitrine, PDF, emails de rappel

### Palette par défaut DentaPro (utilisée en démo et si le client n'a pas encore de thème) :
- Primary : `#1B6B93` (bleu teal profond)
- Secondary : `#4FC0D0` (teal clair)
- Accent : `#F0A500` (or)
- Background : `#FFFFFF`
- Foreground : `#333333`
- Muted : `#F5F5F5`
- Destructive : `#EF4444`

---

## Interface Bilingue — Français / Arabe

L'app est intégralement bilingue. L'utilisateur peut switcher entre français et arabe **instantanément**, sans rechargement de page.

### Contraintes de design :
- **RTL complet pour l'arabe** : la sidebar passe à droite, les icônes de navigation s'inversent, les tableaux se lisent de droite à gauche, les formulaires s'alignent à droite
- **La typographie arabe** nécessite un line-height plus généreux (~1.8 vs 1.5 pour le français)
- Les termes dentaires spécialisés sont traduits et validés (pas de traduction Google approximative)
- La préférence de langue est sauvegardée par utilisateur
- Les PDF de devis/factures sont bilingues : français à gauche, arabe à droite (ou configurable)
- La police système (`system-ui`) est utilisée pour les deux langues — elle gère nativement le français et l'arabe

---

## Partie 1 — Site Vitrine Prestige (Public)

### Vision

Un site web **ultra-cinématique** qui donne l'impression d'entrer dans le cabinet avant même d'y mettre les pieds. Chaque client reçoit le même code, mais avec ses propres vidéos, photos, couleurs et contenus. Le résultat doit sembler totalement différent d'un cabinet à l'autre.

L'esthétique cible : entre un site d'**hôtel 5 étoiles** et une **clinique dentaire de Dubaï**. Minimaliste mais vivant. Luxueux mais accessible. Beaucoup de mouvement, mais jamais gratuit — chaque animation sert l'immersion.

### Structure des pages

```
/                → Hero vidéo fullscreen + sections services/équipe/témoignages/RDV
/services        → Détail de chaque service (implants, orthodontie, esthétique...)
/equipe          → Portraits des praticiens avec biographies
/rdv             → Formulaire de prise de rendez-vous en ligne (→ alimente le dashboard)
/login           → Accès au dashboard privé
```

### Mécanismes Cinématiques

Le site propose **plusieurs packs d'animation** assignables par client. Chaque pack est un ensemble de configurations (durées, easings, types d'entrée, effets) appliqué sur la même structure de page.

#### Pack "Cinematic" — Lent, profond, immersif
- Hero vidéo fullscreen en boucle seamless, slow-motion
- Parallaxe au scroll : la vidéo se compresse, la section suivante "émerge" dessous
- Éléments apparaissent avec des reveals lents (1.2s ease-out)
- Grain film overlay subtil sur toute la page
- Transitions entre sections par superposition douce
- Textes qui apparaissent mot par mot avec masque animé
- Ambiance : cinéma, documentaire, contemplation

#### Pack "Fluid" — Liquide, organique, vivant
- Transitions morphing entre sections (clip-path curves animées)
- Mouvements Bézier courbes, rien de linéaire
- Images qui se dévoilent comme de l'eau qui coule (clip-path wave)
- Sections qui ondulent légèrement au scroll
- Fond avec gradient mesh animé lentement
- Hover : éléments qui se déforment doucement au survol
- Ambiance : spa, bien-être, fluidité

#### Pack "Precision" — Net, géométrique, chirurgical
- Entrées rapides et nettes (0.4s ease-in-out)
- Clip-path géométriques : rectangles, diagonales, triangles
- Lignes qui se dessinent (SVG stroke animation)
- Textes qui apparaissent par tranche horizontale
- Grid lines subtiles en arrière-plan
- Hover : snap rapide, pas de transition molle
- Ambiance : chirurgical, technologique, précision médicale

#### Pack "Luxe" — Doré, lumineux, bijouterie
- Cursor glow : lumière douce qui suit le curseur sur les sections sombres
- Particules dorées subtiles (canvas ou three.js, très léger)
- Text shimmer : reflet doré qui glisse sur les titres au scroll
- Reveal par masque doré (gold gradient wipe)
- Hover 3D tilt sur les cartes (perspective transform)
- Typographie serif élégante (Playfair Display, Cormorant Garamond)
- Ambiance : joaillerie, palace, haute couture

#### Pack "Minimal Motion" — Retenu, subtil, élégant
- Micro-animations presque imperceptibles
- Fade-in très doux (opacity seulement, pas de translate)
- Scroll natif (pas de smooth scroll artificiel)
- Aucun effet spécial, aucune particule
- L'élégance vient de l'espace, de la typo, du rythme
- Hover : changement d'opacité subtil, pas de mouvement
- Ambiance : galerie d'art, architecture minimaliste, silence

### Composants du Site Vitrine

- **VideoHero** — `<video>` plein écran, loop, muted, avec overlay gradient (couleurs du thème), texte hero centré, scroll indicator animé. La vidéo peut être contrôlée par le scroll (playback rate).
- **FloatingNav** — Navigation transparente fixe en haut, devient opaque au scroll. Logo du client à gauche (ou droite en RTL). Liens : Accueil, Services, Équipe, RDV. Bouton CTA "Prendre RDV" accent.
- **SectionReveal** — Wrapper générique pour les animations d'entrée de section. Accepte un prop `animationPack` qui détermine le style d'animation.
- **ServiceCard** — Carte pour un service dentaire. Image, titre, description courte. Hover effect selon le pack d'animation.
- **TeamMember** — Portrait rond ou carré d'un praticien. Nom, titre, courte bio. Hover pour voir la bio complète.
- **Testimonial** — Citation d'un patient. Prénom, note (étoiles), texte. Design discret et crédible.
- **RDVForm** — Formulaire de prise de RDV public. Champs : nom, téléphone, date souhaitée, type de soin. Intégré directement à la table `rendez_vous` du dashboard.
- **GrainOverlay** — Texture de grain film en overlay CSS (si activé par le pack).
- **CursorGlow** — Cercle lumineux qui suit le curseur (pack Luxe uniquement).
- **ScrollProgress** — Barre de progression fine en haut de la page.

### Stack d'Animation
- **GSAP** (ScrollTrigger + SplitText) pour toutes les animations au scroll
- **Lenis** pour le smooth scroll (packs Cinematic, Fluid, Luxe)
- **Framer Motion** pour les micro-interactions React (hover, apparitions)
- **Three.js** léger (uniquement pour les particules du pack Luxe, optionnel)

### Contenu dynamique par client
Tout le contenu du site vitrine est stocké en base de données et éditable depuis le dashboard :
- Textes hero (titre + sous-titre FR/AR)
- URL de la vidéo de fond
- Liste des services (nom, description, icône, image)
- Liste de l'équipe (nom, titre, photo, bio)
- Témoignages patients
- Horaires d'ouverture
- Coordonnées et carte Google Maps

---

## Partie 2 — Dashboard de Gestion (Privé)

### Vision

Un tableau de bord **propre, efficace, rapide**. Le dentiste et son assistante l'utilisent toute la journée entre deux patients. Chaque clic compte. L'interface doit être **scannable en 2 secondes** : le praticien regarde l'écran et sait immédiatement combien de patients il a aujourd'hui, quel est le prochain RDV, et s'il y a des alertes.

L'esthétique cible : entre **Notion** (propreté, espace) et **Linear** (vitesse, densité d'information, clavier). Pas de décoration inutile. Pas de gradients cosmétiques. Les couleurs du thème client s'appliquent, mais restent sobres dans le dashboard — le accent est réservé aux actions importantes.

### Utilisateurs Types

| Rôle | Usage | Besoins UI |
|------|-------|------------|
| **Dentiste (admin)** | Entre 2 patients, regarde le dashboard sur tablette | Gros boutons, info condensée, accès rapide aux fiches patients |
| **Assistante** | Accueil, toute la journée devant l'écran | Calendrier RDV en grand, recherche patients rapide, alertes stock |
| **Propriétaire clinique** | Le soir, analyse les chiffres | Graphiques financiers, comparaisons, export rapports |

### Layout Principal

```
┌──────────────────────────────────────────────────────┐
│  Header : Logo client | Recherche rapide | 🔔 | 🌐 FR/AR | Avatar  │
├──────────┬───────────────────────────────────────────┤
│          │                                           │
│ Sidebar  │              Contenu principal             │
│          │                                           │
│ 📊 Dashboard │                                       │
│ 👥 Patients  │                                       │
│ 📅 Agenda    │                                       │
│ 💰 Facturation│                                      │
│ 📦 Stock     │                                       │
│ 📉 Dépenses  │                                       │
│ ⚙️ Paramètres│                                       │
│          │                                           │
├──────────┴───────────────────────────────────────────┤
│  Footer minimal (optionnel) : "Propulsé par DentaPro"        │
└──────────────────────────────────────────────────────┘
```

- **Sidebar** : collapsible (icônes seules en mode compact), badge de notification sur Stock si alerte, couleur d'arrière-plan pilotée par le thème (`--sidebar`, `--sidebar-accent`)
- **Header** : barre de recherche globale (cherche patients, RDV, factures en même temps), toggle langue FR/AR, cloche notifications, avatar avec dropdown (profil, déconnexion)
- **Responsive** : sur mobile/tablette, la sidebar devient un drawer (hamburger menu)

### Modules du Dashboard

#### 1. Page d'accueil — Dashboard KPIs

L'écran que le dentiste voit en premier chaque matin.

**Ligne 1 — 4 cartes KPI :**
- CA du jour (montant + comparaison jour précédent, flèche verte/rouge)
- Patients du jour (nombre de RDV planifiés)
- Impayés en cours (montant total des factures non réglées)
- Alertes stock (nombre de produits sous le seuil)

**Ligne 2 — Graphiques :**
- Graphique principal : évolution du CA sur 30 jours (line chart, aire colorée avec la couleur primary)
- Graphique secondaire : répartition du CA par type d'acte (donut chart)

**Ligne 3 — Activité récente :**
- Prochains RDV du jour (liste compacte : heure, patient, acte)
- Dernières factures émises
- Derniers paiements reçus

#### 2. Module Patients

**Liste patients** — tableau avec colonnes : nom complet, téléphone, dernier RDV, solde dû. Recherche instantanée (filtrage côté client). Tri par colonne. Pagination. Bouton "+ Nouveau patient" en haut à droite.

**Fiche patient** — page dédiée avec onglets :
- **Infos** : identité, coordonnées, date de naissance, allergies (badge rouge si allergies), notes cliniques
- **Historique** : timeline verticale de toutes les visites (date, acte réalisé, praticien, montant)
- **Facturation** : liste des devis et factures liés, solde dû, bouton "Créer un devis"
- **RDV** : historique et prochains rendez-vous

**Import CSV** — assistant en 3 étapes : upload du fichier → mapping des colonnes → preview + confirmation. Pour la migration depuis Excel.

#### 3. Module Agenda / RDV

**Vue principale** — calendrier interactif, switchable entre vue jour / semaine / mois.

- **Vue jour** : timeline verticale par tranches de 15 min. Chaque RDV = bloc coloré (couleur selon le type d'acte : bleu consultation, vert soin, orange chirurgie, gris contrôle)
- **Vue semaine** : grille 7 colonnes, même code couleur
- **Vue mois** : vue calendrier classique avec nombre de RDV par jour et points colorés

**Création de RDV** — modal ou drawer latéral : sélection du patient (recherche autocomplete), date/heure, durée, type d'acte, praticien (si clinique multi-dentistes), notes.

**Drag & drop** — replanification par glisser-déposer directement dans le calendrier.

**Multi-praticiens** — toggle en haut pour voir l'agenda d'un praticien spécifique ou de tous en même temps (colonnes côte à côte en vue jour).

**Rappels** — indicateur visuel sur chaque RDV : icône WhatsApp verte si rappel envoyé, grise si en attente, rouge si échec.

#### 4. Module Facturation & Devis

**Liste factures/devis** — tableau avec filtres : statut (brouillon, envoyée, payée, partielle, annulée), type (devis/facture), période. Badge de couleur pour chaque statut.

**Création de devis** :
1. Sélection du patient
2. Ajout d'actes depuis le catalogue (autocomplete, quantité, prix modifiable)
3. Sous-total, remise optionnelle, total
4. Preview PDF en temps réel dans un panneau latéral
5. Bouton "Enregistrer comme brouillon" ou "Envoyer au patient"

**Conversion devis → facture** — un bouton "Convertir en facture". Reprend toutes les lignes, change le type et attribue un numéro de facture automatique.

**Enregistrement de paiement** — modal : montant payé, mode de paiement (espèces/carte/virement/chèque), date. Gestion des paiements partiels (acompte + solde).

**PDF** — génération côté client. Template avec :
- Logo du client en haut
- Infos cabinet (nom, adresse, téléphone, ICE)
- Infos patient
- Tableau des actes (nom FR + AR, quantité, prix unitaire, total)
- Montant total + montant payé + reste dû
- Numéro de facture (format : F-2026-0001)
- Couleurs du thème client (primary pour les en-têtes, accent pour les totaux)

#### 5. Module Stock

**Catalogue produits** — grille ou liste : nom du produit, catégorie (consommable, instrument, médicament), quantité actuelle, seuil d'alerte, prix d'achat. **Badge rouge** si quantité ≤ seuil.

**Alertes visuelles** — banner en haut de la page si des produits sont sous le seuil. Couleur `destructive`.

**Mouvements** — historique entrées/sorties avec date, quantité, fournisseur, notes. Bouton "+ Entrée de stock" et "- Sortie de stock".

**Liaison acte-stock** (optionnel, intervention facturable) : quand un acte est réalisé, le stock du matériel associé est automatiquement décrémenté.

#### 6. Module Dépenses

**Saisie simple** — formulaire : catégorie (loyer, salaires, matériel, fournitures, autre), montant, date, description, fournisseur. Pas de complexité comptable — c'est un suivi interne.

**Vue mensuelle** — graphique en barres par catégorie. Total du mois. Comparaison mois précédent.

#### 7. Paramètres

Sous-pages :
- **Cabinet** : nom, adresse, téléphone, ICE, horaires
- **Utilisateurs** : gestion des comptes (ajouter praticien, assistante), rôles
- **Actes dentaires** : catalogue personnalisable (nom FR/AR, tarif par défaut, catégorie)
- **Apparence / Theme Studio** : upload logo + photos → génération thème IA → aperçu live → color editors → sauvegarde
- **Notifications** : configuration rappels WhatsApp (activer/désactiver, timing J-1, H-2)
- **Site Vitrine** : contenu du site public (textes, services, équipe, témoignages) — éditable sans toucher au code

---

## Principes de Design Transversaux

### Accessibilité
- Contraste WCAG AA (≥ 4.5:1) sur toutes les paires couleur/fond — vérifié automatiquement par le Theme Studio
- Focus visible sur tous les éléments interactifs (outline `--primary`)
- Navigation clavier complète
- Labels ARIA sur tous les éléments de formulaire
- Taille de cible tactile minimum 44×44px (les dentistes utilisent souvent une tablette avec des gants)

### Performance
- Skeleton loaders sur chaque page (pas de spinner tournant)
- Lazy loading des images et des graphiques
- Pagination côté serveur pour les listes > 50 items
- Le site vitrine doit charger en < 3 secondes (LCP) malgré la vidéo de fond

### Feedback Utilisateur
- **Toast notifications** pour chaque action (patient créé, facture envoyée, paiement enregistré)
- **Confirmation dialog** avant toute suppression (avec le nom de l'élément affiché)
- **Optimistic UI** : le RDV apparaît immédiatement dans le calendrier avant la confirmation serveur
- **Empty states** illustrés : quand une liste est vide, un message + illustration + CTA (ex: "Aucun patient encore. Importez vos données depuis Excel →")

### Responsive
- **Mobile-first** : le dentiste consulte souvent sur téléphone entre deux patients
- **Tablette** : format principal pour l'assistante à l'accueil
- **Desktop** : format du propriétaire de clinique pour l'analyse financière
- Breakpoints : mobile (< 768px), tablette (768-1024px), desktop (> 1024px)

### Micro-interactions (Dashboard)
- Hover sur les lignes de tableau : background légèrement coloré (`--muted`)
- Clic sur une carte KPI : navigation vers le détail correspondant
- Drag & drop RDV : ombre portée + snap visuel sur le créneau cible
- Toggle langue : animation de rotation de l'icône globe + texte qui slide
- Sidebar collapse : animation smooth de largeur (250px → 60px)

---

## Stack Technique UI

- **Framework** : Next.js 14 (App Router)
- **Composants** : shadcn/ui (Radix UI primitives + Tailwind CSS)
- **Graphiques** : Recharts (line, bar, donut, area charts)
- **Calendrier** : FullCalendar ou composant custom
- **Animations site vitrine** : GSAP + ScrollTrigger + Lenis + Framer Motion
- **PDF** : React-PDF / jsPDF
- **Thème** : CSS variables injectées dynamiquement via ThemeProvider
- **i18n** : fichiers de traduction FR/AR avec support RTL natif Tailwind (`rtl:` prefix)

---

## Ce que le design NE doit PAS être

- ❌ Un dashboard médical froid et gris avec des icônes clipart
- ❌ Un thème Bootstrap générique avec des gradients violets
- ❌ Un site vitrine template WordPress avec un slider
- ❌ Une interface surchargée avec 15 menus et 30 boutons visibles
- ❌ Un design qui ne fonctionne qu'en français
- ❌ Un design qui ne fonctionne qu'avec une seule palette de couleurs
- ❌ Des animations qui ralentissent l'utilisation quotidienne du dashboard
- ❌ Des PDF de factures moches avec du texte brut sans mise en page

## Ce que le design DOIT être

- ✅ Professionnel et rassurant (le dentiste confie ses données patients)
- ✅ Rapide et scannable (entre deux patients, 10 secondes max pour trouver une info)
- ✅ Visuellement unique par cabinet (grâce au thème IA)
- ✅ Impressionnant côté vitrine (le dentiste est fier de montrer son site)
- ✅ Fonctionnel côté dashboard (l'assistante l'utilise 8h/jour sans frustration)
- ✅ Bilingue FR/AR natif, pas un afterthought
- ✅ Adapté au Maroc (WhatsApp > email, espèces > carte, DH comme devise)
