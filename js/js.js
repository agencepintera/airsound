document.querySelector(".rock").addEventListener("click", rock);

document.querySelector(".rap").addEventListener("click", rap);

document.querySelector(".elec").addEventListener("click", elec);

document.querySelector(".var").addEventListener("click", vari);

function rock() {
  document.querySelector(".apparait").innerHTML = `
    <div class=leTout>
    <h2>Les groupes de rock</h2>
    <div class="texte">
        <p>Le genre de musique le plus populaire à travers les décennies, 
        le rock vient faire un tour AIR SOUND Festival ! Déchaînez-vous avec certains grands noms du rock français ainsi qu’un groupe en plein essor ! 
        </p>
    </div>
    <div class="ligne">
        <div class=imageG>
            <img src="img/skipTheUse.jpg" alt="">
        </div>
        <div>
            <h2 class="h2D">Skip The Use</h2>
            <p class="paragrapheD">Le groupe à l’origine du titre à portée mondiale <i>Ghost</i> se tiendra sur la scène du AIR SOUND Festival. Mêlant pop, rock, electro, funk rock et punk, Skip The Use connaît une montée en popularité en 2013 grâce à la sortie du clip <i>Nameless World</i> par l’auteur de <i>Zombillénium</i>.
            .</p>
        </div>
    
    </div>
  
    <div class="ligne">
        <div>
            <h2 class="h2G">Dionysos</h2>
            <p class="paragrapheG">Le groupe à l'origine de La <i>Mécanique du cœur</i> et <i>Tais-toi mon cœur</i> avec Olivia Ruiz font enfin leur retour sur les planches alsaciennes et cette fois-ci au AIR SOUND Festival. Profitez de leur musique entraînante et fêtez avec le groupe au nom du dieu du vin.</p>
        </div>
        <div class=imageD>
            <img  src="img/Dionysos.jpg" alt="">
        </div>
    </div>
    <div class="ligne">
            <div class=imageG>
            <img  src="img/Havana.jpg" alt="">
            </div>
        <div>
            <h2 class="h2D">Havana Blues
            </h2>
            <p class="paragrapheD">Jeune groupe de rock originaire de Strasbourg, Havana Blues se spécialise dans le Blues Rock. La bande s’efforçant de créer encore et encore, est constituée de membres de tous horizons : Chili, Equateur, France. Découvrez leurs titres originaux sur la petite scène du festival.</p>
        </div>
    </div>
    </div>`;
}

function rap() {
  document.querySelector(".apparait").innerHTML = `
    <div class=leTout>
    <h2>Les groupes de rap</h2>
    <div class="texte">
        <p>Venez vous enjailler sur les plus gros bangers du rap francophone durant les soirées du AIR SOUND Festival avec les rappeurs les plus en vogue cette année.
        </p>
    </div>
    <div class="ligne">
        <div class=imageG>
            <img src="img/47Ter.jpg" alt="">
        </div>
        <div>
            <h2 class="h2D">47 Ter</h2>
            <p class="paragrapheD">Ayant percé sur YouTube grâce à des vidéos dans lesquelles le groupe reprenait à leur sauce certaines des instrumentales les plus connues, le trio profitera du festival pour promouvoir son prochain album <i>Palme d’or</i>.</p>
        </div>
    
    </div>
  
    <div class="ligne">
        <div>
            <h2 class="h2G">Roméo Elvis + invités</h2>
            <p class="paragrapheG">
            Le rappeur belge revient sur scène mardi juin 2021 à 22h. Entre deux tournages il fera face aux festivaliers avec des invités surprise.
            </p>
        </div>
        <div class=imageD>
            <img  src="img/Roméo_Elvis.jpg" alt="">
        </div>
    </div>
    <div class="ligne">
            <div class=imageG>
            <img  src="img/PLK.jpg" alt="">
            </div>
        <div>
            <h2 class="h2D">PLK</h2>
            <p class="paragrapheD">D’origine strasbourgeoise, l’artiste cumulant les disques de platine se rendra sur la scène de l’événement de l’été à côté de Mulhouse. Il est l’un de ceux qui ont partagé des titres avec le plus de rappeurs durant les dernières années.</p>
        </div>
    </div>
    </div>`;
}

