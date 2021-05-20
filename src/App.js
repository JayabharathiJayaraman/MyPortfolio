import logo from './logo.svg';
import './App.css';
import image from './Image/image.jpg';

function App() {
  return (
    <>
      <div class="navbar">
        <a href="#utbildning">Utbildning</a>
        <a href="#arbetslivserfarenhet">Arbetslivserfarenhet</a>
        <a href="#kompetenser">Kompetenser</a>
        <a href="#github">Github</a>
        <a href="#linkedIn">LinkedIn</a>
        <a href="#kontakt">Kontakt</a>
      </div>
      <div class="row">
        <div class="side">
          <img src={image} width="200" height="200"></img>
          <br /> <br />
          <h2>PROFIL</h2><br />
          <p>Som person arbetar jag noggrant och strukturerat. Jag är positiv,flexibel, snabb inlärare och lätt
                att arbeta med. Från professionell front har jag arbetslivserfarenhet på cirka 2 år i Java och Oracle som utvecklare.</p>
          <br /> <br />
          <h2 id="github">EGNA PROJEKT</h2>
          <a href="https://github.com/JayabharathiJayaraman/QuizApp">QuizApp</a><br />
          <a href="https://github.com/rchorngren/octochat">ChatApp</a><br />
          <a href="https://github.com/Jayabharathi Jayaraman/ThreeInRow">Treirad</a><br />
          <a href="https://github.com/ghanavinodh ini/ShoppingListApp">ShoppingListApp</a><br />
          <br /> <br />
          <h2 id="kontakt">KONTAKT</h2>
          <h3>Telefon:</h3>
          <p>+46 709 137 434</p><br />
          <h3>E-Post:</h3>
          <p>jayabharathi2901@gmail.com</p><br />
          <h3 id="linkedIn">LinkedIn:</h3>
          <a href="https://www.linkedin.com/in/jayabharathi-jayaraman-36b100110/">Länk till LinkedIn</a>
          <br /> <br /> <br />
          <h2>SPRÅKKUNSKAPER</h2>
          <ul>
            <li> Tamil (Modersmål)</li>
            <li> Swedish</li>
            <li> English</li>
          </ul><br />
        </div>
        <div class="main">
          <br /><br /><br /><br />
          <h1>Jayabharathi Jayaraman</h1>
          <br /><br /><br /><br /><br />
          <h2 id="utbildning">UTBILDNING</h2>
          <hr />
          <h3>IT-Högskolan Stockholm</h3>
          <p><b>Titel:</b> Applikationsutvecklare till iPhone och Android <br /><b>Datum:</b> 17 Aug 2020 – 22 Maj 2022
            <br />Som apputvecklare utvecklar jag och underhåller appar för olika mobila enheter. Jag har lärt mig att självständigt bygga professionella mobilapplikationer med programmeringsspråken Kotlin Android och Swift. Jag har lärt mig att designa användarvänliga gränssnitt och vyer som passar både Android, iPhone och iPad. Jag har lärt mig att planera, genomföra projekt och se till att förväntade resultat uppnås. Jag har en teknisk kompetens men också den viktiga förståelsen för hur jag arbetar i projektform. Gjorde individuellt och gruppprojekt i Kotlin och Swift. Se länken till github för projekten. </p>
          <br /><br />
          <h2>ARBETSLIVSERFARENHET</h2>
          <hr />
          <h3> R Systems International Limited</h3>
          <p id="arbetslivserfarenhet"><b>Titel: </b>Utvecklare Datum: Dec2010 – Aug 2012
            <h4 class="programvara">PROJEKT I PROGRAMVARA:</h4>
            <b>Titel:</b> Australien Gas limited(AGL) och CITI Australia<br />
              Detta är ett användarbaserat webbapplikationsprojekt. Jag har arbetat med Java och Oracle-databasen för detta projekt. Jag har utvecklat en ny sida och har också ändrat befintliga sidor enligt kravspecifikationen med eclipse verktyg. Jag har också arbetat med att skriva orakel query och procedur.
              Jag var en viktig resurs för AGL-projektet. Som en viktig resurs var jag ansvarig för viktiga faser i projektet. Jag fick erfarenhet av att arbeta med SIT och produktionsmiljön. Jag har förbättrat och fått tekniskt förtroende för att arbeta med detta projekt. Jag var en direktkontaktresurs för kunden via samtal och e-post. Jag har arbetat från startfasen till slutet av detta projekt.</p>
          <br /><br />
          <h2>KOMPETENSER/KVALIFIKATIONER</h2>
          <hr />
          <p id="kompetenser"><b>Språk:</b> Kotlin, Swift, SwiftUI, HTML, CSS, JS<br /><b>Databas:</b> Room, Firebase <br /> <b>Verktyg: </b>Android Studio, Xcode <br /><b>OS:</b> Ios, Windows <br />
            Github
            </p>
        </div>
      </div>
    </>
  );
}

export default App;
