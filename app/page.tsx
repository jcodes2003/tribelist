"use client";
import React, { useState } from "react";

function App() {
  type Tab = "Freshmen" | "Sophomores" | "Juniors" | "Seniors";

  const [activeTab, setActiveTab] = useState<Tab>("Freshmen");
  const [query, setQuery] = useState<string>("");
  const [links, setLinks] = useState<Record<string, string>>({});
  const [editing, setEditing] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState<string>("");
  const [inviteLink, setInviteLink] = useState<string>("\n");

  // load inviteLink from localStorage on first render
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("inviteLink");
      if (saved) setInviteLink(saved);
    } catch (e) {
      // ignore
    }
  }, []);

  // persist inviteLink
  React.useEffect(() => {
    try {
      if (inviteLink) localStorage.setItem("inviteLink", inviteLink);
      else localStorage.removeItem("inviteLink");
    } catch (e) {
      // ignore
    }
  }, [inviteLink]);

  const freshmen = [
    "ABALDE, JELLIAN MAHUNYAG",
    "ACENAS, JOSHUA JAMES PACANA",
    "AMBA, JON DENVER SALOMON",
    "AMPONG, ADRIAN MELAUR",
    "ATLAO, KYLE YBAÑEZ",
    "BAHIAN, JASPHER BALASABAS",
    "BALBON, SAMMUEL JAMES VERGARA",
    "BOLANIO, MARIA ELIZABETH MUSA",
    "BUCIO, KIRLYN JADE LABO",
    "CALUSTRE, JUNE MICHAEL POSADAS",
    "CAMILOTES, ELDRIDGE BERNARD CAPILI",
    "CASIDAR, JOHARY PANGO",
    "DESOYO, CHRISTIAN JAMES PELIGRINO",
    "DIGAL, JETHRO ADAM CARANYAGAN",
    "DULANAS, FERD DENVER ORMICHIGOS",
    "EDORIA, JONMAR SACAY",
    "ESPINOLA, BRYAN CHRISTOPHER VALLECERA",
    "ESTOMATA, CRIS RAPHAEL PELIGRO",
    "FELISAN, STEPHANIE MAE AQUIATAN",
    "HERRERA, CYNTHIA DE GUZMAN",
    "IGOT, ADRIAN FERNANDEZ",
    "JACALAN, FRANCIS MANGADLAO",
    "JUMAWAN, ROY DELA RAMA",
    "JUSAY, JOHN ELLY GUMAGABAN",
    "LABUNTOG, EZEKEIL BALILI",
    "LADLAD, SHUN MIKEL BACLAYO",
    "LADRA, STEPHANIE FAITH TALAO",
    "LAUS, JUSTEN CAPURAS",
    "LOBITAÑA, JHON MICCO",
    "MABITAG, RONALD PADERAN",
    "MACAPAYAG, KISHA TOMTOM",
    "MOLO, KIP KIENO ECONAR",
    "ORQUILLAS, CHRISTINE ANGEL DURERO",
    "PADER, ANGELO MORILLA",
    "PARAGOSO, JHAMER BUMATAY",
    "PAT, MICOH JHON LANUTAN",
    "PLACA, JADE LOPEZ",
    "PULLOS, CHIQUEZYLAH",
    "QUEJOY, JEFFER JAN SONQUIPAL",
    "REBUYON, ERVEN DENOSTA",
    "RIVERA, HONEY GRACE BUENO",
    "ROBLE, CHRYSLER JOHN MIÑOZA",
    "SERATO, ANTONETTE HIAN",
    "SIMBAJON, SAM DENVER PIZON",
    "SULTAN, JEVY GUMBAN",
    "SUMAYLO, JASMINE SUMALINOG",
    "TACUGUE, JILLIAN FAITH VILLANUEVA",
    "TUMAPON, NEIL PATRICK LABASTIDA",
    "UNDURAN, SYRA ECAT",
    "VILLANUEVA, SILVER KIAN SALIGUMBA",
    "VITERBO, XYRILE IVAN BUTAL",
    "YU, BENEDICT HAMTIG",
    "ZAFRA, JUVYLLE ABRAGAN",
    "ABECIA, JOHN TOVEN PANGANIBAN",
    "ALABA, CLENT DARYLLE LUMBAY",
    "ALOMBRO, JOSEPH HANDEL BERMAS",
    "APOR, VENICE BELLE LUNA",
    "ARAGON, ANGEL",
    "BAHADE, KURTCHEYNE MAY LAGO",
    "BALATERO, ACE QUIJANO",
    "BARRIENTOS, CHRISTIAN",
    "BIDOY, JEBON ACE BALAMBAN",
    "CABALIDA, JOHN ALFERD ORNEJAS",
    "CABREROS, MICHAEL REYBEN ESTAFIA",
    "CABUGATAN, HOWARD DWAINE SANDIGAN",
    "CALLAO, ASHLEY JAMES PANJAO",
    "CAPIN, ANGEL MAE PANGANORON",
    "CASPE, JURIZTINE CABLINDA",
    "CHICO, WENDELL CANSAY",
    "COMING, MILDRED C",
    "DABLIO, JAMES CEDRIC MUEGO",
    "DACLAG, JOSUA BAGTASOS",
    "DACUP, AGOTINE JAMES LLAMSO",
    "DAITON, JUAN EMMANUEL PAGARAN",
    "DIMANG, AINA HADJIDAUD",
    "EMBALZADO, JULIUS CAESAR BUSTAMANTE",
    "EPONDOLAN, JOHN ANDREI NICDAO",
    "ESPINOSA, GABRYLLE QUINO",
    "EXCLAMADOR, CARL VINCENT AGUILAR",
    "GALARPE, JIA OTAW",
    "GIANAN, CHRIS ADRIAN QUIMANHAN",
    "GILIG, PRINCESS MAE SUGIAN",
    "IBARRA, GEOFF MANUEL TACULOD",
    "JAMPIT, BRIX HUNTER ZARATE",
    "JARAULA, CALEB BAYO",
    "JAUDIAN, JONATHAN CARIAS",
    "KILATON, BHONG SABALSA",
    "LAGRA, JOHN RICA GARCIA",
    "MACABODBOD, RYAN DAVE TARDE",
    "MARSAMOLO, SAMANTHA LENSAY PACUPIA",
    "MEDINA, ANGELO JAY BARCE",
    "MONTANO, DERICK MAGADA",
    "OCTAVIO, KLENT MANGLICMOT",
    "PALCO, VENICE SUGANOB",
    "PATAYO, KENNETH CRAZO",
    "PEREZ, DIAN SUMAIT",
    "PERGIS, TRISHA JANE CAILING",
    "RALAR, JONATHAN",
    "RELAMPAGOS, TJ BRIAN AMPAHAN",
    "ROSEL, KATE OBLINA",
    "SACAY, KEVIN JAY JAMPIT",
    "SALVAÑA, MIL JYPRUS ASENTISTA",
    "SAMPORNA, NATHALIE FAITH ALIA",
    "TAN, KLINT IVAN",
    "UBANAN, AJ LLOYD AGNES",
    "VELARDE, MARIELLE JOY RICALDE",
  ];

  const sophomores = [
    "ANGGA, RINIL JAN CARBONERO",
    "APOSTOL, CRISTIAN DAVE ABREZ",
    "BABAYSON, ROSHIEL GRACE AURIT",
    "BACASMOT, ISAACJAMES PIALAN",
    "BARILLO, JULAM VIC ADLAON",
    "BAS, DIANA MARIE SACOLINGGAN",
    "BAYAON, LESLIE ANNE",
    "BAYLOSIS, FROILAN REY BUGAY",
    "BELAYO, CLARK TOLENTINO",
    "BINASAG, JHONLLOYD ORIBE",
    "CABIGQUEZ, XYREX GEM SUDARIO",
    "CABILI, EDWARD B.",
    "CAILO, ALEXANDRA FAITH MAQUE",
    "CASAS, MARVEN REY MAGHANOY",
    "DALAUTA, CARL VINCENT DIANGO",
    "DELITO, JENNEATH CABANDAY",
    "DIESTA, JULE ANDREW MAHISTRADO",
    "DIGABE, KASSANDRA KATE EGAGAMAO",
    "DIZON, EZREIL JAMES PORGARILLAS",
    "ELISON, CEDRIC ELLARINA",
    "ESLIT, ANGELINE BALUCAN",
    "ESPERON, EMANUEL DAVE TORRALBA",
    "ESTRADA, CHRISTIAN DAVE SALOM",
    "FUENTES, JASON GURRO",
    "GALAGAR, BRENT C.J AGCOPRA",
    "IGNACIO, HEART NACAYTUNA",
    "INDOC, JHON PAUL SULINAY",
    "LEGASPI, NOELLY AMOR",
    "LLOBIA, CHRISTIAN UMASDANG",
    "LORONO, RHEALIZA JALAGAT",
    "LUMAHANG, DOCTORA ALEXA MERRY SAGALA",
    "LUMBAN, KATE CHRISTINE CUBAO",
    "LUMINDA, PHILIP LIBOGAN",
    "MAANDIG, MEDWIN SENDON",
    "MACABALE, HANNAH JEAN GALONO",
    "MADLOS, JOHN MARK OLARIO",
    "MAROHOM, HANNAH MARIE ROBLE",
    "OBLIOSCA, NILE CHRISTIAN TAN",
    "OLAERA, ALTHEA SHAIRA MAE SEVILLA",
    "PAIGNA, JUSIE MER AMOLO",
    "PALMARES, JERRY LORIGAS",
    "PARCIA, CHEMIE VILLA",
    "PEREZ, JOHN MICHAEL LADERA",
    "RIVERAL, BHEA MARIE ALTARIBA",
    "RUBIO, PRINCESS ALTHIA IGBALIC",
    "VALMORIA, CHRISTINE SALVALEON",
    "VILLALOBOS, MARY ZCALCY CABASAG",
    "VILLASTIQUE, MARY ROSE UBOD",
    "WAMINAL, SHAN CAÑETE",
    "YANGA, MECCAELLA THEFANEE SABUERO",
    "ANSING, KHYLA JANE CANTILLER",
    "ANSUNGAY, STEPHEN CHARLS ACLARACION",
    "ANTIDO, KIAN CARL BORGONIA",
    "BALINAS, BON JHOVE GICANA",
    "BANNISTER, JOEFREY PAKIS",
    "BARTE, VINCENT JOHN",
    "BUKHAMMAS, SAEED SAAD KHALIL MANSEGUIAO",
    "CAÑETE, JOSHUA ABUZO",
  ];

  const juniors = [
    "PACANA, SHANDY SEDON",
    "PACLAR, KENNETH QUIOYO",
    "PADERAN, DON REY GILIG",
    "PADLA III, EDWIN ALBASETE",
    "PAGALING, SANDARA JANE MABALE",
    "PAGKALINAWAN, CHRISTINE SHAYNE LAPLAP",
    "PAJE, CHRISTINE MAE FLORES",
    "PALMA, RAULLYN JOY DACLAN",
    "PALOMERAS, ANDRE Y.",
    "PANONG, SANDY JEAN AMPORINGUES",
    "PAO, JEOGER KIM ODCHIGUE",
    "PARAJES, JESSIE JAMES CASTINO",
    "PASIA, JAYCHELLE CANOMON",
    "PAUSAL, JANSHIEN CAHOY",
    "PERINO, VAN KYZER RANAY",
    "PIMENTEL, CHARLIE GIN ABSIN",
    "PIONAN, CHERRY JANE ARCAYENA",
    "PLAZA, CLINT DENZEL VILLANUEVA",
    "PORTRIAS, JOSH MARVIN PADABOC",
    "PORTUGAL, SHENNIELYN AGUILAR",
    "QUINTO, VINCENT NIEL DACLAG",
    "RAAGAS, KNIGHT HEZEKIAH BARCENA",
    "RABANAL, EDCHEL B.",
    "RAGASI, BRIAN D.",
    "RAL, LEOJHAY GAVIOLA",
    "RALUTO, ANDREW JONES PELIGRO",
    "RAMOS, RORRY AMPUYAS",
    "RAOTRAOT, ASHLEY VALCORZA",
  ];

  const seniors = [
    "BALDOZA, RAZIEL JADE DIAPANA",
    "BUTAYA, CHRISTIAN COLIPANO",
    "MACUSE, C JAY LOGONG",
    "NERONA, PAUL ANDREW LARA",
    "IROC, NATHANIEL BUTANAS",
    "VERSOZA, IVAN KY LACHICA",
    "LACHECA, BEA YSABEL MACALUA",
    "JABULAN, MAE NUÑEZ",
    "MACARIO, MEL ANGELO SABIDO",
    "IGNALIG, KITTIM TANHAGA",
    "BALIBAGON, MARY SOPHIA RANA",
    "SACAY, GRIZON RUSSELL BANLAS",
  ];

  const lists: Record<Tab, string[]> = {
    Freshmen: freshmen,
    Sophomores: sophomores,
    Juniors: juniors,
    Seniors: seniors,
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Directory</h1>

      {/* Invitation link input */}
      <div className="mb-6">
        <label className="block mb-2 font-bold text-lg">Invitation Link</label>
        <label className="block mb-2 font-medium">If you find your name in this list,
          please click the link below to accept your invitation.
        </label>
        {inviteLink ? (
          <div>
            <a
              href={inviteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://m.me/j/AbZo2ZDq4rmMwXBQ/
            </a>
          </div>
        ) : (
          <div className="text-gray-500">No invitation link available.</div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {(Object.keys(lists) as Tab[]).map((year: Tab) => (
          <button
            key={year}
            onClick={() => setActiveTab(year)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === year
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Search + List Display */}
      <div>
        <h2 className="text-xl font-semibold mb-2">{activeTab}</h2>
        <div className="mb-3 flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${activeTab}...`}
            className="flex-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => setQuery("")}
            className="px-3 py-2 bg-gray-200 rounded-md text-sm"
            aria-label="Clear search"
          >
            Clear
          </button>
        </div>

        <ul className="list-decimal list-inside space-y-1">
          {lists[activeTab]
            .filter((name) => name.toLowerCase().includes(query.toLowerCase()))
            .map((name: string, index: number) => {
              if (!query) {
                return (
                  <li key={index} className="text-sm">
                    {name}
                  </li>
                );
              }

              // simple highlight: split around the matched substring (case-insensitive)
              const lcName = name.toLowerCase();
              const lcQuery = query.toLowerCase();
              const start = lcName.indexOf(lcQuery);

              if (start === -1) {
                return (
                  <li key={index} className="text-sm">
                    {name}
                  </li>
                );
              }

              const before = name.slice(0, start);
              const match = name.slice(start, start + query.length);
              const after = name.slice(start + query.length);

              return (
                <li
                  key={index}
                  className="text-sm flex items-center justify-between gap-3"
                >
                  <div>
                    {before}
                    <span className="bg-yellow-200 px-1">{match}</span>
                    {after}
                  </div>

                  <div className="flex items-center gap-2">
                    {links[name] && (
                      <button
                        onClick={() => window.open(links[name], "_blank")}
                        className="text-blue-600 underline text-sm"
                      >
                        Open
                      </button>
                    )}

                    {editing === name ? (
                      <div className="flex items-center gap-2">
                        <input
                          value={editingValue}
                          onChange={(e) => setEditingValue(e.target.value)}
                          placeholder="https://example.com"
                          className="px-2 py-1 border rounded-md text-sm"
                        />
                        <button
                          onClick={() => {
                            setLinks((s) => ({ ...s, [name]: editingValue }));
                            setEditing(null);
                            setEditingValue("");
                          }}
                          className="px-2 py-1 bg-blue-600 text-white rounded-md text-sm"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => {
                            setEditing(null);
                            setEditingValue("");
                          }}
                          className="px-2 py-1 bg-gray-200 rounded-md text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setEditing(name);
                          setEditingValue(links[name] ?? "");
                        }}
                        className="px-2 py-1 bg-gray-100 rounded-md text-sm"
                      >
                        {links[name] ? "Edit link" : "Add link"}
                      </button>
                    )}
                  </div>
                </li>
              );
            })}

          {lists[activeTab].filter((name) =>
            name.toLowerCase().includes(query.toLowerCase())
          ).length === 0 && (
            <li className="text-sm text-gray-500">No results found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
