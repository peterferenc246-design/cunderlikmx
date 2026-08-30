import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const copy = {
  sk: {
    nav: ["Domov", "Škola", "Kempy", "O Emilovi", "Kontakt"],
    eyebrow: "Slovensko · Taliansko · Motokros pre každého",
    title: "Jazdi istejšie. Uč sa bezpečne. Nájdi svoju MX partiu.",
    intro: "Cunderlik MX Academy je miesto pre prvé metre na trati, lepšiu techniku, spoločné kempy a priateľstvá, ktoré zostanú aj po poslednom kole.",
    primary: "Chcem sa prihlásiť", secondary: "Pozrieť kempy",
    stats: [["72 rokov", "skúseností a vášne pre MX"], ["SK + IT", "tréningy a kempy"], ["Malé skupiny", "viac času pre každého"]],
    schoolTitle: "MX škola bez stresu", schoolText: "Začíname od základov a postupne pridávame istotu, rýchlosť a techniku. Každý jazdec dostane priestor, jasné pokyny a rešpekt k svojmu tempu.",
    cards: [["Pre začiatočníkov", "Postoj na motorke, plyn, brzdenie, rozjazd, zatáčanie a bezpečné návyky."], ["Technika jazdy", "Stopy v zákrutách, práca s telom, štarty, malé skoky a čítanie trate."], ["Individuálny tréning", "Tréning prispôsobený veku, skúsenostiam, motorke a osobnému cieľu jazdca."]],
    campTitle: "Kempy, zážitky a ľudia", campText: "Motokrosový kemp je viac než tréning: jazda, spoločné jedlo, technické tipy, výlety a komunita ľudí, ktorí motokrosom žijú.",
    campItems: [["Víkendový MX kemp", "Pre deti, juniorov aj hobby jazdcov. Tréning, servisné rady a pohodová partia."], ["Slovensko", "Termíny pri slovenských tratiach — ideálne na prvé kempy a pravidelné tréningy."], ["Taliansko", "Budúce kempy pod talianskym slnkom s jazdením, cestovaním a MX atmosférou."]],
    aboutTitle: "Emil Čunderlík", aboutText: "Aktívny veteránsky jazdec, ktorý chce odovzdávať skúsenosti ďalšej generácii. Bez veľkých rečí — priamo na trati, zrozumiteľne a s rešpektom k jazdcovi aj motorke.",
    quote: "Motokros je škola odvahy, trpezlivosti a rešpektu. Najlepšie sa jazdí v dobrej partii.",
    contactTitle: "Pridaj sa na trať", contactText: "Napíš, pre koho je tréning alebo kemp — vek, skúsenosti, motorka a krajina. Ozveme sa s vhodným termínom.",
    name: "Meno a priezvisko", email: "E-mail alebo telefón", message: "Pre koho je tréning a akú máš skúsenosť?", send: "Poslať nezáväzný dopyt", success: "Ďakujeme! Dopyt je pripravený — pre pripojenie odosielania doplň e-mailový formulár.",
    footer: "Cunderlik MX Academy · Motokrosová škola, kempy a komunita"
  },
  it: {
    nav: ["Home", "Scuola", "Camp", "Emil", "Contatti"],
    eyebrow: "Slovacchia · Italia · Motocross per tutti",
    title: "Guida con più sicurezza. Impara bene. Trova la tua squadra MX.",
    intro: "Cunderlik MX Academy è il luogo per i primi giri in pista, una tecnica migliore, camp condivisi e amicizie che restano dopo l'ultimo giro.",
    primary: "Iscriviti", secondary: "Scopri i camp",
    stats: [["72 anni", "di esperienza e passione MX"], ["SK + IT", "allenamenti e camp"], ["Piccoli gruppi", "più tempo per ogni pilota"]],
    schoolTitle: "Scuola MX senza stress", schoolText: "Partiamo dalle basi e costruiamo gradualmente sicurezza, velocità e tecnica. Ogni pilota riceve spazio, indicazioni chiare e rispetto per il proprio ritmo.",
    cards: [["Principianti", "Posizione, gas, freno, partenza, curve e abitudini sicure."], ["Tecnica di guida", "Traiettorie, corpo, partenze, piccoli salti e lettura della pista."], ["Allenamento privato", "Allenamento adattato a età, esperienza, moto e obiettivo personale."]],
    campTitle: "Camp, esperienze e persone", campText: "Un camp di motocross è più di un allenamento: guida, pasti insieme, consigli tecnici, viaggi e una comunità che vive il motocross.",
    campItems: [["Camp MX weekend", "Per bambini, junior e piloti hobby. Allenamento, consigli di assistenza e ottima compagnia."], ["Slovacchia", "Date sulle piste slovacche — perfette per i primi camp e allenamenti regolari."], ["Italia", "Futuri camp sotto il sole italiano con guida, viaggio e atmosfera MX."]],
    aboutTitle: "Emil Čunderlík", aboutText: "Pilota veterano attivo che desidera trasmettere la propria esperienza alla prossima generazione. Direttamente in pista, in modo chiaro e con rispetto per pilota e moto.",
    quote: "Il motocross insegna coraggio, pazienza e rispetto. Si guida meglio in una buona squadra.",
    contactTitle: "Unisciti in pista", contactText: "Scrivi per chi è l'allenamento o il camp — età, esperienza, moto e Paese. Ti risponderemo con una data adatta.",
    name: "Nome e cognome", email: "E-mail o telefono", message: "Per chi è l'allenamento e qual è la tua esperienza?", send: "Invia richiesta", success: "Grazie! La richiesta è pronta — collega un servizio e-mail per l'invio.",
    footer: "Cunderlik MX Academy · Scuola motocross, camp e comunità"
  }
};
function App(){
 const [lang,setLang]=useState("sk"), [sent,setSent]=useState(false); const t=copy[lang];
 const links=["home","school","camps","about","contact"];
 return <><header><a className="brand" href="#home">CUNDERLIK <i>MX</i><small>ACADEMY</small></a><nav>{t.nav.map((x,i)=><a key={x} href={'#'+links[i]}>{x}</a>)}</nav><div className="lang"><button className={lang==='sk'?'active':''} onClick={()=>setLang('sk')}>SK</button><span>/</span><button className={lang==='it'?'active':''} onClick={()=>setLang('it')}>IT</button></div></header>
 <main id="home"><section className="hero"><div className="grid"></div><div className="heroContent"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="lead">{t.intro}</p><div className="actions"><a className="btn primary" href="#contact">{t.primary} <b>→</b></a><a className="btn ghost" href="#camps">{t.secondary}</a></div></div><div className="bike" aria-hidden="true">MX</div></section>
 <section className="stats">{t.stats.map(([a,b])=><div key={a}><strong>{a}</strong><span>{b}</span></div>)}</section>
 <section id="school" className="section"><p className="kicker">MX ACADEMY</p><h2>{t.schoolTitle}</h2><p className="sectionLead">{t.schoolText}</p><div className="cards">{t.cards.map(([a,b],i)=><article className="card" key={a}><span>0{i+1}</span><h3>{a}</h3><p>{b}</p></article>)}</div></section>
 <section id="camps" className="section dark"><p className="kicker">MX CAMPS</p><h2>{t.campTitle}</h2><p className="sectionLead">{t.campText}</p><div className="campGrid">{t.campItems.map(([a,b],i)=><article key={a}><div className={'campPhoto p'+i}>✦</div><h3>{a}</h3><p>{b}</p><a href="#contact">{t.primary} →</a></article>)}</div></section>
 <section id="about" className="about"><div className="portrait"><div>EMIL<br/><small>ČUNDERLÍK</small></div></div><div><p className="kicker">VETERAN RIDER · MENTOR</p><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><blockquote>“{t.quote}”</blockquote></div></section>
 <section id="contact" className="contact"><p className="kicker">KONTAKT / CONTATTI</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><form onSubmit={e=>{e.preventDefault();setSent(true)}}><input required placeholder={t.name}/><input required placeholder={t.email}/><textarea required placeholder={t.message}></textarea><button className="btn primary">{t.send} <b>→</b></button></form>{sent&&<p className="success">{t.success}</p>}</section></main><footer><span>{t.footer}</span><span>© {new Date().getFullYear()} Cunderlik MX</span></footer></>}
createRoot(document.getElementById("root")).render(<App/>);
