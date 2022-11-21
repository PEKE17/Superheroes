const section = document.getElementById('section')

const APIURL = 'https://www.superheroapi.com/api.php/940055144049516/659'
const APIURL1 = 'https://www.superheroapi.com/api.php/940055144049516/644'
const APIURL2 = 'https://www.superheroapi.com/api.php/940055144049516/149'
const APIURL3 = 'https://www.superheroapi.com/api.php/940055144049516/30'
const APIURL4 = 'https://www.superheroapi.com/api.php/940055144049516/70'
const APIURL5 = 'https://www.superheroapi.com/api.php/940055144049516/265'
const APIURL6 = 'https://www.superheroapi.com/api.php/940055144049516/620'
const APIURL7 = 'https://www.superheroapi.com/api.php/940055144049516/332'
const APIURL8 = 'https://www.superheroapi.com/api.php/940055144049516/346'
const APIURL9 = 'https://www.superheroapi.com/api.php/940055144049516/157'
const APIURL10 = 'https://www.superheroapi.com/api.php/940055144049516/655'
const APIURL11 = 'https://www.superheroapi.com/api.php/940055144049516/587'

getSuperHero1(APIURL)
getSuperHero1(APIURL1)
getSuperHero1(APIURL2)
getSuperHero1(APIURL3)
getSuperHero1(APIURL4)
getSuperHero1(APIURL5)
getSuperHero1(APIURL6)
getSuperHero1(APIURL7)
getSuperHero1(APIURL8)
getSuperHero1(APIURL9)
getSuperHero1(APIURL10)
getSuperHero1(APIURL11)

async function getSuperHero1(url){
  const resp = await fetch(url)
  const respData = await resp.json()

  console.log(respData)
 
  const combat = respData.powerstats.combat
  const durability = respData.powerstats.durability
  const intel = respData.powerstats.intelligence
  const power = respData.powerstats.power
  const speed = respData.powerstats.speed
  const strength = respData.powerstats.strength
  const heroStats = document.createElement('div')
  heroStats.classList.add('hero-container')
  heroStats.innerHTML = `

  <img class="hero-img" src="${respData.image.url}"/>

  <div class="overview">

    <p class="${getCombatStats(combat)}" style="width:${combat+'%'}">Combat: ${respData.powerstats.combat}</p>

    <p class="${getDurabilityStats(durability)}" style="width:${durability+'%'}">Durability: ${respData.powerstats.durability}</p>

    <p class="${getIntelStats(intel)}" style="width:${intel+'%'}">Intelligence: ${respData.powerstats.intelligence}</p>

    <p class="${getPowerStats(power)}" style="width:${power+'%'}">Power: ${respData.powerstats.power}</p>

    <p class="${getSpeedStats(speed)}" style="width:${speed+'%'}"> Speed: ${respData.powerstats.speed}</p>

    <p class="${getStrengthStats(strength)}" style="width:${strength+'%'}">Strength: ${respData.powerstats.strength}</p>

    <p>Name: ${respData.name}</p>

    <p>Place of Birth: ${respData.biography["place-of-birth"]}</p>

    <p>Gender: ${respData.appearance.gender}</p>

    <p>Height: ${respData.appearance.height[0]}</p>

    <p>Weight: ${respData.appearance.weight[1]}</p>

  </div
 

  `
  
  section.appendChild(heroStats)
 
  
}


function getCombatStats(stat){

  if(stat){

   return 'combat'

  }

}

function getDurabilityStats(stat){

  if(stat){
    
   return 'durability'

  }

}

function getIntelStats(stat){

  if(stat){

   return 'intel'

  }

}

function getPowerStats(stat){

  if(stat){

   return 'power'

  }

}

function getSpeedStats(stat){

  if(stat){
   
   return 'speed'

  }

}


function getStrengthStats(stat){

  if(stat){

   return 'strength'
   
  }

}


