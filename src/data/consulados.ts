export interface Consulado {
  country: string;
  city: string;
  address: string;
  phone?: string;
  email?: string;
  hours?: string;
  type: "embajada" | "consulado";
}

export const consulados: Consulado[] = [
  {country:"Alemania (Afganist\u00e1n referencia)",city:"Guadalajara",address:"Calle 7 No. 319, Colonia Ferrocarril, 44440 Guadalajara",phone:"",email:"guadalajara@hk-diplo.de",hours:"Lunes a viernes, 10:00 \u2013 14:00 hrs.",type:"embajada"},
  {country:"B\u00e9lgica",city:"Guadalajara",address:"Privada de la Nogalera #11, Col. Las Ca\u00f1adas, C.P.45132, Zapopan, Jalisco",phone:"(33) 3685-0402",email:"consubelgdl@prodigy.net.mx",hours:"",type:"embajada"},
  {country:"Brasil",city:"Guadalajara",address:"Av. Vallarta 1222, Col. Americana, CP. 44160, Guadalajara, Jalisco",phone:"(33) 3825 9527 / (33) 3826 6444",email:"yasmin@jgs.com.mx",hours:"",type:"consulado"},
  {country:"Canad\u00e1",city:"Guadalajara",address:"World Trade Center, Av. Mariano Otero 1249, Piso 8, Torre Pac\u00edfico, Col. Rinconada del Bosque, C.P. 44530, Guadalajara",phone:"(333) 671-4740",email:"gjara@international.gc.ca",hours:"",type:"embajada"},
  {country:"Chipre",city:"Guadalajara",address:"Paseo de las Ardillas No. 391, Col. Las Ardillas, Bugambilias, C.P. 45238, Zapopan",phone:"(333) 612-9978",email:"georgen@qualatex.com",hours:"",type:"embajada"},
  {country:"Colombia",city:"Guadalajara",address:"Avenida Acueducto No. 4851, Piso 10, Colonia Puerta De Hierro, CP. 45116, Zapopan, Jalisco",phone:"(33) 4737 5700 / Emergencias: (33) 1990 4857",email:"cguadalajara@cancilleria.gov.co",hours:"",type:"consulado"},
  {country:"Dinamarca",city:"Guadalajara",address:"Av. Patria 2644, Planta Alta, Col. Agraria, C.P. 44667, Guadalajara, Jalisco",phone:"(333) 615-0566 / Emergencias: (333) 633-1972",email:"patyes@corporativomb.com",hours:"",type:"embajada"},
  {country:"Estados Unidos",city:"Guadalajara",address:"Progreso 175, Col. Americana, Sector Ju\u00e1rez, C.P. 44160, Guadalajara, Jalisco",phone:"(33) 3268-2145",email:"",hours:"",type:"embajada"},
  {country:"Estados Unidos (Puerto Vallarta)",city:"Puerto Vallarta",address:"Paseo de Los Cocoteros 1, Local 4, Int. 17, C.P. 63732, Nuevo Vallarta, Nayarit",phone:"(322) 297-7224 / (322) 223-3301",email:"consularagentpvr@prodigy.net.mx",hours:"",type:"consulado"},
  {country:"El Salvador",city:"Guadalajara",address:"Plaza Exhimoda, Av. Ignacio L. Vallarta 3233, Vallarta Poniente, CP. 44110, Local 12-F, Guadalajara",phone:"(33) 3685 9415 / Emergencias: (33) 3028 2153",email:"consuladosv-guadalajaramx@rree.gob.sv",hours:"",type:"consulado"},
  {country:"Federaci\u00f3n Rusa",city:"Guadalajara",address:"Vista al Amanecer 1835, Col. Cerro del Tesoro, C.P. 44440, Tlaquepaque",phone:"(333) 135-1055",email:"nuemp@megared.com.mx",hours:"",type:"embajada"},
  {country:"Filipinas",city:"Guadalajara",address:"Justo Sierra 2487, Col. Ladr\u00f3n de Guevara, C.P. 44680, Guadalajara",phone:"(333) 630-0312 / Emergencias: (33) 3615-8219",email:"marthamejian@hotmail.com",hours:"",type:"embajada"},
  {country:"Francia",city:"Guadalajara",address:"L\u00f3pez Mateos 484 Nte, Col. Ladr\u00f3n de Guevara, C.P. 44600, Guadalajara",phone:"01.33.3616.5516",email:"agence_gdj@yahoo.com.fr",hours:"",type:"embajada"},
  {country:"Guatemala",city:"Guadalajara",address:"Mango 1440-A, Col. Fresno, C.P. 44500, Guadalajara",phone:"(33) 3811-1503 / Emergencias: 333.576.9340",email:"cruza@prodigy.net.mx",hours:"",type:"embajada"},
  {country:"Hait\u00ed",city:"Guadalajara",address:"Avenida Federalismo Norte No. 3750, Colonia Atemajac del Valle, CP. 45190, Zapopan, Jalisco",phone:"(333) 819-3502",email:"consuladodehaitigdl@gmail.com",hours:"",type:"consulado"},
  {country:"Hungr\u00eda",city:"Guadalajara",address:"Calle 2 Ca\u00f1as 3047, Col. La Nogalera, C.P. 44470, Guadalajara",phone:"(333) 881-1126",email:"consulhugria@yahoo.com.mx",hours:"",type:"embajada"},
  {country:"Italia",city:"Guadalajara",address:"Av. L\u00f3pez Mateos Norte 790, piso 1, Fracc. Ladr\u00f3n de Guevara, C.P. 44680, Guadalajara",phone:"(333) 616-1700 / (333) 616-9560",email:"consolato.guadalajara@esteri.it",hours:"",type:"embajada"},
  {country:"L\u00edbano",city:"Guadalajara",address:"Calle San Juan 155, Col. El Campanario, C.P. 45234, Guadalajara",phone:"(333) 684-1414",email:"",hours:"",type:"embajada"},
  {country:"Lituania",city:"Guadalajara",address:"Av. M\u00e9xico 2776, Col. Circunvalaci\u00f3n Vallarta, C.P. 44680, Guadalajara",phone:"(333) 122-9850 Ext. 112",email:"sceballosg@grupocgmaderas.com",hours:"",type:"embajada"},
  {country:"Nicaragua",city:"Guadalajara",address:"Av. La Rosa 46, Col. Chapalita, CP 45040, Zapopan, Jalisco",phone:"(33) 2265 1113",email:"consulnicjal@hotmail.com",hours:"",type:"consulado"},
  {country:"Pa\u00edses Bajos",city:"Guadalajara",address:"Paseo del Bosque 203, Condominio Santa Anita, C.P. 45645, Tlajomulco de Z\u00fa\u00f1iga",phone:"(333) 655-0269 / Emergencias: (331) 139-5657",email:"consulholandagdl@yahoo.com.mx",hours:"",type:"embajada"},
  {country:"Panam\u00e1",city:"Guadalajara",address:"Av. Moctezuma 4489, Col. Jardines del Sol, Zapopan, Jalisco",phone:"(33) 3631-3278 / Emergencias: (477) 115-7246",email:"mluna@mire.gob.pa",hours:"",type:"embajada"},
  {country:"Paraguay",city:"Guadalajara",address:"Edificio Office Smart, Av. Ni\u00f1os H\u00e9roes 2285, Int. 103, Col. Moderna, C.P. 44190, Guadalajara",phone:"(333) 615-2239",email:"paraguaygdlmex@aol.com",hours:"",type:"embajada"},
  {country:"Per\u00fa",city:"Guadalajara",address:"Ostia 2750 Ph, Col. Lomas de Guevara, C.P. 44657, Guadalajara",phone:"(333) 641-9787 / (333) 839-1039",email:"consuladoperu@elbosque.com.mx",hours:"",type:"embajada"},
  {country:"Polonia",city:"Guadalajara",address:"Aurelio Ortega 764, Col. Seattle, C.P. 45150, Zapopan",phone:"(333) 836-0111 / Emergencias: (333) 808-8500",email:"jmgva@gvi.la",hours:"",type:"embajada"},
  {country:"Portugal",city:"Guadalajara",address:"Av. Vallarta 4043-R, Fracc. Don Bosco Vallarta, C.P. 45049, Zapopan, Jalisco",phone:"",email:"guadalajara@honrep.ch",hours:"",type:"embajada"},
  {country:"Rep\u00fablica Checa",city:"Guadalajara",address:"Calle L\u00f3pez Cotilla 1127, Col. Americana, C.P. 44160, Guadalajara",phone:"(333) 827-2354 / Emergencias: (333) 490-0295",email:"ynechyba@prodigy.net.mx",hours:"",type:"embajada"},
  {country:"Rep\u00fablica Dominicana",city:"Guadalajara",address:"Calle Col\u00f3n 632, Sector Ju\u00e1rez, C.P. 44180, Guadalajara",phone:"(333) 616-5478",email:"garibi98@yahoo.com",hours:"",type:"consulado"},
  {country:"Rumania",city:"Guadalajara",address:"Torre Cube, Blvd. Puerta de Hierro 5210, piso 12, C.P. 45116, Zapopan, Jalisco",phone:"(333) 343-5100 / (333) 676-0032",email:"consulrumania@grupocube.com",hours:"",type:"embajada"},
  {country:"Senegal",city:"Guadalajara",address:"Ave. Eulogio Parra N\u00b02795, Edificio Beta, Interior 206, Col. Prados Providencia, CP. 44670, Guadalajara",phone:"(33) 3110-6217",email:"citasconsulado.sn@gmail.com",hours:"",type:"embajada"},
  {country:"Sud\u00e1frica",city:"Guadalajara",address:"Mexicaltzingo 1665, Col. Moderna, C.P. 44100, Guadalajara",phone:"(333) 825-7570 / (333) 825-8086",email:"jcg@grupoeco.com",hours:"",type:"embajada"},
  {country:"Suecia",city:"Guadalajara",address:"Calle Toltecas #3500 Interior 1, Fracc. Monraz, C.P 44670, Guadalajara",phone:"(333) 8421-0921 / Emergencias: (338) 421-1866",email:"info@consuladogdl.se",hours:"",type:"embajada"},
  {country:"Suiza",city:"Guadalajara",address:"Edificio LOB, Camino al ITESO 8851, 45609, Tlaquepaque, Guadalajara",phone:"+52 331 410-3827",email:"guadalajara@honrep.ch",hours:"",type:"embajada"},
];
