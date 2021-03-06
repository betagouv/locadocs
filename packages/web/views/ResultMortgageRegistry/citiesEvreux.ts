import { normalizeCityName } from './normalizeCityName';

export const citiesEvreux = [
  'Acon',
  'Aigleville',
  'Ambenay',
  'Angerville-la-Campagne',
  'Armentières-sur-Avre',
  'Arnières-sur-Iton',
  'Aulnay-sur-Iton',
  'Aviron',
  'Avrilly',
  'Bacquepuis',
  'Bâlines',
  'Beaubray',
  'Bémécourt',
  'Bernienville',
  'Bois-Anzeray',
  'Bois-Arnault',
  'Bois-le-Roi',
  'Bois-Normand-près-Lyre',
  'Boisset-les-Prévanches',
  'Boncourt',
  'Bourth',
  'Bretagnolles',
  'Breteuil',
  'Breuilpont',
  'Breux-sur-Avre',
  'Brosville',
  'Bueil',
  'Buis-sur-Damville',
  'Burey',
  'Caillouet-Orgeville',
  'Caugé',
  'Chaignes',
  'Chaise-Dieu-du-Theil',
  'Chambord',
  'Chambray',
  'Champ-Dolent',
  'Champignolles',
  'Champigny-la-Futelaye',
  'Chanteloup',
  'Chavigny-Bailleul',
  'Chennebrun',
  'Chéronvilliers',
  'Cierrey',
  'Cintray',
  'Claville',
  'Collandres-Quincarnon',
  'Conches-en-Ouche',
  'Condé-sur-Iton',
  'Corneuil',
  'Coudres',
  'Courdemanche',
  'Courteilles',
  'Croisy-sur-Eure',
  'Croth',
  'Dame-Marie',
  'Damville',
  'Dardez',
  'Droisy',
  'Émalleville',
  'Émanville',
  'Épieds',
  'Évreux',
  'Évreux',
  'Ézy-sur-Eure',
  'Fains',
  'Fauville',
  'Faverolles-la-Campagne',
  'Ferrières-Haut-Clocher',
  'Fontaine-sous-Jouy',
  'Foucrainville',
  'Francheville',
  'Fresney',
  'Gadencourt',
  'Garencières',
  'Garennes-sur-Eure',
  'Gauciel',
  'Gaudreville-la-Rivière',
  'Gauville-la-Campagne',
  'Glisolles',
  'Gournay-le-Guérin',
  'Gouville',
  'Grandvilliers',
  'Graveron',
  'Gravigny',
  'Grossœuvre',
  'Guernanville',
  'Guichainville',
  'Hardencourt-Cocherel',
  'Hécourt',
  'Houlbec-Cocherel',
  'Huest',
  'Illiers-l’Évêque',
  'Irreville',
  'Ivry-la-Bataille',
  'Jouy-sur-Eure',
  'Juignettes',
  'Jumelles',
  'L’Habit',
  'L’Hosmes',
  'La Boissière',
  'La Bonneville-sur-Iton',
  'La Chapelle-du-Bois-des-Faulx',
  'La Chapelle-Réanville',
  'La Couture-Boussey',
  'La Croisille',
  'La Ferrière-sur-Risle',
  'La Forêt-du-Parc',
  'La Guéroulde',
  'La Haye-Saint-Sylvestre',
  'La Heunière',
  'La Madeleine-de-Nonancourt',
  'La Neuve-Lyre',
  'La Trinité',
  'La Vieille-Lyre',
  'Le Boulay-Morin',
  'Le Chesne',
  'Le Cormier',
  'Le Fidelaire',
  'Le Fresne',
  'Le Mesnil-Fuguet',
  'Le Mesnil-Hardray',
  'Le Plessis-Grohan',
  'Le Plessis-Hébert',
  'Le Roncenay-Authenay',
  'Le Sacq',
  'Le Tilleul-Lambert',
  'Le Val-David',
  'Le Vieil-Évreux',
  'Les Authieux',
  'Les Barils',
  'Les Baux-de-Breteuil',
  'Les Baux-Sainte-Croix',
  'Les Bottereaux',
  'Les Essarts',
  'Les Ventes',
  'Lignerolles',
  'Louversey',
  'Louye',
  'Mandres',
  'Manthelon',
  'Marcilly-la-Campagne',
  'Marcilly-sur-Eure',
  'Ménilles',
  'Mercey',
  'Merey',
  'Mesnil-sur-l’Estrée',
  'Miserey',
  'Moisville',
  'Mouettes',
  'Mousseaux-Neuville',
  'Muzy',
  'Nagel-Séez-Mesnil',
  'Neaufles-Auvergny',
  'Neuilly',
  'Nogent-le-Sec',
  'Nonancourt',
  'Normanville',
  'Ormes',
  'Orvaux',
  'Pacy-sur-Eure',
  'Parville',
  'Piseux',
  'Portes',
  'Prey',
  'Pullay',
  'Quessigny',
  'Quittebeuf',
  'Reuilly',
  'Roman',
  'Rouvray',
  'Rugles',
  'Sacquenville',
  'Saint-André-de-l’Eure',
  'Saint-Antonin-de-Sommaire',
  'Saint-Aquilin-de-Pacy',
  'Saint-Christophe-sur-Avre',
  'Saint-Denis-du-Béhélan',
  'Saint-Élier',
  'Saint-Georges-Motel',
  'Saint-Germain-de-Fresney',
  'Saint-Germain-des-Angles',
  'Saint-Germain-sur-Avre',
  'Saint-Just',
  'Saint-Laurent-des-Bois',
  'Saint-Luc',
  'Saint-Marcel',
  'Saint-Martin-la-Campagne',
  'Saint-Nicolas-d’Attez',
  'Saint-Ouen-d’Attez',
  'Saint-Pierre-d’Autils',
  'Saint-Sébastien-de-Morsent',
  'Saint-Victor-sur-Avre',
  'Saint-Vigor',
  'Saint-Vincent-des-Bois',
  'Sainte-Colombe-la-Commanderie',
  'Sainte-Colombe-près-Vernon',
  'Sainte-Marguerite-de-l’Autel',
  'Sainte-Marthe',
  'Sassey',
  'Sébécourt',
  'Sémerville',
  'Serez',
  'Sylvains-les-Moulins',
  'Thomer-la-Sôgne',
  'Tillières-sur-Avre',
  'Tournedos-Bois-Hubert',
  'Tourneville',
  'Vaux-sur-Eure',
  'Verneuil-sur-Avre',
  'Vernon',
  'Villalet',
  'Villegats',
  'Villez-sous-Bailleul',
  'Villiers-en-Désœuvre',
].map(normalizeCityName);