function elec() {
  document.querySelector(".apparait").innerHTML = `
  <div class=leTout>
  <h2>Les groupes d'électro</h2>
  <div class="texte">
      <p>La musique électronique fera un passage parmi les genres représentés par les artistes présents cette année au AIR SOUND Festival. Dansez sur les sons vibrants des talents français dès la première soirée de l'événement le 18 juin 2021.
      </p>
  </div>
  <div class="ligne">
      <div class=imageG>
          <img src="img/C2C.jpg" alt="">
      </div>
      <div>
          <h2 class="h2D">C2C</h2>
          <p class="paragrapheD">
          Les DJs français ont sorti 20 titres à succès dont <i>Down the road</i> et <i>Happy</i> depuis 2012. L’un de ses membres, 20syl, est aussi membre du groupe de jazz-rap Hocus Pocus créé en 1995.
          </p>
      </div>
  
  </div>

  <div class="ligne">
      <div>
          <h2 class="h2G">Møme</h2>
          <p class="paragrapheG">
          Le compositeur de <i>Aloha</i> sera également de la partie le 22 juin pour célébrer la musique ! Il présentera son nouvel EP <i>Morphine</i> en exclusivité avant sa sortie sur les plateformes de streaming le 1er juillet 2021.
          </p>
      </div>
      <div class=imageD>
          <img  src="img/Møme.jpg" alt="">
      </div>
  </div>
  <div class="ligne">
          <div class=imageG>
          <img  src="img/petitBiscuit.png" alt="">
          </div>
      <div>
          <h2 class="h2D">Petit Biscuit</h2>
          <p class="paragrapheD">Faisant danser le monde depuis 2016, le DJ rouennais nous partagera ses bonnes summer vibes durant la seconde soirée du festival AIR SOUND avec son titre phare <i>Sunset Lover</i>.</p>
      </div>   
  </div>
  </div>`;
}

function vari() {
  document.querySelector(".apparait").innerHTML = `
  <div class=leTout>
  <h2>Les groupes de variété Francaise</h2>
  <div class="texte">
      <p>Profitez d’artistes de variété française durant le festival AIR SOUND

      </p>
  </div>
  <div class="ligne">
      <div class=imageG>
          <img src="img/pomme.png" alt="">
      </div>
      <div>
          <h2 class="h2D">Pomme</h2>
          <p class="paragrapheD">
Étoile montante de la chanson française, la chanteuse Pomme est en pleine ascension. Elle reproduira ses musiques phares en plus de titres inédits.
          </p>
      </div>
  
  </div>

  <div class="ligne">
      <div>
          <h2 class="h2G">Philippe Katerine
          </h2>
          <p class="paragrapheG">
          Personnage haut en couleurs, Philippe Katerine se rendra également dans la campagne en périphérie de Mulhouse pour partager ses nouveaux titres. Il a été récompensé par un César du meilleur second rôle pour son interprétation dans <i>Le Grand Bain</i> de Gilles Lellouche.
          </p>
      </div>
      <div class=imageD>
          <img  src="img/Phillipe.jpg" alt="">
      </div>
  </div>
  <div class="ligne">
          <div class=imageG>
          <img  src="img/Gaetan.jpg" alt="">
          </div>
      <div>
          <h2 class="h2D">Gaëtan Roussel</h2>
          <p class="paragrapheD">
          Anciennement leader de Louise Attaque, Gaëtan Roussel continue de nous émerveiller et de nous faire danser avec son univers et sa bonne humeur.</p>
      </div>   
  </div>
  </div>`;
}

var countDate = new Date("Jun 18, 2021 18:00:00").getTime();

function fest() {
  var now = new Date().getTime();
  gap = countDate - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(gap / day);
  var h = Math.floor((gap % day) / hour);
  var m = Math.floor((gap % hour) / minute);
  var s = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = d;
  document.querySelector(".hour").innerText = h;
  document.querySelector(".min").innerText = m;
  document.querySelector(".sec").innerText = s;
}
setInterval(fest, 1000);
fest();
